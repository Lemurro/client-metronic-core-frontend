!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bowser=n():t.bowser=n()}(this,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=334)}([function(t,n,r){var e=r(2),i=r(22),o=r(13),u=r(12),c=r(21),a=function(t,n,r){var s,f,l,h,v=t&a.F,p=t&a.G,d=t&a.S,g=t&a.P,y=t&a.B,b=p?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=p?i:i[n]||(i[n]={}),w=m.prototype||(m.prototype={});for(s in p&&(r=n),r)l=((f=!v&&b&&void 0!==b[s])?b:r)[s],h=y&&f?c(l,e):g&&"function"==typeof l?c(Function.call,l):l,b&&u(b,s,l,t&a.U),m[s]!=l&&o(m,s,h),g&&w[s]!=l&&(w[s]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(64)("wks"),i=r(41),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(25),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(1),i=r(130),o=r(27),u=Object.defineProperty;n.f=r(8)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(26);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(0),i=r(3),o=r(26),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},function(t,n,r){var e=r(2),i=r(13),o=r(17),u=r(41)("src"),c=Function.toString,a=(""+c).split("toString");r(22).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var s="function"==typeof r;s&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(s&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(7),i=r(42);t.exports=r(8)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(17),i=r(9),o=r(94)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(48),i=r(42),o=r(16),u=r(27),c=r(17),a=r(130),s=Object.getOwnPropertyDescriptor;n.f=r(8)?s:function(t,n){if(t=o(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(49),i=r(26);t.exports=function(t){return e(i(t))}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e,i,o;i=[t],void 0===(o="function"==typeof(e=function(t){"use strict";var n=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),r=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,null,[{key:"getFirstMatch",value:function(t,n){var r=n.match(t);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(t,n){var r=n.match(t);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(t,n,r){if(t.test(n))return r}},{key:"getWindowsVersionName",value:function(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}},{key:"getVersionPrecision",value:function(t){return t.split(".").length}},{key:"compareVersions",value:function(n,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.getVersionPrecision(n),o=t.getVersionPrecision(r),u=Math.max(i,o),c=0,a=t.map([n,r],function(n){var r=u-t.getVersionPrecision(n),e=n+new Array(r+1).join(".0");return t.map(e.split("."),function(t){return new Array(20-t.length).join("0")+t}).reverse()});for(e&&(c=u-Math.min(i,o)),u-=1;u>=c;){if(a[0][u]>a[1][u])return 1;if(a[0][u]===a[1][u]){if(u===c)return 0;u-=1}else if(a[0][u]<a[1][u])return-1}}},{key:"map",value:function(t,n){var r=[],e=void 0;if(Array.prototype.map)return Array.prototype.map.call(t,n);for(e=0;e<t.length;e+=1)r.push(n(t[e]));return r}}]),t}();t.exports=r})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(21),i=r(49),o=r(9),u=r(6),c=r(77);t.exports=function(t,n){var r=1==t,a=2==t,s=3==t,f=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,g,y=o(n),b=i(y),m=e(c,p,3),w=u(b.length),S=0,x=r?v(n,w):a?v(n,0):void 0;w>S;S++)if((h||S in b)&&(g=m(d=b[S],S,y),t))if(r)x[S]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:x.push(d)}else if(f)return!1;return l?-1:s||f?f:x}}},function(t,n,r){var e=r(0),i=r(22),o=r(3);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(109),i=r(0),o=r(64)("metadata"),u=o.store||(o.store=new(r(106))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,n,r){"use strict";if(r(8)){var e=r(31),i=r(2),o=r(3),u=r(0),c=r(53),a=r(71),s=r(21),f=r(35),l=r(42),h=r(13),v=r(33),p=r(25),d=r(6),g=r(104),y=r(39),b=r(27),m=r(17),w=r(47),S=r(4),x=r(9),_=r(80),M=r(38),F=r(14),O=r(37).f,E=r(78),P=r(41),k=r(5),A=r(23),j=r(63),N=r(56),R=r(75),T=r(44),I=r(59),L=r(36),B=r(76),C=r(114),W=r(7),D=r(15),V=W.f,U=D.f,G=i.RangeError,z=i.TypeError,Y=i.Uint8Array,K=Array.prototype,J=a.ArrayBuffer,q=a.DataView,X=A(0),H=A(2),Z=A(3),$=A(4),Q=A(5),tt=A(6),nt=j(!0),rt=j(!1),et=R.values,it=R.keys,ot=R.entries,ut=K.lastIndexOf,ct=K.reduce,at=K.reduceRight,st=K.join,ft=K.sort,lt=K.slice,ht=K.toString,vt=K.toLocaleString,pt=k("iterator"),dt=k("toStringTag"),gt=P("typed_constructor"),yt=P("def_constructor"),bt=c.CONSTR,mt=c.TYPED,wt=c.VIEW,St=A(1,function(t,n){return Ot(N(t,t[yt]),n)}),xt=o(function(){return 1===new Y(new Uint16Array([1]).buffer)[0]}),_t=!!Y&&!!Y.prototype.set&&o(function(){new Y(1).set({})}),Mt=function(t,n){var r=p(t);if(r<0||r%n)throw G("Wrong offset!");return r},Ft=function(t){if(S(t)&&mt in t)return t;throw z(t+" is not a typed array!")},Ot=function(t,n){if(!(S(t)&&gt in t))throw z("It is not a typed array constructor!");return new t(n)},Et=function(t,n){return Pt(N(t,t[yt]),n)},Pt=function(t,n){for(var r=0,e=n.length,i=Ot(t,e);e>r;)i[r]=n[r++];return i},kt=function(t,n,r){V(t,n,{get:function(){return this._d[r]}})},At=function(t){var n,r,e,i,o,u,c=x(t),a=arguments.length,f=a>1?arguments[1]:void 0,l=void 0!==f,h=E(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(f=s(f,arguments[2],2)),n=0,r=d(c.length),i=Ot(this,r);r>n;n++)i[n]=l?f(c[n],n):c[n];return i},jt=function(){for(var t=0,n=arguments.length,r=Ot(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!Y&&o(function(){vt.call(new Y(1))}),Rt=function(){return vt.apply(Nt?lt.call(Ft(this)):Ft(this),arguments)},Tt={copyWithin:function(t,n){return C.call(Ft(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Ft(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return B.apply(Ft(this),arguments)},filter:function(t){return Et(this,H(Ft(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Ft(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(Ft(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return st.apply(Ft(this),arguments)},lastIndexOf:function(t){return ut.apply(Ft(this),arguments)},map:function(t){return St(Ft(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Ft(this),arguments)},reduceRight:function(t){return at.apply(Ft(this),arguments)},reverse:function(){for(var t,n=Ft(this).length,r=Math.floor(n/2),e=0;e<r;)t=this[e],this[e++]=this[--n],this[n]=t;return this},some:function(t){return Z(Ft(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ft.call(Ft(this),t)},subarray:function(t,n){var r=Ft(this),e=r.length,i=y(t,e);return new(N(r,r[yt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},It=function(t,n){return Et(this,lt.call(Ft(this),t,n))},Lt=function(t){Ft(this);var n=Mt(arguments[1],1),r=this.length,e=x(t),i=d(e.length),o=0;if(i+n>r)throw G("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Bt={entries:function(){return ot.call(Ft(this))},keys:function(){return it.call(Ft(this))},values:function(){return et.call(Ft(this))}},Ct=function(t,n){return S(t)&&t[mt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Wt=function(t,n){return Ct(t,n=b(n,!0))?l(2,t[n]):U(t,n)},Dt=function(t,n,r){return!(Ct(t,n=b(n,!0))&&S(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?V(t,n,r):(t[n]=r.value,t)};bt||(D.f=Wt,W.f=Dt),u(u.S+u.F*!bt,"Object",{getOwnPropertyDescriptor:Wt,defineProperty:Dt}),o(function(){ht.call({})})&&(ht=vt=function(){return st.call(this)});var Vt=v({},Tt);v(Vt,Bt),h(Vt,pt,Bt.values),v(Vt,{slice:It,set:Lt,constructor:function(){},toString:ht,toLocaleString:Rt}),kt(Vt,"buffer","b"),kt(Vt,"byteOffset","o"),kt(Vt,"byteLength","l"),kt(Vt,"length","e"),V(Vt,dt,{get:function(){return this[mt]}}),t.exports=function(t,n,r,a){var s=t+((a=!!a)?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[s],y=p||{},b=p&&F(p),m=!p||!c.ABV,x={},_=p&&p.prototype,E=function(t,r){V(t,r,{get:function(){return function(t,r){var e=t._d;return e.v[l](r*n+e.o,xt)}(this,r)},set:function(t){return function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,xt)}(this,r,t)},enumerable:!0})};m?(p=r(function(t,r,e,i){f(t,p,s,"_d");var o,u,c,a,l=0,v=0;if(S(r)){if(!(r instanceof J||"ArrayBuffer"==(a=w(r))||"SharedArrayBuffer"==a))return mt in r?Pt(p,r):At.call(p,r);o=r,v=Mt(e,n);var y=r.byteLength;if(void 0===i){if(y%n)throw G("Wrong length!");if((u=y-v)<0)throw G("Wrong length!")}else if((u=d(i)*n)+v>y)throw G("Wrong length!");c=u/n}else c=g(r),o=new J(u=c*n);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new q(o)});l<c;)E(t,l++)}),_=p.prototype=M(Vt),h(_,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&I(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=r(function(t,r,e,i){var o;return f(t,p,s),S(r)?r instanceof J||"ArrayBuffer"==(o=w(r))||"SharedArrayBuffer"==o?void 0!==i?new y(r,Mt(e,n),i):void 0!==e?new y(r,Mt(e,n)):new y(r):mt in r?Pt(p,r):At.call(p,r):new y(g(r))}),X(b!==Function.prototype?O(y).concat(O(b)):O(y),function(t){t in p||h(p,t,y[t])}),p.prototype=_,e||(_.constructor=p));var P=_[pt],k=!!P&&("values"==P.name||void 0==P.name),A=Bt.values;h(p,gt,!0),h(_,mt,s),h(_,wt,!0),h(_,yt,p),(a?new p(1)[dt]==s:dt in _)||V(_,dt,{get:function(){return s}}),x[s]=p,u(u.G+u.W+u.F*(p!=y),x),u(u.S,s,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){y.of.call(p,1)}),s,{from:At,of:jt}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,s,Tt),L(s),u(u.P+u.F*_t,s,{set:Lt}),u(u.P+u.F*!k,s,Bt),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new p(1).slice()}),s,{slice:It}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),s,{toLocaleString:Rt}),T[s]=k?P:A,e||k||h(_,pt,A)}}else t.exports=function(){}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;void 0==i[e]&&r(13)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=!1},function(t,n,r){var e=r(41)("meta"),i=r(4),o=r(17),u=r(7).f,c=0,a=Object.isExtensible||function(){return!0},s=!r(3)(function(){return a(Object.preventExtensions({}))}),f=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";f(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;f(t)}return t[e].w},onFreeze:function(t){return s&&l.NEED&&a(t)&&!o(t,e)&&f(t),t}}},function(t,n,r){var e=r(12);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){var e=r(21),i=r(116),o=r(80),u=r(1),c=r(6),a=r(78),s={},f={};(n=t.exports=function(t,n,r,l,h){var v,p,d,g,y=h?function(){return t}:a(t),b=e(r,l,n?2:1),m=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(v=c(t.length);v>m;m++)if((g=n?b(u(p=t[m])[0],p[1]):b(t[m]))===s||g===f)return g}else for(d=y.call(t);!(p=d.next()).done;)if((g=i(d,b,p.value,n))===s||g===f)return g}).BREAK=s,n.RETURN=f},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){"use strict";var e=r(2),i=r(7),o=r(8),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(128),i=r(93).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){var e=r(1),i=r(127),o=r(93),u=r(94)("IE_PROTO"),c=function(){},a=function(){var t,n=r(96)("iframe"),e=o.length;for(n.style.display="none",r(92).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[o[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(25),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(128),i=r(93);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports={}},function(t,n,r){var e=r(0),i=r(26),o=r(3),u=r(90),c="["+u+"]",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),f=function(t,n,r){var i={},c=o(function(){return!!u[t]()||"​"!="​"[t]()}),a=i[t]=c?n(l):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},l=f.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},function(t,n,r){var e=r(7).f,i=r(17),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(20),i=r(5)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(21),u=r(34);t.exports=function(t){e(e.S,t,{from:function(t){var n,r,e,c,a=arguments[1];return i(this),(n=void 0!==a)&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},function(t,n,r){"use strict";var e=r(0);t.exports=function(t){e(e.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){"use strict";t.exports=r(31)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){for(var e,i=r(2),o=r(13),u=r(41),c=u("typed_array"),a=u("view"),s=!(!i.ArrayBuffer||!i.DataView),f=s,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:c,VIEW:a}},function(t,n,r){"use strict";var e=r(2),i=r(0),o=r(12),u=r(33),c=r(32),a=r(34),s=r(35),f=r(4),l=r(3),h=r(59),v=r(46),p=r(89);t.exports=function(t,n,r,d,g,y){var b=e[t],m=b,w=g?"set":"add",S=m&&m.prototype,x={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(y||S.forEach&&!l(function(){(new m).entries().next()}))){var M=new m,F=M[w](y?{}:-0,1)!=M,O=l(function(){M.has(1)}),E=h(function(t){new m(t)}),P=!y&&l(function(){for(var t=new m,n=5;n--;)t[w](n,n);return!t.has(-0)});E||((m=n(function(n,r){s(n,m,t);var e=p(new b,n,m);return void 0!=r&&a(r,g,e[w],e),e})).prototype=S,S.constructor=m),(O||P)&&(_("delete"),_("has"),g&&_("get")),(P||F)&&_(w),y&&S.clear&&delete S.clear}else m=d.getConstructor(n,t,g,w),u(m.prototype,r),c.NEED=!0;return v(m,t),x[t]=m,i(i.G+i.W+i.F*(m!=b),x),y||d.setStrong(m,t,g),m}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var e=r(1),i=r(10),o=r(5)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";var e=r(13),i=r(12),o=r(3),u=r(26),c=r(5);t.exports=function(t,n,r){var a=c(t),s=r(u,a,""[t]),f=s[0],l=s[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,f),e(RegExp.prototype,a,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,r){"use strict";var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){var e=r(4),i=r(20),o=r(5)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,r){var e=r(20);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(16),i=r(6),o=r(39);t.exports=function(t){return function(n,r,u){var c,a=e(n),s=i(a.length),f=o(u,s);if(t&&r!=r){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}}},function(t,n,r){var e=r(22),i=r(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(31)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{test:function(t){return"microsoft edge"===t.getBrowserName(!0)},describe:function(t){var n=(0,r.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:"EdgeHTML",version:n}}},{test:[/trident/i],describe:function(t){var n={name:"Trident"},e=(0,r.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){return t.test(/presto/i)},describe:function(t){var n={name:"Presto"},e=(0,r.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=t.test(/gecko/i),r=t.test(/like gecko/i);return n&&!r},describe:function(t){var n={name:"Gecko"},e=(0,r.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(t){var n={name:"WebKit"},e=(0,r.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={tablet:"tablet",mobile:"mobile",desktop:"desktop"};n.default=[{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:e.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:e.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:e.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:e.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return{type:e.tablet}}},{test:function(t){var n=t.test(/ipod|iphone/i),r=t.test(/like (ipod|iphone)/i);return n&&!r},describe:function(t){var n=(0,r.getFirstMatch)(/(ipod|iphone)/i,t);return{type:e.mobile,vendor:"Apple",model:n}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:e.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:e.mobile}}},{test:function(t){return"blackberry"===t.getBrowserName(!0)},describe:function(){return{type:e.mobile,vendor:"BlackBerry"}}},{test:function(t){return"bada"===t.getBrowserName(!0)},describe:function(){return{type:e.mobile}}},{test:function(t){return"windows phone"===t.getBrowserName()},describe:function(){return{type:e.mobile,vendor:"Microsoft"}}},{test:function(t){var n=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&n>=3},describe:function(){return{type:e.tablet}}},{test:function(t){return"android"===t.getOSName(!0)},describe:function(){return{type:e.mobile}}},{test:function(t){return"macos"===t.getOSName(!0)},describe:function(){return{type:e.desktop,vendor:"Apple"}}},{test:function(t){return"windows"===t.getOSName(!0)},describe:function(){return{type:e.desktop}}},{test:function(t){return"linux"===t.getOSName(!0)},describe:function(){return{type:e.desktop}}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{test:[/windows phone/i],describe:function(t){var n=(0,r.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:"Windows Phone",version:n}}},{test:[/windows/i],describe:function(t){var n=(0,r.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),e=(0,r.getWindowsVersionName)(n);return{name:"Windows",version:n,versionName:e}}},{test:[/macintosh/i],describe:function(t){var n=(0,r.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,".");return{name:"macOS",version:n}}},{test:[/(ipod|iphone|ipad)/i],describe:function(t){var n=(0,r.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:"iOS",version:n}}},{test:function(t){var n=!t.test(/like android/i),r=t.test(/android/i);return n&&r},describe:function(t){var n=(0,r.getFirstMatch)(/android[\s/-](\d+(\.\d+)*)/i,t);return{name:"Android",version:n}}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n=(0,r.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),e={name:"WebOS"};return n&&n.length&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n=(0,r.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||(0,r.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||(0,r.getFirstMatch)(/\bbb(\d+)/i,t);return{name:"BlackBerry",version:n}}},{test:[/bada/i],describe:function(t){var n=(0,r.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i,t);return{name:"Bada",version:n}}},{test:[/tizen/i],describe:function(t){var n=(0,r.getFirstMatch)(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:"Tizen",version:n}}},{test:[/linux/i],describe:function(){return{name:"Linux"}}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=/version\/(\d+(\.?_?\d+)+)/i,i=[{test:[/opera/i],describe:function(t){var n={name:"Opera"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/opr\/|opios/i],describe:function(t){var n={name:"Opera"},i=(0,r.getFirstMatch)(/(?:opr|opios)[\s/](\S+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/SamsungBrowser/i],describe:function(t){var n={name:"Samsung Internet for Android"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/Whale/i],describe:function(t){var n={name:"NAVER Whale Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/MZBrowser/i],describe:function(t){var n={name:"MZ Browser"},i=(0,r.getFirstMatch)(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/focus/i],describe:function(t){var n={name:"Focus"},i=(0,r.getFirstMatch)(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/swing/i],describe:function(t){var n={name:"Swing"},i=(0,r.getFirstMatch)(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/coast/i],describe:function(t){var n={name:"Opera Coast"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/yabrowser/i],describe:function(t){var n={name:"Yandex Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/ucbrowser/i],describe:function(t){var n={name:"UC Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/Maxthon|mxios/i],describe:function(t){var n={name:"Maxthon"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/epiphany/i],describe:function(t){var n={name:"Epiphany"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/puffin/i],describe:function(t){var n={name:"Puffin"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/sleipnir/i],describe:function(t){var n={name:"Sleipnir"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/k-meleon/i],describe:function(t){var n={name:"K-Meleon"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/msie|trident/i],describe:function(t){var n={name:"Internet Explorer"},e=(0,r.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/edg([ea]|ios)/i],describe:function(t){var n={name:"Microsoft Edge"},e=(0,r.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/vivaldi/i],describe:function(t){var n={name:"Vivaldi"},e=(0,r.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/seamonkey/i],describe:function(t){var n={name:"SeaMonkey"},e=(0,r.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/sailfish/i],describe:function(t){var n={name:"Sailfish"},e=(0,r.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return e&&(n.version=e),n}},{test:[/silk/i],describe:function(t){var n={name:"Amazon Silk"},e=(0,r.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/phantom/i],describe:function(t){var n={name:"PhantomJS"},e=(0,r.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/slimerjs/i],describe:function(t){var n={name:"SlimerJS"},e=(0,r.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n={name:"BlackBerry"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n={name:"WebOS Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/bada/i],describe:function(t){var n={name:"Bada"},e=(0,r.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/tizen/i],describe:function(t){var n={name:"Tizen"},i=(0,r.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/qupzilla/i],describe:function(t){var n={name:"QupZilla"},i=(0,r.getFirstMatch)(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/firefox|iceweasel|fxios/i],describe:function(t){var n={name:"Firefox"},e=(0,r.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/chromium/i],describe:function(t){var n={name:"Chromium"},i=(0,r.getFirstMatch)(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/chrome|crios|crmo/i],describe:function(t){var n={name:"Chrome"},e=(0,r.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=!t.test(/like android/i),r=t.test(/android/i);return n&&r},describe:function(t){var n={name:"Android Browser"},i=(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/safari|applewebkit/i],describe:function(t){var n={name:"Safari"},i=(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/googlebot/i],describe:function(t){var n={name:"Googlebot"},i=(0,r.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/.*/i],describe:function(t){return{name:(0,r.getFirstMatch)(/^(.*)\/(.*) /,t),version:(0,r.getSecondMatch)(/^(.*)\/(.*) /,t)}}}];n.default=i,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(68),r(67),r(66),r(65),r(18)],void 0===(o="function"==typeof(e=function(n,r,e,i,o,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=l(r),a=l(e),s=l(i),f=l(o);function l(t){return t&&t.__esModule?t:{default:t}}var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),p=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),void 0===n||null===n||""===n)throw new Error("UserAgent parameter can't be empty");this._ua=n,this.parsedResult={},!0!==r&&this.parse()}return v(t,[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(t){return t.test(this._ua)}},{key:"parseBrowser",value:function(){var t=this;this.parsedResult.browser={};var n=c.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.browser=n.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var t=this;this.parsedResult.os={};var n=a.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.os=n.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(t){var n=this.getOS(),r=n.name;return t?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getPlatform(),r=n.type;return t?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var t=this;this.parsedResult.platform={};var n=s.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.platform=n.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"parseEngine",value:function(){var t=this;this.parsedResult.engine={};var n=f.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.engine=n.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return this.parsedResult}},{key:"satisfies",value:function(t){var n=this,r={},e=0,i={},o=0,u=Object.keys(t);if(u.forEach(function(n){var u=t[n];"string"==typeof u?(i[n]=u,o+=1):"object"===(void 0===u?"undefined":h(u))&&(r[n]=u,e+=1)}),e>0){var c=Object.keys(r),a=c.find(function(t){return n.isOS(t)});if(a){var s=this.satisfies(r[a]);if(void 0!==s)return s}var f=c.find(function(t){return n.isPlatform(t)});if(f){var l=this.satisfies(r[f]);if(void 0!==l)return l}}if(o>0){var v=Object.keys(i),p=v.find(function(t){return n.isBrowser(t)});if(void 0!==p)return this.compareVersion(i[p])}}},{key:"isBrowser",value:function(t){return this.getBrowserName(!0)===String(t).toLowerCase()}},{key:"compareVersion",value:function(t){var n=0,r=t,e=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===t[0]?(n=1,r=t.substr(1)):"<"===t[0]?(n=-1,r=t.substr(1)):"="===t[0]?r=t.substr(1):"~"===t[0]&&(e=!0,r=t.substr(1)),(0,u.compareVersions)(i,r,e)===n}},{key:"isOS",value:function(t){return this.getOSName(!0)===String(t).toLowerCase()}},{key:"isPlatform",value:function(t){return this.getPlatformType(!0)===String(t).toLowerCase()}},{key:"is",value:function(t){return this.isBrowser(t)||this.isOS(t)||this.isPlatform(t)}},{key:"some",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.some(function(n){return t.is(n)})}}]),t}();n.default=p,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(69)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,null,[{key:"getParser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof t)throw new Error("UserAgent should be a string");return new e.default(t,n)}},{key:"parse",value:function(t){return new e.default(t).getResult()}}]),t}();n.default=o,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){"use strict";var e=r(2),i=r(8),o=r(31),u=r(53),c=r(13),a=r(33),s=r(3),f=r(35),l=r(25),h=r(6),v=r(104),p=r(37).f,d=r(7).f,g=r(76),y=r(46),b="prototype",m="Wrong index!",w=e.ArrayBuffer,S=e.DataView,x=e.Math,_=e.RangeError,M=e.Infinity,F=w,O=x.abs,E=x.pow,P=x.floor,k=x.log,A=x.LN2,j=i?"_b":"buffer",N=i?"_l":"byteLength",R=i?"_o":"byteOffset";function T(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,s=a>>1,f=23===n?E(2,-24)-E(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=O(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=P(k(t)/A),t*(o=E(2,-e))<1&&(e--,o*=2),(t+=e+s>=1?f/o:f*E(2,1-s))*o>=2&&(e++,o/=2),e+s>=a?(i=0,e=a):e+s>=1?(i=(t*o-1)*E(2,n),e+=s):(i=t*E(2,s-1)*E(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function I(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,s=t[a--],f=127&s;for(s>>=7;c>0;f=256*f+t[a],a--,c-=8);for(e=f&(1<<-c)-1,f>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===f)f=1-u;else{if(f===o)return e?NaN:s?-M:M;e+=E(2,n),f-=u}return(s?-1:1)*e*E(2,f-n)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function B(t){return[255&t]}function C(t){return[255&t,t>>8&255]}function W(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function D(t){return T(t,52,8)}function V(t){return T(t,23,4)}function U(t,n,r){d(t[b],n,{get:function(){return this[r]}})}function G(t,n,r,e){var i=v(+r);if(i+n>t[N])throw _(m);var o=t[j]._b,u=i+t[R],c=o.slice(u,u+n);return e?c:c.reverse()}function z(t,n,r,e,i,o){var u=v(+r);if(u+n>t[N])throw _(m);for(var c=t[j]._b,a=u+t[R],s=e(+i),f=0;f<n;f++)c[a+f]=s[o?f:n-f-1]}if(u.ABV){if(!s(function(){w(1)})||!s(function(){new w(-1)})||s(function(){return new w,new w(1.5),new w(NaN),"ArrayBuffer"!=w.name})){for(var Y,K=(w=function(t){return f(this,w),new F(v(t))})[b]=F[b],J=p(F),q=0;J.length>q;)(Y=J[q++])in w||c(w,Y,F[Y]);o||(K.constructor=w)}var X=new S(new w(2)),H=S[b].setInt8;X.setInt8(0,2147483648),X.setInt8(1,2147483649),!X.getInt8(0)&&X.getInt8(1)||a(S[b],{setInt8:function(t,n){H.call(this,t,n<<24>>24)},setUint8:function(t,n){H.call(this,t,n<<24>>24)}},!0)}else w=function(t){f(this,w,"ArrayBuffer");var n=v(t);this._b=g.call(new Array(n),0),this[N]=n},S=function(t,n,r){f(this,S,"DataView"),f(t,w,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(i+(r=void 0===r?e-i:h(r))>e)throw _("Wrong length!");this[j]=t,this[R]=i,this[N]=r},i&&(U(w,"byteLength","_l"),U(S,"buffer","_b"),U(S,"byteLength","_l"),U(S,"byteOffset","_o")),a(S[b],{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var n=G(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=G(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return L(G(this,4,t,arguments[1]))},getUint32:function(t){return L(G(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return I(G(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return I(G(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){z(this,1,t,B,n)},setUint8:function(t,n){z(this,1,t,B,n)},setInt16:function(t,n){z(this,2,t,C,n,arguments[2])},setUint16:function(t,n){z(this,2,t,C,n,arguments[2])},setInt32:function(t,n){z(this,4,t,W,n,arguments[2])},setUint32:function(t,n){z(this,4,t,W,n,arguments[2])},setFloat32:function(t,n){z(this,4,t,V,n,arguments[2])},setFloat64:function(t,n){z(this,8,t,D,n,arguments[2])}});y(w,"ArrayBuffer"),y(S,"DataView"),c(S[b],u.VIEW,!0),n.ArrayBuffer=w,n.DataView=S},function(t,n,r){"use strict";var e=r(10);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}(t)}},function(t,n,r){var e=r(2),i=r(74).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==r(20)(u);t.exports=function(){var t,n,r,s=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(s)};else if(!o||e.navigator&&e.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);r=function(){f.then(s)}}else r=function(){i.call(e,s)};else{var l=!0,h=document.createTextNode("");new o(s).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},function(t,n,r){var e,i,o,u=r(21),c=r(123),a=r(92),s=r(96),f=r(2),l=f.process,h=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,g=0,y={},b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},m=function(t){b.call(t.data)};h&&v||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++g]=function(){c("function"==typeof t?t:Function(t),n)},e(g),g},v=function(t){delete y[t]},"process"==r(20)(l)?e=function(t){l.nextTick(u(b,t,1))}:d&&d.now?e=function(t){d.now(u(b,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=m,e=u(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(e=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):e="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:h,clear:v}},function(t,n,r){"use strict";var e=r(30),i=r(113),o=r(44),u=r(16);t.exports=r(84)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){"use strict";var e=r(9),i=r(39),o=r(6);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,s=void 0===a?r:i(a,r);s>c;)n[c++]=t;return n}},function(t,n,r){var e=r(241);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(47),i=r(5)("iterator"),o=r(44);t.exports=r(22).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){"use strict";var e=r(7),i=r(42);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){var e=r(60),i=r(26);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){"use strict";var e=r(38),i=r(42),o=r(46),u={};r(13)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){"use strict";var e=r(31),i=r(0),o=r(12),u=r(13),c=r(44),a=r(83),s=r(46),f=r(14),l=r(5)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,p,d,g,y){a(r,n,p);var b,m,w,S=function(t){if(!h&&t in F)return F[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},x=n+" Iterator",_="values"==d,M=!1,F=t.prototype,O=F[l]||F["@@iterator"]||d&&F[d],E=O||S(d),P=d?_?S("entries"):E:void 0,k="Array"==n&&F.entries||O;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(s(w,x,!0),e||"function"==typeof w[l]||u(w,l,v)),_&&O&&"values"!==O.name&&(M=!0,E=function(){return O.call(this)}),e&&!y||!h&&!M&&F[l]||u(F,l,E),c[n]=E,c[x]=v,d)if(b={values:_?E:S("values"),keys:g?E:S("keys"),entries:P},y)for(m in b)m in F||o(F,m,b[m]);else i(i.P+i.F*(h||M),n,b);return b}},function(t,n,r){var e=r(25),i=r(26);t.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),s=c.length;return a<0||a>=s?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n,r){"use strict";var e=r(25),i=r(26);t.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n,r){var e=r(4),i=r(91).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(4),i=r(1),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(21)(Function.call,r(15).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(64)("keys"),i=r(41);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n,r){var e=r(2),i=r(22),o=r(31),u=r(129),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n){t.exports=Math.scale||function(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){var e=r(34);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n,r){var e=r(47),i=r(98);t.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40),i=r(16),o=r(48).f;t.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,s=0,f=[];a>s;)o.call(u,r=c[s++])&&f.push(t?[r,u[r]]:u[r]);return f}}},function(t,n,r){var e=r(6),i=r(88),o=r(26);t.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,s=void 0===r?" ":String(r),f=e(n);if(f<=a||""==s)return c;var l=f-a,h=i.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},function(t,n,r){"use strict";var e=r(61),i=r(4),o=r(6),u=r(21),c=r(5)("isConcatSpreadable");t.exports=function t(n,r,a,s,f,l,h,v){for(var p,d,g=f,y=0,b=!!h&&u(h,v,3);y<s;){if(y in a){if(p=b?b(a[y],y,r):a[y],d=!1,i(p)&&(d=void 0!==(d=p[c])?!!d:e(p)),d&&l>0)g=t(n,r,p,o(p.length),g,l-1)-1;else{if(g>=9007199254740991)throw TypeError();n[g]=p}g++}y++}return g}},function(t,n,r){var e=r(37),i=r(62),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(25),i=r(6);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){"use strict";var e=r(33),i=r(32).getWeak,o=r(1),u=r(4),c=r(35),a=r(34),s=r(23),f=r(17),l=r(43),h=s(5),v=s(6),p=0,d=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,n){return h(t.a,function(t){return t[0]===n})};g.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,r,o){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(s.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&f(r,this._i)&&delete r[this._i]},has:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&f(r,this._i)}}),s},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},function(t,n,r){"use strict";var e,i=r(23)(0),o=r(12),u=r(32),c=r(125),a=r(105),s=r(4),f=r(3),l=r(43),h=u.getWeak,v=Object.isExtensible,p=a.ufstore,d={},g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(s(t)){var n=h(t);return!0===n?p(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},b=t.exports=r(54)("WeakMap",g,y,a,!0,!0);f(function(){return 7!=(new b).set((Object.freeze||Object)(d),7).get(d)})&&(c((e=a.getConstructor(g,"WeakMap")).prototype,y),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=b.prototype,r=n[t];o(n,t,function(n,i){if(s(n)&&!v(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},function(t,n,r){"use strict";var e=r(108),i=r(43);t.exports=r(54)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e=r(7).f,i=r(38),o=r(33),u=r(21),c=r(35),a=r(34),s=r(84),f=r(113),l=r(36),h=r(8),v=r(32).fastKey,p=r(43),d=h?"_s":"size",g=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,s){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[s],t)});return o(f.prototype,{clear:function(){for(var t=p(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=p(this,n),e=g(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function(t){p(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(p(this,n),t)}}),h&&e(f.prototype,"size",{get:function(){return p(this,n)[d]}}),f},def:function(t,n,r){var e,i,o=g(t,n);return o?o.v=r:(t._l=o={i:i=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,r){s(t,n,function(t,r){this._t=p(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){"use strict";var e=r(108),i=r(43);t.exports=r(54)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var e=r(1),i=r(4),o=r(72);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){r(8)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(58)})},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(9),i=r(39),o=r(6);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:i(s,u))-a,u-c),l=1;for(a<c&&c<a+f&&(l=-1,a+=f-1,c+=f-1);f-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},function(t,n,r){var e=r(10),i=r(9),o=r(49),u=r(6);t.exports=function(t,n,r,c,a){e(n);var s=i(t),f=o(s),l=u(s.length),h=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(h in f){c=f[h],h+=v;break}if(h+=v,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=v)h in f&&(c=n(c,f[h],h,s));return c}},function(t,n,r){var e=r(1);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},function(t,n,r){var e=r(87),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126);t.exports=Math.fround||function(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*function(t){return t+1/o-1/o}(i/a/u)*a*u:(r=(n=(1+u/o)*i)-(n-i))>c||r!=r?s*(1/0):s*r}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(20);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(2).parseFloat,i=r(45).trim;t.exports=1/e(r(90)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(45).trim,o=r(90),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){"use strict";var e=r(10),i=r(4),o=r(123),u=[].slice,c={};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),a=function(){var e=r.concat(u.call(arguments));return this instanceof a?function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)}(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n,r){"use strict";var e=r(40),i=r(62),o=r(48),u=r(9),c=r(49),a=Object.assign;t.exports=!a||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function(t,n){for(var r=u(t),a=arguments.length,s=1,f=i.f,l=o.f;a>s;)for(var h,v=c(arguments[s++]),p=f?e(v).concat(f(v)):e(v),d=p.length,g=0;d>g;)l.call(v,h=p[g++])&&(r[h]=v[h]);return r}:a},function(t,n,r){var e=r(16),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(e(t))}},function(t,n,r){var e=r(7),i=r(1),o=r(40);t.exports=r(8)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(17),i=r(16),o=r(63)(!1),u=r(94)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),a=0,s=[];for(r in c)r!=u&&e(c,r)&&s.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(s,r)||s.push(r));return s}},function(t,n,r){n.f=r(5)},function(t,n,r){t.exports=!r(8)&&!r(3)(function(){return 7!=Object.defineProperty(r(96)("div"),"a",{get:function(){return 7}}).a})},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n){t.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},function(t,n,r){var e=r(0),i=r(132)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function(t){return i(t)}})},function(t,n,r){r(133),t.exports=r(22).RegExp.escape},function(t,n,r){(function(n){!function(n){"use strict";var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",s="object"==typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=n.regeneratorRuntime=s?t.exports:{}).wrap=w;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},g={};g[u]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&i.call(b,u)&&(g=b);var m=M.prototype=x.prototype=Object.create(g);_.prototype=m.constructor=M,M.constructor=_,M[a]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},F(O.prototype),O.prototype[c]=function(){return this},f.AsyncIterator=O,f.async=function(t,n,r,e){var i=new O(w(t,n,r,e));return f.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},F(m),m[a]="Generator",m[u]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},f.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,i){return c.type="throw",c.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],c=u.completion;if("root"===u.tryLoc)return e("end");if(u.tryLoc<=this.prev){var a=i.call(u,"catchLoc"),s=i.call(u,"finallyLoc");if(a&&s){if(this.prev<u.catchLoc)return e(u.catchLoc,!0);if(this.prev<u.finallyLoc)return e(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return e(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return e(u.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}}}function w(t,n,r,e){var i=n&&n.prototype instanceof x?n:x,o=Object.create(i.prototype),u=new A(e||[]);return o._invoke=function(t,n,r){var e=l;return function(i,o){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=E(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=v;var a=S(t,n,r);if("normal"===a.type){if(e=r.done?p:h,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=p,r.method="throw",r.arg=a.arg)}}}(t,r,u),o}function S(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function M(){}function F(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(t){function r(n,e,o,u){var c=S(t[n],t,e);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(s).then(function(t){a.value=t,o(a)},u)}u(c.arg)}var e;"object"==typeof n.process&&n.process.domain&&(r=n.process.domain.bind(r)),this._invoke=function(t,n){function i(){return new Promise(function(e,i){r(t,n,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=S(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}("object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,r(131))},function(t,n,r){for(var e=r(75),i=r(40),o=r(12),u=r(2),c=r(13),a=r(44),s=r(5),f=s("iterator"),l=s("toStringTag"),h=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),d=0;d<p.length;d++){var g,y=p[d],b=v[y],m=u[y],w=m&&m.prototype;if(w&&(w[f]||c(w,f,h),w[l]||c(w,l,y),a[y]=h,b))for(g in e)w[g]||o(w,g,e[g],!0)}},function(t,n,r){var e=r(0),i=r(74);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){var e=r(2),i=r(0),o=r(55),u=[].slice,c=/MSIE .\./.test(o),a=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},function(t,n,r){"use strict";var e=r(0),i=r(2),o=r(22),u=r(73)(),c=r(5)("observable"),a=r(10),s=r(1),f=r(35),l=r(33),h=r(13),v=r(34),p=v.RETURN,d=function(t){return null==t?void 0:a(t)},g=function(t){var n=t._c;n&&(t._c=void 0,n())},y=function(t){return void 0===t._o},b=function(t){y(t)||(t._o=void 0,g(t))},m=function(t,n){s(t),this._c=void 0,this._o=t,t=new w(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}y(this)&&g(this)};m.prototype=l({},{unsubscribe:function(){b(this)}});var w=function(t){this._s=t};w.prototype=l({},{next:function(t){var n=this._s;if(!y(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{b(n)}finally{throw t}}}},error:function(t){var n=this._s;if(y(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{g(n)}finally{throw t}}return g(n),t},complete:function(t){var n=this._s;if(!y(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{g(n)}finally{throw t}}return g(n),t}}});var S=function(t){f(this,S,"Observable","_f")._f=a(t)};l(S.prototype,{subscribe:function(t){return new m(t,this._f)},forEach:function(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(S,{from:function(t){var n="function"==typeof this?this:S,r=d(s(t)[c]);if(r){var e=s(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function(){for(var t=0,n=arguments.length,r=new Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(S.prototype,c,function(){return this}),e(e.G,{Observable:S}),r(36)("Observable")},function(t,n,r){var e=r(0),i=r(73)(),o=r(2).process,u="process"==r(20)(o);e(e.G,{asap:function(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function(t,n){return function(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(14),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(107),i=r(98),o=r(28),u=r(1),c=r(14),a=o.keys,s=o.key,f=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=f(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function(t){return f(u(t),arguments.length<2?void 0:s(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(14),u=e.has,c=e.get,a=e.key,s=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?s(t,e,r):void 0};e.exp({getMetadata:function(t,n){return s(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){"use strict";var e=r(0),i=r(72),o=r(111);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){"use strict";var e=r(0),i=r(22),o=r(2),u=r(56),c=r(110);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(97)})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0),i=r(97),o=r(117);e(e.S,"Math",{fscale:function(t,n,r,e,u){return o(i(t,n,r,e,u))}})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0),i=r(20);e(e.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){r(50)("WeakSet")},function(t,n,r){r(50)("WeakMap")},function(t,n,r){r(50)("Set")},function(t,n,r){r(50)("Map")},function(t,n,r){r(51)("WeakSet")},function(t,n,r){r(51)("WeakMap")},function(t,n,r){r(51)("Set")},function(t,n,r){r(51)("Map")},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(99)("Set")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(99)("Map")})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27),u=r(14),c=r(15).f;r(8)&&e(e.P+r(52),"Object",{__lookupSetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27),u=r(14),c=r(15).f;r(8)&&e(e.P+r(52),"Object",{__lookupGetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(52),"Object",{__defineSetter__:function(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(52),"Object",{__defineGetter__:function(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(100)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(100)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(103),o=r(16),u=r(15),c=r(79);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=o(t),a=u.f,s=i(e),f={},l=0;s.length>l;)void 0!==(r=a(e,n=s[l++]))&&c(f,n,r);return f}})},function(t,n,r){r(95)("observable")},function(t,n,r){r(95)("asyncIterator")},function(t,n,r){"use strict";var e=r(0),i=r(26),o=r(6),u=r(60),c=r(58),a=RegExp.prototype,s=function(t,n){this._r=t,this._s=n};r(83)(s,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new s(e,n)}})},function(t,n,r){"use strict";r(45)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,n,r){"use strict";r(45)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,n,r){"use strict";var e=r(0),i=r(101),o=r(55);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(101),o=r(55);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(85)(!0);e(e.P,"String",{at:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(102),o=r(9),u=r(6),c=r(25),a=r(77);e(e.P,"Array",{flatten:function(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),r(30)("flatten")},function(t,n,r){"use strict";var e=r(0),i=r(102),o=r(9),u=r(6),c=r(10),a=r(77);e(e.P,"Array",{flatMap:function(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(30)("flatMap")},function(t,n,r){"use strict";var e=r(0),i=r(63)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("includes")},function(t,n,r){var e=r(0),i=r(91);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,r){var e=r(7),i=r(15),o=r(14),u=r(17),c=r(0),a=r(42),s=r(1),f=r(4);c(c.S,"Reflect",{set:function t(n,r,c){var l,h,v=arguments.length<4?n:arguments[3],p=i.f(s(n),r);if(!p){if(f(h=o(n)))return t(h,r,c,v);p=a(0)}if(u(p,"value")){if(!1===p.writable||!f(v))return!1;if(l=i.f(v,r)){if(l.get||l.set||!1===l.writable)return!1;l.value=c,e.f(v,r,l)}else e.f(v,r,a(0,c));return!0}return void 0!==p.set&&(p.set.call(v,c),!0)}})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(103)})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(14),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,r){var e=r(15),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(15),i=r(14),o=r(17),u=r(0),c=r(4),a=r(1);u(u.S,"Reflect",{get:function t(n,r){var u,s,f=arguments.length<3?n:arguments[2];return a(n)===f?n[r]:(u=e.f(n,r))?o(u,"value")?u.value:void 0!==u.get?u.get.call(f):void 0:c(s=i(n))?t(s,r,f):void 0}})},function(t,n,r){"use strict";var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(83)(o,"Object",function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,r){var e=r(0),i=r(15).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(7),i=r(0),o=r(1),u=r(27);i(i.S+i.F*r(3)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0),i=r(38),o=r(10),u=r(1),c=r(4),a=r(3),s=r(124),f=(r(2).Reflect||{}).construct,l=a(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),h=!a(function(){f(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(s.apply(t,e))}var a=r.prototype,v=i(c(a)?a:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},function(t,n,r){var e=r(0),i=r(10),o=r(1),u=(r(2).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!r(3)(function(){u(function(){})}),"Reflect",{apply:function(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},function(t,n,r){r(29)("Float64",8,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}},!0)},function(t,n,r){r(29)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(53).ABV,{DataView:r(71).DataView})},function(t,n,r){"use strict";var e=r(0),i=r(53),o=r(71),u=r(1),c=r(39),a=r(6),s=r(4),f=r(2).ArrayBuffer,l=r(56),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&f.isView,d=h.prototype.slice,g=i.VIEW;e(e.G+e.W+e.F*(f!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||s(t)&&g in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),s=new v(this),f=new v(o),p=0;e<i;)f.setUint8(p++,s.getUint8(e++));return o}}),r(36)("ArrayBuffer")},function(t,n,r){"use strict";var e=r(105),i=r(43);r(54)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},function(t,n,r){"use strict";var e,i,o,u,c=r(31),a=r(2),s=r(21),f=r(47),l=r(0),h=r(4),v=r(10),p=r(35),d=r(34),g=r(56),y=r(74).set,b=r(73)(),m=r(72),w=r(111),S=r(55),x=r(110),_=a.TypeError,M=a.process,F=M&&M.versions,O=F&&F.v8||"",E=a.Promise,P="process"==f(M),k=function(){},A=i=m.f,j=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[r(5)("species")]=function(t){t(k,k)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==O.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u,c=i?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{c?(i||(2==t._h&&L(t),t._h=1),!0===c?r=e:(f&&f.enter(),r=c(e),f&&(f.exit(),u=!0)),r===n.promise?s(_("Promise-chain cycle")):(o=N(r))?o.call(r,a,s):a(r)):s(e)}catch(t){f&&!u&&f.exit(),s(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&T(t)})}},T=function(t){y.call(a,function(){var n,r,e,i=t._v,o=I(t);if(o&&(n=w(function(){P?M.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=P||I(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){y.call(a,function(){var n;P?M.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},C=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw _("Promise can't be resolved itself");(n=N(t))?b(function(){var e={_w:r,_d:!1};try{n.call(t,s(C,e,1),s(B,e,1))}catch(t){B.call(e,t)}}):(r._v=t,r._s=1,R(r,!1))}catch(t){B.call({_w:r,_d:!1},t)}}};j||(E=function(t){p(this,E,"Promise","_h"),v(t),e.call(this);try{t(s(C,this,1),s(B,this,1))}catch(t){B.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(33)(E.prototype,{then:function(t,n){var r=A(g(this,E));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=P?M.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=s(C,t,1),this.reject=s(B,t,1)},m.f=A=function(t){return t===E||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:E}),r(46)(E,"Promise"),r(36)("Promise"),u=r(22).Promise,l(l.S+l.F*!j,"Promise",{reject:function(t){var n=A(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!j),"Promise",{resolve:function(t){return x(c&&this===u?E:this,t)}}),l(l.S+l.F*!(j&&r(59)(function(t){E.all(t).catch(k)})),"Promise",{all:function(t){var n=this,r=A(n),e=r.resolve,i=r.reject,o=w(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function(t){var n=this,r=A(n),e=r.reject,i=w(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){r(57)("split",2,function(t,n,e){"use strict";var i=r(60),o=e,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,a,s,f,l,h=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,v+"g");for(c||(e=new RegExp("^"+g.source+"$(?!\\s)",v));(a=g.exec(r))&&!((s=a.index+a[0].length)>p&&(h.push(r.slice(p,a.index)),!c&&a.length>1&&a[0].replace(e,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a.length>1&&a.index<r.length&&u.apply(h,a.slice(1)),f=a[0].length,p=s,h.length>=d));)g.lastIndex===a.index&&g.lastIndex++;return p===r.length?!f&&g.test("")||h.push(""):h.push(r.slice(p)),h.length>d?h.slice(0,d):h}}else"0".split(void 0,0).length&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(r,i){var o=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},e]})},function(t,n,r){r(57)("search",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){r(57)("replace",2,function(t,n,r){return[function(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},function(t,n,r){r(57)("match",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){"use strict";r(112);var e=r(1),i=r(58),o=r(8),u=/./.toString,c=function(t){r(12)(RegExp.prototype,"toString",t,!0)};r(3)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){var e=r(2),i=r(89),o=r(7).f,u=r(37).f,c=r(60),a=r(58),s=e.RegExp,f=s,l=s.prototype,h=/a/g,v=/a/g,p=new s(h)!==h;if(r(8)&&(!p||r(3)(function(){return v[r(5)("match")]=!1,s(h)!=h||s(v)==v||"/a/i"!=s(h,"i")}))){s=function(t,n){var r=this instanceof s,e=c(t),o=void 0===n;return!r&&e&&t.constructor===s&&o?t:i(p?new f(e&&!o?t.source:t,n):f((e=t instanceof s)?t.source:t,e&&o?a.call(t):n),r?this:l,s)};for(var d=function(t){t in s||o(s,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},g=u(f),y=0;g.length>y;)d(g[y++]);l.constructor=s,s.prototype=l,r(12)(e,"RegExp",s)}r(36)("RegExp")},function(t,n,r){r(36)("Array")},function(t,n,r){"use strict";var e=r(0),i=r(23)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)(o)},function(t,n,r){"use strict";var e=r(0),i=r(23)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("find")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(76)}),r(30)("fill")},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(114)}),r(30)("copyWithin")},function(t,n,r){"use strict";var e=r(0),i=r(16),o=r(25),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(19)(c)),"Array",{lastIndexOf:function(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){"use strict";var e=r(0),i=r(63)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(19)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(115);e(e.P+e.F*!r(19)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(115);e(e.P+e.F*!r(19)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(4);e(e.P+e.F*!r(19)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(3);e(e.P+e.F*!r(19)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(2);e(e.P+e.F*!r(19)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(1);e(e.P+e.F*!r(19)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(61),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(0),i=r(23)(0),o=r(19)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!r(19)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){"use strict";var e=r(0),i=r(92),o=r(20),u=r(39),c=r(6),a=[].slice;e(e.P+e.F*r(3)(function(){i&&a.call(i)}),"Array",{slice:function(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),s=u(n,r),f=c(s-i),l=new Array(f),h=0;h<f;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},function(t,n,r){"use strict";var e=r(0),i=r(16),o=[].join;e(e.P+e.F*(r(49)!=Object||!r(19)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),i=r(79);e(e.S+e.F*r(3)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){"use strict";var e=r(21),i=r(0),o=r(9),u=r(116),c=r(80),a=r(6),s=r(79),f=r(78);i(i.S+i.F*!r(59)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,g=void 0!==d,y=0,b=f(h);if(g&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&c(b))for(r=new v(n=a(h.length));n>y;y++)s(r,y,g?d(h[y],y):h[y]);else for(l=b.call(h),r=new v;!(i=l.next()).done;y++)s(r,y,g?u(l,d,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(61)})},function(t,n,r){"use strict";var e=r(1),i=r(27);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(13)(i,e,r(249))},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(12)(e,"toString",function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"})},function(t,n,r){"use strict";var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=r(0),i=r(252);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";r(11)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,n,r){"use strict";r(11)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,n,r){"use strict";r(11)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,n,r){"use strict";r(11)("small",function(t){return function(){return t(this,"small","","")}})},function(t,n,r){"use strict";r(11)("link",function(t){return function(n){return t(this,"a","href",n)}})},function(t,n,r){"use strict";r(11)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,n,r){"use strict";r(11)("fontsize",function(t){return function(n){return t(this,"font","size",n)}})},function(t,n,r){"use strict";r(11)("fontcolor",function(t){return function(n){return t(this,"font","color",n)}})},function(t,n,r){"use strict";r(11)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,n,r){"use strict";r(11)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,n,r){"use strict";r(11)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,n,r){"use strict";r(11)("big",function(t){return function(){return t(this,"big","","")}})},function(t,n,r){"use strict";r(11)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(82),u="".startsWith;e(e.P+e.F*r(81)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(88)})},function(t,n,r){"use strict";var e=r(0),i=r(82);e(e.P+e.F*r(81)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(82),u="".endsWith;e(e.P+e.F*r(81)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},function(t,n,r){"use strict";var e=r(0),i=r(85)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(85)(!0);r(84)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";r(45)("trim",function(t){return function(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(16),o=r(6);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},function(t,n,r){var e=r(0),i=r(39),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(86),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0),i=r(86),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(87)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(118)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)a<(r=i(arguments[u++]))?(o=o*(e=a/r)*e+1,a=r):o+=r>0?(e=r/a)*e:r;return a===1/0?1/0:a*Math.sqrt(o)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(117)})},function(t,n,r){var e=r(0),i=r(86);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=r(87);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,r){var e=r(0),i=r(118),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=r(122);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(121);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0),i=r(119),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(119)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){"use strict";var e=r(0),i=r(3),o=r(120),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(25),o=r(120),u=r(88),c=1..toFixed,a=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*s[r],s[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=s[n],s[n]=a(r/t),r=r%t*1e7},v=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==s[t]){var r=String(s[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},p=function(t,n,r){return 0===n?r:n%2==1?p(t,n-1,r*t):p(t*t,n/2,r)};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){c.call({})})),"Number",{toFixed:function(t){var n,r,e,c,a=o(this,f),s=i(t),d="",g="0";if(s<0||s>20)throw RangeError(f);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(d="-",a=-a),a>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(a*p(2,69,1))-69)<0?a*p(2,-n,1):a/p(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=s;e>=7;)l(1e7,0),e-=7;for(l(p(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=v()}else l(0,r),l(1<<-n,0),g=v()+u.call("0",s);return g=s>0?d+((c=g.length)<=s?"0."+u.call("0",s-c)+g:g.slice(0,c-s)+"."+g.slice(c-s)):d+g}})},function(t,n,r){"use strict";var e=r(2),i=r(17),o=r(20),u=r(89),c=r(27),a=r(3),s=r(37).f,f=r(15).f,l=r(7).f,h=r(45).trim,v=e.Number,p=v,d=v.prototype,g="Number"==o(r(38)(d)),y="trim"in String.prototype,b=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=y?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),s=0,f=a.length;s<f;s++)if((u=a.charCodeAt(s))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(g?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new p(b(n)),r,v):b(n)};for(var m,w=r(8)?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(p,m=w[S])&&!i(v,m)&&l(v,m,f(p,m));v.prototype=d,d.constructor=v,r(12)(e,"Number",v)}},function(t,n,r){var e=r(0),i=r(121);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(122);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){"use strict";var e=r(4),i=r(14),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(8)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(124)})},function(t,n,r){"use strict";var e=r(47),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(91).set})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(314)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(125)})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(t){return function(n){return!!e(n)&&(!t||t(n))}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("preventExtensions",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("seal",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("freeze",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(126).f})},function(t,n,r){var e=r(9),i=r(40);r(24)("keys",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(14);r(24)("getPrototypeOf",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(16),i=r(15).f;r(24)("getOwnPropertyDescriptor",function(){return function(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperties:r(127)})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(38)})},function(t,n,r){var e=r(40),i=r(62),o=r(48);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,s=0;c.length>s;)a.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,r){"use strict";var e=r(2),i=r(17),o=r(8),u=r(0),c=r(12),a=r(32).KEY,s=r(3),f=r(64),l=r(46),h=r(41),v=r(5),p=r(129),d=r(95),g=r(330),y=r(61),b=r(1),m=r(4),w=r(16),S=r(27),x=r(42),_=r(38),M=r(126),F=r(15),O=r(7),E=r(40),P=F.f,k=O.f,A=M.f,j=e.Symbol,N=e.JSON,R=N&&N.stringify,T=v("_hidden"),I=v("toPrimitive"),L={}.propertyIsEnumerable,B=f("symbol-registry"),C=f("symbols"),W=f("op-symbols"),D=Object.prototype,V="function"==typeof j,U=e.QObject,G=!U||!U.prototype||!U.prototype.findChild,z=o&&s(function(){return 7!=_(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=P(D,n);e&&delete D[n],k(t,n,r),e&&t!==D&&k(D,n,e)}:k,Y=function(t){var n=C[t]=_(j.prototype);return n._k=t,n},K=V&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},J=function(t,n,r){return t===D&&J(W,n,r),b(t),n=S(n,!0),b(r),i(C,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:x(0,!1)})):(i(t,T)||k(t,T,x(1,{})),t[T][n]=!0),z(t,n,r)):k(t,n,r)},q=function(t,n){b(t);for(var r,e=g(n=w(n)),i=0,o=e.length;o>i;)J(t,r=e[i++],n[r]);return t},X=function(t){var n=L.call(this,t=S(t,!0));return!(this===D&&i(C,t)&&!i(W,t))&&(!(n||!i(this,t)||!i(C,t)||i(this,T)&&this[T][t])||n)},H=function(t,n){if(t=w(t),n=S(n,!0),t!==D||!i(C,n)||i(W,n)){var r=P(t,n);return!r||!i(C,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function(t){for(var n,r=A(w(t)),e=[],o=0;r.length>o;)i(C,n=r[o++])||n==T||n==a||e.push(n);return e},$=function(t){for(var n,r=t===D,e=A(r?W:w(t)),o=[],u=0;e.length>u;)!i(C,n=e[u++])||r&&!i(D,n)||o.push(C[n]);return o};V||(c((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===D&&n.call(W,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),z(this,t,x(1,r))};return o&&G&&z(D,t,{configurable:!0,set:n}),Y(t)}).prototype,"toString",function(){return this._k}),F.f=H,O.f=J,r(37).f=M.f=Z,r(48).f=X,r(62).f=$,o&&!r(31)&&c(D,"propertyIsEnumerable",X,!0),p.f=function(t){return Y(v(t))}),u(u.G+u.W+u.F*!V,{Symbol:j});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)v(Q[tt++]);for(var nt=E(v.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=j(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in B)if(B[n]===t)return n},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,n){return void 0===n?_(t):q(_(t),n)},defineProperty:J,defineProperties:q,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),N&&u(u.S+u.F*(!V||s(function(){var t=j();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(m(n)||void 0!==t)&&!K(t))return y(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!K(n))return n}),e[1]=n,R.apply(N,e)}}),j.prototype[I]||r(13)(j.prototype,I,j.prototype.valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){r(331),r(329),r(328),r(327),r(326),r(325),r(324),r(323),r(322),r(321),r(320),r(319),r(318),r(317),r(316),r(315),r(313),r(312),r(311),r(310),r(309),r(308),r(307),r(306),r(305),r(304),r(303),r(302),r(301),r(300),r(299),r(298),r(297),r(296),r(295),r(294),r(293),r(292),r(291),r(290),r(289),r(288),r(287),r(286),r(285),r(284),r(283),r(282),r(281),r(280),r(279),r(278),r(277),r(276),r(275),r(274),r(273),r(272),r(271),r(270),r(269),r(268),r(267),r(266),r(265),r(264),r(263),r(262),r(261),r(260),r(259),r(258),r(257),r(256),r(255),r(254),r(253),r(251),r(250),r(248),r(247),r(246),r(245),r(244),r(243),r(242),r(240),r(239),r(238),r(237),r(236),r(235),r(234),r(233),r(232),r(231),r(230),r(229),r(228),r(75),r(227),r(226),r(112),r(225),r(224),r(223),r(222),r(221),r(109),r(107),r(106),r(220),r(219),r(218),r(217),r(216),r(215),r(214),r(213),r(212),r(211),r(210),r(209),r(208),r(207),r(206),r(205),r(204),r(203),r(202),r(201),r(200),r(199),r(198),r(197),r(196),r(195),r(194),r(193),r(192),r(191),r(190),r(189),r(188),r(187),r(186),r(185),r(184),r(183),r(182),r(181),r(180),r(179),r(178),r(177),r(176),r(175),r(174),r(173),r(172),r(171),r(170),r(169),r(168),r(167),r(166),r(165),r(164),r(163),r(162),r(161),r(160),r(159),r(158),r(157),r(156),r(155),r(154),r(153),r(152),r(151),r(150),r(149),r(148),r(147),r(146),r(145),r(144),r(143),r(142),r(141),r(140),r(139),r(138),r(137),r(136),t.exports=r(22)},function(t,n,r){"use strict";(function(t){if(r(332),r(135),r(134),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";function e(t,r,e){t[r]||Object[n](t,r,{writable:!0,configurable:!0,value:e})}e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(this,r(131))},function(t,n,r){r(333),t.exports=r(70)}])});
!function(){function n(n){if(null===n)return!0;var e=typeof n;switch(e){case"undefined":return!0;case"number":return isNaN(n);case"string":return""===n.trim();case"object":var t=Object.keys(n).length;return t<1;case"function":return!1;default:return console.log('Unknown value type: "'+e+'"',"isEmpty.js"),!1}}window.hasOwnProperty("isEmpty")||(window.isEmpty=n)}();
!function(){function e(a){"undefined"==typeof a&&(a={ajax:{},settings:{}}),$.ajaxSetup(Object.assign({crossDomain:!0,timeout:2e4,dataType:"json",cache:!1},a.ajax));var o=Object.assign({color:"#fff"},a.settings);a.hasOwnProperty("callbackAlert")&&(e.prototype._callbackAlert=a.callbackAlert),0===$("#js-lightajax-preloader").length&&$("body").append('<div id="js-lightajax-overlay" class="lightajax__overlay"></div><div id="js-lightajax-preloader" class="lightajax__preloader"><div class="lightajax__loader" style="color: '+o.color+';"></div></div>')}window.hasOwnProperty("LightAjax")||(window.LightAjax=e),e.prototype.preloader=function(e){"show"===e?$("#js-lightajax-overlay, #js-lightajax-preloader").show():"hide"===e&&$("#js-lightajax-overlay, #js-lightajax-preloader").hide()},e.prototype.get=function(a,o,t,r){e.prototype._query("GET",a,o,t,r)},e.prototype.post=function(a,o,t,r){e.prototype._query("POST",a,o,t,r)},e.prototype._query=function(a,o,t,r,l){o&&e.prototype.preloader("show"),$.ajax({url:t,method:a,data:r,success:l,error:function(a,t){o&&e.prototype.preloader("hide"),e.prototype._error(t)}})},e.prototype._callbackAlert=function(e,a){alert(a,e)},e.prototype._error=function(a){var o="Неизвестная ошибка ("+a+")";switch(a){case"timeout":o="Время ожидания истекло";break;case"parsererror":o="Ошибка парсера";break;case"abort":o="Запрос был отменён";break;case"error":o="Произошла ошибка сервера"}e.prototype._callbackAlert("Произошла ошибка",o)}}();
!function(t){t.fn.TableFilter=function(e){return this.each(function(){t(this).keyup(function(){var e=t.trim(t(this).val()).replace(/ +/g," ").toLowerCase();t(t(this).attr("data-tablefilter")).find("tbody tr").show().filter(function(){var i=t(this).text().replace(/\s+/g," ").toLowerCase();return!~i.indexOf(e)}).hide()})})}}(jQuery);
/*!
    localForage -- Offline Storage, Improved
    Version 1.7.3
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype.catch=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a.catch(c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d}).catch(function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})}).catch(c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady().catch(b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c.continue()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})}).catch(e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b.continue()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new va(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||a[j])&&"function"!=typeof a[j])return void c(e)}(function(){for(var b=function(a){return function(){var b=new Error("Method "+a+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];a[e]||(a[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=a,ab[d]=c,b()};"_support"in a?a._support&&"function"==typeof a._support?a._support().then(k,c):k(!!a._support):k(!0)}catch(a){c(a)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e).catch(b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet.catch(function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[],function(){function e(e,t,n,r){return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Пожалуйста, введите на "+n+" символ";return r+=e(n,"","a","ов"),r+=" меньше",r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Пожалуйста, введите еще хотя бы "+n+" символ";return r+=e(n,"","a","ов"),r},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(t){var n="Вы можете выбрать не более "+t.maximum+" элемент";return n+=e(t.maximum,"","a","ов"),n},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"}}}),{define:e.define,require:e.require}})();
/**
 * Template7 1.4.0
 * Mobile-first HTML template engine
 * 
 * http://www.idangero.us/template7/
 * 
 * Copyright 2018, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: August 31, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Template7=t()}(this,function(){"use strict";function Template7(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i=e[0],r=e[1];if(2===e.length){var n=new Template7Class(i),l=n.compile()(r);return n=null,l}return new Template7Class(i)}var t7ctx;t7ctx="undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0;var Template7Context=t7ctx,Template7Utils={quoteSingleRexExp:new RegExp("'","g"),quoteDoubleRexExp:new RegExp('"',"g"),isFunction:function(e){return"function"==typeof e},escape:function(e){return void 0!==Template7Context&&Template7Context.escape?Template7Context.escape(e):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},helperToSlices:function(e){var t,i,r,n=Template7Utils.quoteDoubleRexExp,l=Template7Utils.quoteSingleRexExp,a=e.replace(/[{}#}]/g,"").trim().split(" "),s=[];for(i=0;i<a.length;i+=1){var o=a[i],p=void 0,c=void 0;if(0===i)s.push(o);else if(0===o.indexOf('"')||0===o.indexOf("'"))if(p=0===o.indexOf('"')?n:l,c=0===o.indexOf('"')?'"':"'",2===o.match(p).length)s.push(o);else{for(t=0,r=i+1;r<a.length;r+=1)if(o+=" "+a[r],a[r].indexOf(c)>=0){t=r,s.push(o);break}t&&(i=t)}else if(o.indexOf("=")>0){var u=o.split("="),f=u[0],m=u[1];if(p||(p=0===m.indexOf('"')?n:l,c=0===m.indexOf('"')?'"':"'"),2!==m.match(p).length){for(t=0,r=i+1;r<a.length;r+=1)if(m+=" "+a[r],a[r].indexOf(c)>=0){t=r;break}t&&(i=t)}var d=[f,m.replace(p,"")];s.push(d)}else s.push(o)}return s},stringToBlocks:function(e){var t,i,r=[];if(!e)return[];var n=e.split(/({{[^{^}]*}})/);for(t=0;t<n.length;t+=1){var l=n[t];if(""!==l)if(l.indexOf("{{")<0)r.push({type:"plain",content:l});else{if(l.indexOf("{/")>=0)continue;if((l=l.replace(/{{([#/])*([ ])*/,"{{$1").replace(/([ ])*}}/,"}}")).indexOf("{#")<0&&l.indexOf(" ")<0&&l.indexOf("else")<0){r.push({type:"variable",contextName:l.replace(/[{}]/g,"")});continue}var a=Template7Utils.helperToSlices(l),s=a[0],o=">"===s,p=[],c={};for(i=1;i<a.length;i+=1){var u=a[i];Array.isArray(u)?c[u[0]]="false"!==u[1]&&u[1]:p.push(u)}if(l.indexOf("{#")>=0){var f="",m="",d=0,g=void 0,h=!1,x=!1,v=0;for(i=t+1;i<n.length;i+=1)if(n[i].indexOf("{{#")>=0&&(v+=1),n[i].indexOf("{{/")>=0&&(v-=1),n[i].indexOf("{{#"+s)>=0)f+=n[i],x&&(m+=n[i]),d+=1;else if(n[i].indexOf("{{/"+s)>=0){if(!(d>0)){g=i,h=!0;break}d-=1,f+=n[i],x&&(m+=n[i])}else n[i].indexOf("else")>=0&&0===v?x=!0:(x||(f+=n[i]),x&&(m+=n[i]));h&&(g&&(t=g),"raw"===s?r.push({type:"plain",content:f}):r.push({type:"helper",helperName:s,contextName:p,content:f,inverseContent:m,hash:c}))}else l.indexOf(" ")>0&&(o&&(s="_partial",p[0]&&(0===p[0].indexOf("[")?p[0]=p[0].replace(/[[\]]/g,""):p[0]='"'+p[0].replace(/"|'/g,"")+'"')),r.push({type:"helper",helperName:s,contextName:p,hash:c}))}}return r},parseJsVariable:function(e,t,i){return e.split(/([+ \-*/^])/g).map(function(e){if(e.indexOf(t)<0)return e;if(!i)return JSON.stringify("");var r=i;return e.indexOf(t+".")>=0&&e.split(t+".")[1].split(".").forEach(function(e){r=e in r?r[e]:void 0}),"string"==typeof r&&(r=JSON.stringify(r)),void 0===r&&(r="undefined"),r}).join("")},parseJsParents:function(e,t){return e.split(/([+ \-*^])/g).map(function(e){if(e.indexOf("../")<0)return e;if(!t||0===t.length)return JSON.stringify("");var i=e.split("../").length-1,r=i>t.length?t[t.length-1]:t[i-1];return e.replace(/..\//g,"").split(".").forEach(function(e){r=r[e]?r[e]:"undefined"}),JSON.stringify(r)}).join("")},getCompileVar:function(e,t,i){void 0===i&&(i="data_1");var r,n,l=t,a=0;0===e.indexOf("../")?(a=e.split("../").length-1,l="ctx_"+((n=l.split("_")[1]-a)>=1?n:1),r=e.split("../")[a].split(".")):0===e.indexOf("@global")?(l="Template7.global",r=e.split("@global.")[1].split(".")):0===e.indexOf("@root")?(l="root",r=e.split("@root.")[1].split(".")):r=e.split(".");for(var s=0;s<r.length;s+=1){var o=r[s];if(0===o.indexOf("@")){var p=i.split("_")[1];a>0&&(p=n),s>0?l+="[(data_"+p+" && data_"+p+"."+o.replace("@","")+")]":l="(data_"+p+" && data_"+p+"."+o.replace("@","")+")"}else(Number.isFinite?Number.isFinite(o):Template7Context.isFinite(o))?l+="["+o+"]":"this"===o||o.indexOf("this.")>=0||o.indexOf("this[")>=0||o.indexOf("this(")>=0?l=o.replace("this",t):l+="."+o}return l},getCompiledArguments:function(e,t,i){for(var r=[],n=0;n<e.length;n+=1)/^['"]/.test(e[n])?r.push(e[n]):/^(true|false|\d+)$/.test(e[n])?r.push(e[n]):r.push(Template7Utils.getCompileVar(e[n],t,i));return r.join(", ")}},Template7Helpers={_partial:function(e,t){var i=this,r=Template7Class.partials[e];return!r||r&&!r.template?"":(r.compiled||(r.compiled=new Template7Class(r.template).compile()),Object.keys(t.hash).forEach(function(e){i[e]=t.hash[e]}),r.compiled(i,t.data,t.root))},escape:function(e){if("string"!=typeof e)throw new Error('Template7: Passed context to "escape" helper should be a string');return Template7Utils.escape(e)},if:function(e,t){var i=e;return Template7Utils.isFunction(i)&&(i=i.call(this)),i?t.fn(this,t.data):t.inverse(this,t.data)},unless:function(e,t){var i=e;return Template7Utils.isFunction(i)&&(i=i.call(this)),i?t.inverse(this,t.data):t.fn(this,t.data)},each:function(e,t){var i=e,r="",n=0;if(Template7Utils.isFunction(i)&&(i=i.call(this)),Array.isArray(i)){for(t.hash.reverse&&(i=i.reverse()),n=0;n<i.length;n+=1)r+=t.fn(i[n],{first:0===n,last:n===i.length-1,index:n});t.hash.reverse&&(i=i.reverse())}else for(var l in i)n+=1,r+=t.fn(i[l],{key:l});return n>0?r:t.inverse(this)},with:function(e,t){var i=e;return Template7Utils.isFunction(i)&&(i=e.call(this)),t.fn(i)},join:function(e,t){var i=e;return Template7Utils.isFunction(i)&&(i=i.call(this)),i.join(t.hash.delimiter||t.hash.delimeter)},js:function js(expression,options){var data=options.data,func,execute=expression;return"index first last key".split(" ").forEach(function(e){if(void 0!==data[e]){var t=new RegExp("this.@"+e,"g"),i=new RegExp("@"+e,"g");execute=execute.replace(t,JSON.stringify(data[e])).replace(i,JSON.stringify(data[e]))}}),options.root&&execute.indexOf("@root")>=0&&(execute=Template7Utils.parseJsVariable(execute,"@root",options.root)),execute.indexOf("@global")>=0&&(execute=Template7Utils.parseJsVariable(execute,"@global",Template7Context.Template7.global)),execute.indexOf("../")>=0&&(execute=Template7Utils.parseJsParents(execute,options.parents)),func=execute.indexOf("return")>=0?"(function(){"+execute+"})":"(function(){return ("+execute+")})",eval(func).call(this)},js_if:function js_if(expression,options){var data=options.data,func,execute=expression;"index first last key".split(" ").forEach(function(e){if(void 0!==data[e]){var t=new RegExp("this.@"+e,"g"),i=new RegExp("@"+e,"g");execute=execute.replace(t,JSON.stringify(data[e])).replace(i,JSON.stringify(data[e]))}}),options.root&&execute.indexOf("@root")>=0&&(execute=Template7Utils.parseJsVariable(execute,"@root",options.root)),execute.indexOf("@global")>=0&&(execute=Template7Utils.parseJsVariable(execute,"@global",Template7Context.Template7.global)),execute.indexOf("../")>=0&&(execute=Template7Utils.parseJsParents(execute,options.parents)),func=execute.indexOf("return")>=0?"(function(){"+execute+"})":"(function(){return ("+execute+")})";var condition=eval(func).call(this);return condition?options.fn(this,options.data):options.inverse(this,options.data)}};Template7Helpers.js_compare=Template7Helpers.js_if;var Template7Options={},Template7Partials={},Template7Class=function(e){this.template=e},staticAccessors={options:{configurable:!0},partials:{configurable:!0},helpers:{configurable:!0}};return Template7Class.prototype.compile=function compile(template,depth){function getCompileFn(e,i){return e.content?t.compile(e.content,i):function(){return""}}function getCompileInverse(e,i){return e.inverseContent?t.compile(e.inverseContent,i):function(){return""}}void 0===template&&(template=this.template),void 0===depth&&(depth=1);var t=this;if(t.compiled)return t.compiled;if("string"!=typeof template)throw new Error("Template7: Template must be a string");var stringToBlocks=Template7Utils.stringToBlocks,getCompileVar=Template7Utils.getCompileVar,getCompiledArguments=Template7Utils.getCompiledArguments,blocks=stringToBlocks(template),ctx="ctx_"+depth,data="data_"+depth;if(0===blocks.length)return function(){return""};var resultString="";resultString+=1===depth?"(function ("+ctx+", "+data+", root) {\n":"(function ("+ctx+", "+data+") {\n",1===depth&&(resultString+="function isArray(arr){return Array.isArray(arr);}\n",resultString+="function isFunction(func){return (typeof func === 'function');}\n",resultString+='function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n',resultString+="root = root || ctx_1 || {};\n"),resultString+="var r = '';\n";var i;for(i=0;i<blocks.length;i+=1){var block=blocks[i];if("plain"!==block.type){var variable=void 0,compiledArguments=void 0;if("variable"===block.type&&(variable=getCompileVar(block.contextName,ctx,data),resultString+="r += c("+variable+", "+ctx+");"),"helper"===block.type){var parents=void 0;if("ctx_1"!==ctx){for(var level=ctx.split("_")[1],parentsString="ctx_"+(level-1),j=level-2;j>=1;j-=1)parentsString+=", ctx_"+j;parents="["+parentsString+"]"}else parents="["+ctx+"]";var dynamicHelper=void 0;if(0===block.helperName.indexOf("[")&&(block.helperName=getCompileVar(block.helperName.replace(/[[\]]/g,""),ctx,data),dynamicHelper=!0),dynamicHelper||block.helperName in Template7Helpers)compiledArguments=getCompiledArguments(block.contextName,ctx,data),resultString+="r += (Template7Helpers"+(dynamicHelper?"["+block.helperName+"]":"."+block.helperName)+").call("+ctx+", "+(compiledArguments&&compiledArguments+", ")+"{hash:"+JSON.stringify(block.hash)+", data: "+data+" || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root, parents: "+parents+"});";else{if(block.contextName.length>0)throw new Error('Template7: Missing helper: "'+block.helperName+'"');variable=getCompileVar(block.helperName,ctx,data),resultString+="if ("+variable+") {",resultString+="if (isArray("+variable+")) {",resultString+="r += (Template7Helpers.each).call("+ctx+", "+variable+", {hash:"+JSON.stringify(block.hash)+", data: "+data+" || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root, parents: "+parents+"});",resultString+="}else {",resultString+="r += (Template7Helpers.with).call("+ctx+", "+variable+", {hash:"+JSON.stringify(block.hash)+", data: "+data+" || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root, parents: "+parents+"});",resultString+="}}"}}}else resultString+="r +='"+block.content.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/'/g,"\\'")+"';"}return resultString+="\nreturn r;})",1===depth?(t.compiled=eval(resultString),t.compiled):resultString},staticAccessors.options.get=function(){return Template7Options},staticAccessors.partials.get=function(){return Template7Partials},staticAccessors.helpers.get=function(){return Template7Helpers},Object.defineProperties(Template7Class,staticAccessors),Template7.registerHelper=function(e,t){Template7Class.helpers[e]=t},Template7.unregisterHelper=function(e){Template7Class.helpers[e]=void 0,delete Template7Class.helpers[e]},Template7.registerPartial=function(e,t){Template7Class.partials[e]={template:t}},Template7.unregisterPartial=function(e){Template7Class.partials[e]&&(Template7Class.partials[e]=void 0,delete Template7Class.partials[e])},Template7.compile=function(e,t){return new Template7Class(e,t).compile()},Template7.options=Template7Class.options,Template7.helpers=Template7Class.helpers,Template7.partials=Template7Class.partials,Template7});
//# sourceMappingURL=template7.min.js.map

/**
 * Загрузочный скрипт приложения
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект главного скрипта
 *
 * @type {object}
 */
var lemurro = {};

/**
 * Настройки
 *
 * @type {object}
 */
lemurro.settings = {};

/**
 * ИД сессии
 *
 * @type {string}
 */
lemurro.sessionID = '';

/**
 * Объект для выполнения Ajax-запросов
 *
 * @type {object}
 */
lemurro.lightajax = {};

/**
 * Инициализация
 *
 * @param {object} options Параметры
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.init = function (options) {
    lemurro.settings = Object.assign({
        onLoad: function () {
            // Выполняет код после загрузки приложения, перед загрузкой страницы
        }
    }, options);

    lemurro._bindJSerrors();

    // Инициализируем плагин LightAjax
    lemurro.lightajax = new LightAjax({
        callbackAlert: function (title, message) {
            swal(title, message, 'error');
        },
        ajax         : {
            beforeSend: function (xhr, settings) {
                if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                    xhr.setRequestHeader("X-SESSION-ID", lemurro.sessionID);
                }
            }
        }
    });

    lemurro._bindCodeMask();
    lemurro._bindPhoneMask();
    lemurro._bindSelect2();
    lemurro._bindTableFilter();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        lemurro.sessionID = value;
        lemurro.auth.check();
    });

    // Достанем из локального хранилища ИД прошлой сессии, если есть
    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            $('#js-user-return').show();
        }
    });
};
/**
 * Создадим маску для кода авторизации
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindCodeMask = function () {
    $('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });
};
/**
 * Событие отправки javascript-ошибки при возникновении
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindJSerrors = function () {
    /**
     * Отправка javascript-ошибки
     *
     * @param {string} msg
     * @param {string} file
     * @param {string} line
     * @param {string} col
     * @param {string} err
     *
     * @version 17.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function sendError(msg, file, line, col, err) {
        var errString = 'JSON not found';
        if (window.JSON) {
            errString = JSON.stringify(err);
        }

        if (typeof(msg) === 'object') {
            file      = msg.filename;
            line      = msg.lineno;
            col       = msg.colno;
            errString = msg.error.stack;
            msg       = msg.message;
        }

        new Image().src = pathServerAPI + 'jserrors?msg=' + encodeURIComponent(msg) + '&file=' + encodeURIComponent(file) + '&line=' + encodeURIComponent(line) + '&col=' + encodeURIComponent(col) + '&err=' + encodeURIComponent(errString);
    }

    if (window.addEventListener) {
        window.addEventListener('error', sendError, false);
    } else if (window.attachEvent) {
        window.attachEvent('onerror', sendError);
    } else {
        window.onerror = sendError;
    }
};
/**
 * Создадим маску для телефона
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindPhoneMask = function () {
    $('.js-phone-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '+7 (999) 999-99-99'
        }).mask(element);
    });
};
/**
 * Подключим Select2
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindSelect2 = function () {
    $('.js-select2').each(function () {
        $(this).select2({
            language   : 'ru',
            placeholder: 'Выберите из списка'
        });
    });
};
/**
 * Подключим jQuery.TableFilter
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindTableFilter = function () {
    $('.tablefilter').TableFilter();
};
/**
 * Покажем форму входа
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        $('#js-auth__get-form').show();
        $('#js-auth__check-form').hide();

        modal.find('input[type="text"]').val('');

        modal.modal({
            backdrop: 'static',
            keyboard: false
        });
    } else {
        modal.modal('hide');
    }
};
/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.initPage = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.userinfo = result.data;

            $('.js-user__auth-id').text(lemurro.userinfo.auth_id);

            if (lemurro.userinfo.admin) {
                $('body').find('.js-role').show();
            } else {
                for (var pageID in lemurro.userinfo.roles) {
                    if (lemurro.userinfo.roles[pageID].indexOf('read') !== -1) {
                        $('body').find('.js-role__' + pageID).show();
                    }
                }
            }

            lemurro.settings.onLoad();

            var page = $('#js-page');

            if (page.length > 0) {
                var pageName = page.attr('data-page');

                if (pageName === 'lemurro.guide') {
                    if (window.hasOwnProperty('lemurro') && window.lemurro.hasOwnProperty('guide') && window.lemurro.guide.hasOwnProperty('init')) {
                        lemurro.guide.init();
                    }
                } else {
                    var pageScript = window[pageName];

                    if (pageScript !== undefined) {
                        if (pageScript.hasOwnProperty('init')) {
                            pageScript.init();
                        }
                    }
                }
            }
        }
    });
};
/**
 * Отображение ошибок
 *
 * @param {array} errors Массив ошибок
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        lemurro.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        var redirect = true;

        if (errors[0].hasOwnProperty('meta') && errors[0].meta.hasOwnProperty('redirect')) {
            redirect = errors[0].meta.redirect;
        }

        if (redirect) {
            location.assign(location.origin + '/403');
        } else {
            lemurro._showError(errors[0].code, errors[0].title);
        }
    } else {
        for (var i in errors) {
            lemurro._showError(errors[i].code, errors[i].title);
        }
    }
};

/**
 * Покажем ошибку
 *
 * @param {string} errCode  Код ошибки
 * @param {string} errTitle Текст ошибки
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._showError = function (errCode, errTitle) {
    var title = 'Неизвестная ошибка';
    var code  = 'error';

    switch (errCode) {
        case 'danger':
            code  = 'error';
            title = 'Критическая ошибка';
            break;

        case 'warning':
            code  = 'warning';
            title = 'Внимание!';
            break;

        case 'info':
            code  = 'info';
            title = 'Информация';
            break;
    }

    swal(title, errTitle, code);
};
/**
 * Проверка сессии при запуске приложения
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.auth = {};

/**
 * ИД таймера
 *
 * @type {int|null}
 *
 * @public
 */
lemurro.auth._timerID = null;
/**
 * Запуск таймера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._runTimer = function () {
    if (lemurro.auth._timerID !== null) {
        clearInterval(lemurro.auth._timerID);
    }

    lemurro.auth._timerID = setInterval(function () {
        var formCode  = $('#js-auth__check-form');
        var elemTimer = formCode.find('.js-timer__count');
        var count     = parseInt(elemTimer.text(), 10);

        if (count > 0) {
            elemTimer.text(--count);
        } else {
            clearInterval(lemurro.auth._timerID);
            formCode.find('.js-timer').hide();
            formCode.find('.js-resend').show();
        }
    }, 1000);
};
/**
 * Проверка сессии
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.initPage();
        }
    });
};
/**
 * Проверка введенного кода
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    lemurro.lightajax.post(true, pathServerAPI + 'auth/code', {
        'auth_id'    : $('#js-auth__get-form').find('input[name="auth_id"]').val(),
        'auth_code'  : $('#js-auth__check-form').find('input[name="auth_code"]').val(),
        'device_info': {
            uuid        : 'WebApp',
            platform    : browser.parsedResult.os.name,
            version     : browser.parsedResult.os.version,
            manufacturer: browser.parsedResult.browser.name,
            model       : browser.parsedResult.browser.version
        }
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            $('#js-auth__check-form').find('input[name="auth_code"]').val('');

            lemurro.showErrors(result.errors);
        } else {
            localforage.setItem('sessionID', result.data.session, function () {
                lemurro.sessionID = result.data.session;
                lemurro.authScreen('hide');
                lemurro.auth.check();
            });
        }
    });
};
/**
 * Получение кода
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.getCode = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'auth/code', {
        'auth_id': $('#js-auth__get-form').find('input[name="auth_id"]').val()
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (result.data.hasOwnProperty('message')) {
                console.log(result.data.message, 'AuthCode');
            }

            var formCode = $('#js-auth__check-form');

            formCode.find('.js-timer').show();
            formCode.find('.js-timer__count').text('60');
            formCode.find('.js-resend').hide();

            lemurro.auth._runTimer();

            $('#js-auth__get-form').hide();
            formCode.show();
        }
    });
};
/**
 * Сброс сессии
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.logout = function () {
    lemurro.helper.showConfirm('Выход', 'Вы действительно хотите выйти из системы?', 'Да', 'Нет', null, null, function () {
        $('.js-user-data').html('<i class="fas fa-spinner fa-pulse"></i>');
        localforage.clear();
        lemurro.sessionID = '';
        lemurro.authScreen('show');
    }, null);
};
/**
 * Хелперы
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.helper = {};
/**
 * Очистка формы
 *
 * @param {object} container jQuery-объект контейнера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearFields = function (container) {
    container.find('input[type="text"],input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],input[type="date"],input[type="time"]')
        .val('');

    container.find('textarea').val('');

    container.find('select').each(function () {
        $(this).val(null).trigger('change');
    });

    container.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', false);
    });

    container.find('input[type="radio"]').each(function () {
        $(this).prop('checked', false);
    });
};
/**
 * Преобразование строки в дробное число
 *
 * @param {string} str Строка с дробным числом
 *
 * @return {string}
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.decimal = function (str) {
    return parseFloat(str.replace(/,/g, '.'));
};
/**
 * Проверка пользователя на наличие прав
 *
 * @param {string}   page            Раздел
 * @param {string}   access          Право доступа
 * @param {function} callbackSuccess Функция вызова при успешном получении данных
 * @param {function} callbackFail    Функция вызова при провале
 *
 * @version 31.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.isRole = function (page, access, callbackSuccess, callbackFail) {
    var _timer = setInterval(function () {
        if (lemurro.hasOwnProperty('userinfo')) {
            clearInterval(_timer);

            if (lemurro.userinfo.admin) {
                if (!isEmpty(callbackSuccess)) {
                    callbackSuccess();
                }
            } else {
                var fail = true;

                if (lemurro.userinfo.roles.hasOwnProperty(page)) {
                    var i;

                    for (i in lemurro.userinfo.roles[page]) {
                        if (lemurro.userinfo.roles[page][i] === access) {
                            fail = false;

                            if (!isEmpty(callbackSuccess)) {
                                callbackSuccess();
                            }
                        }
                    }
                }

                if (fail && !isEmpty(callbackFail)) {
                    callbackFail();
                }
            }
        }
    }, 500);
};
/**
 * Покажем подтверждение
 *
 * @param {string}   title              Заголовок
 * @param {string}   content            HTML-Содержимое
 * @param {string}   confirmButtonText  Текст кнопки "OK"
 * @param {string}   cancelButtonText   Текст кнопки "Cancel"
 * @param {function} callbackOpen       Функция при открытии формы
 * @param {function} callbackPreConfirm Функция перед вызовом callbackConfirm
 * @param {function} callbackConfirm    Функция при нажатии confirmButton
 * @param {function} callbackCancel     Функция при нажатии cancelButton
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.showConfirm = function (title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
    swal({
        title            : title,
        html             : content,
        type             : '',
        allowOutsideClick: false,
        showCancelButton : true,
        confirmButtonText: confirmButtonText,
        cancelButtonText : cancelButtonText,
        onOpen           : callbackOpen,
        preConfirm       : callbackPreConfirm
    }).then(function (result) {
        if (result.value) {
            callbackConfirm();
        } else {
            if (callbackCancel !== null) {
                callbackCancel();
            }
        }
    });
};
/**
 * Операции с табами
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.tabs = {};
/**
 * Покажем указанный таб
 *
 * @param {string} tabID Идентификатор нужного таба
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.tabs.showTab = function (tabID) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    tabsLinks.find('.nav-link').removeClass('active show');
    tabsContents.find('.tab-pane').removeClass('active show');

    tabsLinks.find('a[data-target="#' + tabID + '"]').addClass('active show');
    tabsContents.find('#' + tabID).addClass('active show');
};
/**
 * Скрыть\Показать вторую вкладку
 *
 * @param {string} action Действие (show|hide)
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.tabs.tabInsertEdit = function (action) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (action === 'show') {
        tabsLinks.find('a[data-target="#tab-form"]').parent().show();
        tabsContents.find('#tab-form').addClass('active show');
        lemurro.tabs.showTab('tab-form');
    } else {
        tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
        tabsContents.find('#tab-form').removeClass('active show');
        lemurro.tabs.showTab('tab-list');
    }
};
/**
 * Операции со справочниками
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.guide = {};

/**
 * Инициализация
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function () {
    /**
     * Тип справочника
     *
     * @type {string}
     */
    lemurro.guide.type = $('#js-page').attr('data-type');

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    lemurro.guide._getData();
};
/**
 * Список элементов справочника
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide.type, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var html = '';

                for (var i in result.data.items) {
                    html += lemurro.guide.templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }

            if (
                result.data.js_class !== undefined
                && window.hasOwnProperty(result.data.js_class)
                && window[result.data.js_class].hasOwnProperty('init')
            ) {
                window[result.data.js_class].init();
            }
        }
    });
};
/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};
/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {string}   name     Имя записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление записи',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};
/**
 * Изменение записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.save = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + data.id, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    lemurro.helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    callback();
};
/**
 * Работа с пользователями
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.users = {};
/**
 * Редактирование
 *
 * @param {integer}  id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};
/**
 * Список пользователей
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var html = '';

            for (var i in result.data.items) {
                html += users.templates.item(result.data.items[i]);
            }

            $('#js-users__items').html(html);

            localforage.getItem('lastSessionID', function (err, value) {
                if (value !== null) {
                    $('#js-users__items').find('.js-login-by-user').hide();
                }
            });
        }
    });
};
/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.insert = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users', {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Вход под указанным пользователем
 *
 * @param {integer} id ИД пользователя
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.loginByUser = function (id) {
    swal({
        title            : 'Войти под пользователем?',
        html             : '',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да',
        cancelButtonText : 'Нет'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'users/login_by_user', {
                user_id: id
            }, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    localforage.setItem('lastSessionID', lemurro.sessionID, function () {
                        localforage.setItem('sessionID', result.data.session, function () {
                            location.replace(location.origin);
                        });
                    });
                }
            });
        }
    });
};
/**
 * Удаление
 *
 * @param {integer}  id       ИД пользователя
 * @param {string}   name     Имя пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление пользователя',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};
/**
 * Вернуться обратно
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.return = function () {
    localforage.getItem('lastSessionID', function (err, value) {
        var lastSessionID = value;

        if (lastSessionID === null) {
            swal('Ошибка', 'Прошлая сессия отсутствует', 'error');

            return;
        }

        swal({
            title            : 'Вернуться обратно?',
            html             : '',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да',
            cancelButtonText : 'Нет'
        }).then(function (result) {
            if (result.value) {
                localforage.removeItem('lastSessionID', function () {
                    localforage.setItem('sessionID', lastSessionID, function () {
                        location.replace(location.origin);
                    });
                });
            }
        });
    });
};
/**
 * Изменение
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.save = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users/' + data.id, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    lemurro.helper.clearFields(container);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    callback();
};