_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"xu/r":function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return n}));var t=r("dRtc"),s=r("8o++"),o=r("ERkP"),l=r.n(o).a.createElement,i=Object(t.flowSchema)({type:"object",properties:[{key:"personalDetails",type:"object",properties:[{type:"string",key:"name",validations:[{logic:[">=",["str:len",["$ref"]],3],err:"Length should be minimum of 3."}],label:"Name"},{key:"somuraju",type:"string",label:"Somu Raju"},{key:"password",type:"string",validations:[{logic:[">=",["str:len",["$ref"]],3],err:"Password should be minimum of 3 character length."}],label:"Password",uiType:"password"},{key:"confirmPassword",type:"string",validations:[{logic:["===",["$ref"],["$data","personalDetails.password"]],err:"Password and confirm password should match."}],label:"Confirm Password",uiType:"password"},{key:"gender",type:"enum",items:[{value:"male",label:"Male"},{value:"female",label:"Female"}],label:"Gender",uiType:"radio"},{key:"array",type:"array",label:"Array",itemSchema:{type:"object",properties:[{key:"subarray",type:"array",label:"SubArray",itemSchema:{type:"object",properties:[{key:"subobj",type:"string",label:"Sub Object",isRequired:!0,errMsgs:{required:"Value for subobj is required!"}}]}}]}}]},{key:"acceptTerms",type:"boolean",validations:[{logic:["===",["$ref"],!0],err:"Please accept terms and conditions"}],label:"Accept terms and conditions"}]});function n(){var e=Object(o.useState)({}),a=(e[0],e[1]);return l(t.FlowJVForm,{schema:i,onSubmit:function(e){a(e)},initialData:{personalDetails:{name:"Kishore",password:"hello",confirmPassword:"hello",gender:"male",array:[{subarray:[{},{},{}]}]}}},l("div",{className:"mx-auto flex justify-center"},l("div",{className:"bg-gray-100 p-5 shadow-2xl max-w-md w-full"},l("h1",{className:"text-2xl"},"Form!"),l(s.AutoFlow,{path:"personalDetails"}),l(s.AutoFlow,{path:"acceptTerms"}),l(t.SubmitButton,null)),l("div",{className:"w-full max-w-md"},l(s.FormSpy,null,(function(e){var a=e.data;return l("pre",{className:"mt-3 p-4 bg-gray-500 text-white"},JSON.stringify(a,null,"  "))})))))}},ynRX:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return r("xu/r")}])}},[["ynRX",0,1,2,3]]]);