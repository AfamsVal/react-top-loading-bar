(this["webpackJsonpreact-top-loading-bar-example"]=this["webpackJsonpreact-top-loading-bar-example"]||[]).push([[0],{2:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);a(2);var r=a(0),n=a.n(r),o=a(3),l=a.n(o),c=a(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s=function(){};function u(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var d=Object(r.forwardRef)((function(e,t){var a=e.progress,n=e.height,o=void 0===n?2:n,l=e.className,c=void 0===l?"":l,d=e.color,b=void 0===d?"red":d,m=e.background,f=void 0===m?"transparent":m,p=e.onLoaderFinished,h=e.transitionTime,g=void 0===h?300:h,v=e.loaderSpeed,E=void 0===v?500:v,k=e.waitingTime,j=void 0===k?1e3:k,w=e.shadow,O=void 0===w||w,S=Object(r.useState)(0),x=S[0],y=S[1],C=Object(r.useState)({active:!1,startingValue:20,refreshRate:1e3}),N=C[0],R=C[1],L=Object(r.useState)(!1),T=L[0],B=L[1],F=Object(r.useState)({active:!1,value:20}),I=F[0],M=F[1],P={position:"fixed",top:0,left:0,height:o,background:f,zIndex:99999999999,width:"100%"},Y={boxShadow:"0 0 10px "+b+", 0 0 10px "+b,width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all "+E+"ms ease",transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},z=Object(r.useState)({height:"100%",background:b,transition:"all "+E+"ms ease",width:"0%"}),A=z[0],G=z[1],H=Object(r.useState)(Y),J=H[0],V=H[1];Object(r.useImperativeHandle)(t,(function(){return{continuousStart:function(e,t){if(void 0===t&&(t=1e3),!I.active)if(T)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var a=e||u(10,20);R({active:!0,refreshRate:t,startingValue:e}),y(a),q(a)}},staticStart:function(e){if(!N.active)if(T)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var t=e||u(30,50);M({active:!0,value:t}),y(t),q(t)}},complete:function(){T?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(y(100),q(100))}}})),Object(r.useEffect)((function(){G(i({},A,{background:b})),V(i({},J,{boxShadow:"0 0 10px "+b+", 0 0 5px "+b}))}),[b]),Object(r.useEffect)((function(){if(t){if(t&&void 0!==a)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');q(x),B(!1)}else a&&q(a),B(!0)}),[a]);var W,_,K,q=function e(t){t>=100?(G(i({},A,{width:"100%"})),O&&V(i({},J,{left:t-10+"%"})),setTimeout((function(){G(i({},A,{opacity:0,width:"100%",transition:"all "+g+"ms ease-out",color:b})),setTimeout((function(){N.active&&(R(i({},N,{active:!1})),y(0),e(0)),I.active&&(M(i({},I,{active:!1})),y(0),e(0)),p&&p(),y(0),e(0)}),g)}),j)):(G((function(e){return i({},e,{width:t+"%",opacity:1,transition:t>0?"all "+E+"ms ease":""})})),O&&V(i({},J,{left:t-5.5+"%",transition:t>0?"all "+E+"ms ease":""})))};return W=function(){var e=u(10,20);x+e<90&&(y(x+e),q(x+e))},_=N.active?N.refreshRate:null,K=Object(r.useRef)(s),Object(r.useEffect)((function(){K.current=W})),Object(r.useEffect)((function(){}),[void 0]),Object(r.useEffect)((function(){if(null!==_&&!1!==_){var e=setInterval((function(){return K.current()}),_);return function(){return clearInterval(e)}}}),[_]),Object(r.createElement)("div",{className:c,style:P},Object(r.createElement)("div",{style:A},O?Object(r.createElement)("div",{style:J}):null))}));var b=a(4),m=a.n(b);var f=()=>{const e=Object(r.useState)(0),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)("#f11946"),i=Object(c.a)(l,2),s=i[0],u=i[1],b=Object(r.useState)("red"),f=Object(c.a)(b,2),p=f[0],h=f[1],g=Object(r.useRef)(null),v=Object(r.useState)(!1),E=Object(c.a)(v,2),k=E[0],j=E[1],w=e=>{navigator.clipboard.writeText(e).then(()=>{window.alert("Copied To Clipboard")})};return n.a.createElement("div",null,k?n.a.createElement(d,{color:s,ref:g,shadow:!0}):n.a.createElement(d,{color:s,progress:a,onLoaderFinished:()=>o(0)}),n.a.createElement("div",{className:"text-container"},n.a.createElement("h1",{className:"header"},"react-top-loading-bar"),n.a.createElement("div",{className:"inline"},n.a.createElement("code",{className:"package-install-text",onClick:()=>w("npm i react-top-loading-bar")},"npm i react-top-loading-bar"),n.a.createElement("br",null),"or",n.a.createElement("br",null),n.a.createElement("code",{className:"package-install-text",onClick:()=>w("yarn add react-top-loading-bar")},"yarn add react-top-loading-bar"))),n.a.createElement("div",{className:"buttons-group"},n.a.createElement(m.a,{language:"javascript",className:"code-highlighter"},k?"const ref = useRef(null);\n<LoadingBar color={barColor} ref={ref} />\nref.current.continuousStart()":"const [progress,setProgress] = useState(0);\n<LoadingBar color={barColor} progress={progress}\n    onLoaderFinished={() => setProgress(0)} />"),n.a.createElement("br",null),k?n.a.createElement("div",null,n.a.createElement("button",{className:"btn "+p,onClick:()=>g.current.continuousStart()},"Start Continuous Loading Bar"),n.a.createElement("button",{className:"btn "+p,onClick:()=>g.current.staticStart()},"Start Static Loading Bar"),n.a.createElement("button",{className:"btn "+p,onClick:()=>g.current.complete()},"Complete"),n.a.createElement("br",null)):n.a.createElement("div",null,n.a.createElement("button",{className:"btn "+p,onClick:()=>o(a+10)},"Add 10%"),n.a.createElement("button",{className:"btn "+p,onClick:()=>o(a+30)},"Add 30%"),n.a.createElement("button",{className:"btn "+p,onClick:()=>o(a+50)},"Add 50%"),n.a.createElement("br",null)),n.a.createElement("button",{className:"btn "+p,onClick:()=>{const e=(e=>{let t=["red","purple","green","teal","orange","blue"];var a,r;t=t.filter(t=>t!==e);const n=t[(a=0,r=t.length,(32768*Math.random()>>>0)%(a-r)+a)];let o="";switch(n){case"red":o="#f11946";break;case"purple":o="#8800ff";break;case"green":o="#28b485";break;case"teal":o="#00ffe2";break;case"orange":o="#ff7c05";break;case"blue":o="#2998ff";break;default:o="#f11946"}return{barColor:o,color:n}})(p);u(e.barColor),h(e.color)}},"Change Color"),n.a.createElement("button",{className:"btn "+p,onClick:()=>{return(e=!k)&&o(0),void j(e);var e}},"Change to ",k?"State":"Refs"," Mode"),n.a.createElement("a",{className:"btn "+p,target:"_blank",rel:"noopener noreferrer",href:k?"https://github.com/klendi/react-top-loading-bar/blob/master/example/src/examples/exampleWithRef.js":"https://github.com/klendi/react-top-loading-bar/blob/master/example/src/examples/exampleWithState.js"},"Example"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"github-buttons"},n.a.createElement("a",{className:"github-button",href:"https://github.com/klendi/react-top-loading-bar","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star klendi/react-top-loading-bar on GitHub"},"Star")," ",n.a.createElement("a",{className:"github-button",href:"https://github.com/klendi","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Follow @klendi on GitHub"},"Follow @klendi")),n.a.createElement("br",null),n.a.createElement("div",null,"Made with \u2764\ufe0f by"," ",n.a.createElement("a",{href:"https://klendi.dev",style:{color:s},target:"_blank"},"Klendi Gocci"))))};l.a.render(n.a.createElement(f,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(200)}},[[5,1,2]]]);
//# sourceMappingURL=main.3ca39565.chunk.js.map