webpackJsonp([0],{80:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),a=i.n(r),l=i(23),c=(i.n(l),i(85)),h=i(87),u=i.n(h),p=i(88),f=i.n(p),d=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),m=function(t){function e(t){n(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),s=[{id:1,name:"\u70ed\u5356"},{id:2,name:"\u4f1a\u5458\u4e13\u4eab"},{id:3,name:"\u6c34\u679c"},{id:4,name:"\u852c\u83dc"},{id:5,name:"\u8089\u86cb"},{id:6,name:"\u8089\u86cb6"},{id:7,name:"\u6c34\u4ea77"},{id:8,name:"\u6c34\u4ea78"},{id:9,name:"\u6c34\u4ea79"}];return i.state={arr:s,addClass:1,iScrollOptions:{mouseWheel:!0,scrollbars:!1,scrollX:!0,scrollY:!1}},i}return s(e,t),d(e,[{key:"componentWillMount",value:function(){console.log("\u5728\u6e32\u67d3\u524d\u8c03\u7528,\u5728\u5ba2\u6237\u7aef\u4e5f\u5728\u670d\u52a1\u7aef\u3002")}},{key:"componentDidMount",value:function(){console.log("555")}},{key:"navTab",value:function(t,e){this.setState({addClass:t}),console.log(t)}},{key:"render",value:function(){var t=this,e=this.state.iScrollOptions;return a.a.createElement("div",{className:"home"},a.a.createElement("div",{className:"home-content"},a.a.createElement("div",{className:"homeTop"},a.a.createElement(f.a,{iScroll:u.a,options:e},a.a.createElement("ul",{className:"nav"},this.state.arr.map(function(e,i){return a.a.createElement("li",{key:e.id,className:"nav-list  "+(t.state.addClass===e.id?"is-active":""),onClick:t.navTab.bind(t,e.id)}," ",e.name)})))),a.a.createElement("div",{className:"home-middle"},a.a.createElement("div",null))),a.a.createElement(c.a,null))}}]),e}(r.Component);e.default=m},84:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAlCAYAAADIgFBEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RUNERjQwRjNBQzExRTdCQjM3RTlGOTA1QTY0MTRFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0RUNERjQxRjNBQzExRTdCQjM3RTlGOTA1QTY0MTRFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDRFQ0RGM0VGM0FDMTFFN0JCMzdFOUY5MDVBNjQxNEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDRFQ0RGM0ZGM0FDMTFFN0JCMzdFOUY5MDVBNjQxNEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7N/+zvAAACiUlEQVR42mJggIB6IH4AxH+A+C+UpgX+D8SfgXgfECsxoAFGIM4A4ulQ/luoBiYG2oDfQCwGtfcDEGsD8TNkBTegDrBmoA8AeXQh1M5MdElYaNATGELtLEZ35U8om4eOjhGE0n/RHfMfKf3QCzBDaZQYYcGjgRea4CgFrNAcRBDgcswZIDamYkiAzDMH4n/kOOYXUjBSkrgZofg3MebgcowVEHNRMZq+URJNDMQaQGRBR3QBNGjAqGNITTM2QKyBVNOSYt53IN5MbNlCjGMOU+jJQiCeQC3HJAOxLhllDCjafwDxJmpG07yRlIB5sAXGQDnmKhDfgZbOKOApNG3wDoCjBIlJM/pALI+tzYEUoq+A+DgRFmpCm7RyQMwBxC+A+CYQbwXi98SEzH8isQYeRwgA8WI8ekHNXQ9iQqYIiPXQm4Vo+l5AMTZgDG3DgMA6aO/jEbQQFQZiSyCeCMTbgXg2EKfRKs3IIvk+mECO2gxVV08rx5yAmqeNJMYOxNFALINF/R6oemNqO8YeatZ0NHFTbF0TKOCGyu2mtmP2Qc3iQBO3gIrn42kj/6d2oWcH7a7+QBOHZYQnOPStINTsJLc/9AyLOBuU9oJ2GkEhdw+IzyH1aqmegH/h8L0WlnLmFZJ8KUiMBSl0flHBMcehUcWE1ke6Bk3E0khyj5HkQ2GM11Ts+DtAzZpFgh5OWG4CdbA2ALE/1IDVZDoC1NQ8CmWfB2IDaP12iQi964E4AIjNGKD1y3cS6iNc2B9LCexCwCFboOoakUcepKEpXQhPTY0PsEFzxjYo3wxaEoPM3wmtg0Dyn4BYDYidgDgO2msF1VEFtG6rSEEdBwulX9AmA4z/EeogOAAIMADD1tiHk1gusQAAAABJRU5ErkJggg=="},85:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=i(0),a=i.n(r),l=i(24),c=i(23),h=(i.n(c),function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()),u=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),h(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("nav",{className:"main-menu"},a.a.createElement(l.b,{to:"/home",activeStyle:{color:"#f4629b"}},a.a.createElement("img",{src:i(84),alt:""}),a.a.createElement("p",null,"\u9996\u9875")),a.a.createElement(l.b,{to:"/goodList",activeStyle:{color:"#f4629b"}},a.a.createElement("img",{src:i(84),alt:""}),a.a.createElement("p",null,"\u83dc\u54c1")),a.a.createElement(l.b,{to:"/ShoppingCart",activeStyle:{color:"#f4629b"}},a.a.createElement("img",{src:i(84),alt:""}),a.a.createElement("p",null,"\u8d2d\u7269\u8f66")),a.a.createElement(l.b,{to:"/myHome",activeStyle:{color:"#f4629b"}},a.a.createElement("img",{src:i(84),alt:""}),a.a.createElement("p",null,"\u6211\u7684"))))}}]),e}(r.Component);e.a=u},87:function(t,e,i){var n;!function(o,s,r){function a(t,e){this.wrapper="string"==typeof t?s.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!c.hasPointer,disableTouch:c.hasPointer||!c.hasTouch,disableMouse:c.hasPointer||c.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"===typeof o.onmousedown};for(var i in e)this.options[i]=e[i];this.translateZ=this.options.HWCompositing&&c.hasPerspective?" translateZ(0)":"",this.options.useTransition=c.hasTransition&&this.options.useTransition,this.options.useTransform=c.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?c.ease[this.options.bounceEasing]||c.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var l=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){o.setTimeout(t,1e3/60)},c=function(){function t(t){return!1!==n&&(""===n?t:n+t.charAt(0).toUpperCase()+t.substr(1))}var e={},i=s.createElement("div").style,n=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,n=t.length;e<n;e++)if(t[e]+"ransform"in i)return t[e].substr(0,t[e].length-1);return!1}();e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,e){for(var i in e)t[i]=e[i]},e.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},e.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},e.prefixPointerEvent=function(t){return o.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,e,i,n,o,s){var a,l,c=t-e,h=r.abs(c)/i;return s=void 0===s?6e-4:s,a=t+h*h/(2*s)*(c<0?-1:1),l=h/s,a<n?(a=o?n-o/2.5*(h/8):n,c=r.abs(a-t),l=c/h):a>0&&(a=o?o/2.5*(h/8):0,c=r.abs(t)+a,l=c/h),{destination:r.round(a),duration:l}};var a=t("transform");return e.extend(e,{hasTransform:!1!==a,hasPerspective:t("perspective")in i,hasTouch:"ontouchstart"in o,hasPointer:!(!o.PointerEvent&&!o.MSPointerEvent),hasTransition:t("transition")in i}),e.isBadAndroid=function(){var t=o.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var e=t.match(/Safari\/(\d+.\d)/);return!(e&&"object"===typeof e&&e.length>=2)||parseFloat(e[1])<535.19}return!1}(),e.extend(e.style={},{transform:a,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var n=t.className.split(" ");n.push(i),t.className=n.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var n=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(n," ")}},e.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},e.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return r.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*r.pow(2,-10*t)*r.sin((t-.055)*(2*r.PI)/.22)+1}}}),e.tap=function(t,e){var i=s.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},e.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||(e=s.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,t.view,1,i.screenX,i.screenY,i.clientX,i.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,i.dispatchEvent(e))},e}();a.prototype={version:"5.2.0",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=c.eventType[t.type]){if(0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return}if(this.enabled&&(!this.initiated||c.eventType[t.type]===this.initiated)){!this.options.preventDefault||c.isBadAndroid||c.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,i=t.touches?t.touches[0]:t;this.initiated=c.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=c.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,e=this.getComputedPosition(),this._translate(r.round(e.x),r.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=i.pageX,this.pointY=i.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&c.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,i,n,o,s=t.touches?t.touches[0]:t,a=s.pageX-this.pointX,l=s.pageY-this.pointY,h=c.getTime();if(this.pointX=s.pageX,this.pointY=s.pageY,this.distX+=a,this.distY+=l,n=r.abs(this.distX),o=r.abs(this.distY),!(h-this.endTime>300&&n<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(n>o+this.options.directionLockThreshold?this.directionLocked="h":o>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}a=this.hasHorizontalScroll?a:0,l=this.hasVerticalScroll?l:0,e=this.x+a,i=this.y+l,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+a/3:e>0?0:this.maxScrollX),(i>0||i<this.maxScrollY)&&(i=this.options.bounce?this.y+l/3:i>0?0:this.maxScrollY),this.directionX=a>0?-1:a<0?1:0,this.directionY=l>0?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,i),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&c.eventType[t.type]===this.initiated){this.options.preventDefault&&!c.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,i,n=(t.changedTouches&&t.changedTouches[0],c.getTime()-this.startTime),o=r.round(this.x),s=r.round(this.y),a=r.abs(o-this.startX),l=r.abs(s-this.startY),h=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=c.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,s),!this.moved)return this.options.tap&&c.tap(t,this.options.tap),this.options.click&&c.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&n<200&&a<100&&l<100)return void this._execEvent("flick");if(this.options.momentum&&n<300&&(e=this.hasHorizontalScroll?c.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},i=this.hasVerticalScroll?c.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:s,duration:0},o=e.destination,s=i.destination,h=r.max(e.duration,i.duration),this.isInTransition=1),o!=this.x||s!=this.y)return(o>0||o<this.maxScrollX||s>0||s<this.maxScrollY)&&(u=c.ease.quadratic),void this.scrollTo(o,s,h,u);this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(e!=this.x||i!=this.y)&&(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=c.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||c.ease.circular,this.isInTransition=this.options.useTransition&&i>0;var o=this.options.useTransition&&n.style;!i||o?(o&&(this._transitionTimingFunction(n.style),this._transitionTime(i)),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,i,n,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var s=c.offset(t);s.left-=this.wrapperOffset.left,s.top-=this.wrapperOffset.top,!0===i&&(i=r.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===n&&(n=r.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),s.left-=i||0,s.top-=n||0,s.left=s.left>0?0:s.left<this.maxScrollX?this.maxScrollX:s.left,s.top=s.top>0?0:s.top<this.maxScrollY?this.maxScrollY:s.top,e=void 0===e||null===e||"auto"===e?r.max(r.abs(this.x-s.left),r.abs(this.y-s.top)):e,this.scrollTo(s.left,s.top,e,o)}},_transitionTime:function(t){t=t||0;var e=c.style.transitionDuration;if(this.scrollerStyle[e]=t+"ms",!t&&c.isBadAndroid){this.scrollerStyle[e]="0.0001ms";var i=this;l(function(){"0.0001ms"===i.scrollerStyle[e]&&(i.scrollerStyle[e]="0s")})}},_transitionTimingFunction:function(t){this.scrollerStyle[c.style.transitionTimingFunction]=t},_translate:function(t,e){this.options.useTransform?this.scrollerStyle[c.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=r.round(t),e=r.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e},_initEvents:function(t){var e=t?c.removeEvent:c.addEvent,i=this.options.bindToWrapper?this.wrapper:o;e(o,"orientationchange",this),e(o,"resize",this),this.options.click&&e(this.wrapper,"click",this,!0),this.options.disableMouse||(e(this.wrapper,"mousedown",this),e(i,"mousemove",this),e(i,"mousecancel",this),e(i,"mouseup",this)),c.hasPointer&&!this.options.disablePointer&&(e(this.wrapper,c.prefixPointerEvent("pointerdown"),this),e(i,c.prefixPointerEvent("pointermove"),this),e(i,c.prefixPointerEvent("pointercancel"),this),e(i,c.prefixPointerEvent("pointerup"),this)),c.hasTouch&&!this.options.disableTouch&&(e(this.wrapper,"touchstart",this),e(i,"touchmove",this),e(i,"touchcancel",this),e(i,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,e,i=o.getComputedStyle(this.scroller,null);return this.options.useTransform?(i=i[c.style.transform].split(")")[0].split(", "),t=+(i[12]||i[4]),e=+(i[13]||i[5])):(t=+i.left.replace(/[^-\d.]/g,""),e=+i.top.replace(/[^-\d.]/g,"")),{x:t,y:e}},_animate:function(t,e,i,n){function o(){var p,f,d,m=c.getTime();if(m>=u)return s.isAnimating=!1,s._translate(t,e),void(s.resetPosition(s.options.bounceTime)||s._execEvent("scrollEnd"));m=(m-h)/i,d=n(m),p=(t-r)*d+r,f=(e-a)*d+a,s._translate(p,f),s.isAnimating&&l(o)}var s=this,r=this.x,a=this.y,h=c.getTime(),u=h+i;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.utils=c,"undefined"!=typeof t&&t.exports?t.exports=a:void 0!==(n=function(){return a}.call(e,i,e,t))&&(t.exports=n)}(window,document,Math)},88:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});for(var a=(function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()),l=i(0),c=n(l),h=i(25),u=n(h),p=i(89),f=n(p),d=["defer","iScroll","onRefresh","options"],m={},v=["beforeScrollStart","scrollCancel","scrollStart","scroll","scrollEnd","flick","zoomStart","zoomEnd"],y=0,b=v.length;y<b;y++){var g=v[y],E="on"+g[0].toUpperCase()+g.slice(1);m[E]=g,d.push(E)}var T=function(t){function e(t){o(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._isMounted=!1,i._initializeTimeout=null,i._queuedCallbacks=[],i._iScrollBindedEvents={},i}return r(e,t),a(e,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._initializeIScroll()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this._teardownIScroll()}},{key:"shouldComponentUpdate",value:function(t,e){return!(0,f.default)(this.props,t)||!(0,f.default)(this.context,e)}},{key:"componentDidUpdate",value:function(t){var e=this;(0,f.default)(t.options,this.props.options)?(this._updateIScrollEvents(t,this.props),this.refresh()):this.withIScroll(!0,function(t){var i=t.x,n=t.y,o=t.scale;e._teardownIScroll(),e._initializeIScroll(),e.withIScroll(!0,function(t){o&&t.zoom&&t.zoom(o,0,0,0),t.scrollTo(i,n)})})}},{key:"getIScroll",value:function(){return this._iScrollInstance}},{key:"getIScrollInstance",value:function(){return console.warn("Function 'getIScrollInstance' is deprecated. Instead use 'getIScroll'"),this._iScrollInstance}},{key:"withIScroll",value:function(t,e){e||"function"!=typeof t||(e=t),this.getIScroll()?e(this.getIScroll()):!0===t&&this._queuedCallbacks.push(e)}},{key:"refresh",value:function(){this.withIScroll(function(t){return t.refresh()})}},{key:"_runInitializeIScroll",value:function(){var t=this,e=this.props,i=e.iScroll,n=e.options,o=new i(u.default.findDOMNode(this),n);this._iScrollInstance=o,this._triggerRefreshEvent(),o.originalRefresh=o.refresh,o.refresh=function(){o.originalRefresh.apply(o),t._triggerRefreshEvent()},this._bindIScrollEvents(),this._callQueuedCallbacks()}},{key:"_initializeIScroll",value:function(){var t=this;if(!1!==this._isMounted){var e=this.props.defer;if(!1===e)this._runInitializeIScroll();else{var i=!0===e?0:e;this._initializeTimeout=setTimeout(function(){return t._runInitializeIScroll()},i)}}}},{key:"_callQueuedCallbacks",value:function(){var t=this._queuedCallbacks,e=t.length;this._queuedCallbacks=[];for(var i=0;i<e;i++)t[i](this.getIScroll())}},{key:"_teardownIScroll",value:function(){this._clearInitializeTimeout(),this._iScrollInstance&&(this._iScrollInstance.destroy(),this._iScrollInstance=void 0),this._iScrollBindedEvents={},this._queuedCallbacks=[]}},{key:"_clearInitializeTimeout",value:function(){null!==this._initializeTimeout&&(clearTimeout(this._initializeTimeout),this._initializeTimeout=null)}},{key:"_bindIScrollEvents",value:function(){this._iScrollBindedEvents={},this._updateIScrollEvents({},this.props)}},{key:"_updateIScrollEvents",value:function(t,e){for(var i in m)this._updateIScrollEvent(m[i],t[i],e[i])}},{key:"_updateIScrollEvent",value:function(t,e,i){if(e!==i){var n=this._iScrollBindedEvents;this.withIScroll(!0,function(o){if("function"===typeof e&&(o.off(t,n[t]),n[t]=void 0),"function"===typeof i){var s=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];i.apply(void 0,[o].concat(e))};o.on(t,s),n[t]=s}})}}},{key:"_triggerRefreshEvent",value:function(){var t=this.props.onRefresh;"function"===typeof t&&this.withIScroll(function(e){return t(e)})}},{key:"render",value:function(){var t={};for(var e in this.props)~d.indexOf(e)||(t[e]=this.props[e]);return c.default.createElement("div",t)}}]),e}(c.default.Component);T.displayName="ReactIScroll",T.defaultProps={defer:!0,options:{},style:{position:"relative",height:"100%",width:"100%",overflow:"hidden"}},e.default=T},89:function(t,e,i){function n(t){return null===t||void 0===t}function o(t){return!(!t||"object"!==typeof t||"number"!==typeof t.length)&&("function"===typeof t.copy&&"function"===typeof t.slice&&!(t.length>0&&"number"!==typeof t[0]))}function s(t,e,i){var s,h;if(n(t)||n(e))return!1;if(t.prototype!==e.prototype)return!1;if(l(t))return!!l(e)&&(t=r.call(t),e=r.call(e),c(t,e,i));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}try{var u=a(t),p=a(e)}catch(t){return!1}if(u.length!=p.length)return!1;for(u.sort(),p.sort(),s=u.length-1;s>=0;s--)if(u[s]!=p[s])return!1;for(s=u.length-1;s>=0;s--)if(h=u[s],!c(t[h],e[h],i))return!1;return typeof t===typeof e}var r=Array.prototype.slice,a=i(90),l=i(91),c=t.exports=function(t,e,i){return i||(i={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?i.strict?t===e:t==e:s(t,e,i))}},90:function(t,e){function i(t){var e=[];for(var i in t)e.push(i);return e}e=t.exports="function"===typeof Object.keys?Object.keys:i,e.shim=i},91:function(t,e){function i(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function n(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?i:n,e.supported=i,e.unsupported=n}});
//# sourceMappingURL=0.4bc443c7.chunk.js.map