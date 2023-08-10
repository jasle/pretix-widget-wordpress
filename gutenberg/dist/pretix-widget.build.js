(()=>{"use strict";const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"pretix/widget","title":"pretix Widget","description":"A widget for displaying a pretix ticket shop.","icon":"tickets-alt","category":"widgets","textdomain":"pretix-widget","editorScript":"pretix-widget-editor-script","editorStyle":"pretix-widget-editor-style","style":"pretix-widget-style","keywords":["tickets","ecommerce"],"supports":{"anchor":true,"align":["full","wide"]},"attributes":{"align":{"type":"string"},"mode":{"type":"string","default":"widget"},"subevent":{"type":"string","default":""},"display":{"type":"string"},"shop_url":{"type":"string"},"event":{"type":"string","default":""},"items":{"type":"string","default":""},"categories":{"type":"string","default":""},"variations":{"type":"string","default":""},"disable_voucher":{"type":"boolean"},"language":{"type":"string"},"allocated_voucher":{"type":"string","default":""},"button_text":{"type":"string"}}}');function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var c=wp.compose,u=c.useDebounce,s=c.usePrevious,p=wp.element,d=p.RawHTML,f=p.useEffect,m=p.useRef,g=p.useState,b=wp.i18n,y=b.__,v=b.sprintf,h=wp.apiFetch,w=wp.url.addQueryArgs,x=wp.components,E=x.Placeholder,O=x.Spinner,S=wp.blocks.__experimentalSanitizeBlockAttributes;function j(e){var t=e.className;return React.createElement(E,{className:t},y("Block rendered as empty."))}function P(e){var t=e.response,r=e.className,n=v(y("Error loading block: %s"),t.errorMsg);return React.createElement(E,{className:r},n)}function R(e){var t=e.children,r=e.showLoader;return React.createElement("div",{style:{position:"relative"}},r&&React.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",marginTop:"-9px",marginLeft:"-9px"}},React.createElement(O,null)),React.createElement("div",{style:{opacity:r?"0.3":1}},t))}function _(e){var t=e.attributes,o=e.block,i=e.className,l=e.httpMethod,c=void 0===l?"GET":l,p=e.urlQueryArgs,b=e.EmptyResponsePlaceholder,y=void 0===b?j:b,v=e.ErrorResponsePlaceholder,x=void 0===v?P:v,E=e.LoadingResponsePlaceholder,O=void 0===E?R:E,_=m(!0),k=n(g(!1),2),C=k[0],D=k[1],T=m(),A=n(g(null),2),L=A[0],I=A[1],W=s(e),B=n(g(!1),2),N=B[0],M=B[1];function U(){if(_.current){M(!0);var e=t&&S(o,t),r="POST"===c,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w("/wp/v2/block-renderer/".concat(e),a(a({context:"edit"},null!==t?{attributes:t}:{}),r))}(o,r?null:null!=e?e:null,p),i=r?{attributes:null!=e?e:null}:null,l=T.current=h({path:n,data:i,method:r?"POST":"GET"}).then((function(e){_.current&&l===T.current&&e&&I(e.rendered)})).catch((function(e){_.current&&l===T.current&&I({error:!0,errorMsg:e.message})})).finally((function(){_.current&&l===T.current&&M(!1)}));return l}}var G=u(U,500);f((function(){return function(){_.current=!1}}),[]),f((function(){void 0===W?U():JSON.stringify(W)!==JSON.stringify(e)&&G()})),f((function(){if(N){var e=setTimeout((function(){D(!0)}),2e3);return function(){return clearTimeout(e)}}}),[N]);var $=!!L,J=""===L,F=null==L?void 0:L.error;return N?React.createElement(O,r({},e,{showLoader:C}),$&&React.createElement(d,{className:i},L)):J||!$?React.createElement(y,e):F?React.createElement(x,r({response:L},e)):React.createElement(d,{className:i},L)}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=wp.element,T=D.useEffect,A=D.useState,L=wp.i18n.__,I=wp.components,W=I.TextControl,B=I.ToggleControl,N=I.SelectControl,M=I.PanelBody,U=I.Placeholder,G=wp.blockEditor,$=G.useBlockProps,J=G.InspectorControls,F={};if(pretixWidgetDefaults)for(var Q in pretixWidgetDefaults)pretixWidgetDefaults.hasOwnProperty(Q)&&(F[Q]=""===pretixWidgetDefaults[Q]?null:pretixWidgetDefaults[Q]);var V=pretixWidgetLanguages?Object.values(pretixWidgetLanguages):[{code:"en",locale:"en_GB",name:"English",supported:!0},{code:"de",locale:"de_DE",name:"German",supported:!0}];function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===z(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,wp.blocks.registerBlockType)("pretix/widget",q(q({},e),{},{edit:function(e){var t,r,n,o,i,a=e.clientId,l=e.attributes,c=e.setAttributes,u=(l.align,l.mode),s=l.subevent,p=l.items,d=l.categories,f=l.variations,m=l.allocated_voucher,g=l.list_type,b=void 0===g?null!==(t=F.pretix_widget_list_type)&&void 0!==t?t:"list":g,y=l.shop_url,v=void 0===y?F.pretix_widget_shop_url.replace(/\s/g,"").length>0?F.pretix_widget_shop_url:"":y,h=l.disable_voucher,w=void 0===h?null!==(r=F.pretix_widget_disable_voucher)&&void 0!==r&&r:h,x=l.language,E=void 0===x?null!==(n=F.pretix_widget_language)&&void 0!==n?n:"en":x,O=l.button_text,S=void 0===O?F.pretix_widget_button_text.replace(/\s/g,"").length>0?F.pretix_widget_button_text:"Buy Ticket!":O,j=$(),P=(o=A(!1),i=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(o,i)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),R=(P[0],P[1],function(e,t){c(function(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===k(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},e,t))}),D=function(e){try{return new URL(e),!0}catch(e){return!1}};return React.createElement(React.Fragment,null,React.createElement(J,null,React.createElement(M,{title:L("Settings","pretix-widget"),initialOpen:!0},React.createElement(N,{label:L("Mode","pretix-widget"),value:u,options:[{value:"widget",label:L("Widget","pretix-widget")},{value:"button",label:L("Button","pretix-widget")}],onChange:function(e){return R("mode",e)}}),"button"===u&&React.createElement(W,{label:L("Button Text","pretix-widget"),value:S,onChange:function(e){return R("button_text",e)}}),React.createElement(W,{label:L("Shop URL","pretix-widget"),value:v,onChange:function(e){return R("shop_url",e)},placeholder:"https://pretix.eu/demo",type:"url"}),React.createElement(W,{label:L("Sub-Event","pretix-widget"),value:s,onChange:function(e){return R("subevent",e)}}),React.createElement(W,{label:L("Items","pretix-widget"),value:p,onChange:function(e){return R("items",e)},help:L("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(W,{label:L("Categories","pretix-widget"),value:d,onChange:function(e){return R("categories",e)},help:L("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(W,{label:L("Variations","pretix-widget"),value:f,onChange:function(e){return R("variations",e)},help:L("Enter a comma-separated list of ID numbers.","pretix-widget")}),React.createElement(W,{label:L("Pre-selected voucher","pretix-widget"),value:m,onChange:function(e){return R("allocated_voucher",e)}}),React.createElement(N,{label:L("List Type","pretix-widget"),value:b,options:[{value:"auto",label:L("Auto","pretix-widget")},{value:"list",label:L("List","pretix-widget")},{value:"week",label:L("Calendar Week","pretix-widget")},{value:"calendar",label:L("Calendar Month","pretix-widget")}],onChange:function(e){return R("list_type",e)}}),React.createElement(B,{label:L("Disable voucher input","pretix-widget"),checked:w,onChange:function(e){return R("disable_voucher",e)}}),React.createElement(N,{label:L("Language","pretix-widget"),value:E,options:V.map((function(e){return{value:e.code,label:e.name}})),onChange:function(e){return R("language",e)}}))),React.createElement("div",j,React.createElement(_,{block:"pretix/widget",attributes:l,LoadingResponsePlaceholder:function(){return T((function(){return function(){!function(){if(D(v)){var e="pretix-widget-script-"+a,t=document.getElementById(e);t&&document.body.removeChild(t),(t=document.createElement("script")).id=e,window.PretixWidget=null;var r=new URL(v).hostname,n=E.replace("_","-");t.src="https://".concat(r,"/widget/v1.").concat(n,".js?timestamp=").concat(Date.now()),t.async=!0,t.onload=function(){window.PretixWidget.buildWidgets()},document.body.appendChild(t)}}(),function(){if(D(v)){var e="pretix-widget-style-"+a,t=document.getElementById(e);t&&document.body.removeChild(t),(t=document.createElement("link")).rel="stylesheet";var r=new URL(v),n=r.hostname+r.pathname.replace(/\/$/,"");t.href="https://".concat(n,"/widget/v1.css?timestamp=").concat(Date.now()),document.head.appendChild(t)}}()}})),React.createElement(U,{label:"Loading..."})},EmptyResponsePlaceholder:function(){return React.createElement(U,{label:"Empty"})},ErrorResponsePlaceholder:function(){return React.createElement(U,{label:"Error"})}})))},save:function(e){return null}}))})();
//# sourceMappingURL=pretix-widget.build.js.map