(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},To={duration:.5,overwrite:!1,delay:0},_u,en,wt,ni=1e8,gt=1/ni,oc=Math.PI*2,Xp=oc/4,Yp=0,Gf=Math.sqrt,qp=Math.cos,$p=Math.sin,Jt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},gu=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},An=function(e){return e!==!1},vu=function(){return typeof window<"u"},Xo=function(e){return Ut(e)||Jt(e)},Wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Kp=/random\([^)]+\)/g,Zp=/,\s*/g,th=/(?:-?\.?\d|\.)+/gi,Xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yf=/[+-]=-?[.\d]+/,jp=/[^,'"\[\]\s]+/gi,Jp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,di,ac,xu,Yn={},Ha={},qf,$f=function(e){return(Ha=Is(e,Yn))&&Dn},Su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bo=function(e,t){return!t&&console.warn(e)},Kf=function(e,t){return e&&(Yn[e]=t)&&Ha&&(Ha[e]=t)||Yn},Ao=function(){return 0},Qp={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},em={suppressEvents:!0},Mu={},ir=[],lc={},Zf,zn={},fl={},nh=30,wa=[],Eu="",yu=function(e){var t=e[0],n,i;if(yi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wa.length;i--&&!wa[i].targetTest(t););n=wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new vd(e[i],n)))||e.splice(i,1);return e},Br=function(e){return e._gsap||yu(ii(e))[0]._gsap},jf=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():gu(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=ir.length,t=ir.slice(0),n,i;for(lc={},ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tu=function(e){return!!(e._initted||e._startAt||e.add)},Jf=function(e,t,n,i){ir.length&&!en&&Va(),e.render(t,n,!!(en&&t<0&&Tu(e))),ir.length&&!en&&Va()},Qf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jp).length<2?t:Jt(e)?e.trim():e},ed=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Is=function(e,t){for(var n in t)e[n]=t[n];return e},ih=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fo=function(e){var t=e.parent||Pt,n=e.keyframes?nm(ln(e.keyframes)):qn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},im=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},td=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cc=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(Aa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},sm=function r(e){return!e||e._ts&&r(e.parent)},rh=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rl=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rl(e),n._dirty||zr(n,e)),e},nd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wa(e.rawTime(),t),(!t._dur||ko(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},_i=function(e,t,n,i){return t.parent&&ur(t),t._start=Ct((zi(n)?n:!n&&Xa(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Pt?Jn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),td(e,t,"_first","_last",e._sort?"_start":0),Xa(t)||(e._recent=t),i||nd(e,t),e._ts<0&&sl(e,e._tTime),e},id=function(e,t){return(Yn.ScrollTrigger||Su("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},rd=function(e,t,n,i,s){if(Au(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zf!==Hn.frame)return ir.push(e),e._lazy=[s,i],1},om=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Xa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},am=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&om(e)&&!(!e._initted&&Xa(e))||(e._ts<0||e._dp._ts<0)&&!Xa(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ko(0,e._tDur,t),u=Ns(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ns(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||en||i||e._zTime===gt||!t&&e._zTime){if(!e._initted&&rd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&cc(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ur(e,1),!n&&!en&&(Vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fs=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&sl(e,e._tTime=e._tDur*a),e.parent&&rl(e),n||zr(e.parent,e),e},sh=function(e){return e instanceof Tn?zr(e):Fs(e,e._dur)},cm={_start:0,endTime:Ao,totalDuration:Ao},Jn=function r(e,t,n){var i=e.labels,s=e._recent||cm,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},po=function(e,t,n){var i=zi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},gr=function(e,t){return e||e===0?t(e):t},ko=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Jt(e)||!(t=Jp.exec(e))?"":t[1]},um=function(e,t,n){return gr(n,function(i){return ko(e,t,i)})},uc=[].slice,sd=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==di},hm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||sd(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Jt(e)&&!n&&(ac||!Os())?uc.call((t||xu).querySelectorAll(e),0):ln(e)?hm(e,n):sd(e)?uc.call(e,0):e?[e]:[]},hc=function(e){return e=ii(e)[0]||bo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?bo("Invalid scope")||xu.createElement("div"):e)}},od=function(e){return e.sort(function(){return .5-Math.random()})},ad=function(e){if(Ut(e))return e;var t=yi(e)?e:{each:e},n=kr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,y,T,x,A,w,b,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ni])[1],!S){for(b=-ni;b<(b=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:i%S,y=S===ni?0:l?g*h/S-.5:i/S|0,b=0,C=ni,w=0;w<g;w++)T=w%S-p,x=y-(w/S|0),m[w]=A=c?Math.abs(c==="y"?x:T):Gf(T*T+x*x),A>b&&(b=A),A<C&&(C=A);i==="random"&&od(m),m.max=b-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=on(t.amount||t.each)||0,n=n&&g<0?Tm(n):n}return g=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(g):g)*m.v)+m.u}},fc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:on(n))}},ld=function(e,t){var n=ln(e),i,s;return!n&&yi(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!zi(e[0]))&&(i*=i)):e=fc(e.increment)),gr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||zi(o)?u:u+on(o)}:fc(e))},cd=function(e,t,n,i){return gr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},dm=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},pm=function(e,t,n){return hd(e,t,0,1,n)},ud=function(e,t,n){return gr(n,function(i){return e[~~t(i)]})},mm=function r(e,t,n){var i=t-e;return ln(e)?ud(e,r(0,e.length),t):gr(n,function(s){return(i+(s-e)%i)%i+e})},_m=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?ud(e,r(0,e.length-1),t):gr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},wo=function(e){return e.replace(Kp,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Zp);return cd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},hd=function(e,t,n,i,s){var o=t-e,a=i-n;return gr(s,function(l){return n+((l-e)/o*a||0)})},gm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Jt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Is(ln(e)?[]:{},e));if(!u){for(l in t)bu.call(a,e,l,"get",t[l]);s=function(_){return Cu(_,a)||(o?e.p:e)}}}return gr(n,s)},oh=function(e,t,n){var i=e.labels,s=ni,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Vn=function(e,t,n){var i=e.vars,s=i[t],o=wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ir.length&&Va(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},ro=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&Vn(e,"onInterrupt"),e},Ms,fd=[],dd=function(e){if(e)if(e=!e.name&&e.default||e,vu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ao,render:Cu,add:bu,kill:Im,modifier:Um,rawVars:0},o={targetTest:0,get:0,getSetter:Ru,aliases:{},register:0};if(Os(),e!==i){if(zn[t])return;qn(i,qn(Ga(e,s),o)),Is(i.prototype,Is(s,Ga(e,o))),zn[i.prop=t]=i,e.targetTest&&(wa.push(i),Mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kf(t,i),e.register&&e.register(Dn,i,Rn)}else fd.push(e)},Et=255,so={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},pd=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&Et,e&Et]:0:so.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),so[e])i=so[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(th),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=dl(l+1/3,s,o),i[1]=dl(l,s,o),i[2]=dl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Xf),n&&i.length<4&&(i[3]=1),i}else i=e.match(th)||so.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Et,o=i[1]/Et,a=i[2]/Et,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},md=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(s){var o=s.match(Ss)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ah=function(e,t,n){var i="",s=(e+i).match(rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=pd(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=md(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rr,"1").split(Ss),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(rr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in so)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),vm=/hsl[a]?\(/,_d=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=vm.test(t),e[1]=ah(e[1],n),e[0]=ah(e[0],n,md(e[1])),!0},Ro,Hn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,y=m===!0,T,x,A,w;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,T=A-o,(T>0||y)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=T+(T>=s?0:s-T),x=1),y||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](A,f,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){qf&&(!ac&&vu()&&(di=ac=window,xu=di.document||{},Yn.gsap=Dn,(di.gsapVersions||(di.gsapVersions=[])).push(Dn.version),$f(Ha||di.GreenSockGlobals||!di.gsap&&di||{}),fd.forEach(dd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ro=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ro=0,c=Ao},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var T=p?function(x,A,w,b){m(x,A,w,b),h.remove(T)}:m;return h.remove(m),a[y?"unshift":"push"](T),Os(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Os=function(){return!Ro&&Hn.wake()},st={},xm=/^[\d.\-M][\d.\-,\s]/,Sm=/["']/g,Mm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Sm,"").trim():+c,i=l.substr(a+1).trim();return t},Em=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ym=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Mm(t[1])]:Em(e).split(",").map(Qf)):st._CE&&xm.test(e)?st._CE("",e):n},Tm=function(e){return function(t){return 1-e(1-t)}},kr=function(e,t){return e&&(Ut(e)?e:st[e]||ym(e))||t},Zr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){st[a]=Yn[a]=s,st[o=a.toLowerCase()]=n;for(var l in s)st[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[a+"."+l]=s[l]}),s},gd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/oc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*$p((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:gd(a);return s=oc/s,l.config=function(c,u){return r(e,c,u)},l},ml=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gd(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Zr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Zr("Elastic",pl("in"),pl("out"),pl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Zr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Zr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Zr("Circ",function(r){return-(Gf(1-r*r)-1)});Zr("Sine",function(r){return r===1?1:-qp(r*Xp)+1});Zr("Back",ml("in"),ml("out"),ml());st.SteppedEase=st.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((i*ko(0,o,a)|0)+s)*n}}};To.ease=st["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Eu+=r+","+r+"Params,"});var vd=function(e,t){this.id=Yp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jf,this.set=t?t.getSetter:Ru},Co=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fs(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Ro||Hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sl(this,n),!s._dp||s.parent||nd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ko(-Math.abs(this._delay),a,s),i!==!1),rl(this),rm(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Os(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==gt,o;if(s)for(this._tTime-=gt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+gt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_i(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=em);var i=en;return en=n,Tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-gt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ut(n)?n:ed,l=function(){var u=i.then;i.then=null,s&&s(),Ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ro(this)},r})();qn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){Vf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Pt&&_i(n.parent||Pt,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&id(Di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return po(0,arguments,this),this},t.from=function(i,s,o){return po(1,arguments,this),this},t.fromTo=function(i,s,o,a){return po(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,Jn(this,o),1),this},t.call=function(i,s,o){return _i(this,kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new kt(i,o,Jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,fo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,fo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,y,T,x,A,w,b;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,T=this._ts,p=!T,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ct(u%m),u===l?(g=this._repeat,f=c):(A=Ct(u/m),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Ns(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),w&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var C=w&&A&1,S=C===(w&&g&1);if(g<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ct(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=lm(this,Ct(a),Ct(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Vn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-gt);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||en&&Tu(d)),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=v?-gt:gt);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-gt)._zTime=f>=a?1:-1,this._ts))return this._start=x,rl(this),this.render(i,s,o);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(zi(s)||(s=Jn(this,s,i)),!(i instanceof Co)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Ut(i))i=kt.delayedCall(0,i);else return this}return this!==i?_i(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&il(this,i),i===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=kt.delayedCall(0,s||Ao,o);return a.data="isPause",this._hasPause=1,_i(this,a,Jn(this,i))},t.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ji!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=zi(s),u;l;)l instanceof kt?tm(l._targets,a)&&(c?(!Ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=kt.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Fs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,qn({startAt:{time:Jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),oh(this,Jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),oh(this,Jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_i(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(Jf(Pt,Wa(i,Pt)),Zf=Hn.frame),Hn.frame>=nh){nh+=Wn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Wn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e})(Co);qn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bm=function(e,t,n,i,s,o,a){var l=new Rn(this._pt,e,t,0,1,yd,null,s),c=0,u=0,h,f,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=wo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(hl)||[];h=hl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ts(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=hl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yf.test(i)||p)&&(l.e=0),this._pt=l,l},bu=function(e,t,n,i,s,o,a,l,c,u){Ut(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ut(h)?c?Pm:Md:wu,_;if(Jt(i)&&(~i.indexOf("random(")&&(i=wo(i)),i.charAt(1)==="="&&(_=Ts(f,i)+(on(f)||0),(_||_===0)&&(i=_))),!u||f!==i||dc)return!isNaN(f*i)&&i!==""?(_=new Rn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Lm:Ed,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Su(t,i),bm.call(this,e,t,f,i,d,l||Wn.stringFilter,c))},Am=function(e,t,n,i,s){if(Ut(e)&&(e=mo(e,s,t,n,i)),!yi(e)||e.style&&e.nodeType||ln(e)||Wf(e))return Jt(e)?mo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=mo(e[a],s,t,n,i);return o},xd=function(e,t,n,i,s,o){var a,l,c,u;if(zn[e]&&(a=new zn[e]).init(s,a.rawVars?t[e]:Am(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ji,dc,Au=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!_u,x=e.timeline,A=i.easeReverse||h,w,b,C,S,v,L,N,k,W,q,O,H,B;if(x&&(!f||!s)&&(s="none"),e._ease=kr(s,To.ease),e._rEase=A&&(kr(A)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(k=m[0]?Br(m[0]).harness:0,H=k&&i[k.prop],w=Ga(i,Mu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Aa:Qp),g._lazy=0),o){if(ur(e._startAt=kt.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!a&&!d)&&e._startAt.revert(Aa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),C=qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&An(l),immediateRender:a,stagger:0,parent:p},w),H&&(C[k.prop]=H),ur(e._startAt=kt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(Aa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,b=0;b<m.length;b++){if(v=m[b],N=v._gsap||yu(m)[b]._gsap,e._ptLookup[b]=q={},lc[N.id]&&ir.length&&Va(),O=y===m?b:y.indexOf(v),k&&(W=new k).init(v,H||w,e,O,y)!==!1&&(e._pt=S=new Rn(e._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Q){q[Q]=S}),W.priority&&(L=1)),!k||H)for(C in w)zn[C]&&(W=xd(C,w,e,O,v,y))?W.priority&&(L=1):q[C]=S=bu.call(e,v,C,"get",w[C],O,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(v,e._op[b]),T&&e._pt&&(Ji=e,Pt.killTweensOf(v,q,e.globalTime(t)),B=!e.parent,Ji=0),e._pt&&l&&(lc[N.id]=1)}L&&Td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&x.render(ni,!0,!0)},wm=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return dc=1,e.vars[t]="+=0",Au(e,a),dc=0,l?bo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Nt(n)+on(h.e)),h.b&&(h.b=u.s+on(h.b))},Rm=function(e,t){var n=e[0]?Br(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Is({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Cm=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},mo=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?wo(e):e},Ya=Eu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Sd={};wn(Ya+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Sd[r]=1});Ya=Ya.split(",");var kt=(function(r){Vf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:fo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Pt,y=(ln(n)||Wf(n)?zi(n[0]):"length"in i)?[n]:ii(n),T,x,A,w,b,C,S,v;if(a._targets=y.length?yu(y):bo("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Xo(c)||Xo(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Tn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:y}),T.kill(),T.parent=T._dp=Di(a),T._start=0,f||Xo(c)||Xo(u)){if(w=y.length,S=f&&ad(f),yi(f))for(b in f)~Ya.indexOf(b)&&(v||(v={}),v[b]=f[b]);for(x=0;x<w;x++)A=Ga(i,Sd),A.stagger=0,L&&(A.easeReverse=L),v&&Is(A,v),C=y[x],A.duration=+mo(c,Di(a),x,C,y),A.delay=(+mo(u,Di(a),x,C,y)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),T.to(C,A,S?S(x,C,y):0),T._ease=st.none;T.duration()?c=u=0:a.timeline=0}else if(_){fo(qn(T.vars.defaults,{ease:"none"})),T._ease=kr(_.ease||i.ease||"none");var N=0,k,W,q;if(ln(_))_.forEach(function(O){return T.to(y,O,">")}),T.duration();else{A={};for(b in _)b==="ease"||b==="easeEach"||Cm(b,_[b],A,_.easeEach);for(b in A)for(k=A[b].sort(function(O,H){return O.t-H.t}),N=0,x=0;x<k.length;x++)W=k[x],q={ease:W.e,duration:(W.t-(x?k[x-1].t:0))/100*c},q[b]=W.v,T.to(y,q,N),N+=q.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return d===!0&&!_u&&(Ji=Di(a),Pt.killTweensOf(y),Ji=0),_i(p,Di(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ct(p._time)&&An(h)&&sm(Di(a))&&p.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),m&&id(Di(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-gt&&!u?l:i<gt?0:i,f,d,_,g,m,p,y,T;if(!c)am(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ct(h%g),h===l?(_=this._repeat,f=c):(m=Ct(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=Ns(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ct(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(rd(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var A=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(x?-1:1)/A:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Vn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&cc(this,i,s,o),Vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&cc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ro||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Au(this,c),u=this._ease(c/this._dur),wm(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(sl(this,0),this.parent||td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ro(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ji&&Ji.vars.overwrite!==!0)._first||ro(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&im(a,l))return s==="all"&&(this._pt=0),ro(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(g={},wn(s,function(y){return g[y]=1}),s=g),s=Rm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&il(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ro(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return po(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return po(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Pt.killTweensOf(i,s,o)},e})(Co);qn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new Tn,t=uc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var wu=function(e,t,n){return e[t]=n},Md=function(e,t,n){return e[t](n)},Pm=function(e,t,n,i){return e[t](i.fp,n)},Dm=function(e,t,n){return e.setAttribute(t,n)},Ru=function(e,t){return Ut(e[t])?Md:gu(e[t])&&e.setAttribute?Dm:wu},Ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Lm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Um=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Im=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Nm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Td=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ed,this.d=l||this,this.set=c||wu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Nm,this.m=n,this.mt=s,this.tween=i},r})();wn(Eu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Mu[r]=1});Yn.TweenMax=Yn.TweenLite=kt;Yn.TimelineLite=Yn.TimelineMax=Tn;Pt=new Tn({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=_d;var Hr=[],Ra={},Fm=[],lh=0,Om=0,_l=function(e){return(Ra[e]||Fm).map(function(t){return t()})},Po=function(){var e=Date.now(),t=[];e-lh>2&&(_l("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),_l("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),lh=e,_l("matchMedia"))},bd=(function(){function r(t,n){this.selector=n&&hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Om++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=hc(s)),wt=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Po):a.removeEventListener("change",Po)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),Bm=(function(){function r(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){yi(n)||(n={matches:n});var o=new bd(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Po):l.addEventListener("change",Po),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dd(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ii(e)[0]);var s=Br(e||{}).get,o=n?ed:Qf;return n==="native"&&(n=""),e&&(t?o((zn[t]&&zn[t].get||s)(e,t,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return Dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=zn[t],a=Br(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ms._pt=0,h.init(e,n?u+n:u,Ms,0,[e]),h.render(1,h),Ms._pt&&Cu(1,Ms)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,To.ease)),ih(To,e||{})},config:function(e){return ih(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!Yn[a]&&bo(t+" effect requires "+a+" plugin.")}),fl[t]=function(a,l,c){return n(ii(a),qn(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(fl[t](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=kr(t)},parseEase:function(e,t){return arguments.length?kr(e,t):st},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&_i(n,i,i._start-i._delay),i=s;return _i(Pt,n,0),n},context:function(e,t){return e?new bd(e,t):wt},matchMedia:function(e){return new Bm(e)},matchMediaRefresh:function(){return Hr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Po()},addEventListener:function(e,t){var n=Ra[e]||(Ra[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ra[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mm,wrapYoyo:_m,distribute:ad,random:cd,snap:ld,normalize:pm,getUnit:on,clamp:um,splitColor:pd,toArray:ii,selector:hc,mapRange:hd,pipe:fm,unitize:dm,interpolate:gm,shuffle:od},install:$f,effects:fl,ticker:Hn,updateRoot:Tn.updateRoot,plugins:zn,globalTimeline:Pt,core:{PropTween:Rn,globals:Kf,Tween:kt,Timeline:Tn,Animation:Co,getCache:Br,_removeLinkedListItem:il,reverting:function(){return en},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return _u=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qa[r]=kt[r]});Hn.add(Tn.updateRoot);Ms=qa.to({},{duration:0});var zm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},km=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=zm(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},gl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}km(a,s)}}}},Dn=qa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gl("roundProps",fc),gl("modifiers"),gl("snap",ld))||qa;kt.version=Tn.version=Dn.version="3.15.1";qf=1;vu()&&Os();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;var ch,Qi,bs,Pu,Ir,uh,Du,Hm=function(){return typeof window<"u"},ki={},wr=180/Math.PI,As=Math.PI/180,Qr=Math.atan2,hh=1e8,Lu=/([A-Z])/g,Vm=/(left|right|width|margin|padding|x)/i,Gm=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ym=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ad=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$m=function(e,t,n){return e.style[t]=n},Km=function(e,t,n){return e.style.setProperty(t,n)},Zm=function(e,t,n){return e._gsap[t]=n},jm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jm=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Qm=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Cn=Dt+"Origin",e_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Li(i,a)}):this.tfm[e]=o.x?o[e]:Li(i,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},Rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},t_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Du(),(!s||!s.isStart)&&!n[Dt]&&(Rd(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cd=function(e,t){var n={target:e,props:[],revert:t_,save:e_};return e._gsap||Dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Pd,mc=function(e,t){var n=Qi.createElementNS?Qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qi.createElement(e);return n&&n.style?n:Qi.createElement(e)},Gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Bs(t)||t,1)||""},fh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(e,t,n){var i=t||Ir,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(fh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?fh[o]:"")+e},_c=function(){Hm()&&window.document&&(ch=window,Qi=ch.document,bs=Qi.documentElement,Ir=mc("div")||{style:{}},mc("div"),Dt=Bs(Dt),Cn=Dt+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pd=!!Bs("perspective"),Du=Dn.core.reverting,Pu=1)},dh=function(e){var t=e.ownerSVGElement,n=mc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),bs.removeChild(n),s},ph=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dd=function(e){var t,n;try{t=e.getBBox()}catch{t=dh(e),n=1}return t&&(t.width||t.height)||n||(t=dh(e)),t&&!t.width&&!t.x&&!t.y?{x:+ph(e,["x","cx","x1"])||0,y:+ph(e,["y","cy","y1"])||0,width:0,height:0}:t},Ld=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dd(e))},hr=function(e,t){if(t){var n=e.style,i;t in ki&&t!==Cn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},er=function(e,t,n,i,s,o){var a=new Rn(e._pt,t,n,0,1,o?wd:Ad);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},mh={deg:1,rad:1,turn:1},n_={grid:1,flex:1},fr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ir.style,l=Vm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||mh[i]||mh[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Ld(e),(d||o==="%")&&(ki[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Nt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Qi||!g.appendChild)&&(g=Qi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Hn.time&&!m.uncache)return Nt(s/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,_=e[u],y?e.style[t]=y:hr(e,t)}else(d||o==="%")&&!n_[Gn(g,"display")]&&(a.position=Gn(e,"position")),g===e&&(a.position="static"),g.appendChild(Ir),_=Ir[u],g.removeChild(Ir),a.position="absolute";return l&&d&&(m=Br(g),m.time=Hn.time,m.width=g[u]),Nt(f?_*s/h:_&&s?h/_*s:0)},Li=function(e,t,n,i){var s;return Pu||_c(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?(s=Lo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ka(Gn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$a[t]&&$a[t](e,t,n)||Gn(e,t)||jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(e,t,s,n)+n:s},i_=function(e,t,n,i){if(!n||n==="none"){var s=Bs(t,e,1),o=s&&Gn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gn(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,yd),l=0,c=0,u,h,f,d,_,g,m,p,y,T,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Gn(e,t)||i,g?e.style[t]=g:hr(e,t)),u=[n,i],_d(u),n=u[0],i=u[1],f=n.match(Ss)||[],A=i.match(Ss)||[],A.length){for(;h=Ss.exec(i);)m=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ts(d,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=Ss.lastIndex-T.length,T||(T=T||Wn.units[t]||x,l===i.length&&(i+=T,a.e+=T)),x!==T&&(d=fr(e,t,g,T)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?wd:Ad;return Yf.test(i)&&(a.e=0),this._pt=a,a},_h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},r_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_h[n]||n,t[1]=_h[i]||i,t.join(" ")},s_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ki[a]&&(l=1,a=a==="transformOrigin"?Cn:Dt),hr(n,a);l&&(hr(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),o.uncache=1,Rd(i)))}},$a={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,s_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Do=[1,0,0,1,0,0],Ud={},Id=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gh=function(e){var t=Gn(e,Dt);return Id(t)?Do:t.substr(7).match(Xf).map(Nt)},Uu=function(e,t){var n=e._gsap||Br(e),i=e.style,s=gh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Do:s):(s===Do&&!e.offsetParent&&e!==bs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,bs.appendChild(e)),s=gh(e),l?i.display=l:hr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Uu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],T=t.split(" "),x=parseFloat(T[0])||0,A=parseFloat(T[1])||0,w,b,C,S;n?l!==Do&&(b=d*m-_*g)&&(C=x*(m/b)+A*(-g/b)+(g*y-m*p)/b,S=x*(-_/b)+A*(d/b)-(d*y-_*p)/b,x=C,A=S):(w=Dd(e),x=w.x+(~T[0].indexOf("%")?x/100*w.width:x),A=w.y+(~(T[1]||T[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=x-c,y=A-u,a.xOffset=h+(p*d+y*g)-p,a.yOffset=f+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Cn]="0px 0px",o&&(er(o,a,"xOrigin",c,x),er(o,a,"yOrigin",u,A),er(o,a,"xOffset",h,a.xOffset),er(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},Lo=function(e,t){var n=e._gsap||new vd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gn(e,Cn)||"0",u,h,f,d,_,g,m,p,y,T,x,A,w,b,C,S,v,L,N,k,W,q,O,H,B,Q,P,oe,De,Ye,$,re;return u=h=f=g=m=p=y=T=x=0,d=_=1,n.svg=!!(e.getCTM&&Ld(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),b=Uu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),gc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Do&&(L=b[0],N=b[1],k=b[2],W=b[3],u=q=b[4],h=O=b[5],b.length===6?(d=Math.sqrt(L*L+N*N),_=Math.sqrt(W*W+k*k),g=L||N?Qr(N,L)*wr:0,y=k||W?Qr(k,W)*wr+g:0,y&&(_*=Math.abs(Math.cos(y*As))),n.svg&&(u-=A-(A*L+w*k),h-=w-(A*N+w*W))):(re=b[6],Ye=b[7],P=b[8],oe=b[9],De=b[10],$=b[11],u=b[12],h=b[13],f=b[14],C=Qr(re,De),m=C*wr,C&&(S=Math.cos(-C),v=Math.sin(-C),H=q*S+P*v,B=O*S+oe*v,Q=re*S+De*v,P=q*-v+P*S,oe=O*-v+oe*S,De=re*-v+De*S,$=Ye*-v+$*S,q=H,O=B,re=Q),C=Qr(-k,De),p=C*wr,C&&(S=Math.cos(-C),v=Math.sin(-C),H=L*S-P*v,B=N*S-oe*v,Q=k*S-De*v,$=W*v+$*S,L=H,N=B,k=Q),C=Qr(N,L),g=C*wr,C&&(S=Math.cos(C),v=Math.sin(C),H=L*S+N*v,B=q*S+O*v,N=N*S-L*v,O=O*S-q*v,L=H,q=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Nt(Math.sqrt(L*L+N*N+k*k)),_=Nt(Math.sqrt(O*O+re*re)),C=Qr(q,O),y=Math.abs(C)>2e-4?C*wr:0,x=$?1/($<0?-$:$):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Id(Gn(e,Dt)),H&&e.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Nt(d),n.scaleY=Nt(_),n.rotation=Nt(g)+a,n.rotationX=Nt(m)+a,n.rotationY=Nt(p)+a,n.skewX=y+a,n.skewY=T+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=Ka(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?a_:Pd?Nd:o_,n.uncache=0,n},Ka=function(e){return(e=e.split(" "))[0]+" "+e[1]},vl=function(e,t,n){var i=on(t);return Nt(parseFloat(t)+parseFloat(fr(e,"x",n+"px",i)))+i},o_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nd(e,t)},xr="0deg",Zs="0px",Sr=") ",Nd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,T=n.zOrigin,x="",A=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==xr||u!==xr)){var w=parseFloat(u)*As,b=Math.sin(w),C=Math.cos(w),S;w=parseFloat(h)*As,S=Math.cos(w),o=vl(y,o,b*S*-T),a=vl(y,a,-Math.sin(w)*-T),l=vl(y,l,C*S*-T+T)}m!==Zs&&(x+="perspective("+m+Sr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||o!==Zs||a!==Zs||l!==Zs)&&(x+=l!==Zs||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==xr&&(x+="rotate("+c+Sr),u!==xr&&(x+="rotateY("+u+Sr),h!==xr&&(x+="rotateX("+h+Sr),(f!==xr||d!==xr)&&(x+="skew("+f+", "+d+Sr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Sr),y.style[Dt]=x||"translate(0, 0)"},a_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,T=parseFloat(o),x=parseFloat(a),A,w,b,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,A=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=As,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Nt(A),w=Nt(w),b=Nt(b),C=Nt(C)):(A=h,C=f,w=b=0),(T&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(T=fr(d,"x",o,"px"),x=fr(d,"y",a,"px")),(_||g||m||p)&&(T=Nt(T+_-(_*A+g*b)+m),x=Nt(x+g-(_*w+g*C)+p)),(i||s)&&(S=d.getBBox(),T=Nt(T+i/100*S.width),x=Nt(x+s/100*S.height)),S="matrix("+A+","+w+","+b+","+C+","+T+","+x+")",d.setAttribute("transform",S),y&&(d.style[Dt]=S)},l_=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?wr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*hh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*hh)%o-~~(c/o)*o)),e._pt=f=new Rn(e._pt,t,n,i,c,Wm),f.e=u,f.u="deg",e._props.push(n),f},vh=function(e,t){for(var n in t)e[n]=t[n];return e},c_=function(e,t,n){var i=vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Lo(n,1),hr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Lo(n,1),o[Dt]=c);for(l in ki)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),_=on(u),h=d!==_?fr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Rn(e._pt,a,l,h,f-h,pc),e._pt.u=_||0,e._props.push(l));vh(a,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});$a[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Li(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Fd={name:"css",register:_c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,y,T,x,A,w,b,C,S;Pu||_c(),this.styles=this.styles||Cd(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(zn[g]&&xd(g,t,n,i,e,s)))){if(d=typeof u,_=$a[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=wo(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(m=on(c),p=on(u),p?m!==p&&(c=fr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Jt(c)&&~c.indexOf("random(")&&(c=wo(c)),on(c+"")||c==="auto"||(c+=Wn.units[g]||on(Li(e,g))||""),(c+"").charAt(1)==="="&&(c=Li(e,g))):c=Li(e,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in vi&&(g==="autoAlpha"&&(f===1&&Li(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),er(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in ki,T){if(this.styles.save(g),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Gn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Gn(e,"perspective"),v?e.style.perspective=v:hr(e,"perspective")}h=parseFloat(u)}if(x||(A=e._gsap,A.renderTransform&&!t.parseTransform||Lo(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new Rn(this._pt,a,Dt,0,1,A.renderTransform,A,0,-1),x.dep=1),g==="scale")this._pt=new Rn(this._pt,A,"scaleY",A.scaleY,(y?Ts(A.scaleY,y+h):h)-A.scaleY||0,pc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Cn,0,a[Cn]),u=r_(u),A.svg?gc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&er(this,A,"zOrigin",A.zOrigin,p),er(this,a,g,Ka(c),Ka(u)));continue}else if(g==="svgOrigin"){gc(e,u,1,w,0,this);continue}else if(g in Ud){l_(this,A,g,f,y?Ts(f,y+u):u);continue}else if(g==="smoothOrigin"){er(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){c_(this,u,e);continue}}else g in a||(g=Bs(g)||g);if(T||(h||h===0)&&(f||f===0)&&!Gm.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=on(u)||(g in Wn.units?Wn.units[g]:m),m!==p&&(f=fr(e,g,c,p)),this._pt=new Rn(this._pt,T?A:a,g,f,(y?Ts(f,y+h):h)-f,!T&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?qm:pc),this._pt.u=p||0,T&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=Ym):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Xm);else if(g in a)i_.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,s);else if(g!=="parseTransform"){Su(g,u);continue}T||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}b&&Td(this)},render:function(e,t){if(t.tween._time||!Du())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:vi,getSetter:function(e,t,n){var i=vi[t];return i&&i.indexOf(",")<0&&(t=i),t in ki&&t!==Cn&&(e._gsap.x||Li(e,"x"))?n&&uh===n?t==="scale"?jm:Zm:(uh=n||{})&&(t==="scale"?Jm:Qm):e.style&&!gu(e.style[t])?$m:~t.indexOf("-")?Km:Ru(e,t)},core:{_removeProperty:hr,_getMatrix:Uu}};Dn.utils.checkPrefix=Bs;Dn.core.getStyleSaver=Cd;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){ki[s]=1});wn(e,function(s){Wn.units[s]="deg",Ud[s]=1}),vi[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Dn.registerPlugin(Fd);var _n=Dn.registerPlugin(Fd)||Dn;_n.core.Tween;function u_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function h_(r,e,t){return e&&u_(r.prototype,e),r}var Qt,Ca,bn,tr,nr,ws,Od,Rr,Rs,Bd,Ii,li,zd,kd=function(){return Qt||typeof window<"u"&&(Qt=window.gsap)&&Qt.registerPlugin&&Qt},Hd=1,Es=[],nt=[],Mi=[],_o=Date.now,vc=function(e,t){return t},f_=function(){var e=Rs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Mi),nt=n,Mi=i,vc=function(o,a){return t[o](a)}},sr=function(e,t){return~Mi.indexOf(e)&&Mi[Mi.indexOf(e)+1][t]},go=function(e){return!!~Bd.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yo="scrollLeft",qo="scrollTop",xc=function(){return Ii&&Ii.isPressed||nt.cache++},Za=function(e,t){var n=function i(s){if(s||s===0){Hd&&bn.history.scrollRestoration!=="manual"&&(bn.history.scrollRestoration="manual");var o=Ii&&Ii.isPressed;s=i.v=Math.round(s)||(Ii&&Ii.iOS?1:0),e(s),i.cacheID=nt.cache,o&&vc("ss",s)}else(t||nt.cache!==i.cacheID||vc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Yo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Za(function(r){return arguments.length?bn.scrollTo(r,Yt.sc()):bn.pageXOffset||tr[Yo]||nr[Yo]||ws[Yo]||0})},Yt={s:qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Za(function(r){return arguments.length?bn.scrollTo(Sn.sc(),r):bn.pageYOffset||tr[qo]||nr[qo]||ws[qo]||0})},yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Qt.utils.toArray)(e)[0]||(typeof e=="string"&&Qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},d_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},dr=function(e,t){var n=t.s,i=t.sc;go(e)&&(e=tr.scrollingElement||nr);var s=nt.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||dn(e,"scroll",xc);var a=nt[s+o],l=a||(nt[s+o]=Za(sr(e,n),!0)||(go(e)?i:Za(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Qt.getProperty(e,"scrollBehavior")==="smooth"),l},Sc=function(e,t,n){var i=e,s=e,o=_o(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=_o();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=_o();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},js=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Vd=function(){Rs=Qt.core.globals().ScrollTrigger,Rs&&Rs.core&&f_()},Gd=function(e){return Qt=e||kd(),!Ca&&Qt&&typeof document<"u"&&document.body&&(bn=window,tr=document,nr=tr.documentElement,ws=tr.body,Bd=[bn,tr,nr,ws],Qt.utils.clamp,zd=Qt.core.context||function(){},Rr="onpointerenter"in ws?"pointer":"mouse",Od=Ot.isTouch=bn.matchMedia&&bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Ot.eventTypes=("ontouchstart"in nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hd=0},500),Ca=1),Rs||Vd(),Ca};Sn.op=Yt;nt.cache=0;var Ot=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ca||Gd(Qt)||console.warn("Please gsap.registerPlugin(Observer)"),Rs||Vd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,T=n.onPress,x=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,S=n.onChangeX,v=n.onChangeY,L=n.onChange,N=n.onToggleX,k=n.onToggleY,W=n.onHover,q=n.onHoverEnd,O=n.onMove,H=n.ignoreCheck,B=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,oe=n.onWheel,De=n.onEnable,Ye=n.onDisable,$=n.onClick,re=n.scrollSpeed,_e=n.capture,se=n.allowClicks,Se=n.lockAxis,He=n.onLockAxis;this.target=a=yn(a)||nr,this.vars=n,d&&(d=Qt.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,re=re||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bn.getComputedStyle(ws).lineHeight)||22);var Ne,Ze,Qe,ye,U,ct,We,V=this,ve=0,qe=0,Ce=n.passive||!u&&n.passive!==!1,we=dr(a,Sn),dt=dr(a,Yt),R=we(),M=dt(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",j=go(a),Z=a.ownerDocument||tr,K=[0,0,0],Me=[0,0,0],ae=0,Te=function(){return ae=_o()},ue=function(Re,$e){return(V.event=Re)&&d&&d_(Re.target,d)||$e&&z&&Re.pointerType!=="touch"||H&&H(Re,$e)},te=function(){V._vx.reset(),V._vy.reset(),Ze.pause(),h&&h(V)},de=function(){var Re=V.deltaX=xh(K),$e=V.deltaY=xh(Me),he=Math.abs(Re)>=i,Ge=Math.abs($e)>=i;L&&(he||Ge)&&L(V,Re,$e,K,Me),he&&(A&&V.deltaX>0&&A(V),w&&V.deltaX<0&&w(V),S&&S(V),N&&V.deltaX<0!=ve<0&&N(V),ve=V.deltaX,K[0]=K[1]=K[2]=0),Ge&&(C&&V.deltaY>0&&C(V),b&&V.deltaY<0&&b(V),v&&v(V),k&&V.deltaY<0!=qe<0&&k(V),qe=V.deltaY,Me[0]=Me[1]=Me[2]=0),(ye||Qe)&&(O&&O(V),Qe&&(m&&Qe===1&&m(V),y&&y(V),Qe=0),ye=!1),ct&&!(ct=!1)&&He&&He(V),U&&(oe(V),U=!1),Ne=0},Fe=function(Re,$e,he){K[he]+=Re,Me[he]+=$e,V._vx.update(Re),V._vy.update($e),c?Ne||(Ne=requestAnimationFrame(de)):de()},Ue=function(Re,$e){Se&&!We&&(V.axis=We=Math.abs(Re)>Math.abs($e)?"x":"y",ct=!0),We!=="y"&&(K[2]+=Re,V._vx.update(Re,!0)),We!=="x"&&(Me[2]+=$e,V._vy.update($e,!0)),c?Ne||(Ne=requestAnimationFrame(de)):de()},le=function(Re){if(!ue(Re,1)){Re=js(Re,u);var $e=Re.clientX,he=Re.clientY,Ge=$e-V.x,Pe=he-V.y,Ve=V.isDragging;V.x=$e,V.y=he,(Ve||(Ge||Pe)&&(Math.abs(V.startX-$e)>=s||Math.abs(V.startY-he)>=s))&&(Qe||(Qe=Ve?2:1),Ve||(V.isDragging=!0),Ue(Ge,Pe))}},Be=V.onPress=function(ge){ue(ge,1)||ge&&ge.button||(V.axis=We=null,Ze.pause(),V.isPressed=!0,ge=js(ge),ve=qe=0,V.startX=V.x=ge.clientX,V.startY=V.y=ge.clientY,V._vx.reset(),V._vy.reset(),dn(B?a:Z,li[1],le,Ce,!0),V.deltaX=V.deltaY=0,T&&T(V))},D=V.onRelease=function(ge){if(!ue(ge,1)){fn(B?a:Z,li[1],le,!0);var Re=!isNaN(V.y-V.startY),$e=V.isDragging,he=$e&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=js(ge);!he&&Re&&(V._vx.reset(),V._vy.reset(),u&&se&&Qt.delayedCall(.08,function(){if(_o()-ae>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(Z.createEvent){var Pe=Z.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,bn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Pe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&$e&&!B&&Ze.restart(!0),Qe&&de(),p&&$e&&p(V),x&&x(V,he)}},ce=function(Re){return Re.touches&&Re.touches.length>1&&(V.isGesturing=!0)&&Q(Re,V.isDragging)},ee=function(){return(V.isGesturing=!1)||P(V)},pe=function(Re){if(!ue(Re)){var $e=we(),he=dt();Fe(($e-R)*re,(he-M)*re,1),R=$e,M=he,h&&Ze.restart(!0)}},ne=function(Re){if(!ue(Re)){Re=js(Re,u),oe&&(U=!0);var $e=(Re.deltaMode===1?l:Re.deltaMode===2?bn.innerHeight:1)*_;Fe(Re.deltaX*$e,Re.deltaY*$e,0),h&&!B&&Ze.restart(!0)}},J=function(Re){if(!ue(Re)){var $e=Re.clientX,he=Re.clientY,Ge=$e-V.x,Pe=he-V.y;V.x=$e,V.y=he,ye=!0,h&&Ze.restart(!0),(Ge||Pe)&&Ue(Ge,Pe)}},Ee=function(Re){V.event=Re,W(V)},Oe=function(Re){V.event=Re,q(V)},lt=function(Re){return ue(Re)||js(Re,u)&&$(V)};Ze=V._dc=Qt.delayedCall(f||.25,te).pause(),V.deltaX=V.deltaY=0,V._vx=Sc(0,50,!0),V._vy=Sc(0,50,!0),V.scrollX=we,V.scrollY=dt,V.isDragging=V.isGesturing=V.isPressed=!1,zd(this),V.enable=function(ge){return V.isEnabled||(dn(j?Z:a,"scroll",xc),o.indexOf("scroll")>=0&&dn(j?Z:a,"scroll",pe,Ce,_e),o.indexOf("wheel")>=0&&dn(a,"wheel",ne,Ce,_e),(o.indexOf("touch")>=0&&Od||o.indexOf("pointer")>=0)&&(dn(a,li[0],Be,Ce,_e),dn(Z,li[2],D),dn(Z,li[3],D),se&&dn(a,"click",Te,!0,!0),$&&dn(a,"click",lt),Q&&dn(Z,"gesturestart",ce),P&&dn(Z,"gestureend",ee),W&&dn(a,Rr+"enter",Ee),q&&dn(a,Rr+"leave",Oe),O&&dn(a,Rr+"move",J)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ye=Qe=!1,V._vx.reset(),V._vy.reset(),R=we(),M=dt(),ge&&ge.type&&Be(ge),De&&De(V)),V},V.disable=function(){V.isEnabled&&(Es.filter(function(ge){return ge!==V&&go(ge.target)}).length||fn(j?Z:a,"scroll",xc),V.isPressed&&(V._vx.reset(),V._vy.reset(),fn(B?a:Z,li[1],le,!0)),fn(j?Z:a,"scroll",pe,_e),fn(a,"wheel",ne,_e),fn(a,li[0],Be,_e),fn(Z,li[2],D),fn(Z,li[3],D),fn(a,"click",Te,!0),fn(a,"click",lt),fn(Z,"gesturestart",ce),fn(Z,"gestureend",ee),fn(a,Rr+"enter",Ee),fn(a,Rr+"leave",Oe),fn(a,Rr+"move",J),V.isEnabled=V.isPressed=V.isDragging=!1,Ye&&Ye(V))},V.kill=V.revert=function(){V.disable();var ge=Es.indexOf(V);ge>=0&&Es.splice(ge,1),Ii===V&&(Ii=0)},Es.push(V),B&&go(a)&&(Ii=V),V.enable(g)},h_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ot.version="3.15.1";Ot.create=function(r){return new Ot(r)};Ot.register=Gd;Ot.getAll=function(){return Es.slice()};Ot.getById=function(r){return Es.filter(function(e){return e.vars.id===r})[0]};kd()&&Qt.registerPlugin(Ot);var be,vs,tt,pt,kn,ht,Iu,ja,Uo,vo,oo,$o,rn,ol,Mc,gn,Sh,Mh,xs,Wd,xl,Xd,mn,Ec,Yd,qd,Zi,yc,Nu,Cs,Fu,or,Tc,Sl,Ko=1,sn=Date.now,Ml=sn(),ri=0,ao=0,Eh=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},yh=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},p_=function r(){return ao&&requestAnimationFrame(r)},Th=function(){return ol=1},bh=function(){return ol=0},pi=function(e){return e},lo=function(e){return Math.round(e*1e5)/1e5||0},$d=function(){return typeof window<"u"},Kd=function(){return be||$d()&&(be=window.gsap)&&be.registerPlugin&&be},Yr=function(e){return!!~Iu.indexOf(e)},Zd=function(e){return(e==="Height"?Fu:tt["inner"+e])||kn["client"+e]||ht["client"+e]},jd=function(e){return sr(e,"getBoundingClientRect")||(Yr(e)?function(){return Ia.width=tt.innerWidth,Ia.height=Fu,Ia}:function(){return Ui(e)})},m_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=sr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Zd(s):e["client"+s])||0}},__=function(e,t){return!t||~Mi.indexOf(e)?jd(e):function(){return Ia}},xi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=sr(e,n))?o()-jd(e)()[s]:Yr(e)?(kn[n]||ht[n])-Zd(i):e[n]-e["offset"+i])},Zo=function(e,t){for(var n=0;n<xs.length;n+=3)(!t||~t.indexOf(xs[n+1]))&&e(xs[n],xs[n+1],xs[n+2])},Bn=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},co=function(e){return typeof e=="number"},Cr=function(e){return typeof e=="object"},Js=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},es=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ts=Math.abs,Jd="left",Qd="top",Ou="right",Bu="bottom",Vr="width",Gr="height",xo="Right",So="Left",Mo="Top",Eo="Bottom",zt="padding",Qn="margin",zs="Width",zu="Height",Xt="px",ei=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},g_=function(e){var t=ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ah=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ui=function(e,t){var n=t&&ei(e)[Mc]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ja=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ep=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},v_=function(e){return function(t){return be.utils.snap(ep(e),t)}},ku=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},x_=function(e){return function(t,n){return ku(ep(e))(t,n.direction)}},jo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qo={toggleActions:"play",anticipatePin:0},Qa={top:0,left:0,center:.5,bottom:1,right:1},Pa=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Qa?Qa[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ea=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=pt.createElement("div"),g=Yr(n)||sr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?ht:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,T=y?c:u,x="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Yt?Ou:Bu)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Da(_,0,i,y),_},Da=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+zs]=1,s["border"+a+zs]=0,s[n.p]=t+"px",be.set(e,s)},et=[],bc={},Io,Rh=function(){return sn()-ri>34&&(Io||(Io=requestAnimationFrame(Oi)))},ns=function(){(!mn||!mn.isPressed||mn.startX>ht.clientWidth)&&(nt.cache++,mn?Io||(Io=requestAnimationFrame(Oi)):Oi(),ri||$r("scrollStart"),ri=sn())},El=function(){qd=tt.innerWidth,Yd=tt.innerHeight},uo=function(e){nt.cache++,(e===!0||!rn&&!Xd&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!Ec||qd!==tt.innerWidth||Math.abs(tt.innerHeight-Yd)>tt.innerHeight*.25))&&ja.restart(!0)},qr={},S_=[],tp=function r(){return Zt(Je,"scrollEnd",r)||Nr(!0)},$r=function(e){return qr[e]&&qr[e].map(function(t){return t()})||S_},On=[],np=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},ip=function(){nt.cache++,nt.forEach(function(e){return an(e)&&(e.rec=e())})},Hu=function(e,t){var n;for(gn=0;gn<et.length;gn++)n=et[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));or=!0,t&&np(t),t||$r("revert")},rp=function(e,t){nt.cache++,(t||!vn)&&nt.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(Nu=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},vn,Wr=0,Ch,M_=function(){if(Ch!==Wr){var e=Ch=Wr;requestAnimationFrame(function(){return e===Wr&&Nr(!0)})}},sp=function(){ht.appendChild(Cs),Fu=!mn&&Cs.offsetHeight||tt.innerHeight,ht.removeChild(Cs)},Ph=function(e){return Uo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Nr=function(e,t){if(kn=pt.documentElement,ht=pt.body,Iu=[tt,pt,kn,ht],ri&&!e&&!or){jt(Je,"scrollEnd",tp);return}sp(),vn=Je.isRefreshing=!0,or||ip();var n=$r("refreshInit");Wd&&Je.sort(),t||Hu(),nt.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),or=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Tc=1,Ph(!0),et.forEach(function(i){var s=xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Ph(!1),Tc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),rp(Nu,1),ja.pause(),Wr++,vn=2,Oi(2),et.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=Je.isRefreshing=!1,$r("refresh")},Ac=0,La=1,yo,Oi=function(e){if(e===2||!vn&&!or){Je.isUpdating=!0,yo&&yo.update(0);var t=et.length,n=sn(),i=n-Ml>=50,s=t&&et[0].scroll();if(La=Ac>s?-1:1,vn||(Ac=s),i&&(ri&&!ol&&n-ri>200&&(ri=0,$r("scrollEnd")),oo=Ml,Ml=n),La<0){for(gn=t;gn-- >0;)et[gn]&&et[gn].update(0,i);La=1}else for(gn=0;gn<t;gn++)et[gn]&&et[gn].update(0,i);Je.isUpdating=!1}Io=0},wc=[Jd,Qd,Bu,Ou,Qn+Eo,Qn+xo,Qn+Mo,Qn+So,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ua=wc.concat([Vr,Gr,"boxSizing","max"+zs,"max"+zu,"position",Qn,zt,zt+Mo,zt+xo,zt+Eo,zt+So]),E_=function(e,t,n){Ps(n);var i=e._gsap;if(i.spacerIsNative)Ps(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},yl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=wc.length,o=t.style,a=e.style,l;s--;)l=wc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Bu]=a[Ou]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vr]=Ja(e,Sn)+Xt,o[Gr]=Ja(e,Yt)+Xt,o[zt]=a[Qn]=a[Qd]=a[Jd]="0",Ps(i),a[Vr]=a["max"+zs]=n[Vr],a[Gr]=a["max"+zu]=n[Gr],a[zt]=n[zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},y_=/([A-Z])/g,Ps=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(y_,"-$1").toLowerCase())}},ta=function(e){for(var t=Ua.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ua[s],n[Ua[s]]);return i.t=e,i},T_=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ia={left:0,top:0},Dh=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){an(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Pa("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),co(e))d&&(e=be.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Da(a,n,i,!0);else{an(t)&&(t=t(l));var T=(e||"0").split(" "),x,A,w,b;y=yn(t,l)||ht,x=Ui(y)||{},(!x||!x.left&&!x.top)&&ei(y).display==="none"&&(b=y.style.display,y.style.display="block",x=Ui(y),b?y.style.display=b:y.style.removeProperty("display")),A=Pa(T[0],x[i.d]),w=Pa(T[1]||"0",n),e=x[i.p]-c[i.p]-u+A+s-w,a&&Da(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,Da(o,C,i,S&&C>20||!S&&(h?Math.max(ht[m],kn[m]):o.parentNode[m])<=C+1),h&&(c=Ui(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&y&&(m=Ui(y),d.seek(f),p=Ui(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},b_=/(webkit|moz|length|cssText|inset)/i,Lh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=ei(e);for(o in a)!+o&&!b_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},op=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},na=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Uh=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=op(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Oi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=be.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),Je.isTouch&&jt(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){vs||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ao){this.update=this.refresh=this.kill=pi;return}n=Ah(Bn(n)||co(n)||n.nodeType?{trigger:n}:n,Qo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,T=s.once,x=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Yt,L=!h&&h!==0,N=yn(n.scroller||tt),k=be.core.getCache(N),W=Yr(N),q=("pinType"in n?n.pinType:sr(N,"pinType")||W&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=L&&n.toggleActions.split(" "),B="markers"in n?n.markers:Qo.markers,Q=W?0:parseFloat(ei(N)["border"+v.p2+zs])||0,P=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(P)},De=m_(N,W,v),Ye=__(N,W),$=0,re=0,_e=0,se=dr(N,v),Se,He,Ne,Ze,Qe,ye,U,ct,We,V,ve,qe,Ce,we,dt,R,M,z,j,Z,K,Me,ae,Te,ue,te,de,Fe,Ue,le,Be,D,ce,ee,pe,ne,J,Ee,Oe;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=N,P.scroll=b?b.time.bind(b):se,Ze=se(),or&&se.rec==null&&(se.rec=Ze),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Wd=1,n.refreshPriority===-9999&&(yo=P)),k.tweenScroll=k.tweenScroll||{top:Uh(N,Yt),left:Uh(N,Sn)},P.tweenTo=Se=k.tweenScroll[v.p],P.scrubDuration=function(he){ce=co(he)&&he,ce?D?D.duration(he):D=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),le=0,l||(l=i.vars.id)),x&&((!Cr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ht.style&&be.set(W?[ht,kn]:N,{scrollBehavior:"auto"}),nt.forEach(function(he){return an(he)&&he.target===(W?pt.scrollingElement||kn:N)&&(he.smooth=!1)}),Ne=an(x.snapTo)?x.snapTo:x.snapTo==="labels"?v_(i):x.snapTo==="labelsDirectional"?x_(i):x.directional!==!1?function(he,Ge){return ku(x.snapTo)(he,sn()-re<500?0:Ge.direction)}:be.utils.snap(x.snapTo),ee=x.duration||{min:.1,max:2},ee=Cr(ee)?vo(ee.min,ee.max):vo(ee,ee),pe=be.delayedCall(x.delay||ce/2||.1,function(){var he=se(),Ge=sn()-re<500,Pe=Se.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Pe&&!ol&&$!==he){var Ve=(he-ye)/we,It=i&&!L?i.totalProgress():Ve,it=Ge?0:(It-Be)/(sn()-oo)*1e3||0,yt=be.utils.clamp(-Ve,1-Ve,ts(it/2)*it/.185),Vt=Ve+(x.inertia===!1?0:yt),xt,St,ut=x,Ln=ut.onStart,Tt=ut.onInterrupt,un=ut.onComplete;if(xt=Ne(Vt,P),co(xt)||(xt=Vt),St=Math.max(0,Math.round(ye+xt*we)),he<=U&&he>=ye&&St!==he){if(Pe&&!Pe._initted&&Pe.data<=ts(St-he))return;x.inertia===!1&&(yt=xt-Ve),Se(St,{duration:ee(ts(Math.max(ts(Vt-It),ts(xt-It))*.185/it/.05||0)),ease:x.ease||"power3",data:ts(St-he),onInterrupt:function(){return pe.restart(!0)&&Tt&&es(P,Tt)},onComplete:function(){P.update(),$=se(),i&&!L&&(D?D.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),le=Be=i&&!L?i.totalProgress():P.progress,y&&y(P),un&&es(P,un)}},he,yt*we,St-he-yt*we),Ln&&es(P,Ln,Se.tween)}}else P.isActive&&$!==he&&pe.restart(!0)}).pause()),l&&(bc[l]=P),f=P.trigger=yn(f||d!==!0&&d),Oe=f&&f._gsap&&f._gsap.stRevert,Oe&&(Oe=Oe(P)),d=d===!0?f:yn(d),Bn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&ei(d.parentNode).display==="flex"?!1:zt),P.pin=d,He=be.core.getCache(d),He.spacer?dt=He.pinState:(w&&(w=yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),He.spacerIsNative=!!w,w&&(He.spacerState=ta(w))),He.spacer=z=w||pt.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),He.pinState=dt=ta(d)),n.force3D!==!1&&be.set(d,{force3D:!0}),P.spacer=z=He.spacer,Ue=ei(d),Te=Ue[_+v.os2],Z=be.getProperty(d),K=be.quickSetter(d,v.a,Xt),yl(d,z,Ue),M=ta(d)),B){qe=Cr(B)?Ah(B,wh):wh,V=ea("scroller-start",l,N,v,qe,0),ve=ea("scroller-end",l,N,v,qe,0,V),j=V["offset"+v.op.d2];var lt=yn(sr(N,"content")||N);ct=this.markerStart=ea("start",l,lt,v,qe,j,0,b),We=this.markerEnd=ea("end",l,lt,v,qe,j,0,b),b&&(Ee=be.quickSetter([ct,We],v.a,Xt)),!q&&!(Mi.length&&sr(N,"fixedMarkers")===!0)&&(g_(W?ht:N),be.set([V,ve],{force3D:!0}),te=be.quickSetter(V,v.a,Xt),Fe=be.quickSetter(ve,v.a,Xt))}if(b){var ge=b.vars.onUpdate,Re=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),ge&&ge.apply(b,Re||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(he,Ge){if(!Ge)return P.kill(!0);var Pe=he!==!1||!P.enabled,Ve=rn;Pe!==P.isReverted&&(Pe&&(ne=Math.max(se(),P.scroll.rec||0),_e=P.progress,J=i&&i.progress()),ct&&[ct,We,V,ve].forEach(function(It){return It.style.display=Pe?"none":"block"}),Pe&&(rn=P,P.update(Pe)),d&&(!A||!P.isActive)&&(Pe?E_(d,z,dt):yl(d,z,ei(d),ue)),Pe||P.update(Pe),rn=Ve,P.isReverted=Pe)},P.refresh=function(he,Ge,Pe,Ve){if(!((rn||!P.enabled)&&!Ge)){if(d&&he&&ri){jt(r,"scrollEnd",tp);return}!vn&&oe&&oe(P),rn=P,Se.tween&&!Pe&&(Se.tween.kill(),Se.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var It=De(),it=Ye(),yt=b?b.duration():xi(N,v),Vt=we<=.01||!we,xt=0,St=Ve||0,ut=Cr(Pe)?Pe.end:n.end,Ln=n.endTrigger||f,Tt=Cr(Pe)?Pe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),un=P.pinnedContainer=n.pinnedContainer&&yn(n.pinnedContainer,P),$n=f&&Math.max(0,et.indexOf(P))||0,Gt=$n,Wt,E,F,X,G,I,ie,fe,Ae,xe,Ie,ze,Le;for(B&&Cr(Pe)&&(ze=be.getProperty(V,v.p),Le=be.getProperty(ve,v.p));Gt-- >0;)I=et[Gt],I.end||I.refresh(0,1)||(rn=P),ie=I.pin,ie&&(ie===f||ie===d||ie===un)&&!I.isReverted&&(xe||(xe=[]),xe.unshift(I),I.revert(!0,!0)),I!==et[Gt]&&($n--,Gt--);for(an(Tt)&&(Tt=Tt(P)),Tt=Eh(Tt,"start",P),ye=Dh(Tt,f,It,v,se(),ct,V,P,it,Q,q,yt,b,P._startClamp&&"_startClamp")||(d?-.001:0),an(ut)&&(ut=ut(P)),Bn(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Bn(Tt)?Tt.split(" ")[0]:"")+ut:(xt=Pa(ut.substr(2),It),ut=Bn(Tt)?Tt:(b?be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ye):ye)+xt,Ln=f)),ut=Eh(ut,"end",P),U=Math.max(ye,Dh(ut||(Ln?"100% 0":yt),Ln,It,v,se()+xt,We,ve,P,it,Q,q,yt,b,P._endClamp&&"_endClamp"))||-.001,xt=0,Gt=$n;Gt--;)I=et[Gt]||{},ie=I.pin,ie&&I.start-I._pinPush<=ye&&!b&&I.end>0&&(Wt=I.end-(P._startClamp?Math.max(0,I.start):I.start),(ie===f&&I.start-I._pinPush<ye||ie===un)&&isNaN(Tt)&&(xt+=Wt*(1-I.progress)),ie===d&&(St+=Wt));if(ye+=xt,U+=xt,P._startClamp&&(P._startClamp+=xt),P._endClamp&&!vn&&(P._endClamp=U||-.001,U=Math.min(U,xi(N,v))),we=U-ye||(ye-=.01)&&.001,Vt&&(_e=be.utils.clamp(0,1,be.utils.normalize(ye,U,ne))),P._pinPush=St,ct&&xt&&(Wt={},Wt[v.a]="+="+xt,un&&(Wt[v.p]="-="+se()),be.set([ct,We],Wt)),d&&!(Tc&&P.end>=xi(N,v)))Wt=ei(d),X=v===Yt,F=se(),Me=parseFloat(Z(v.a))+St,!yt&&U>1&&(Ie=(W?pt.scrollingElement||kn:N).style,Ie={style:Ie,value:Ie["overflow"+v.a.toUpperCase()]},W&&ei(ht)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+v.a.toUpperCase()]="scroll")),yl(d,z,Wt),M=ta(d),E=Ui(d,!0),fe=q&&dr(N,X?Sn:Yt)(),_?(ue=[_+v.os2,we+St+Xt],ue.t=z,Gt=_===zt?Ja(d,v)+we+St:0,Gt&&(ue.push(v.d,Gt+Xt),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Gt+Xt)),Ps(ue),un&&et.forEach(function(Xe){Xe.pin===un&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),q&&se(ne)):(Gt=Ja(d,v),Gt&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Gt+Xt)),q&&(G={top:E.top+(X?F-ye:fe)+Xt,left:E.left+(X?fe:F-ye)+Xt,boxSizing:"border-box",position:"fixed"},G[Vr]=G["max"+zs]=Math.ceil(E.width)+Xt,G[Gr]=G["max"+zu]=Math.ceil(E.height)+Xt,G[Qn]=G[Qn+Mo]=G[Qn+xo]=G[Qn+Eo]=G[Qn+So]="0",G[zt]=Wt[zt],G[zt+Mo]=Wt[zt+Mo],G[zt+xo]=Wt[zt+xo],G[zt+Eo]=Wt[zt+Eo],G[zt+So]=Wt[zt+So],R=T_(dt,G,A),vn&&se(0)),i?(Ae=i._initted,xl(1),i.render(i.duration(),!0,!0),ae=Z(v.a)-Me+we+St,de=Math.abs(we-ae)>1,q&&de&&R.splice(R.length-2,2),i.render(0,!0,!0),Ae||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xl(0)):ae=we,Ie&&(Ie.value?Ie.style["overflow"+v.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+v.a));else if(f&&se()&&!b)for(E=f.parentNode;E&&E!==ht;)E._pinOffset&&(ye-=E._pinOffset,U-=E._pinOffset),E=E.parentNode;xe&&xe.forEach(function(Xe){return Xe.revert(!1,!0)}),P.start=ye,P.end=U,Ze=Qe=vn?ne:se(),!b&&!vn&&!or&&(Ze<ne&&se(ne),P.scroll.rec=0),P.revert(!1,!0),re=sn(),pe&&($=-1,pe.restart(!0)),rn=0,i&&L&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Vt||_e!==P.progress||b||g||i&&!i._initted)&&(i&&!L&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ye<-.001&&!_e?be.utils.normalize(ye,U,0):_e,!0),P.progress=Vt||(Ze-ye)/we===_e?0:_e),d&&_&&(z._pinOffset=Math.round(P.progress*ae)),D&&D.invalidate(),isNaN(ze)||(ze-=be.getProperty(V,v.p),Le-=be.getProperty(ve,v.p),na(V,v,ze),na(ct,v,ze-(Ve||0)),na(ve,v,Le),na(We,v,Le-(Ve||0))),Vt&&!vn&&P.update(),u&&!vn&&!Ce&&(Ce=!0,u(P),Ce=!1)}},P.getVelocity=function(){return(se()-Qe)/(sn()-oo)*1e3||0},P.endAnimation=function(){Js(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||Js(i,P.direction<0,1):Js(i,i.reversed()))},P.labelToScroll=function(he){return i&&i.labels&&(ye||P.refresh()||ye)+i.labels[he]/i.duration()*we||0},P.getTrailing=function(he){var Ge=et.indexOf(P),Pe=P.direction>0?et.slice(0,Ge).reverse():et.slice(Ge+1);return(Bn(he)?Pe.filter(function(Ve){return Ve.vars.preventOverlaps===he}):Pe).filter(function(Ve){return P.direction>0?Ve.end<=ye:Ve.start>=U})},P.update=function(he,Ge,Pe){if(!(b&&!Pe&&!he)){var Ve=vn===!0?ne:P.scroll(),It=he?0:(Ve-ye)/we,it=It<0?0:It>1?1:It||0,yt=P.progress,Vt,xt,St,ut,Ln,Tt,un,$n;if(Ge&&(Qe=Ze,Ze=b?se():Ve,x&&(Be=le,le=i&&!L?i.totalProgress():it)),m&&d&&!rn&&!Ko&&ri&&(!it&&ye<Ve+(Ve-Qe)/(sn()-oo)*m?it=1e-4:it===1&&U>Ve+(Ve-Qe)/(sn()-oo)*m&&(it=.9999)),it!==yt&&P.enabled){if(Vt=P.isActive=!!it&&it<1,xt=!!yt&&yt<1,Tt=Vt!==xt,Ln=Tt||!!it!=!!yt,P.direction=it>yt?1:-1,P.progress=it,Ln&&!rn&&(St=it&&!yt?0:it===1?1:yt===1?2:3,L&&(ut=!Tt&&H[St+1]!=="none"&&H[St+1]||H[St],$n=i&&(ut==="complete"||ut==="reset"||ut in i))),S&&(Tt||$n)&&($n||h||!i)&&(an(S)?S(P):P.getTrailing(S).forEach(function(F){return F.endAnimation()})),L||(D&&!rn&&!Ko?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",it,i._tTime/i._tDur):(D.vars.totalProgress=it,D.invalidate().restart())):i&&i.totalProgress(it,!!(rn&&(re||he)))),d){if(he&&_&&(z.style[_+v.os2]=Te),!q)K(lo(Me+ae*it));else if(Ln){if(un=!he&&it>yt&&U+1>Ve&&Ve+1>=xi(N,v),A)if(!he&&(Vt||un)){var Gt=Ui(d,!0),Wt=Ve-ye;Lh(d,ht,Gt.top+(v===Yt?Wt:0)+Xt,Gt.left+(v===Yt?0:Wt)+Xt)}else Lh(d,z);Ps(Vt||un?R:M),de&&it<1&&Vt||K(Me+(it===1&&!un?ae:0))}}x&&!Se.tween&&!rn&&!Ko&&pe.restart(!0),a&&(Tt||T&&it&&(it<1||!Sl))&&Uo(a.targets).forEach(function(F){return F.classList[Vt||T?"add":"remove"](a.className)}),o&&!L&&!he&&o(P),Ln&&!rn?(L&&($n&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(P)),(Tt||!Sl)&&(c&&Tt&&es(P,c),O[St]&&es(P,O[St]),T&&(it===1?P.kill(!1,1):O[St]=0),Tt||(St=it===1?1:3,O[St]&&es(P,O[St]))),C&&!Vt&&Math.abs(P.getVelocity())>(co(C)?C:2500)&&(Js(P.callbackAnimation),D?D.progress(1):Js(i,ut==="reverse"?1:!it,1))):L&&o&&!rn&&o(P)}if(Fe){var E=b?Ve/b.duration()*(b._caScrollDist||0):Ve;te(E+(V._isFlipped?1:0)),Fe(E)}Ee&&Ee(-Ve/b.duration()*(b._caScrollDist||0))}},P.enable=function(he,Ge){P.enabled||(P.enabled=!0,jt(N,"resize",uo),W||jt(N,"scroll",ns),oe&&jt(r,"refreshInit",oe),he!==!1&&(P.progress=_e=0,Ze=Qe=$=se()),Ge!==!1&&P.refresh())},P.getTween=function(he){return he&&Se?Se.tween:D},P.setPositions=function(he,Ge,Pe,Ve){if(b){var It=b.scrollTrigger,it=b.duration(),yt=It.end-It.start;he=It.start+yt*he/it,Ge=It.start+yt*Ge/it}P.refresh(!1,!1,{start:yh(he,Pe&&!!P._startClamp),end:yh(Ge,Pe&&!!P._endClamp)},Ve),P.update()},P.adjustPinSpacing=function(he){if(ue&&he){var Ge=ue.indexOf(v.d)+1;ue[Ge]=parseFloat(ue[Ge])+he+Xt,ue[1]=parseFloat(ue[1])+he+Xt,Ps(ue)}},P.disable=function(he,Ge){if(he!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||D&&D.pause(),ne=0,He&&(He.uncache=1),oe&&Zt(r,"refreshInit",oe),pe&&(pe.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!W)){for(var Pe=et.length;Pe--;)if(et[Pe].scroller===N&&et[Pe]!==P)return;Zt(N,"resize",uo),W||Zt(N,"scroll",ns)}},P.kill=function(he,Ge){P.disable(he,Ge),D&&!Ge&&D.kill(),l&&delete bc[l];var Pe=et.indexOf(P);Pe>=0&&et.splice(Pe,1),Pe===gn&&La>0&&gn--,Pe=0,et.forEach(function(Ve){return Ve.scroller===P.scroller&&(Pe=1)}),Pe||vn||or||(P.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),Ge||i.kill()),ct&&[ct,We,V,ve].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),yo===P&&(yo=0),d&&(He&&(He.uncache=1),Pe=0,et.forEach(function(Ve){return Ve.pin===d&&Pe++}),Pe||(He.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),Oe&&Oe(P),i&&i.add&&!we){var $e=P.update;P.update=function(){P.update=$e,nt.cache++,ye||U||P.refresh()},be.delayedCall(.01,P.update),we=.01,ye=U=0}else P.refresh();d&&M_()},r.register=function(n){return vs||(be=n||Kd(),$d()&&window.document&&r.enable(),vs=ao),vs},r.defaults=function(n){if(n)for(var i in n)Qo[i]=n[i];return Qo},r.disable=function(n,i){ao=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),Zt(tt,"wheel",ns),Zt(pt,"scroll",ns),clearInterval($o),Zt(pt,"touchcancel",pi),Zt(ht,"touchstart",pi),jo(Zt,pt,"pointerdown,touchstart,mousedown",Th),jo(Zt,pt,"pointerup,touchend,mouseup",bh),ja.kill(),Zo(Zt);for(var s=0;s<nt.length;s+=3)Jo(Zt,nt[s],nt[s+1]),Jo(Zt,nt[s],nt[s+2])},r.enable=function(){if(tt=window,pt=document,kn=pt.documentElement,ht=pt.body,be){if(Uo=be.utils.toArray,vo=be.utils.clamp,yc=be.core.context||pi,xl=be.core.suppressOverwrites||pi,Nu=tt.history.scrollRestoration||"auto",Ac=tt.pageYOffset||0,be.core.globals("ScrollTrigger",r),ht){ao=1,Cs=document.createElement("div"),Cs.style.height="100vh",Cs.style.position="absolute",sp(),p_(),Ot.register(be),r.isTouch=Ot.isTouch,Zi=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ec=Ot.isTouch===1,jt(tt,"wheel",ns),Iu=[tt,pt,kn,ht],be.matchMedia?(r.matchMedia=function(u){var h=be.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},be.addEventListener("matchMediaInit",function(){ip(),Hu()}),be.addEventListener("matchMediaRevert",function(){return np()}),be.addEventListener("matchMedia",function(){Nr(0,1),$r("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return El(),El})):console.warn("Requires GSAP 3.11.0 or later"),El(),jt(pt,"scroll",ns);var n=ht.hasAttribute("style"),i=ht.style,s=i.borderTopStyle,o=be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ui(ht),Yt.m=Math.round(a.top+Yt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ht.setAttribute("style",""),ht.removeAttribute("style")),$o=setInterval(Rh,250),be.delayedCall(.5,function(){return Ko=0}),jt(pt,"touchcancel",pi),jt(ht,"touchstart",pi),jo(jt,pt,"pointerdown,touchstart,mousedown",Th),jo(jt,pt,"pointerup,touchend,mouseup",bh),Mc=be.utils.checkPrefix("transform"),Ua.push(Mc),vs=sn(),ja=be.delayedCall(.2,Nr).pause(),xs=[pt,"visibilitychange",function(){var u=tt.innerWidth,h=tt.innerHeight;pt.hidden?(Sh=u,Mh=h):(Sh!==u||Mh!==h)&&uo()},pt,"DOMContentLoaded",Nr,tt,"load",Nr,tt,"resize",uo],Zo(jt),et.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)Jo(Zt,nt[l],nt[l+1]),Jo(Zt,nt[l],nt[l+2])}else if(pt){var c=function u(){r.enable(),pt.removeEventListener("DOMContentLoaded",u)};pt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Sl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($o)||($o=i)&&setInterval(Rh,i),"ignoreMobileResize"in n&&(Ec=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zo(Zt)||Zo(jt,n.autoRefreshEvents||"none"),Xd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=yn(n),o=nt.indexOf(s),a=Yr(s);~o&&nt.splice(o,a?6:2),i&&(a?Mi.unshift(tt,i,ht,i,kn,i):Mi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?yn(n):n).getBoundingClientRect(),a=o[s?Vr:Gr]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=yn(n));var o=n.getBoundingClientRect(),a=o[s?Vr:Gr],l=i==null?a/2:i in Qa?Qa[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=qr.killAll||[];qr={},i.forEach(function(s){return s()})}},r})();Je.version="3.15.1";Je.saveStyles=function(r){return r?Uo(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),yc())}}):On};Je.revert=function(r,e){return Hu(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?uo(!0):(vs||Je.register())&&Nr(!0)};Je.update=function(r){return++nt.cache&&Oi(r===!0?2:0)};Je.clearScrollMemory=rp;Je.maxScroll=function(r,e){return xi(r,e?Sn:Yt)};Je.getScrollFunc=function(r,e){return dr(yn(r),e?Sn:Yt)};Je.getById=function(r){return bc[r]};Je.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ri};Je.snapDirectional=ku;Je.addEventListener=function(r,e){var t=qr[r]||(qr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=be.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&an(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return an(s)&&(s=s(),jt(Je,"refresh",function(){return s=e.batchMax()})),Uo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Ih=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===kn&&r(ht,t)},ia={auto:1,scroll:1},A_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||be.core.getCache(s),a=sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ia[(l=ei(s)).overflowY]||ia[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Yr(s)&&(ia[(l=ei(s)).overflowY]||ia[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ap=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&A_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&jt(pt,Ot.eventTypes[0],Fh,!1,!0)},onDisable:function(){return Zt(pt,Ot.eventTypes[0],Fh,!0)}})},w_=/(input|label|select|textarea)/i,Nh,Fh=function(e){var t=w_.test(e.target.tagName);(t||Nh)&&(e._gsapAllow=!0,Nh=t)},R_=function(e){Cr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=yn(e.target)||kn,u=be.core.globals().ScrollSmoother,h=u&&u.get(),f=Zi&&(e.content&&yn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=dr(c,Yt),_=dr(c,Sn),g=1,m=(Ot.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,y=an(i)?function(){return i(a)}:function(){return i||2.8},T,x,A=ap(c,e.type,!0,s),w=function(){return x=!1},b=pi,C=pi,S=function(){l=xi(c,Yt),C=vo(Zi?1:0,l),n&&(b=vo(0,xi(c,Sn))),T=Wr},v=function(){f._gsap.y=lo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(x){requestAnimationFrame(w);var B=lo(a.deltaY/2),Q=C(d.v-B);if(f&&Q!==d.v+d.offset){d.offset=Q-d.v;var P=lo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=nt.cache,Oi()}return!0}d.offset&&v(),x=!0},N,k,W,q,O=function(){S(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&be.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return Zi&&H.type==="touchmove"&&L()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){x=!1;var H=g;g=lo((tt.visualViewport&&tt.visualViewport.scale||1)/m),N.pause(),H!==g&&Tl(c,g>1.01?!0:n?!1:"x"),k=_(),W=d(),S(),T=Wr},e.onRelease=e.onGestureStart=function(H,B){if(d.offset&&v(),!B)q.restart(!0);else{nt.cache++;var Q=y(),P,oe;n&&(P=_(),oe=P+Q*.05*-H.velocityX/.227,Q*=Ih(_,P,oe,xi(c,Sn)),N.vars.scrollX=b(oe)),P=d(),oe=P+Q*.05*-H.velocityY/.227,Q*=Ih(d,P,oe,xi(c,Yt)),N.vars.scrollY=C(oe),N.invalidate().duration(Q).play(.01),(Zi&&N.vars.scrollY>=l||P>=l-1)&&be.to({},{onUpdate:O,duration:Q})}o&&o(H)},e.onWheel=function(){N._ts&&N.pause(),sn()-p>1e3&&(T=0,p=sn())},e.onChange=function(H,B,Q,P,oe){if(Wr!==T&&S(),B&&n&&_(b(P[2]===B?k+(H.startX-H.x):_()+B-P[1])),Q){d.offset&&v();var De=oe[2]===Q,Ye=De?W+H.startY-H.y:d()+Q-oe[1],$=C(Ye);De&&Ye!==$&&(W+=$-Ye),d($)}(Q||B)&&Oi()},e.onEnable=function(){Tl(c,n?!1:"x"),Je.addEventListener("refresh",O),jt(tt,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Tl(c,!0),Zt(tt,"resize",O),Je.removeEventListener("refresh",O),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=Zi,Zi&&!d()&&d(1),Zi&&be.ticker.add(pi),q=a._dc,N=be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:op(d,d(),function(){return N.pause()})},onUpdate:Oi,onComplete:q.vars.onComplete}),a};Je.sort=function(r){if(an(r))return et.sort(r);var e=tt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Ot(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var e=r instanceof Ot?r:R_(r);return mn&&mn.target===e.target&&mn.kill(),Yr(e.target)&&(mn=e),e};Je.core={_getVelocityProp:Sc,_inputObserver:ap,_scrollers:nt,_proxies:Mi,bridge:{ss:function(){ri||$r("scrollStart"),ri=sn()},ref:function(){return rn}}};Kd()&&be.registerPlugin(Je);var Oh="1.3.27";function lp(r,e,t){return Math.max(r,Math.min(e,t))}function C_(r,e,t){return(1-t)*r+t*e}function P_(r,e,t,n){return C_(r,e,1-Math.exp(-t*n))}function D_(r,e){return(r%e+e)%e}var L_=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=lp(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=P_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function U_(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var I_=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=U_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},cp=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const N_=100/6,Gi={passive:!1};function Bh(r,e){return r===1?N_:r===2?e:1}var F_=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new cp;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gi),this.element.addEventListener("touchstart",this.onTouchStart,Gi),this.element.addEventListener("touchmove",this.onTouchMove,Gi),this.element.addEventListener("touchend",this.onTouchEnd,Gi)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Gi),this.element.removeEventListener("touchstart",this.onTouchStart,Gi),this.element.removeEventListener("touchmove",this.onTouchMove,Gi),this.element.removeEventListener("touchend",this.onTouchEnd,Gi)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Bh(n,this.window.width),s=Bh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const zh=r=>Math.min(1,1.001-2**(-10*r));var O_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new L_;emitter=new cp;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:T=!1,anchors:x=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:C=b,stopInertiaOnNavigate:S=!1,respectReducedMotion:v=!0}={}){window.lenisVersion=Oh,window.lenis||(window.lenis={}),window.lenis.version=Oh,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=zh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:y,autoRaf:T,anchors:x,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:S,respectReducedMotion:v},this.dimensions=new I_(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new F_(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||i&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(_=f),_){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(T)?0:T)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=lp(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=zh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=h>d,l=f>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,y,T,x,A;if(g==="horizontal")m=Math.round(r.scrollLeft),p=h-d,y=e,T=s,x=a,A=c;else if(g==="vertical")m=Math.round(r.scrollTop),p=f-_,y=t,T=o,x=l,A=u;else return!1;return!A&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&T&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?D_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const Vu="178",B_=0,kh=1,z_=2,up=1,k_=2,Pi=3,pr=0,Pn=1,gi=2,ar=0,Ds=1,Hh=2,Vh=3,Gh=4,H_=5,Lr=100,V_=101,G_=102,W_=103,X_=104,Y_=200,q_=201,$_=202,K_=203,Rc=204,Cc=205,Z_=206,j_=207,J_=208,Q_=209,eg=210,tg=211,ng=212,ig=213,rg=214,Pc=0,Dc=1,Lc=2,ks=3,Uc=4,Ic=5,Nc=6,Fc=7,hp=0,sg=1,og=2,lr=0,ag=1,lg=2,cg=3,ug=4,hg=5,fg=6,dg=7,fp=300,Hs=301,Vs=302,Oc=303,Bc=304,al=306,zc=1e3,Fr=1001,kc=1002,fi=1003,pg=1004,ra=1005,Si=1006,bl=1007,Or=1008,Hi=1009,dp=1010,pp=1011,No=1012,Gu=1013,Kr=1014,Ni=1015,Ys=1016,Wu=1017,Xu=1018,Fo=1020,mp=35902,_p=1021,gp=1022,ui=1023,Oo=1026,Bo=1027,vp=1028,Yu=1029,xp=1030,qu=1031,$u=1033,Na=33776,Fa=33777,Oa=33778,Ba=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,Xc=36196,Yc=37492,qc=37496,$c=37808,Kc=37809,Zc=37810,jc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,za=36492,lu=36494,cu=36495,Sp=36283,uu=36284,hu=36285,fu=36286,mg=3200,_g=3201,gg=0,vg=1,ji="",xn="srgb",Gs="srgb-linear",el="linear",_t="srgb",is=7680,Wh=519,xg=512,Sg=513,Mg=514,Mp=515,Eg=516,yg=517,Tg=518,bg=519,Xh=35044,Yh="300 es",Fi=2e3,tl=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,du=180/Math.PI;function Ho(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function Ag(r,e){return(r%e+e)%e}function wl(r,e,t){return(1-t)*r+t*e}function Qs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,y=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const A=Math.sqrt(T),w=Math.atan2(A,p*y);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const x=a*y;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new Y,qh=new Vo;class Ke{constructor(e,t,n,i,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],T=i[4],x=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*g+a*y+l*A,s[3]=o*m+a*T+l*w,s[6]=o*p+a*x+l*b,s[1]=c*g+u*y+h*A,s[4]=c*m+u*T+h*w,s[7]=c*p+u*x+h*b,s[2]=f*g+d*y+_*A,s[5]=f*m+d*T+_*w,s[8]=f*p+d*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new Ke;function Ep(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wg(){const r=zo("canvas");return r.style.display="block",r}const $h={};function Ls(r){r in $h||($h[r]=!0,console.warn(r))}function Rg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Cg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dg(){const r={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?el:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gs]:{primaries:e,whitePoint:n,transfer:el,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),r}const at=Dg();function Bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rs;class Lg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=zo("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ug=0;class Ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pl(i[o].image)):s.push(Pl(i[o]))}else s=Pl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ig=0;const Dl=new Y;class cn extends qs{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Fr,i=Fr,s=Si,o=Or,a=ui,l=Hi,c=cn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ho(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=fp;cn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(d+1)/2,A=(p+1)/2,w=(u+f)/4,b=(h+g)/4,C=(_+m)/4;return T>x&&T>A?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=b/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ng extends qs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new cn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ku(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Ng{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yp extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),oa.subVectors(this.max,eo),ss.subVectors(e.a,eo),os.subVectors(e.b,eo),as.subVectors(e.c,eo),Wi.subVectors(os,ss),Xi.subVectors(as,os),Mr.subVectors(ss,as);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!Ll(t,ss,os,as,oa)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,ss,os,as,oa))?!1:(aa.crossVectors(Wi,Xi),t=[aa.x,aa.y,aa.z],Ll(t,ss,os,as,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,sa=new Go,ss=new Y,os=new Y,as=new Y,Wi=new Y,Xi=new Y,Mr=new Y,eo=new Y,oa=new Y,aa=new Y,Er=new Y;function Ll(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Er.fromArray(r,s);const a=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=n.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Og=new Go,to=new Y,Ul=new Y;class Zu{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Og.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Ul)),this.expandByPoint(to.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new Y,Il=new Y,la=new Y,Yi=new Y,Nl=new Y,ca=new Y,Fl=new Y;class Bg{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Il.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Il);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Yi.dot(this.direction),l=-Yi.dot(la),c=Yi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Il).addScaledVector(la,f),d}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){Nl.subVectors(t,e),ca.subVectors(n,e),Fl.crossVectors(Nl,ca);let o=this.direction.dot(Fl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Yi,ca));if(l<0)return null;const c=a*this.direction.dot(Nl.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Fl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,kg)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),qi.crossVectors(n,Nn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),qi.crossVectors(n,Nn)),qi.normalize(),ua.crossVectors(Nn,qi),i[0]=qi.x,i[4]=ua.x,i[8]=Nn.x,i[1]=qi.y,i[5]=ua.y,i[9]=Nn.y,i[2]=qi.z,i[6]=ua.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],T=n[7],x=n[11],A=n[15],w=i[0],b=i[4],C=i[8],S=i[12],v=i[1],L=i[5],N=i[9],k=i[13],W=i[2],q=i[6],O=i[10],H=i[14],B=i[3],Q=i[7],P=i[11],oe=i[15];return s[0]=o*w+a*v+l*W+c*B,s[4]=o*b+a*L+l*q+c*Q,s[8]=o*C+a*N+l*O+c*P,s[12]=o*S+a*k+l*H+c*oe,s[1]=u*w+h*v+f*W+d*B,s[5]=u*b+h*L+f*q+d*Q,s[9]=u*C+h*N+f*O+d*P,s[13]=u*S+h*k+f*H+d*oe,s[2]=_*w+g*v+m*W+p*B,s[6]=_*b+g*L+m*q+p*Q,s[10]=_*C+g*N+m*O+p*P,s[14]=_*S+g*k+m*H+p*oe,s[3]=y*w+T*v+x*W+A*B,s[7]=y*b+T*L+x*q+A*Q,s[11]=y*C+T*N+x*O+A*P,s[15]=y*S+T*k+x*H+A*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,T=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,w=t*y+n*T+i*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*b,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=T*b,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=x*b,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*b,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=A*b,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*b,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,y=l*c,T=l*u,x=l*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+x)*A,i[2]=(_-T)*A,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(_+T)*b,i[9]=(m-y)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/s,u=1/o,h=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===Fi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===tl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===Fi)_=(o+s)*h,g=-2*h;else if(a===tl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new Y,oi=new Ht,zg=new Y(0,0,0),kg=new Y(1,1,1),qi=new Y,ua=new Y,Nn=new Y,jh=new Ht,Jh=new Vo;class Vi{constructor(e=0,t=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Qh=new Y,cs=new Vo,wi=new Ht,ha=new Y,no=new Y,Vg=new Y,Gg=new Vo,ef=new Y(1,0,0),tf=new Y(0,1,0),nf=new Y(0,0,1),rf={type:"added"},Wg={type:"removed"},us={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Xn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new Y,t=new Vi,n=new Vo,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ke}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(no,ha,this.up):wi.lookAt(ha,no,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(wi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wg),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xn.DEFAULT_UP=new Y(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Ri=new Y,Bl=new Y,Ci=new Y,hs=new Y,fs=new Y,sf=new Y,zl=new Y,kl=new Y,Hl=new Y,Vl=new Ft,Gl=new Ft,Wl=new Ft;class ci{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ai.subVectors(i,t),Ri.subVectors(n,t),Bl.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Ri),l=ai.dot(Bl),c=Ri.dot(Ri),u=Ri.dot(Bl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Vl,s.x),o.addScaledVector(Gl,s.y),o.addScaledVector(Wl,s.z),o}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),Ri.subVectors(e,t),ai.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ai.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;hs.subVectors(i,n),fs.subVectors(s,n),zl.subVectors(e,n);const l=hs.dot(zl),c=fs.dot(zl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,i);const u=hs.dot(kl),h=fs.dot(kl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(hs,o);Hl.subVectors(e,s);const d=hs.dot(Hl),_=fs.dot(Hl);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(fs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return sf.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(sf,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Xl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Ag(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xl(o,s,e+1/3),this.g=Xl(o,s,e),this.b=Xl(o,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return at.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=xn){at.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(fa);const n=wl($i.h,fa.h,t),i=wl($i.s,fa.s,t),s=wl($i.l,fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ft;ft.NAMES=bp;let Xg=0;class ll extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Ds,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ap extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Y,da=new vt;let Yg=0;class Ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}}class wp extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rp extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xr extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qg=0;const jn=new Ht,Yl=new Xn,ds=new Y,Fn=new Go,io=new Go,Kt=new Y;class jr extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Rp:wp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Fn.min,io.min),Fn.expandByPoint(Kt),Kt.addVectors(Fn.max,io.max),Fn.expandByPoint(Kt)):(Fn.expandByPoint(io.min),Fn.expandByPoint(io.max))}Fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Kt.add(ds)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new Y,l[C]=new Y;const c=new Y,u=new Y,h=new Y,f=new vt,d=new vt,_=new vt,g=new Y,m=new Y;function p(C,S,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[C].add(g),a[S].add(g),a[v].add(g),l[C].add(m),l[S].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const v=y[C],L=v.start,N=v.count;for(let k=L,W=L+N;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new Y,x=new Y,A=new Y,w=new Y;function b(C){A.fromBufferAttribute(i,C),w.copy(A);const S=a[C];T.copy(S),T.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);const L=x.dot(l[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,L)}for(let C=0,S=y.length;C<S;++C){const v=y[C],L=v.start,N=v.count;for(let k=L,W=L+N;k<W;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Ei(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new Ht,yr=new Bg,pa=new Zu,af=new Y,ma=new Y,_a=new Y,ga=new Y,ql=new Y,va=new Y,lf=new Y,xa=new Y;class hi extends Xn{constructor(e=new jr,t=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ql.fromBufferAttribute(h,e),o?va.addScaledVector(ql,u):va.addScaledVector(ql.sub(t),u))}t.add(va)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(pa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(pa,af)===null||yr.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(of.copy(s).invert(),yr.copy(e.ray).applyMatrix4(of),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,A=T;x<A;x+=3){const w=a.getX(x),b=a.getX(x+1),C=a.getX(x+2);i=Sa(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);i=Sa(this,o,e,n,c,u,h,y,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,A=T;x<A;x+=3){const w=x,b=x+1,C=x+2;i=Sa(this,p,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=m,T=m+1,x=m+2;i=Sa(this,o,e,n,c,u,h,y,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $g(r,e,t,n,i,s,o,a){let l;if(e.side===Pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pr,a),l===null)return null;xa.copy(a),xa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:r}}function Sa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ma),r.getVertexPosition(l,_a),r.getVertexPosition(c,ga);const u=$g(r,e,t,n,ma,_a,ga,lf);if(u){const h=new Y;ci.getBarycoord(lf,ma,_a,ga,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new vt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,h,new vt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};ci.getNormal(ma,_a,ga,f.normal),u.face=f,u.barycoord=h}return u}class Wo extends jr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xr(c,3)),this.setAttribute("normal",new Xr(u,3)),this.setAttribute("uv",new Xr(h,2));function _(g,m,p,y,T,x,A,w,b,C,S){const v=x/b,L=A/C,N=x/2,k=A/2,W=w/2,q=b+1,O=C+1;let H=0,B=0;const Q=new Y;for(let P=0;P<O;P++){const oe=P*L-k;for(let De=0;De<q;De++){const Ye=De*v-N;Q[g]=Ye*y,Q[m]=oe*T,Q[p]=W,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(De/b),h.push(1-P/C),H+=1}}for(let P=0;P<C;P++)for(let oe=0;oe<b;oe++){const De=f+oe+q*P,Ye=f+oe+q*(P+1),$=f+(oe+1)+q*(P+1),re=f+(oe+1)+q*P;l.push(De,Ye,re),l.push(Ye,$,re),B+=6}a.addGroup(d,B,S),d+=B,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Ws(r[t]);for(const i in n)e[i]=n[i]}return e}function Kg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Cp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Zg={clone:Ws,merge:pn};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pp extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Y,cf=new vt,uf=new vt;class ti extends Pp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=du*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return du*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Al*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class Qg extends Xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ti(ps,ms,e,t);i.layers=this.layers,this.add(i);const s=new ti(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new ti(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new ti(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new ti(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new ti(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dp extends cn{constructor(e=[],t=Hs,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e0 extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Dp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wo(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:ar});s.uniforms.tEquirect.value=t;const o=new hi(i,s),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=Si),new Qg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ma extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ma;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hf extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kl=new Y,n0=new Y,i0=new Ke;class Pr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kl.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||i0.getNormalMatrix(e),i=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Zu,r0=new vt(.5,.5),Ea=new Y;class Lp{constructor(e=new Pr,t=new Pr,n=new Pr,i=new Pr,s=new Pr,o=new Pr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],T=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+y).normalize(),n[3].setComponents(l-o,f-u,m-_,x-y).normalize(),n[4].setComponents(l-a,f-h,m-g,x-T).normalize(),t===Fi)n[5].setComponents(l+a,f+h,m+g,x+T).normalize();else if(t===tl)n[5].setComponents(a,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const t=r0.distanceTo(e.center);return Tr.radius=.7071067811865476+t,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s0 extends cn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Up extends cn{constructor(e,t,n=Kr,i,s,o,a=fi,l=fi,c,u=Oo,h=1){if(u!==Oo&&u!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xs extends jr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let T=0;T<c;T++){const x=T*h-s;_.push(x,-y,0),g.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const T=y+c*p,x=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;d.push(T,x,w),d.push(x,A,w)}this.setIndex(d),this.setAttribute("position",new Xr(_,3)),this.setAttribute("normal",new Xr(g,3)),this.setAttribute("uv",new Xr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class o0 extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class l0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const c0=new l0;class ju{constructor(e){this.manager=e!==void 0?e:c0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ju.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s=new WeakMap;class u0 extends ju{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=_s.get(o);h===void 0&&(h=[],_s.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=zo("img");function l(){u(),t&&t(this);const h=_s.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}_s.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Zl.remove(`image:${e}`);const f=_s.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}_s.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zl.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class h0 extends ju{constructor(e){super(e)}load(e,t,n,i){const s=new cn,o=new u0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ip extends Pp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class f0 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class d0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ff(r,e,t,n){const i=p0(n);switch(t){case _p:return r*e;case vp:return r*e/i.components*i.byteLength;case Yu:return r*e/i.components*i.byteLength;case xp:return r*e*2/i.components*i.byteLength;case qu:return r*e*2/i.components*i.byteLength;case gp:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case $u:return r*e*4/i.components*i.byteLength;case Na:case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(r,16)*Math.max(e,8)/4;case Hc:case Gc:return Math.max(r,8)*Math.max(e,8)/2;case Xc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case za:case lu:case cu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sp:case uu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hu:case fu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p0(r){switch(r){case Hi:case dp:return{byteLength:1,components:1};case No:case pp:case Ys:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case Kr:case Gu:case Ni:return{byteLength:4,components:1};case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);function Np(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function m0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:_0,alphahash_pars_fragment:g0,alphamap_fragment:v0,alphamap_pars_fragment:x0,alphatest_fragment:S0,alphatest_pars_fragment:M0,aomap_fragment:E0,aomap_pars_fragment:y0,batching_pars_vertex:T0,batching_vertex:b0,begin_vertex:A0,beginnormal_vertex:w0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:I0,color_fragment:N0,color_pars_fragment:F0,color_pars_vertex:O0,color_vertex:B0,common:z0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:H0,displacementmap_pars_vertex:V0,displacementmap_vertex:G0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:Y0,colorspace_pars_fragment:q0,envmap_fragment:$0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Z0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:lv,envmap_vertex:J0,fog_vertex:Q0,fog_pars_vertex:ev,fog_fragment:tv,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:hv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:_v,lights_fragment_end:gv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:Mv,map_fragment:Ev,map_pars_fragment:yv,map_particle_fragment:Tv,map_particle_pars_fragment:bv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:wv,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Lv,normal_fragment_begin:Uv,normal_fragment_maps:Iv,normal_pars_fragment:Nv,normal_pars_vertex:Fv,normal_vertex:Ov,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Vv,opaque_fragment:Gv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:Yv,dithering_fragment:qv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Qv,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:sx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:ux,uv_pars_fragment:hx,uv_pars_vertex:fx,uv_vertex:dx,worldpos_vertex:px,background_vert:mx,background_frag:_x,backgroundCube_vert:gx,backgroundCube_frag:vx,cube_vert:xx,cube_frag:Sx,depth_vert:Mx,depth_frag:Ex,distanceRGBA_vert:yx,distanceRGBA_frag:Tx,equirect_vert:bx,equirect_frag:Ax,linedashed_vert:wx,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Dx,meshlambert_frag:Lx,meshmatcap_vert:Ux,meshmatcap_frag:Ix,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:kx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:qx,sprite_frag:$x},me={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},mi={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ft(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ft(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};mi.physical={uniforms:pn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ya={r:0,b:0,g:0},br=new Vi,Kx=new Ht;function Zx(r,e,t,n,i,s,o){const a=new ft(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function g(T){let x=!1;const A=_(T);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===al)?(u===void 0&&(u=new hi(new Wo(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ws(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),br.copy(x.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(br)),u.material.toneMapped=at.getTransfer(A.colorSpace)!==_t,(h!==A||f!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new hi(new Xs(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ws(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,x){T.getRGB(ya,Cp(r)),n.buffers.color.setClear(ya.r,ya.g,ya.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:g,addToRenderList:m,dispose:y}}function jx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,L,N,k,W){let q=!1;const O=h(k,N,L);s!==O&&(s=O,c(s.object)),q=d(v,k,N,W),q&&_(v,k,N,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(v,L,N,k),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,L,N){const k=N.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let O=q[k];return O===void 0&&(O=f(l()),q[k]=O),O}function f(v){const L=[],N=[],k=[];for(let W=0;W<t;W++)L[W]=0,N[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,L,N,k){const W=s.attributes,q=L.attributes;let O=0;const H=N.getAttributes();for(const B in H)if(H[B].location>=0){const P=W[B];let oe=q[B];if(oe===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),P===void 0||P.attribute!==oe||oe&&P.data!==oe.data)return!0;O++}return s.attributesNum!==O||s.index!==k}function _(v,L,N,k){const W={},q=L.attributes;let O=0;const H=N.getAttributes();for(const B in H)if(H[B].location>=0){let P=q[B];P===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const oe={};oe.attribute=P,P&&P.data&&(oe.data=P.data),W[B]=oe,O++}s.attributes=W,s.attributesNum=O,s.index=k}function g(){const v=s.newAttributes;for(let L=0,N=v.length;L<N;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){const N=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;N[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),W[v]!==L&&(r.vertexAttribDivisor(v,L),W[v]=L)}function y(){const v=s.newAttributes,L=s.enabledAttributes;for(let N=0,k=L.length;N<k;N++)L[N]!==v[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function T(v,L,N,k,W,q,O){O===!0?r.vertexAttribIPointer(v,L,N,W,q):r.vertexAttribPointer(v,L,N,k,W,q)}function x(v,L,N,k){g();const W=k.attributes,q=N.getAttributes(),O=L.defaultAttributeValues;for(const H in q){const B=q[H];if(B.location>=0){let Q=W[H];if(Q===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const P=Q.normalized,oe=Q.itemSize,De=e.get(Q);if(De===void 0)continue;const Ye=De.buffer,$=De.type,re=De.bytesPerElement,_e=$===r.INT||$===r.UNSIGNED_INT||Q.gpuType===Gu;if(Q.isInterleavedBufferAttribute){const se=Q.data,Se=se.stride,He=Q.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)p(B.location+Ne,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)m(B.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Ne=0;Ne<B.locationSize;Ne++)T(B.location+Ne,oe/B.locationSize,$,P,Se*re,(He+oe/B.locationSize*Ne)*re,_e)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)p(B.location+se,Q.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<B.locationSize;se++)m(B.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let se=0;se<B.locationSize;se++)T(B.location+se,oe/B.locationSize,$,P,oe*re,oe/B.locationSize*se*re,_e)}}else if(O!==void 0){const P=O[H];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(B.location,P);break;case 3:r.vertexAttrib3fv(B.location,P);break;case 4:r.vertexAttrib4fv(B.location,P);break;default:r.vertexAttrib1fv(B.location,P)}}}}y()}function A(){C();for(const v in n){const L=n[v];for(const N in L){const k=L[N];for(const W in k)u(k[W].object),delete k[W];delete L[N]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const N in L){const k=L[N];for(const W in k)u(k[W].object),delete k[W];delete L[N]}delete n[v.id]}function b(v){for(const L in n){const N=n[L];if(N[v.id]===void 0)continue;const k=N[v.id];for(const W in k)u(k[W].object),delete k[W];delete N[v.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Jx(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ui&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Hi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ni&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function eS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Pr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,T=y*4;let x=p.clippingState||null;l.value=x,x=u(_,f,T,d);for(let A=0;A!==T;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=d;T!==g;++T,x+=4)o.copy(h[T]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tS(r){let e=new WeakMap;function t(o,a){return a===Oc?o.mapping=Hs:a===Bc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===Bc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new e0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ys=4,df=[.125,.215,.35,.446,.526,.582],Ur=20,jl=new Ip,pf=new ft;let Jl=null,Ql=0,ec=0,tc=!1;const Dr=(1+Math.sqrt(5))/2,gs=1/Dr,mf=[new Y(-Dr,gs,0),new Y(Dr,gs,0),new Y(-gs,0,Dr),new Y(gs,0,Dr),new Y(0,Dr,-gs),new Y(0,Dr,gs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],nS=new Y;class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=nS}=s;Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Ys,format:ui,colorSpace:Gs,depthBuffer:!1},i=gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iS(s)),this._blurMaterial=rS(s,e,t)}return i}_compileMaterial(e){const t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,jl)}_sceneToCubeUV(e,t,n,i,s){const l=new ti(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(pf),h.toneMapping=lr,h.autoClear=!1;const _=new Ap({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new hi(new Wo,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(pf),m=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):T===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const x=this._cubeSize;Ta(i,T*x,y>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mf[(i-s-1)%mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new hi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let y=0;for(let b=0;b<Ur;++b){const C=b/g,S=Math.exp(-C*C/2);p.push(S),b===0?y+=S:b<m&&(y+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const x=this._sizeLods[i],A=3*x*(i>T-ys?i-T+ys:0),w=4*(this._cubeSize-x);Ta(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(h,jl)}}function iS(r){const e=[],t=[],n=[];let i=r;const s=r-ys+1+df.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ys?l=df[o-r+ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),T=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(S,g*_*w),T.set(f,m*_*w);const v=[w,w,w,w,w,w];x.set(v,p*_*w)}const A=new jr;A.setAttribute("position",new Ei(y,g)),A.setAttribute("uv",new Ei(T,m)),A.setAttribute("faceIndex",new Ei(x,p)),e.push(A),i>ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gf(r,e,t){const n=new mr(r,e,t);return n.texture.mapping=al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rS(r,e,t){const n=new Float32Array(Ur),i=new Y(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function vf(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function xf(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===Bc,u=l===Hs||l===Vs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _f(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new _f(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aS(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let T=0,x=y.length;T<x;T+=3){const A=y[T+0],w=y[T+1],b=y[T+2];f.push(A,w,w,b,b,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const A=T+0,w=T+1,b=T+2;f.push(A,w,w,b,b,A)}}else return;const m=new(Ep(f)?Rp:wp)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lS(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uS(r,e,t){const n=new WeakMap,i=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*h),C=new yp(b,A,w,h);C.type=Ni,C.needsUpdate=!0;const S=x*4;for(let L=0;L<h;L++){const N=p[L],k=y[L],W=T[L],q=A*w*4*L;for(let O=0;O<N.count;O++){const H=O*S;_===!0&&(i.fromBufferAttribute(N,O),b[q+H+0]=i.x,b[q+H+1]=i.y,b[q+H+2]=i.z,b[q+H+3]=0),g===!0&&(i.fromBufferAttribute(k,O),b[q+H+4]=i.x,b[q+H+5]=i.y,b[q+H+6]=i.z,b[q+H+7]=0),m===!0&&(i.fromBufferAttribute(W,O),b[q+H+8]=i.x,b[q+H+9]=i.y,b[q+H+10]=i.z,b[q+H+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new vt(A,w)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function hS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fp=new cn,Sf=new Up(1,1),Op=new yp,Bp=new Fg,zp=new Dp,Mf=[],Ef=[],yf=new Float32Array(16),Tf=new Float32Array(9),bf=new Float32Array(4);function $s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Mf[i];if(s===void 0&&(s=new Float32Array(i),Mf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cl(r,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function _S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;bf.set(n),r.uniformMatrix2fv(this.addr,!1,bf),$t(t,n)}}function gS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Tf.set(n),r.uniformMatrix3fv(this.addr,!1,Tf),$t(t,n)}}function vS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;yf.set(n),r.uniformMatrix4fv(this.addr,!1,yf),$t(t,n)}}function xS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function yS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function bS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function AS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function wS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Sf.compareFunction=Mp,s=Sf):s=Fp,t.setTexture2D(e||s,i)}function RS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bp,i)}function CS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zp,i)}function PS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Op,i)}function DS(r){switch(r){case 5126:return fS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return _S;case 35675:return gS;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return ES;case 5125:return yS;case 36294:return TS;case 36295:return bS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return PS}}function LS(r,e){r.uniform1fv(this.addr,e)}function US(r,e){const t=$s(e,this.size,2);r.uniform2fv(this.addr,t)}function IS(r,e){const t=$s(e,this.size,3);r.uniform3fv(this.addr,t)}function NS(r,e){const t=$s(e,this.size,4);r.uniform4fv(this.addr,t)}function FS(r,e){const t=$s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function OS(r,e){const t=$s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function BS(r,e){const t=$s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zS(r,e){r.uniform1iv(this.addr,e)}function kS(r,e){r.uniform2iv(this.addr,e)}function HS(r,e){r.uniform3iv(this.addr,e)}function VS(r,e){r.uniform4iv(this.addr,e)}function GS(r,e){r.uniform1uiv(this.addr,e)}function WS(r,e){r.uniform2uiv(this.addr,e)}function XS(r,e){r.uniform3uiv(this.addr,e)}function YS(r,e){r.uniform4uiv(this.addr,e)}function qS(r,e,t){const n=this.cache,i=e.length,s=cl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fp,s[o])}function $S(r,e,t){const n=this.cache,i=e.length,s=cl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bp,s[o])}function KS(r,e,t){const n=this.cache,i=e.length,s=cl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zp,s[o])}function ZS(r,e,t){const n=this.cache,i=e.length,s=cl(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Op,s[o])}function jS(r){switch(r){case 5126:return LS;case 35664:return US;case 35665:return IS;case 35666:return NS;case 35674:return FS;case 35675:return OS;case 35676:return BS;case 5124:case 35670:return zS;case 35667:case 35671:return kS;case 35668:case 35672:return HS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return WS;case 36295:return XS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return ZS}}class JS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DS(t.type)}}class QS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jS(t.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Af(r,e){r.seq.push(e),r.map[e.id]=e}function tM(r,e,t){const n=r.name,i=n.length;for(nc.lastIndex=0;;){const s=nc.exec(n),o=nc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Af(t,c===void 0?new JS(a,r,e):new QS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new eM(a),Af(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);tM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function wf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const nM=37297;let iM=0;function rM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Rf=new Ke;function sM(r){at._getMatrix(Rf,at.workingColorSpace,r);const e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case el:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rM(r.getShaderSource(e),o)}else return i}function oM(r,e){const t=sM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aM(r,e){let t;switch(e){case ag:t="Linear";break;case lg:t="Reinhard";break;case cg:t="Cineon";break;case ug:t="ACESFilmic";break;case fg:t="AgX";break;case dg:t="Neutral";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new Y;function lM(){at.getLuminanceCoefficients(ba);const r=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function uM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ho(r){return r!==""}function Pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(r){return r.replace(fM,pM)}const dM=new Map;function pM(r,e){let t=je[e];if(t===void 0){const n=dM.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(r){return r.replace(mM,_M)}function _M(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function vM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xM(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Vs&&(e="ENVMAP_MODE_REFRACTION"),e}function SM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case sg:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function MM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function EM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gM(t),c=vM(t),u=xM(t),h=SM(t),f=MM(t),d=cM(t),_=uM(s),g=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?je.tonemapping_pars_fragment:"",t.toneMapping!==lr?aM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,oM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=pu(o),o=Pf(o,t),o=Df(o,t),a=pu(a),a=Pf(a,t),a=Df(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+o,x=y+p+a,A=wf(i,i.VERTEX_SHADER,T),w=wf(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(w).trim();let q=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const H=Cf(i,A,"vertex"),B=Cf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+H+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||W==="")&&(O=!1);O&&(L.diagnostics={runnable:q,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new ka(i,g),S=hM(i,g)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,nM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let yM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bM(e),t.set(e,n)),n}}class bM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function AM(r,e,t,n,i,s,o){const a=new Tp,l=new TM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,L,N,k){const W=N.fog,q=k.geometry,O=S.isMeshStandardMaterial?N.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),B=H&&H.mapping===al?H.image.height:null,Q=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=P!==void 0?P.length:0;let De=0;q.morphAttributes.position!==void 0&&(De=1),q.morphAttributes.normal!==void 0&&(De=2),q.morphAttributes.color!==void 0&&(De=3);let Ye,$,re,_e;if(Q){const ge=mi[Q];Ye=ge.vertexShader,$=ge.fragmentShader}else Ye=S.vertexShader,$=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const se=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,Ze=!!S.map,Qe=!!S.matcap,ye=!!H,U=!!S.aoMap,ct=!!S.lightMap,We=!!S.bumpMap,V=!!S.normalMap,ve=!!S.displacementMap,qe=!!S.emissiveMap,Ce=!!S.metalnessMap,we=!!S.roughnessMap,dt=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,j=S.sheen>0,Z=S.transmission>0,K=dt&&!!S.anisotropyMap,Me=R&&!!S.clearcoatMap,ae=R&&!!S.clearcoatNormalMap,Te=R&&!!S.clearcoatRoughnessMap,ue=z&&!!S.iridescenceMap,te=z&&!!S.iridescenceThicknessMap,de=j&&!!S.sheenColorMap,Fe=j&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,le=!!S.specularColorMap,Be=!!S.specularIntensityMap,D=Z&&!!S.transmissionMap,ce=Z&&!!S.thicknessMap,ee=!!S.gradientMap,pe=!!S.alphaMap,ne=S.alphaTest>0,J=!!S.alphaHash,Ee=!!S.extensions;let Oe=lr;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Oe=r.toneMapping);const lt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:$,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Gs,alphaToCoverage:!!S.alphaToCoverage,map:Ze,matcap:Qe,envMap:ye,envMapMode:ye&&H.mapping,envMapCubeUVHeight:B,aoMap:U,lightMap:ct,bumpMap:We,normalMap:V,displacementMap:f&&ve,emissiveMap:qe,normalMapObjectSpace:V&&S.normalMapType===vg,normalMapTangentSpace:V&&S.normalMapType===gg,metalnessMap:Ce,roughnessMap:we,anisotropy:dt,anisotropyMap:K,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:M,iridescence:z,iridescenceMap:ue,iridescenceThicknessMap:te,sheen:j,sheenColorMap:de,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:le,specularIntensityMap:Be,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:ee,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:J,combine:S.combine,mapUv:Ze&&g(S.map.channel),aoMapUv:U&&g(S.aoMap.channel),lightMapUv:ct&&g(S.lightMap.channel),bumpMapUv:We&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:ve&&g(S.displacementMap.channel),emissiveMapUv:qe&&g(S.emissiveMap.channel),metalnessMapUv:Ce&&g(S.metalnessMap.channel),roughnessMapUv:we&&g(S.roughnessMap.channel),anisotropyMapUv:K&&g(S.anisotropyMap.channel),clearcoatMapUv:Me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ue&&g(S.specularMap.channel),specularColorMapUv:le&&g(S.specularColorMap.channel),specularIntensityMapUv:Be&&g(S.specularIntensityMap.channel),transmissionMapUv:D&&g(S.transmissionMap.channel),thicknessMapUv:ce&&g(S.thicknessMap.channel),alphaMapUv:pe&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(V||dt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ze||pe),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:De,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ze&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:qe&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gi,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(v,S),T(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function y(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=_[S.type];let L;if(v){const N=mi[v];L=Zg.clone(N.uniforms)}else L=S.uniforms;return L}function A(S,v){let L;for(let N=0,k=u.length;N<k;N++){const W=u[N];if(W.cacheKey===v){L=W,++L.usedTimes;break}}return L===void 0&&(L=new EM(r,v,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function wM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function RM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function If(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||RM),n.length>1&&n.sort(f||If),i.length>1&&i.sort(f||If)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function CM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Nf,r.set(n,[o])):i>=s.length?(o=new Nf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function PM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ft};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function DM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let LM=0;function UM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IM(r){const e=new PM,t=DM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Ht,o=new Ht;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,y=0,T=0,x=0,A=0,w=0,b=0;c.sort(UM);for(let S=0,v=c.length;S<v;S++){const L=c[S],N=L.color,k=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*k,h+=N.g*k,f+=N.b*k;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],k);b++}else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=O,d++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(N).multiplyScalar(k),O.distance=W,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[g]=O;const H=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,H.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=H.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=q,x++}g++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(N).multiplyScalar(k),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=O,m++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=L.shadow.matrix,T++}n.point[_]=O,_++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(k),O.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=O,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=b,n.version=LM++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(T.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ff(r){const e=new IM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Ff(r),e.set(i,[a])):s>=o.length?(a=new Ff(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BM(r,e,t){let n=new Lp;const i=new vt,s=new vt,o=new Ft,a=new o0({depthPacking:_g}),l=new a0,c={},u=t.maxTextureSize,h={[pr]:Pn,[Pn]:pr,[gi]:gi},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new jr;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new hi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ar),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Pi&&this.type===Pi,W=p===Pi&&this.type!==Pi;for(let q=0,O=w.length;q<O;q++){const H=w[q],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();if(i.multiply(Q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null||k===!0||W===!0){const oe=this.type!==Pi?{minFilter:fi,magFilter:fi}:{};B.map!==null&&B.map.dispose(),B.map=new mr(i.x,i.y,oe),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const P=B.getViewportCount();for(let oe=0;oe<P;oe++){const De=B.getViewport(oe);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),N.viewport(o),B.updateMatrices(H,oe),n=B.getFrustum(),x(b,C,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Pi&&y(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,L)};function y(w,b){const C=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,d,g,null)}function T(w,b,C,S){let v=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)v=L;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=v.uuid,k=b.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let q=W[k];q===void 0&&(q=v.clone(),W[k]=q,b.addEventListener("dispose",A)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,S===Pi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=C}return v}function x(w,b,C,S,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const q=k.groups;for(let O=0,H=q.length;O<H;O++){const B=q[O],Q=W[B.materialIndex];if(Q&&Q.visible){const P=T(w,Q,S,v);w.onBeforeShadow(r,w,b,C,k,P,B),r.renderBufferDirect(C,null,k,P,w,B),w.onAfterShadow(r,w,b,C,k,P,B)}}}else if(W.visible){const q=T(w,W,S,v);w.onBeforeShadow(r,w,b,C,k,q,null),r.renderBufferDirect(C,null,k,q,w,null),w.onAfterShadow(r,w,b,C,k,q,null)}}const N=w.children;for(let k=0,W=N.length;k<W;k++)x(N[k],b,C,S,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const zM={[Pc]:Dc,[Lc]:Nc,[Uc]:Fc,[ks]:Ic,[Dc]:Pc,[Nc]:Lc,[Fc]:Uc,[Ic]:ks};function kM(r,e){function t(){let D=!1;const ce=new Ft;let ee=null;const pe=new Ft(0,0,0,0);return{setMask:function(ne){ee!==ne&&!D&&(r.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){D=ne},setClear:function(ne,J,Ee,Oe,lt){lt===!0&&(ne*=Oe,J*=Oe,Ee*=Oe),ce.set(ne,J,Ee,Oe),pe.equals(ce)===!1&&(r.clearColor(ne,J,Ee,Oe),pe.copy(ce))},reset:function(){D=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ee=null,pe=null,ne=null;return{setReversed:function(J){if(ce!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ce=J;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return ce},setTest:function(J){J?se(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(J){ee!==J&&!D&&(r.depthMask(J),ee=J)},setFunc:function(J){if(ce&&(J=zM[J]),pe!==J){switch(J){case Pc:r.depthFunc(r.NEVER);break;case Dc:r.depthFunc(r.ALWAYS);break;case Lc:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case Uc:r.depthFunc(r.EQUAL);break;case Ic:r.depthFunc(r.GEQUAL);break;case Nc:r.depthFunc(r.GREATER);break;case Fc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=J}},setLocked:function(J){D=J},setClear:function(J){ne!==J&&(ce&&(J=1-J),r.clearDepth(J),ne=J)},reset:function(){D=!1,ee=null,pe=null,ne=null,ce=!1}}}function i(){let D=!1,ce=null,ee=null,pe=null,ne=null,J=null,Ee=null,Oe=null,lt=null;return{setTest:function(ge){D||(ge?se(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(ge){ce!==ge&&!D&&(r.stencilMask(ge),ce=ge)},setFunc:function(ge,Re,$e){(ee!==ge||pe!==Re||ne!==$e)&&(r.stencilFunc(ge,Re,$e),ee=ge,pe=Re,ne=$e)},setOp:function(ge,Re,$e){(J!==ge||Ee!==Re||Oe!==$e)&&(r.stencilOp(ge,Re,$e),J=ge,Ee=Re,Oe=$e)},setLocked:function(ge){D=ge},setClear:function(ge){lt!==ge&&(r.clearStencil(ge),lt=ge)},reset:function(){D=!1,ce=null,ee=null,pe=null,ne=null,J=null,Ee=null,Oe=null,lt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,T=null,x=null,A=null,w=null,b=new ft(0,0,0),C=0,S=!1,v=null,L=null,N=null,k=null,W=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let Q=null,P={};const oe=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),Ye=new Ft().fromArray(oe),$=new Ft().fromArray(De);function re(D,ce,ee,pe){const ne=new Uint8Array(4),J=r.createTexture();r.bindTexture(D,J),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ee;Ee++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(ce+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return J}const _e={};_e[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(r.DEPTH_TEST),o.setFunc(ks),We(!1),V(kh),se(r.CULL_FACE),U(ar);function se(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function He(D,ce){return h[D]!==ce?(r.bindFramebuffer(D,ce),h[D]=ce,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ne(D,ce){let ee=d,pe=!1;if(D){ee=f.get(ce),ee===void 0&&(ee=[],f.set(ce,ee));const ne=D.textures;if(ee.length!==ne.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Ee=ne.length;J<Ee;J++)ee[J]=r.COLOR_ATTACHMENT0+J;ee.length=ne.length,pe=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ee)}function Ze(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const Qe={[Lr]:r.FUNC_ADD,[V_]:r.FUNC_SUBTRACT,[G_]:r.FUNC_REVERSE_SUBTRACT};Qe[W_]=r.MIN,Qe[X_]=r.MAX;const ye={[Y_]:r.ZERO,[q_]:r.ONE,[$_]:r.SRC_COLOR,[Rc]:r.SRC_ALPHA,[eg]:r.SRC_ALPHA_SATURATE,[J_]:r.DST_COLOR,[Z_]:r.DST_ALPHA,[K_]:r.ONE_MINUS_SRC_COLOR,[Cc]:r.ONE_MINUS_SRC_ALPHA,[Q_]:r.ONE_MINUS_DST_COLOR,[j_]:r.ONE_MINUS_DST_ALPHA,[tg]:r.CONSTANT_COLOR,[ng]:r.ONE_MINUS_CONSTANT_COLOR,[ig]:r.CONSTANT_ALPHA,[rg]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,ce,ee,pe,ne,J,Ee,Oe,lt,ge){if(D===ar){g===!0&&(Se(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),D!==H_){if(D!==m||ge!==S){if((p!==Lr||x!==Lr)&&(r.blendEquation(r.FUNC_ADD),p=Lr,x=Lr),ge)switch(D){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hh:r.blendFunc(r.ONE,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,A=null,w=null,b.set(0,0,0),C=0,m=D,S=ge}return}ne=ne||ce,J=J||ee,Ee=Ee||pe,(ce!==p||ne!==x)&&(r.blendEquationSeparate(Qe[ce],Qe[ne]),p=ce,x=ne),(ee!==y||pe!==T||J!==A||Ee!==w)&&(r.blendFuncSeparate(ye[ee],ye[pe],ye[J],ye[Ee]),y=ee,T=pe,A=J,w=Ee),(Oe.equals(b)===!1||lt!==C)&&(r.blendColor(Oe.r,Oe.g,Oe.b,lt),b.copy(Oe),C=lt),m=D,S=!1}function ct(D,ce){D.side===gi?Se(r.CULL_FACE):se(r.CULL_FACE);let ee=D.side===Pn;ce&&(ee=!ee),We(ee),D.blending===Ds&&D.transparent===!1?U(ar):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;a.setTest(pe),pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){v!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),v=D)}function V(D){D!==B_?(se(r.CULL_FACE),D!==L&&(D===kh?r.cullFace(r.BACK):D===z_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),L=D}function ve(D){D!==N&&(O&&r.lineWidth(D),N=D)}function qe(D,ce,ee){D?(se(r.POLYGON_OFFSET_FILL),(k!==ce||W!==ee)&&(r.polygonOffset(ce,ee),k=ce,W=ee)):Se(r.POLYGON_OFFSET_FILL)}function Ce(D){D?se(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function we(D){D===void 0&&(D=r.TEXTURE0+q-1),Q!==D&&(r.activeTexture(D),Q=D)}function dt(D,ce,ee){ee===void 0&&(Q===null?ee=r.TEXTURE0+q-1:ee=Q);let pe=P[ee];pe===void 0&&(pe={type:void 0,texture:void 0},P[ee]=pe),(pe.type!==D||pe.texture!==ce)&&(Q!==ee&&(r.activeTexture(ee),Q=ee),r.bindTexture(D,ce||_e[D]),pe.type=D,pe.texture=ce)}function R(){const D=P[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){Ye.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function Fe(D){$.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Ue(D,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let pe=ee.get(D);pe===void 0&&(pe=r.getUniformBlockIndex(ce,D.name),ee.set(D,pe))}function le(D,ce){const pe=c.get(ce).get(D);l.get(ce)!==pe&&(r.uniformBlockBinding(ce,pe,D.__bindingPointIndex),l.set(ce,pe))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,P={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,T=null,x=null,A=null,w=null,b=new ft(0,0,0),C=0,S=!1,v=null,L=null,N=null,k=null,W=null,Ye.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Se,bindFramebuffer:He,drawBuffers:Ne,useProgram:Ze,setBlending:U,setMaterial:ct,setFlipSided:We,setCullFace:V,setLineWidth:ve,setPolygonOffset:qe,setScissorTest:Ce,activeTexture:we,bindTexture:dt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:ue,texImage3D:te,updateUBOMapping:Ue,uniformBlockBinding:le,texStorage2D:ae,texStorage3D:Te,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:Me,scissor:de,viewport:Fe,reset:Be}}function HM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return d?new OffscreenCanvas(R,M):zo("canvas")}function g(R,M,z){let j=1;const Z=dt(R);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*Z.width),Me=Math.floor(j*Z.height);h===void 0&&(h=_(K,Me));const ae=M?_(K,Me):h;return ae.width=K,ae.height=Me,ae.getContext("2d").drawImage(R,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Me+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,M,z,j,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),M===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),M===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),M===r.RGBA){const Me=Z?el:at.getTransfer(j);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=Me===_t?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(R,M){let z;return R?M===null||M===Kr||M===Fo?z=r.DEPTH24_STENCIL8:M===Ni?z=r.DEPTH32F_STENCIL8:M===No&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kr||M===Fo?z=r.DEPTH_COMPONENT24:M===Ni?z=r.DEPTH_COMPONENT32F:M===No&&(z=r.DEPTH_COMPONENT16),z}function A(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==fi&&R.minFilter!==Si?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&u.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),v(M)}function C(R){const M=n.get(R);if(M.__webglInit===void 0)return;const z=R.source,j=f.get(z);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(z)}n.remove(R)}function S(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const z=R.source,j=f.get(z);delete j[M.__cacheKey],o.memory.textures--}function v(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,Z=z.length;j<Z;j++){const K=n.get(z[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(R)}let L=0;function N(){L=0}function k(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const z=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,R,M);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function O(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){_e(z,R,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function H(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){_e(z,R,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function B(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){se(z,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const Q={[zc]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[kc]:r.MIRRORED_REPEAT},P={[fi]:r.NEAREST,[pg]:r.NEAREST_MIPMAP_NEAREST,[ra]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[bl]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},oe={[xg]:r.NEVER,[bg]:r.ALWAYS,[Sg]:r.LESS,[Mp]:r.LEQUAL,[Mg]:r.EQUAL,[Tg]:r.GEQUAL,[Eg]:r.GREATER,[yg]:r.NOTEQUAL};function De(R,M){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Si||M.magFilter===bl||M.magFilter===ra||M.magFilter===Or||M.minFilter===Si||M.minFilter===bl||M.minFilter===ra||M.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Q[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fi||M.minFilter!==ra&&M.minFilter!==Or||M.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ye(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const j=M.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const K=W(M);if(K!==R.__cacheKey){Z[K]===void 0&&(Z[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[K].usedTimes++;const Me=Z[R.__cacheKey];Me!==void 0&&(Z[R.__cacheKey].usedTimes--,Me.usedTimes===0&&S(M)),R.__cacheKey=K,R.__webglTexture=Z[K].texture}return z}function $(R,M,z){return Math.floor(Math.floor(R/z)/M)}function re(R,M,z,j){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,z,j,M.data);else{K.sort((te,de)=>te.start-de.start);let Me=0;for(let te=1;te<K.length;te++){const de=K[Me],Fe=K[te],Ue=de.start+de.count,le=$(Fe.start,M.width,4),Be=$(de.start,M.width,4);Fe.start<=Ue+1&&le===Be&&$(Fe.start+Fe.count-1,M.width,4)===le?de.count=Math.max(de.count,Fe.start+Fe.count-de.start):(++Me,K[Me]=Fe)}K.length=Me+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),ue=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let te=0,de=K.length;te<de;te++){const Fe=K[te],Ue=Math.floor(Fe.start/4),le=Math.ceil(Fe.count/4),Be=Ue%M.width,D=Math.floor(Ue/M.width),ce=le,ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Be,D,ce,ee,z,j,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}}function _e(R,M,z){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const Z=Ye(R,M),K=M.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+z);const Me=n.get(K);if(K.version!==Me.__version||Z===!0){t.activeTexture(r.TEXTURE0+z);const ae=at.getPrimaries(at.workingColorSpace),Te=M.colorSpace===ji?null:at.getPrimaries(M.colorSpace),ue=M.colorSpace===ji||ae===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let te=g(M.image,!1,i.maxTextureSize);te=we(M,te);const de=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type);let Ue=T(M.internalFormat,de,Fe,M.colorSpace,M.isVideoTexture);De(j,M);let le;const Be=M.mipmaps,D=M.isVideoTexture!==!0,ce=Me.__version===void 0||Z===!0,ee=K.dataReady,pe=A(M,te);if(M.isDepthTexture)Ue=x(M.format===Bo,M.type),ce&&(D?t.texStorage2D(r.TEXTURE_2D,1,Ue,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Ue,te.width,te.height,0,de,Fe,null));else if(M.isDataTexture)if(Be.length>0){D&&ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ue,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)le=Be[ne],D?ee&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,de,Fe,le.data):t.texImage2D(r.TEXTURE_2D,ne,Ue,le.width,le.height,0,de,Fe,le.data);M.generateMipmaps=!1}else D?(ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ue,te.width,te.height),ee&&re(M,te,de,Fe)):t.texImage2D(r.TEXTURE_2D,0,Ue,te.width,te.height,0,de,Fe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ue,Be[0].width,Be[0].height,te.depth);for(let ne=0,J=Be.length;ne<J;ne++)if(le=Be[ne],M.format!==ui)if(de!==null)if(D){if(ee)if(M.layerUpdates.size>0){const Ee=ff(le.width,le.height,M.format,M.type);for(const Oe of M.layerUpdates){const lt=le.data.subarray(Oe*Ee/le.data.BYTES_PER_ELEMENT,(Oe+1)*Ee/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Oe,le.width,le.height,1,de,lt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,te.depth,de,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ue,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,te.depth,de,Fe,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ue,le.width,le.height,te.depth,0,de,Fe,le.data)}else{D&&ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ue,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)le=Be[ne],M.format!==ui?de!==null?D?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ee&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,de,Fe,le.data):t.texImage2D(r.TEXTURE_2D,ne,Ue,le.width,le.height,0,de,Fe,le.data)}else if(M.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ue,te.width,te.height,te.depth),ee)if(M.layerUpdates.size>0){const ne=ff(te.width,te.height,M.format,M.type);for(const J of M.layerUpdates){const Ee=te.data.subarray(J*ne/te.data.BYTES_PER_ELEMENT,(J+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,de,Fe,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,te.width,te.height,te.depth,0,de,Fe,te.data);else if(M.isData3DTexture)D?(ce&&t.texStorage3D(r.TEXTURE_3D,pe,Ue,te.width,te.height,te.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,te.width,te.height,te.depth,0,de,Fe,te.data);else if(M.isFramebufferTexture){if(ce)if(D)t.texStorage2D(r.TEXTURE_2D,pe,Ue,te.width,te.height);else{let ne=te.width,J=te.height;for(let Ee=0;Ee<pe;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Ue,ne,J,0,de,Fe,null),ne>>=1,J>>=1}}else if(Be.length>0){if(D&&ce){const ne=dt(Be[0]);t.texStorage2D(r.TEXTURE_2D,pe,Ue,ne.width,ne.height)}for(let ne=0,J=Be.length;ne<J;ne++)le=Be[ne],D?ee&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de,Fe,le):t.texImage2D(r.TEXTURE_2D,ne,Ue,de,Fe,le);M.generateMipmaps=!1}else if(D){if(ce){const ne=dt(te);t.texStorage2D(r.TEXTURE_2D,pe,Ue,ne.width,ne.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Fe,te)}else t.texImage2D(r.TEXTURE_2D,0,Ue,de,Fe,te);m(M)&&p(j),Me.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function se(R,M,z){if(M.image.length!==6)return;const j=Ye(R,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const K=n.get(Z);if(Z.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+z);const Me=at.getPrimaries(at.workingColorSpace),ae=M.colorSpace===ji?null:at.getPrimaries(M.colorSpace),Te=M.colorSpace===ji||Me===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!ue&&!te?de[J]=g(M.image[J],!0,i.maxCubemapSize):de[J]=te?M.image[J].image:M.image[J],de[J]=we(M,de[J]);const Fe=de[0],Ue=s.convert(M.format,M.colorSpace),le=s.convert(M.type),Be=T(M.internalFormat,Ue,le,M.colorSpace),D=M.isVideoTexture!==!0,ce=K.__version===void 0||j===!0,ee=Z.dataReady;let pe=A(M,Fe);De(r.TEXTURE_CUBE_MAP,M);let ne;if(ue){D&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Be,Fe.width,Fe.height);for(let J=0;J<6;J++){ne=de[J].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const Oe=ne[Ee];M.format!==ui?Ue!==null?D?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,Oe.width,Oe.height,Ue,le,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Be,Oe.width,Oe.height,0,Ue,le,Oe.data)}}}else{if(ne=M.mipmaps,D&&ce){ne.length>0&&pe++;const J=dt(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Be,J.width,J.height)}for(let J=0;J<6;J++)if(te){D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Ue,le,de[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,de[J].width,de[J].height,0,Ue,le,de[J].data);for(let Ee=0;Ee<ne.length;Ee++){const lt=ne[Ee].image[J].image;D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,lt.width,lt.height,Ue,le,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Be,lt.width,lt.height,0,Ue,le,lt.data)}}else{D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,le,de[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Ue,le,de[J]);for(let Ee=0;Ee<ne.length;Ee++){const Oe=ne[Ee];D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Ue,le,Oe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Be,Ue,le,Oe.image[J])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),K.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Se(R,M,z,j,Z,K){const Me=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),Te=T(z.internalFormat,Me,ae,z.colorSpace),ue=n.get(M),te=n.get(z);if(te.__renderTarget=M,!ue.__hasExternalTextures){const de=Math.max(1,M.width>>K),Fe=Math.max(1,M.height>>K);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,Te,de,Fe,M.depth,0,Me,ae,null):t.texImage2D(Z,K,Te,de,Fe,0,Me,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Z,te.__webglTexture,0,ve(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Z,te.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,K=x(M.stencilBuffer,Z),Me=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=ve(M);qe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,K,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,K,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,K,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,R)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const K=j[Z],Me=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),Te=T(K.internalFormat,Me,ae,K.colorSpace),ue=ve(M);z&&qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,Te,M.width,M.height):qe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,Te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Te,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=j.__webglTexture,K=ve(M);if(M.depthTexture.format===Oo)qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Bo)qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?Ne(M.__webglFramebuffer[0],R):Ne(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),He(M.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),He(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(R,M,z){const j=n.get(R);M!==void 0&&Se(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ze(R)}function ye(R){const M=R.texture,z=n.get(R),j=n.get(M);R.addEventListener("dispose",b);const Z=R.textures,K=R.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let Te=0;Te<M.mipmaps.length;Te++)z.__webglFramebuffer[ae][Te]=r.createFramebuffer()}else z.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)z.__webglFramebuffer[ae]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Me)for(let ae=0,Te=Z.length;ae<Te;ae++){const ue=n.get(Z[ae]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const Te=Z[ae];z.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const ue=s.convert(Te.format,Te.colorSpace),te=s.convert(Te.type),de=T(Te.internalFormat,ue,te,Te.colorSpace,R.isXRRenderTarget===!0),Fe=ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,de,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),He(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),De(r.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Se(z.__webglFramebuffer[ae][Te],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else Se(z.__webglFramebuffer[ae],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,Te=Z.length;ae<Te;ae++){const ue=Z[ae],te=n.get(ue);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),De(r.TEXTURE_2D,ue),Se(z.__webglFramebuffer,R,ue,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(ue)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),De(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Se(z.__webglFramebuffer[Te],R,M,r.COLOR_ATTACHMENT0,ae,Te);else Se(z.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ae,0);m(M)&&p(ae),t.unbindTexture()}R.depthBuffer&&Ze(R)}function U(R){const M=R.textures;for(let z=0,j=M.length;z<j;z++){const Z=M[z];if(m(Z)){const K=y(R),Me=n.get(Z).__webglTexture;t.bindTexture(K,Me),p(K),t.unbindTexture()}}}const ct=[],We=[];function V(R){if(R.samples>0){if(qe(R)===!1){const M=R.textures,z=R.width,j=R.height;let Z=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(R),ae=M.length>1;if(ae)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const te=n.get(M[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,z,j,0,0,z,j,Z,r.NEAREST),l===!0&&(ct.length=0,We.length=0,ct.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(K),We.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,We)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const te=n.get(M[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ve(R){return Math.min(i.maxSamples,R.samples)}function qe(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function we(R,M){const z=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Gs&&z!==ji&&(at.getTransfer(z)===_t?(j!==ui||Z!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=qe}function VM(r,e){function t(n,i=ji){let s;const o=at.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===Wu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===mp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return r.BYTE;if(n===pp)return r.SHORT;if(n===No)return r.UNSIGNED_SHORT;if(n===Gu)return r.INT;if(n===Kr)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Ys)return r.HALF_FLOAT;if(n===_p)return r.ALPHA;if(n===gp)return r.RGB;if(n===ui)return r.RGBA;if(n===Oo)return r.DEPTH_COMPONENT;if(n===Bo)return r.DEPTH_STENCIL;if(n===vp)return r.RED;if(n===Yu)return r.RED_INTEGER;if(n===xp)return r.RG;if(n===qu)return r.RG_INTEGER;if(n===$u)return r.RGBA_INTEGER;if(n===Na||n===Fa||n===Oa||n===Ba)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===Yc||n===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xc||n===Yc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$c||n===Kc||n===Zc||n===jc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===lu||n===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sp||n===uu||n===hu||n===fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new cn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:GM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends qs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new XM,m=t.getContextAttributes();let p=null,y=null;const T=[],x=[],A=new vt;let w=null;const b=new ti;b.viewport=new Ft;const C=new ti;C.viewport=new Ft;const S=[b,C],v=new f0;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=T[$];return re===void 0&&(re=new $l,T[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=T[$];return re===void 0&&(re=new $l,T[$]=re),re.getGripSpace()},this.getHand=function($){let re=T[$];return re===void 0&&(re=new $l,T[$]=re),re.getHandSpace()};function k($){const re=x.indexOf($.inputSource);if(re===-1)return;const _e=T[re];_e!==void 0&&(_e.update($.inputSource,$.frame,c||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let $=0;$<T.length;$++){const re=x[$];re!==null&&(x[$]=null,T[$].disconnect(re))}L=null,N=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,se=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Bo:Oo,se=m.stencil?Fo:Kr);const He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(He),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mr(f.textureWidth,f.textureHeight,{format:ui,type:Hi,depthTexture:new Up(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new mr(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let re=0;re<$.removed.length;re++){const _e=$.removed[re],se=x.indexOf(_e);se>=0&&(x[se]=null,T[se].disconnect(_e))}for(let re=0;re<$.added.length;re++){const _e=$.added[re];let se=x.indexOf(_e);if(se===-1){for(let He=0;He<T.length;He++)if(He>=x.length){x.push(_e),se=He;break}else if(x[He]===null){x[He]=_e,se=He;break}if(se===-1)break}const Se=T[se];Se&&Se.connect(_e)}}const O=new Y,H=new Y;function B($,re,_e){O.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(_e.matrixWorld);const se=O.distanceTo(H),Se=re.projectionMatrix.elements,He=_e.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),Ze=Se[14]/(Se[10]+1),Qe=(Se[9]+1)/Se[5],ye=(Se[9]-1)/Se[5],U=(Se[8]-1)/Se[0],ct=(He[8]+1)/He[0],We=Ne*U,V=Ne*ct,ve=se/(-U+ct),qe=ve*-U;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(ve),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ce=Ne+ve,we=Ze+ve,dt=We-qe,R=V+(se-qe),M=Qe*Ze/we*Ce,z=ye*Ze/we*Ce;$.projectionMatrix.makePerspective(dt,R,M,z,Ce,we),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let re=$.near,_e=$.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),v.near=C.near=b.near=re,v.far=C.far=b.far=_e,(L!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,N=v.far),b.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,v.layers.mask=b.layers.mask|C.layers.mask;const se=$.parent,Se=v.cameras;Q(v,se);for(let He=0;He<Se.length;He++)Q(Se[He],se);Se.length===2?B(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),P($,v,se)};function P($,re,_e){_e===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=du*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let oe=null;function De($,re){if(u=re.getViewerPose(c||o),_=re,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Ne=0;Ne<_e.length;Ne++){const Ze=_e[Ne];let Qe=null;if(d!==null)Qe=d.getViewport(Ze);else{const U=h.getViewSubImage(f,Ze);Qe=U.viewport,Ne===0&&(e.setRenderTargetTextures(y,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(y))}let ye=S[Ne];ye===void 0&&(ye=new ti,ye.layers.enable(Ne),ye.viewport=new Ft,S[Ne]=ye),ye.matrix.fromArray(Ze.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ze.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ne===0&&(v.matrix.copy(ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(ye)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(_e[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,i.renderState)}}for(let _e=0;_e<T.length;_e++){const se=x[_e],Se=T[_e];se!==null&&Se!==void 0&&Se.update(se,re,c||o)}oe&&oe($,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const Ye=new Np;Ye.setAnimationLoop(De),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Ar=new Vi,qM=new Ht;function $M(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,x=y.envMapRotation;T&&(m.envMap.value=T,Ar.copy(x),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Ar)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const x=T.program;n.uniformBlockBinding(y,x)}function c(y,T){let x=i[y.id];x===void 0&&(_(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const A=T.program;n.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const T=h();y.__bindingPointIndex=T;const x=r.createBuffer(),A=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=i[y.id],x=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,b=x.length;w<b;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,v=C.length;S<v;S++){const L=C[S];if(d(L,w,S,A)===!0){const N=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<k.length;q++){const O=k[q],H=g(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,N+W,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,T,x,A){const w=y.value,b=T+"_"+x;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(y){const T=y.uniforms;let x=0;const A=16;for(let b=0,C=T.length;b<C;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let v=0,L=S.length;v<L;v++){const N=S[v],k=Array.isArray(N.value)?N.value:[N.value];for(let W=0,q=k.length;W<q;W++){const O=k[W],H=g(O),B=x%A,Q=B%H.boundary,P=B+Q;x+=Q,P!==0&&A-P<H.storage&&(x+=A-P),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=H.storage}}}const w=x%A;return w>0&&(x+=A-w),y.__size=x,y.__cache={},this}function g(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ZM{constructor(e={}){const{canvas:t=wg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=xn;let w=0,b=0,C=null,S=-1,v=null;const L=new Ft,N=new Ft;let k=null;const W=new ft(0);let q=0,O=t.width,H=t.height,B=1,Q=null,P=null;const oe=new Ft(0,0,O,H),De=new Ft(0,0,O,H);let Ye=!1;const $=new Lp;let re=!1,_e=!1;const se=new Ht,Se=new Ht,He=new Y,Ne=new Ft,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function ye(){return C===null?B:1}let U=n;function ct(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",J,!1),U===null){const F="webgl2";if(U=ct(F,E),U===null)throw ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let We,V,ve,qe,Ce,we,dt,R,M,z,j,Z,K,Me,ae,Te,ue,te,de,Fe,Ue,le,Be,D;function ce(){We=new oS(U),We.init(),le=new VM(U,We),V=new Qx(U,We,e,le),ve=new kM(U,We),V.reverseDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),qe=new cS(U),Ce=new wM,we=new HM(U,We,ve,Ce,V,le,qe),dt=new tS(x),R=new sS(x),M=new m0(U),Be=new jx(U,M),z=new aS(U,M,qe,Be),j=new hS(U,z,M,qe),de=new uS(U,V,we),Te=new eS(Ce),Z=new AM(x,dt,R,We,V,Be,Te),K=new $M(x,Ce),Me=new CM,ae=new NM(We),te=new Zx(x,dt,R,ve,j,d,l),ue=new BM(x,j,V),D=new KM(U,qe,V,ve),Fe=new Jx(U,We,qe),Ue=new lS(U,We,qe),qe.programs=Z.programs,x.capabilities=V,x.extensions=We,x.properties=Ce,x.renderLists=Me,x.shadowMap=ue,x.state=ve,x.info=qe}ce();const ee=new YM(x,U);this.xr=ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(O,H,!1))},this.getSize=function(E){return E.set(O,H)},this.setSize=function(E,F,X=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,H=F,t.width=Math.floor(E*B),t.height=Math.floor(F*B),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(O*B,H*B).floor()},this.setDrawingBufferSize=function(E,F,X){O=E,H=F,B=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,F,X,G){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,F,X,G),ve.viewport(L.copy(oe).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(De)},this.setScissor=function(E,F,X,G){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,F,X,G),ve.scissor(N.copy(De).multiplyScalar(B).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){ve.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){P=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let G=0;if(E){let I=!1;if(C!==null){const ie=C.texture.format;I=ie===$u||ie===qu||ie===Yu}if(I){const ie=C.texture.type,fe=ie===Hi||ie===Kr||ie===No||ie===Fo||ie===Wu||ie===Xu,Ae=te.getClearColor(),xe=te.getClearAlpha(),Ie=Ae.r,ze=Ae.g,Le=Ae.b;fe?(_[0]=Ie,_[1]=ze,_[2]=Le,_[3]=xe,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Ie,g[1]=ze,g[2]=Le,g[3]=xe,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",J,!1),te.dispose(),Me.dispose(),ae.dispose(),Ce.dispose(),dt.dispose(),R.dispose(),j.dispose(),Be.dispose(),D.dispose(),Z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",he),ee.removeEventListener("sessionend",Ge),Pe.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=qe.autoReset,F=ue.enabled,X=ue.autoUpdate,G=ue.needsUpdate,I=ue.type;ce(),qe.autoReset=E,ue.enabled=F,ue.autoUpdate=X,ue.needsUpdate=G,ue.type=I}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){const F=E.target;F.removeEventListener("dispose",Ee),Oe(F)}function Oe(E){lt(E),Ce.remove(E)}function lt(E){const F=Ce.get(E).programs;F!==void 0&&(F.forEach(function(X){Z.releaseProgram(X)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,G,I,ie){F===null&&(F=Ze);const fe=I.isMesh&&I.matrixWorld.determinant()<0,Ae=Ln(E,F,X,G,I);ve.setMaterial(G,fe);let xe=X.index,Ie=1;if(G.wireframe===!0){if(xe=z.getWireframeAttribute(X),xe===void 0)return;Ie=2}const ze=X.drawRange,Le=X.attributes.position;let Xe=ze.start*Ie,mt=(ze.start+ze.count)*Ie;ie!==null&&(Xe=Math.max(Xe,ie.start*Ie),mt=Math.min(mt,(ie.start+ie.count)*Ie)),xe!==null?(Xe=Math.max(Xe,0),mt=Math.min(mt,xe.count)):Le!=null&&(Xe=Math.max(Xe,0),mt=Math.min(mt,Le.count));const Lt=mt-Xe;if(Lt<0||Lt===1/0)return;Be.setup(I,G,Ae,X,xe);let bt,Mt=Fe;if(xe!==null&&(bt=M.get(xe),Mt=Ue,Mt.setIndex(bt)),I.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*ye()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(I.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),ve.setLineWidth(ke*ye()),I.isLineSegments?Mt.setMode(U.LINES):I.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else I.isPoints?Mt.setMode(U.POINTS):I.isSprite&&Mt.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Mt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ke=I._multiDrawStarts,Rt=I._multiDrawCounts,ot=I._multiDrawCount,Un=xe?M.get(xe).bytesPerElement:1,Jr=Ce.get(G).currentProgram.getUniforms();for(let In=0;In<ot;In++)Jr.setValue(U,"_gl_DrawID",In),Mt.render(ke[In]/Un,Rt[In])}else if(I.isInstancedMesh)Mt.renderInstances(Xe,Lt,I.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,ke);Mt.renderInstances(Xe,Lt,Rt)}else Mt.render(Xe,Lt)};function ge(E,F,X){E.transparent===!0&&E.side===gi&&E.forceSinglePass===!1?(E.side=Pn,E.needsUpdate=!0,xt(E,F,X),E.side=pr,E.needsUpdate=!0,xt(E,F,X),E.side=gi):xt(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),p=ae.get(X),p.init(F),T.push(p),X.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),E!==X&&E.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const G=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Ae=ie[fe];ge(Ae,X,I),G.add(Ae)}else ge(ie,X,I),G.add(ie)}),p=T.pop(),G},this.compileAsync=function(E,F,X=null){const G=this.compile(E,F,X);return new Promise(I=>{function ie(){if(G.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){I(E);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Re=null;function $e(E){Re&&Re(E)}function he(){Pe.stop()}function Ge(){Pe.start()}const Pe=new Np;Pe.setAnimationLoop($e),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){Re=E,ee.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},ee.addEventListener("sessionstart",he),ee.addEventListener("sessionend",Ge),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,C),p=ae.get(E,T.length),p.init(F),T.push(p),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Se),_e=this.localClippingEnabled,re=Te.init(this.clippingPlanes,_e),m=Me.get(E,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Ve(ie,F,-1/0,x.sortObjects)}Ve(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,P),Qe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Qe&&te.addToRenderList(m,E),this.info.render.frame++,re===!0&&Te.beginShadows();const X=p.state.shadowsArray;ue.render(X,E,F),re===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,I=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ie=F.cameras;if(I.length>0)for(let fe=0,Ae=ie.length;fe<Ae;fe++){const xe=ie[fe];it(G,I,E,xe)}Qe&&te.render(E);for(let fe=0,Ae=ie.length;fe<Ae;fe++){const xe=ie[fe];It(m,E,xe,xe.viewport)}}else I.length>0&&it(G,I,E,F),Qe&&te.render(E),It(m,E,F);C!==null&&b===0&&(we.updateMultisampleRenderTarget(C),we.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,F),Be.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],re===!0&&Te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ve(E,F,X,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){G&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const fe=j.update(E),Ae=E.material;Ae.visible&&m.push(E,fe,Ae,X,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const fe=j.update(E),Ae=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ne.copy(fe.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Ae)){const xe=fe.groups;for(let Ie=0,ze=xe.length;Ie<ze;Ie++){const Le=xe[Ie],Xe=Ae[Le.materialIndex];Xe&&Xe.visible&&m.push(E,fe,Xe,X,Ne.z,Le)}}else Ae.visible&&m.push(E,fe,Ae,X,Ne.z,null)}}const ie=E.children;for(let fe=0,Ae=ie.length;fe<Ae;fe++)Ve(ie[fe],F,X,G)}function It(E,F,X,G){const I=E.opaque,ie=E.transmissive,fe=E.transparent;p.setupLightsView(X),re===!0&&Te.setGlobalState(x.clippingPlanes,X),G&&ve.viewport(L.copy(G)),I.length>0&&yt(I,F,X),ie.length>0&&yt(ie,F,X),fe.length>0&&yt(fe,F,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function it(E,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new mr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ys:Hi,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ie=p.state.transmissionRenderTarget[G.id],fe=G.viewport||L;ie.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(ie),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&te.render(X);const ze=x.toneMapping;x.toneMapping=lr;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),re===!0&&Te.setGlobalState(x.clippingPlanes,G),yt(E,X,G),we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let mt=0,Lt=F.length;mt<Lt;mt++){const bt=F[mt],Mt=bt.object,ke=bt.geometry,Rt=bt.material,ot=bt.group;if(Rt.side===gi&&Mt.layers.test(G.layers)){const Un=Rt.side;Rt.side=Pn,Rt.needsUpdate=!0,Vt(Mt,X,G,ke,Rt,ot),Rt.side=Un,Rt.needsUpdate=!0,Xe=!0}}Xe===!0&&(we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie))}x.setRenderTarget(Ae,xe,Ie),x.setClearColor(W,q),Le!==void 0&&(G.viewport=Le),x.toneMapping=ze}function yt(E,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let I=0,ie=E.length;I<ie;I++){const fe=E[I],Ae=fe.object,xe=fe.geometry,Ie=fe.group;let ze=fe.material;ze.allowOverride===!0&&G!==null&&(ze=G),Ae.layers.test(X.layers)&&Vt(Ae,F,X,xe,ze,Ie)}}function Vt(E,F,X,G,I,ie){E.onBeforeRender(x,F,X,G,I,ie),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(x,F,X,G,E,ie),I.transparent===!0&&I.side===gi&&I.forceSinglePass===!1?(I.side=Pn,I.needsUpdate=!0,x.renderBufferDirect(X,F,G,I,E,ie),I.side=pr,I.needsUpdate=!0,x.renderBufferDirect(X,F,G,I,E,ie),I.side=gi):x.renderBufferDirect(X,F,G,I,E,ie),E.onAfterRender(x,F,X,G,I,ie)}function xt(E,F,X){F.isScene!==!0&&(F=Ze);const G=Ce.get(E),I=p.state.lights,ie=p.state.shadowsArray,fe=I.state.version,Ae=Z.getParameters(E,I.state,ie,F,X),xe=Z.getProgramCacheKey(Ae);let Ie=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?R:dt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Ee),Ie=new Map,G.programs=Ie);let ze=Ie.get(xe);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===fe)return ut(E,Ae),ze}else Ae.uniforms=Z.getUniforms(E),E.onBeforeCompile(Ae,x),ze=Z.acquireProgram(Ae,xe),Ie.set(xe,ze),G.uniforms=Ae.uniforms;const Le=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Te.uniform),ut(E,Ae),G.needsLights=un(E),G.lightsStateVersion=fe,G.needsLights&&(Le.ambientLightColor.value=I.state.ambient,Le.lightProbe.value=I.state.probe,Le.directionalLights.value=I.state.directional,Le.directionalLightShadows.value=I.state.directionalShadow,Le.spotLights.value=I.state.spot,Le.spotLightShadows.value=I.state.spotShadow,Le.rectAreaLights.value=I.state.rectArea,Le.ltc_1.value=I.state.rectAreaLTC1,Le.ltc_2.value=I.state.rectAreaLTC2,Le.pointLights.value=I.state.point,Le.pointLightShadows.value=I.state.pointShadow,Le.hemisphereLights.value=I.state.hemi,Le.directionalShadowMap.value=I.state.directionalShadowMap,Le.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Le.spotShadowMap.value=I.state.spotShadowMap,Le.spotLightMatrix.value=I.state.spotLightMatrix,Le.spotLightMap.value=I.state.spotLightMap,Le.pointShadowMap.value=I.state.pointShadowMap,Le.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function St(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ka.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ut(E,F){const X=Ce.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Ln(E,F,X,G,I){F.isScene!==!0&&(F=Ze),we.resetTextureUnits();const ie=F.fog,fe=G.isMeshStandardMaterial?F.environment:null,Ae=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gs,xe=(G.isMeshStandardMaterial?R:dt).get(G.envMap||fe),Ie=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color;let Lt=lr;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=bt!==void 0?bt.length:0,ke=Ce.get(G),Rt=p.state.lights;if(re===!0&&(_e===!0||E!==v)){const hn=E===v&&G.id===S;Te.setState(G,E,hn)}let ot=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Rt.state.version||ke.outputColorSpace!==Ae||I.isBatchedMesh&&ke.batching===!1||!I.isBatchedMesh&&ke.batching===!0||I.isBatchedMesh&&ke.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ke.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ke.instancing===!1||!I.isInstancedMesh&&ke.instancing===!0||I.isSkinnedMesh&&ke.skinning===!1||!I.isSkinnedMesh&&ke.skinning===!0||I.isInstancedMesh&&ke.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ke.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ke.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ke.instancingMorph===!1&&I.morphTexture!==null||ke.envMap!==xe||G.fog===!0&&ke.fog!==ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Te.numPlanes||ke.numIntersection!==Te.numIntersection)||ke.vertexAlphas!==Ie||ke.vertexTangents!==ze||ke.morphTargets!==Le||ke.morphNormals!==Xe||ke.morphColors!==mt||ke.toneMapping!==Lt||ke.morphTargetsCount!==Mt)&&(ot=!0):(ot=!0,ke.__version=G.version);let Un=ke.currentProgram;ot===!0&&(Un=xt(G,F,I));let Jr=!1,In=!1,Ks=!1;const At=Un.getUniforms(),Kn=ke.uniforms;if(ve.useProgram(Un.program)&&(Jr=!0,In=!0,Ks=!0),G.id!==S&&(S=G.id,In=!0),Jr||v!==E){ve.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),Cg(se),Pg(se),At.setValue(U,"projectionMatrix",se)):At.setValue(U,"projectionMatrix",E.projectionMatrix),At.setValue(U,"viewMatrix",E.matrixWorldInverse);const Mn=At.map.cameraPosition;Mn!==void 0&&Mn.setValue(U,He.setFromMatrixPosition(E.matrixWorld)),V.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,In=!0,Ks=!0)}if(I.isSkinnedMesh){At.setOptional(U,I,"bindMatrix"),At.setOptional(U,I,"bindMatrixInverse");const hn=I.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),At.setValue(U,"boneTexture",hn.boneTexture,we))}I.isBatchedMesh&&(At.setOptional(U,I,"batchingTexture"),At.setValue(U,"batchingTexture",I._matricesTexture,we),At.setOptional(U,I,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",I._indirectTexture,we),At.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",I._colorsTexture,we));const Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&de.update(I,X,Un),(In||ke.receiveShadow!==I.receiveShadow)&&(ke.receiveShadow=I.receiveShadow,At.setValue(U,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kn.envMap.value=xe,Kn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Kn.envMapIntensity.value=F.environmentIntensity),In&&(At.setValue(U,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Tt(Kn,Ks),ie&&G.fog===!0&&K.refreshFogUniforms(Kn,ie),K.refreshMaterialUniforms(Kn,G,B,H,p.state.transmissionRenderTarget[E.id]),ka.upload(U,St(ke),Kn,we)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ka.upload(U,St(ke),Kn,we),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(U,"center",I.center),At.setValue(U,"modelViewMatrix",I.modelViewMatrix),At.setValue(U,"normalMatrix",I.normalMatrix),At.setValue(U,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const hn=G.uniformsGroups;for(let Mn=0,ul=hn.length;Mn<ul;Mn++){const vr=hn[Mn];D.update(vr,Un),D.bind(vr,Un)}}return Un}function Tt(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function un(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,X){const G=Ce.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ce.get(E.texture).__webglTexture=F,Ce.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=Ce.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const $n=U.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){C=E,w=F,b=X;let G=!0,I=null,ie=!1,fe=!1;if(E){const xe=Ce.get(E);if(xe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)we.setupRenderTarget(E);else if(xe.__hasExternalTextures)we.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(xe.__boundDepthTexture!==Le){if(Le!==null&&Ce.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const ze=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?I=ze[F][X]:I=ze[F],ie=!0):E.samples>0&&we.useMultisampledRTT(E)===!1?I=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?I=ze[X]:I=ze,L.copy(E.viewport),N.copy(E.scissor),k=E.scissorTest}else L.copy(oe).multiplyScalar(B).floor(),N.copy(De).multiplyScalar(B).floor(),k=Ye;if(X!==0&&(I=$n),ve.bindFramebuffer(U.FRAMEBUFFER,I)&&G&&ve.drawBuffers(E,I),ve.viewport(L),ve.scissor(N),ve.setScissorTest(k),ie){const xe=Ce.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(fe){const xe=Ce.get(E.texture),Ie=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,X,Ie)}else if(E!==null&&X!==0){const xe=Ce.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(E,F,X,G,I,ie,fe,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){ve.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Ie=E.textures[Ae],ze=Ie.format,Le=Ie.type;if(!V.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&X>=0&&X<=E.height-I&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(F,X,G,I,le.convert(ze),le.convert(Le),ie))}finally{const Ie=C!==null?Ce.get(C).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,G,I,ie,fe,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(F>=0&&F<=E.width-G&&X>=0&&X<=E.height-I){ve.bindFramebuffer(U.FRAMEBUFFER,xe);const Ie=E.textures[Ae],ze=Ie.format,Le=Ie.type;if(!V.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(F,X,G,I,le.convert(ze),le.convert(Le),0);const mt=C!==null?Ce.get(C).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,mt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rg(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(Xe),U.deleteSync(Lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const G=Math.pow(2,-X),I=Math.floor(E.image.width*G),ie=Math.floor(E.image.height*G),fe=F!==null?F.x:0,Ae=F!==null?F.y:0;we.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,fe,Ae,I,ie),ve.unbindTexture()};const Gt=U.createFramebuffer(),Wt=U.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,G=null,I=0,ie=null){ie===null&&(I!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=I,I=0):ie=0);let fe,Ae,xe,Ie,ze,Le,Xe,mt,Lt;const bt=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(X!==null)fe=X.max.x-X.min.x,Ae=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,ze=X.min.y,Le=X.isBox3?X.min.z:0;else{const Zn=Math.pow(2,-I);fe=Math.floor(bt.width*Zn),Ae=Math.floor(bt.height*Zn),E.isDataArrayTexture?xe=bt.depth:E.isData3DTexture?xe=Math.floor(bt.depth*Zn):xe=1,Ie=0,ze=0,Le=0}G!==null?(Xe=G.x,mt=G.y,Lt=G.z):(Xe=0,mt=0,Lt=0);const Mt=le.convert(F.format),ke=le.convert(F.type);let Rt;F.isData3DTexture?(we.setTexture3D(F,0),Rt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(we.setTexture2DArray(F,0),Rt=U.TEXTURE_2D_ARRAY):(we.setTexture2D(F,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),Un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jr=U.getParameter(U.UNPACK_SKIP_PIXELS),In=U.getParameter(U.UNPACK_SKIP_ROWS),Ks=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le);const At=E.isDataArrayTexture||E.isData3DTexture,Kn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Zn=Ce.get(E),hn=Ce.get(F),Mn=Ce.get(Zn.__renderTarget),ul=Ce.get(hn.__renderTarget);ve.bindFramebuffer(U.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,ul.__webglFramebuffer);for(let vr=0;vr<xe;vr++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(E).__webglTexture,I,Le+vr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(F).__webglTexture,ie,Lt+vr)),U.blitFramebuffer(Ie,ze,fe,Ae,Xe,mt,fe,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(I!==0||E.isRenderTargetTexture||Ce.has(E)){const Zn=Ce.get(E),hn=Ce.get(F);ve.bindFramebuffer(U.READ_FRAMEBUFFER,Gt),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wt);for(let Mn=0;Mn<xe;Mn++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zn.__webglTexture,I,Le+Mn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zn.__webglTexture,I),Kn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,ie,Lt+Mn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,ie),I!==0?U.blitFramebuffer(Ie,ze,fe,Ae,Xe,mt,fe,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):Kn?U.copyTexSubImage3D(Rt,ie,Xe,mt,Lt+Mn,Ie,ze,fe,Ae):U.copyTexSubImage2D(Rt,ie,Xe,mt,Ie,ze,fe,Ae);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Kn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Rt,ie,Xe,mt,Lt,fe,Ae,xe,Mt,ke,bt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,ie,Xe,mt,Lt,fe,Ae,xe,Mt,bt.data):U.texSubImage3D(Rt,ie,Xe,mt,Lt,fe,Ae,xe,Mt,ke,bt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,Xe,mt,fe,Ae,Mt,ke,bt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,Xe,mt,bt.width,bt.height,Mt,bt.data):U.texSubImage2D(U.TEXTURE_2D,ie,Xe,mt,fe,Ae,Mt,ke,bt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jr),U.pixelStorei(U.UNPACK_SKIP_ROWS,In),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ks),ie===0&&F.generateMipmaps&&U.generateMipmap(Rt),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,G=null,I=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,X,G,I)},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&we.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,ve.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const mu=[{title:"RAG Search Engine",tag:"LLM · RETRIEVAL",color:"#1f4bff",image:""},{title:"Agent Orchestrator",tag:"AGENTS · TOOLS",color:"#ff4a1c",image:""},{title:"Voice Assistant",tag:"SPEECH · REALTIME",color:"#0f9d6b",image:""},{title:"Doc Intelligence",tag:"OCR · EXTRACTION",color:"#7a2cff",image:""},{title:"Eval Dashboard",tag:"EVALS · METRICS",color:"#111111",image:""},{title:"Fine-tune Lab",tag:"TRAINING · LORA",color:"#e6a100",image:""}],ic=mu.length,jM=6.6,kp=1,Of=jM+kp,JM=.3,QM=.45,eE=3.9,tE=2.45,Bf=.22,nE=`
  uniform float uBend;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z -= (p.x * p.x * 0.12 + p.y * p.y * 0.16) * uBend; // tube-screen bulge
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,iE=`
  uniform sampler2D uTex;
  uniform float uOpacity;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    vec3 c = texture2D(uTex, uv).rgb;
    c *= 0.93 + 0.07 * sin(uv.y * 900.0 - uTime * 6.0); // scanlines
    vec2 e = smoothstep(0.0, 0.03, uv) * smoothstep(0.0, 0.03, 1.0 - uv);
    c *= mix(0.7, 1.0, e.x * e.y); // dark tube edges
    gl_FragColor = vec4(c, uOpacity);
  }
`,rE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",sE=`
  uniform sampler2D tScene;
  uniform float uTime;
  uniform float uGlitch;
  uniform float uAspect;
  uniform vec3 uBg;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec2 lens(vec2 uv) {
    vec2 c = uv - 0.5;
    vec2 a = c * vec2(uAspect, 1.0);
    return 0.5 + c * (1.0 + ${Bf.toFixed(3)} * dot(a, a)) / (1.0 + ${(Bf*.25).toFixed(3)}); // barrel
  }
  vec3 tap(vec2 uv) {
    vec2 q = lens(uv);
    vec2 inside = step(0.0, q) * step(q, vec2(1.0));
    return mix(uBg, texture2D(tScene, q).rgb, inside.x * inside.y);
  }
  void main() {
    vec2 uv = vUv;
    float band = floor(uv.y * 28.0 + floor(uTime * 14.0) * 3.0);
    float n = hash(vec2(band, floor(uTime * 20.0)));
    uv.x += (n - 0.5) * step(0.82, n) * uGlitch * 0.12; // tearing bands while moving
    float s = 0.0015 + uGlitch * 0.012;
    vec3 c = vec3(tap(uv + vec2(s, 0.0)).r, tap(uv).g, tap(uv - vec2(s, 0.0)).b);
    c += (hash(vUv * 900.0 + uTime) - 0.5) * 0.035; // grain
    c += 0.012 - 0.024 * step(0.5, fract(vUv.y * 320.0)); // fine scanlines, zero-mean so bg matches the page
    gl_FragColor = vec4(c, 1.0);
    #include <colorspace_fragment>
  }
`;function oE(r,e){const t=document.createElement("canvas");t.width=1280,t.height=800;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,800);i.addColorStop(0,r.color),i.addColorStop(1,"#ffffff"),n.fillStyle=i,n.fillRect(0,0,1280,800),n.fillStyle="#fff",n.font="110px Silkscreen",n.fillText(r.title,64,180,1150),n.font='28px "Space Mono"',n.fillText(`[0${e+1}]  ${r.tag}`,64,250),n.fillStyle="rgba(0,0,0,.55)",n.fillText("VIEW CASE  ->",64,740);const s=new s0(t);return s.colorSpace=xn,s}function aE(r,{reduced:e,scrollTo:t,lenis:n}){const i=r.querySelector(".work-gl"),s=r.querySelector(".work-list"),o=mu.map((O,H)=>{const B=document.createElement("li"),Q=document.createElement("button");return Q.textContent=`[0${H+1}] ${O.title}`,Q.addEventListener("click",()=>t(v(H))),B.append(Q),s.append(B),Q});let a;try{a=new ZM({canvas:i,antialias:!0})}catch{return}a.setPixelRatio(Math.min(devicePixelRatio,2)),a.outputColorSpace=xn;const l=O=>getComputedStyle(document.documentElement).getPropertyValue(O).trim(),c=new hf,u=new ti(35,1,.1,100),h=new Xs(eE,tE,40,24),f=new h0,d=mu.map((O,H)=>{const B=new Ti({vertexShader:nE,fragmentShader:iE,transparent:!0,side:gi,uniforms:{uTex:{value:oE(O,H)},uBend:{value:1},uOpacity:{value:1},uTime:{value:0}}});O.image&&f.load(O.image,P=>{P.colorSpace=xn,B.uniforms.uTex.value.dispose(),B.uniforms.uTex.value=P});const Q=new hi(h,B);return c.add(Q),Q}),_=new mr(1,1,{type:Ys}),g=new hi(new Xs(2,2),new Ti({vertexShader:rE,fragmentShader:sE,uniforms:{tScene:{value:_.texture},uTime:{value:0},uGlitch:{value:0},uAspect:{value:1},uBg:{value:new ft}},depthTest:!1})),m=new hf;m.add(g);const p=new Ip,y=()=>{c.background=new ft(l("--bg")),g.material.uniforms.uBg.value.copy(c.background)};y(),addEventListener("themechange",()=>{y(),C&&q()});let T=1;function x(){const O=i.clientWidth,H=i.clientHeight;a.setSize(O,H,!1),_.setSize(O*a.getPixelRatio(),H*a.getPixelRatio()),u.aspect=O/H,g.material.uniforms.uAspect.value=u.aspect,T=Math.min(1,u.aspect/1.4),u.position.z=u.aspect<1?3:0,u.updateProjectionMatrix()}x(),addEventListener("resize",x);let A=0,w=0,b=-1,C=!1;const S=Je.create({trigger:r,start:"top top",end:"bottom bottom",onUpdate:O=>A=O.progress*(ic-1),onToggle:O=>C=O.isActive}),v=O=>S.start+(S.end-S.start)*(O/(ic-1));let L;n?.on("scroll",()=>{clearTimeout(L),L=setTimeout(()=>{if(!S.isActive)return;const O=v(Math.round(S.progress*(ic-1)));Math.abs(scrollY-O)>2&&n.scrollTo(O,{duration:.9})},160)}),new IntersectionObserver(([O])=>C=O.isIntersecting).observe(r);function N(O,H){const B=H>0,Q=-H*JM*(B?1.07:1),P=Of*Math.sin(Q);O.position.set(-P*(B?.75:QM)*T,P,kp-Of*Math.cos(Q)),O.rotation.set(Q*4,Q*1.2,Q*.3);const oe=O.material.uniforms;oe.uBend.value=1-Math.min(Math.abs(H),1)*.85,oe.uOpacity.value=Math.min(1,Math.max(0,(2-Math.abs(H))*2)),O.visible=oe.uOpacity.value>.001}const k=new d0;function W(){if(requestAnimationFrame(W),!C||document.hidden)return;const O=Math.min(k.getDelta(),.1),H=k.elapsedTime,B=w;w+=(A-w)*(e?1:1-Math.exp(-O*5));const Q=Math.abs(w-B)/Math.max(O,.001)/60;d.forEach((De,Ye)=>{N(De,Ye-w),De.material.uniforms.uTime.value=H});const P=g.material.uniforms;P.uTime.value=H,P.uGlitch.value=e?0:Math.min(Q*6,.6);const oe=Math.round(w);oe!==b&&(b=oe,o.forEach((De,Ye)=>De.setAttribute("aria-current",String(Ye===oe)))),q()}function q(){a.setRenderTarget(_),a.render(c,u),a.setRenderTarget(null),a.render(m,p)}W()}const zf=22;function lE(r){const e=innerWidth,t=innerHeight,n=Math.max(16,Math.round(Math.min(e,t)/26)),i=Math.ceil(e/n),s=Math.ceil(t/n),o=i+s-2||1,a=(u,h)=>(i-1-u+h)/o*.75+Math.random()*.25,l=[];for(let u=0;u<s;u++)for(let h=0;h<i;h++)l.push(a(h,u));const c=[];for(let u=0;u<zf;u++){const h=u/(zf-1);let f="";for(let _=0;_<s;_++){let g=-1;for(let m=0;m<=i;m++){const p=m<i&&l[_*i+m]<=h===r;p&&g<0&&(g=m),!p&&g>=0&&(f+=`<rect x='${g}' y='${_}' width='${m-g}' height='1'/>`,g=-1)}}const d=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${i} ${s}' width='${i*n}' height='${s*n}' shape-rendering='crispEdges'>${f}</svg>`;c.push(`url("data:image/svg+xml,${encodeURIComponent(d)}")`)}return{frames:c,size:`${i*n}px ${s*n}px`}}function Hp(r,e,t,n){const{frames:i,size:s}=lE(t),o=i.map(a=>({maskImage:a,webkitMaskImage:a,maskSize:s,webkitMaskSize:s,maskRepeat:"no-repeat",webkitMaskRepeat:"no-repeat"}));return r.animate(o,{duration:n,easing:"linear",fill:"forwards",pseudoElement:e}).finished}function cE(r,e=900){if(!document.startViewTransition)return r();const t=document.startViewTransition(r);return t.ready.then(()=>Hp(document.documentElement,"::view-transition-new(root)",!0,e)).catch(()=>{}),t.finished}function uE(r,e=900){return Hp(r,void 0,!1,e).then(()=>r.remove())}_n.registerPlugin(Je);const Qu=document.documentElement,_r=matchMedia("(prefers-reduced-motion: reduce)").matches;let cr=null;_r||(cr=new O_({duration:1.3,easing:r=>1-Math.pow(1-r,4),wheelMultiplier:.9,touchMultiplier:1.4}),cr.on("scroll",Je.update),_n.ticker.add(r=>cr.raf(r*1e3)),_n.ticker.lagSmoothing(0));const Vp=(r,e=1.6)=>cr?cr.scrollTo(r,{duration:e}):window.scrollTo(0,r);document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=document.querySelector(r.getAttribute("href"));t&&(e.preventDefault(),Vp(t.getBoundingClientRect().top+scrollY))}));const eh=document.querySelector(".theme-toggle"),hE=eh.querySelector(".tt-label"),Gp=()=>{const r=Qu.dataset.theme==="dark"?"LIGHT":"DARK";hE.textContent=r,eh.setAttribute("aria-label",`Switch to ${r.toLowerCase()} theme`)},kf=r=>{Qu.dataset.theme=r;try{localStorage.setItem("theme",r)}catch{}Gp(),dispatchEvent(new Event("themechange"))};Gp();let rc=!1;eh.addEventListener("click",async()=>{if(rc)return;const r=Qu.dataset.theme==="dark"?"light":"dark";if(_r)return kf(r);rc=!0,await cE(()=>kf(r)),rc=!1});const Hf="!<>-_\\/[]{}=+*^?#01";document.querySelectorAll("[data-scramble]").forEach(r=>{const e=r.textContent;r.getAttribute("aria-label")||r.setAttribute("aria-label",e);let t;r.addEventListener("mouseenter",()=>{if(_r)return;cancelAnimationFrame(t);const n=performance.now(),i=s=>{const o=Math.min(1,(s-n)/380),a=Math.floor(o*e.length);r.textContent=[...e].map((l,c)=>c<a||l===" "?l:Hf[Math.random()*Hf.length|0]).join(""),o<1&&(t=requestAnimationFrame(i))};t=requestAnimationFrame(i)})});const fE=document.querySelector(".clock"),Wp=()=>fE.textContent=new Date().toLocaleTimeString("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit"});Wp();setInterval(Wp,3e4);function dE(){if(_r)return;_n.utils.toArray("[data-reveal]").forEach(e=>_n.from(e,{y:28,autoAlpha:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 88%",once:!0}})),document.querySelectorAll("[data-words]").forEach(e=>{e.setAttribute("aria-label",e.textContent.trim().replace(/\s+/g," ")),e.innerHTML=e.textContent.trim().split(/\s+/).map(t=>`<span class="w" aria-hidden="true">${t}</span>`).join(" "),_n.to(e.querySelectorAll(".w"),{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 45%",scrub:!0}})});const r={trigger:".hero",start:"top top",end:"bottom top",scrub:!0};_n.to(".hero-name",{yPercent:35,ease:"none",scrollTrigger:r}),_n.to(".hero-intro, .hero-meta",{yPercent:-60,autoAlpha:0,ease:"none",scrollTrigger:r}),_n.utils.toArray(".xp li").forEach((e,t)=>_n.fromTo(e,{xPercent:t%2?4:-4},{xPercent:0,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"top 60%",scrub:!0}})),_n.fromTo(".contact-big .mask:first-child .rise",{xPercent:-18},{xPercent:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 20%",scrub:!0}}),_n.fromTo(".contact-big .mask:last-child .rise",{xPercent:18},{xPercent:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 20%",scrub:!0}})}function pE(){_r||_n.timeline().from(".hero-name .rise",{yPercent:105,duration:1.2,ease:"power4.out"}).from(".nav > *, .hero-meta span, .hero-foot > *",{y:14,autoAlpha:0,duration:.7,stagger:.06,ease:"power3.out"},"-=0.8")}const nl=document.querySelector(".preloader"),mE=nl.querySelector(".pre-count"),_E=nl.querySelector(".pre-bar i");cr?.stop();const sc={p:0},gE=_n.to(sc,{p:100,duration:_r?0:1.6,ease:"power2.inOut",onUpdate:()=>{_E.style.width=sc.p+"%",mE.textContent=String(Math.round(sc.p)).padStart(3,"0")}});Promise.all([document.fonts.ready,gE.then()]).then(()=>{if(aE(document.querySelector(".work"),{reduced:_r,scrollTo:Vp,lenis:cr}),dE(),Je.refresh(),_r)return nl.remove();pE(),uE(nl,1e3).then(()=>cr?.start())});
