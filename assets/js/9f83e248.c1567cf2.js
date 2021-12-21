(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),r=(n(0),n(109)),o={title:"Neutralino.init"},l={unversionedId:"api/init",id:"api/init",isDocsHomePage:!1,title:"Neutralino.init",description:"init is not a namespace, it's a function that initializes a Neutralinojs application.",source:"@site/docs/api/init.md",slug:"/api/init",permalink:"/docs/api/init",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/init.md",version:"current",sidebar:"docs",previous:{title:"Native API Overview",permalink:"/docs/api/overview"},next:{title:"Neutralino.app",permalink:"/docs/api/app"}},c=[{value:"init()",id:"init",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"init")," is not a namespace, it's a function that initializes a Neutralinojs application."),Object(r.b)("h2",{id:"init"},"init()"),Object(r.b)("p",null,"The application developer needs to call this method explicitly via a JavaScript source file before using any\nnative API function. The ",Object(r.b)("inlineCode",{parentName:"p"},"init")," function does the following tasks when it's called."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Starts a WebSocket connection with the Neutralinojs server asynchronously."),Object(r.b)("li",{parentName:"ul"},"Registers auto-reload event handler if the ",Object(r.b)("inlineCode",{parentName:"li"},"--neu-dev-auto-reload")," flag (the ",Object(r.b)("inlineCode",{parentName:"li"},"neu run")," command sets this flag) is provided."),Object(r.b)("li",{parentName:"ul"},"Defines ",Object(r.b)("inlineCode",{parentName:"li"},"NL_CVERSION")," with the client libary version in the ",Object(r.b)("inlineCode",{parentName:"li"},"window")," scope.")),Object(r.b)("p",null,"You can call native API calls right after the ",Object(r.b)("inlineCode",{parentName:"p"},"init")," function call, as shown below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Neutralino.init();\n\nNeutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');\n")),Object(r.b)("p",null,"Also, you can wrap immediate native calls with the ",Object(r.b)("inlineCode",{parentName:"p"},"ready")," event callback if you like."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Neutralino.init();\n\nNeutralino.events.on('ready', () => {\n    Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');\n});\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Neutralinojs client library typically queues and sends native API calls to the server when the WebSocket connection\nis established. Therefore, you don't need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"ready")," event callback always."))))}p.isMDXComponent=!0}}]);