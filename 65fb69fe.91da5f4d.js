(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),r=(a(0),a(216)),c={last_modified_on:"2020-07-09",title:"What is Gnet?",description:"High-level description of the Gnet framework and its features."},o={id:"about/what-is-gnet",title:"What is Gnet?",description:"High-level description of the Gnet framework and its features.",source:"@site/docs/about/what-is-gnet.md",permalink:"/docs/about/what-is-gnet",editUrl:"https://github.com/panjf2000/gnet/edit/master/website/docs/about/what-is-gnet.md",sidebar:"docs",next:{title:"Gnet \u662f\u4ec0\u4e48?",permalink:"/docs/about/what-is-gnet-cn"}},b=[{value:"\ud83d\udcd6 Introduction",id:"-introduction",children:[]},{value:"\ud83d\ude80 Features",id:"-features",children:[]},{value:"\ud83d\udcda Documentation",id:"-documentation",children:[]}],l={rightToc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"-introduction"},"\ud83d\udcd6 Introduction"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"gnet")," is an event-driven networking framework that is fast and lightweight. It makes direct ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Epoll"}),"epoll")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Kqueue"}),"kqueue")," syscalls rather than using the standard Go ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net")," package and works in a similar manner as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/netty/netty"}),"netty")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/libuv/libuv"}),"libuv"),", which makes ",Object(r.b)("inlineCode",{parentName:"p"},"gnet")," achieve a much higher performance than Go ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"gnet")," is not designed to displace the standard Go ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net")," package, but to create a networking server framework for Go that performs on par with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://redis.io"}),"Redis")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.haproxy.org"}),"Haproxy")," for networking packets handling."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"gnet")," sells itself as a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go which works on transport layer with TCP/UDP protocols and Unix Domain Socket , so it allows developers to implement their own protocols(HTTP, RPC, WebSocket, Redis, etc.) of application layer upon ",Object(r.b)("inlineCode",{parentName:"p"},"gnet")," for building  diversified network applications, for instance, you get an HTTP Server or Web Framework if you implement HTTP protocol upon ",Object(r.b)("inlineCode",{parentName:"p"},"gnet")," while you have a Redis Server done with the implementation of Redis protocol upon ",Object(r.b)("inlineCode",{parentName:"p"},"gnet")," and so on."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"gnet")," derives from the project: ",Object(r.b)("inlineCode",{parentName:"strong"},"evio")," while having a much higher performance and more features.")),Object(r.b)("h2",{id:"-features"},"\ud83d\ude80 Features"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#-performance"}),"High-performance")," event-loop under networking model of multiple threads/goroutines"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Built-in goroutine pool powered by the library ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/ants"}),"ants")),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Built-in memory pool with bytes powered by the library ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/valyala/bytebufferpool"}),"bytebufferpool")),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Lock-free during the entire runtime"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Concise and easy-to-use APIs"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Efficient and reusable memory buffer: Ring-Buffer"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Supporting multiple protocols/IPC mechanism: ",Object(r.b)("inlineCode",{parentName:"li"},"TCP"),", ",Object(r.b)("inlineCode",{parentName:"li"},"UDP")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Unix Domain Socket")),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Supporting multiple load-balancing algorithms: ",Object(r.b)("inlineCode",{parentName:"li"},"Round-Robin"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Source-Addr-Hash")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Least-Connections")),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Supporting two event-driven mechanisms: ",Object(r.b)("inlineCode",{parentName:"li"},"epoll")," on ",Object(r.b)("strong",{parentName:"li"},"Linux")," and ",Object(r.b)("inlineCode",{parentName:"li"},"kqueue")," on ",Object(r.b)("strong",{parentName:"li"},"FreeBSD/DragonFly/Darwin")),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Supporting asynchronous write operation"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Flexible ticker event"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","SO_REUSEPORT socket option"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Built-in multiple codecs to encode/decode network frames into/from TCP stream: LineBasedFrameCodec, DelimiterBasedFrameCodec, FixedLengthFrameCodec and LengthFieldBasedFrameCodec, referencing ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://netty.io/4.1/api/io/netty/handler/codec/package-summary.html"}),"netty codec"),", also supporting customized codecs"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Supporting Windows platform with ",Object(r.b)("del",{parentName:"li"},"event-driven mechanism of IOCP")," Go stdlib: net"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Implementation of ",Object(r.b)("inlineCode",{parentName:"li"},"gnet")," Client")),Object(r.b)("h2",{id:"-documentation"},"\ud83d\udcda Documentation"),Object(r.b)("p",null,"For more details about using ",Object(r.b)("inlineCode",{parentName:"p"},"gnet"),", please visit ",Object(r.b)("a",{href:"https://pkg.go.dev/github.com/panjf2000/gnet?tab=doc",target:"_blank"},"documentations for gnet"),"."))}p.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return a?i.a.createElement(u,o({ref:t},l,{components:a})):i.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<r;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);