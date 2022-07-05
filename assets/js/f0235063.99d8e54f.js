"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6343],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),s=["components"],l={id:"structure",title:"Structure"},c=void 0,u={unversionedId:"structure",id:"version-1.2-rc1(WIP)/structure",title:"Structure",description:"",source:"@site/versioned_docs/version-1.2-rc1(WIP)/structure.md",sourceDirName:".",slug:"/structure",permalink:"/structure",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"structure",title:"Structure"},sidebar:"sidebar2",previous:{title:"Standards",permalink:"/standards"},next:{title:"Tooling",permalink:"/tooling"}},h={},d=[{value:"Mainnet / Testnet / Devnet",id:"mainnet--testnet--devnet",level:3},{value:"Layer 1 / Layer 2",id:"layer-1--layer-2",level:3},{value:"Common User Action Flow",id:"common-user-action-flow",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"mainnet--testnet--devnet"},"Mainnet / Testnet / Devnet"),(0,o.kt)("p",null,"Nervos officially supports three different types of networks."),(0,o.kt)("p",null,'The Mainnet, also known as "Lina", is the live production network for Nervos. This public network is fully decentralized and permissionless, and relies on a robust Proof of Work (PoW) based incentive system to protect all of the assets on the network.'),(0,o.kt)("p",null,'The Mainnet is the network people are referring to when they are talking about the "Nervos Blockchain" or when they casually refer to something being "on CKB". In casual conversation, Mainnet may also refer to any layer 2 network that is also connected connected to the layer 1 Mainnet.'),(0,o.kt)("p",null,'The Testnet, also known as "Aggron", is the public sandbox network. The software used by this network is exactly the same as the Mainnet, but all tokens and assets on the Testnet have no value. This environment provides a safe place for developers to experiment in a realistic shared environment with other developers, without the associated cost or risk.'),(0,o.kt)("p",null,"New features are always tested on the Testnet prior to release on the Mainnet. For this reason, the Testnet may occasionally not have 100% reliability. The Testnet also uses Proof of Work, but because none of the tokens have value, there is only a minimal amount of security provided. Due to the nature of a Testnet, all data there should be viewed as imperminant."),(0,o.kt)("p",null,"CKBytes on the Testnet have no value, but are still needed for testing. Developers can get free CKBytes from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.nervos.org"},"faucet"),"."),(0,o.kt)("p",null,"A Devnet is a private network for testing purposes. It is similar to the Aggron Testnet, except that it is not a publicly shared environment. Devnets normally reside entirely on the developer's computer, and are created on-demand as they are needed by the developer. Multiple Devnets can be created as needed, and they can each have slightly different configurations, and be paused or deleted as needed."),(0,o.kt)("p",null,"When a developer begins working on a new dApp, using a Devnet is recommended place to begin. A new network can be created instantly, without having to wait for the network to synchronize. A Devnet uses simulated mining, meaning it is centralized, but extremely efficient and low power to operate. There is no faucet on a Devnet. Instead, there is a well-known account that contains a very large amount of CKBytes which are created in the genesis block. A developer can use the provided private keys to access these CKBytes, which should be more that enough for any necessary testing."),(0,o.kt)("img",{src:(0,i.Z)("img/structure-1.png"),width:"60%"}),(0,o.kt)("h3",{id:"layer-1--layer-2"},"Layer 1 / Layer 2"),(0,o.kt)("p",null,"Nervos uses a multi-layer architecture to address the blockchain challenges of security, scalability, and decentralization. Achieving high levels of all three on a single layer is difficult to impossible, and there are always tradeoffs. However, different layers can each address different concerns."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nervos' Layer 1 focuses on security and decentralization, providing trust to higher layers."),(0,o.kt)("li",{parentName:"ul"},"Nervos' Layer 2 focuses on scalability, providing nearly instantaneous transactions for millions of users.")),(0,o.kt)("p",null,"The two layers function together to achieve higher levels of decentralization, security, and scalability than would be possible on any single layer."),(0,o.kt)("p",null,"The Nervos blockchain represents layer 1 in this stack. Also known as the Common Knowledge Base, is the bottom-most layer in the Nervos ecosystem. It serves as a foundation to build on and provides trust to all layers built on top. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its main purpose is the reliable preservation of any data and assets stored within it."),(0,o.kt)("p",null,"Layer 2 is represented by multiple separate chains, each of which may have unique characteristics both in operation and governance. Layer 2 chains can take many forms, and do not have a rigid definition on Nervos."),(0,o.kt)("p",null,"A discrete layer 2 chain could be used for a single project or a group of projects. The consensus could be Proof of Authority based, Proof of Stake based, or a different mechanism. Even the programming model used on the layer 2 chain can be changed from the native Cell Model, to alternative models like EVM (for Ethereum Solidity compatibility) or EOS (for EOS compatibility)."),(0,o.kt)("p",null,"Most layer 2 chains on Nervos will have certain common characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ability to transfer tokens and other assets to and from layer 1."),(0,o.kt)("li",{parentName:"ul"},"Process transactions in parallel to the layer 1 chain to achieve higher scalability."),(0,o.kt)("li",{parentName:"ul"},"Rely on layer 1 to settle consensus disputes and achieve higher levels of security than would otherwise be possible.")),(0,o.kt)("p",null,"Nervos' first layer 2 offering will utilize the Godwoken and Polyjuice frameworks together to create an Ethereum compatible EVM environment that is capable of supporting Solidity based dApps. This layer 2 chain will be initially run by the Nervos Foundation during the initial launch phase, but will eventually convert into a decentralized chain which is operated by the community. All developers will be able to use this layer 2 chain permissionlessly, using the same tooling that is used for development with Ethereum."),(0,o.kt)("img",{src:(0,i.Z)("img/structure-2.png"),width:"60%"}),(0,o.kt)("h3",{id:"common-user-action-flow"},"Common User Action Flow"),(0,o.kt)("p",null,"The dApp universe is expanding rapidly, but the majority of users are still on Ethereum. Because of this, support for Ethereum users is high priority for all dApp developers, and interoperability is essential for upcoming blockchains."),(0,o.kt)("p",null,"Recognizing this reality is one of the driving factors in Nervos' infrastructure design considerations. Nervos' interoperability is achieved with other blockchains by providing key pieces of infrastructure. One is ",(0,o.kt)("a",{parentName:"p",href:"/infrastructure#force-bridge"},"Force Bridge"),", which allows tokens and assets to transfer to and from other blockchains seamlessly. Another is ",(0,o.kt)("a",{parentName:"p",href:"/frameworks#pw-sdk"},"PW-SDK"),", a interoperability framework that allows users from different blockchains to immediately interact with Nervos Network using their existing dApp wallets."),(0,o.kt)("p",null,"An average Ethereum user will be able to transfer assets from other blockchains to Nervos using ",(0,o.kt)("a",{parentName:"p",href:"/infrastructure#force-bridge"},"Force Bridge"),". Once the bridge transfer is complete, tokens and assets that were transferred over the bridge will reside on Nervos' Layer 1 blockchain. From there they can navigate through the Nervos ecosystem, interacting with dApps on Layer 1, or Layer 2."),(0,o.kt)("img",{src:(0,i.Z)("img/structure-3.png"),width:"60%"}),(0,o.kt)("p",null,"The image above shows how an Ethereum user would start from the Ethereum blockchain, and end up interacting with a Solidity smart contract that is running on Nervos. The steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user starts with assets, such as ETH, DAI, USDC, and USDT, in their MetaMask wallet."),(0,o.kt)("li",{parentName:"ol"},"The user opens Force Bridge in a web browser, and initiates an asset transfer to Nervos."),(0,o.kt)("li",{parentName:"ol"},"Force Bridge validates their deposit transaction, and issues a wrapped token, in the form of an ",(0,o.kt)("a",{parentName:"li",href:"/standards#sudt"},"SUDT")," on Layer 1."),(0,o.kt)("li",{parentName:"ol"},"The user would then use a dApp to deposit their SUDT assets from Layer 1 to the Layer 2 which has EVM compatibility provided by the ",(0,o.kt)("a",{parentName:"li",href:"/frameworks#godwoken"},"Godwoken")," and ",(0,o.kt)("a",{parentName:"li",href:"/frameworks#polyjuice"},"Polyjuice")," frameworks."),(0,o.kt)("li",{parentName:"ol"},"The user would then continue interacting with the dApp, and enjoy the benefits of Layer 2, such as extremely low fees and high transaction speed.")),(0,o.kt)("p",null,"This process can be further streamlined. Developers will have the option of integrating directly with Force Bridge and can combine steps 2-4 into a single action which is done without leaving the dApp. The user will only need to use their existing MetaMask wallet throughout the entire process. They may not even be aware they have left Ethereum and are now using Nervos!"))}f.isMDXComponent=!0}}]);