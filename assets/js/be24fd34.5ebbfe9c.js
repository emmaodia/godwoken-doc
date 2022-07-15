"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(4996);const o={id:"releaseNote3",title:"Godwoken V1.3 Release Note"},l=void 0,p={unversionedId:"releaseNote3",id:"version-1.3-rc1(WIP)/releaseNote3",title:"Godwoken V1.3 Release Note",description:"",source:"@site/versioned_docs/version-1.3-rc1(WIP)/releaseNote3.md",sourceDirName:".",slug:"/releaseNote3",permalink:"/releaseNote3",draft:!1,tags:[],version:"1.3-rc1(WIP)",frontMatter:{id:"releaseNote3",title:"Godwoken V1.3 Release Note"},sidebar:"sidebar2",previous:{title:"Extract a Privkey from MetaMask Wallet",permalink:"/extractPrivkey"},next:{title:"Godwoken V1.2 Release Note",permalink:"/releaseNote2"}},i={},s=[{value:"<strong>Added</strong>",id:"added",level:4},{value:"<strong>Changed</strong>",id:"changed",level:4},{value:"<strong>Fixed</strong>",id:"fixed",level:4},{value:"<strong>Others</strong>",id:"others",level:4}],c={toc:s};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following release notes cover the most recent and major changes in Godwoken v1.3. You can also see all release notes in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain but is being deployed as a new vhain with tools to help users and developers migrate to the new chain.  Developers can use Godwoken v1 to switch networks to Godwoken in the same way as they use other EVM-compatible chains.")),(0,a.kt)("p",null,"The changes to Godwoken v1.3 include:"),(0,a.kt)("h4",{id:"added"},(0,a.kt)("strong",{parentName:"h4"},"Added")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: Remove error tx receipt notify. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/724"},"#724")),(0,a.kt)("p",{parentName:"li"},"  Godwoken removed the deprecated error tx receipt and associated logic.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(tools): generate-config p2p network. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/734"},"#734")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p_network_config")," is included in the config generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"gw-tools generate-config"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Usage: gw-tools generate-config ... --p2p-listen <address> --p2p-dial <address> <address>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(rpc-server): get in queue requests.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/726"},"#726")),(0,a.kt)("p",{parentName:"li"},"  Added RPC method ",(0,a.kt)("inlineCode",{parentName:"p"},"gw_is_request_in_queue")," which returns status of whether a transaction or withdrawal is in a queue on the full node."))),(0,a.kt)("h4",{id:"changed"},(0,a.kt)("strong",{parentName:"h4"},"Changed")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: reject transactions has less gas than the intrinsic gas.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/725"},"#725"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: check sender's balance before execute.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/750"},"#750"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(rpc-server): check withdrawal request minimal capacity and owner lock. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/748"},"#748")))),(0,a.kt)("h4",{id:"fixed"},(0,a.kt)("strong",{parentName:"h4"},"Fixed")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: refresh readonly mem-pool when receives new mem-block. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/721"},"#721"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: read only nodes without p2p sync. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/737"},"#737"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: handle VM InvalidCycles by generate a polyjuice system log. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/729"},"#729"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix gw tools deployment ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/736"},"#736"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix(gw-tools): sudt transfer with eip712 message.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/744"},"#744"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: gw-tools create-sudt-account. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/747"},"#747"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: use mem pool state for \u201cget block\u201d RPCs.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/742"},"#742"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: mem pool state snapshot.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/740"},"#740")))),(0,a.kt)("h4",{id:"others"},(0,a.kt)("strong",{parentName:"h4"},"Others")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(block-producer): trace chain task run func. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/732"},"#732"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Debug intrinsic gas. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/735"},"#735"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"chore: bump rocksdb from 0.16.1 to 0.18.1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/746"},"#746"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upgrade to tentacle 0.4.0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/743"},"#743")))))}k.isMDXComponent=!0}}]);