module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var r=n(3);function o(){}e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),s=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c,a={selector:"",straightOnly:!1,straightOverlapThreshold:.5,rememberSource:!1,disabled:!1,defaultElement:"",enterTo:"",leaveFor:null,restrict:"self-first",tabIndexIgnoreList:"a, input, select, textarea, button, iframe, [contentEditable=true]",navigableFilter:null},l={37:"left",38:"up",39:"right",40:"down"},f={left:"right",up:"down",right:"left",down:"up"},p="sn:",d="section-",h=0,v=!1,m=!1,y={},b=0,g="",I="",w=!1,E=function(e){var t=(this.parentNode||this.document).querySelectorAll(e);return[].slice.call(t).indexOf(this)>=0};function S(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height};return n.element=e,n.center={x:n.left+Math.floor(n.width/2),y:n.top+Math.floor(n.height/2)},n.center.left=n.center.right=n.center.x,n.center.top=n.center.bottom=n.center.y,n}function x(e,t,n){for(var r=[[],[],[],[],[],[],[],[],[]],o=0;o<e.length;o++){var i,s,u=e[o],c=u.center;if(i=c.x<t.left?0:c.x<=t.right?1:2,r[s=3*(c.y<t.top?0:c.y<=t.bottom?1:2)+i].push(u),-1!==[0,2,6,8].indexOf(s)){var a=n;u.left<=t.right-t.width*a&&(2===s?r[1].push(u):8===s&&r[7].push(u)),u.right>=t.left+t.width*a&&(0===s?r[1].push(u):6===s&&r[7].push(u)),u.top<=t.bottom-t.height*a&&(6===s?r[3].push(u):8===s&&r[5].push(u)),u.bottom>=t.top+t.height*a&&(0===s?r[3].push(u):2===s&&r[5].push(u))}}return r}function k(e,t,n,r){if(!(e&&t&&n&&n.length))return null;for(var o=[],i=0;i<n.length;i++){var s=S(n[i]);s&&o.push(s)}if(!o.length)return null;var u=S(e);if(!u)return null;var c,a=function(e){return{nearPlumbLineIsBetter:function(t){var n;return(n=t.center.x<e.center.x?e.center.x-t.right:t.left-e.center.x)<0?0:n},nearHorizonIsBetter:function(t){var n;return(n=t.center.y<e.center.y?e.center.y-t.bottom:t.top-e.center.y)<0?0:n},nearTargetLeftIsBetter:function(t){var n;return(n=t.center.x<e.center.x?e.left-t.right:t.left-e.left)<0?0:n},nearTargetTopIsBetter:function(t){var n;return(n=t.center.y<e.center.y?e.top-t.bottom:t.top-e.top)<0?0:n},topIsBetter:function(e){return e.top},bottomIsBetter:function(e){return-1*e.bottom},leftIsBetter:function(e){return e.left},rightIsBetter:function(e){return-1*e.right}}}(u),l=x(o,u,r.straightOverlapThreshold),f=x(l[4],u.center,r.straightOverlapThreshold);switch(t){case"left":c=[{group:f[0].concat(f[3]).concat(f[6]),distance:[a.nearPlumbLineIsBetter,a.topIsBetter]},{group:l[3],distance:[a.nearPlumbLineIsBetter,a.topIsBetter]},{group:l[0].concat(l[6]),distance:[a.nearHorizonIsBetter,a.rightIsBetter,a.nearTargetTopIsBetter]}];break;case"right":c=[{group:f[2].concat(f[5]).concat(f[8]),distance:[a.nearPlumbLineIsBetter,a.topIsBetter]},{group:l[5],distance:[a.nearPlumbLineIsBetter,a.topIsBetter]},{group:l[2].concat(l[8]),distance:[a.nearHorizonIsBetter,a.leftIsBetter,a.nearTargetTopIsBetter]}];break;case"up":c=[{group:f[0].concat(f[1]).concat(f[2]),distance:[a.nearHorizonIsBetter,a.leftIsBetter]},{group:l[1],distance:[a.nearHorizonIsBetter,a.leftIsBetter]},{group:l[0].concat(l[2]),distance:[a.nearPlumbLineIsBetter,a.bottomIsBetter,a.nearTargetLeftIsBetter]}];break;case"down":c=[{group:f[6].concat(f[7]).concat(f[8]),distance:[a.nearHorizonIsBetter,a.leftIsBetter]},{group:l[7],distance:[a.nearHorizonIsBetter,a.leftIsBetter]},{group:l[6].concat(l[8]),distance:[a.nearPlumbLineIsBetter,a.topIsBetter,a.nearTargetLeftIsBetter]}];break;default:return null}r.straightOnly&&c.pop();var p=function(e){for(var t=null,n=0;n<e.length;n++)if(e[n].group.length){t=e[n];break}if(!t)return null;var r=t.distance;return t.group.sort(function(e,t){for(var n=0;n<r.length;n++){var o=r[n],i=o(e)-o(t);if(i)return i}return 0}),t.group}(c);if(!p)return null;var d=null;if(r.rememberSource&&r.previous&&r.previous.destination===e&&r.previous.reverse===t)for(var h=0;h<p.length;h++)if(p[h].element===r.previous.target){d=p[h].element;break}return d||(d=p[0].element),d}function O(e){return"string"==typeof e?[].slice.call(document.querySelectorAll(e)):"object"===u(e)&&e.length?[].slice.call(e):"object"===u(e)&&1===e.nodeType?[e]:[]}function T(e,t){return"string"==typeof t?c.call(e,t):"object"===u(t)&&t.length?t.indexOf(e)>=0:"object"===u(t)&&1===t.nodeType&&e===t}function B(){var e=document.activeElement;if(e&&e!==document.body)return e}function _(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&void 0!==arguments[t][n]&&(e[n]=arguments[t][n]);return e}function C(e,t){Array.isArray(t)||(t=[t]);for(var n,r=0;r<t.length;r++)(n=e.indexOf(t[r]))>=0&&e.splice(n,1);return e}function L(e,t,n){if(!e||!t||!y[t]||y[t].disabled)return!1;if(e.offsetWidth<=0&&e.offsetHeight<=0||e.hasAttribute("disabled"))return!1;if(n&&!T(e,y[t].selector))return!1;if("function"==typeof y[t].navigableFilter){if(!1===y[t].navigableFilter(e,t))return!1}else if("function"==typeof a.navigableFilter&&!1===a.navigableFilter(e,t))return!1;return!0}function F(e){for(var t in y)if(!y[t].disabled&&T(e,y[t].selector))return t}function P(e){return O(y[e].selector).filter(function(t){return L(t,e)})}function j(e){var t=y[e].defaultElement;return t?("string"==typeof t&&(t=O(t)[0]),L(t,e,!0)?t:null):null}function N(e){var t=y[e].lastFocusedElement;return L(t,e,!0)?t:null}function M(e,t,n,r){arguments.length<4&&(r=!0);var o=document.createEvent("CustomEvent");return o.initCustomEvent(p+t,!0,r,n),e.dispatchEvent(o)}function H(e,t,n){if(!e)return!1;var r=B(),o=function(){r&&r.blur(),e.focus(),U(e,t)};if(w)return o(),!0;if(w=!0,m)return o(),w=!1,!0;if(r){var i={nextElement:e,nextSectionId:t,direction:n,native:!1};if(!M(r,"willunfocus",i))return w=!1,!1;r.blur(),M(r,"unfocused",i,!1)}var s={previousElement:r,sectionId:t,direction:n,native:!1};return M(e,"willfocus",s)?(e.focus(),M(e,"focused",s,!1),w=!1,U(e,t),!0):(w=!1,!1)}function U(e,t){t||(t=F(e)),t&&(y[t].lastFocusedElement=e,I=t)}function R(e,t){if("@"==e.charAt(0))return 1==e.length?A():A(e.substr(1));var n=O(e)[0];if(n){var r=F(n);if(L(n,r))return H(n,r,t)}return!1}function A(e){var t=[],n=function(e){e&&t.indexOf(e)<0&&y[e]&&!y[e].disabled&&t.push(e)};e?n(e):(n(g),n(I),Object.keys(y).map(n));for(var r=0;r<t.length;r++){var o,i=t[r];if(o="last-focused"==y[i].enterTo?N(i)||j(i)||P(i)[0]:j(i)||N(i)||P(i)[0])return H(o,i)}return!1}function z(e,t){M(e,"navigatefailed",{direction:t},!1)}function D(e,t){if(y[e].leaveFor&&void 0!==y[e].leaveFor[t]){var n=y[e].leaveFor[t];if("string"==typeof n)return""===n?null:R(n,t);var r=F(n);if(L(n,r))return H(n,r,t)}return!1}function K(e,t,n){var r=t.getAttribute("data-sn-"+e);if("string"==typeof r)return!(""===r||!R(r,e))||(z(t,e),!1);var o={},i=[];for(var s in y)o[s]=P(s),i=i.concat(o[s]);var u,c=_({},a,y[n]);if("self-only"==c.restrict||"self-first"==c.restrict){var l=o[n];(u=k(t,e,C(l,t),c))||"self-first"!=c.restrict||(u=k(t,e,C(i,l),c))}else u=k(t,e,C(i,t),c);if(u){y[n].previous={target:t,destination:u,reverse:f[e]};var p=F(u);if(n!=p){var d,h=D(n,e);if(h)return!0;if(null===h)return z(t,e),!1;switch(y[p].enterTo){case"last-focused":d=N(p)||j(p);break;case"default-element":d=j(p)}d&&(u=d)}return H(u,p,e)}return!!D(n,e)||(z(t,e),!1)}function W(e){if(!(!b||m||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t,n=function(){return e.preventDefault(),e.stopPropagation(),!1},r=l[e.keyCode];if(!r)return 13==e.keyCode&&(t=B())&&F(t)&&!M(t,"enter-down")?n():void 0;if(!(t=B())&&(I&&(t=N(I)),!t))return A(),n();var o=F(t);if(o)return M(t,"willmove",{direction:r,sectionId:o,cause:"keydown"})&&K(r,t,o),n()}}function q(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&!m&&b&&13==e.keyCode){var t=B();t&&F(t)&&(M(t,"enter-up")||(e.preventDefault(),e.stopPropagation()))}}function J(e){var t=e.target;if(t!==window&&t!==document&&b&&!w){var n=F(t);if(n){if(m)return void U(t,n);var r={sectionId:n,native:!0};M(t,"willfocus",r)?(M(t,"focused",r,!1),U(t,n)):(w=!0,t.blur(),w=!1)}}}function V(e){var t=e.target;if(t!==window&&t!==document&&!m&&b&&!w&&F(t)){var n={native:!0};M(t,"willunfocus",n)?M(t,"unfocused",n,!1):(w=!0,setTimeout(function(){t.focus(),w=!1}))}}c="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector)||E;var Y={init:function(e){v||(e&&(a=e),window.addEventListener("keydown",W),window.addEventListener("keyup",q),window.addEventListener("focus",J,!0),window.addEventListener("blur",V,!0),v=!0)},uninit:function(){window.removeEventListener("blur",V,!0),window.removeEventListener("focus",J,!0),window.removeEventListener("keyup",q),window.removeEventListener("keydown",W),this.clear(),h=0,v=!1},clear:function(){y={},b=0,g="",I="",w=!1},set:function(){var e,t;if("object"===u(arguments[0]))t=arguments[0];else{if("string"!=typeof arguments[0]||"object"!==u(arguments[1]))return;if(e=arguments[0],t=arguments[1],!y[e])throw new Error('Section "'+e+"\" doesn't exist!")}for(var n in t)void 0!==a[n]&&(e?y[e][n]=t[n]:void 0!==t[n]&&(a[n]=t[n]));e&&(y[e]=_({},y[e]))},add:function(){var e,t={};if("object"===u(arguments[0])?t=arguments[0]:"string"==typeof arguments[0]&&"object"===u(arguments[1])&&(e=arguments[0],t=arguments[1]),e||(e="string"==typeof t.id?t.id:function(){for(var e;e=d+String(++h),y[e];);return e}()),y[e])throw new Error('Section "'+e+'" has already existed!');return y[e]={},b++,this.set(e,t),e},remove:function(e){if(!e||"string"!=typeof e)throw new Error('Please assign the "sectionId"!');return!!y[e]&&(y[e]=void 0,y=_({},y),b--,!0)},disable:function(e){return!!y[e]&&(y[e].disabled=!0,!0)},enable:function(e){return!!y[e]&&(y[e].disabled=!1,!0)},pause:function(){m=!0},resume:function(){m=!1},focus:function(e,t){var n=!1;void 0===t&&"boolean"==typeof e&&(t=e,e=void 0);var r=!m&&t;if(r&&this.pause(),e)if("string"==typeof e)n=y[e]?A(e):R(e);else{var o=F(e);L(e,o)&&(n=H(e,o))}else n=A();return r&&this.resume(),n},move:function(e,t){if(e=e.toLowerCase(),!f[e])return!1;var n=t?O(t)[0]:B();if(!n)return!1;var r=F(n);return!!r&&(!!M(n,"willmove",{direction:e,sectionId:r,cause:"api"})&&K(e,n,r))},makeFocusable:function(e){var t=function(e){var t=void 0!==e.tabIndexIgnoreList?e.tabIndexIgnoreList:a.tabIndexIgnoreList;O(e.selector).forEach(function(e){T(e,t)||e.getAttribute("tabindex")||e.setAttribute("tabindex","-1")})};if(e){if(!y[e])throw new Error('Section "'+e+"\" doesn't exist!");t(y[e])}else for(var n in y)t(y[n])},setDefaultSection:function(e){if(e){if(!y[e])throw new Error('Section "'+e+"\" doesn't exist!");g=e}else g=""}};function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),e}function ee(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?te(e):t}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return ue}),n.d(t,"FocusableSection",function(){return ae}),n.d(t,"Focusable",function(){return ce}),n.d(t,"JsSpatialNavigation",function(){return Y});var ie={activeClassName:"active",focusableClassName:"focusable",selector:".focusable"},se={},ue=function(e){function t(){return X(this,t),ee(this,ne(t).apply(this,arguments))}return re(t,r["Component"]),$(t,[{key:"getConfigFromProps",value:function(){var e={};return"string"==typeof this.props.activeClassName&&(e.activeClassName=this.props.activeClassName),"string"==typeof this.props.focusableClassName&&(e.focusableClassName=this.props.focusableClassName),"function"==typeof this.props.customInit&&(e.customInit=this.props.customInit),"string"==typeof this.props.defaultElement&&(e.defaultElement=this.props.defaultElement),"boolean"==typeof this.props.disabled&&(e.disabled=this.props.disabled),"string"==typeof this.props.enterTo&&(e.enterTo=this.props.enterTo),"object"===Q(this.props.leaveFor)&&(e.leaveFor=this.props.leaveFor),"function"==typeof this.props.navigableFilter&&(e.navigableFilter=this.props.navigableFilter),"string"==typeof this.props.rememberSource&&(e.rememberSource=this.props.rememberSource),"string"==typeof this.props.restrict&&(e.restrict=this.props.restrict),"string"==typeof this.props.selector&&(e.selector=this.props.selector),"boolean"==typeof this.props.straightOnly&&(e.straightOnly=this.props.straightOnly),"number"==typeof this.props.straightOverlapThreshold&&(e.straightOverlapThreshold=this.props.straightOverlapThreshold),"string"==typeof this.props.tabIndexIgnoreList&&(e.tabIndexIgnoreList=this.props.tabIndexIgnoreList),e}},{key:"componentWillMount",value:function(){se=Object.assign(ie,this.getConfigFromProps.call(this))}},{key:"componentDidMount",value:function(){this.props.customInit?this.props.customInit.call(this,se):(Y.init(),Y.add(se),Y.focus())}},{key:"componentWillUnmount",value:function(){Y.uninit()}},{key:"render",value:function(){return o.a.createElement("div",null,this.props.children)}}]),t}();var ce=function(e){function t(e){var n;return X(this,t),G(te(te(n=ee(this,ne(t).call(this,e)))),"_componentFocused",function(e){return n.componentFocused(e)}),G(te(te(n)),"_componentUnfocused",function(e){return n.componentUnfocused(e)}),G(te(te(n)),"_componentClickEnter",function(e){return n.componentClickEnter(e)}),n.state={el:null},n.getRef=n.getRef.bind(te(te(n))),n}return re(t,r["Component"]),$(t,[{key:"componentFocused",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"componentUnfocused",value:function(e){this.props.onUnfocus&&this.props.onUnfocus(e)}},{key:"componentClickEnter",value:function(e){this.enterHandler&&this.enterHandler(e)}},{key:"getRef",value:function(e,t){this.enterHandler=e,this.setState({el:t})}},{key:"componentDidMount",value:function(){this.state.el&&(this.state.el.addEventListener("sn:focused",this._componentFocused),this.state.el.addEventListener("sn:unfocused",this._componentUnfocused),this.state.el.addEvestate.ntListener("sn:enter-up",this._componentClickEnter))}},{key:"componentWillUnmount",value:function(){this.state.el.removeEventListener("sn:focused",this._componentFocused),this.state.el.removeEventListener("sn:unfocused",this._componentUnfocused),this.state.el.removeEventListener("sn:enter-up",this._componentClickEnter)}},{key:"render",value:function(){var e=[this.context.focusableSectionId?this.context.focusableSectionId:se.focusableClassName];return this.props.active&&e.push(se.activeClassName),this.props.className&&e.push(this.props.className),o.a.createElement(r.Fragment,null,this.props.children(this.getRef))}}]),t}();ce.contextTypes={focusableSectionId:s.a.string};var ae=function(e){function t(){return X(this,t),ee(this,ne(t).apply(this,arguments))}return re(t,r["Component"]),$(t,[{key:"getChildContext",value:function(){return{focusableSectionId:this.sectionId}}},{key:"componentWillMount",value:function(){this.sectionId=Y.add({})}},{key:"componentWillUnmount",value:function(){Y.remove(this.sectionId)}},{key:"_getSelector",value:function(){return e=this.sectionId,".".concat(e);var e}},{key:"componentDidMount",value:function(){var e=this.props.defaultElement,t=void 0===this.props.enterTo?"default-element":this.props.enterTo;e&&"first"===e&&(e=this._getSelector()+":first-child"),e&&"active"===e&&(e=this._getSelector()+".".concat(se.activeClassName)),Y.set(this.sectionId,{selector:this._getSelector(),enterTo:t,defaultElement:e})}},{key:"render",value:function(){return o.a.createElement("div",null,this.props.children)}}]),t}();ae.childContextTypes={focusableSectionId:s.a.string}}]);