(()=>{"use strict";const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"pretix/widget","title":"Pretix Widget","description":"A widget for displaying pretix widget.","icon":"tickets-alt","category":"widgets","textdomain":"pretix-widget","editorScript":"pretix-widget-editor-script","editorStyle":"pretix-widget-editor-style","style":"pretix-widget-style","keywords":["tickets","ecommerce"],"supports":{"anchor":true,"align":["full","wide"]},"attributes":{"align":{"type":"string"},"mode":{"type":"string","default":"widget"},"display":{"type":"string","default":"list"},"shop_url":{"type":"string","default":""},"event":{"type":"string","default":""},"items":{"type":"string","default":""},"categories":{"type":"string","default":""},"variations":{"type":"string","default":""},"disable_voucher":{"type":"boolean","default":false},"language":{"type":"string","default":"en"},"allocated_voucher":{"type":"string","default":""},"button_text":{"type":"string","default":""}}}');function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var c=wp.compose,u=c.useDebounce,s=c.usePrevious,p=wp.element,d=p.RawHTML,f=p.useEffect,m=p.useRef,y=p.useState,b=wp.i18n,g=b.__,v=b.sprintf,w=wp.apiFetch,h=wp.url.addQueryArgs,E=wp.components,O=E.Placeholder,S=E.Spinner,x=wp.blocks.__experimentalSanitizeBlockAttributes;function j(e){var t=e.className;return React.createElement(O,{className:t},g("Block rendered as empty."))}function P(e){var t=e.response,r=e.className,n=v(g("Error loading block: %s"),t.errorMsg);return React.createElement(O,{className:r},n)}function R(e){var t=e.children,r=e.showLoader;return React.createElement("div",{style:{position:"relative"}},r&&React.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",marginTop:"-9px",marginLeft:"-9px"}},React.createElement(S,null)),React.createElement("div",{style:{opacity:r?"0.3":1}},t))}function k(e){var t=e.attributes,o=e.block,i=e.className,l=e.httpMethod,c=void 0===l?"GET":l,p=e.urlQueryArgs,b=e.EmptyResponsePlaceholder,g=void 0===b?j:b,v=e.ErrorResponsePlaceholder,E=void 0===v?P:v,O=e.LoadingResponsePlaceholder,S=void 0===O?R:O,k=m(!0),C=n(y(!1),2),A=C[0],T=C[1],_=m(),D=n(y(null),2),I=D[0],B=D[1],L=s(e),N=n(y(!1),2),M=N[0],W=N[1];function U(){if(k.current){W(!0);var e=t&&x(o,t),r="POST"===c,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h("/wp/v2/block-renderer/".concat(e),a(a({context:"edit"},null!==t?{attributes:t}:{}),r))}(o,r?null:null!=e?e:null,p),i=r?{attributes:null!=e?e:null}:null,l=_.current=w({path:n,data:i,method:r?"POST":"GET"}).then((function(e){k.current&&l===_.current&&e&&B(e.rendered)})).catch((function(e){k.current&&l===_.current&&B({error:!0,errorMsg:e.message})})).finally((function(){k.current&&l===_.current&&W(!1)}));return l}}var G=u(U,500);f((function(){return function(){k.current=!1}}),[]),f((function(){void 0===L?U():JSON.stringify(L)!==JSON.stringify(e)&&G()})),f((function(){if(M){var e=setTimeout((function(){T(!0)}),2e3);return function(){return clearTimeout(e)}}}),[M]);var V=!!I,$=""===I,J=null==I?void 0:I.error;return M?React.createElement(S,r({},e,{showLoader:A}),V&&React.createElement(d,{className:i},I)):$||!V?React.createElement(g,e):J?React.createElement(E,r({response:I},e)):React.createElement(d,{className:i},I)}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=wp.element,_=T.useEffect,D=T.useState,I=wp.i18n.__,B=wp.components,L=B.TextControl,N=B.ToggleControl,M=B.SelectControl,W=B.PanelBody,U=B.Placeholder,G=(B.Spinner,wp.blockEditor),V=(G.InnerBlocks,G.useBlockProps),$=G.InspectorControls;function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==J(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===J(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}G.BlockControls,G.store,(0,wp.blocks.registerBlockType)("pretix-widget/widget",Q(Q({},e),{},{edit:function(e){var t,r,n=e.clientId,o=e.attributes,i=e.setAttributes,a=(o.align,o.mode),l=void 0===a?"widget":a,c=o.display,u=void 0===c?"list":c,s=o.shop_url,p=void 0===s?"":s,d=o.items,f=void 0===d?"":d,m=o.categories,y=void 0===m?"":m,b=o.variations,g=void 0===b?"":b,v=o.disable_voucher,w=void 0!==v&&v,h=o.allocated_voucher,E=void 0===h?"":h,O=o.language,S=void 0===O?"en":O,x=o.button_text,j=void 0===x?"Buy Ticket!":x,P=V(),R=(t=D(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),T=(R[0],R[1],function(e,t){i(function(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===C(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},e,t))});return React.createElement(React.Fragment,null,React.createElement($,null,React.createElement(W,{title:I("Settings","pretix-widget"),initialOpen:!0},React.createElement(M,{label:I("Mode","pretix-widget"),value:l,options:[{value:"widget",label:I("Widget","pretix-widget")},{value:"button",label:I("Button","pretix-widget")}],onChange:function(e){return T("mode",e)}}),"button"===l&&React.createElement(L,{label:I("Button Text","pretix-widget"),value:j,onChange:function(e){return T("button_text",e)}}),React.createElement(L,{label:I("Shop URL","pretix-widget"),value:p,onChange:function(e){return T("shop_url",e)},type:"url"}),React.createElement(L,{label:I("Items","pretix-widget"),value:f,onChange:function(e){return T("items",e)},help:I("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(L,{label:I("Categories","pretix-widget"),value:y,onChange:function(e){return T("categories",e)},help:I("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(L,{label:I("Variations","pretix-widget"),value:g,onChange:function(e){return T("variations",e)},help:I("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(L,{label:I("Allocated Voucher","pretix-widget"),value:E,onChange:function(e){return T("allocated_voucher",e)}}),React.createElement(M,{label:I("Display","pretix-widget"),value:u,options:[{value:"list",label:I("List","pretix-widget")},{value:"calendar",label:I("Calendar","pretix-widget")},{value:"week",label:I("Week","pretix-widget")},{value:"grid",label:I("Grid","pretix-widget")}],onChange:function(e){return T("display",e)}}),React.createElement(N,{label:I("Disable Voucher","pretix-widget"),checked:w,onChange:function(e){return T("disable_voucher",e)}}),React.createElement(M,{label:I("Default Language","pretix-widget"),value:S,options:[{value:"de",label:I("German","pretix-widget")},{value:"en",label:I("English","pretix-widget")}],onChange:function(e){return T("language",e)}}))),React.createElement("div",P,React.createElement(k,{block:"pretix/widget",attributes:o,LoadingResponsePlaceholder:function(){return _((function(){return function(){!function(){var e="pretix-widget-script-"+n,t=document.getElementById(e);t&&document.body.removeChild(t),(t=document.createElement("script")).id=e,window.PretixWidget=null;var r=new URL(p).hostname;t.src="https://".concat(r,"/widget/v1.").concat(S,".js?timestamp=").concat(Date.now()),t.async=!0,t.onload=function(){window.PretixWidget.buildWidgets()},document.body.appendChild(t)}(),function(){var e="pretix-widget-style-"+n,t=document.getElementById(e);t&&document.body.removeChild(t),(t=document.createElement("link")).rel="stylesheet";var r=new URL(p),o=r.hostname+r.pathname.replace(/\/$/,"");t.href="https://".concat(o,"/widget/v1.css?timestamp=").concat(Date.now()),document.head.appendChild(t)}()}})),React.createElement(U,{label:"Loading..."})},EmptyResponsePlaceholder:function(){return React.createElement(U,{label:"Empty"})},ErrorResponsePlaceholder:function(){return React.createElement(U,{label:"Error"})}})))},save:function(e){return null}}))})();
//# sourceMappingURL=pretix-widget.build.js.map