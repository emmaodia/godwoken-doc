"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[9526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,u=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(u,i(i({ref:t},k),{},{components:n})):r.createElement(u,i({ref:t},k))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"connectionInfo",title:"Godwoken Public Networks"},i=void 0,l={unversionedId:"connectionInfo",id:"version-1.3-rc1(WIP)/connectionInfo",title:"Godwoken Public Networks",description:"",source:"@site/versioned_docs/version-1.3-rc1(WIP)/connectionInfo.md",sourceDirName:".",slug:"/connectionInfo",permalink:"/connectionInfo",draft:!1,tags:[],version:"1.3-rc1(WIP)",frontMatter:{id:"connectionInfo",title:"Godwoken Public Networks"},sidebar:"sidebar2",previous:{title:"Overview",permalink:"/overview"},next:{title:"Frameworks",permalink:"/frameworks"}},p={},s=[{value:"GODWOKEN MAINNET V1\uff1a",id:"godwoken-mainnet-v1",level:2},{value:"Godwoken Web3 RPC",id:"godwoken-web3-rpc",level:3},{value:"Tools",id:"tools",level:3},{value:"Deployment Information",id:"deployment-information",level:3},{value:"GODWOKEN TESTNET V1:",id:"godwoken-testnet-v1",level:2},{value:"Godwoken Web3 RPC",id:"godwoken-web3-rpc-1",level:3},{value:"Tools",id:"tools-1",level:3},{value:"Deployment Information",id:"deployment-information-1",level:3},{value:"Nervos Layer 1",id:"nervos-layer-1",level:2},{value:"CKB Mainnet Mirana:",id:"ckb-mainnet-mirana",level:3},{value:"<strong>CKB Testnet Pudge:</strong>",id:"ckb-testnet-pudge",level:3},{value:"Run a CKB Mainnet Node and Testnet Node with Docker",id:"run-a-ckb-mainnet-node-and-testnet-node-with-docker",level:3}],k={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"godwoken-mainnet-v1"},"GODWOKEN MAINNET V1\uff1a"),(0,o.kt)("h3",{id:"godwoken-web3-rpc"},"Godwoken Web3 RPC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RPC URL"),": ",(0,o.kt)("a",{parentName:"li",href:"https://v1.mainnet.godwoken.io/rpc"},"https://v1.mainnet.godwoken.io/rpc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebSocket"),": wss://v1.mainnet.godwoken.io/ws")),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explorer (GwScan)"),": ",(0,o.kt)("a",{parentName:"li",href:"https://v1.gwscan.com"},"https://v1.gwscan.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token Bridge"),": ",(0,o.kt)("a",{parentName:"li",href:"https://bridge.godwoken.io"},"https://bridge.godwoken.io"))),(0,o.kt)("h3",{id:"deployment-information"},"Deployment Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chain ID"),": 71402")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ETH Address Registry ID"),": 2"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ETH Address Registry")," layer2 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c"},"contract")," introduces two-ways mappings between ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gw_script_hash"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/blob/mainnet_v1/mainnet_v1/bridged-token-list.json"},"sUDT_ERC20_Proxy contracts")))),(0,o.kt)("h2",{id:"godwoken-testnet-v1"},"GODWOKEN TESTNET V1:"),(0,o.kt)("h3",{id:"godwoken-web3-rpc-1"},"Godwoken Web3 RPC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RPC URL"),": ",(0,o.kt)("a",{parentName:"li",href:"https://godwoken-testnet-v1.ckbapp.dev"},"https://godwoken-testnet-v1.ckbapp.dev")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebSocket"),": wss://godwoken-testnet-v1.ckbapp.dev/ws")),(0,o.kt)("h3",{id:"tools-1"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explorer (GwScan)"),": ",(0,o.kt)("a",{parentName:"li",href:"https://v1.testnet.gwscan.com"},"https://v1.testnet.gwscan.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explorer (Blockscout)"),": ",(0,o.kt)("a",{parentName:"li",href:"https://gw-explorer.nervosdao.community"},"https://gw-explorer.nervosdao.community")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token Bridge"),": ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io"},"https://testnet.bridge.godwoken.io"),"\nIt's also a testnet account generator.")),(0,o.kt)("h3",{id:"deployment-information-1"},"Deployment Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chain ID:"),"\xa071401")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ETH Address Registry ID:")," 2"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ETH Address Registry")," layer2 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c"},"contract")," introduces two-ways mappings between ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gw_script_hash"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"L2 Godwoken Testnet pCKB Contract")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"https://testnet.bridge.godwoken.io"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Address: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613"),(0,o.kt)("li",{parentName:"ul"},"Symbol: pCKB"),(0,o.kt)("li",{parentName:"ul"},"Decimals: 18")))),(0,o.kt)("h2",{id:"nervos-layer-1"},"Nervos Layer 1"),(0,o.kt)("h3",{id:"ckb-mainnet-mirana"},"CKB Mainnet Mirana:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explorer:")," ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.nervos.org"},"https://explorer.nervos.org")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases/latest"},"latest release")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb init --chain mainnet")," to initialize the node."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mirana is active since the epoch 5414, see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/nervos-ckb2021-hard-fork-migration-guide"},"migration guide")," to upgrade from Lina.")),(0,o.kt)("h3",{id:"ckb-testnet-pudge"},(0,o.kt)("strong",{parentName:"h3"},"CKB Testnet Pudge:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explorer:")," ",(0,o.kt)("a",{parentName:"li",href:"https://pudge.explorer.nervos.org/"},"https://pudge.explorer.nervos.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Faucet:")," ",(0,o.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"https://faucet.nervos.org/"))),(0,o.kt)("h3",{id:"run-a-ckb-mainnet-node-and-testnet-node-with-docker"},"Run a CKB Mainnet Node and Testnet Node with Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker"},"https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker"))))}c.isMDXComponent=!0}}]);