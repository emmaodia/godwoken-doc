"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3799],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"faq",title:"FAQ"},c=void 0,l={unversionedId:"faq",id:"version-1.1/faq",title:"FAQ",description:"Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?",source:"@site/versioned_docs/version-1.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/1.1/faq",draft:!1,tags:[],version:"1.1",frontMatter:{id:"faq",title:"FAQ"},sidebar:"sidebar2",previous:{title:"Godwoken V1.1 Release Note",permalink:"/1.1/releaseNote"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q"),": It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A"),": Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to make sure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). "),(0,o.kt)("p",null,"Every optimistic rollup L2 uses challenge mechanism in their withdrawal process. After you initiated a withdrawal request, L1 put the withdrawal into a challenge period (~ 3 days), waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, other optitmisc rollups like arbitrum and optimism also have such a challenge period, e.g. Arbitrum mandates a 7-day challenge period during a withdrawal."),(0,o.kt)("p",null,"We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q"),": Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai? "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A"),": This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/concepts/economics"},"Actually anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus thus it's scarce and needs to be used carefully.")),(0,o.kt)("p",null,"This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made and we have to explore different ways to find the best design. It's your feedback and patience help us improve Godwoken and make it better in future iterations. Thank you."))}f.isMDXComponent=!0}}]);