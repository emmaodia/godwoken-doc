"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1109],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6586:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(4996),i=["components"],s={id:"wallets",title:"Wallets"},p=void 0,c={unversionedId:"wallets",id:"version-1.2-rc1(WIP)/wallets",title:"Wallets",description:"",source:"@site/versioned_docs/version-1.2-rc1(WIP)/wallets.md",sourceDirName:".",slug:"/wallets",permalink:"/wallets",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"wallets",title:"Wallets"},sidebar:"sidebar2",previous:{title:"Tooling",permalink:"/tooling"},next:{title:"Tokens",permalink:"/tokens"}},u={},h=[{value:"MetaMask",id:"metamask",level:2},{value:"Neuron Wallet",id:"neuron-wallet",level:2},{value:"Portal Wallet",id:"portal-wallet",level:2}],m={toc:h};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"metamask"},"MetaMask"),(0,o.kt)("p",null,"MetaMask is a cryptocurrency wallet used to interact with dApps. MetaMask initially started as a wallet designed for Ethereum, but now has some support for other cryptocurrencies as well."),(0,o.kt)("p",null,"Nervos has opted to support MetaMask as one of the primary wallets of the Nervos ecosystem. This decision was made because if it's proven track record, large pre-existing install-base, and its support of all major web browsers and mobile phones."),(0,o.kt)("p",null,"Two modes of operation are supported with MetaMask when interacting with the Nervos ecosystem."),(0,o.kt)("p",null,"When interacting with an Ethereum-compatible layer 2 chain using the Godwoken and Polyjuice frameworks, MetaMask should be configured to use the Godwoken RPC. This process is identical to other layer 2 chains, such as Polygon (Matic), and is used to interact with EVM-compatible Solidity-based dApps running on Nervos."),(0,o.kt)("p",null,"When interacting directly with Nervos' layer 1 CKB blockchain, no configuration changes are required. The flexibility of Nervos' layer 1 blockchain allows for full compatibility out-of-the-box. To facilitate this, the Nervos community supported ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," framework is used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Official Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MetaMask"},"Github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"Download"))),(0,o.kt)("img",{src:(0,l.Z)("img/wallets-metamask.png"),width:"40%"}),(0,o.kt)("h2",{id:"neuron-wallet"},"Neuron Wallet"),(0,o.kt)("p",null,"Neuron is an officially supported desktop wallet for the Nervos ecosystem. This wallet allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO. Additional support for NFT assets is currently in the experimental phase."),(0,o.kt)("p",null,"Neuron is created by ",(0,o.kt)("a",{parentName:"p",href:"https://nervina.cn/"},"Nervina Labs"),". Nervina is the development team for several products in the Nervos ecosystem, such as the ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/keypering/"},"Keypering Wallet"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Nervos Explorer"),", and several Nervos SDKs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron"},"Github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron/releases"},"Download")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/neuron"},"Neuron Guide"))),(0,o.kt)("img",{src:(0,l.Z)("img/wallets-neuron.png"),width:"80%"}),(0,o.kt)("h2",{id:"portal-wallet"},"Portal Wallet"),(0,o.kt)("p",null,"Portal Wallet is a popular browser based wallet for the Nervos ecosystem created by the ",(0,o.kt)("a",{parentName:"p",href:"https://lay2.tech/"},"Lay2")," development team. This wallet functions similar to a dApp, and allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO."),(0,o.kt)("p",null,"This wallet is convinient for users because it works entirely in a web browser and relies on the MetaMask extension for signing. MetaMask is currently the mostly widely used extension for dApp interaction, meaning that in most cases the user does not need to install any additional software."),(0,o.kt)("p",null,"Lay2 are the developers of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," framework, which is used to power the Portal Wallet. This framework allows Portal Wallet to rely on the MetaMask wallet browser extension for private key management, without any configuration changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ckb.pw/"},"Official Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/PortalWallet"},"Github"))),(0,o.kt)("img",{src:(0,l.Z)("img/wallets-portal-wallet.png"),width:"60%"}))}f.isMDXComponent=!0}}]);