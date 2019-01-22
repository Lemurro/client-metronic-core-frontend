!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bowser=n():t.bowser=n()}(this,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=334)}([function(t,n,r){var e=r(2),i=r(22),o=r(13),u=r(12),c=r(21),a=function(t,n,r){var s,f,l,h,v=t&a.F,p=t&a.G,d=t&a.S,g=t&a.P,y=t&a.B,b=p?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=p?i:i[n]||(i[n]={}),w=m.prototype||(m.prototype={});for(s in p&&(r=n),r)l=((f=!v&&b&&void 0!==b[s])?b:r)[s],h=y&&f?c(l,e):g&&"function"==typeof l?c(Function.call,l):l,b&&u(b,s,l,t&a.U),m[s]!=l&&o(m,s,h),g&&w[s]!=l&&(w[s]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(64)("wks"),i=r(41),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(25),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(1),i=r(130),o=r(27),u=Object.defineProperty;n.f=r(8)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(26);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(0),i=r(3),o=r(26),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},function(t,n,r){var e=r(2),i=r(13),o=r(17),u=r(41)("src"),c=Function.toString,a=(""+c).split("toString");r(22).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var s="function"==typeof r;s&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(s&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(7),i=r(42);t.exports=r(8)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(17),i=r(9),o=r(94)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(48),i=r(42),o=r(16),u=r(27),c=r(17),a=r(130),s=Object.getOwnPropertyDescriptor;n.f=r(8)?s:function(t,n){if(t=o(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(49),i=r(26);t.exports=function(t){return e(i(t))}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e,i,o;i=[t],void 0===(o="function"==typeof(e=function(t){"use strict";var n=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),r=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,null,[{key:"getFirstMatch",value:function(t,n){var r=n.match(t);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(t,n){var r=n.match(t);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(t,n,r){if(t.test(n))return r}},{key:"getWindowsVersionName",value:function(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}},{key:"getVersionPrecision",value:function(t){return t.split(".").length}},{key:"compareVersions",value:function(n,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.getVersionPrecision(n),o=t.getVersionPrecision(r),u=Math.max(i,o),c=0,a=t.map([n,r],function(n){var r=u-t.getVersionPrecision(n),e=n+new Array(r+1).join(".0");return t.map(e.split("."),function(t){return new Array(20-t.length).join("0")+t}).reverse()});for(e&&(c=u-Math.min(i,o)),u-=1;u>=c;){if(a[0][u]>a[1][u])return 1;if(a[0][u]===a[1][u]){if(u===c)return 0;u-=1}else if(a[0][u]<a[1][u])return-1}}},{key:"map",value:function(t,n){var r=[],e=void 0;if(Array.prototype.map)return Array.prototype.map.call(t,n);for(e=0;e<t.length;e+=1)r.push(n(t[e]));return r}}]),t}();t.exports=r})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(21),i=r(49),o=r(9),u=r(6),c=r(77);t.exports=function(t,n){var r=1==t,a=2==t,s=3==t,f=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,g,y=o(n),b=i(y),m=e(c,p,3),w=u(b.length),S=0,x=r?v(n,w):a?v(n,0):void 0;w>S;S++)if((h||S in b)&&(g=m(d=b[S],S,y),t))if(r)x[S]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:x.push(d)}else if(f)return!1;return l?-1:s||f?f:x}}},function(t,n,r){var e=r(0),i=r(22),o=r(3);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(109),i=r(0),o=r(64)("metadata"),u=o.store||(o.store=new(r(106))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,n,r){"use strict";if(r(8)){var e=r(31),i=r(2),o=r(3),u=r(0),c=r(53),a=r(71),s=r(21),f=r(35),l=r(42),h=r(13),v=r(33),p=r(25),d=r(6),g=r(104),y=r(39),b=r(27),m=r(17),w=r(47),S=r(4),x=r(9),_=r(80),M=r(38),F=r(14),O=r(37).f,E=r(78),P=r(41),k=r(5),A=r(23),j=r(63),N=r(56),R=r(75),T=r(44),I=r(59),L=r(36),B=r(76),C=r(114),W=r(7),D=r(15),V=W.f,U=D.f,G=i.RangeError,z=i.TypeError,Y=i.Uint8Array,K=Array.prototype,J=a.ArrayBuffer,q=a.DataView,X=A(0),H=A(2),Z=A(3),$=A(4),Q=A(5),tt=A(6),nt=j(!0),rt=j(!1),et=R.values,it=R.keys,ot=R.entries,ut=K.lastIndexOf,ct=K.reduce,at=K.reduceRight,st=K.join,ft=K.sort,lt=K.slice,ht=K.toString,vt=K.toLocaleString,pt=k("iterator"),dt=k("toStringTag"),gt=P("typed_constructor"),yt=P("def_constructor"),bt=c.CONSTR,mt=c.TYPED,wt=c.VIEW,St=A(1,function(t,n){return Ot(N(t,t[yt]),n)}),xt=o(function(){return 1===new Y(new Uint16Array([1]).buffer)[0]}),_t=!!Y&&!!Y.prototype.set&&o(function(){new Y(1).set({})}),Mt=function(t,n){var r=p(t);if(r<0||r%n)throw G("Wrong offset!");return r},Ft=function(t){if(S(t)&&mt in t)return t;throw z(t+" is not a typed array!")},Ot=function(t,n){if(!(S(t)&&gt in t))throw z("It is not a typed array constructor!");return new t(n)},Et=function(t,n){return Pt(N(t,t[yt]),n)},Pt=function(t,n){for(var r=0,e=n.length,i=Ot(t,e);e>r;)i[r]=n[r++];return i},kt=function(t,n,r){V(t,n,{get:function(){return this._d[r]}})},At=function(t){var n,r,e,i,o,u,c=x(t),a=arguments.length,f=a>1?arguments[1]:void 0,l=void 0!==f,h=E(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(f=s(f,arguments[2],2)),n=0,r=d(c.length),i=Ot(this,r);r>n;n++)i[n]=l?f(c[n],n):c[n];return i},jt=function(){for(var t=0,n=arguments.length,r=Ot(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!Y&&o(function(){vt.call(new Y(1))}),Rt=function(){return vt.apply(Nt?lt.call(Ft(this)):Ft(this),arguments)},Tt={copyWithin:function(t,n){return C.call(Ft(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Ft(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return B.apply(Ft(this),arguments)},filter:function(t){return Et(this,H(Ft(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Ft(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(Ft(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return st.apply(Ft(this),arguments)},lastIndexOf:function(t){return ut.apply(Ft(this),arguments)},map:function(t){return St(Ft(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Ft(this),arguments)},reduceRight:function(t){return at.apply(Ft(this),arguments)},reverse:function(){for(var t,n=Ft(this).length,r=Math.floor(n/2),e=0;e<r;)t=this[e],this[e++]=this[--n],this[n]=t;return this},some:function(t){return Z(Ft(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ft.call(Ft(this),t)},subarray:function(t,n){var r=Ft(this),e=r.length,i=y(t,e);return new(N(r,r[yt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},It=function(t,n){return Et(this,lt.call(Ft(this),t,n))},Lt=function(t){Ft(this);var n=Mt(arguments[1],1),r=this.length,e=x(t),i=d(e.length),o=0;if(i+n>r)throw G("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Bt={entries:function(){return ot.call(Ft(this))},keys:function(){return it.call(Ft(this))},values:function(){return et.call(Ft(this))}},Ct=function(t,n){return S(t)&&t[mt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Wt=function(t,n){return Ct(t,n=b(n,!0))?l(2,t[n]):U(t,n)},Dt=function(t,n,r){return!(Ct(t,n=b(n,!0))&&S(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?V(t,n,r):(t[n]=r.value,t)};bt||(D.f=Wt,W.f=Dt),u(u.S+u.F*!bt,"Object",{getOwnPropertyDescriptor:Wt,defineProperty:Dt}),o(function(){ht.call({})})&&(ht=vt=function(){return st.call(this)});var Vt=v({},Tt);v(Vt,Bt),h(Vt,pt,Bt.values),v(Vt,{slice:It,set:Lt,constructor:function(){},toString:ht,toLocaleString:Rt}),kt(Vt,"buffer","b"),kt(Vt,"byteOffset","o"),kt(Vt,"byteLength","l"),kt(Vt,"length","e"),V(Vt,dt,{get:function(){return this[mt]}}),t.exports=function(t,n,r,a){var s=t+((a=!!a)?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[s],y=p||{},b=p&&F(p),m=!p||!c.ABV,x={},_=p&&p.prototype,E=function(t,r){V(t,r,{get:function(){return function(t,r){var e=t._d;return e.v[l](r*n+e.o,xt)}(this,r)},set:function(t){return function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,xt)}(this,r,t)},enumerable:!0})};m?(p=r(function(t,r,e,i){f(t,p,s,"_d");var o,u,c,a,l=0,v=0;if(S(r)){if(!(r instanceof J||"ArrayBuffer"==(a=w(r))||"SharedArrayBuffer"==a))return mt in r?Pt(p,r):At.call(p,r);o=r,v=Mt(e,n);var y=r.byteLength;if(void 0===i){if(y%n)throw G("Wrong length!");if((u=y-v)<0)throw G("Wrong length!")}else if((u=d(i)*n)+v>y)throw G("Wrong length!");c=u/n}else c=g(r),o=new J(u=c*n);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new q(o)});l<c;)E(t,l++)}),_=p.prototype=M(Vt),h(_,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&I(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=r(function(t,r,e,i){var o;return f(t,p,s),S(r)?r instanceof J||"ArrayBuffer"==(o=w(r))||"SharedArrayBuffer"==o?void 0!==i?new y(r,Mt(e,n),i):void 0!==e?new y(r,Mt(e,n)):new y(r):mt in r?Pt(p,r):At.call(p,r):new y(g(r))}),X(b!==Function.prototype?O(y).concat(O(b)):O(y),function(t){t in p||h(p,t,y[t])}),p.prototype=_,e||(_.constructor=p));var P=_[pt],k=!!P&&("values"==P.name||void 0==P.name),A=Bt.values;h(p,gt,!0),h(_,mt,s),h(_,wt,!0),h(_,yt,p),(a?new p(1)[dt]==s:dt in _)||V(_,dt,{get:function(){return s}}),x[s]=p,u(u.G+u.W+u.F*(p!=y),x),u(u.S,s,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){y.of.call(p,1)}),s,{from:At,of:jt}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,s,Tt),L(s),u(u.P+u.F*_t,s,{set:Lt}),u(u.P+u.F*!k,s,Bt),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new p(1).slice()}),s,{slice:It}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),s,{toLocaleString:Rt}),T[s]=k?P:A,e||k||h(_,pt,A)}}else t.exports=function(){}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;void 0==i[e]&&r(13)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=!1},function(t,n,r){var e=r(41)("meta"),i=r(4),o=r(17),u=r(7).f,c=0,a=Object.isExtensible||function(){return!0},s=!r(3)(function(){return a(Object.preventExtensions({}))}),f=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";f(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;f(t)}return t[e].w},onFreeze:function(t){return s&&l.NEED&&a(t)&&!o(t,e)&&f(t),t}}},function(t,n,r){var e=r(12);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){var e=r(21),i=r(116),o=r(80),u=r(1),c=r(6),a=r(78),s={},f={};(n=t.exports=function(t,n,r,l,h){var v,p,d,g,y=h?function(){return t}:a(t),b=e(r,l,n?2:1),m=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(v=c(t.length);v>m;m++)if((g=n?b(u(p=t[m])[0],p[1]):b(t[m]))===s||g===f)return g}else for(d=y.call(t);!(p=d.next()).done;)if((g=i(d,b,p.value,n))===s||g===f)return g}).BREAK=s,n.RETURN=f},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){"use strict";var e=r(2),i=r(7),o=r(8),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(128),i=r(93).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){var e=r(1),i=r(127),o=r(93),u=r(94)("IE_PROTO"),c=function(){},a=function(){var t,n=r(96)("iframe"),e=o.length;for(n.style.display="none",r(92).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[o[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(25),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(128),i=r(93);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports={}},function(t,n,r){var e=r(0),i=r(26),o=r(3),u=r(90),c="["+u+"]",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),f=function(t,n,r){var i={},c=o(function(){return!!u[t]()||"​"!="​"[t]()}),a=i[t]=c?n(l):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},l=f.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},function(t,n,r){var e=r(7).f,i=r(17),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(20),i=r(5)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(21),u=r(34);t.exports=function(t){e(e.S,t,{from:function(t){var n,r,e,c,a=arguments[1];return i(this),(n=void 0!==a)&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},function(t,n,r){"use strict";var e=r(0);t.exports=function(t){e(e.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){"use strict";t.exports=r(31)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){for(var e,i=r(2),o=r(13),u=r(41),c=u("typed_array"),a=u("view"),s=!(!i.ArrayBuffer||!i.DataView),f=s,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:c,VIEW:a}},function(t,n,r){"use strict";var e=r(2),i=r(0),o=r(12),u=r(33),c=r(32),a=r(34),s=r(35),f=r(4),l=r(3),h=r(59),v=r(46),p=r(89);t.exports=function(t,n,r,d,g,y){var b=e[t],m=b,w=g?"set":"add",S=m&&m.prototype,x={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(y||S.forEach&&!l(function(){(new m).entries().next()}))){var M=new m,F=M[w](y?{}:-0,1)!=M,O=l(function(){M.has(1)}),E=h(function(t){new m(t)}),P=!y&&l(function(){for(var t=new m,n=5;n--;)t[w](n,n);return!t.has(-0)});E||((m=n(function(n,r){s(n,m,t);var e=p(new b,n,m);return void 0!=r&&a(r,g,e[w],e),e})).prototype=S,S.constructor=m),(O||P)&&(_("delete"),_("has"),g&&_("get")),(P||F)&&_(w),y&&S.clear&&delete S.clear}else m=d.getConstructor(n,t,g,w),u(m.prototype,r),c.NEED=!0;return v(m,t),x[t]=m,i(i.G+i.W+i.F*(m!=b),x),y||d.setStrong(m,t,g),m}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var e=r(1),i=r(10),o=r(5)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";var e=r(13),i=r(12),o=r(3),u=r(26),c=r(5);t.exports=function(t,n,r){var a=c(t),s=r(u,a,""[t]),f=s[0],l=s[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,f),e(RegExp.prototype,a,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,r){"use strict";var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){var e=r(4),i=r(20),o=r(5)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,r){var e=r(20);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(16),i=r(6),o=r(39);t.exports=function(t){return function(n,r,u){var c,a=e(n),s=i(a.length),f=o(u,s);if(t&&r!=r){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}}},function(t,n,r){var e=r(22),i=r(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(31)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{test:function(t){return"microsoft edge"===t.getBrowserName(!0)},describe:function(t){var n=(0,r.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:"EdgeHTML",version:n}}},{test:[/trident/i],describe:function(t){var n={name:"Trident"},e=(0,r.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){return t.test(/presto/i)},describe:function(t){var n={name:"Presto"},e=(0,r.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=t.test(/gecko/i),r=t.test(/like gecko/i);return n&&!r},describe:function(t){var n={name:"Gecko"},e=(0,r.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(t){var n={name:"WebKit"},e=(0,r.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={tablet:"tablet",mobile:"mobile",desktop:"desktop"};n.default=[{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:e.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:e.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:e.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:e.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return{type:e.tablet}}},{test:function(t){var n=t.test(/ipod|iphone/i),r=t.test(/like (ipod|iphone)/i);return n&&!r},describe:function(t){var n=(0,r.getFirstMatch)(/(ipod|iphone)/i,t);return{type:e.mobile,vendor:"Apple",model:n}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:e.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:e.mobile}}},{test:function(t){return"blackberry"===t.getBrowserName(!0)},describe:function(){return{type:e.mobile,vendor:"BlackBerry"}}},{test:function(t){return"bada"===t.getBrowserName(!0)},describe:function(){return{type:e.mobile}}},{test:function(t){return"windows phone"===t.getBrowserName()},describe:function(){return{type:e.mobile,vendor:"Microsoft"}}},{test:function(t){var n=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&n>=3},describe:function(){return{type:e.tablet}}},{test:function(t){return"android"===t.getOSName(!0)},describe:function(){return{type:e.mobile}}},{test:function(t){return"macos"===t.getOSName(!0)},describe:function(){return{type:e.desktop,vendor:"Apple"}}},{test:function(t){return"windows"===t.getOSName(!0)},describe:function(){return{type:e.desktop}}},{test:function(t){return"linux"===t.getOSName(!0)},describe:function(){return{type:e.desktop}}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{test:[/windows phone/i],describe:function(t){var n=(0,r.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:"Windows Phone",version:n}}},{test:[/windows/i],describe:function(t){var n=(0,r.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),e=(0,r.getWindowsVersionName)(n);return{name:"Windows",version:n,versionName:e}}},{test:[/macintosh/i],describe:function(t){var n=(0,r.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,".");return{name:"macOS",version:n}}},{test:[/(ipod|iphone|ipad)/i],describe:function(t){var n=(0,r.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:"iOS",version:n}}},{test:function(t){var n=!t.test(/like android/i),r=t.test(/android/i);return n&&r},describe:function(t){var n=(0,r.getFirstMatch)(/android[\s/-](\d+(\.\d+)*)/i,t);return{name:"Android",version:n}}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n=(0,r.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),e={name:"WebOS"};return n&&n.length&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n=(0,r.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||(0,r.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||(0,r.getFirstMatch)(/\bbb(\d+)/i,t);return{name:"BlackBerry",version:n}}},{test:[/bada/i],describe:function(t){var n=(0,r.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i,t);return{name:"Bada",version:n}}},{test:[/tizen/i],describe:function(t){var n=(0,r.getFirstMatch)(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:"Tizen",version:n}}},{test:[/linux/i],describe:function(){return{name:"Linux"}}}],t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(18)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=/version\/(\d+(\.?_?\d+)+)/i,i=[{test:[/opera/i],describe:function(t){var n={name:"Opera"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/opr\/|opios/i],describe:function(t){var n={name:"Opera"},i=(0,r.getFirstMatch)(/(?:opr|opios)[\s/](\S+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/SamsungBrowser/i],describe:function(t){var n={name:"Samsung Internet for Android"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/Whale/i],describe:function(t){var n={name:"NAVER Whale Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/MZBrowser/i],describe:function(t){var n={name:"MZ Browser"},i=(0,r.getFirstMatch)(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/focus/i],describe:function(t){var n={name:"Focus"},i=(0,r.getFirstMatch)(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/swing/i],describe:function(t){var n={name:"Swing"},i=(0,r.getFirstMatch)(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/coast/i],describe:function(t){var n={name:"Opera Coast"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/yabrowser/i],describe:function(t){var n={name:"Yandex Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/ucbrowser/i],describe:function(t){var n={name:"UC Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/Maxthon|mxios/i],describe:function(t){var n={name:"Maxthon"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/epiphany/i],describe:function(t){var n={name:"Epiphany"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/puffin/i],describe:function(t){var n={name:"Puffin"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/sleipnir/i],describe:function(t){var n={name:"Sleipnir"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/k-meleon/i],describe:function(t){var n={name:"K-Meleon"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/msie|trident/i],describe:function(t){var n={name:"Internet Explorer"},e=(0,r.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/edg([ea]|ios)/i],describe:function(t){var n={name:"Microsoft Edge"},e=(0,r.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/vivaldi/i],describe:function(t){var n={name:"Vivaldi"},e=(0,r.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/seamonkey/i],describe:function(t){var n={name:"SeaMonkey"},e=(0,r.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/sailfish/i],describe:function(t){var n={name:"Sailfish"},e=(0,r.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return e&&(n.version=e),n}},{test:[/silk/i],describe:function(t){var n={name:"Amazon Silk"},e=(0,r.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/phantom/i],describe:function(t){var n={name:"PhantomJS"},e=(0,r.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/slimerjs/i],describe:function(t){var n={name:"SlimerJS"},e=(0,r.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n={name:"BlackBerry"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n={name:"WebOS Browser"},i=(0,r.getFirstMatch)(e,t)||(0,r.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(n.version=i),n}},{test:[/bada/i],describe:function(t){var n={name:"Bada"},e=(0,r.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/tizen/i],describe:function(t){var n={name:"Tizen"},i=(0,r.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/qupzilla/i],describe:function(t){var n={name:"QupZilla"},i=(0,r.getFirstMatch)(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/firefox|iceweasel|fxios/i],describe:function(t){var n={name:"Firefox"},e=(0,r.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/chromium/i],describe:function(t){var n={name:"Chromium"},i=(0,r.getFirstMatch)(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/chrome|crios|crmo/i],describe:function(t){var n={name:"Chrome"},e=(0,r.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=!t.test(/like android/i),r=t.test(/android/i);return n&&r},describe:function(t){var n={name:"Android Browser"},i=(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/safari|applewebkit/i],describe:function(t){var n={name:"Safari"},i=(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/googlebot/i],describe:function(t){var n={name:"Googlebot"},i=(0,r.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i,t)||(0,r.getFirstMatch)(e,t);return i&&(n.version=i),n}},{test:[/.*/i],describe:function(t){return{name:(0,r.getFirstMatch)(/^(.*)\/(.*) /,t),version:(0,r.getSecondMatch)(/^(.*)\/(.*) /,t)}}}];n.default=i,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(68),r(67),r(66),r(65),r(18)],void 0===(o="function"==typeof(e=function(n,r,e,i,o,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=l(r),a=l(e),s=l(i),f=l(o);function l(t){return t&&t.__esModule?t:{default:t}}var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),p=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),void 0===n||null===n||""===n)throw new Error("UserAgent parameter can't be empty");this._ua=n,this.parsedResult={},!0!==r&&this.parse()}return v(t,[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(t){return t.test(this._ua)}},{key:"parseBrowser",value:function(){var t=this;this.parsedResult.browser={};var n=c.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.browser=n.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var t=this;this.parsedResult.os={};var n=a.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.os=n.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(t){var n=this.getOS(),r=n.name;return t?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.getPlatform(),r=n.type;return t?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var t=this;this.parsedResult.platform={};var n=s.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.platform=n.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"parseEngine",value:function(){var t=this;this.parsedResult.engine={};var n=f.default.find(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some(function(n){return t.test(n)});throw new Error("Browser's test function is not valid")});return n&&(this.parsedResult.engine=n.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return this.parsedResult}},{key:"satisfies",value:function(t){var n=this,r={},e=0,i={},o=0,u=Object.keys(t);if(u.forEach(function(n){var u=t[n];"string"==typeof u?(i[n]=u,o+=1):"object"===(void 0===u?"undefined":h(u))&&(r[n]=u,e+=1)}),e>0){var c=Object.keys(r),a=c.find(function(t){return n.isOS(t)});if(a){var s=this.satisfies(r[a]);if(void 0!==s)return s}var f=c.find(function(t){return n.isPlatform(t)});if(f){var l=this.satisfies(r[f]);if(void 0!==l)return l}}if(o>0){var v=Object.keys(i),p=v.find(function(t){return n.isBrowser(t)});if(void 0!==p)return this.compareVersion(i[p])}}},{key:"isBrowser",value:function(t){return this.getBrowserName(!0)===String(t).toLowerCase()}},{key:"compareVersion",value:function(t){var n=0,r=t,e=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===t[0]?(n=1,r=t.substr(1)):"<"===t[0]?(n=-1,r=t.substr(1)):"="===t[0]?r=t.substr(1):"~"===t[0]&&(e=!0,r=t.substr(1)),(0,u.compareVersions)(i,r,e)===n}},{key:"isOS",value:function(t){return this.getOSName(!0)===String(t).toLowerCase()}},{key:"isPlatform",value:function(t){return this.getPlatformType(!0)===String(t).toLowerCase()}},{key:"is",value:function(t){return this.isBrowser(t)||this.isOS(t)||this.isPlatform(t)}},{key:"some",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.some(function(n){return t.is(n)})}}]),t}();n.default=p,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){var e,i,o;i=[n,r(69)],void 0===(o="function"==typeof(e=function(n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,null,[{key:"getParser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof t)throw new Error("UserAgent should be a string");return new e.default(t,n)}},{key:"parse",value:function(t){return new e.default(t).getResult()}}]),t}();n.default=o,t.exports=n.default})?e.apply(n,i):e)||(t.exports=o)},function(t,n,r){"use strict";var e=r(2),i=r(8),o=r(31),u=r(53),c=r(13),a=r(33),s=r(3),f=r(35),l=r(25),h=r(6),v=r(104),p=r(37).f,d=r(7).f,g=r(76),y=r(46),b="prototype",m="Wrong index!",w=e.ArrayBuffer,S=e.DataView,x=e.Math,_=e.RangeError,M=e.Infinity,F=w,O=x.abs,E=x.pow,P=x.floor,k=x.log,A=x.LN2,j=i?"_b":"buffer",N=i?"_l":"byteLength",R=i?"_o":"byteOffset";function T(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,s=a>>1,f=23===n?E(2,-24)-E(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=O(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=P(k(t)/A),t*(o=E(2,-e))<1&&(e--,o*=2),(t+=e+s>=1?f/o:f*E(2,1-s))*o>=2&&(e++,o/=2),e+s>=a?(i=0,e=a):e+s>=1?(i=(t*o-1)*E(2,n),e+=s):(i=t*E(2,s-1)*E(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function I(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,s=t[a--],f=127&s;for(s>>=7;c>0;f=256*f+t[a],a--,c-=8);for(e=f&(1<<-c)-1,f>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===f)f=1-u;else{if(f===o)return e?NaN:s?-M:M;e+=E(2,n),f-=u}return(s?-1:1)*e*E(2,f-n)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function B(t){return[255&t]}function C(t){return[255&t,t>>8&255]}function W(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function D(t){return T(t,52,8)}function V(t){return T(t,23,4)}function U(t,n,r){d(t[b],n,{get:function(){return this[r]}})}function G(t,n,r,e){var i=v(+r);if(i+n>t[N])throw _(m);var o=t[j]._b,u=i+t[R],c=o.slice(u,u+n);return e?c:c.reverse()}function z(t,n,r,e,i,o){var u=v(+r);if(u+n>t[N])throw _(m);for(var c=t[j]._b,a=u+t[R],s=e(+i),f=0;f<n;f++)c[a+f]=s[o?f:n-f-1]}if(u.ABV){if(!s(function(){w(1)})||!s(function(){new w(-1)})||s(function(){return new w,new w(1.5),new w(NaN),"ArrayBuffer"!=w.name})){for(var Y,K=(w=function(t){return f(this,w),new F(v(t))})[b]=F[b],J=p(F),q=0;J.length>q;)(Y=J[q++])in w||c(w,Y,F[Y]);o||(K.constructor=w)}var X=new S(new w(2)),H=S[b].setInt8;X.setInt8(0,2147483648),X.setInt8(1,2147483649),!X.getInt8(0)&&X.getInt8(1)||a(S[b],{setInt8:function(t,n){H.call(this,t,n<<24>>24)},setUint8:function(t,n){H.call(this,t,n<<24>>24)}},!0)}else w=function(t){f(this,w,"ArrayBuffer");var n=v(t);this._b=g.call(new Array(n),0),this[N]=n},S=function(t,n,r){f(this,S,"DataView"),f(t,w,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(i+(r=void 0===r?e-i:h(r))>e)throw _("Wrong length!");this[j]=t,this[R]=i,this[N]=r},i&&(U(w,"byteLength","_l"),U(S,"buffer","_b"),U(S,"byteLength","_l"),U(S,"byteOffset","_o")),a(S[b],{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var n=G(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=G(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return L(G(this,4,t,arguments[1]))},getUint32:function(t){return L(G(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return I(G(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return I(G(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){z(this,1,t,B,n)},setUint8:function(t,n){z(this,1,t,B,n)},setInt16:function(t,n){z(this,2,t,C,n,arguments[2])},setUint16:function(t,n){z(this,2,t,C,n,arguments[2])},setInt32:function(t,n){z(this,4,t,W,n,arguments[2])},setUint32:function(t,n){z(this,4,t,W,n,arguments[2])},setFloat32:function(t,n){z(this,4,t,V,n,arguments[2])},setFloat64:function(t,n){z(this,8,t,D,n,arguments[2])}});y(w,"ArrayBuffer"),y(S,"DataView"),c(S[b],u.VIEW,!0),n.ArrayBuffer=w,n.DataView=S},function(t,n,r){"use strict";var e=r(10);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}(t)}},function(t,n,r){var e=r(2),i=r(74).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==r(20)(u);t.exports=function(){var t,n,r,s=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(s)};else if(!o||e.navigator&&e.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);r=function(){f.then(s)}}else r=function(){i.call(e,s)};else{var l=!0,h=document.createTextNode("");new o(s).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},function(t,n,r){var e,i,o,u=r(21),c=r(123),a=r(92),s=r(96),f=r(2),l=f.process,h=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,g=0,y={},b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},m=function(t){b.call(t.data)};h&&v||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++g]=function(){c("function"==typeof t?t:Function(t),n)},e(g),g},v=function(t){delete y[t]},"process"==r(20)(l)?e=function(t){l.nextTick(u(b,t,1))}:d&&d.now?e=function(t){d.now(u(b,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=m,e=u(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(e=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):e="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:h,clear:v}},function(t,n,r){"use strict";var e=r(30),i=r(113),o=r(44),u=r(16);t.exports=r(84)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){"use strict";var e=r(9),i=r(39),o=r(6);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,s=void 0===a?r:i(a,r);s>c;)n[c++]=t;return n}},function(t,n,r){var e=r(241);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(47),i=r(5)("iterator"),o=r(44);t.exports=r(22).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){"use strict";var e=r(7),i=r(42);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){var e=r(60),i=r(26);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){"use strict";var e=r(38),i=r(42),o=r(46),u={};r(13)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){"use strict";var e=r(31),i=r(0),o=r(12),u=r(13),c=r(44),a=r(83),s=r(46),f=r(14),l=r(5)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,p,d,g,y){a(r,n,p);var b,m,w,S=function(t){if(!h&&t in F)return F[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},x=n+" Iterator",_="values"==d,M=!1,F=t.prototype,O=F[l]||F["@@iterator"]||d&&F[d],E=O||S(d),P=d?_?S("entries"):E:void 0,k="Array"==n&&F.entries||O;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(s(w,x,!0),e||"function"==typeof w[l]||u(w,l,v)),_&&O&&"values"!==O.name&&(M=!0,E=function(){return O.call(this)}),e&&!y||!h&&!M&&F[l]||u(F,l,E),c[n]=E,c[x]=v,d)if(b={values:_?E:S("values"),keys:g?E:S("keys"),entries:P},y)for(m in b)m in F||o(F,m,b[m]);else i(i.P+i.F*(h||M),n,b);return b}},function(t,n,r){var e=r(25),i=r(26);t.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),s=c.length;return a<0||a>=s?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n,r){"use strict";var e=r(25),i=r(26);t.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n,r){var e=r(4),i=r(91).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(4),i=r(1),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(21)(Function.call,r(15).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(64)("keys"),i=r(41);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n,r){var e=r(2),i=r(22),o=r(31),u=r(129),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n){t.exports=Math.scale||function(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){var e=r(34);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n,r){var e=r(47),i=r(98);t.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40),i=r(16),o=r(48).f;t.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,s=0,f=[];a>s;)o.call(u,r=c[s++])&&f.push(t?[r,u[r]]:u[r]);return f}}},function(t,n,r){var e=r(6),i=r(88),o=r(26);t.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,s=void 0===r?" ":String(r),f=e(n);if(f<=a||""==s)return c;var l=f-a,h=i.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},function(t,n,r){"use strict";var e=r(61),i=r(4),o=r(6),u=r(21),c=r(5)("isConcatSpreadable");t.exports=function t(n,r,a,s,f,l,h,v){for(var p,d,g=f,y=0,b=!!h&&u(h,v,3);y<s;){if(y in a){if(p=b?b(a[y],y,r):a[y],d=!1,i(p)&&(d=void 0!==(d=p[c])?!!d:e(p)),d&&l>0)g=t(n,r,p,o(p.length),g,l-1)-1;else{if(g>=9007199254740991)throw TypeError();n[g]=p}g++}y++}return g}},function(t,n,r){var e=r(37),i=r(62),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(25),i=r(6);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){"use strict";var e=r(33),i=r(32).getWeak,o=r(1),u=r(4),c=r(35),a=r(34),s=r(23),f=r(17),l=r(43),h=s(5),v=s(6),p=0,d=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,n){return h(t.a,function(t){return t[0]===n})};g.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,r,o){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(s.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&f(r,this._i)&&delete r[this._i]},has:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&f(r,this._i)}}),s},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},function(t,n,r){"use strict";var e,i=r(23)(0),o=r(12),u=r(32),c=r(125),a=r(105),s=r(4),f=r(3),l=r(43),h=u.getWeak,v=Object.isExtensible,p=a.ufstore,d={},g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(s(t)){var n=h(t);return!0===n?p(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},b=t.exports=r(54)("WeakMap",g,y,a,!0,!0);f(function(){return 7!=(new b).set((Object.freeze||Object)(d),7).get(d)})&&(c((e=a.getConstructor(g,"WeakMap")).prototype,y),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=b.prototype,r=n[t];o(n,t,function(n,i){if(s(n)&&!v(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},function(t,n,r){"use strict";var e=r(108),i=r(43);t.exports=r(54)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e=r(7).f,i=r(38),o=r(33),u=r(21),c=r(35),a=r(34),s=r(84),f=r(113),l=r(36),h=r(8),v=r(32).fastKey,p=r(43),d=h?"_s":"size",g=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,s){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[s],t)});return o(f.prototype,{clear:function(){for(var t=p(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=p(this,n),e=g(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function(t){p(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(p(this,n),t)}}),h&&e(f.prototype,"size",{get:function(){return p(this,n)[d]}}),f},def:function(t,n,r){var e,i,o=g(t,n);return o?o.v=r:(t._l=o={i:i=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,r){s(t,n,function(t,r){this._t=p(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){"use strict";var e=r(108),i=r(43);t.exports=r(54)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var e=r(1),i=r(4),o=r(72);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){r(8)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(58)})},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(9),i=r(39),o=r(6);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:i(s,u))-a,u-c),l=1;for(a<c&&c<a+f&&(l=-1,a+=f-1,c+=f-1);f-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},function(t,n,r){var e=r(10),i=r(9),o=r(49),u=r(6);t.exports=function(t,n,r,c,a){e(n);var s=i(t),f=o(s),l=u(s.length),h=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(h in f){c=f[h],h+=v;break}if(h+=v,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=v)h in f&&(c=n(c,f[h],h,s));return c}},function(t,n,r){var e=r(1);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},function(t,n,r){var e=r(87),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126);t.exports=Math.fround||function(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*function(t){return t+1/o-1/o}(i/a/u)*a*u:(r=(n=(1+u/o)*i)-(n-i))>c||r!=r?s*(1/0):s*r}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(20);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(2).parseFloat,i=r(45).trim;t.exports=1/e(r(90)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(45).trim,o=r(90),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){"use strict";var e=r(10),i=r(4),o=r(123),u=[].slice,c={};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),a=function(){var e=r.concat(u.call(arguments));return this instanceof a?function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)}(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n,r){"use strict";var e=r(40),i=r(62),o=r(48),u=r(9),c=r(49),a=Object.assign;t.exports=!a||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function(t,n){for(var r=u(t),a=arguments.length,s=1,f=i.f,l=o.f;a>s;)for(var h,v=c(arguments[s++]),p=f?e(v).concat(f(v)):e(v),d=p.length,g=0;d>g;)l.call(v,h=p[g++])&&(r[h]=v[h]);return r}:a},function(t,n,r){var e=r(16),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(e(t))}},function(t,n,r){var e=r(7),i=r(1),o=r(40);t.exports=r(8)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(17),i=r(16),o=r(63)(!1),u=r(94)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),a=0,s=[];for(r in c)r!=u&&e(c,r)&&s.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(s,r)||s.push(r));return s}},function(t,n,r){n.f=r(5)},function(t,n,r){t.exports=!r(8)&&!r(3)(function(){return 7!=Object.defineProperty(r(96)("div"),"a",{get:function(){return 7}}).a})},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n){t.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},function(t,n,r){var e=r(0),i=r(132)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function(t){return i(t)}})},function(t,n,r){r(133),t.exports=r(22).RegExp.escape},function(t,n,r){(function(n){!function(n){"use strict";var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",s="object"==typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=n.regeneratorRuntime=s?t.exports:{}).wrap=w;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},g={};g[u]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&i.call(b,u)&&(g=b);var m=M.prototype=x.prototype=Object.create(g);_.prototype=m.constructor=M,M.constructor=_,M[a]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},F(O.prototype),O.prototype[c]=function(){return this},f.AsyncIterator=O,f.async=function(t,n,r,e){var i=new O(w(t,n,r,e));return f.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},F(m),m[a]="Generator",m[u]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},f.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,i){return c.type="throw",c.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],c=u.completion;if("root"===u.tryLoc)return e("end");if(u.tryLoc<=this.prev){var a=i.call(u,"catchLoc"),s=i.call(u,"finallyLoc");if(a&&s){if(this.prev<u.catchLoc)return e(u.catchLoc,!0);if(this.prev<u.finallyLoc)return e(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return e(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return e(u.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}}}function w(t,n,r,e){var i=n&&n.prototype instanceof x?n:x,o=Object.create(i.prototype),u=new A(e||[]);return o._invoke=function(t,n,r){var e=l;return function(i,o){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=E(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=v;var a=S(t,n,r);if("normal"===a.type){if(e=r.done?p:h,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=p,r.method="throw",r.arg=a.arg)}}}(t,r,u),o}function S(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function M(){}function F(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(t){function r(n,e,o,u){var c=S(t[n],t,e);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(s).then(function(t){a.value=t,o(a)},u)}u(c.arg)}var e;"object"==typeof n.process&&n.process.domain&&(r=n.process.domain.bind(r)),this._invoke=function(t,n){function i(){return new Promise(function(e,i){r(t,n,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=S(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}("object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,r(131))},function(t,n,r){for(var e=r(75),i=r(40),o=r(12),u=r(2),c=r(13),a=r(44),s=r(5),f=s("iterator"),l=s("toStringTag"),h=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),d=0;d<p.length;d++){var g,y=p[d],b=v[y],m=u[y],w=m&&m.prototype;if(w&&(w[f]||c(w,f,h),w[l]||c(w,l,y),a[y]=h,b))for(g in e)w[g]||o(w,g,e[g],!0)}},function(t,n,r){var e=r(0),i=r(74);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){var e=r(2),i=r(0),o=r(55),u=[].slice,c=/MSIE .\./.test(o),a=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},function(t,n,r){"use strict";var e=r(0),i=r(2),o=r(22),u=r(73)(),c=r(5)("observable"),a=r(10),s=r(1),f=r(35),l=r(33),h=r(13),v=r(34),p=v.RETURN,d=function(t){return null==t?void 0:a(t)},g=function(t){var n=t._c;n&&(t._c=void 0,n())},y=function(t){return void 0===t._o},b=function(t){y(t)||(t._o=void 0,g(t))},m=function(t,n){s(t),this._c=void 0,this._o=t,t=new w(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}y(this)&&g(this)};m.prototype=l({},{unsubscribe:function(){b(this)}});var w=function(t){this._s=t};w.prototype=l({},{next:function(t){var n=this._s;if(!y(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{b(n)}finally{throw t}}}},error:function(t){var n=this._s;if(y(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{g(n)}finally{throw t}}return g(n),t},complete:function(t){var n=this._s;if(!y(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{g(n)}finally{throw t}}return g(n),t}}});var S=function(t){f(this,S,"Observable","_f")._f=a(t)};l(S.prototype,{subscribe:function(t){return new m(t,this._f)},forEach:function(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(S,{from:function(t){var n="function"==typeof this?this:S,r=d(s(t)[c]);if(r){var e=s(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function(){for(var t=0,n=arguments.length,r=new Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(S.prototype,c,function(){return this}),e(e.G,{Observable:S}),r(36)("Observable")},function(t,n,r){var e=r(0),i=r(73)(),o=r(2).process,u="process"==r(20)(o);e(e.G,{asap:function(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function(t,n){return function(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(14),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(107),i=r(98),o=r(28),u=r(1),c=r(14),a=o.keys,s=o.key,f=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=f(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function(t){return f(u(t),arguments.length<2?void 0:s(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(14),u=e.has,c=e.get,a=e.key,s=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?s(t,e,r):void 0};e.exp({getMetadata:function(t,n){return s(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){"use strict";var e=r(0),i=r(72),o=r(111);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){"use strict";var e=r(0),i=r(22),o=r(2),u=r(56),c=r(110);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(97)})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0),i=r(97),o=r(117);e(e.S,"Math",{fscale:function(t,n,r,e,u){return o(i(t,n,r,e,u))}})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0),i=r(20);e(e.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){r(50)("WeakSet")},function(t,n,r){r(50)("WeakMap")},function(t,n,r){r(50)("Set")},function(t,n,r){r(50)("Map")},function(t,n,r){r(51)("WeakSet")},function(t,n,r){r(51)("WeakMap")},function(t,n,r){r(51)("Set")},function(t,n,r){r(51)("Map")},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(99)("Set")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(99)("Map")})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27),u=r(14),c=r(15).f;r(8)&&e(e.P+r(52),"Object",{__lookupSetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27),u=r(14),c=r(15).f;r(8)&&e(e.P+r(52),"Object",{__lookupGetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(52),"Object",{__defineSetter__:function(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(52),"Object",{__defineGetter__:function(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(100)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(100)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(103),o=r(16),u=r(15),c=r(79);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=o(t),a=u.f,s=i(e),f={},l=0;s.length>l;)void 0!==(r=a(e,n=s[l++]))&&c(f,n,r);return f}})},function(t,n,r){r(95)("observable")},function(t,n,r){r(95)("asyncIterator")},function(t,n,r){"use strict";var e=r(0),i=r(26),o=r(6),u=r(60),c=r(58),a=RegExp.prototype,s=function(t,n){this._r=t,this._s=n};r(83)(s,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new s(e,n)}})},function(t,n,r){"use strict";r(45)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,n,r){"use strict";r(45)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,n,r){"use strict";var e=r(0),i=r(101),o=r(55);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(101),o=r(55);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(85)(!0);e(e.P,"String",{at:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(102),o=r(9),u=r(6),c=r(25),a=r(77);e(e.P,"Array",{flatten:function(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),r(30)("flatten")},function(t,n,r){"use strict";var e=r(0),i=r(102),o=r(9),u=r(6),c=r(10),a=r(77);e(e.P,"Array",{flatMap:function(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(30)("flatMap")},function(t,n,r){"use strict";var e=r(0),i=r(63)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("includes")},function(t,n,r){var e=r(0),i=r(91);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,r){var e=r(7),i=r(15),o=r(14),u=r(17),c=r(0),a=r(42),s=r(1),f=r(4);c(c.S,"Reflect",{set:function t(n,r,c){var l,h,v=arguments.length<4?n:arguments[3],p=i.f(s(n),r);if(!p){if(f(h=o(n)))return t(h,r,c,v);p=a(0)}if(u(p,"value")){if(!1===p.writable||!f(v))return!1;if(l=i.f(v,r)){if(l.get||l.set||!1===l.writable)return!1;l.value=c,e.f(v,r,l)}else e.f(v,r,a(0,c));return!0}return void 0!==p.set&&(p.set.call(v,c),!0)}})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(103)})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(14),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,r){var e=r(15),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(15),i=r(14),o=r(17),u=r(0),c=r(4),a=r(1);u(u.S,"Reflect",{get:function t(n,r){var u,s,f=arguments.length<3?n:arguments[2];return a(n)===f?n[r]:(u=e.f(n,r))?o(u,"value")?u.value:void 0!==u.get?u.get.call(f):void 0:c(s=i(n))?t(s,r,f):void 0}})},function(t,n,r){"use strict";var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(83)(o,"Object",function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,r){var e=r(0),i=r(15).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(7),i=r(0),o=r(1),u=r(27);i(i.S+i.F*r(3)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0),i=r(38),o=r(10),u=r(1),c=r(4),a=r(3),s=r(124),f=(r(2).Reflect||{}).construct,l=a(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),h=!a(function(){f(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(s.apply(t,e))}var a=r.prototype,v=i(c(a)?a:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},function(t,n,r){var e=r(0),i=r(10),o=r(1),u=(r(2).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!r(3)(function(){u(function(){})}),"Reflect",{apply:function(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},function(t,n,r){r(29)("Float64",8,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}},!0)},function(t,n,r){r(29)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(29)("Int8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(53).ABV,{DataView:r(71).DataView})},function(t,n,r){"use strict";var e=r(0),i=r(53),o=r(71),u=r(1),c=r(39),a=r(6),s=r(4),f=r(2).ArrayBuffer,l=r(56),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&f.isView,d=h.prototype.slice,g=i.VIEW;e(e.G+e.W+e.F*(f!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||s(t)&&g in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),s=new v(this),f=new v(o),p=0;e<i;)f.setUint8(p++,s.getUint8(e++));return o}}),r(36)("ArrayBuffer")},function(t,n,r){"use strict";var e=r(105),i=r(43);r(54)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},function(t,n,r){"use strict";var e,i,o,u,c=r(31),a=r(2),s=r(21),f=r(47),l=r(0),h=r(4),v=r(10),p=r(35),d=r(34),g=r(56),y=r(74).set,b=r(73)(),m=r(72),w=r(111),S=r(55),x=r(110),_=a.TypeError,M=a.process,F=M&&M.versions,O=F&&F.v8||"",E=a.Promise,P="process"==f(M),k=function(){},A=i=m.f,j=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[r(5)("species")]=function(t){t(k,k)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==O.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u,c=i?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{c?(i||(2==t._h&&L(t),t._h=1),!0===c?r=e:(f&&f.enter(),r=c(e),f&&(f.exit(),u=!0)),r===n.promise?s(_("Promise-chain cycle")):(o=N(r))?o.call(r,a,s):a(r)):s(e)}catch(t){f&&!u&&f.exit(),s(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&T(t)})}},T=function(t){y.call(a,function(){var n,r,e,i=t._v,o=I(t);if(o&&(n=w(function(){P?M.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=P||I(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){y.call(a,function(){var n;P?M.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},C=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw _("Promise can't be resolved itself");(n=N(t))?b(function(){var e={_w:r,_d:!1};try{n.call(t,s(C,e,1),s(B,e,1))}catch(t){B.call(e,t)}}):(r._v=t,r._s=1,R(r,!1))}catch(t){B.call({_w:r,_d:!1},t)}}};j||(E=function(t){p(this,E,"Promise","_h"),v(t),e.call(this);try{t(s(C,this,1),s(B,this,1))}catch(t){B.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(33)(E.prototype,{then:function(t,n){var r=A(g(this,E));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=P?M.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=s(C,t,1),this.reject=s(B,t,1)},m.f=A=function(t){return t===E||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:E}),r(46)(E,"Promise"),r(36)("Promise"),u=r(22).Promise,l(l.S+l.F*!j,"Promise",{reject:function(t){var n=A(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!j),"Promise",{resolve:function(t){return x(c&&this===u?E:this,t)}}),l(l.S+l.F*!(j&&r(59)(function(t){E.all(t).catch(k)})),"Promise",{all:function(t){var n=this,r=A(n),e=r.resolve,i=r.reject,o=w(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function(t){var n=this,r=A(n),e=r.reject,i=w(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){r(57)("split",2,function(t,n,e){"use strict";var i=r(60),o=e,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,a,s,f,l,h=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,v+"g");for(c||(e=new RegExp("^"+g.source+"$(?!\\s)",v));(a=g.exec(r))&&!((s=a.index+a[0].length)>p&&(h.push(r.slice(p,a.index)),!c&&a.length>1&&a[0].replace(e,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a.length>1&&a.index<r.length&&u.apply(h,a.slice(1)),f=a[0].length,p=s,h.length>=d));)g.lastIndex===a.index&&g.lastIndex++;return p===r.length?!f&&g.test("")||h.push(""):h.push(r.slice(p)),h.length>d?h.slice(0,d):h}}else"0".split(void 0,0).length&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(r,i){var o=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},e]})},function(t,n,r){r(57)("search",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){r(57)("replace",2,function(t,n,r){return[function(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},function(t,n,r){r(57)("match",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){"use strict";r(112);var e=r(1),i=r(58),o=r(8),u=/./.toString,c=function(t){r(12)(RegExp.prototype,"toString",t,!0)};r(3)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){var e=r(2),i=r(89),o=r(7).f,u=r(37).f,c=r(60),a=r(58),s=e.RegExp,f=s,l=s.prototype,h=/a/g,v=/a/g,p=new s(h)!==h;if(r(8)&&(!p||r(3)(function(){return v[r(5)("match")]=!1,s(h)!=h||s(v)==v||"/a/i"!=s(h,"i")}))){s=function(t,n){var r=this instanceof s,e=c(t),o=void 0===n;return!r&&e&&t.constructor===s&&o?t:i(p?new f(e&&!o?t.source:t,n):f((e=t instanceof s)?t.source:t,e&&o?a.call(t):n),r?this:l,s)};for(var d=function(t){t in s||o(s,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},g=u(f),y=0;g.length>y;)d(g[y++]);l.constructor=s,s.prototype=l,r(12)(e,"RegExp",s)}r(36)("RegExp")},function(t,n,r){r(36)("Array")},function(t,n,r){"use strict";var e=r(0),i=r(23)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)(o)},function(t,n,r){"use strict";var e=r(0),i=r(23)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("find")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(76)}),r(30)("fill")},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(114)}),r(30)("copyWithin")},function(t,n,r){"use strict";var e=r(0),i=r(16),o=r(25),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(19)(c)),"Array",{lastIndexOf:function(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){"use strict";var e=r(0),i=r(63)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(19)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(115);e(e.P+e.F*!r(19)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(115);e(e.P+e.F*!r(19)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(4);e(e.P+e.F*!r(19)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(3);e(e.P+e.F*!r(19)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(2);e(e.P+e.F*!r(19)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(23)(1);e(e.P+e.F*!r(19)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(61),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(0),i=r(23)(0),o=r(19)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!r(19)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){"use strict";var e=r(0),i=r(92),o=r(20),u=r(39),c=r(6),a=[].slice;e(e.P+e.F*r(3)(function(){i&&a.call(i)}),"Array",{slice:function(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),s=u(n,r),f=c(s-i),l=new Array(f),h=0;h<f;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},function(t,n,r){"use strict";var e=r(0),i=r(16),o=[].join;e(e.P+e.F*(r(49)!=Object||!r(19)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),i=r(79);e(e.S+e.F*r(3)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){"use strict";var e=r(21),i=r(0),o=r(9),u=r(116),c=r(80),a=r(6),s=r(79),f=r(78);i(i.S+i.F*!r(59)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,g=void 0!==d,y=0,b=f(h);if(g&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&c(b))for(r=new v(n=a(h.length));n>y;y++)s(r,y,g?d(h[y],y):h[y]);else for(l=b.call(h),r=new v;!(i=l.next()).done;y++)s(r,y,g?u(l,d,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(61)})},function(t,n,r){"use strict";var e=r(1),i=r(27);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(13)(i,e,r(249))},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(12)(e,"toString",function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"})},function(t,n,r){"use strict";var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=r(0),i=r(252);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(27);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";r(11)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,n,r){"use strict";r(11)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,n,r){"use strict";r(11)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,n,r){"use strict";r(11)("small",function(t){return function(){return t(this,"small","","")}})},function(t,n,r){"use strict";r(11)("link",function(t){return function(n){return t(this,"a","href",n)}})},function(t,n,r){"use strict";r(11)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,n,r){"use strict";r(11)("fontsize",function(t){return function(n){return t(this,"font","size",n)}})},function(t,n,r){"use strict";r(11)("fontcolor",function(t){return function(n){return t(this,"font","color",n)}})},function(t,n,r){"use strict";r(11)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,n,r){"use strict";r(11)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,n,r){"use strict";r(11)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,n,r){"use strict";r(11)("big",function(t){return function(){return t(this,"big","","")}})},function(t,n,r){"use strict";r(11)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(82),u="".startsWith;e(e.P+e.F*r(81)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(88)})},function(t,n,r){"use strict";var e=r(0),i=r(82);e(e.P+e.F*r(81)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(82),u="".endsWith;e(e.P+e.F*r(81)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},function(t,n,r){"use strict";var e=r(0),i=r(85)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(85)(!0);r(84)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";r(45)("trim",function(t){return function(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(16),o=r(6);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},function(t,n,r){var e=r(0),i=r(39),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(86),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0),i=r(86),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(87)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(118)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)a<(r=i(arguments[u++]))?(o=o*(e=a/r)*e+1,a=r):o+=r>0?(e=r/a)*e:r;return a===1/0?1/0:a*Math.sqrt(o)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(117)})},function(t,n,r){var e=r(0),i=r(86);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=r(87);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,r){var e=r(0),i=r(118),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=r(122);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(121);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0),i=r(119),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(119)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){"use strict";var e=r(0),i=r(3),o=r(120),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(25),o=r(120),u=r(88),c=1..toFixed,a=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*s[r],s[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=s[n],s[n]=a(r/t),r=r%t*1e7},v=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==s[t]){var r=String(s[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},p=function(t,n,r){return 0===n?r:n%2==1?p(t,n-1,r*t):p(t*t,n/2,r)};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){c.call({})})),"Number",{toFixed:function(t){var n,r,e,c,a=o(this,f),s=i(t),d="",g="0";if(s<0||s>20)throw RangeError(f);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(d="-",a=-a),a>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(a*p(2,69,1))-69)<0?a*p(2,-n,1):a/p(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=s;e>=7;)l(1e7,0),e-=7;for(l(p(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=v()}else l(0,r),l(1<<-n,0),g=v()+u.call("0",s);return g=s>0?d+((c=g.length)<=s?"0."+u.call("0",s-c)+g:g.slice(0,c-s)+"."+g.slice(c-s)):d+g}})},function(t,n,r){"use strict";var e=r(2),i=r(17),o=r(20),u=r(89),c=r(27),a=r(3),s=r(37).f,f=r(15).f,l=r(7).f,h=r(45).trim,v=e.Number,p=v,d=v.prototype,g="Number"==o(r(38)(d)),y="trim"in String.prototype,b=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=y?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),s=0,f=a.length;s<f;s++)if((u=a.charCodeAt(s))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(g?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new p(b(n)),r,v):b(n)};for(var m,w=r(8)?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(p,m=w[S])&&!i(v,m)&&l(v,m,f(p,m));v.prototype=d,d.constructor=v,r(12)(e,"Number",v)}},function(t,n,r){var e=r(0),i=r(121);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(122);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){"use strict";var e=r(4),i=r(14),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(8)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(124)})},function(t,n,r){"use strict";var e=r(47),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(91).set})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(314)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(125)})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(t){return function(n){return!!e(n)&&(!t||t(n))}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("preventExtensions",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("seal",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(24)("freeze",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(126).f})},function(t,n,r){var e=r(9),i=r(40);r(24)("keys",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(14);r(24)("getPrototypeOf",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(16),i=r(15).f;r(24)("getOwnPropertyDescriptor",function(){return function(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperties:r(127)})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(38)})},function(t,n,r){var e=r(40),i=r(62),o=r(48);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,s=0;c.length>s;)a.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,r){"use strict";var e=r(2),i=r(17),o=r(8),u=r(0),c=r(12),a=r(32).KEY,s=r(3),f=r(64),l=r(46),h=r(41),v=r(5),p=r(129),d=r(95),g=r(330),y=r(61),b=r(1),m=r(4),w=r(16),S=r(27),x=r(42),_=r(38),M=r(126),F=r(15),O=r(7),E=r(40),P=F.f,k=O.f,A=M.f,j=e.Symbol,N=e.JSON,R=N&&N.stringify,T=v("_hidden"),I=v("toPrimitive"),L={}.propertyIsEnumerable,B=f("symbol-registry"),C=f("symbols"),W=f("op-symbols"),D=Object.prototype,V="function"==typeof j,U=e.QObject,G=!U||!U.prototype||!U.prototype.findChild,z=o&&s(function(){return 7!=_(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=P(D,n);e&&delete D[n],k(t,n,r),e&&t!==D&&k(D,n,e)}:k,Y=function(t){var n=C[t]=_(j.prototype);return n._k=t,n},K=V&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},J=function(t,n,r){return t===D&&J(W,n,r),b(t),n=S(n,!0),b(r),i(C,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:x(0,!1)})):(i(t,T)||k(t,T,x(1,{})),t[T][n]=!0),z(t,n,r)):k(t,n,r)},q=function(t,n){b(t);for(var r,e=g(n=w(n)),i=0,o=e.length;o>i;)J(t,r=e[i++],n[r]);return t},X=function(t){var n=L.call(this,t=S(t,!0));return!(this===D&&i(C,t)&&!i(W,t))&&(!(n||!i(this,t)||!i(C,t)||i(this,T)&&this[T][t])||n)},H=function(t,n){if(t=w(t),n=S(n,!0),t!==D||!i(C,n)||i(W,n)){var r=P(t,n);return!r||!i(C,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function(t){for(var n,r=A(w(t)),e=[],o=0;r.length>o;)i(C,n=r[o++])||n==T||n==a||e.push(n);return e},$=function(t){for(var n,r=t===D,e=A(r?W:w(t)),o=[],u=0;e.length>u;)!i(C,n=e[u++])||r&&!i(D,n)||o.push(C[n]);return o};V||(c((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===D&&n.call(W,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),z(this,t,x(1,r))};return o&&G&&z(D,t,{configurable:!0,set:n}),Y(t)}).prototype,"toString",function(){return this._k}),F.f=H,O.f=J,r(37).f=M.f=Z,r(48).f=X,r(62).f=$,o&&!r(31)&&c(D,"propertyIsEnumerable",X,!0),p.f=function(t){return Y(v(t))}),u(u.G+u.W+u.F*!V,{Symbol:j});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)v(Q[tt++]);for(var nt=E(v.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=j(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in B)if(B[n]===t)return n},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,n){return void 0===n?_(t):q(_(t),n)},defineProperty:J,defineProperties:q,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),N&&u(u.S+u.F*(!V||s(function(){var t=j();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(m(n)||void 0!==t)&&!K(t))return y(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!K(n))return n}),e[1]=n,R.apply(N,e)}}),j.prototype[I]||r(13)(j.prototype,I,j.prototype.valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){r(331),r(329),r(328),r(327),r(326),r(325),r(324),r(323),r(322),r(321),r(320),r(319),r(318),r(317),r(316),r(315),r(313),r(312),r(311),r(310),r(309),r(308),r(307),r(306),r(305),r(304),r(303),r(302),r(301),r(300),r(299),r(298),r(297),r(296),r(295),r(294),r(293),r(292),r(291),r(290),r(289),r(288),r(287),r(286),r(285),r(284),r(283),r(282),r(281),r(280),r(279),r(278),r(277),r(276),r(275),r(274),r(273),r(272),r(271),r(270),r(269),r(268),r(267),r(266),r(265),r(264),r(263),r(262),r(261),r(260),r(259),r(258),r(257),r(256),r(255),r(254),r(253),r(251),r(250),r(248),r(247),r(246),r(245),r(244),r(243),r(242),r(240),r(239),r(238),r(237),r(236),r(235),r(234),r(233),r(232),r(231),r(230),r(229),r(228),r(75),r(227),r(226),r(112),r(225),r(224),r(223),r(222),r(221),r(109),r(107),r(106),r(220),r(219),r(218),r(217),r(216),r(215),r(214),r(213),r(212),r(211),r(210),r(209),r(208),r(207),r(206),r(205),r(204),r(203),r(202),r(201),r(200),r(199),r(198),r(197),r(196),r(195),r(194),r(193),r(192),r(191),r(190),r(189),r(188),r(187),r(186),r(185),r(184),r(183),r(182),r(181),r(180),r(179),r(178),r(177),r(176),r(175),r(174),r(173),r(172),r(171),r(170),r(169),r(168),r(167),r(166),r(165),r(164),r(163),r(162),r(161),r(160),r(159),r(158),r(157),r(156),r(155),r(154),r(153),r(152),r(151),r(150),r(149),r(148),r(147),r(146),r(145),r(144),r(143),r(142),r(141),r(140),r(139),r(138),r(137),r(136),t.exports=r(22)},function(t,n,r){"use strict";(function(t){if(r(332),r(135),r(134),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";function e(t,r,e){t[r]||Object[n](t,r,{writable:!0,configurable:!0,value:e})}e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(this,r(131))},function(t,n,r){r(333),t.exports=r(70)}])});
(function () {
    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;

    /**
     * Javascript empty value checker
     *
     * @param {null|undefined|number|string|object|array} value
     *
     * @version 19.10.2018
     * @author  DimNS <atomcms@ya.ru>
     */
    function isEmpty(value) {
        if (value === null) {
            return true;
        }

        var type = typeof(value);

        switch (type) {
            case 'undefined':
                return true;

            case 'number':
                return isNaN(value);

            case 'string':
                return value.trim() === '';

            case 'object':
                var countKeys = Object.keys(value).length;
                return countKeys < 1;

            case 'function':
                return false;

            default:
                console.log('Unknown value type: "' + type + '"', 'isEmpty.js');
                return false;
        }
    }
})();
(function () {
    if (!window.hasOwnProperty('LightAjax')) window.LightAjax = LightAjax;

    // db      d888888b  d888b  db   db d888888b  .d8b.     d88b  .d8b.  db    db
    // 88        `88'   88' Y8b 88   88 `~~88~~' d8' `8b    `8P' d8' `8b `8b  d8'
    // 88         88    88      88ooo88    88    88ooo88     88  88ooo88  `8bd8'
    // 88         88    88  ooo 88~~~88    88    88~~~88     88  88~~~88  .dPYb.
    // 88booo.   .88.   88. ~8~ 88   88    88    88   88 db. 88  88   88 .8P  Y8.
    // Y88888P Y888888P  Y888P  YP   YP    YP    YP   YP Y8888P  YP   YP YP    YP
    //
    //

    /**
     * Фасад для ajax-методов get и post, со встроенным прелоадером
     *
     * @param {object} options Параметры
     *
     * @version 20.03.2018
     * @author DimNS <atomcms@ya.ru>
     */
    function LightAjax(options) {
        if (typeof(options) === 'undefined') {
            options = {
                ajax    : {},
                settings: {}
            };
        }

        // Настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
        $.ajaxSetup(Object.assign({
            crossDomain: true,
            timeout    : 20000,
            dataType   : 'json',
            cache      : false
        }, options.ajax));

        var settings = Object.assign({
            color: '#fff'
        }, options.settings);

        if (options.hasOwnProperty('callbackAlert')) {
            LightAjax.prototype._callbackAlert = options.callbackAlert;
        }

        // Создаем html-код
        if ($('#js-lightajax-preloader').length === 0) {
            $('body').append(
                '<div id="js-lightajax-overlay" class="lightajax__overlay"></div>' +
                '<div id="js-lightajax-preloader" class="lightajax__preloader">' +
                '<div class="lightajax__loader" style="color: ' + settings.color + ';"></div>' +
                '</div>'
            );
        }
    }

    // d8888b. d8888b. d88888b db       .d88b.   .d8b.  d8888b. d88888b d8888b.
    // 88  `8D 88  `8D 88'     88      .8P  Y8. d8' `8b 88  `8D 88'     88  `8D
    // 88oodD' 88oobY' 88ooooo 88      88    88 88ooo88 88   88 88ooooo 88oobY'
    // 88~~~   88`8b   88~~~~~ 88      88    88 88~~~88 88   88 88~~~~~ 88`8b
    // 88      88 `88. 88.     88booo. `8b  d8' 88   88 88  .8D 88.     88 `88.
    // 88      88   YD Y88888P Y88888P  `Y88P'  YP   YP Y8888D' Y88888P 88   YD
    //
    //

    /**
     * Показать \ Скрыть окно ожидания ответа AJAX
     *
     * @param {string} action Действие (show|hide)
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.preloader = function (action) {
        if (action === 'show') {
            $('#js-lightajax-overlay, #js-lightajax-preloader').show();
        } else if (action === 'hide') {
            $('#js-lightajax-overlay, #js-lightajax-preloader').hide();
        }
    };

    //  d888b  d88888b d888888b
    // 88' Y8b 88'     `~~88~~'
    // 88      88ooooo    88
    // 88  ooo 88~~~~~    88
    // 88. ~8~ 88.        88
    //  Y888P  Y88888P    YP
    //
    //

    /**
     * Выполнить запрос get
     *
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.get = function (preloader, url, data, success) {
        LightAjax.prototype._query('GET', preloader, url, data, success);
    };

    // d8888b.  .d88b.  .d8888. d888888b
    // 88  `8D .8P  Y8. 88'  YP `~~88~~'
    // 88oodD' 88    88 `8bo.      88
    // 88~~~   88    88   `Y8b.    88
    // 88      `8b  d8' db   8D    88
    // 88       `Y88P'  `8888Y'    YP
    //
    //

    /**
     * Выполнить запрос post
     *
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.post = function (preloader, url, data, success) {
        LightAjax.prototype._query('POST', preloader, url, data, success);
    };

    //          .d88b.  db    db d88888b d8888b. db    db
    //         .8P  Y8. 88    88 88'     88  `8D `8b  d8'
    //         88    88 88    88 88ooooo 88oobY'  `8bd8'
    //         88    88 88    88 88~~~~~ 88`8b      88
    //         `8P  d8' 88b  d88 88.     88 `88.    88
    // C88888D  `Y88'Y8 ~Y8888P' Y88888P 88   YD    YP
    //
    //

    /**
     * Выполнить запрос
     *
     * @param {string}   type      Тип запроса (GET|POST)
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype._query = function (type, preloader, url, data, success) {
        if (preloader) {
            LightAjax.prototype.preloader('show');
        }

        $.ajax({
            url    : url,
            method : type,
            data   : data,
            success: success,
            error  : function (xhr, status) {
                if (preloader) {
                    LightAjax.prototype.preloader('hide');
                }

                LightAjax.prototype._error(status);
            }
        });
    };

    //_callbackAlert

    /**
     * Вывести ошибку на экран
     *
     * @param {string} title   Заголовок сообщения
     * @param {string} message Текст сообщения
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype._callbackAlert = function (title, message) {
        alert(message, title);
    };

    //         d88888b d8888b. d8888b.  .d88b.  d8888b.
    //         88'     88  `8D 88  `8D .8P  Y8. 88  `8D
    //         88ooooo 88oobY' 88oobY' 88    88 88oobY'
    //         88~~~~~ 88`8b   88`8b   88    88 88`8b
    //         88.     88 `88. 88 `88. `8b  d8' 88 `88.
    // C88888D Y88888P 88   YD 88   YD  `Y88P'  88   YD
    //
    //

    /**
     * Показать ошибку выполнения AJAX
     *
     * @param {string} status Код ошибки
     *
     * @version 20.03.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype._error = function (status) {
        var message = 'Неизвестная ошибка (' + status + ')';

        switch (status) {
            case 'timeout'    :
                message = 'Время ожидания истекло';
                break;

            case 'parsererror':
                message = 'Ошибка парсера';
                break;

            case 'abort'      :
                message = 'Запрос был отменён';
                break;

            case 'error'      :
                message = 'Произошла ошибка сервера';
                break;
        }

        LightAjax.prototype._callbackAlert('Произошла ошибка', message);
    };
})();
(function ($) {
    /**
     * Плагин для фильтрации строк таблиц путем ввода символов в поле фильтра
     *
     * @param {object} options Параметры
     *
     * @version 26.11.2018
     * @author  DimNS <atomcms@ya.ru>
     */
    $.fn.TableFilter = function (options) {
        if (typeof(options) === 'undefined') {
            options = {};
        }

        /**
         * Настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
         *
         * @type {object}
         */
        var settings = Object.assign({
            afterFilter: null
        }, options);

        // Поддерживаем цепочки вызовов
        return this.each(function () {
            $(this).keyup(function () {
                var value = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

                $($(this).attr('data-tablefilter')).find('tbody tr').show().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    return !~text.indexOf(value);
                }).hide();

                if (typeof(settings.afterFilter) === 'function') {
                    settings.afterFilter();
                }
            });
        });
    };
})(jQuery);
/*!
    localForage -- Offline Storage, Improved
    Version 1.7.3
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navigo = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPushStateAvailable() {
  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
}

function Navigo(r, useHash, hash) {
  this.root = null;
  this._routes = [];
  this._useHash = useHash;
  this._hash = typeof hash === 'undefined' ? '#' : hash;
  this._paused = false;
  this._destroyed = false;
  this._lastRouteResolved = null;
  this._notFoundHandler = null;
  this._defaultHandler = null;
  this._usePushState = !useHash && isPushStateAvailable();
  this._onLocationChange = this._onLocationChange.bind(this);
  this._genericHooks = null;
  this._historyAPIUpdateMethod = 'pushState';

  if (r) {
    this.root = useHash ? r.replace(/\/$/, '/' + this._hash) : r.replace(/\/$/, '');
  } else if (useHash) {
    this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, '/' + this._hash);
  }

  this._listen();
  this.updatePageLinks();
}

function clean(s) {
  if (s instanceof RegExp) return s;
  return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
}

function regExpResultToParams(match, names) {
  if (names.length === 0) return null;
  if (!match) return null;
  return match.slice(1, match.length).reduce(function (params, value, index) {
    if (params === null) params = {};
    params[names[index]] = decodeURIComponent(value);
    return params;
  }, null);
}

function replaceDynamicURLParts(route) {
  var paramNames = [],
      regexp;

  if (route instanceof RegExp) {
    regexp = route;
  } else {
    regexp = new RegExp(route.replace(Navigo.PARAMETER_REGEXP, function (full, dots, name) {
      paramNames.push(name);
      return Navigo.REPLACE_VARIABLE_REGEXP;
    }).replace(Navigo.WILDCARD_REGEXP, Navigo.REPLACE_WILDCARD) + Navigo.FOLLOWED_BY_SLASH_REGEXP, Navigo.MATCH_REGEXP_FLAGS);
  }
  return { regexp: regexp, paramNames: paramNames };
}

function getUrlDepth(url) {
  return url.replace(/\/$/, '').split('/').length;
}

function compareUrlDepth(urlA, urlB) {
  return getUrlDepth(urlB) - getUrlDepth(urlA);
}

function findMatchedRoutes(url) {
  var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return routes.map(function (route) {
    var _replaceDynamicURLPar = replaceDynamicURLParts(clean(route.route)),
        regexp = _replaceDynamicURLPar.regexp,
        paramNames = _replaceDynamicURLPar.paramNames;

    var match = url.replace(/^\/+/, '/').match(regexp);
    var params = regExpResultToParams(match, paramNames);

    return match ? { match: match, route: route, params: params } : false;
  }).filter(function (m) {
    return m;
  });
}

function match(url, routes) {
  return findMatchedRoutes(url, routes)[0] || false;
}

function root(url, routes) {
  var matched = routes.map(function (route) {
    return route.route === '' || route.route === '*' ? url : url.split(new RegExp(route.route + '($|\/)'))[0];
  });
  var fallbackURL = clean(url);

  if (matched.length > 1) {
    return matched.reduce(function (result, url) {
      if (result.length > url.length) result = url;
      return result;
    }, matched[0]);
  } else if (matched.length === 1) {
    return matched[0];
  }
  return fallbackURL;
}

function isHashChangeAPIAvailable() {
  return typeof window !== 'undefined' && 'onhashchange' in window;
}

function extractGETParameters(url) {
  return url.split(/\?(.*)?$/).slice(1).join('');
}

function getOnlyURL(url, useHash, hash) {
  var onlyURL = url,
      split;
  var cleanGETParam = function cleanGETParam(str) {
    return str.split(/\?(.*)?$/)[0];
  };

  if (typeof hash === 'undefined') {
    // To preserve BC
    hash = '#';
  }

  if (isPushStateAvailable() && !useHash) {
    onlyURL = cleanGETParam(url).split(hash)[0];
  } else {
    split = url.split(hash);
    onlyURL = split.length > 1 ? cleanGETParam(split[1]) : cleanGETParam(split[0]);
  }

  return onlyURL;
}

function manageHooks(handler, hooks, params) {
  if (hooks && (typeof hooks === 'undefined' ? 'undefined' : _typeof(hooks)) === 'object') {
    if (hooks.before) {
      hooks.before(function () {
        var shouldRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!shouldRoute) return;
        handler();
        hooks.after && hooks.after(params);
      }, params);
      return;
    } else if (hooks.after) {
      handler();
      hooks.after && hooks.after(params);
      return;
    }
  }
  handler();
}

function isHashedRoot(url, useHash, hash) {
  if (isPushStateAvailable() && !useHash) {
    return false;
  }

  if (!url.match(hash)) {
    return false;
  }

  var split = url.split(hash);

  return split.length < 2 || split[1] === '';
}

Navigo.prototype = {
  helpers: {
    match: match,
    root: root,
    clean: clean,
    getOnlyURL: getOnlyURL
  },
  navigate: function navigate(path, absolute) {
    var to;

    path = path || '';
    if (this._usePushState) {
      to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
      to = to.replace(/([^:])(\/{2,})/g, '$1/');
      history[this._historyAPIUpdateMethod]({}, '', to);
      this.resolve();
    } else if (typeof window !== 'undefined') {
      path = path.replace(new RegExp('^' + this._hash), '');
      window.location.href = window.location.href.replace(/#$/, '').replace(new RegExp(this._hash + '.*$'), '') + this._hash + path;
    }
    return this;
  },
  on: function on() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'function') {
      this._defaultHandler = { handler: args[0], hooks: args[1] };
    } else if (args.length >= 2) {
      if (args[0] === '/') {
        var func = args[1];

        if (_typeof(args[1]) === 'object') {
          func = args[1].uses;
        }

        this._defaultHandler = { handler: func, hooks: args[2] };
      } else {
        this._add(args[0], args[1], args[2]);
      }
    } else if (_typeof(args[0]) === 'object') {
      var orderedRoutes = Object.keys(args[0]).sort(compareUrlDepth);

      orderedRoutes.forEach(function (route) {
        _this.on(route, args[0][route]);
      });
    }
    return this;
  },
  off: function off(handler) {
    if (this._defaultHandler !== null && handler === this._defaultHandler.handler) {
      this._defaultHandler = null;
    } else if (this._notFoundHandler !== null && handler === this._notFoundHandler.handler) {
      this._notFoundHandler = null;
    }
    this._routes = this._routes.reduce(function (result, r) {
      if (r.handler !== handler) result.push(r);
      return result;
    }, []);
    return this;
  },
  notFound: function notFound(handler, hooks) {
    this._notFoundHandler = { handler: handler, hooks: hooks };
    return this;
  },
  resolve: function resolve(current) {
    var _this2 = this;

    var handler, m;
    var url = (current || this._cLoc()).replace(this._getRoot(), '');

    if (this._useHash) {
      url = url.replace(new RegExp('^\/' + this._hash), '/');
    }

    var GETParameters = extractGETParameters(current || this._cLoc());
    var onlyURL = getOnlyURL(url, this._useHash, this._hash);

    if (this._paused) return false;

    if (this._lastRouteResolved && onlyURL === this._lastRouteResolved.url && GETParameters === this._lastRouteResolved.query) {
      if (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already) {
        this._lastRouteResolved.hooks.already(this._lastRouteResolved.params);
      }
      return false;
    }

    m = match(onlyURL, this._routes);

    if (m) {
      this._callLeave();
      this._lastRouteResolved = {
        url: onlyURL,
        query: GETParameters,
        hooks: m.route.hooks,
        params: m.params,
        name: m.route.name
      };
      handler = m.route.handler;
      manageHooks(function () {
        manageHooks(function () {
          m.route.route instanceof RegExp ? handler.apply(undefined, m.match.slice(1, m.match.length)) : handler(m.params, GETParameters);
        }, m.route.hooks, m.params, _this2._genericHooks);
      }, this._genericHooks, m.params);
      return m;
    } else if (this._defaultHandler && (onlyURL === '' || onlyURL === '/' || onlyURL === this._hash || isHashedRoot(onlyURL, this._useHash, this._hash))) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._defaultHandler.hooks };
          _this2._defaultHandler.handler(GETParameters);
        }, _this2._defaultHandler.hooks);
      }, this._genericHooks);
      return true;
    } else if (this._notFoundHandler) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._notFoundHandler.hooks };
          _this2._notFoundHandler.handler(GETParameters);
        }, _this2._notFoundHandler.hooks);
      }, this._genericHooks);
    }
    return false;
  },
  destroy: function destroy() {
    this._routes = [];
    this._destroyed = true;
    this._lastRouteResolved = null;
    this._genericHooks = null;
    clearTimeout(this._listeningInterval);
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this._onLocationChange);
      window.removeEventListener('hashchange', this._onLocationChange);
    }
  },
  updatePageLinks: function updatePageLinks() {
    var self = this;

    if (typeof document === 'undefined') return;

    this._findLinks().forEach(function (link) {
      if (!link.hasListenerAttached) {
        link.addEventListener('click', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.target.tagName.toLowerCase() == 'a') {
            return false;
          }
          var location = self.getLinkPath(link);

          if (!self._destroyed) {
            e.preventDefault();
            self.navigate(location.replace(/\/+$/, '').replace(/^\/+/, '/'));
          }
        });
        link.hasListenerAttached = true;
      }
    });
  },
  generate: function generate(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var result = this._routes.reduce(function (result, route) {
      var key;

      if (route.name === name) {
        result = route.route;
        for (key in data) {
          result = result.toString().replace(':' + key, data[key]);
        }
      }
      return result;
    }, '');

    return this._useHash ? this._hash + result : result;
  },
  link: function link(path) {
    return this._getRoot() + path;
  },
  pause: function pause() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this._paused = status;
    if (status) {
      this._historyAPIUpdateMethod = 'replaceState';
    } else {
      this._historyAPIUpdateMethod = 'pushState';
    }
  },
  resume: function resume() {
    this.pause(false);
  },
  historyAPIUpdateMethod: function historyAPIUpdateMethod(value) {
    if (typeof value === 'undefined') return this._historyAPIUpdateMethod;
    this._historyAPIUpdateMethod = value;
    return value;
  },
  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
    if (!isPushStateAvailable()) {
      this.destroy();
    }
  },
  lastRouteResolved: function lastRouteResolved() {
    return this._lastRouteResolved;
  },
  getLinkPath: function getLinkPath(link) {
    return link.getAttribute('href');
  },
  hooks: function hooks(_hooks) {
    this._genericHooks = _hooks;
  },

  _add: function _add(route) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var hooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (typeof route === 'string') {
      route = encodeURI(route);
    }
    this._routes.push((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object' ? {
      route: route,
      handler: handler.uses,
      name: handler.as,
      hooks: hooks || handler.hooks
    } : { route: route, handler: handler, hooks: hooks });

    return this._add;
  },
  _getRoot: function _getRoot() {
    if (this.root !== null) return this.root;
    this.root = root(this._cLoc().split('?')[0], this._routes);
    return this.root;
  },
  _listen: function _listen() {
    var _this3 = this;

    if (this._usePushState) {
      window.addEventListener('popstate', this._onLocationChange);
    } else if (isHashChangeAPIAvailable()) {
      window.addEventListener('hashchange', this._onLocationChange);
    } else {
      var cached = this._cLoc(),
          current = void 0,
          _check = void 0;

      _check = function check() {
        current = _this3._cLoc();
        if (cached !== current) {
          cached = current;
          _this3.resolve();
        }
        _this3._listeningInterval = setTimeout(_check, 200);
      };
      _check();
    }
  },
  _cLoc: function _cLoc() {
    if (typeof window !== 'undefined') {
      if (typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ !== 'undefined') {
        return window.__NAVIGO_WINDOW_LOCATION_MOCK__;
      }
      return clean(window.location.href);
    }
    return '';
  },
  _findLinks: function _findLinks() {
    return [].slice.call(document.querySelectorAll('[data-navigo]'));
  },
  _onLocationChange: function _onLocationChange() {
    this.resolve();
  },
  _callLeave: function _callLeave() {
    var lastRouteResolved = this._lastRouteResolved;

    if (lastRouteResolved && lastRouteResolved.hooks && lastRouteResolved.hooks.leave) {
      lastRouteResolved.hooks.leave(lastRouteResolved.params);
    }
  }
};

Navigo.PARAMETER_REGEXP = /([:*])(\w+)/g;
Navigo.WILDCARD_REGEXP = /\*/g;
Navigo.REPLACE_VARIABLE_REGEXP = '([^\/]+)';
Navigo.REPLACE_WILDCARD = '(?:.*)';
Navigo.FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
Navigo.MATCH_REGEXP_FLAGS = '';

return Navigo;

})));

/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[],function(){function e(e,t,n,r){return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Пожалуйста, введите на "+n+" символ";return r+=e(n,"","a","ов"),r+=" меньше",r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Пожалуйста, введите еще хотя бы "+n+" символ";return r+=e(n,"","a","ов"),r},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(t){var n="Вы можете выбрать не более "+t.maximum+" элемент";return n+=e(t.maximum,"","a","ов"),n},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"}}}),{define:e.define,require:e.require}})();
/**
 * Simple Ajax Uploader
 * Version 2.5.5
 * https://github.com/LPology/Simple-Ajax-Uploader
 *
 * Copyright 2012-2016 LPology, LLC
 * Released under the MIT license
 */

;(function( global, factory ) {
    /*globals define, module */
    if ( typeof define === 'function' && define.amd ) {
        define( function() {
            return factory( global );
        });

    } else if ( typeof module === 'object' && module.exports ) {
        module.exports = factory( global );

    } else {
        global.ss = factory( global );
    }

}( typeof window !== 'undefined' ? window : this, function( window ) {

var ss = window.ss || {},

    // ss.trim()
    rLWhitespace = /^\s+/,
    rTWhitespace = /\s+$/,

    // ss.getUID
    uidReplace = /[xy]/g,

    // ss.getFilename()
    rPath = /.*(\/|\\)/,

    // ss.getExt()
    rExt = /.*[.]/,

    // ss.hasClass()
    rHasClass = /[\t\r\n]/g,

    // Check for Safari -- it doesn't like multi file uploading. At all.
    // http://stackoverflow.com/a/9851769/1091949
    isSafari = Object.prototype.toString.call( window.HTMLElement ).indexOf( 'Constructor' ) > 0,

    isIE7 = ( navigator.userAgent.indexOf('MSIE 7') !== -1 ),

    // Check whether XHR uploads are supported
    input = document.createElement( 'input' ),

    XhrOk;

input.type = 'file';

XhrOk = ( 'multiple' in input &&
          typeof File !== 'undefined' &&
          typeof ( new XMLHttpRequest() ).upload !== 'undefined' );


/**
* Converts object to query string
*/
ss.obj2string = function( obj, prefix ) {
    "use strict";

    var str = [];

    for ( var prop in obj ) {
        if ( obj.hasOwnProperty( prop ) ) {
            var k = prefix ? prefix + '[' + prop + ']' : prop, v = obj[prop];
            str.push( typeof v === 'object' ?
                        ss.obj2string( v, k ) :
                        encodeURIComponent( k ) + '=' + encodeURIComponent( v ) );
        }
    }

    return str.join( '&' );
};

/**
* Copies all missing properties from second object to first object
*/
ss.extendObj = function( first, second ) {
    "use strict";

    for ( var prop in second ) {
        if ( second.hasOwnProperty( prop ) ) {
            first[prop] = second[prop];
        }
    }
};

ss.addEvent = function( elem, type, fn ) {
    "use strict";

    if ( elem.addEventListener ) {
        elem.addEventListener( type, fn, false );

    } else {
        elem.attachEvent( 'on' + type, fn );
    }
    return function() {
        ss.removeEvent( elem, type, fn );
    };
};

ss.removeEvent = document.removeEventListener ?
    function( elem, type, fn ) {
        if ( elem.removeEventListener ) {
            elem.removeEventListener( type, fn, false );
        }
    } :
    function( elem, type, fn ) {
        var name = 'on' + type;

        if ( typeof elem[ name ] === 'undefined' ) {
            elem[ name ] = null;
        }

        elem.detachEvent( name, fn );
    };

ss.newXHR = function() {
    "use strict";

    if ( typeof XMLHttpRequest !== 'undefined' ) {
        return new window.XMLHttpRequest();

    } else if ( window.ActiveXObject ) {
        try {
            return new window.ActiveXObject( 'Microsoft.XMLHTTP' );
        } catch ( err ) {
            return false;
        }
    }
};

ss.encodeUTF8 = function( str ) {
    "use strict";
    /*jshint nonstandard:true*/
    return unescape( encodeURIComponent( str ) );
};

ss.getIFrame = function() {
    "use strict";

    var id = ss.getUID(),
        iframe;

    // IE7 can only create an iframe this way, all others are the other way
    if ( isIE7 ) {
        iframe = document.createElement('<iframe src="javascript:false;" name="' + id + '">');

    } else {
        iframe = document.createElement('iframe');
        /*jshint scripturl:true*/
        iframe.src = 'javascript:false;';
        iframe.name = id;
    }

    iframe.style.display = 'none';
    iframe.id = id;
    return iframe;
};

ss.getForm = function( opts ) {
    "use strict";

    var form = document.createElement('form');

    form.encoding = 'multipart/form-data'; // IE
    form.enctype = 'multipart/form-data';
    form.style.display = 'none';

    for ( var prop in opts ) {
        if ( opts.hasOwnProperty( prop ) ) {
            form[prop] = opts[prop];
        }
    }

    return form;
};

ss.getHidden = function( name, value ) {
    "use strict";

    var input = document.createElement( 'input' );

    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
};

/**
* Parses a JSON string and returns a Javascript object
* Borrowed from www.jquery.com
*/
ss.parseJSON = function( data ) {
    "use strict";
    /*jshint evil:true*/

    if ( !data ) {
        return false;
    }

    data = ss.trim( data + '' );

    if ( window.JSON && window.JSON.parse ) {
        try {
            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return window.JSON.parse( data + '' );
        } catch ( err ) {
            return false;
        }
    }

    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
        depth = null,
        requireNonComma;

    // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
    // after removing valid tokens
    return data && !ss.trim( data.replace( rvalidtokens, function( token, comma, open, close ) {

        // Force termination if we see a misplaced comma
        if ( requireNonComma && comma ) {
            depth = 0;
        }

        // Perform no more replacements after returning to outermost depth
        if ( depth === 0 ) {
            return token;
        }

        // Commas must not follow "[", "{", or ","
        requireNonComma = open || comma;

        // Determine new depth
        // array/object open ("[" or "{"): depth += true - false (increment)
        // array/object close ("]" or "}"): depth += false - true (decrement)
        // other cases ("," or primitive): depth += true - true (numeric cast)
        depth += !close - !open;

        // Remove this token
        return '';
    }) ) ?
        ( Function( 'return ' + data ) )() :
        false;
};

ss.getBox = function( elem ) {
    "use strict";

    var box,
        docElem,
        top = 0,
        left = 0;

    if ( elem.getBoundingClientRect ) {
        box = elem.getBoundingClientRect();
        docElem = document.documentElement;
        top = box.top + ( window.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 );
        left = box.left + ( window.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 );

    } else {
        do {
            left += elem.offsetLeft;
            top += elem.offsetTop;
        } while ( ( elem = elem.offsetParent ) );
    }

    return {
        top: Math.round( top ),
        left: Math.round( left )
    };
};

/**
* Helper that takes object literal
* and add all properties to element.style
* @param {Element} el
* @param {Object} styles
*/
ss.addStyles = function( elem, styles ) {
    "use strict";

    for ( var name in styles ) {
        if ( styles.hasOwnProperty( name ) ) {
            elem.style[name] = styles[name];
        }
    }
};

/**
* Function places an absolutely positioned
* element on top of the specified element
* copying position and dimensions.
*/
ss.copyLayout = function( from, to ) {
    "use strict";

    var box = ss.getBox( from );

    ss.addStyles( to, {
        position: 'absolute',
        left : box.left + 'px',
        top : box.top + 'px',
        width : from.offsetWidth + 'px',
        height : from.offsetHeight + 'px'
    });
};

/**
* Generates unique ID
* Complies with RFC 4122 version 4
* http://stackoverflow.com/a/2117523/1091949
* ID begins with letter "a" to be safe for HTML elem ID/name attr (can't start w/ number)
*/
ss.getUID = function() {
    "use strict";

    /*jshint bitwise: false*/
    return 'axxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(uidReplace, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};

/**
* Removes white space from left and right of string
* Uses native String.trim if available
* Adapted from www.jquery.com
*/
var trim = "".trim;

ss.trim = trim && !trim.call("\uFEFF\xA0") ?
    function( text ) {
        return text === null ?
            "" :
            trim.call( text );
    } :
    function( text ) {
        return text === null ?
            "" :
            text.toString().replace( rLWhitespace, '' ).replace( rTWhitespace, '' );
    };

var arr = [];

ss.indexOf = arr.indexOf ?
    function( array, elem ) {
        return array.indexOf( elem );
    } :
    function( array, elem ) {
        for ( var i = 0, len = array.length; i < len; i++ ) {
            if ( array[i] === elem ) {
                return i;
            }
        }
        return -1;
    };

/**
* Removes an element from an array
*/
ss.arrayDelete = function( array, elem ) {
    var index = ss.indexOf( array, elem );

    if ( index > -1 ) {
        array.splice( index, 1 );
    }
};

/**
* Extract file name from path
*/
ss.getFilename = function( path ) {
    "use strict";
    return path.replace( rPath, '' );
};

/**
* Get file extension
*/
ss.getExt = function( file ) {
    "use strict";
    return ( -1 !== file.indexOf( '.' ) ) ? file.replace( rExt, '' ) : '';
};

/**
* Checks whether an element is visible
*/
ss.isVisible = function( elem ) {
    "use strict";

    if ( !elem ) {
        return false;
    }

    if ( elem.nodeType !== 1 || elem == document.body ) {
        elem = null;
        return true;
    }

    if ( elem.parentNode &&
        ( elem.offsetWidth > 0 ||
         elem.offsetHeight > 0 ||
         ss.getStyle( elem, 'display' ).toLowerCase() != 'none' ) )
    {
        return ss.isVisible( elem.parentNode );
    }

    elem = null;
    return false;
};

ss.getStyle = function( elem, style ) {
    "use strict";

    if ( window.getComputedStyle ) {
        var cs = elem.ownerDocument.defaultView.getComputedStyle( elem, null );
        return cs.getPropertyValue( style );

    } else if ( elem.currentStyle && elem.currentStyle[ style ] ) {
        return elem.currentStyle[ style ];
    }
};

/**
* Accepts a form element and returns an object with key/value pairs for the form fields
*/
ss.getFormObj = function( form ) {
    "use strict";

    var elems = form.elements,
        ignore = ['button', 'submit', 'image', 'reset'],
        inputs = {},
        obj;

    for ( var i = 0, len = elems.length; i < len; i++ ) {
        obj = {};

        if ( elems[ i ].name && !elems[ i ].disabled && ss.indexOf( ignore, elems[ i ].type ) === -1 ) {
            if ( (elems[ i ].type == 'checkbox' || elems[ i ].type == 'radio') &&
                 !elems[ i ].checked )
            {
                continue;
            }

            obj[ elems[ i ].name ] = ss.val( elems[ i ] );
            ss.extendObj( inputs, obj );
        }
    }

    return inputs;
};

/**
* Accepts a form input element and returns its value
*/
ss.val = function( elem ) {
    "use strict";

    if ( !elem ) {
        return;
    }

    if ( elem.nodeName.toUpperCase() == 'SELECT' ) {
        var options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === 'select-one' || index < 0,
            values = one ? null : [],
            value;

        for ( var i = 0, len = options.length; i < len; i++ ) {
            if ( ( options[ i ].selected || i === index ) && !options[ i ].disabled ) {
                value = !options[ i ].value ? options[ i ].text : options[ i ].value;

                if ( one ) {
                    return value;
                }

                values.push( value );
            }
        }

        return values;

    } else {
        return elem.value;
    }
};

/**
* Check whether element has a particular CSS class
* Parts borrowed from www.jquery.com
*/
ss.hasClass = function( elem, name ) {
    "use strict";

    if ( !elem || !name ) {
        return false;
    }

    return ( ' ' + elem.className + ' ' ).replace( rHasClass, ' ' ).indexOf( ' ' + name + ' ' ) >= 0;
};

/**
* Adds CSS class to an element
*/
ss.addClass = function( elem, name ) {
    "use strict";

    if ( !elem || !name ) {
        return false;
    }

    if ( !ss.hasClass( elem, name ) ) {
        elem.className += ' ' + name;
    }
};

/**
* Removes CSS class from an element
*/
ss.removeClass = (function() {
    "use strict";

    var c = {}; //cache regexps for performance

    return function( e, name ) {
        if ( !e || !name ) {
            return false;
        }

        if ( !c[name] ) {
            c[name] = new RegExp('(?:^|\\s)' + name + '(?!\\S)');
        }

        e.className = e.className.replace( c[name], '' );
    };
})();

/**
* Nulls out event handlers to prevent memory leaks in IE6/IE7
* http://javascript.crockford.com/memory/leak.html
* @param {Element} d
* @return void
*/
ss.purge = function( d ) {
    "use strict";

    var a = d.attributes, i, l, n;

    if ( a ) {
        for ( i = a.length - 1; i >= 0; i -= 1 ) {
            n = a[i].name;

            if ( typeof d[n] === 'function' ) {
                d[n] = null;
            }
        }
    }

    a = d.childNodes;

    if ( a ) {
        l = a.length;
        for ( i = 0; i < l; i += 1 ) {
            ss.purge( d.childNodes[i] );
        }
    }
};

/**
* Removes element from the DOM
*/
ss.remove = function( elem ) {
    "use strict";

    if ( elem && elem.parentNode ) {
        // null out event handlers for IE
        ss.purge( elem );
        elem.parentNode.removeChild( elem );
    }
    elem = null;
};

/**
* Accepts either a jQuery object, a string containing an element ID, or an element,
* verifies that it exists, and returns the element.
* @param {Mixed} elem
* @return {Element}
*/
ss.verifyElem = function( elem ) {
    "use strict";
    /*globals jQuery */

    if ( typeof jQuery !== 'undefined' && elem instanceof jQuery ) {
        elem = elem[0];

    } else if ( typeof elem === 'string' ) {
        if ( elem.charAt( 0 ) == '#' ) {
            elem = elem.substr( 1 );
        }
        elem = document.getElementById( elem );
    }

    if ( !elem || elem.nodeType !== 1 ) {
        return false;
    }

    if ( elem.nodeName.toUpperCase() == 'A' ) {
        elem.style.cursor = 'pointer';

        ss.addEvent( elem, 'click', function( e ) {
            if ( e && e.preventDefault ) {
                e.preventDefault();

            } else if ( window.event ) {
                window.event.returnValue = false;
            }
        });
    }

    return elem;
};

ss._options = {};

ss.uploadSetup = function( options ) {
    "use strict";
    ss.extendObj( ss._options, options );
};

ss.SimpleUpload = function( options ) {
    "use strict";

    this._opts = {
        button: '',
        url: '',
        dropzone: '',
        dragClass: '',
        form: '',
        overrideSubmit: true,
        cors: false,
        withCredentials: false,
        progressUrl: false,
        sessionProgressUrl: false,
        nginxProgressUrl: false,
        multiple: false,
        maxUploads: 3,
        queue: true,
        checkProgressInterval: 500,
        keyParamName: 'APC_UPLOAD_PROGRESS',
        sessionProgressName: 'PHP_SESSION_UPLOAD_PROGRESS',
        nginxProgressHeader: 'X-Progress-ID',
        customProgressHeaders: {},
        corsInputName: 'XHR_CORS_TARGETORIGIN',
        allowedExtensions: [],
        accept: '',
        maxSize: false,
        name: '',
        data: {},
        noParams: true,
        autoSubmit: true,
        multipart: true,
        method: 'POST',
        responseType: '',
        debug: false,
        hoverClass: '',
        focusClass: '',
        disabledClass: '',
        customHeaders: {},
        encodeHeaders: true,
        autoCalibrate: true,
        onBlankSubmit: function() {},
        onAbort: function( filename, uploadBtn, size ) {},
        onChange: function( filename, extension, uploadBtn, size, file ) {},
        onSubmit: function( filename, extension, uploadBtn, size ) {},
        onProgress: function( pct ) {},
        onUpdateFileSize: function( filesize ) {},
        onComplete: function( filename, response, uploadBtn, size ) {},
        onExtError: function( filename, extension ) {},
        onSizeError: function( filename, fileSize ) {},
        onError: function( filename, type, status, statusText, response, uploadBtn, size ) {},
        startXHR: function( filename, fileSize, uploadBtn ) {},
        endXHR: function( filename, fileSize, uploadBtn ) {},
        startNonXHR: function( filename, uploadBtn ) {},
        endNonXHR: function( filename, uploadBtn ) {}
    };

    ss.extendObj( this._opts, ss._options ); // Include any setup options
    ss.extendObj( this._opts, options ); // Then add options for this instance

    // An array of objects, each containing two items: a file and a reference
    // to the button which triggered the upload: { file: uploadFile, btn: button }
    this._queue = [];

    this._active = 0;
    this._disabled = false; // if disabled, clicking on button won't do anything
    this._maxFails = 10; // max allowed failed progress updates requests in iframe mode
    this._progKeys = {}; // contains the currently active upload ID progress keys
    this._sizeFlags = {}; // Cache progress keys after setting sizeBox for fewer trips to the DOM
    this._btns = [];

    this.addButton( this._opts.button );

    delete this._opts.button;
    this._opts.button = options = null;

    if ( this._opts.multiple === false ) {
        this._opts.maxUploads = 1;
    }

    if ( this._opts.dropzone !== '' ) {
        this.addDZ( this._opts.dropzone );
    }

    if ( this._opts.dropzone === '' && this._btns.length < 1 ) {
        throw new Error( "Invalid upload button. Make sure the element you're passing exists." );
    }

    if ( this._opts.form !== '' ) {
        this.setForm( this._opts.form );
    }

    this._createInput();
    this._manDisabled = false;
    this.enable( true );
};

ss.SimpleUpload.prototype = {

    destroy: function() {
        "use strict";

        // # of upload buttons
        var i = this._btns.length;

        // Put upload buttons back to the way we found them
        while ( i-- ) {
            // Remove event listener
            if ( this._btns[i].off ) {
                this._btns[i].off();
            }

            // Remove any lingering classes
            ss.removeClass( this._btns[i], this._opts.hoverClass );
            ss.removeClass( this._btns[i], this._opts.focusClass );
            ss.removeClass( this._btns[i], this._opts.disabledClass );

            // In case we disabled it
            this._btns[i].disabled = false;
        }

        this._killInput();

        // Set a flag to be checked in _last()
        this._destroy = true;
    },

    /**
    * Send data to browser console if debug is set to true
    */
    log: function( str ) {
        "use strict";

        if ( this._opts && this._opts.debug && window.console && window.console.log ) {
            window.console.log( '[Uploader] ' + str );
        }
    },

    /**
    * Replaces user data
    * Note that all previously set data is entirely removed and replaced
    */
    setData: function( data ) {
        "use strict";
        this._opts.data = data;
    },

    /**
    * Set or change uploader options
    * @param {Object} options
    */
    setOptions: function( options ) {
        "use strict";
        ss.extendObj( this._opts, options );
    },

    /**
    * Designate an element as an upload button
    */
    addButton: function( button ) {
        var btn;

        // An array of buttons was passed
        if ( button instanceof Array ) {

            for ( var i = 0, len = button.length; i < len; i++ ) {
                btn = ss.verifyElem( button[i] );

                if ( btn !== false ) {
                    this._btns.push( this.rerouteClicks( btn ) );

                } else {
                    this.log( 'Button with array index ' + i + ' is invalid' );
                }
            }

        // A single button was passed
        } else {
            btn = ss.verifyElem( button );

            if ( btn !== false ) {
                this._btns.push( this.rerouteClicks( btn ) );
            }
        }
    },

    /**
    * Designate an element as a drop zone
    */
    addDZ: function( dropzone ) {
        if ( !XhrOk ) {
            return;
        }

        dropzone = ss.verifyElem( dropzone );

        if ( !dropzone ) {
            this.log( 'Invalid or nonexistent element passed for drop zone' );
        } else {
            this.addDropZone( dropzone );
        }
    },

    /**
    * Designate an element as a progress bar
    * The CSS width % of the element will be updated as the upload progresses
    */
    setProgressBar: function( elem ) {
        "use strict";
        this._progBar = ss.verifyElem( elem );
    },

    /**
    * Designate an element to receive a string containing progress % during upload
    * Note: Uses innerHTML, so any existing child elements will be wiped out
    */
    setPctBox: function( elem ) {
        "use strict";
        this._pctBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to receive a string containing file size at start of upload
    * Note: Uses innerHTML, so any existing child elements will be wiped out
    */
    setFileSizeBox: function( elem ) {
        "use strict";
        this._sizeBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to be removed from DOM when upload is completed
    * Useful for removing progress bar, file size, etc. after upload
    */
    setProgressContainer: function( elem ) {
        "use strict";
        this._progBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to serve as the upload abort button
    */
    setAbortBtn: function( elem, remove ) {
        "use strict";

        this._abortBtn = ss.verifyElem( elem );
        this._removeAbort = false;

        if ( remove ) {
            this._removeAbort = true;
        }
    },

    setForm: function( form ) {
        "use strict";

        this._form = ss.verifyElem( form );

        if ( !this._form || this._form.nodeName.toUpperCase() != 'FORM' ) {
            this.log( 'Invalid or nonexistent element passed for form' );

        } else {
            var self = this;
            this._opts.autoSubmit = false;

            if ( this._opts.overrideSubmit ) {
                ss.addEvent( this._form, 'submit', function( e ) {
                    if ( e.preventDefault ) {
                        e.preventDefault();

                    } else if ( window.event ) {
                        window.event.returnValue = false;
                    }

                    if ( self._validateForm() ) {
                        self.submit();
                    }
                });

                this._form.submit = function() {
                    if ( self._validateForm() ) {
                        self.submit();
                    }
                };
            }
        }
    },

    /**
    * Returns number of files currently in queue
    */
    getQueueSize: function() {
        "use strict";
        return this._queue.length;
    },

    /**
    * Remove current file from upload queue, reset props, cycle to next upload
    */
    removeCurrent: function( id ) {
        "use strict";

        if ( id ) {
            var i = this._queue.length;

            while ( i-- ) {
                if ( this._queue[i].id === id ) {
                    this._queue.splice( i, 1 );
                    break;
                }
            }

        } else {
            this._queue.splice( 0, 1 );
        }

        this._cycleQueue();
    },

    /**
    * Clears Queue so only most recent select file is uploaded
    */
    clearQueue: function() {
        "use strict";
        this._queue.length = 0;
    },

    /**
    * Disables upload functionality
    */
    disable: function( _self ) {
        "use strict";

        var i = this._btns.length,
            nodeName;

        // _self is always true when disable() is called internally
        this._manDisabled = !_self || this._manDisabled === true ? true : false;
        this._disabled = true;

        while ( i-- ) {
            nodeName = this._btns[i].nodeName.toUpperCase();

            if ( nodeName == 'INPUT' || nodeName == 'BUTTON' ) {
                this._btns[i].disabled = true;
            }

            if ( this._opts.disabledClass !== '' ) {
                ss.addClass( this._btns[i], this._opts.disabledClass );
            }
        }

        // Hide file input
        if ( this._input && this._input.parentNode ) {
            this._input.parentNode.style.visibility = 'hidden';
        }
    },

    /**
    * Enables upload functionality
    */
    enable: function( _self ) {
        "use strict";

        // _self will always be true when enable() is called internally
        if ( !_self ) {
            this._manDisabled = false;
        }

        // Don't enable uploader if it was manually disabled
        if ( this._manDisabled === true ) {
            return;
        }

        var i = this._btns.length;

        this._disabled = false;

        while ( i-- ) {
            ss.removeClass( this._btns[i], this._opts.disabledClass );
            this._btns[i].disabled = false;
        }
    },

    /**
     * Updates invisible button position
     */
    updatePosition: function( btn ) {
        "use strict";

        btn = !btn ? this._btns[0] : btn;

        if ( btn && this._input && this._input.parentNode ) {
            ss.copyLayout( btn, this._input.parentNode );
        }

        btn = null;
    },

    rerouteClicks: function( elem ) {
        "use strict";

        var self = this;

        // ss.addEvent() returns a function to detach, which
        // allows us to call elem.off() to remove mouseover listener
        elem.off = ss.addEvent( elem, 'mouseover', function() {
            if ( self._disabled ) {
                return;
            }

            if ( !self._input ) {
                self._createInput();
            }

            self._overBtn = elem;
            ss.copyLayout( elem, self._input.parentNode );
            self._input.parentNode.style.visibility = 'visible';
        });

        if ( self._opts.autoCalibrate && !ss.isVisible( elem ) ) {
            self.log('Upload button not visible');

            var interval = function() {
                if ( ss.isVisible( elem ) ) {
                    self.log('Upload button now visible');

                    window.setTimeout(function() {
                        self.updatePosition( elem );

                        if ( self._btns.length === 1 ) {
                            self._input.parentNode.style.visibility = 'hidden';
                        }
                    }, 200);

                } else {
                    window.setTimeout( interval, 500 );
                }
            };

            window.setTimeout( interval, 500 );
        }

        return elem;
    },

    /**
    * Validates input and directs to either XHR method or iFrame method
    */
    submit: function( _, auto ) {
        "use strict";

        if ( !auto && this._queue.length < 1 ) {
            this._opts.onBlankSubmit.call( this );
            return;
        }

        if ( this._disabled ||
            this._active >= this._opts.maxUploads ||
            this._queue.length < 1 )
        {
            return;
        }

        if ( !this._checkFile( this._queue[0] ) ) {
            return;
        }

        // User returned false to cancel upload
        if ( false === this._opts.onSubmit.call( this, this._queue[0].name, this._queue[0].ext, this._queue[0].btn, this._queue[0].size ) ) {
            this.removeCurrent( this._queue[0].id );
            return;
        }

        // Increment the active upload counter
        this._active++;

        // Disable uploading if multiple file uploads are not enabled
        // or if queue is disabled and we've reached max uploads
        if ( this._opts.multiple === false ||
            this._opts.queue === false && this._active >= this._opts.maxUploads )
        {
            this.disable( true );
        }

        this._initUpload( this._queue[0] );
    }

};

ss.IframeUpload = {

    _detachEvents: {},

    _detach: function( id ) {
        if ( this._detachEvents[ id ] ) {
            this._detachEvents[ id ]();
            delete this._detachEvents[ id ];
        }
    },

    /**
    * Accepts a URI string and returns the hostname
    */
    _getHost: function( uri ) {
        var a = document.createElement( 'a' );

        a.href = uri;

        if ( a.hostname ) {
            return a.hostname.toLowerCase();
        }
        return uri;
    },

    _addFiles: function( file ) {
        var filename = ss.getFilename( file.value ),
            ext = ss.getExt( filename );

        if ( false === this._opts.onChange.call( this, filename, ext, this._overBtn, undefined, file ) ) {
            return false;
        }

        this._queue.push({
            id: ss.getUID(),
            file: file,
            name: filename,
            ext: ext,
            btn: this._overBtn,
            size: null
        });

        return true;
    },

    /**
    * Handles uploading with iFrame
    */
    _uploadIframe: function( fileObj, progBox, sizeBox, progBar, pctBox, abortBtn, removeAbort ) {
        "use strict";

        var self = this,
            opts = this._opts,
            key = ss.getUID(),
            iframe = ss.getIFrame(),
            form,
            url,
            msgLoaded = false,
            iframeLoaded = false,
            cancel;

        if ( opts.noParams === true ) {
            url = opts.url;

        } else {
            // If we're using Nginx Upload Progress Module, append upload key to the URL
            // Also, preserve query string if there is one
            url = !opts.nginxProgressUrl ?
                    opts.url :
                    url + ( ( url.indexOf( '?' ) > -1 ) ? '&' : '?' ) +
                          encodeURIComponent( opts.nginxProgressHeader ) + '=' + encodeURIComponent( key );
        }

        form = ss.getForm({
            action: url,
            target: iframe.name,
            method: opts.method
        });

        opts.onProgress.call( this, 0 );

        if ( pctBox ) {
            pctBox.innerHTML = '0%';
        }

        if ( progBar ) {
            progBar.style.width = '0%';
        }

        // For CORS, add a listener for the "message" event, which will be
        // triggered by the Javascript snippet in the server response
        if ( opts.cors ) {
            var msgId = ss.getUID();

            self._detachEvents[ msgId ] = ss.addEvent( window, 'message', function( event ) {
                // Make sure event.origin matches the upload URL
                if ( self._getHost( event.origin ) != self._getHost( opts.url ) ) {
                    self.log('Non-matching origin: ' + event.origin);
                    return;
                }

                msgLoaded = true;
                self._detach( msgId );
                opts.endNonXHR.call( self, fileObj.name, fileObj.btn );
                self._finish( fileObj,  '', '', event.data, sizeBox, progBox, pctBox, abortBtn, removeAbort );
            });
        }

        self._detachEvents[ iframe.id ] = ss.addEvent( iframe, 'load', function() {
            self._detach( iframe.id );

            if ( opts.sessionProgressUrl ) {
                form.appendChild( ss.getHidden( opts.sessionProgressName, key ) );
            }

            // PHP APC upload progress key field must come before the file field
            else if ( opts.progressUrl ) {
                form.appendChild( ss.getHidden( opts.keyParamName, key ) );
            }

            if ( self._form ) {
                ss.extendObj( opts.data, ss.getFormObj( self._form ) );
            }

            // Get additional data after startNonXHR() in case setData() was called prior to submitting
            for ( var prop in opts.data ) {
                if ( opts.data.hasOwnProperty( prop ) ) {
                    form.appendChild( ss.getHidden( prop, opts.data[prop] ) );
                }
            }

            // Add a field (default name: "XHR_CORS_TRARGETORIGIN") to tell server this is a CORS request
            // Value of the field is targetOrigin parameter of postMessage(message, targetOrigin)
            if ( opts.cors ) {
                form.appendChild( ss.getHidden( opts.corsInputName, window.location.href ) );
            }

            form.appendChild( fileObj.file );

            self._detachEvents[ fileObj.id ] = ss.addEvent( iframe, 'load', function() {
                if ( !iframe || !iframe.parentNode || iframeLoaded ) {
                    return;
                }

                self._detach( fileObj.id );
                iframeLoaded = true;

                delete self._progKeys[ key ];
                delete self._sizeFlags[ key ];

                if ( abortBtn ) {
                    ss.removeEvent( abortBtn, 'click', cancel );
                }

                // After a CORS response, we wait briefly for the "message" event to finish,
                // during which time the msgLoaded var will be set to true, signalling success.
                // If iframe loads without "message" event, we assume there was an error
                if ( opts.cors ) {
                    window.setTimeout(function() {
                        ss.remove( iframe );

                        // If msgLoaded has not been set to true after "message" event fires, we
                        // infer that an error must have occurred and respond accordingly
                        if ( !msgLoaded ) {
                            self._errorFinish( fileObj, '', '', false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                        }

                        fileObj = opts = key = iframe = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
                    }, 600);
                }

                // Non-CORS upload
                else {
                    try {
                        var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document,
                            response = doc.body.innerHTML;

                        ss.remove( iframe );
                        iframe = null;

                        opts.endNonXHR.call( self, fileObj.name, fileObj.btn );

                        // No way to get status and statusText for an iframe so return empty strings
                        self._finish( fileObj, '', '', response, sizeBox, progBox, pctBox, abortBtn, removeAbort );

                    } catch ( e ) {
                        self._errorFinish( fileObj, '', e.message, false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                    }

                    fileObj = opts = key = sizeBox = progBox = pctBox = null;
                }
            });// end load

            if ( abortBtn ) {
                cancel = function() {
                    ss.removeEvent( abortBtn, 'click', cancel );

                    delete self._progKeys[key];
                    delete self._sizeFlags[key];

                    if ( iframe ) {
                        iframeLoaded = true;
                        self._detach( fileObj.id );

                        try {
                            if ( iframe.contentWindow.document.execCommand ) {
                                iframe.contentWindow.document.execCommand('Stop');
                            }
                        } catch( err ) {}

                        try {
                            iframe.src = 'javascript'.concat(':false;');
                        } catch( err ) {}

                        window.setTimeout(function() {
                            ss.remove( iframe );
                            iframe = null;
                        }, 1);
                    }

                    self.log('Upload aborted');
                    opts.onAbort.call( self, fileObj.name, fileObj.btn, fileObj.size );
                    self._last( sizeBox, progBox, pctBox, abortBtn, removeAbort );
                };

                ss.addEvent( abortBtn, 'click', cancel );
            }

            self.log( 'Commencing upload using iframe' );
            form.submit();

            // Remove form and begin next upload
            window.setTimeout(function() {
                ss.remove( form );
                form = null;
                self.removeCurrent( fileObj.id );
            }, 1);

            if ( self._hasProgUrl ) {
                // Add progress key to active key array
                self._progKeys[key] = 1;

                window.setTimeout( function() {
                    self._getProg( key, progBar, sizeBox, pctBox, 1 );
                    progBar = sizeBox = pctBox = null;
                }, 600 );
            }

        });// end load

        document.body.appendChild( form );
        document.body.appendChild( iframe );
    },

    /**
    * Retrieves upload progress updates from the server
    * (For fallback upload progress support)
    */
    _getProg: function( key, progBar, sizeBox, pctBox, counter ) {
        "use strict";

        var self = this,
            opts = this._opts,
            time = new Date().getTime(),
            xhr,
            url,
            callback;

        if ( !key ) {
            return;
        }

        // Nginx Upload Progress Module
        if ( opts.nginxProgressUrl ) {
            url = opts.nginxProgressUrl + '?' +
                  encodeURIComponent( opts.nginxProgressHeader ) + '=' + encodeURIComponent( key ) +
                  '&_=' + time;
        }

        else if ( opts.sessionProgressUrl ) {
            url = opts.sessionProgressUrl;
        }

        // PHP APC upload progress
        else if ( opts.progressUrl ) {
            url = opts.progressUrl +
            '?progresskey=' + encodeURIComponent( key ) +
            '&_=' + time;
        }

        callback = function() {
            var response,
                size,
                pct,
                status,
                statusText;

            try {
                // XDR doesn't have readyState so we just assume that it finished correctly
                if ( callback && ( opts.cors || xhr.readyState === 4 ) ) {
                    callback = undefined;
                    xhr.onreadystatechange = function() {};

                    try {
                        statusText = xhr.statusText;
                        status = xhr.status;
                    } catch( e ) {
                        statusText = '';
                        status = '';
                    }

                    // XDR also doesn't have status, so just assume that everything is fine
                    if ( opts.cors || ( status >= 200 && status < 300 ) ) {
                        response = ss.parseJSON( xhr.responseText );

                        if ( response === false ) {
                            self.log( 'Error parsing progress response (expecting JSON)' );
                            return;
                        }

                        // Handle response if using Nginx Upload Progress Module
                        if ( opts.nginxProgressUrl ) {

                            if ( response.state == 'uploading' ) {
                                size = parseInt( response.size, 10 );
                                if ( size > 0 ) {
                                    pct = Math.round( ( parseInt( response.received, 10 ) / size ) * 100 );
                                    size = Math.round( size / 1024 ); // convert to kilobytes
                                }

                            } else if ( response.state == 'done' ) {
                                pct = 100;

                            } else if ( response.state == 'error' ) {
                                self.log( 'Error requesting upload progress: ' + response.status );
                                return;
                            }
                        }

                        // Handle response if using PHP APC
                        else if ( opts.sessionProgressUrl || opts.progressUrl ) {
                            if ( response.success === true ) {
                                size = parseInt( response.size, 10 );
                                pct = parseInt( response.pct, 10 );
                            }
                        }

                        // Update progress bar width
                        if ( pct ) {
                            if ( pctBox ) {
                                pctBox.innerHTML = pct + '%';
                            }

                            if ( progBar ) {
                                progBar.style.width = pct + '%';
                            }

                            opts.onProgress.call( self, pct );
                        }

                        if ( size && !self._sizeFlags[key] ) {
                            if ( sizeBox ) {
                                sizeBox.innerHTML = size + 'K';
                            }

                            self._sizeFlags[key] = 1;
                            opts.onUpdateFileSize.call( self, size );
                        }

                        // Stop attempting progress checks if we keep failing
                        if ( !pct &&
                             !size &&
                             counter >= self._maxFails )
                        {
                            counter++;
                            self.log( 'Failed progress request limit reached. Count: ' + counter );
                            return;
                        }

                        // Begin countdown until next progress update check
                        if ( pct < 100 && self._progKeys[key] ) {
                            window.setTimeout( function() {
                                self._getProg( key, progBar, sizeBox, pctBox, counter );

                                key = progBar = sizeBox = pctBox = counter = null;
                            }, opts.checkProgressInterval );
                        }

                        // We didn't get a 2xx status so don't continue sending requests
                    } else {
                        delete self._progKeys[key];
                        self.log( 'Error requesting upload progress: ' + status + ' ' + statusText );
                    }

                    xhr = size = pct = status = statusText = response = null;
                }

            } catch( e ) {
                self.log( 'Error requesting upload progress: ' + e.message );
            }
        };

        // CORS requests in IE8 and IE9 must use XDomainRequest
        if ( opts.cors && !opts.sessionProgressUrl ) {

            if ( window.XDomainRequest ) {
                xhr = new window.XDomainRequest();
                xhr.open( 'GET', url, true );
                xhr.onprogress = xhr.ontimeout = function() {};
                xhr.onload = callback;

                xhr.onerror = function() {
                    delete self._progKeys[key];
                    key = null;
                    self.log('Error requesting upload progress');
                };

                // IE7 or some other dinosaur -- just give up
            } else {
                return;
            }

        } else {
            var method = !opts.sessionProgressUrl ? 'GET' : 'POST',
                headers = {},
                params;

            xhr = ss.newXHR();
            xhr.onreadystatechange = callback;
            xhr.open( method, url, true );

            // PHP session progress updates must be a POST request
            if ( opts.sessionProgressUrl ) {
                params = encodeURIComponent( opts.sessionProgressName ) + '=' + encodeURIComponent( key );
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }

            // Set the upload progress header for Nginx
            if ( opts.nginxProgressUrl ) {
                headers[opts.nginxProgressHeader] = key;
            }

            headers['X-Requested-With'] = 'XMLHttpRequest';
            headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';

            ss.extendObj( headers, opts.customProgressHeaders );

            for ( var i in headers ) {
                if ( headers.hasOwnProperty( i ) ) {
                    if ( opts.encodeHeaders ) {
                        xhr.setRequestHeader( i, ss.encodeUTF8( headers[ i ] + '' ) );

                    } else {
                        xhr.setRequestHeader( i, headers[ i ] + '' );
                    }
                }
            }

           xhr.send( ( opts.sessionProgressUrl &&  params ) || null );
        }
    },

    _initUpload: function( fileObj ) {
        if ( false === this._opts.startNonXHR.call( this, fileObj.name, fileObj.btn ) ) {

            if ( this._disabled ) {
                this.enable( true );
            }

            this._active--;
            return;
        }

        this._hasProgUrl = ( this._opts.progressUrl ||
                             this._opts.sessionProgressUrl ||
                             this._opts.nginxProgressUrl ) ?
                             true : false;

        this._uploadIframe( fileObj, this._progBox, this._sizeBox, this._progBar, this._pctBox, this._abortBtn, this._removeAbort );

        fileObj = this._progBox = this._sizeBox = this._progBar = this._pctBox = this._abortBtn = this._removeAbort = null;
    }
};

ss.XhrUpload = {

    _addFiles: function( files ) {
        var total = files.length,
            filename,
            ext,
            size,
            i;

        if ( !this._opts.multiple ) {
            total = 1;
        }

        for ( i = 0; i < total; i++ ) {
            filename = ss.getFilename( files[i].name );
            ext = ss.getExt( filename );
            size = Math.round( files[i].size / 1024 );

            if ( false === this._opts.onChange.call( this, filename, ext, this._overBtn, size, files[i] ) ) {
                return false;
            }

            this._queue.push({
                id: ss.getUID(),
                file: files[i],
                name: filename,
                ext: ext,
                btn: this._overBtn,
                size: size
            });
        }

        return true;
    },

    /**
    * Handles uploading with XHR
    */
    _uploadXhr: function( fileObj, url, params, headers, sizeBox, progBar, progBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        var self = this,
            opts = this._opts,
            xhr = ss.newXHR(),
            callback,
            cancel;

        // Inject file size into size box
        if ( sizeBox ) {
            sizeBox.innerHTML = fileObj.size + 'K';
        }

        // Begin progress bars at 0%
        if ( pctBox ) {
            pctBox.innerHTML = '0%';
        }

        if ( progBar ) {
            progBar.style.width = '0%';
        }

        // Borrows heavily from jQuery ajax transport
        callback = function( _, isAbort ) {
            var statusText;

            try {
                // Was never called and is aborted or complete
                if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                    callback = undefined;
                    xhr.onreadystatechange = function() {};

                    // If it's an abort
                    if ( isAbort ) {
                        // Abort it manually if needed
                        if ( xhr.readyState !== 4 ) {
                            xhr.abort();
                        }

                        opts.onAbort.call( self, fileObj.name, fileObj.btn, fileObj.size );
                        self._last( sizeBox, progBox, pctBox, abortBtn, removeAbort );

                    } else {
                        if ( abortBtn ) {
                            ss.removeEvent( abortBtn, 'click', cancel );
                        }

                        try {
                            statusText = xhr.statusText;
                        } catch( e ) {
                            // We normalize with Webkit giving an empty statusText
                            statusText = '';
                        }

                        if ( xhr.status >= 200 && xhr.status < 300 ) {
                            opts.endXHR.call( self, fileObj.name, fileObj.size, fileObj.btn );
                            self._finish( fileObj, xhr.status, statusText, xhr.responseText, sizeBox, progBox, pctBox, abortBtn, removeAbort );

                            // We didn't get a 2xx status so throw an error
                        } else {
                            self._errorFinish( fileObj, xhr.status, statusText, xhr.responseText, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                        }
                    }
                }

            }
            catch ( e ) {
                if ( !isAbort ) {
                    self._errorFinish( fileObj, -1, e.message, false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                }
            }
        };

        if ( abortBtn ) {
            cancel = function() {
                ss.removeEvent( abortBtn, 'click', cancel );

                if ( callback ) {
                    callback( undefined, true );
                }
            };

            ss.addEvent( abortBtn, 'click', cancel );
        }

        xhr.onreadystatechange = callback;
        xhr.open( opts.method.toUpperCase(), url, true );
        xhr.withCredentials = !!opts.withCredentials;

        ss.extendObj( headers, opts.customHeaders );

        for ( var i in headers ) {
            if ( headers.hasOwnProperty( i ) ) {
                if ( opts.encodeHeaders ) {
                    xhr.setRequestHeader( i, ss.encodeUTF8( headers[ i ] + '' ) );

                } else {
                    xhr.setRequestHeader( i, headers[ i ] + '' );
                }
            }
        }

        ss.addEvent( xhr.upload, 'progress', function( event ) {
            if ( event.lengthComputable ) {
                var pct = Math.round( event.loaded / event.total * 100 );

                opts.onProgress.call( self, pct );

                if ( pctBox ) {
                    pctBox.innerHTML = pct + '%';
                }

                if ( progBar ) {
                    progBar.style.width = pct + '%';
                }
            }
        });

        opts.onProgress.call( this, 0 );

        if ( opts.multipart === true ) {
            var formData = new FormData();

            var hasFile = false;

            for ( var prop in params ) {
                if ( params.hasOwnProperty( prop ) ) {
                    if ( prop === opts.name && opts.noParams === true && !self._form ) {
                        hasFile = true;
                    }
                    formData.append( prop, params[prop] );
                }
            }

            if ( !hasFile ) {
                formData.append( opts.name, fileObj.file );
            }

            this.log( 'Commencing upload using multipart form' );
            xhr.send( formData );

        } else {
            this.log( 'Commencing upload using binary stream' );
            xhr.send( fileObj.file );
        }

        // Remove file from upload queue and begin next upload
        this.removeCurrent( fileObj.id );
    },

    _initUpload: function( fileObj ) {
        "use strict";

        var params = {},
            headers = {},
            url;

        // Call the startXHR() callback and stop upload if it returns false
        // We call it before _uploadXhr() in case setProgressBar, setPctBox, etc., is called
        if ( false === this._opts.startXHR.call( this, fileObj.name, fileObj.size, fileObj.btn ) ) {

            if ( this._disabled ) {
                this.enable( true );
            }

            this._active--;
            return;
        }

        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-File-Name'] = fileObj.name;

        if ( this._opts.responseType.toLowerCase() == 'json' ) {
            headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';
        }

        if ( !this._opts.multipart ) {
            headers['Content-Type'] = 'application/octet-stream';
        }

        if ( this._form ) {
            ss.extendObj( params, ss.getFormObj( this._form ) );
        }

        // We get the any additional data here after startXHR()
        ss.extendObj( params, this._opts.data );

        // Build query string while preserving any existing parameters
        url = this._opts.noParams === true ?
                this._opts.url :
                this._opts.url + ( ( this._opts.url.indexOf( '?' ) > -1 ) ? '&' : '?' ) + ss.obj2string( params );

        this._uploadXhr( fileObj, url, params, headers, this._sizeBox, this._progBar, this._progBox, this._pctBox, this._abortBtn, this._removeAbort );

        this._sizeBox = this._progBar = this._progBox = this._pctBox = this._abortBtn = this._removeAbort = null;
    }

};

ss.DragAndDrop = {

    _dragFileCheck: function( e ) {
        if ( e.dataTransfer.types ) {
            for ( var i = 0; i < e.dataTransfer.types.length; i++ ) {
                if ( e.dataTransfer.types[i] == 'Files' ) {
                    return true;
                }
            }
        }

        return false;
    },

    addDropZone: function( elem ) {
        var self = this,
            collection = [];

        ss.addStyles( elem, {
            'zIndex': 16777271
        });

        elem.ondragenter = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            if ( !self._dragFileCheck( e ) ) {
                return false;
            }

            if ( collection.length === 0 ) {
                ss.addClass( this, self._opts.dragClass );
            }

            if ( ss.indexOf( collection, e.target ) === -1 ) {
                collection.push( e.target );
            }

            return false;
        };

        elem.ondragover = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            if ( self._dragFileCheck( e ) ) {
                e.dataTransfer.dropEffect = 'copy';
            }

            return false;
        };

        elem.ondragend = function() {
            ss.removeClass( this, self._opts.dragClass );
            return false;
        };

        elem.ondragleave = function( e ) {
            ss.arrayDelete( collection, e.target );

            if ( collection.length === 0 ) {
                ss.removeClass( this, self._opts.dragClass );
            }

            return false;
        };

        elem.ondrop = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            ss.arrayDelete( collection, e.target );

            if ( collection.length === 0 ) {
                ss.removeClass( this, self._opts.dragClass );
            }

            if ( !self._dragFileCheck( e ) ) {
                return;
            }

            if ( false !== self._addFiles( e.dataTransfer.files ) ) {
                self._cycleQueue();
            }
        };
    }
};

ss.extendObj( ss.SimpleUpload.prototype, {

    _createInput: function() {
        "use strict";

        var self = this,
            div = document.createElement( 'div' );

        this._input = document.createElement( 'input' );
        this._input.type = 'file';
        this._input.name = this._opts.name;

        // Don't allow multiple file selection in Safari -- it has a nasty bug
        // http://stackoverflow.com/q/7231054/1091949
        if ( XhrOk && !isSafari && this._opts.multiple ) {
            this._input.multiple = true;
        }

        // Check support for file input accept attribute
        if ( 'accept' in this._input && this._opts.accept !== '' ) {
            this._input.accept = this._opts.accept;
        }

        ss.addStyles( div, {
            'display' : 'block',
            'position' : 'absolute',
            'overflow' : 'hidden',
            'margin' : 0,
            'padding' : 0,
            'opacity' : 0,
            'direction' : 'ltr',
            'zIndex': 16777270
        });

        if ( div.style.opacity !== '0' ) {
            div.style.filter = 'alpha(opacity=0)';
        }

        ss.addStyles( this._input, {
            'position' : 'absolute',
            'right' : 0,
            'margin' : 0,
            'padding' : 0,
            'fontSize' : '480px',
            'fontFamily' : 'sans-serif',
            'cursor' : 'pointer',
            'height' : '100%',
            'zIndex': 16777270
        });

        this._input.turnOff = ss.addEvent( this._input, 'change', function() {
            if ( !self._input || self._input.value === '' ) {
                return;
            }

            if ( false === self._addFiles( XhrOk ? self._input.files : self._input ) ) {
                return;
            }

            ss.removeClass( self._overBtn, self._opts.hoverClass );
            ss.removeClass( self._overBtn, self._opts.focusClass );

            self._killInput();

            // Then create a new file input
            self._createInput();

            // Submit if autoSubmit option is true
            if ( self._opts.autoSubmit ) {
                self.submit();
            }
        });

        if ( self._opts.hoverClass !== '' ) {
            div.mouseOverOff = ss.addEvent( div, 'mouseover', function() {
                ss.addClass( self._overBtn, self._opts.hoverClass );
            });
        }

        div.mouseOutOff = ss.addEvent( div, 'mouseout', function() {
            self._input.parentNode.style.visibility = 'hidden';

            if ( self._opts.hoverClass !== '' ) {
                ss.removeClass( self._overBtn, self._opts.hoverClass );
                ss.removeClass( self._overBtn, self._opts.focusClass );
            }
        });

        if ( self._opts.focusClass !== '' ) {
            this._input.focusOff = ss.addEvent( this._input, 'focus', function() {
                ss.addClass( self._overBtn, self._opts.focusClass );
            });

            this._input.blurOff = ss.addEvent( this._input, 'blur', function() {
                ss.removeClass( self._overBtn, self._opts.focusClass );
            });
        }

        div.appendChild( this._input );
        document.body.appendChild( div );
        div = null;
    },

    /**
    * Final cleanup function after upload ends
    */
    _last: function( sizeBox, progBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        if ( sizeBox ) {
           sizeBox.innerHTML = '';
        }

        if ( pctBox ) {
            pctBox.innerHTML = '';
        }

        if ( abortBtn && removeAbort ) {
            ss.remove( abortBtn );
        }

        if ( progBox ) {
            ss.remove( progBox );
        }

        // Decrement the active upload counter
        this._active--;

        sizeBox = progBox = pctBox = abortBtn = removeAbort = null;

        if ( this._disabled ) {
            this.enable( true );
        }

        // Burn it all down if destroy() was called
        // We have to do it here after everything is finished to avoid any errors
        if ( this._destroy &&
             this._queue.length === 0 &&
             this._active === 0 )
        {
            for ( var prop in this ) {
                if ( this.hasOwnProperty( prop ) ) {
                    delete this[ prop ];
                }
            }

        // Otherwise just go to the next upload as usual
        } else {
            this._cycleQueue();
        }
    },

    /**
    * Completes upload request if an error is detected
    */
    _errorFinish: function( fileObj, status, statusText, response, errorType, progBox, sizeBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        this.log( 'Upload failed: ' + status + ' ' + statusText );
        this._opts.onError.call( this, fileObj.name, errorType, status, statusText, response, fileObj.btn, fileObj.size );
        this._last( sizeBox, progBox, pctBox, abortBtn, removeAbort );

        fileObj = status = statusText = response = errorType = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
    },

    /**
    * Completes upload request if the transfer was successful
    */
    _finish: function( fileObj, status, statusText, response, sizeBox, progBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        this.log( 'Server response: ' + response );

        if ( this._opts.responseType.toLowerCase() == 'json' ) {
            response = ss.parseJSON( response );

            if ( response === false ) {
                this._errorFinish( fileObj, status, statusText, false, 'parseerror', progBox, sizeBox, abortBtn, removeAbort );
                return;
            }
        }

        this._opts.onComplete.call( this, fileObj.name, response, fileObj.btn, fileObj.size );
        this._last( sizeBox, progBox, pctBox, abortBtn, removeAbort );
        fileObj = status = statusText = response = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
    },

    /**
    * Verifies that file is allowed
    * Checks file extension and file size if limits are set
    */
    _checkFile: function( fileObj ) {
        "use strict";

        var extOk = false,
            i = this._opts.allowedExtensions.length;

        // Only file extension if allowedExtensions is set
        if ( i > 0 ) {
            while ( i-- ) {
                if ( this._opts.allowedExtensions[i].toLowerCase() == fileObj.ext.toLowerCase() ) {
                    extOk = true;
                    break;
                }
            }

            if ( !extOk ) {
                this.removeCurrent( fileObj.id );
                this.log( 'File extension not permitted' );
                this._opts.onExtError.call( this, fileObj.name, fileObj.ext );
                return false;
            }
        }

        if ( fileObj.size &&
            this._opts.maxSize !== false &&
            fileObj.size > this._opts.maxSize )
        {
            this.removeCurrent( fileObj.id );
            this.log( fileObj.name + ' exceeds ' + this._opts.maxSize + 'K limit' );
            this._opts.onSizeError.call( this, fileObj.name, fileObj.size );
            return false;
        }

        fileObj = null;

        return true;
    },

    _killInput: function() {
        "use strict";

        if ( !this._input ) {
            return;
        }

        if ( this._input.turnOff ) {
            this._input.turnOff();
        }

        if ( this._input.focusOff ) {
            this._input.focusOff();
        }

        if ( this._input.blurOff ) {
            this._input.blurOff();
        }

        if ( this._input.parentNode.mouseOverOff ) {
            this._input.parentNode.mouseOverOff();
        }

        ss.remove( this._input.parentNode );
        delete this._input;
        this._input = null;
    },

    /**
    * Enables uploader and submits next file for upload
    */
    _cycleQueue: function() {
        "use strict";

        if ( this._queue.length > 0 && this._opts.autoSubmit ) {
            this.submit( undefined, true );
        }
    },

    _validateForm: function() {
        "use strict";

        if ( this._form.checkValidity && !this._form.checkValidity() ) {
            return false;

        } else {
            return true;
        }
    }

});

if ( XhrOk ) {
    ss.extendObj( ss.SimpleUpload.prototype, ss.XhrUpload );

} else {
    ss.extendObj( ss.SimpleUpload.prototype, ss.IframeUpload );
}

ss.extendObj( ss.SimpleUpload.prototype, ss.DragAndDrop );

return ss;

}));

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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Template7 = factory());
}(this, (function () { 'use strict';

var t7ctx;
if (typeof window !== 'undefined') {
  t7ctx = window;
} else if (typeof global !== 'undefined') {
  t7ctx = global;
} else {
  t7ctx = undefined;
}

var Template7Context = t7ctx;

var Template7Utils = {
  quoteSingleRexExp: new RegExp('\'', 'g'),
  quoteDoubleRexExp: new RegExp('"', 'g'),
  isFunction: function isFunction(func) {
    return typeof func === 'function';
  },
  escape: function escape(string) {
    return (typeof Template7Context !== 'undefined' && Template7Context.escape) ?
      Template7Context.escape(string) :
      string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
  },
  helperToSlices: function helperToSlices(string) {
    var quoteDoubleRexExp = Template7Utils.quoteDoubleRexExp;
    var quoteSingleRexExp = Template7Utils.quoteSingleRexExp;
    var helperParts = string.replace(/[{}#}]/g, '').trim().split(' ');
    var slices = [];
    var shiftIndex;
    var i;
    var j;
    for (i = 0; i < helperParts.length; i += 1) {
      var part = helperParts[i];
      var blockQuoteRegExp = (void 0);
      var openingQuote = (void 0);
      if (i === 0) { slices.push(part); }
      else if (part.indexOf('"') === 0 || part.indexOf('\'') === 0) {
        blockQuoteRegExp = part.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
        openingQuote = part.indexOf('"') === 0 ? '"' : '\'';
        // Plain String
        if (part.match(blockQuoteRegExp).length === 2) {
          // One word string
          slices.push(part);
        } else {
          // Find closed Index
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            part += " " + (helperParts[j]);
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              slices.push(part);
              break;
            }
          }
          if (shiftIndex) { i = shiftIndex; }
        }
      } else if (part.indexOf('=') > 0) {
        // Hash
        var hashParts = part.split('=');
        var hashName = hashParts[0];
        var hashContent = hashParts[1];
        if (!blockQuoteRegExp) {
          blockQuoteRegExp = hashContent.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
          openingQuote = hashContent.indexOf('"') === 0 ? '"' : '\'';
        }
        if (hashContent.match(blockQuoteRegExp).length !== 2) {
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            hashContent += " " + (helperParts[j]);
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              break;
            }
          }
          if (shiftIndex) { i = shiftIndex; }
        }
        var hash = [hashName, hashContent.replace(blockQuoteRegExp, '')];
        slices.push(hash);
      } else {
        // Plain variable
        slices.push(part);
      }
    }
    return slices;
  },
  stringToBlocks: function stringToBlocks(string) {
    var blocks = [];
    var i;
    var j;
    if (!string) { return []; }
    var stringBlocks = string.split(/({{[^{^}]*}})/);
    for (i = 0; i < stringBlocks.length; i += 1) {
      var block = stringBlocks[i];
      if (block === '') { continue; }
      if (block.indexOf('{{') < 0) {
        blocks.push({
          type: 'plain',
          content: block,
        });
      } else {
        if (block.indexOf('{/') >= 0) {
          continue;
        }
        block = block
          .replace(/{{([#/])*([ ])*/, '{{$1')
          .replace(/([ ])*}}/, '}}');
        if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
          // Simple variable
          blocks.push({
            type: 'variable',
            contextName: block.replace(/[{}]/g, ''),
          });
          continue;
        }
        // Helpers
        var helperSlices = Template7Utils.helperToSlices(block);
        var helperName = helperSlices[0];
        var isPartial = helperName === '>';
        var helperContext = [];
        var helperHash = {};
        for (j = 1; j < helperSlices.length; j += 1) {
          var slice = helperSlices[j];
          if (Array.isArray(slice)) {
            // Hash
            helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
          } else {
            helperContext.push(slice);
          }
        }

        if (block.indexOf('{#') >= 0) {
          // Condition/Helper
          var helperContent = '';
          var elseContent = '';
          var toSkip = 0;
          var shiftIndex = (void 0);
          var foundClosed = false;
          var foundElse = false;
          var depth = 0;
          for (j = i + 1; j < stringBlocks.length; j += 1) {
            if (stringBlocks[j].indexOf('{{#') >= 0) {
              depth += 1;
            }
            if (stringBlocks[j].indexOf('{{/') >= 0) {
              depth -= 1;
            }
            if (stringBlocks[j].indexOf(("{{#" + helperName)) >= 0) {
              helperContent += stringBlocks[j];
              if (foundElse) { elseContent += stringBlocks[j]; }
              toSkip += 1;
            } else if (stringBlocks[j].indexOf(("{{/" + helperName)) >= 0) {
              if (toSkip > 0) {
                toSkip -= 1;
                helperContent += stringBlocks[j];
                if (foundElse) { elseContent += stringBlocks[j]; }
              } else {
                shiftIndex = j;
                foundClosed = true;
                break;
              }
            } else if (stringBlocks[j].indexOf('else') >= 0 && depth === 0) {
              foundElse = true;
            } else {
              if (!foundElse) { helperContent += stringBlocks[j]; }
              if (foundElse) { elseContent += stringBlocks[j]; }
            }
          }
          if (foundClosed) {
            if (shiftIndex) { i = shiftIndex; }
            if (helperName === 'raw') {
              blocks.push({
                type: 'plain',
                content: helperContent,
              });
            } else {
              blocks.push({
                type: 'helper',
                helperName: helperName,
                contextName: helperContext,
                content: helperContent,
                inverseContent: elseContent,
                hash: helperHash,
              });
            }
          }
        } else if (block.indexOf(' ') > 0) {
          if (isPartial) {
            helperName = '_partial';
            if (helperContext[0]) {
              if (helperContext[0].indexOf('[') === 0) { helperContext[0] = helperContext[0].replace(/[[\]]/g, ''); }
              else { helperContext[0] = "\"" + (helperContext[0].replace(/"|'/g, '')) + "\""; }
            }
          }
          blocks.push({
            type: 'helper',
            helperName: helperName,
            contextName: helperContext,
            hash: helperHash,
          });
        }
      }
    }
    return blocks;
  },
  parseJsVariable: function parseJsVariable(expression, replace, object) {
    return expression.split(/([+ \-*/^])/g).map(function (part) {
      if (part.indexOf(replace) < 0) { return part; }
      if (!object) { return JSON.stringify(''); }
      var variable = object;
      if (part.indexOf((replace + ".")) >= 0) {
        part.split((replace + "."))[1].split('.').forEach(function (partName) {
          if (partName in variable) { variable = variable[partName]; }
          else { variable = undefined; }
        });
      }
      if (typeof variable === 'string') {
        variable = JSON.stringify(variable);
      }
      if (variable === undefined) { variable = 'undefined'; }
      return variable;
    }).join('');
  },
  parseJsParents: function parseJsParents(expression, parents) {
    return expression.split(/([+ \-*^])/g).map(function (part) {
      if (part.indexOf('../') < 0) { return part; }
      if (!parents || parents.length === 0) { return JSON.stringify(''); }
      var levelsUp = part.split('../').length - 1;
      var parentData = levelsUp > parents.length ? parents[parents.length - 1] : parents[levelsUp - 1];

      var variable = parentData;
      var parentPart = part.replace(/..\//g, '');
      parentPart.split('.').forEach(function (partName) {
        if (variable[partName]) { variable = variable[partName]; }
        else { variable = 'undefined'; }
      });
      return JSON.stringify(variable);
    }).join('');
  },
  getCompileVar: function getCompileVar(name, ctx, data) {
    if ( data === void 0 ) data = 'data_1';

    var variable = ctx;
    var parts;
    var levelsUp = 0;
    var newDepth;
    if (name.indexOf('../') === 0) {
      levelsUp = name.split('../').length - 1;
      newDepth = variable.split('_')[1] - levelsUp;
      variable = "ctx_" + (newDepth >= 1 ? newDepth : 1);
      parts = name.split('../')[levelsUp].split('.');
    } else if (name.indexOf('@global') === 0) {
      variable = 'Template7.global';
      parts = name.split('@global.')[1].split('.');
    } else if (name.indexOf('@root') === 0) {
      variable = 'root';
      parts = name.split('@root.')[1].split('.');
    } else {
      parts = name.split('.');
    }
    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i];
      if (part.indexOf('@') === 0) {
        var dataLevel = data.split('_')[1];
        if (levelsUp > 0) {
          dataLevel = newDepth;
        }
        if (i > 0) {
          variable += "[(data_" + dataLevel + " && data_" + dataLevel + "." + (part.replace('@', '')) + ")]";
        } else {
          variable = "(data_" + dataLevel + " && data_" + dataLevel + "." + (part.replace('@', '')) + ")";
        }
      } else if (Number.isFinite ? Number.isFinite(part) : Template7Context.isFinite(part)) {
        variable += "[" + part + "]";
      } else if (part === 'this' || part.indexOf('this.') >= 0 || part.indexOf('this[') >= 0 || part.indexOf('this(') >= 0) {
        variable = part.replace('this', ctx);
      } else {
        variable += "." + part;
      }
    }
    return variable;
  },
  getCompiledArguments: function getCompiledArguments(contextArray, ctx, data) {
    var arr = [];
    for (var i = 0; i < contextArray.length; i += 1) {
      if (/^['"]/.test(contextArray[i])) { arr.push(contextArray[i]); }
      else if (/^(true|false|\d+)$/.test(contextArray[i])) { arr.push(contextArray[i]); }
      else {
        arr.push(Template7Utils.getCompileVar(contextArray[i], ctx, data));
      }
    }

    return arr.join(', ');
  },
};

/* eslint no-eval: "off" */
var Template7Helpers = {
  _partial: function _partial(partialName, options) {
    var ctx = this;
    var p = Template7Class.partials[partialName];
    if (!p || (p && !p.template)) { return ''; }
    if (!p.compiled) {
      p.compiled = new Template7Class(p.template).compile();
    }
    Object.keys(options.hash).forEach(function (hashName) {
      ctx[hashName] = options.hash[hashName];
    });
    return p.compiled(ctx, options.data, options.root);
  },
  escape: function escape(context) {
    if (typeof context !== 'string') {
      throw new Error('Template7: Passed context to "escape" helper should be a string');
    }
    return Template7Utils.escape(context);
  },
  if: function if$1(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  unless: function unless(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (!ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  each: function each(context, options) {
    var ctx = context;
    var ret = '';
    var i = 0;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (Array.isArray(ctx)) {
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
      for (i = 0; i < ctx.length; i += 1) {
        ret += options.fn(ctx[i], { first: i === 0, last: i === ctx.length - 1, index: i });
      }
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
    } else {
      // eslint-disable-next-line
      for (var key in ctx) {
        i += 1;
        ret += options.fn(ctx[key], { key: key });
      }
    }
    if (i > 0) { return ret; }
    return options.inverse(this);
  },
  with: function with$1(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = context.call(this); }
    return options.fn(ctx);
  },
  join: function join(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    return ctx.join(options.hash.delimiter || options.hash.delimeter);
  },
  js: function js(expression, options) {
    var data = options.data;
    var func;
    var execute = expression;
    ('index first last key').split(' ').forEach(function (prop) {
      if (typeof data[prop] !== 'undefined') {
        var re1 = new RegExp(("this.@" + prop), 'g');
        var re2 = new RegExp(("@" + prop), 'g');
        execute = execute
          .replace(re1, JSON.stringify(data[prop]))
          .replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = "(function(){" + execute + "})";
    } else {
      func = "(function(){return (" + execute + ")})";
    }
    return eval(func).call(this);
  },
  js_if: function js_if(expression, options) {
    var data = options.data;
    var func;
    var execute = expression;
    ('index first last key').split(' ').forEach(function (prop) {
      if (typeof data[prop] !== 'undefined') {
        var re1 = new RegExp(("this.@" + prop), 'g');
        var re2 = new RegExp(("@" + prop), 'g');
        execute = execute
          .replace(re1, JSON.stringify(data[prop]))
          .replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = "(function(){" + execute + "})";
    } else {
      func = "(function(){return (" + execute + ")})";
    }
    var condition = eval(func).call(this);
    if (condition) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
};
Template7Helpers.js_compare = Template7Helpers.js_if;

var Template7Options = {};
var Template7Partials = {};

var Template7Class = function Template7Class(template) {
  var t = this;
  t.template = template;
};

var staticAccessors = { options: { configurable: true },partials: { configurable: true },helpers: { configurable: true } };
Template7Class.prototype.compile = function compile (template, depth) {
    if ( template === void 0 ) template = this.template;
    if ( depth === void 0 ) depth = 1;

  var t = this;
  if (t.compiled) { return t.compiled; }

  if (typeof template !== 'string') {
    throw new Error('Template7: Template must be a string');
  }
  var stringToBlocks = Template7Utils.stringToBlocks;
    var getCompileVar = Template7Utils.getCompileVar;
    var getCompiledArguments = Template7Utils.getCompiledArguments;

  var blocks = stringToBlocks(template);
  var ctx = "ctx_" + depth;
  var data = "data_" + depth;
  if (blocks.length === 0) {
    return function empty() { return ''; };
  }

  function getCompileFn(block, newDepth) {
    if (block.content) { return t.compile(block.content, newDepth); }
    return function empty() { return ''; };
  }
  function getCompileInverse(block, newDepth) {
    if (block.inverseContent) { return t.compile(block.inverseContent, newDepth); }
    return function empty() { return ''; };
  }

  var resultString = '';
  if (depth === 1) {
    resultString += "(function (" + ctx + ", " + data + ", root) {\n";
  } else {
    resultString += "(function (" + ctx + ", " + data + ") {\n";
  }
  if (depth === 1) {
    resultString += 'function isArray(arr){return Array.isArray(arr);}\n';
    resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
    resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
    resultString += 'root = root || ctx_1 || {};\n';
  }
  resultString += 'var r = \'\';\n';
  var i;
  for (i = 0; i < blocks.length; i += 1) {
    var block = blocks[i];
    // Plain block
    if (block.type === 'plain') {
      // eslint-disable-next-line
      resultString += "r +='" + ((block.content).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'')) + "';";
      continue;
    }
    var variable = (void 0);
    var compiledArguments = (void 0);
    // Variable block
    if (block.type === 'variable') {
      variable = getCompileVar(block.contextName, ctx, data);
      resultString += "r += c(" + variable + ", " + ctx + ");";
    }
    // Helpers block
    if (block.type === 'helper') {
      var parents = (void 0);
      if (ctx !== 'ctx_1') {
        var level = ctx.split('_')[1];
        var parentsString = "ctx_" + (level - 1);
        for (var j = level - 2; j >= 1; j -= 1) {
          parentsString += ", ctx_" + j;
        }
        parents = "[" + parentsString + "]";
      } else {
        parents = "[" + ctx + "]";
      }
      var dynamicHelper = (void 0);
      if (block.helperName.indexOf('[') === 0) {
        block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ''), ctx, data);
        dynamicHelper = true;
      }
      if (dynamicHelper || block.helperName in Template7Helpers) {
        compiledArguments = getCompiledArguments(block.contextName, ctx, data);
        resultString += "r += (Template7Helpers" + (dynamicHelper ? ("[" + (block.helperName) + "]") : ("." + (block.helperName))) + ").call(" + ctx + ", " + (compiledArguments && ((compiledArguments + ", "))) + "{hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
      } else if (block.contextName.length > 0) {
        throw new Error(("Template7: Missing helper: \"" + (block.helperName) + "\""));
      } else {
        variable = getCompileVar(block.helperName, ctx, data);
        resultString += "if (" + variable + ") {";
        resultString += "if (isArray(" + variable + ")) {";
        resultString += "r += (Template7Helpers.each).call(" + ctx + ", " + variable + ", {hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
        resultString += '}else {';
        resultString += "r += (Template7Helpers.with).call(" + ctx + ", " + variable + ", {hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
        resultString += '}}';
      }
    }
  }
  resultString += '\nreturn r;})';

  if (depth === 1) {
    // eslint-disable-next-line
    t.compiled = eval(resultString);
    return t.compiled;
  }
  return resultString;
};
staticAccessors.options.get = function () {
  return Template7Options;
};
staticAccessors.partials.get = function () {
  return Template7Partials;
};
staticAccessors.helpers.get = function () {
  return Template7Helpers;
};

Object.defineProperties( Template7Class, staticAccessors );

function Template7() {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var template = args[0];
  var data = args[1];
  if (args.length === 2) {
    var instance = new Template7Class(template);
    var rendered = instance.compile()(data);
    instance = null;
    return (rendered);
  }
  return new Template7Class(template);
}
Template7.registerHelper = function registerHelper(name, fn) {
  Template7Class.helpers[name] = fn;
};
Template7.unregisterHelper = function unregisterHelper(name) {
  Template7Class.helpers[name] = undefined;
  delete Template7Class.helpers[name];
};
Template7.registerPartial = function registerPartial(name, template) {
  Template7Class.partials[name] = { template: template };
};
Template7.unregisterPartial = function unregisterPartial(name) {
  if (Template7Class.partials[name]) {
    Template7Class.partials[name] = undefined;
    delete Template7Class.partials[name];
  }
};
Template7.compile = function compile(template, options) {
  var instance = new Template7Class(template, options);
  return instance.compile();
};

Template7.options = Template7Class.options;
Template7.helpers = Template7Class.helpers;
Template7.partials = Template7Class.partials;

return Template7;

})));

//# sourceMappingURL=template7.js.map

/**
 * Загрузочный скрипт приложения
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект главного скрипта
 *
 * @type {object}
 */
var lemurro = {};
/**
 * Запуск ядра
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.start = function () {
    // Инициализация роутера
    lemurro.router = new Navigo(location.protocol + '//' + location.host, app.config.router.useHash, app.config.router.hash);

    // Подключаем маршруты
    lemurro.router.on(app.routes.pages);

    // Маршрут не найден
    lemurro.router.notFound(app.routes.notFound);

    // Подключаем хуки
    lemurro.router.hooks({
        after: function () {
            if (app.started) {
                lemurro._loadPage();
            } else {
                lemurro.init();
            }
        }
    });

    // Запускаем роутер
    lemurro.router.resolve();
};
/**
 * Инициализация ядра
 *
 * @version 13.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.init = function () {
    /**
     * ИД сессии
     *
     * @type {string}
     */
    lemurro.sessionID = '';

    /**
     * Информация о пользователе
     *
     * @type {object}
     */
    lemurro.userinfo = {};

    /**
     * Инициализируем плагин LightAjax
     *
     * @type {object}
     */
    lemurro.lightajax = new LightAjax({
        callbackAlert: function (title, message) {
            swal(title, message, 'error');
        },
        ajax         : {
            beforeSend: function (xhr, settings) {
                if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                    xhr.setRequestHeader('X-SESSION-ID', lemurro.sessionID);
                    xhr.setRequestHeader('X-UTC-OFFSET', moment().utcOffset());
                }
            }
        }
    });

    // Ловим js-ошибки
    lemurro._bindJSerrors();

    // Инициализируем форму входа
    lemurro._initAuthForm();

    // Подключим Template7 хелперы
    lemurro._t7helperDecimal();
    lemurro._t7helperLocalTime();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        lemurro.sessionID = value;
        lemurro.auth.check();
    });

    // Достанем из локального хранилища ИД прошлой сессии, если есть
    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            $('#js-user-return').removeClass('d-none');
        }
    });
};
/**
 * Подключим Inputmask
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindInputmask = function () {
    $('#js-page').find('.js-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': element.attr('data-mask')
        }).mask(element);
    });
};
/**
 * Событие отправки javascript-ошибки при возникновении
 *
 * @version 15.11.2018
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
     * @version 15.11.2018
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

        new Image().src = app.config.apiUrl + 'jserrors?msg=' + encodeURIComponent(msg) + '&file=' + encodeURIComponent(file) + '&line=' + encodeURIComponent(line) + '&col=' + encodeURIComponent(col) + '&err=' + encodeURIComponent(errString);
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
 * Подключим Select2
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindSelect2 = function () {
    $('#js-page').find('.js-select2').each(function () {
        $(this).select2({
            language   : 'ru',
            placeholder: 'Выберите из списка'
        });
    });
};
/**
 * Подключим jQuery.TableFilter
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindTableFilter = function () {
    $('#js-page').find('.tablefilter').TableFilter();
};
/**
 * Инициируем форму входа
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._initAuthForm = function () {
    var authForm  = $('#js-auth');
    var getForm   = $('#js-auth__get-form');
    var checkForm = $('#js-auth__check-form');
    var authType  = app.config.auth.type;
    var strings   = app.config.auth.strings[authType];

    getForm.find('.js-auth__auth-id').html(strings.getForm.inputLabel);
    getForm.find('input[name="auth_id"]').addClass(strings.getForm.inputClass);

    checkForm.find('.js-auth__auth-code').html(strings.checkForm.inputLabel);
    checkForm.find('.js-auth__repeat').html(strings.checkForm.repeatMessage);

    authForm.find('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });

    authForm.find('.js-phone-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '+7 (999) 999-99-99'
        }).mask(element);
    });
};
/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._loadPage = function () {
    var pageFile = location.protocol + '//' + location.host + '/' + app.page.name + '.html';

    document.title = app.page.title + ' | ' + app.config.title;

    // Сбросим активность со всех ссылок
    $('header').find('.js-link').each(function () {
        var link = $(this);

        link.removeClass(link.attr('data-active-class'));
    });

    $('#js-page').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        $('header').find('.js-link__' + app.page.name).each(function () {
            var link = $(this);

            link.addClass(link.attr('data-active-class'));
        });

        // Обновление ссылок маршрутизатора
        lemurro.router.updatePageLinks();

        lemurro._bindInputmask();
        lemurro._bindSelect2();
        lemurro._bindTableFilter();

        if (!isEmpty(app.page.onLoad)) {
            app.page.onLoad();
        }
    });
};
/**
 * Хелпер для Template7: lemurrodecimal (lemurro.helper.decimal)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperDecimal = function () {
    Template7.registerHelper('lemurrodecimal', function (value, precision) {
        return lemurro.helper.decimal(value, precision);
    });
};
/**
 * Хелпер для Template7: lemurrolocaltime (lemurro.helper.localTime)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperLocalTime = function () {
    Template7.registerHelper('lemurrolocaltime', function (datetime, format) {
        return lemurro.helper.localTime(datetime, format);
    });
};
/**
 * Покажем форму входа
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        document.title = app.config.title;

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
            lemurro.router.navigate('/403');
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
 * Получим информацию о пользователе
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._getUser = function () {
    lemurro.lightajax.get(false, app.config.apiUrl + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.lightajax.preloader('hide');

            lemurro.userinfo = result.data;

            lemurro.auth._success();
        }
    });
};
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
 * Проверка сессии и загрузка данных о пользователе прошли успешно
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._success = function () {
    var body = $('body');

    // Установим идентификатор пользователя в верхнем меню
    $('.js-user__auth-id').text(lemurro.userinfo.auth_id);

    // Если пользователь админ, включим все возможности
    if (lemurro.userinfo.admin) {
        body.find('.js-role').removeClass('d-none');
    } else {
        for (var pageID in lemurro.userinfo.roles) {
            if (lemurro.userinfo.roles.hasOwnProperty(pageID)) {
                for (var i in lemurro.userinfo.roles[pageID]) {
                    if (lemurro.userinfo.roles[pageID].hasOwnProperty(i)) {
                        var access = lemurro.userinfo.roles[pageID][i];

                        body.find('.js-role__' + pageID + '--' + access).removeClass('d-none');
                    }
                }
            }
        }
    }

    // Приложение успешно стартовало
    app.started = true;

    // Скрываем более ненужный оверлей прелоадера
    $('#js-preloader-overlay').hide();

    // Запустим инициализацию приложения
    app.init();

    // Загрузим страницу определённую маршрутизатором
    lemurro._loadPage();
};
/**
 * Проверка сессии
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.auth._getUser();
        }
    });
};
/**
 * Проверка введенного кода
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    lemurro.lightajax.post(true, app.config.apiUrl + 'auth/code', {
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
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.getCode = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'auth/code', {
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
 * @param {string|float} value     Строка с дробным числом или число
 * @param {integer}      precision Точность результата (по умолчанию: 2)
 *
 * @return {float}
 *
 * @version 07.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.decimal = function (value, precision) {
    if (value === undefined) {
        return 0;
    }

    if (precision === undefined || typeof precision !== 'number') {
        precision = 2;
    }

    if (typeof value === 'number') {
        return parseFloat(value.toFixed(precision));
    } else {
        value = value.replace(/ /g, '');
        value = value.replace(/,/g, '.');

        value = parseFloat(value);

        if (isNaN(value)) {
            return 0;
        }

        return parseFloat(value.toFixed(precision));
    }
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
 * Преобразование серверного времени в локальное и возврат строки указанного формата
 *
 * @param {string} datetime Дата и время в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
 * @param {string} format   Возвращаемый формат (Moment.js)
 *
 * @version 13.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.localTime = function (datetime, format) {
    if (isEmpty(datetime) || isEmpty(format)) {
        return datetime;
    } else {
        return moment.utc(datetime).local().format(format);
    }
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
 * Работа с пользователями
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.users = {};

/**
 * Инициализация
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.init = function () {
    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.users._templates = {
        roles: Template7.compile($('#js-tpl-user__roles').html())
    };

    lemurro.users._initRoles();
    users.init();
};
/**
 * Нарисуем форму выбора прав доступа
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users._initRoles = function () {
    var container = $('#js-user__roles');
    var userRoles = app.config.userRoles;

    for (var keyList in userRoles.list) {
        var role   = userRoles.list[keyList];
        var access = [];


        for (var keyAccess in role.access) {
            var code = role.access[keyAccess];
            var name = (userRoles.guideAccess.hasOwnProperty(code) ? userRoles.guideAccess[code] : '!unknown');

            access.push({
                code: code,
                name: name
            });
        }

        container.append(lemurro.users._templates.roles({
            roleName : role.name,
            roleTitle: role.title,
            access   : access
        }));
    }
};
/**
 * Редактирование
 *
 * @param {integer}  id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, app.config.apiUrl + 'users/' + id, {}, function (result) {
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
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.getData = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'users', {}, function (result) {
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
 * Получение отмеченных ролей пользователя
 *
 * @param {jQuery} form Элемент формы
 *
 * @return {object}
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.getRoles = function (form) {
    var roles = {};

    form.find('.js-role:checked').each(function () {
        var elem = $(this);
        var role = elem.attr('data-role');

        if (role === 'admin') {
            roles.admin = true;
        } else {
            if (!roles.hasOwnProperty(role)) {
                roles[role] = [];
            }

            roles[role].push(elem.attr('data-access'));
        }
    });

    if (roles.hasOwnProperty('admin')) {
        roles = {admin: true};
    }

    return roles;
};
/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.insert = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'users', {
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
 * @version 15.11.2018
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
            lemurro.lightajax.post(true, app.config.apiUrl + 'users/login_by_user', {
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
 * @version 15.11.2018
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
            lemurro.lightajax.post(true, app.config.apiUrl + 'users/' + id + '/remove', {}, function (result) {
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
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.save = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'users/' + data.id, {
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
 * Установка ролей пользователя (отметка checkbox)
 *
 * @param {jQuery} form  Элемент формы
 * @param {object} roles Список ролей пользователя
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.setRoles = function (form, roles) {
    form.find('.js-role').prop('checked', false);

    for (var role in roles) {
        if (role === 'admin') {
            form.find('.js-role[data-role="admin"]').prop('checked', true);
        } else {
            for (var i in roles[role]) {
                form.find('.js-role[data-role="' + role + '"][data-access="' + roles[role][i] + '"]').prop('checked', true);
            }
        }
    }
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
/**
 * Операции со справочниками
 *
 * @version 06.12.2018
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
 * @param {string} pageName Суффикс файла html: guide_[pageName].html
 * @param {string} jsClass  js-класс справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function (pageName, jsClass) {
    /**
     * Имя справочника
     *
     * @type {string}
     */
    lemurro.guide._name = pageName;

    /**
     * Класс справочника
     *
     * @type {string}
     */
    lemurro.guide._class = jsClass;

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide._templates = {};

    // Загрузим справочник
    lemurro.guide._load();
};
/**
 * Список элементов справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'guide/' + lemurro.guide._name, {}, function (result) {
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
                    html += lemurro.guide._templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }

            if (
                !isEmpty(lemurro.guide._class)
                &&
                window.hasOwnProperty(lemurro.guide._class)
                &&
                window[lemurro.guide._class].hasOwnProperty('init')
            ) {
                window[lemurro.guide._class].init();
            }
        }
    });
};
/**
 * Загрузка справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._load = function () {
    var page     = $('#js-page');
    var pageFile = location.protocol + '//' + location.host + '/guide_' + lemurro.guide._name + '.html';

    page.find('.js-guide__title').html(app.page.title);

    // Сбросим активность со всех ссылок
    page.find('.js-guide-link').each(function () {
        var link = $(this);

        link.removeClass(link.attr('data-active-class'));
    });

    page.find('.js-guide__content').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        page.find('.js-guide-link__' + lemurro.guide._name).each(function () {
            var link = $(this);

            link.addClass(link.attr('data-active-class'));
        });

        // Скомпилируем шаблоны
        lemurro.guide._templates = {
            item: Template7.compile($('#js-tpl-guide__item').html())
        };

        // Получим данные справочника
        lemurro.guide._getData();
    });
};
/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.edit = function (id, callback) {
    lemurro.lightajax.get(true, app.config.apiUrl + 'guide/' + lemurro.guide._name + '/' + id, {}, function (result) {
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
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'guide/' + lemurro.guide._name, {
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
 * @version 06.12.2018
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
            lemurro.lightajax.post(true, app.config.apiUrl + 'guide/' + lemurro.guide._name + '/' + id + '/remove', {}, function (result) {
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
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.save = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'guide/' + lemurro.guide._name + '/' + data.id, {
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
 * Работа с файлами
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.file = {};

/**
 * Инициализация
 *
 * @param {string} classFile Селектор элемента файлов
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.init = function (classFile) {
    lemurro.file._config();

    /**
     * Селектор элемента файлов
     *
     * @type {string}
     */
    if (isEmpty(classFile)) {
        lemurro.file._classFile = 'js-files__file';
    } else {
        lemurro.file._classFile = classFile;
    }
};
/**
 * Настройка плагина simple-ajax-uploader
 *
 * @version 10.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file._config = function () {
    ss.uploadSetup({
        name          : 'uploadfile',
        multiple      : true,
        multipleSelect: true,
        multipart     : true,
        hoverClass    : 'hover',
        focusClass    : 'focus',
        responseType  : 'json',
        customHeaders : {
            'X-SESSION-ID': lemurro.sessionID,
            'X-UTC-OFFSET': moment().utcOffset()
        }
    });
};
/**
 * Подключение загрузчика файлов
 *
 * @param {jQuery}   btn      jQuery-объект указывающий на кнопку к которой привязать загрузчик
 * @param {function} callback Функция, вызываемая после успешной загрузки файла
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.bindUpload = function (btn, callback) {
    var btnContent = btn.html();

    new ss.SimpleUpload({
        button    : btn,
        url       : app.config.apiUrl + 'file/upload',
        onSubmit  : function () {
            btn.html('<i class="fas fa-spinner fa-pulse"></i> Загрузка...').prop('disabled', true); // change button text to "Uploading..."
        },
        onComplete: function (filename, result) {
            btn.html(btnContent).prop('disabled', false);

            if (!result) {
                swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');

                return false;
            }

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                if (!isEmpty(callback)) {
                    callback(result.data.id, 'add', filename);
                }

                swal('Выполнено', 'Файл <strong>' + filename + '</strong>' + ' успешно загружен', 'success');
            }
        },
        onError   : function (filename) {
            btn.html(btnContent).prop('disabled', false);

            swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');
        }
    });
};
/**
 * Скачивание файла
 *
 * @param {integer} fileid ИД файла
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.download = function (fileid) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'file/download/prepare', {
        fileid: fileid
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            window.open(app.config.apiUrl + 'file/download/run?token=' + encodeURI(result.data.token), 'Download file');
        }
    });
};
/**
 * Удаление файла
 *
 * @param {integer}  fileid   ИД файла
 * @param {function} callback Функция, вызываемая после успешного удаления файла
 *
 * @version 14.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.remove = function (fileid, callback) {
    var elemFile = $('.' + lemurro.file._classFile + '[data-file-id="' + fileid + '"]');
    var name     = elemFile.find('.js-name').text();

    swal({
        title            : 'Удаление файла',
        html             : 'Вы хотите удалить файл "' + name + '"?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            if (elemFile.attr('data-file-action') === 'add') {
                elemFile.remove();
            } else {
                elemFile.attr('data-file-action', 'remove').hide();
            }

            if (!isEmpty(callback)) {
                callback(fileid, name);
            }
        }
    });
};