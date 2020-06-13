import {
	IExpression,
	IJSONExpressionData,
	execJSONExpression,
} from "../../jsonlogic";
import { IFlowReturnType, IFlowOptions } from "../index";
import get from "lodash/get";
import { IFlowContext } from "../index";
import { IAtom, execPrimitiveFlow } from "./flowatoms";

export type IObjectIfBlock = {
	type: "if";
	blockId?: string;
	cond: IExpression;
	true: IObjectProperty[];
	false?: IObjectProperty[];
};
export type IObjectSwitchBlock = {
	type: "switch";
	blockId?: string;
	cond: IExpression;
	cases: {
		[key: string]: IObjectProperty[];
	};
};

type IObjectProperty = (IAtom | IObjectFlow) & {
	key: string;
	ignoreKey?: IExpression;
};
export type IObjectFlow = {
	type: "object";
	properties: (IObjectProperty | IObjectIfBlock | IObjectSwitchBlock)[];
};

export const execObjectFlow = <IData, IContext>(
	flow: IObjectFlow,
	data: IJSONExpressionData<IData, IContext>,
	flowContext: IFlowContext,
	options?: IFlowOptions
): IFlowReturnType => {
	const { properties } = flow;
	let errorStore: IFlowReturnType = { errors: [], isValid: true };
	for (let config of properties) {
		if (config.type === "switch") {
			const cond = execJSONExpression(config.cond, data) as string;
			const flow = config.cases[cond];
			if (flow) {
				const result = execObjectFlow(
					{ type: "object", properties: flow },
					data,
					flowContext,
					options
				);
				if (!result.isValid) {
					if (options?.aggressive) {
						errorStore = {
							isValid: false,
							errors: [...errorStore.errors, ...result.errors],
						};
					} else {
						return result;
					}
				}
			}
			continue;
		}
		if (config.type === "if") {
			const cond = !!execJSONExpression(config.cond, data);
			const flow = cond ? config.true : config.false;
			if (flow) {
				const result = execObjectFlow(
					{ type: "object", properties: flow },
					data,
					flowContext,
					options
				);
				if (!result.isValid) {
					if (options?.aggressive) {
						errorStore = {
							isValid: false,
							errors: [...errorStore.errors, ...result.errors],
						};
					} else {
						return result;
					}
				}
			}
			continue;
		}
		const { ignoreKey, key } = config;
		if (ignoreKey) {
			const ignore = !!execJSONExpression(ignoreKey, data);
			if (ignore) continue;
		}
		const refPath = [...flowContext.refPath, key];
		switch (config.type) {
			case "object": {
				return execObjectFlow(config, data, {
					...flowContext,
					refPath,
				});
			}

			// Default specifies a primitive value type!
			default: {
				const result = execPrimitiveFlow(
					config,
					{ ...data, ref: get(data.data, key) },
					{
						...flowContext,
						refPath,
					}
				);
				if (!result.isValid) {
					if (options?.aggressive) {
						// If aggressive, collect all errors!
						errorStore = {
							isValid: false,
							errors: [...errorStore.errors, ...result.errors],
						};
						continue;
					}
					return result;
				}
				break;
			}
		}
	}
	return errorStore;
};