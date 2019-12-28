(window["webpackJsonphisgeomap-ui-react"]=window["webpackJsonphisgeomap-ui-react"]||[]).push([[0],{124:function(e){e.exports=JSON.parse('{"name":"hisgeomap-ui-react","version":"0.1.0","private":true,"main":"lib/src/index.js","module":"es/src/index.js","homepage":"https://hisgeomap.github.io/hisgeomap-ui-react/","dependencies":{"antd":"^3.23.4","classnames":"^2.2.6","react":"^16.10.0"},"scripts":{"start":"node scripts/start.js","start:demo":"DEMO=true node scripts/start.js","build":"yarn run build:es;yarn run build:lib; yarn run build:demo","build:dist":"shx rm -r dist;node scripts/build.js; shx mv build dist","build:demo":"shx rm -r demo;DEMO=true node scripts/build.js; shx mv build demo","build:es":"shx rm -r es; tsc -p tsconfig.es.json --outDir es; yarn run copyfiles:es","build:lib":"shx rm -r lib; tsc -p tsconfig.lib.json --outDir lib; yarn run copyfiles:lib","deploy":"gh-pages -d demo","test":"node scripts/test.js","copyfiles:lib":"copyfiles -u 1 \\"src/**/*.+(css|jpg|jpeg|png|woff|woff2|eot|ttf|svg)\\" lib/src","copyfiles:es":"copyfiles -u 1 \\"src/**/*.+(css|jpg|jpeg|png|woff|woff2|eot|ttf|svg)\\" es/src"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":[],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jest-environment-jsdom-fourteen","transform":{"^.+\\\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"]},"babel":{"presets":["react-app"]},"devDependencies":{"@babel/core":"7.6.0","@svgr/webpack":"4.3.2","@types/classnames":"^2.2.9","@types/jest":"24.0.18","@types/node":"12.7.8","@types/react":"16.9.3","@types/react-dom":"16.9.1","@types/react-router":"^5.1.1","@types/react-router-dom":"^5.1.0","@typescript-eslint/eslint-plugin":"^2.2.0","@typescript-eslint/parser":"^2.2.0","babel-eslint":"10.0.3","babel-jest":"^24.9.0","babel-loader":"8.0.6","babel-plugin-named-asset-import":"^0.3.4","babel-preset-react-app":"^9.0.2","camelcase":"^5.2.0","case-sensitive-paths-webpack-plugin":"2.2.0","copyfiles":"^2.1.1","create-react-component-folder":"^0.1.30","css-loader":"2.1.1","dotenv":"6.2.0","dotenv-expand":"5.1.0","eslint":"^6.1.0","eslint-config-react-app":"^5.0.2","eslint-loader":"3.0.0","eslint-plugin-flowtype":"3.13.0","eslint-plugin-import":"2.18.2","eslint-plugin-jsx-a11y":"6.2.3","eslint-plugin-react":"7.14.3","eslint-plugin-react-hooks":"^1.6.1","file-loader":"3.0.1","fs-extra":"7.0.1","gh-pages":"^2.1.1","html-webpack-plugin":"4.0.0-beta.5","identity-obj-proxy":"3.0.0","is-wsl":"^1.1.0","jest":"24.9.0","jest-environment-jsdom-fourteen":"0.1.0","jest-resolve":"24.9.0","jest-watch-typeahead":"0.4.0","mini-css-extract-plugin":"0.8.0","optimize-css-assets-webpack-plugin":"5.0.3","pnp-webpack-plugin":"1.5.0","postcss-flexbugs-fixes":"4.1.0","postcss-loader":"3.0.0","postcss-normalize":"7.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"4.0.1","react-app-polyfill":"^1.0.3","react-dev-utils":"^9.0.4","react-dom":"^16.10.0","react-router-dom":"^5.1.1","resolve":"1.12.0","resolve-url-loader":"3.1.0","sass-loader":"7.2.0","semver":"6.3.0","shx":"^0.3.2","style-loader":"1.0.0","terser-webpack-plugin":"1.4.1","ts-pnp":"1.1.4","typescript":"3.6.3","url-loader":"2.1.0","webpack":"4.40.2","webpack-dev-server":"3.2.1","webpack-manifest-plugin":"2.0.4","workbox-webpack-plugin":"4.3.1"}}')},129:function(e,t,a){e.exports=a(217)},134:function(e,t,a){},136:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var r=a(99),n=a(1),s=a.n(n),o=a(7),i=a.n(o),c=(a(134),a(96)),l=a(42),p=(a(135),a(52)),u=a(22),d=a(21),m=a(23),g=a(19),h=a(20),f=a(220),v=a(225),b=(a(136),a(2)),E=a.n(b);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(Object(g.a)(this,e),this.size=void 0,this.className=void 0,this.data=void 0,this.size=a,this.className=t,t){var r=localStorage.getItem(t);r?this.data=JSON.parse(r):(this.data=[],localStorage.setItem(t,JSON.stringify(this.data)))}else this.data=[]}return Object(h.a)(e,[{key:"add",value:function(e){if(this.className){var t=e.trim();this.remove(t),this.data.unshift(t),this.data.length>this.size&&this.data.pop(),localStorage.setItem(this.className,JSON.stringify(this.data))}}},{key:"remove",value:function(e){this.data=this.data.filter((function(t){return t!==e}))}}]),e}(),D=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).dataManager=new j(a.props.history),a.state={history:a.dataManager.data,value:""},a.onCloseHandle=function(e){return function(t){t.preventDefault(),t.stopPropagation(),a.dataManager.remove(e),a.props.onClose&&a.props.onClose(t),a.setState(y({},a.state,{history:a.dataManager.data}))}},a.onSelect=function(e,t,r){a.dataManager.add(e),a.props.onSelect&&a.props.onSelect(e,{}),a.setState(y({},a.state,{history:a.dataManager.data,value:a.props.render?a.props.render(e):e}))},a.onClickHandle=function(e){return function(){a.onSelect(e,!0)}},a.onChange=function(e){a.setState(y({},a.state,{value:e})),a.props.onChange&&a.props.onChange(e)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:E()("Search",this.props.className)},n.createElement(f.a,Object.assign({},this.props,{onSelect:this.onSelect,value:this.state.value,onChange:this.onChange,className:E()("SearchInput",{SearchLine:"line"===this.props.type})})),n.createElement("div",{className:"SearchHistory"},this.state.history.map((function(t,a){return n.createElement(v.a,{className:"SearchHistory-tag",key:t+a,closable:!0,onClick:e.onClickHandle(t),onClose:e.onCloseHandle(t)},e.props.render?e.props.render(t):t)}))))}}]),t}(n.Component),P=(a(193),function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).ref=n.createRef(),a.DragCore=new O(a.ref,a.props.offset,a.props.defaultExpand,a.props.forbidList),a.componentDidMount=function(){a.bindTrigger()},a.bindTrigger=function(){if(a.props.trigger){var e=document.querySelector(a.props.trigger);e&&e.addEventListener("click",a.DragCore.trigger)}},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:E()("SidePanel",this.props.className),style:{transform:"translateX(".concat(this.DragCore.offset,") translate(0,0)")},ref:this.ref,draggable:!0,onDragStart:this.DragCore.onDragStart,onDragEnd:this.DragCore.onDragStop,onDragOver:this.DragCore.onDrag,onTouchStart:this.DragCore.onTouchStart,onTouchMove:this.DragCore.onTouchMove,onTouchEnd:this.DragCore.onTouchStop},this.props.children)}}]),t}(n.Component)),O=function e(t,a){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(g.a)(this,e),this.image=new Image,this.component=void 0,this.offset=void 0,this.defaultOffset=void 0,this.transition="0.3s transform ease-in-out",this.direction=!1,this.pos=[],this.startPos=void 0,this.first=!0,this.isVertical=!1,this.scrollTop=0,this.dragging=!1,this.forbidList=[],this.addPos=function(t){r.pos.unshift(t),r.pos.length>e.SIZE&&r.pos.pop()},this.onTouchStart=function(e){e.screenX=e.changedTouches[0].screenX,e.screenY=e.changedTouches[0].screenY,r.onDragStart(e)},this.onTouchMove=function(e){e.screenX=e.changedTouches[0].screenX,e.screenY=e.changedTouches[0].screenY,r.onDrag(e)},this.onTouchStop=function(e){r.onDragStop(e)},this.onDragStart=function(e){e&&e.stopPropagation();var t=r.component.current,a=[e.screenX,e.screenY];r.pos=[],r.startPos=a,r.addPos(a),r.first=!0,r.dragging=!0,e.dataTransfer&&(e.dataTransfer.setData("Text",""),e.dataTransfer.setDragImage(r.image,0,0)),t&&(r.scrollTop=t.scrollTop,t.style.transition="none")},this.onDrag=function(e){e&&e.stopPropagation();var t=[e.screenX,e.screenY],a=r.component.current;if(r.dragging&&0!==t[0]&&a&&r.startPos&&(r.first&&(r.isVertical=Math.abs(r.pos[0][1]-t[1])-Math.abs(r.pos[0][0]-t[0])>0,r.first=!1),!r.isVertical)){var n=t[0]-r.startPos[0],s=t[0]-r.pos[0][0];r.direction=0===s?r.direction:s>0,r.addPos(t),a.scrollTop=r.scrollTop,a.style.transform="translateX(".concat(r.offset,") translate(").concat(n,"px,0)")}},this.onDragStop=function(e){e&&e.stopPropagation();var t=r.component.current;t&&r.dragging&&(r.direction?r.offset="0":r.offset=r.defaultOffset,r.isVertical||(t.scrollTop=r.scrollTop,t.style.transition=r.transition,t.style.transform="translateX(".concat(r.offset,") translate(0,0)")),r.dragging=!1)},this.trigger=function(){r.direction=!r.direction,r.dragging=!0;var e=r.component.current;r.scrollTop=e?e.scrollTop:null,r.onDragStop(null)},this.component=t,this.defaultOffset=a.trim(),this.offset=n?"0":this.defaultOffset,this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",this.forbidList=s};O.SIZE=3;var w=P,C=(a(194),function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).ref=n.createRef(),a.timer=void 0,a.animation=void 0,a.isAnimated=!1,a.speed=void 0===a.props.speed?10:a.props.speed,a.animate=function(e,t,r,n,s,o){a.isAnimated=!0,a.ref.current&&(a.animation=requestAnimationFrame((function(){var i=s();o!==i&&(r&&i<t||!r&&i>t?(n(i+(r?e:-e)),a.animate(e,t,r,n,s,i)):(n(t),a.isAnimated=!1))})))},a.center=function(e){var t=a.ref.current;if(t){for(var r,n=t.getBoundingClientRect(),s=t.childNodes[0].childNodes,o=void 0===e?n.left+n.width/2:e,i=0;i<s.length&&!((r=s[i].getBoundingClientRect()).left>=o);i++);var c=r.left-n.left+t.scrollLeft-n.width/2-r.width/2;a.animate(void 0===e?a.speed/5:a.speed,c,c>t.scrollLeft,(function(e){return t.scrollLeft=e}),(function(){return t.scrollLeft}))}},a.onClick=function(e){a.reset(),a.center(e.clientX)},a.reset=function(){void 0!==a.timer&&clearTimeout(a.timer)},a.onScroll=function(e){a.reset(),a.timer=setTimeout((function(){a.center()}),200)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:E()("Crown",this.props.className),style:{width:this.props.width},ref:this.ref,onWheel:this.onScroll},n.createElement("div",{className:"Crown-wrap",onClick:this.onClick},this.props.components.map((function(e,t){return n.createElement("div",{className:"Crown-element",key:t},e)}))))}}]),t}(n.Component)),T=a(224),N=a(127);a(195);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var x=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).open=!1,a.notify=function(){a.props.single?a.open||(a.open=!0,T.a.open(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.message,{onClose:function(){a.open=!1}}))):T.a.open(a.props.message)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.createElement(N.a,Object.assign({},this.props,{className:E()("Notification-btn",this.props.className),onClick:this.notify}),"?")}}]),t}(n.Component);x.defaultProps={single:!0,shape:"circle",message:{duration:20,message:"\u5e38\u89c1\u95ee\u9898",description:n.createElement("p",null,"\u5e74\u4efd\u6709\u95ee\u9898\uff1f\u6570\u636e\u4e0d\u6b63\u786e\uff1f\u6d4f\u89c8\u5668\u4e0d\u517c\u5bb9\uff1f \u975e\u5e38\u62b1\u6b49\uff0c\u592a\u53f2\u53e4\u5377\u8fd8\u662f\u4e00\u4e2a\u5f88\u7a1a\u5ae9\u7684\u9879\u76ee\uff0c\u6211\u4eec\u975e\u5e38\u9700\u8981\u60a8\u5b9d\u8d35\u7684\u5efa\u8bae\u548c\u6307\u6b63\uff0c\u5e0c\u671b\u60a8\u80fd\u8c05\u89e3\u3002\u82e5\u662f\u60a8\u53d1\u73b0\u4efb\u4f55\u9519\u8bef\u548c\u758f\u5ffd\uff0c\u8bf7\u60a8\u7acb\u523b\u901a\u77e5\u6211\u4eec\uff0c\u6211\u4eec\u4f1a\u9a6c\u4e0a\u8fdb\u884c\u6539\u6b63\u3002 \u6211\u4eec\u7684\u8054\u7cfb\u65b9\u5f0f\u662f",n.createElement("br",null),n.createElement("br",null),n.createElement("a",{className:"slider-bar-contact",href:"mailto:hisgeomap@gmail.com"},"hisgeomap@gmail.com"),n.createElement("br",null),n.createElement("br",null),"\u975e\u5e38\u611f\u8c22\u60a8\u7684\u8010\u5fc3\u4e0e\u5e2e\u52a9\uff01"),onClick:function(){}}};var k=x,M=(a(196),function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).ref=n.createRef(),a.DragCore=new B(a.ref,a.props.direction,a.props.states,a.props.defaultState,a.props.onStateChange),a.componentDidUpdate=function(){a.DragCore.setState(a.props.state)},a.componentDidMount=function(){var e=a.props.handle?document.querySelector(a.props.handle):a.ref.current,t=a.props.trigger?document.querySelectorAll(a.props.trigger):null;if(e&&(e.addEventListener("dragstart",a.DragCore.onDragStart,!0),e.addEventListener("drag",a.DragCore.onDrag,!0),e.addEventListener("dragend",a.DragCore.onDragStop,!0),e.addEventListener("touchstart",a.DragCore.onTouchStart,!0),e.addEventListener("touchmove",a.DragCore.onTouchMove,!0),e.addEventListener("touchend",a.DragCore.onTouchStop,!0),e.setAttribute("draggable",!0)),t)for(var r=0;r<t.length;r++)t[r].addEventListener("click",(function(e){if(a.props.onTrigger){var t=a.props.onTrigger(a.DragCore.curPos.state,e),r=a.DragCore.curPos.state;a.DragCore.curPos={state:void 0!==t?t:a.DragCore.curPos.state,displacement:[0,0],pos:[0,0]},r!==a.DragCore.curPos.state&&a.props.onStateChange&&a.props.onStateChange(r,a.DragCore.curPos.state),a.DragCore.transform()}}))},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:E()("DragPanel",this.props.className),style:{transform:this.DragCore.getTransform(),transition:this.DragCore.transition},ref:this.ref},this.props.children)}}]),t}(n.Component)),B=function e(t,a){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,o=arguments.length>4?arguments[4]:void 0;Object(g.a)(this,e),this.image=new Image,this.component=void 0,this.curPos={state:-1,displacement:[0,0],pos:[0,0]},this.transition="0.3s transform ease-in-out",this.direction=void 0,this.translatedStates=[],this.states=void 0,this.pos=[],this.startPos=[0,0],this.first=!0,this.isMainDir=!0,this.isPostiveDir=!1,this.scrollTop=0,this.dragging=!1,this.onStateChange=void 0,this.setState=function(e){if(void 0!==e){var t=r.curPos.state;r.curPos.state=e,r.curPos.displacement=[0,0],r.transform(),t!==r.curPos.state&&r.onStateChange&&r.onStateChange(t,r.curPos.state)}},this.onTouchStart=function(e){e.screenX=e.changedTouches[0].screenX,e.screenY=e.changedTouches[0].screenY,r.onDragStart(e)},this.onTouchMove=function(e){e.screenX=e.changedTouches[0].screenX,e.screenY=e.changedTouches[0].screenY,r.onDrag(e)},this.onTouchStop=function(e){r.onDragStop(e)},this.onDragStart=function(e){e&&e.stopPropagation();var t=r.component.current;r.startPos=[e.screenX,e.screenY],e.dataTransfer&&(e.dataTransfer.setData("Text",""),e.dataTransfer.setDragImage(r.image,0,0)),t&&(r.first=!0,r.dragging=!0,r.scrollTop=t.scrollTop,t.style.transition="none")},this.onDrag=function(e){e&&e.stopPropagation();var t=[e.screenX,e.screenY];if(r.dragging&&0!==t[0]&&0!==t[1]){var a=[t[0]-r.startPos[0],t[1]-r.startPos[1]];if(r.first){r.isMainDir=!0;var n=[Math.abs(a[0]),Math.abs(a[1])];switch(r.direction){case"horizontal":r.isMainDir=n[0]>=n[1];break;case"vertical":r.isMainDir=n[0]<=n[1]}r.first=!1}else if(r.isMainDir){switch(r.direction){case"horizontal":a[1]=0;break;case"vertical":a[0]=0}r.curPos.pos=a,r.transform()}}},this.onDragStop=function(e){e&&e.stopPropagation();var t=r.component.current;t&&r.dragging&&r.isMainDir&&(r.isMainDir&&(t.scrollTop=r.scrollTop,t.style.transition=r.transition,r.curPos.displacement[0]+=r.curPos.pos[0],r.curPos.displacement[1]+=r.curPos.pos[1],r.curPos.pos=[0,0],r.states.length>0&&r.setState(r.findNearestState())),r.dragging=!1)},this.transform=function(){var e=r.component.current;e&&(e.scrollTop=r.scrollTop,e.style.transform=r.getTransform())},this.getTransform=function(){return"translateX(".concat(r.curPos.state<0?0:r.states[r.curPos.state][0],") translateY(").concat(r.curPos.state<0?0:r.states[r.curPos.state][1],") translate(").concat(r.curPos.displacement[0]+r.curPos.pos[0],"px, ").concat(r.curPos.displacement[1]+r.curPos.pos[1],"px)")},this.translateCSS=function(e){return-1!==(e=e.trim()).indexOf("%")?{percent:!0,value:parseFloat(e)/100}:{percent:!1,value:parseFloat(e)}},this.calculateState=function(e,t){var a=r.translatedStates[e],n=[0,0];return n[0]=a[0].percent?t[0]*a[0].value:a[0].value,n[1]=a[1].percent?t[1]*a[1].value:a[1].value,n},this.findNearestState=function(){var e=r.component.current;if(e){var t=e.getBoundingClientRect(),a=[t.width,t.height],n=r.calculateState(r.curPos.state,a);n[0]+=r.curPos.displacement[0]+r.curPos.pos[0],n[1]+=r.curPos.displacement[1]+r.curPos.pos[1];for(var s=-1,o=Number.MAX_SAFE_INTEGER,i=0;i<r.states.length;i++){var c=r.calculateState(i,a),l=o;switch(r.direction){case"horizontal":l=Math.pow(n[0]-c[0],2);break;case"vertical":l=Math.pow(n[1]-c[1],2);break;default:l=Math.pow(n[0]-c[0],2)+Math.pow(n[1]-c[1],2)}s=l<o?i:s,o=l<o?l:o}return s}return-1},this.trigger=function(){r.dragging=!0;var e=r.component.current;r.scrollTop=e?e.scrollTop:null,r.onDragStop(null)},this.component=t,this.direction=a,this.states=n,this.translatedStates=n.map((function(e){return e.map((function(e){return r.translateCSS(e)}))})),this.onStateChange=o,this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",this.setState(s)};B.SIZE=3;var I=M,L=(a(197),a(223)),X=a(126);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={editing:!1,value:a.props.placeholder},a.ref=n.createRef(),a.renderEditable=function(){var e=function(){"string"===typeof a.state.value&&""===a.state.value.trim()||a.setState(H({},a.state,{editing:!1}))},t={onBlur:e,onPressEnter:e,onChange:function(e){a.setState(H({},a.state,{value:e.target.value}))},ref:a.ref};switch(a.props.type){case"Number":return n.createElement(L.a,Object.assign({value:Number(a.state.value)},t));default:return n.createElement(X.a,Object.assign({value:a.state.value},t))}},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("span",{className:E()("EditableText",this.props.className),onClick:function(){e.setState(H({},e.state,{editing:!0})),e.ref.current&&e.ref.current.focus()}},n.createElement("span",{className:E()("EditableText-text",{fadeIn:!this.state.editing,fadeOut:this.state.editing})},this.state.value),n.createElement("div",{className:E()("EditableText-editable",{fadeIn:this.state.editing,fadeOut:!this.state.editing})},this.renderEditable()))}}]),t}(n.Component),R=a(222),_=a(72),F=a(221),$=(a(198),a(218)),J=a(219),Q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={showComponentBorder:!1},a.renderCompoent=function(e,t){return n.createElement("div",{key:t,className:E()("DemoPage-container",{"DemoPage-container-bordered":a.state.showComponentBorder},a.props.className)},e)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:E()(this.props.className)},n.createElement("h1",null,this.props.name),n.createElement("h3",null,"Show Component Border :",n.createElement($.a,{onChange:function(t){return e.setState({showComponentBorder:t})}})),n.createElement("div",{className:"DemoPage-content"},this.props.components.map((function(t,a){return n.createElement("div",{className:"DemoPage-subsection",key:a},n.createElement("div",{className:"DemoPage-subsection-content"},n.createElement("h2",null,t.title),n.createElement(J.a,null),n.createElement("div",{className:"DemoPage-subsection-space"},t.component instanceof Array?t.component.map((function(a,r){return e.renderCompoent(a,"".concat(t.title,"-").concat(r))})):e.renderCompoent(t.component,"".concat(t.title,"-",0)))))}))))}}]),t}(n.Component),q=a(124),V=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},G={Search:{dataSource:V(10).map((function(e){return"AutoComplete "+e}))}},U=["Home","Search","SidePanel","Crown","SideNotification","DragPanel","EditableText"],Z=s.a.createRef();i.a.render(s.a.createElement((function(){var e=Object(n.useState)(window.location.pathname.substr(window.location.pathname.lastIndexOf("/")+1)),t=Object(r.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(2),p=Object(r.a)(i,2),u=p[0],d=p[1];return s.a.createElement("div",null,s.a.createElement(c.a,{basename:"/"+q.name},s.a.createElement(w,{offset:"-250px",className:"navigation",trigger:".menu-btn"},s.a.createElement(R.a,{className:"menu",selectedKeys:[a.toLowerCase()]},U.map((function(e){return s.a.createElement(R.a.Item,{key:e.toLowerCase()},s.a.createElement(c.b,{to:"/"+e,onClick:function(){return o(e)}},e))}))),s.a.createElement("div",{className:"btn-group"},s.a.createElement(N.a,{className:"menu-btn"},"Menu"))),s.a.createElement("div",{className:"app fixed-layout-content"},s.a.createElement(l.c,null,s.a.createElement(l.a,{path:"/Search"},s.a.createElement(Q,{className:"normal",name:"Search",components:[{title:"Basic Search",component:[s.a.createElement(D,{dataSource:G.Search.dataSource}),s.a.createElement(D,{size:"large",dataSource:G.Search.dataSource}),s.a.createElement(D,{size:"small",dataSource:G.Search.dataSource})]},{title:"Search Line",component:s.a.createElement(D,{type:"line",dataSource:G.Search.dataSource})},{title:"Search History",component:s.a.createElement(D,{type:"line",history:"hisgeomap-example",render:function(e){return"(".concat(e,")")},dataSource:G.Search.dataSource})}]})),s.a.createElement(l.a,{path:"/SidePanel"},s.a.createElement(Q,{className:"large absolute",name:"SidePanel  (Will be Deprecated)",components:[{title:"Basic SidePanel",component:s.a.createElement(w,{offset:"-80%",forbidList:["ant-slider"]},s.a.createElement("div",{className:"side-panel-demo"},s.a.createElement(N.a,null,"Side Panel"),s.a.createElement(F.a,null),s.a.createElement(D,{type:"line",placeholder:"Search",dataSource:G.Search.dataSource})))},{title:"SidePanel Trigger",component:s.a.createElement(w,{offset:"-80%",trigger:".side-panel-trigger"},s.a.createElement("div",{className:"side-panel-demo"},s.a.createElement(N.a,{disabled:!0},"Side Panel"),s.a.createElement(N.a,{className:"side-panel-trigger"},"Trigger")))},{title:"SidePanel Default Expand",component:s.a.createElement(w,{offset:"-80%",defaultExpand:!0},s.a.createElement("div",{className:"side-panel-demo"},s.a.createElement(N.a,{disabled:!0},"Side Panel")))}]})),s.a.createElement(l.a,{path:"/Crown"},s.a.createElement(Q,{name:"Crown",components:[{title:"Basic Crown",component:s.a.createElement(C,{components:V(20).map((function(e){return s.a.createElement("div",{className:"crown-box"},e)}))})},{title:"Crown with ToolTip",component:s.a.createElement(C,{components:V(20).map((function(e){return s.a.createElement("div",{className:"crown-box",ref:Z},s.a.createElement(_.a,{title:"Tooltip"},s.a.createElement("div",{className:"crown-box-content"},e)))}))})}]})),s.a.createElement(l.a,{path:"/SideNotification"},s.a.createElement(Q,{name:"SideNotification",components:[{title:"Basic SideNotification",component:s.a.createElement(k,null)}]})),s.a.createElement(l.a,{path:"/DragPanel"},s.a.createElement(Q,{className:"large absolute",name:"DragPanel",components:[{title:"Basic DragPanel",component:[s.a.createElement(I,{direction:"vertical"},s.a.createElement(N.a,null,"Drag Panel"),s.a.createElement(F.a,{onChange:function(){console.log("b")}}))]},{title:"DragPanel - State Control",component:[s.a.createElement("div",null,s.a.createElement(I,{direction:"vertical",states:[["0","0"],["0","40%"],["20%","70%"]],defaultState:2}),s.a.createElement(I,{className:"DragPanel-demo-backgound",direction:"vertical",states:[["0","0"],["0","40%"],["20%","70%"]],defaultState:2}))]},{title:"DragPanel - Horizontal",component:[s.a.createElement(I,{direction:"horizontal",states:[["0","0"],["50%","0%"],["90%","0%"]],defaultState:1})]},{title:"DragPanel - Handle",component:[s.a.createElement("div",null,s.a.createElement(I,{direction:"vertical",states:[["0%","0"],["0%","40%"],["0%","90%"]],handle:".DragPanel-demo-handle",defaultState:2},s.a.createElement(N.a,{className:"DragPanel-demo-handle"},"Handle")),s.a.createElement(I,{direction:"vertical",handle:".DragPanel-demo-handle2",className:"DragPanel-demo-backgound"},s.a.createElement(N.a,{className:"DragPanel-demo-handle2"},"Handle")))]},{title:"DragPanel - Trigger",component:[s.a.createElement("div",null,s.a.createElement(I,{direction:"vertical",states:[["0","0"],["0","40%"],["0%","90%"]],trigger:".DragPanel-demo-trigger",onTrigger:function(){return 1},defaultState:2},s.a.createElement(N.a,{className:"DragPanel-demo-trigger"},"Trigger")),s.a.createElement(I,{direction:"horizontal",className:"DragPanel-demo-backgound",states:[["0%","0"],["20%","0%"],["40%","0%"]],trigger:".DragPanel-demo-trigger2",onTrigger:function(){return 1},defaultState:0},s.a.createElement(N.a,{className:"DragPanel-demo-trigger2"},"Trigger")))]},{title:"DragPanel - State Change",component:[s.a.createElement("div",null,s.a.createElement(I,{direction:"horizontal",className:"DragPanel-demo-backgound",states:[["0%","0"],["20%","0%"],["40%","0%"]],trigger:".DragPanel-demo-trigger3",onTrigger:function(){return 1},state:u,onStateChange:function(e,t){return d(t)},defaultState:0},s.a.createElement(N.a,{className:"DragPanel-demo-trigger3"},"Trigger")),s.a.createElement(I,{direction:"vertical",states:[["0","0"],["0","40%"],["0%","90%"]],state:u,onStateChange:function(e,t){console.log(e,t),d(t)},defaultState:2},s.a.createElement(N.a,{onClick:function(){return d(1)}},"Change to State 1")))]}]})),s.a.createElement(l.a,{path:"/EditableText"},s.a.createElement(Q,{className:"normal",name:"EditableText",components:[{title:"Basic EditableText",component:[s.a.createElement("h1",null,"Please"," ",s.a.createElement(Y,{placeholder:"Edit Here"}),". Thank you.")]}]}))))))}),null),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.7f484c29.chunk.js.map