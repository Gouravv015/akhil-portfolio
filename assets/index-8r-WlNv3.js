(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function md(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},Nu,tn,Rt,ri=1e8,xt=1/ri,yc=Math.PI*2,ym=yc/4,Em=0,_d=Math.sqrt,Tm=Math.cos,bm=Math.sin,Qt=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},Ou=function(e){return typeof e>"u"},wi=function(e){return typeof e=="object"},An=function(e){return e!==!1},Fu=function(){return typeof window<"u"},jo=function(e){return Ut(e)||Qt(e)},gd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Am=/random\([^)]+\)/g,wm=/,\s*/g,Mh=/(?:-?\.?\d|\.)+/gi,vd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,El=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xd=/[+-]=-?[.\d]+/,Rm=/[^,'"\[\]\s]+/gi,Cm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,_i,Ec,Bu,qn={},Ka={},Sd,Md=function(e){return(Ka=ks(e,qn))&&Ln},ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lo=function(e,t){return!t&&console.warn(e)},yd=function(e,t){return e&&(qn[e]=t)&&Ka&&(Ka[e]=t)||qn},Do=function(){return 0},Pm={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},Lm={suppressEvents:!0},zu={},lr=[],Tc={},Ed,kn={},Tl={},yh=30,Ua=[],Hu="",Gu=function(e){var t=e[0],n,i;if(wi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ua.length;i--&&!Ua[i].targetTest(t););n=Ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xd(e[i],n)))||e.splice(i,1);return e},Gr=function(e){return e._gsap||Gu(si(e))[0]._gsap},Td=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Ou(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Dm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Za=function(){var e=lr.length,t=lr.slice(0),n,i;for(Tc={},lr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vu=function(e){return!!(e._initted||e._startAt||e.add)},bd=function(e,t,n,i){lr.length&&!tn&&Za(),e.render(t,n,!!(tn&&t<0&&Vu(e))),lr.length&&!tn&&Za()},Ad=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rm).length<2?t:Qt(e)?e.trim():e},wd=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Im=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ks=function(e,t){for(var n in t)e[n]=t[n];return e},Eh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xo=function(e){var t=e.parent||Lt,n=e.keyframes?Im(cn(e.keyframes)):Yn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Um=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Rd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},dl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Nm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bc=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Om=function r(e){return!e||e._ts&&r(e.parent)},Th=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var n=Math.floor(e=Pt(e/t));return e&&n===e?n-1:n},Ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pl=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pl(e),n._dirty||Vr(n,e)),e},Cd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ja(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},xi=function(e,t,n,i){return t.parent&&pr(t),t._start=Pt((Wi(n)?n:!n&&Qa(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Lt?Jn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rd(e,t,"_first","_last",e._sort?"_start":0),Qa(t)||(e._recent=t),i||Cd(e,t),e._ts<0&&ml(e,e._tTime),e},Pd=function(e,t){return(qn.ScrollTrigger||ku("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},Ld=function(e,t,n,i,s){if(Xu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ed!==Hn.frame)return lr.push(e),e._lazy=[s,i],1},Fm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Qa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bm=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Fm(e)&&!(!e._initted&&Qa(e))||(e._ts<0||e._dp._ts<0)&&!Qa(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=qo(0,e._tDur,t),u=zs(l,a),e._yoyo&&u&1&&(o=1-o),u!==zs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||tn||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Ld(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&bc(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&pr(e,1),!n&&!tn&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},km=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Pt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ml(e,e._tTime=e._tDur*a),e.parent&&pl(e),n||Vr(e.parent,e),e},bh=function(e){return e instanceof Tn?Vr(e):Hs(e,e._dur)},zm={_start:0,endTime:Do,totalDuration:Do},Jn=function r(e,t,n){var i=e.labels,s=e._recent||zm,o=e.duration()>=ri?s.endTime(!1):e._dur,a,l,c;return Qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},So=function(e,t,n){var i=Wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Gt(t[0],o,t[s+1])},Sr=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Qt(e)||!(t=Cm.exec(e))?"":t[1]},Hm=function(e,t,n){return Sr(n,function(i){return qo(e,t,i)})},Ac=[].slice,Dd=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==_i},Gm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Qt(i)&&!t||Dd(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Qt(e)&&!n&&(Ec||!Gs())?Ac.call((t||Bu).querySelectorAll(e),0):cn(e)?Gm(e,n):Dd(e)?Ac.call(e,0):e?[e]:[]},wc=function(e){return e=si(e)[0]||Lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Lo("Invalid scope")||Bu.createElement("div"):e)}},Id=function(e){return e.sort(function(){return .5-Math.random()})},Ud=function(e){if(Ut(e))return e;var t=wi(e)?e:{each:e},n=Wr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Qt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=o[_],m,E,S,v,A,w,b,C,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,ri])[1],!M){for(b=-ri;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,E=M===ri?0:l?_*h/M-.5:i/M|0,b=0,C=ri,w=0;w<_;w++)S=w%M-m,v=E-(w/M|0),p[w]=A=c?Math.abs(c==="y"?v:S):_d(S*S+v*v),A>b&&(b=A),A<C&&(C=A);i==="random"&&Id(p),p.max=b-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=an(t.amount||t.each)||0,n=n&&_<0?t_(n):n}return _=(p[d]-p.min)/p.max||0,Pt(p.b+(n?n(_):_)*p.v)+p.u}},Rc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:an(n))}},Nd=function(e,t){var n=cn(e),i,s;return!n&&wi(e)&&(i=n=e.radius||ri,e.values?(e=si(e.values),(s=!Wi(e[0]))&&(i*=i)):e=Rc(e.increment)),Sr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ri,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Wi(o)?u:u+an(o)}:Rc(e))},Od=function(e,t,n,i){return Sr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Vm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Wm=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},Xm=function(e,t,n){return Bd(e,t,0,1,n)},Fd=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},qm=function r(e,t,n){var i=t-e;return cn(e)?Fd(e,r(0,e.length),t):Sr(n,function(s){return(i+(s-e)%i)%i+e})},Ym=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?Fd(e,r(0,e.length-1),t):Sr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Io=function(e){return e.replace(Am,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(wm);return Od(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Bd=function(e,t,n,i,s){var o=t-e,a=i-n;return Sr(s,function(l){return n+((l-e)/o*a||0)})},$m=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Qt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=ks(cn(e)?[]:{},e));if(!u){for(l in t)Wu.call(a,e,l,"get",t[l]);s=function(g){return $u(g,a)||(o?e.p:e)}}}return Sr(n,s)},Ah=function(e,t,n){var i=e.labels,s=ri,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,n){var i=e.vars,s=i[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&lr.length&&Za(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},uo=function(e){return pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Gn(e,"onInterrupt"),e},bs,kd=[],zd=function(e){if(e)if(e=!e.name&&e.default||e,Fu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Do,render:$u,add:Wu,kill:h_,modifier:u_,rawVars:0},o={targetTest:0,get:0,getSetter:Yu,aliases:{},register:0};if(Gs(),e!==i){if(kn[t])return;Yn(i,Yn(ja(e,s),o)),ks(i.prototype,ks(s,ja(e,o))),kn[i.prop=t]=i,e.targetTest&&(Ua.push(i),zu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yd(t,i),e.register&&e.register(Ln,i,Rn)}else kd.push(e)},Et=255,ho={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Hd=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&Et,e&Et]:0:ho.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ho[e])i=ho[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Mh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=bl(l+1/3,s,o),i[1]=bl(l,s,o),i[2]=bl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(vd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Mh)||ho.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Et,o=i[1]/Et,a=i[2]/Et,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Gd=function(e){var t=[],n=[],i=-1;return e.split(cr).forEach(function(s){var o=s.match(Ts)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},wh=function(e,t,n){var i="",s=(e+i).match(cr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Hd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Gd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(cr,"1").split(Ts),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(cr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},cr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ho)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Km=/hsl[a]?\(/,Vd=function(e){var t=e.join(" "),n;if(cr.lastIndex=0,cr.test(t))return n=Km.test(t),e[1]=wh(e[1],n),e[0]=wh(e[0],n,Gd(e[1])),!0},Uo,Hn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,E=p===!0,S,v,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,S=A-o,(S>0||E)&&(w=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,o+=S+(S>=s?0:s-S),v=1),E||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](A,d,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Sd&&(!Ec&&Fu()&&(_i=Ec=window,Bu=_i.document||{},qn.gsap=Ln,(_i.gsapVersions||(_i.gsapVersions=[])).push(Ln.version),Md(Ka||_i.GreenSockGlobals||!_i.gsap&&_i||{}),kd.forEach(zd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Uo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Do},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,E){var S=m?function(v,A,w,b){p(v,A,w,b),h.remove(S)}:p;return h.remove(p),a[E?"unshift":"push"](S),Gs(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h})(),Gs=function(){return!Uo&&Hn.wake()},lt={},Zm=/^[\d.\-M][\d.\-,\s]/,jm=/["']/g,Jm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jm,"").trim():+c,i=l.substr(a+1).trim();return t},Qm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},e_=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jm(t[1])]:Qm(e).split(",").map(Ad)):lt._CE&&Zm.test(e)?lt._CE("",e):n},t_=function(e){return function(t){return 1-e(1-t)}},Wr=function(e,t){return e&&(Ut(e)?e:lt[e]||e_(e))||t},es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){lt[a]=qn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Wd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Al=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/yc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*bm((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Wd(a);return s=yc/s,l.config=function(c,u){return r(e,c,u)},l},wl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Wd(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;es(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;es("Elastic",Al("in"),Al("out"),Al());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};es("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});es("Circ",function(r){return-(_d(1-r*r)-1)});es("Sine",function(r){return r===1?1:-Tm(r*ym)+1});es("Back",wl("in"),wl("out"),wl());lt.SteppedEase=lt.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xt;return function(a){return((i*qo(0,o,a)|0)+s)*n}}};Po.ease=lt["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Hu+=r+","+r+"Params,"});var Xd=function(e,t){this.id=Em++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Td,this.set=t?t.getSetter:Yu},No=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Uo||Hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ml(this,n),!s._dp||s.parent||Cd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ja(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(qo(-Math.abs(this._delay),a,s),i!==!1),pl(this),Nm(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Gs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==xt,o;if(s)for(this._tTime-=xt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+xt){s=!1;break}o=o._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ja(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Lm);var i=tn;return tn=n,Vu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ut(n)?n:wd,l=function(){var u=i.then;i.then=null,s&&s(),Ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){uo(this)},r})();Yn(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){md(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Lt&&xi(n.parent||Lt,Ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Pd(Ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return So(0,arguments,this),this},t.from=function(i,s,o){return So(1,arguments,this),this},t.fromTo=function(i,s,o,a){return So(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,Jn(this,o),1),this},t.call=function(i,s,o){return xi(this,Gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Gt(i,o,Jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,xo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,xo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,E,S,v,A,w,b;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,S=this._ts,m=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=Pt(u%p),u===l?(_=this._repeat,d=c):(A=Pt(u/p),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=zs(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(d=c-d,b=1),_!==A&&!this._lock){var C=w&&A&1,M=C===(w&&_&1);if(_<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Pt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=km(this,Pt(a),Pt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Gn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-xt);break}}f=g}else{f=this._last;for(var x=i<0?i:d;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||tn&&Vu(f)),d!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=x?-xt:xt);break}}f=g}}if(E&&!s&&(this.pause(),E.render(d>=a?0:-xt)._zTime=d>=a?1:-1,this._ts))return this._start=v,pl(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&pr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wi(s)||(s=Jn(this,s,i)),!(i instanceof No)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qt(i))return this.addLabel(i,s);if(Ut(i))i=Gt.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Gt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Qt(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&dl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Gt.delayedCall(0,s||Do,o);return a.data="isPause",this._hasPause=1,xi(this,a,Jn(this,i))},t.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&pr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ir!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=si(i),l=this._first,c=Wi(s),u;l;)l instanceof Gt?Dm(l._targets,a)&&(c?(!ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Gt.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Hs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:Jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ah(this,Jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ah(this,Jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Pt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Vr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ri,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Pt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Lt._ts&&(bd(Lt,Ja(i,Lt)),Ed=Hn.frame),Hn.frame>=yh){yh+=Wn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Wn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e})(No);Yn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var n_=function(e,t,n,i,s,o,a){var l=new Rn(this._pt,e,t,0,1,Zd,null,s),c=0,u=0,h,d,f,g,_,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Io(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),d=n.match(El)||[];h=El.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Rs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=El.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xd.test(i)||m)&&(l.e=0),this._pt=l,l},Wu=function(e,t,n,i,s,o,a,l,c,u){Ut(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ut(h)?c?a_:$d:qu,g;if(Qt(i)&&(~i.indexOf("random(")&&(i=Io(i)),i.charAt(1)==="="&&(g=Rs(d,i)+(an(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Cc)return!isNaN(d*i)&&i!==""?(g=new Rn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?c_:Kd,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&ku(t,i),n_.call(this,e,t,d,i,f,l||Wn.stringFilter,c))},i_=function(e,t,n,i,s){if(Ut(e)&&(e=Mo(e,s,t,n,i)),!wi(e)||e.style&&e.nodeType||cn(e)||gd(e))return Qt(e)?Mo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Mo(e[a],s,t,n,i);return o},qd=function(e,t,n,i,s,o){var a,l,c,u;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?t[e]:i_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==bs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ir,Cc,Xu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Nu,v=e.timeline,A=i.easeReverse||h,w,b,C,M,x,L,N,B,V,Y,X,G,z;if(v&&(!d||!s)&&(s="none"),e._ease=Wr(s,Po.ease),e._rEase=A&&(Wr(A)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(B=p[0]?Gr(p[0]).harness:0,G=B&&i[B.prop],w=ja(i,zu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ia:Pm),_._lazy=0),o){if(pr(e._startAt=Gt.set(p,Yn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!a&&!f)&&e._startAt.revert(Ia),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:m},w),G&&(C[B.prop]=G),pr(e._startAt=Gt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&An(l)||l&&!g,b=0;b<p.length;b++){if(x=p[b],N=x._gsap||Gu(p)[b]._gsap,e._ptLookup[b]=Y={},Tc[N.id]&&lr.length&&Za(),X=E===p?b:E.indexOf(x),B&&(V=new B).init(x,G||w,e,X,E)!==!1&&(e._pt=M=new Rn(e._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(te){Y[te]=M}),V.priority&&(L=1)),!B||G)for(C in w)kn[C]&&(V=qd(C,w,e,X,x,E))?V.priority&&(L=1):Y[C]=M=Wu.call(e,x,C,"get",w[C],X,E,0,i.stringFilter);e._op&&e._op[b]&&e.kill(x,e._op[b]),S&&e._pt&&(ir=e,Lt.killTweensOf(x,Y,e.globalTime(t)),z=!e.parent,ir=0),e._pt&&l&&(Tc[N.id]=1)}L&&jd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&v.render(ri,!0,!0)},r_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Cc=1,e.vars[t]="+=0",Xu(e,a),Cc=0,l?Lo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ft(n)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},s_=function(e,t){var n=e[0]?Gr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ks({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},o_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Mo=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):Qt(e)&&~e.indexOf("random(")?Io(e):e},el=Hu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yd={};wn(el+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});el=el.split(",");var Gt=(function(r){md(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:xo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Lt,E=(cn(n)||gd(n)?Wi(n[0]):"length"in i)?[n]:si(n),S,v,A,w,b,C,M,x;if(a._targets=E.length?Gu(E):Lo("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||jo(c)||jo(u)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(S=a.timeline=new Tn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:E}),S.kill(),S.parent=S._dp=Ni(a),S._start=0,d||jo(c)||jo(u)){if(w=E.length,M=d&&Ud(d),wi(d))for(b in d)~el.indexOf(b)&&(x||(x={}),x[b]=d[b]);for(v=0;v<w;v++)A=ja(i,Yd),A.stagger=0,L&&(A.easeReverse=L),x&&ks(A,x),C=E[v],A.duration=+Mo(c,Ni(a),v,C,E),A.delay=(+Mo(u,Ni(a),v,C,E)||0)-a._delay,!d&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(C,A,M?M(v,C,E):0),S._ease=lt.none;S.duration()?c=u=0:a.timeline=0}else if(g){xo(Yn(S.vars.defaults,{ease:"none"})),S._ease=Wr(g.ease||i.ease||"none");var N=0,B,V,Y;if(cn(g))g.forEach(function(X){return S.to(E,X,">")}),S.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||o_(b,g[b],A,g.easeEach);for(b in A)for(B=A[b].sort(function(X,G){return X.t-G.t}),N=0,v=0;v<B.length;v++)V=B[v],Y={ease:V.e,duration:(V.t-(v?B[v-1].t:0))/100*c},Y[b]=V.v,S.to(E,Y,N),N+=Y.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Nu&&(ir=Ni(a),Lt.killTweensOf(E),ir=0),xi(m,Ni(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Pt(m._time)&&An(h)&&Om(Ni(a))&&m.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),p&&Pd(Ni(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-xt&&!u?l:i<xt?0:i,d,f,g,_,p,m,E,S;if(!c)Bm(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=Pt(h%_),h===l?(g=this._repeat,d=c):(p=Pt(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=zs(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Pt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ld(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(d/c);if(this._from&&(this.ratio=E=1-E),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Gn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&pr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Uo||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xu(this,c),u=this._ease(c/this._dur),r_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ml(this,0),this.parent||Rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ir&&ir.vars.overwrite!==!0)._first||uo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?si(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&Um(a,l))return s==="all"&&(this._pt=0),uo(this);for(h=this._op=this._op||[],s!=="all"&&(Qt(s)&&(_={},wn(s,function(E){return _[E]=1}),s=_),s=s_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&dl(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&uo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return So(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return So(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Lt.killTweensOf(i,s,o)},e})(No);Yn(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new Tn,t=Ac.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var qu=function(e,t,n){return e[t]=n},$d=function(e,t,n){return e[t](n)},a_=function(e,t,n,i){return e[t](i.fp,n)},l_=function(e,t,n){return e.setAttribute(t,n)},Yu=function(e,t){return Ut(e[t])?$d:Ou(e[t])&&e.setAttribute?l_:qu},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},c_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},$u=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},u_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},h_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?dl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},f_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},jd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Kd,this.d=l||this,this.set=c||qu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=f_,this.m=n,this.mt=s,this.tween=i},r})();wn(Hu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return zu[r]=1});qn.TweenMax=qn.TweenLite=Gt;qn.TimelineLite=qn.TimelineMax=Tn;Lt=new Tn({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=Vd;var Xr=[],Na={},d_=[],Rh=0,p_=0,Rl=function(e){return(Na[e]||d_).map(function(t){return t()})},Oo=function(){var e=Date.now(),t=[];e-Rh>2&&(Rl("matchMediaInit"),Xr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rh=e,Rl("matchMedia"))},Jd=(function(){function r(t,n){this.selector=n&&wc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=Rt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=wc(s)),Rt=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),Rt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Xr.length;o--;)Xr[o].id===this.id&&Xr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Oo):a.removeEventListener("change",Oo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),m_=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wi(n)||(n={matches:n});var o=new Jd(0,s||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(Xr.indexOf(o)<0&&Xr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Oo):l.addEventListener("change",Oo),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return zd(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Qt(e)&&(e=si(e)[0]);var s=Gr(e||{}).get,o=n?wd:Ad;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=kn[t],a=Gr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;bs._pt=0,h.init(e,n?u+n:u,bs,0,[e]),h.render(1,h),bs._pt&&$u(1,bs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Ln.to(e,Yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wr(e.ease,Po.ease)),Eh(Po,e||{})},config:function(e){return Eh(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!qn[a]&&Lo(t+" effect requires "+a+" plugin.")}),Tl[t]=function(a,l,c){return n(si(a),Yn(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(Tl[t](a,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Wr(t)},parseEase:function(e,t){return arguments.length?Wr(e,t):lt},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Lt,n,0),n},context:function(e,t){return e?new Jd(e,t):Rt},matchMedia:function(e){return new m_(e)},matchMediaRefresh:function(){return Xr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oo()},addEventListener:function(e,t){var n=Na[e]||(Na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qm,wrapYoyo:Ym,distribute:Ud,random:Od,snap:Nd,normalize:Xm,getUnit:an,clamp:Hm,splitColor:Hd,toArray:si,selector:wc,mapRange:Bd,pipe:Vm,unitize:Wm,interpolate:$m,shuffle:Id},install:Md,effects:Tl,ticker:Hn,updateRoot:Tn.updateRoot,plugins:kn,globalTimeline:Lt,core:{PropTween:Rn,globals:yd,Tween:Gt,Timeline:Tn,Animation:No,getCache:Gr,_removeLinkedListItem:dl,reverting:function(){return tn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Nu=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return tl[r]=Gt[r]});Hn.add(Tn.updateRoot);bs=tl.to({},{duration:0});var __=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},g_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=__(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Cl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}g_(a,s)}}}},Ln=tl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cl("roundProps",Rc),Cl("modifiers"),Cl("snap",Nd))||tl;Gt.version=Tn.version=Ln.version="3.15.1";Sd=1;Fu()&&Gs();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var Ch,rr,Cs,Ku,Br,Ph,Zu,v_=function(){return typeof window<"u"},Xi={},Lr=180/Math.PI,Ps=Math.PI/180,is=Math.atan2,Lh=1e8,ju=/([A-Z])/g,x_=/(left|right|width|margin|padding|x)/i,S_=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},M_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},y_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},E_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ep=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b_=function(e,t,n){return e.style[t]=n},A_=function(e,t,n){return e.style.setProperty(t,n)},w_=function(e,t,n){return e._gsap[t]=n},R_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},C_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},P_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Cn=Dt+"Origin",L_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Oi(i,a)}):this.tfm[e]=o.x?o[e]:Oi(i,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return Mi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},D_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ju,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zu(),(!s||!s.isStart)&&!n[Dt]&&(tp(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},np=function(e,t){var n={target:e,props:[],revert:D_,save:L_};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ip,Lc=function(e,t){var n=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return n&&n.style?n:rr.createElement(e)},Vn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ju,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Vs(t)||t,1)||""},Dh="O,Moz,ms,Ms,Webkit".split(","),Vs=function(e,t,n){var i=t||Br,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dh[o]:"")+e},Dc=function(){v_()&&window.document&&(Ch=window,rr=Ch.document,Cs=rr.documentElement,Br=Lc("div")||{style:{}},Lc("div"),Dt=Vs(Dt),Cn=Dt+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ip=!!Vs("perspective"),Zu=Ln.core.reverting,Ku=1)},Ih=function(e){var t=e.ownerSVGElement,n=Lc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Cs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Cs.removeChild(n),s},Uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rp=function(e){var t,n;try{t=e.getBBox()}catch{t=Ih(e),n=1}return t&&(t.width||t.height)||n||(t=Ih(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uh(e,["x","cx","x1"])||0,y:+Uh(e,["y","cy","y1"])||0,width:0,height:0}:t},sp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rp(e))},mr=function(e,t){if(t){var n=e.style,i;t in Xi&&t!==Cn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ju,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,i,s,o){var a=new Rn(e._pt,t,n,0,1,o?ep:Qd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Nh={deg:1,rad:1,turn:1},I_={grid:1,flex:1},_r=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Br.style,l=x_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||Nh[i]||Nh[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&sp(e),(f||o==="%")&&(Xi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ft(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===rr||!_.appendChild)&&(_=rr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Hn.time&&!p.uncache)return Ft(s/p.width*h);if(f&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,g=e[u],E?e.style[t]=E:mr(e,t)}else(f||o==="%")&&!I_[Vn(_,"display")]&&(a.position=Vn(e,"position")),_===e&&(a.position="static"),_.appendChild(Br),g=Br[u],_.removeChild(Br),a.position="absolute";return l&&f&&(p=Gr(_),p.time=Hn.time,p.width=_[u]),Ft(d?g*s/h:g&&s?h/g*s:0)},Oi=function(e,t,n,i){var s;return Ku||Dc(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(s=Bo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:il(Vn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nl[t]&&nl[t](e,t,n)||Vn(e,t)||Td(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},U_=function(e,t,n,i){if(!n||n==="none"){var s=Vs(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,Zd),l=0,c=0,u,h,d,f,g,_,p,m,E,S,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Vn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Vn(e,t)||i,_?e.style[t]=_:mr(e,t)),u=[n,i],Vd(u),n=u[0],i=u[1],d=n.match(Ts)||[],A=i.match(Ts)||[],A.length){for(;h=Ts.exec(i);)p=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Rs(f,p)+v),m=parseFloat(p),S=p.substr((m+"").length),l=Ts.lastIndex-S.length,S||(S=S||Wn.units[t]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(f=_r(e,t,_,S)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ep:Qd;return xd.test(i)&&(a.e=0),this._pt=a,a},Oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Oh[n]||n,t[1]=Oh[i]||i,t.join(" ")},O_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Xi[a]&&(l=1,a=a==="transformOrigin"?Cn:Dt),mr(n,a);l&&(mr(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Bo(n,1),o.uncache=1,tp(i)))}},nl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,O_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Fo=[1,0,0,1,0,0],op={},ap=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fh=function(e){var t=Vn(e,Dt);return ap(t)?Fo:t.substr(7).match(vd).map(Ft)},Ju=function(e,t){var n=e._gsap||Gr(e),i=e.style,s=Fh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fo:s):(s===Fo&&!e.offsetParent&&e!==Cs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Cs.appendChild(e)),s=Fh(e),l?i.display=l:mr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Cs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ic=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ju(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],S=t.split(" "),v=parseFloat(S[0])||0,A=parseFloat(S[1])||0,w,b,C,M;n?l!==Fo&&(b=f*p-g*_)&&(C=v*(p/b)+A*(-_/b)+(_*E-p*m)/b,M=v*(-g/b)+A*(f/b)-(f*E-g*m)/b,v=C,A=M):(w=rp(e),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(S[1]||S[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=v-c,E=A-u,a.xOffset=h+(m*f+E*_)-m,a.yOffset=d+(m*g+E*p)-E):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Cn]="0px 0px",o&&(sr(o,a,"xOrigin",c,v),sr(o,a,"yOrigin",u,A),sr(o,a,"xOffset",h,a.xOffset),sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Bo=function(e,t){var n=e._gsap||new Xd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Cn)||"0",u,h,d,f,g,_,p,m,E,S,v,A,w,b,C,M,x,L,N,B,V,Y,X,G,z,te,D,ce,ke,Je,$,se;return u=h=d=_=p=m=E=S=v=0,f=g=1,n.svg=!!(e.getCTM&&sp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),b=Ju(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Ic(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Fo&&(L=b[0],N=b[1],B=b[2],V=b[3],u=Y=b[4],h=X=b[5],b.length===6?(f=Math.sqrt(L*L+N*N),g=Math.sqrt(V*V+B*B),_=L||N?is(N,L)*Lr:0,E=B||V?is(B,V)*Lr+_:0,E&&(g*=Math.abs(Math.cos(E*Ps))),n.svg&&(u-=A-(A*L+w*B),h-=w-(A*N+w*V))):(se=b[6],Je=b[7],D=b[8],ce=b[9],ke=b[10],$=b[11],u=b[12],h=b[13],d=b[14],C=is(se,ke),p=C*Lr,C&&(M=Math.cos(-C),x=Math.sin(-C),G=Y*M+D*x,z=X*M+ce*x,te=se*M+ke*x,D=Y*-x+D*M,ce=X*-x+ce*M,ke=se*-x+ke*M,$=Je*-x+$*M,Y=G,X=z,se=te),C=is(-B,ke),m=C*Lr,C&&(M=Math.cos(-C),x=Math.sin(-C),G=L*M-D*x,z=N*M-ce*x,te=B*M-ke*x,$=V*x+$*M,L=G,N=z,B=te),C=is(N,L),_=C*Lr,C&&(M=Math.cos(C),x=Math.sin(C),G=L*M+N*x,z=Y*M+X*x,N=N*M-L*x,X=X*M-Y*x,L=G,Y=z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Ft(Math.sqrt(L*L+N*N+B*B)),g=Ft(Math.sqrt(X*X+se*se)),C=is(Y,X),E=Math.abs(C)>2e-4?C*Lr:0,v=$?1/($<0?-$:$):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ap(Vn(e,Dt)),G&&e.setAttribute("transform",G))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ft(f),n.scaleY=Ft(g),n.rotation=Ft(_)+a,n.rotationX=Ft(p)+a,n.rotationY=Ft(m)+a,n.skewX=E+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=il(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?B_:ip?lp:F_,n.uncache=0,n},il=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pl=function(e,t,n){var i=an(t);return Ft(parseFloat(t)+parseFloat(_r(e,"x",n+"px",i)))+i},F_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lp(e,t)},yr="0deg",to="0px",Er=") ",lp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,S=n.zOrigin,v="",A=m==="auto"&&e&&e!==1||m===!0;if(S&&(h!==yr||u!==yr)){var w=parseFloat(u)*Ps,b=Math.sin(w),C=Math.cos(w),M;w=parseFloat(h)*Ps,M=Math.cos(w),o=Pl(E,o,b*M*-S),a=Pl(E,a,-Math.sin(w)*-S),l=Pl(E,l,C*M*-S+S)}p!==to&&(v+="perspective("+p+Er),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==to||a!==to||l!==to)&&(v+=l!==to||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Er),c!==yr&&(v+="rotate("+c+Er),u!==yr&&(v+="rotateY("+u+Er),h!==yr&&(v+="rotateX("+h+Er),(d!==yr||f!==yr)&&(v+="skew("+d+", "+f+Er),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Er),E.style[Dt]=v||"translate(0, 0)"},B_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,S=parseFloat(o),v=parseFloat(a),A,w,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ps,c*=Ps,A=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Ps,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Ft(A),w=Ft(w),b=Ft(b),C=Ft(C)):(A=h,C=d,w=b=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=_r(f,"x",o,"px"),v=_r(f,"y",a,"px")),(g||_||p||m)&&(S=Ft(S+g-(g*A+_*b)+p),v=Ft(v+_-(g*w+_*C)+m)),(i||s)&&(M=f.getBBox(),S=Ft(S+i/100*M.width),v=Ft(v+s/100*M.height)),M="matrix("+A+","+w+","+b+","+C+","+S+","+v+")",f.setAttribute("transform",M),E&&(f.style[Dt]=M)},k_=function(e,t,n,i,s){var o=360,a=Qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Lr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Lh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Lh)%o-~~(c/o)*o)),e._pt=d=new Rn(e._pt,t,n,i,c,M_),d.e=u,d.u="deg",e._props.push(n),d},Bh=function(e,t){for(var n in t)e[n]=t[n];return e},z_=function(e,t,n){var i=Bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=Bo(n,1),mr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],o[Dt]=t,a=Bo(n,1),o[Dt]=c);for(l in Xi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=an(c),g=an(u),h=f!==g?_r(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Rn(e._pt,a,l,h,d-h,Pc),e._pt.u=g||0,e._props.push(l));Bh(a,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});nl[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Oi(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var cp={name:"css",register:Dc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,E,S,v,A,w,b,C,M;Ku||Dc(),this.styles=this.styles||np(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(kn[_]&&qd(_,t,n,i,e,s)))){if(f=typeof u,g=nl[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Io(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",cr.lastIndex=0,cr.test(c)||(p=an(c),m=an(u),m?p!==m&&(c=_r(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Qt(c)&&~c.indexOf("random(")&&(c=Io(c)),an(c+"")||c==="auto"||(c+=Wn.units[_]||an(Oi(e,_))||""),(c+"").charAt(1)==="="&&(c=Oi(e,_))):c=Oi(e,_),d=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Mi&&(_==="autoAlpha"&&(d===1&&Oi(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),sr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Xi,S){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Vn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Vn(e,"perspective"),x?e.style.perspective=x:mr(e,"perspective")}h=parseFloat(u)}if(v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Bo(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Rn(this._pt,a,Dt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Rn(this._pt,A,"scaleY",A.scaleY,(E?Rs(A.scaleY,E+h):h)-A.scaleY||0,Pc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Cn,0,a[Cn]),u=N_(u),A.svg?Ic(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&sr(this,A,"zOrigin",A.zOrigin,m),sr(this,a,_,il(c),il(u)));continue}else if(_==="svgOrigin"){Ic(e,u,1,w,0,this);continue}else if(_ in op){k_(this,A,_,d,E?Rs(d,E+u):u);continue}else if(_==="smoothOrigin"){sr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){z_(this,u,e);continue}}else _ in a||(_=Vs(_)||_);if(S||(h||h===0)&&(d||d===0)&&!S_.test(u)&&_ in a)p=(c+"").substr((d+"").length),h||(h=0),m=an(u)||(_ in Wn.units?Wn.units[_]:p),p!==m&&(d=_r(e,_,c,m)),this._pt=new Rn(this._pt,S?A:a,_,d,(E?Rs(d,E+h):h)-d,!S&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?T_:Pc),this._pt.u=m||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=E_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=y_);else if(_ in a)U_.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){ku(_,u);continue}S||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&jd(this)},render:function(e,t){if(t.tween._time||!Zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Oi,aliases:Mi,getSetter:function(e,t,n){var i=Mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==Cn&&(e._gsap.x||Oi(e,"x"))?n&&Ph===n?t==="scale"?R_:w_:(Ph=n||{})&&(t==="scale"?C_:P_):e.style&&!Ou(e.style[t])?b_:~t.indexOf("-")?A_:Yu(e,t)},core:{_removeProperty:mr,_getMatrix:Ju}};Ln.utils.checkPrefix=Vs;Ln.core.getStyleSaver=np;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){Xi[s]=1});wn(e,function(s){Wn.units[s]="deg",op[s]=1}),Mi[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");Mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Ln.registerPlugin(cp);var Oe=Ln.registerPlugin(cp)||Ln;Oe.core.Tween;function H_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function G_(r,e,t){return e&&H_(r.prototype,e),r}var en,Oa,bn,or,ar,Ls,up,Dr,Ds,hp,Bi,hi,fp,dp=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},pp=1,As=[],st=[],bi=[],yo=Date.now,Uc=function(e,t){return t},V_=function(){var e=Ds.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,bi),st=n,bi=i,Uc=function(o,a){return t[o](a)}},ur=function(e,t){return~bi.indexOf(e)&&bi[bi.indexOf(e)+1][t]},Eo=function(e){return!!~hp.indexOf(e)},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jo="scrollLeft",Qo="scrollTop",Nc=function(){return Bi&&Bi.isPressed||st.cache++},rl=function(e,t){var n=function i(s){if(s||s===0){pp&&bn.history.scrollRestoration!=="manual"&&(bn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),e(s),i.cacheID=st.cache,o&&Uc("ss",s)}else(t||st.cache!==i.cacheID||Uc("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rl(function(r){return arguments.length?bn.scrollTo(r,Yt.sc()):bn.pageXOffset||or[Jo]||ar[Jo]||Ls[Jo]||0})},Yt={s:Qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:rl(function(r){return arguments.length?bn.scrollTo(Sn.sc(),r):bn.pageYOffset||or[Qo]||ar[Qo]||Ls[Qo]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},W_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},gr=function(e,t){var n=t.s,i=t.sc;Eo(e)&&(e=or.scrollingElement||ar);var s=st.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||pn(e,"scroll",Nc);var a=st[s+o],l=a||(st[s+o]=rl(ur(e,n),!0)||(Eo(e)?i:rl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},Oc=function(e,t,n){var i=e,s=e,o=yo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=yo();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=yo();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},no=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},mp=function(){Ds=en.core.globals().ScrollTrigger,Ds&&Ds.core&&V_()},_p=function(e){return en=e||dp(),!Oa&&en&&typeof document<"u"&&document.body&&(bn=window,or=document,ar=or.documentElement,Ls=or.body,hp=[bn,or,ar,Ls],en.utils.clamp,fp=en.core.context||function(){},Dr="onpointerenter"in Ls?"pointer":"mouse",up=kt.isTouch=bn.matchMedia&&bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=kt.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return pp=0},500),Oa=1),Ds||mp(),Oa};Sn.op=Yt;st.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Oa||_p(en)||console.warn("Please gsap.registerPlugin(Observer)"),Ds||mp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,E=n.onDrag,S=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,L=n.onChange,N=n.onToggleX,B=n.onToggleY,V=n.onHover,Y=n.onHoverEnd,X=n.onMove,G=n.ignoreCheck,z=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,ke=n.onEnable,Je=n.onDisable,$=n.onClick,se=n.scrollSpeed,ve=n.capture,oe=n.allowClicks,Z=n.lockAxis,fe=n.onLockAxis;this.target=a=En(a)||ar,this.vars=n,f&&(f=en.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bn.getComputedStyle(Ls).lineHeight)||22);var de,Le,Ie,ue,P,Ze,Ve,k=this,me=0,$e=0,Pe=n.passive||!u&&n.passive!==!1,Ae=gr(a,Sn),nt=gr(a,Yt),R=Ae(),y=nt(),F=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hi[0]==="pointerdown",J=Eo(a),j=a.ownerDocument||or,K=[0,0,0],Te=[0,0,0],ae=0,we=function(){return ae=yo()},pe=function(De,Qe){return(k.event=De)&&f&&W_(De.target,f)||Qe&&F&&De.pointerType!=="touch"||G&&G(De,Qe)},ne=function(){k._vx.reset(),k._vy.reset(),Le.pause(),h&&h(k)},xe=function(){var De=k.deltaX=kh(K),Qe=k.deltaY=kh(Te),_e=Math.abs(De)>=i,Ye=Math.abs(Qe)>=i;L&&(_e||Ye)&&L(k,De,Qe,K,Te),_e&&(A&&k.deltaX>0&&A(k),w&&k.deltaX<0&&w(k),M&&M(k),N&&k.deltaX<0!=me<0&&N(k),me=k.deltaX,K[0]=K[1]=K[2]=0),Ye&&(C&&k.deltaY>0&&C(k),b&&k.deltaY<0&&b(k),x&&x(k),B&&k.deltaY<0!=$e<0&&B(k),$e=k.deltaY,Te[0]=Te[1]=Te[2]=0),(ue||Ie)&&(X&&X(k),Ie&&(p&&Ie===1&&p(k),E&&E(k),Ie=0),ue=!1),Ze&&!(Ze=!1)&&fe&&fe(k),P&&(ce(k),P=!1),de=0},ze=function(De,Qe,_e){K[_e]+=De,Te[_e]+=Qe,k._vx.update(De),k._vy.update(Qe),c?de||(de=requestAnimationFrame(xe)):xe()},Fe=function(De,Qe){Z&&!Ve&&(k.axis=Ve=Math.abs(De)>Math.abs(Qe)?"x":"y",Ze=!0),Ve!=="y"&&(K[2]+=De,k._vx.update(De,!0)),Ve!=="x"&&(Te[2]+=Qe,k._vy.update(Qe,!0)),c?de||(de=requestAnimationFrame(xe)):xe()},le=function(De){if(!pe(De,1)){De=no(De,u);var Qe=De.clientX,_e=De.clientY,Ye=Qe-k.x,Ue=_e-k.y,qe=k.isDragging;k.x=Qe,k.y=_e,(qe||(Ye||Ue)&&(Math.abs(k.startX-Qe)>=s||Math.abs(k.startY-_e)>=s))&&(Ie||(Ie=qe?2:1),qe||(k.isDragging=!0),Fe(Ye,Ue))}},Ge=k.onPress=function(ye){pe(ye,1)||ye&&ye.button||(k.axis=Ve=null,Le.pause(),k.isPressed=!0,ye=no(ye),me=$e=0,k.startX=k.x=ye.clientX,k.startY=k.y=ye.clientY,k._vx.reset(),k._vy.reset(),pn(z?a:j,hi[1],le,Pe,!0),k.deltaX=k.deltaY=0,S&&S(k))},I=k.onRelease=function(ye){if(!pe(ye,1)){dn(z?a:j,hi[1],le,!0);var De=!isNaN(k.y-k.startY),Qe=k.isDragging,_e=Qe&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ye=no(ye);!_e&&De&&(k._vx.reset(),k._vy.reset(),u&&oe&&en.delayedCall(.08,function(){if(yo()-ae>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(j.createEvent){var Ue=j.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,bn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Ue)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Qe&&!z&&Le.restart(!0),Ie&&xe(),m&&Qe&&m(k),v&&v(k,_e)}},he=function(De){return De.touches&&De.touches.length>1&&(k.isGesturing=!0)&&te(De,k.isDragging)},ee=function(){return(k.isGesturing=!1)||D(k)},Se=function(De){if(!pe(De)){var Qe=Ae(),_e=nt();ze((Qe-R)*se,(_e-y)*se,1),R=Qe,y=_e,h&&Le.restart(!0)}},ie=function(De){if(!pe(De)){De=no(De,u),ce&&(P=!0);var Qe=(De.deltaMode===1?l:De.deltaMode===2?bn.innerHeight:1)*g;ze(De.deltaX*Qe,De.deltaY*Qe,0),h&&!z&&Le.restart(!0)}},Q=function(De){if(!pe(De)){var Qe=De.clientX,_e=De.clientY,Ye=Qe-k.x,Ue=_e-k.y;k.x=Qe,k.y=_e,ue=!0,h&&Le.restart(!0),(Ye||Ue)&&Fe(Ye,Ue)}},be=function(De){k.event=De,V(k)},He=function(De){k.event=De,Y(k)},ht=function(De){return pe(De)||no(De,u)&&$(k)};Le=k._dc=en.delayedCall(d||.25,ne).pause(),k.deltaX=k.deltaY=0,k._vx=Oc(0,50,!0),k._vy=Oc(0,50,!0),k.scrollX=Ae,k.scrollY=nt,k.isDragging=k.isGesturing=k.isPressed=!1,fp(this),k.enable=function(ye){return k.isEnabled||(pn(J?j:a,"scroll",Nc),o.indexOf("scroll")>=0&&pn(J?j:a,"scroll",Se,Pe,ve),o.indexOf("wheel")>=0&&pn(a,"wheel",ie,Pe,ve),(o.indexOf("touch")>=0&&up||o.indexOf("pointer")>=0)&&(pn(a,hi[0],Ge,Pe,ve),pn(j,hi[2],I),pn(j,hi[3],I),oe&&pn(a,"click",we,!0,!0),$&&pn(a,"click",ht),te&&pn(j,"gesturestart",he),D&&pn(j,"gestureend",ee),V&&pn(a,Dr+"enter",be),Y&&pn(a,Dr+"leave",He),X&&pn(a,Dr+"move",Q)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=ue=Ie=!1,k._vx.reset(),k._vy.reset(),R=Ae(),y=nt(),ye&&ye.type&&Ge(ye),ke&&ke(k)),k},k.disable=function(){k.isEnabled&&(As.filter(function(ye){return ye!==k&&Eo(ye.target)}).length||dn(J?j:a,"scroll",Nc),k.isPressed&&(k._vx.reset(),k._vy.reset(),dn(z?a:j,hi[1],le,!0)),dn(J?j:a,"scroll",Se,ve),dn(a,"wheel",ie,ve),dn(a,hi[0],Ge,ve),dn(j,hi[2],I),dn(j,hi[3],I),dn(a,"click",we,!0),dn(a,"click",ht),dn(j,"gesturestart",he),dn(j,"gestureend",ee),dn(a,Dr+"enter",be),dn(a,Dr+"leave",He),dn(a,Dr+"move",Q),k.isEnabled=k.isPressed=k.isDragging=!1,Je&&Je(k))},k.kill=k.revert=function(){k.disable();var ye=As.indexOf(k);ye>=0&&As.splice(ye,1),Bi===k&&(Bi=0)},As.push(k),z&&Eo(a)&&(Bi=k),k.enable(_)},G_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.15.1";kt.create=function(r){return new kt(r)};kt.register=_p;kt.getAll=function(){return As.slice()};kt.getById=function(r){return As.filter(function(e){return e.vars.id===r})[0]};dp()&&en.registerPlugin(kt);var Re,ys,rt,mt,zn,dt,Qu,sl,ko,To,fo,ea,sn,_l,Fc,gn,zh,Hh,Es,gp,Ll,vp,_n,Bc,xp,Sp,tr,kc,eh,Is,th,hr,zc,Dl,ta=1,on=Date.now,Il=on(),ai=0,po=0,Gh=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Vh=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},X_=function r(){return po&&requestAnimationFrame(r)},Wh=function(){return _l=1},Xh=function(){return _l=0},gi=function(e){return e},mo=function(e){return Math.round(e*1e5)/1e5||0},Mp=function(){return typeof window<"u"},yp=function(){return Re||Mp()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Zr=function(e){return!!~Qu.indexOf(e)},Ep=function(e){return(e==="Height"?th:rt["inner"+e])||zn["client"+e]||dt["client"+e]},Tp=function(e){return ur(e,"getBoundingClientRect")||(Zr(e)?function(){return Ha.width=rt.innerWidth,Ha.height=th,Ha}:function(){return Fi(e)})},q_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ep(s):e["client"+s])||0}},Y_=function(e,t){return!t||~bi.indexOf(e)?Tp(e):function(){return Ha}},yi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ur(e,n))?o()-Tp(e)()[s]:Zr(e)?(zn[n]||dt[n])-Ep(i):e[n]-e["offset"+i])},na=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},Bn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},_o=function(e){return typeof e=="number"},Ir=function(e){return typeof e=="object"},io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},rs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ss=Math.abs,bp="left",Ap="top",nh="right",ih="bottom",qr="width",Yr="height",bo="Right",Ao="Left",wo="Top",Ro="Bottom",Ht="padding",ti="margin",Ws="Width",rh="Height",qt="px",ni=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},$_=function(e){var t=ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fi=function(e,t){var n=t&&ni(e)[Fc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ol=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},wp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},K_=function(e){return function(t){return Re.utils.snap(wp(e),t)}},sh=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Z_=function(e){return function(t,n){return sh(wp(e))(t,n.direction)}},ia=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ra=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Yh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sa={toggleActions:"play",anticipatePin:0},al={top:0,left:0,center:.5,bottom:1,right:1},Fa=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in al?al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},oa=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=mt.createElement("div"),_=Zr(n)||ur(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?dt:n.tagName==="IFRAME"?n.contentDocument.body:n,E=e.indexOf("start")!==-1,S=E?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Yt?nh:ih)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ba(g,0,i,E),g},Ba=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ws]=1,s["border"+a+Ws]=0,s[n.p]=t+"px",Re.set(e,s)},it=[],Hc={},zo,$h=function(){return on()-ai>34&&(zo||(zo=requestAnimationFrame(Hi)))},os=function(){(!_n||!_n.isPressed||_n.startX>dt.clientWidth)&&(st.cache++,_n?zo||(zo=requestAnimationFrame(Hi)):Hi(),ai||Jr("scrollStart"),ai=on())},Ul=function(){Sp=rt.innerWidth,xp=rt.innerHeight},go=function(e){st.cache++,(e===!0||!sn&&!vp&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!Bc||Sp!==rt.innerWidth||Math.abs(rt.innerHeight-xp)>rt.innerHeight*.25))&&sl.restart(!0)},jr={},j_=[],Rp=function r(){return jt(je,"scrollEnd",r)||kr(!0)},Jr=function(e){return jr[e]&&jr[e].map(function(t){return t()})||j_},Fn=[],Cp=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},Pp=function(){st.cache++,st.forEach(function(e){return ln(e)&&(e.rec=e())})},oh=function(e,t){var n;for(gn=0;gn<it.length;gn++)n=it[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));hr=!0,t&&Cp(t),t||Jr("revert")},Lp=function(e,t){st.cache++,(t||!vn)&&st.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(eh=e,rt.history.scrollRestoration!==e&&(rt.history.scrollRestoration=e))},vn,$r=0,Kh,J_=function(){if(Kh!==$r){var e=Kh=$r;requestAnimationFrame(function(){return e===$r&&kr(!0)})}},Dp=function(){dt.appendChild(Is),th=!_n&&Is.offsetHeight||rt.innerHeight,dt.removeChild(Is)},Zh=function(e){return ko(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},kr=function(e,t){if(zn=mt.documentElement,dt=mt.body,Qu=[rt,mt,zn,dt],ai&&!e&&!hr){Jt(je,"scrollEnd",Rp);return}Dp(),vn=je.isRefreshing=!0,hr||Pp();var n=Jr("refreshInit");gp&&je.sort(),t||oh(),st.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),hr=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),zc=1,Zh(!0),it.forEach(function(i){var s=yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zh(!1),zc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lp(eh,1),sl.pause(),$r++,vn=2,Hi(2),it.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=je.isRefreshing=!1,Jr("refresh")},Gc=0,ka=1,Co,Hi=function(e){if(e===2||!vn&&!hr){je.isUpdating=!0,Co&&Co.update(0);var t=it.length,n=on(),i=n-Il>=50,s=t&&it[0].scroll();if(ka=Gc>s?-1:1,vn||(Gc=s),i&&(ai&&!_l&&n-ai>200&&(ai=0,Jr("scrollEnd")),fo=Il,Il=n),ka<0){for(gn=t;gn-- >0;)it[gn]&&it[gn].update(0,i);ka=1}else for(gn=0;gn<t;gn++)it[gn]&&it[gn].update(0,i);je.isUpdating=!1}zo=0},Vc=[bp,Ap,ih,nh,ti+Ro,ti+bo,ti+wo,ti+Ao,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],za=Vc.concat([qr,Yr,"boxSizing","max"+Ws,"max"+rh,"position",ti,Ht,Ht+wo,Ht+bo,Ht+Ro,Ht+Ao]),Q_=function(e,t,n){Us(n);var i=e._gsap;if(i.spacerIsNative)Us(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Vc.length,o=t.style,a=e.style,l;s--;)l=Vc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ih]=a[nh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[qr]=ol(e,Sn)+qt,o[Yr]=ol(e,Yt)+qt,o[Ht]=a[ti]=a[Ap]=a[bp]="0",Us(i),a[qr]=a["max"+Ws]=n[qr],a[Yr]=a["max"+rh]=n[Yr],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eg=/([A-Z])/g,Us=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(eg,"-$1").toLowerCase())}},aa=function(e){for(var t=za.length,n=e.style,i=[],s=0;s<t;s++)i.push(za[s],n[za[s]]);return i.t=e,i},tg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ha={left:0,top:0},jh=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){ln(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Fa("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,E;if(f&&f.seek(0),isNaN(e)||(e=+e),_o(e))f&&(e=Re.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Ba(a,n,i,!0);else{ln(t)&&(t=t(l));var S=(e||"0").split(" "),v,A,w,b;E=En(t,l)||dt,v=Fi(E)||{},(!v||!v.left&&!v.top)&&ni(E).display==="none"&&(b=E.style.display,E.style.display="block",v=Fi(E),b?E.style.display=b:E.style.removeProperty("display")),A=Fa(S[0],v[i.d]),w=Fa(S[1]||"0",n),e=v[i.p]-c[i.p]-u+A+s-w,a&&Ba(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;p="scroll"+i.d2,Ba(o,C,i,M&&C>20||!M&&(h?Math.max(dt[p],zn[p]):o.parentNode[p])<=C+1),h&&(c=Fi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qt))}return f&&E&&(p=Fi(E),f.seek(d),m=Fi(E),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},ng=/(webkit|moz|length|cssText|inset)/i,Jh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===dt){e._stOrig=s.cssText,a=ni(e);for(o in a)!+o&&!ng.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},Ip=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},la=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},Qh=function(e,t){var n=gr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=Ip(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Hi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Re.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),je.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},je=(function(){function r(t,n){ys||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!po){this.update=this.refresh=this.kill=gi;return}n=qh(Bn(n)||_o(n)||n.nodeType?{trigger:n}:n,sa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,S=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Yt,L=!h&&h!==0,N=En(n.scroller||rt),B=Re.core.getCache(N),V=Zr(N),Y=("pinType"in n?n.pinType:ur(N,"pinType")||V&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=L&&n.toggleActions.split(" "),z="markers"in n?n.markers:sa.markers,te=V?0:parseFloat(ni(N)["border"+x.p2+Ws])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ke=q_(N,V,x),Je=Y_(N,V),$=0,se=0,ve=0,oe=gr(N,x),Z,fe,de,Le,Ie,ue,P,Ze,Ve,k,me,$e,Pe,Ae,nt,R,y,F,J,j,K,Te,ae,we,pe,ne,xe,ze,Fe,le,Ge,I,he,ee,Se,ie,Q,be,He;if(D._startClamp=D._endClamp=!1,D._dir=x,p*=45,D.scroller=N,D.scroll=b?b.time.bind(b):oe,Le=oe(),hr&&oe.rec==null&&(oe.rec=Le),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(gp=1,n.refreshPriority===-9999&&(Co=D)),B.tweenScroll=B.tweenScroll||{top:Qh(N,Yt),left:Qh(N,Sn)},D.tweenTo=Z=B.tweenScroll[x.p],D.scrubDuration=function(_e){he=_o(_e)&&_e,he?I?I.duration(_e):I=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return m&&m(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),le=0,l||(l=i.vars.id)),v&&((!Ir(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in dt.style&&Re.set(V?[dt,zn]:N,{scrollBehavior:"auto"}),st.forEach(function(_e){return ln(_e)&&_e.target===(V?mt.scrollingElement||zn:N)&&(_e.smooth=!1)}),de=ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?K_(i):v.snapTo==="labelsDirectional"?Z_(i):v.directional!==!1?function(_e,Ye){return sh(v.snapTo)(_e,on()-se<500?0:Ye.direction)}:Re.utils.snap(v.snapTo),ee=v.duration||{min:.1,max:2},ee=Ir(ee)?To(ee.min,ee.max):To(ee,ee),Se=Re.delayedCall(v.delay||he/2||.1,function(){var _e=oe(),Ye=on()-se<500,Ue=Z.tween;if((Ye||Math.abs(D.getVelocity())<10)&&!Ue&&!_l&&$!==_e){var qe=(_e-ue)/Ae,Ot=i&&!L?i.totalProgress():qe,ot=Ye?0:(Ot-Ge)/(on()-fo)*1e3||0,Tt=Re.utils.clamp(-qe,1-qe,ss(ot/2)*ot/.185),Vt=qe+(v.inertia===!1?0:Tt),St,Mt,ft=v,Dn=ft.onStart,bt=ft.onInterrupt,hn=ft.onComplete;if(St=de(Vt,D),_o(St)||(St=Vt),Mt=Math.max(0,Math.round(ue+St*Ae)),_e<=P&&_e>=ue&&Mt!==_e){if(Ue&&!Ue._initted&&Ue.data<=ss(Mt-_e))return;v.inertia===!1&&(Tt=St-qe),Z(Mt,{duration:ee(ss(Math.max(ss(Vt-Ot),ss(St-Ot))*.185/ot/.05||0)),ease:v.ease||"power3",data:ss(Mt-_e),onInterrupt:function(){return Se.restart(!0)&&bt&&rs(D,bt)},onComplete:function(){D.update(),$=oe(),i&&!L&&(I?I.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),le=Ge=i&&!L?i.totalProgress():D.progress,E&&E(D),hn&&rs(D,hn)}},_e,Tt*Ae,Mt-_e-Tt*Ae),Dn&&rs(D,Dn,Z.tween)}}else D.isActive&&$!==_e&&Se.restart(!0)}).pause()),l&&(Hc[l]=D),d=D.trigger=En(d||f!==!0&&f),He=d&&d._gsap&&d._gsap.stRevert,He&&(He=He(D)),f=f===!0?d:En(f),Bn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===ti||(g=!g&&f.parentNode&&f.parentNode.style&&ni(f.parentNode).display==="flex"?!1:Ht),D.pin=f,fe=Re.core.getCache(f),fe.spacer?nt=fe.pinState:(w&&(w=En(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),fe.spacerIsNative=!!w,w&&(fe.spacerState=aa(w))),fe.spacer=F=w||mt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),fe.pinState=nt=aa(f)),n.force3D!==!1&&Re.set(f,{force3D:!0}),D.spacer=F=fe.spacer,Fe=ni(f),we=Fe[g+x.os2],j=Re.getProperty(f),K=Re.quickSetter(f,x.a,qt),Nl(f,F,Fe),y=aa(f)),z){$e=Ir(z)?qh(z,Yh):Yh,k=oa("scroller-start",l,N,x,$e,0),me=oa("scroller-end",l,N,x,$e,0,k),J=k["offset"+x.op.d2];var ht=En(ur(N,"content")||N);Ze=this.markerStart=oa("start",l,ht,x,$e,J,0,b),Ve=this.markerEnd=oa("end",l,ht,x,$e,J,0,b),b&&(be=Re.quickSetter([Ze,Ve],x.a,qt)),!Y&&!(bi.length&&ur(N,"fixedMarkers")===!0)&&($_(V?dt:N),Re.set([k,me],{force3D:!0}),ne=Re.quickSetter(k,x.a,qt),ze=Re.quickSetter(me,x.a,qt))}if(b){var ye=b.vars.onUpdate,De=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),ye&&ye.apply(b,De||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(_e,Ye){if(!Ye)return D.kill(!0);var Ue=_e!==!1||!D.enabled,qe=sn;Ue!==D.isReverted&&(Ue&&(ie=Math.max(oe(),D.scroll.rec||0),ve=D.progress,Q=i&&i.progress()),Ze&&[Ze,Ve,k,me].forEach(function(Ot){return Ot.style.display=Ue?"none":"block"}),Ue&&(sn=D,D.update(Ue)),f&&(!A||!D.isActive)&&(Ue?Q_(f,F,nt):Nl(f,F,ni(f),pe)),Ue||D.update(Ue),sn=qe,D.isReverted=Ue)},D.refresh=function(_e,Ye,Ue,qe){if(!((sn||!D.enabled)&&!Ye)){if(f&&_e&&ai){Jt(r,"scrollEnd",Rp);return}!vn&&ce&&ce(D),sn=D,Z.tween&&!Ue&&(Z.tween.kill(),Z.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ke){return Ke.vars.immediateRender&&Ke.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ot=ke(),ot=Je(),Tt=b?b.duration():yi(N,x),Vt=Ae<=.01||!Ae,St=0,Mt=qe||0,ft=Ir(Ue)?Ue.end:n.end,Dn=n.endTrigger||d,bt=Ir(Ue)?Ue.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),hn=D.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,D),$n=d&&Math.max(0,it.indexOf(D))||0,Wt=$n,Xt,T,O,W,H,U,re,ge,Ce,Ee,Be,We,Ne;for(z&&Ir(Ue)&&(We=Re.getProperty(k,x.p),Ne=Re.getProperty(me,x.p));Wt-- >0;)U=it[Wt],U.end||U.refresh(0,1)||(sn=D),re=U.pin,re&&(re===d||re===f||re===hn)&&!U.isReverted&&(Ee||(Ee=[]),Ee.unshift(U),U.revert(!0,!0)),U!==it[Wt]&&($n--,Wt--);for(ln(bt)&&(bt=bt(D)),bt=Gh(bt,"start",D),ue=jh(bt,d,Ot,x,oe(),Ze,k,D,ot,te,Y,Tt,b,D._startClamp&&"_startClamp")||(f?-.001:0),ln(ft)&&(ft=ft(D)),Bn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Bn(bt)?bt.split(" ")[0]:"")+ft:(St=Fa(ft.substr(2),Ot),ft=Bn(bt)?bt:(b?Re.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ue):ue)+St,Dn=d)),ft=Gh(ft,"end",D),P=Math.max(ue,jh(ft||(Dn?"100% 0":Tt),Dn,Ot,x,oe()+St,Ve,me,D,ot,te,Y,Tt,b,D._endClamp&&"_endClamp"))||-.001,St=0,Wt=$n;Wt--;)U=it[Wt]||{},re=U.pin,re&&U.start-U._pinPush<=ue&&!b&&U.end>0&&(Xt=U.end-(D._startClamp?Math.max(0,U.start):U.start),(re===d&&U.start-U._pinPush<ue||re===hn)&&isNaN(bt)&&(St+=Xt*(1-U.progress)),re===f&&(Mt+=Xt));if(ue+=St,P+=St,D._startClamp&&(D._startClamp+=St),D._endClamp&&!vn&&(D._endClamp=P||-.001,P=Math.min(P,yi(N,x))),Ae=P-ue||(ue-=.01)&&.001,Vt&&(ve=Re.utils.clamp(0,1,Re.utils.normalize(ue,P,ie))),D._pinPush=Mt,Ze&&St&&(Xt={},Xt[x.a]="+="+St,hn&&(Xt[x.p]="-="+oe()),Re.set([Ze,Ve],Xt)),f&&!(zc&&D.end>=yi(N,x)))Xt=ni(f),W=x===Yt,O=oe(),Te=parseFloat(j(x.a))+Mt,!Tt&&P>1&&(Be=(V?mt.scrollingElement||zn:N).style,Be={style:Be,value:Be["overflow"+x.a.toUpperCase()]},V&&ni(dt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Be.style["overflow"+x.a.toUpperCase()]="scroll")),Nl(f,F,Xt),y=aa(f),T=Fi(f,!0),ge=Y&&gr(N,W?Sn:Yt)(),g?(pe=[g+x.os2,Ae+Mt+qt],pe.t=F,Wt=g===Ht?ol(f,x)+Ae+Mt:0,Wt&&(pe.push(x.d,Wt+qt),F.style.flexBasis!=="auto"&&(F.style.flexBasis=Wt+qt)),Us(pe),hn&&it.forEach(function(Ke){Ke.pin===hn&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),Y&&oe(ie)):(Wt=ol(f,x),Wt&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=Wt+qt)),Y&&(H={top:T.top+(W?O-ue:ge)+qt,left:T.left+(W?ge:O-ue)+qt,boxSizing:"border-box",position:"fixed"},H[qr]=H["max"+Ws]=Math.ceil(T.width)+qt,H[Yr]=H["max"+rh]=Math.ceil(T.height)+qt,H[ti]=H[ti+wo]=H[ti+bo]=H[ti+Ro]=H[ti+Ao]="0",H[Ht]=Xt[Ht],H[Ht+wo]=Xt[Ht+wo],H[Ht+bo]=Xt[Ht+bo],H[Ht+Ro]=Xt[Ht+Ro],H[Ht+Ao]=Xt[Ht+Ao],R=tg(nt,H,A),vn&&oe(0)),i?(Ce=i._initted,Ll(1),i.render(i.duration(),!0,!0),ae=j(x.a)-Te+Ae+Mt,xe=Math.abs(Ae-ae)>1,Y&&xe&&R.splice(R.length-2,2),i.render(0,!0,!0),Ce||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ll(0)):ae=Ae,Be&&(Be.value?Be.style["overflow"+x.a.toUpperCase()]=Be.value:Be.style.removeProperty("overflow-"+x.a));else if(d&&oe()&&!b)for(T=d.parentNode;T&&T!==dt;)T._pinOffset&&(ue-=T._pinOffset,P-=T._pinOffset),T=T.parentNode;Ee&&Ee.forEach(function(Ke){return Ke.revert(!1,!0)}),D.start=ue,D.end=P,Le=Ie=vn?ie:oe(),!b&&!vn&&!hr&&(Le<ie&&oe(ie),D.scroll.rec=0),D.revert(!1,!0),se=on(),Se&&($=-1,Se.restart(!0)),sn=0,i&&L&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Vt||ve!==D.progress||b||_||i&&!i._initted)&&(i&&!L&&(i._initted||ve||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ue<-.001&&!ve?Re.utils.normalize(ue,P,0):ve,!0),D.progress=Vt||(Le-ue)/Ae===ve?0:ve),f&&g&&(F._pinOffset=Math.round(D.progress*ae)),I&&I.invalidate(),isNaN(We)||(We-=Re.getProperty(k,x.p),Ne-=Re.getProperty(me,x.p),la(k,x,We),la(Ze,x,We-(qe||0)),la(me,x,Ne),la(Ve,x,Ne-(qe||0))),Vt&&!vn&&D.update(),u&&!vn&&!Pe&&(Pe=!0,u(D),Pe=!1)}},D.getVelocity=function(){return(oe()-Ie)/(on()-fo)*1e3||0},D.endAnimation=function(){io(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?L||io(i,D.direction<0,1):io(i,i.reversed()))},D.labelToScroll=function(_e){return i&&i.labels&&(ue||D.refresh()||ue)+i.labels[_e]/i.duration()*Ae||0},D.getTrailing=function(_e){var Ye=it.indexOf(D),Ue=D.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(Bn(_e)?Ue.filter(function(qe){return qe.vars.preventOverlaps===_e}):Ue).filter(function(qe){return D.direction>0?qe.end<=ue:qe.start>=P})},D.update=function(_e,Ye,Ue){if(!(b&&!Ue&&!_e)){var qe=vn===!0?ie:D.scroll(),Ot=_e?0:(qe-ue)/Ae,ot=Ot<0?0:Ot>1?1:Ot||0,Tt=D.progress,Vt,St,Mt,ft,Dn,bt,hn,$n;if(Ye&&(Ie=Le,Le=b?oe():qe,v&&(Ge=le,le=i&&!L?i.totalProgress():ot)),p&&f&&!sn&&!ta&&ai&&(!ot&&ue<qe+(qe-Ie)/(on()-fo)*p?ot=1e-4:ot===1&&P>qe+(qe-Ie)/(on()-fo)*p&&(ot=.9999)),ot!==Tt&&D.enabled){if(Vt=D.isActive=!!ot&&ot<1,St=!!Tt&&Tt<1,bt=Vt!==St,Dn=bt||!!ot!=!!Tt,D.direction=ot>Tt?1:-1,D.progress=ot,Dn&&!sn&&(Mt=ot&&!Tt?0:ot===1?1:Tt===1?2:3,L&&(ft=!bt&&G[Mt+1]!=="none"&&G[Mt+1]||G[Mt],$n=i&&(ft==="complete"||ft==="reset"||ft in i))),M&&(bt||$n)&&($n||h||!i)&&(ln(M)?M(D):D.getTrailing(M).forEach(function(O){return O.endAnimation()})),L||(I&&!sn&&!ta?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",ot,i._tTime/i._tDur):(I.vars.totalProgress=ot,I.invalidate().restart())):i&&i.totalProgress(ot,!!(sn&&(se||_e)))),f){if(_e&&g&&(F.style[g+x.os2]=we),!Y)K(mo(Te+ae*ot));else if(Dn){if(hn=!_e&&ot>Tt&&P+1>qe&&qe+1>=yi(N,x),A)if(!_e&&(Vt||hn)){var Wt=Fi(f,!0),Xt=qe-ue;Jh(f,dt,Wt.top+(x===Yt?Xt:0)+qt,Wt.left+(x===Yt?0:Xt)+qt)}else Jh(f,F);Us(Vt||hn?R:y),xe&&ot<1&&Vt||K(Te+(ot===1&&!hn?ae:0))}}v&&!Z.tween&&!sn&&!ta&&Se.restart(!0),a&&(bt||S&&ot&&(ot<1||!Dl))&&ko(a.targets).forEach(function(O){return O.classList[Vt||S?"add":"remove"](a.className)}),o&&!L&&!_e&&o(D),Dn&&!sn?(L&&($n&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),o&&o(D)),(bt||!Dl)&&(c&&bt&&rs(D,c),X[Mt]&&rs(D,X[Mt]),S&&(ot===1?D.kill(!1,1):X[Mt]=0),bt||(Mt=ot===1?1:3,X[Mt]&&rs(D,X[Mt]))),C&&!Vt&&Math.abs(D.getVelocity())>(_o(C)?C:2500)&&(io(D.callbackAnimation),I?I.progress(1):io(i,ft==="reverse"?1:!ot,1))):L&&o&&!sn&&o(D)}if(ze){var T=b?qe/b.duration()*(b._caScrollDist||0):qe;ne(T+(k._isFlipped?1:0)),ze(T)}be&&be(-qe/b.duration()*(b._caScrollDist||0))}},D.enable=function(_e,Ye){D.enabled||(D.enabled=!0,Jt(N,"resize",go),V||Jt(N,"scroll",os),ce&&Jt(r,"refreshInit",ce),_e!==!1&&(D.progress=ve=0,Le=Ie=$=oe()),Ye!==!1&&D.refresh())},D.getTween=function(_e){return _e&&Z?Z.tween:I},D.setPositions=function(_e,Ye,Ue,qe){if(b){var Ot=b.scrollTrigger,ot=b.duration(),Tt=Ot.end-Ot.start;_e=Ot.start+Tt*_e/ot,Ye=Ot.start+Tt*Ye/ot}D.refresh(!1,!1,{start:Vh(_e,Ue&&!!D._startClamp),end:Vh(Ye,Ue&&!!D._endClamp)},qe),D.update()},D.adjustPinSpacing=function(_e){if(pe&&_e){var Ye=pe.indexOf(x.d)+1;pe[Ye]=parseFloat(pe[Ye])+_e+qt,pe[1]=parseFloat(pe[1])+_e+qt,Us(pe)}},D.disable=function(_e,Ye){if(_e!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ye||I&&I.pause(),ie=0,fe&&(fe.uncache=1),ce&&jt(r,"refreshInit",ce),Se&&(Se.pause(),Z.tween&&Z.tween.kill()&&(Z.tween=0)),!V)){for(var Ue=it.length;Ue--;)if(it[Ue].scroller===N&&it[Ue]!==D)return;jt(N,"resize",go),V||jt(N,"scroll",os)}},D.kill=function(_e,Ye){D.disable(_e,Ye),I&&!Ye&&I.kill(),l&&delete Hc[l];var Ue=it.indexOf(D);Ue>=0&&it.splice(Ue,1),Ue===gn&&ka>0&&gn--,Ue=0,it.forEach(function(qe){return qe.scroller===D.scroller&&(Ue=1)}),Ue||vn||hr||(D.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Ye||i.kill()),Ze&&[Ze,Ve,k,me].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Co===D&&(Co=0),f&&(fe&&(fe.uncache=1),Ue=0,it.forEach(function(qe){return qe.pin===f&&Ue++}),Ue||(fe.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),He&&He(D),i&&i.add&&!Ae){var Qe=D.update;D.update=function(){D.update=Qe,st.cache++,ue||P||D.refresh()},Re.delayedCall(.01,D.update),Ae=.01,ue=P=0}else D.refresh();f&&J_()},r.register=function(n){return ys||(Re=n||yp(),Mp()&&window.document&&r.enable(),ys=po),ys},r.defaults=function(n){if(n)for(var i in n)sa[i]=n[i];return sa},r.disable=function(n,i){po=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(rt,"wheel",os),jt(mt,"scroll",os),clearInterval(ea),jt(mt,"touchcancel",gi),jt(dt,"touchstart",gi),ia(jt,mt,"pointerdown,touchstart,mousedown",Wh),ia(jt,mt,"pointerup,touchend,mouseup",Xh),sl.kill(),na(jt);for(var s=0;s<st.length;s+=3)ra(jt,st[s],st[s+1]),ra(jt,st[s],st[s+2])},r.enable=function(){if(rt=window,mt=document,zn=mt.documentElement,dt=mt.body,Re){if(ko=Re.utils.toArray,To=Re.utils.clamp,kc=Re.core.context||gi,Ll=Re.core.suppressOverwrites||gi,eh=rt.history.scrollRestoration||"auto",Gc=rt.pageYOffset||0,Re.core.globals("ScrollTrigger",r),dt){po=1,Is=document.createElement("div"),Is.style.height="100vh",Is.style.position="absolute",Dp(),X_(),kt.register(Re),r.isTouch=kt.isTouch,tr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bc=kt.isTouch===1,Jt(rt,"wheel",os),Qu=[rt,mt,zn,dt],Re.matchMedia?(r.matchMedia=function(u){var h=Re.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Re.addEventListener("matchMediaInit",function(){Pp(),oh()}),Re.addEventListener("matchMediaRevert",function(){return Cp()}),Re.addEventListener("matchMedia",function(){kr(0,1),Jr("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Ul(),Ul})):console.warn("Requires GSAP 3.11.0 or later"),Ul(),Jt(mt,"scroll",os);var n=dt.hasAttribute("style"),i=dt.style,s=i.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Fi(dt),Yt.m=Math.round(a.top+Yt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(dt.setAttribute("style",""),dt.removeAttribute("style")),ea=setInterval($h,250),Re.delayedCall(.5,function(){return ta=0}),Jt(mt,"touchcancel",gi),Jt(dt,"touchstart",gi),ia(Jt,mt,"pointerdown,touchstart,mousedown",Wh),ia(Jt,mt,"pointerup,touchend,mouseup",Xh),Fc=Re.utils.checkPrefix("transform"),za.push(Fc),ys=on(),sl=Re.delayedCall(.2,kr).pause(),Es=[mt,"visibilitychange",function(){var u=rt.innerWidth,h=rt.innerHeight;mt.hidden?(zh=u,Hh=h):(zh!==u||Hh!==h)&&go()},mt,"DOMContentLoaded",kr,rt,"load",kr,rt,"resize",go],na(Jt),it.forEach(function(u){return u.enable(0,1)}),l=0;l<st.length;l+=3)ra(jt,st[l],st[l+1]),ra(jt,st[l],st[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Dl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ea)||(ea=i)&&setInterval($h,i),"ignoreMobileResize"in n&&(Bc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(na(jt)||na(Jt,n.autoRefreshEvents||"none"),vp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=st.indexOf(s),a=Zr(s);~o&&st.splice(o,a?6:2),i&&(a?bi.unshift(rt,i,dt,i,zn,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?En(n):n).getBoundingClientRect(),a=o[s?qr:Yr]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?qr:Yr],l=i==null?a/2:i in al?al[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=jr.killAll||[];jr={},i.forEach(function(s){return s()})}},r})();je.version="3.15.1";je.saveStyles=function(r){return r?ko(r).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),kc())}}):Fn};je.revert=function(r,e){return oh(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?go(!0):(ys||je.register())&&kr(!0)};je.update=function(r){return++st.cache&&Hi(r===!0?2:0)};je.clearScrollMemory=Lp;je.maxScroll=function(r,e){return yi(r,e?Sn:Yt)};je.getScrollFunc=function(r,e){return gr(En(r),e?Sn:Yt)};je.getById=function(r){return Hc[r]};je.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!ai};je.snapDirectional=sh;je.addEventListener=function(r,e){var t=jr[r]||(jr[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=jr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Re.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ln(s)&&(s=s(),Jt(je,"refresh",function(){return s=e.batchMax()})),ko(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(je.create(c))}),t};var ef=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ol=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===zn&&r(dt,t)},ca={auto:1,scroll:1},ig=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ca[(l=ni(s)).overflowY]||ca[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Zr(s)&&(ca[(l=ni(s)).overflowY]||ca[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Up=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ig,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(mt,kt.eventTypes[0],nf,!1,!0)},onDisable:function(){return jt(mt,kt.eventTypes[0],nf,!0)}})},rg=/(input|label|select|textarea)/i,tf,nf=function(e){var t=rg.test(e.target.tagName);(t||tf)&&(e._gsapAllow=!0,tf=t)},sg=function(e){Ir(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=En(e.target)||zn,u=Re.core.globals().ScrollSmoother,h=u&&u.get(),d=tr&&(e.content&&En(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=gr(c,Yt),g=gr(c,Sn),_=1,p=(kt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,E=ln(i)?function(){return i(a)}:function(){return i||2.8},S,v,A=Up(c,e.type,!0,s),w=function(){return v=!1},b=gi,C=gi,M=function(){l=yi(c,Yt),C=To(tr?1:0,l),n&&(b=To(0,yi(c,Sn))),S=$r},x=function(){d._gsap.y=mo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var z=mo(a.deltaY/2),te=C(f.v-z);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var D=mo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=st.cache,Hi()}return!0}f.offset&&x(),v=!0},N,B,V,Y,X=function(){M(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&Re.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return tr&&G.type==="touchmove"&&L()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){v=!1;var G=_;_=mo((rt.visualViewport&&rt.visualViewport.scale||1)/p),N.pause(),G!==_&&Ol(c,_>1.01?!0:n?!1:"x"),B=g(),V=f(),M(),S=$r},e.onRelease=e.onGestureStart=function(G,z){if(f.offset&&x(),!z)Y.restart(!0);else{st.cache++;var te=E(),D,ce;n&&(D=g(),ce=D+te*.05*-G.velocityX/.227,te*=ef(g,D,ce,yi(c,Sn)),N.vars.scrollX=b(ce)),D=f(),ce=D+te*.05*-G.velocityY/.227,te*=ef(f,D,ce,yi(c,Yt)),N.vars.scrollY=C(ce),N.invalidate().duration(te).play(.01),(tr&&N.vars.scrollY>=l||D>=l-1)&&Re.to({},{onUpdate:X,duration:te})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),on()-m>1e3&&(S=0,m=on())},e.onChange=function(G,z,te,D,ce){if($r!==S&&M(),z&&n&&g(b(D[2]===z?B+(G.startX-G.x):g()+z-D[1])),te){f.offset&&x();var ke=ce[2]===te,Je=ke?V+G.startY-G.y:f()+te-ce[1],$=C(Je);ke&&Je!==$&&(V+=$-Je),f($)}(te||z)&&Hi()},e.onEnable=function(){Ol(c,n?!1:"x"),je.addEventListener("refresh",X),Jt(rt,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Ol(c,!0),jt(rt,"resize",X),je.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=tr,tr&&!f()&&f(1),tr&&Re.ticker.add(gi),Y=a._dc,N=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ip(f,f(),function(){return N.pause()})},onUpdate:Hi,onComplete:Y.vars.onComplete}),a};je.sort=function(r){if(ln(r))return it.sort(r);var e=rt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new kt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var e=r instanceof kt?r:sg(r);return _n&&_n.target===e.target&&_n.kill(),Zr(e.target)&&(_n=e),e};je.core={_getVelocityProp:Oc,_inputObserver:Up,_scrollers:st,_proxies:bi,bridge:{ss:function(){ai||Jr("scrollStart"),ai=on()},ref:function(){return sn}}};yp()&&Re.registerPlugin(je);var rf="1.3.27";function Np(r,e,t){return Math.max(r,Math.min(e,t))}function og(r,e,t){return(1-t)*r+t*e}function ag(r,e,t,n){return og(r,e,1-Math.exp(-t*n))}function lg(r,e){return(r%e+e)%e}var cg=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Np(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ag(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function ug(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var hg=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=ug(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Op=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const fg=100/6,$i={passive:!1};function sf(r,e){return r===1?fg:r===2?e:1}var dg=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Op;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,$i),this.element.addEventListener("touchstart",this.onTouchStart,$i),this.element.addEventListener("touchmove",this.onTouchMove,$i),this.element.addEventListener("touchend",this.onTouchEnd,$i)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,$i),this.element.removeEventListener("touchstart",this.onTouchStart,$i),this.element.removeEventListener("touchmove",this.onTouchMove,$i),this.element.removeEventListener("touchend",this.onTouchEnd,$i)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=sf(n,this.window.width),s=sf(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const of=r=>Math.min(1,1.001-2**(-10*r));var pg=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new cg;emitter=new Op;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:E=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:C=b,stopInertiaOnNavigate:M=!1,respectReducedMotion:x=!0}={}){window.lenisVersion=rf,window.lenis||(window.lenis={}),window.lenis.version=rf,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=of:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:E,autoRaf:S,anchors:v,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:M,respectReducedMotion:x},this.dimensions=new hg(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new dg(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=r,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),E=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(S)?0:S)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Np(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=of:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,d,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=h>f,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=d,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,E,S,v,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=h-f,E=e,S=s,v=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=d-g,E=t,S=o,v=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(E>0?p<m:p>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?lg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const ah="178",mg=0,af=1,_g=2,Fp=1,gg=2,Ui=3,vr=0,Pn=1,Si=2,fr=0,Ns=1,lf=2,cf=3,uf=4,vg=5,Or=100,xg=101,Sg=102,Mg=103,yg=104,Eg=200,Tg=201,bg=202,Ag=203,Wc=204,Xc=205,wg=206,Rg=207,Cg=208,Pg=209,Lg=210,Dg=211,Ig=212,Ug=213,Ng=214,qc=0,Yc=1,$c=2,Xs=3,Kc=4,Zc=5,jc=6,Jc=7,Bp=0,Og=1,Fg=2,dr=0,Bg=1,kg=2,zg=3,Hg=4,Gg=5,Vg=6,Wg=7,kp=300,qs=301,Ys=302,Qc=303,eu=304,gl=306,tu=1e3,zr=1001,nu=1002,mi=1003,Xg=1004,ua=1005,Ei=1006,Fl=1007,Hr=1008,qi=1009,zp=1010,Hp=1011,Ho=1012,lh=1013,Qr=1014,ki=1015,js=1016,ch=1017,uh=1018,Go=1020,Gp=35902,Vp=1021,Wp=1022,di=1023,Vo=1026,Wo=1027,Xp=1028,hh=1029,qp=1030,fh=1031,dh=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,_u=37814,gu=37815,vu=37816,xu=37817,Su=37818,Mu=37819,yu=37820,Eu=37821,qa=36492,Tu=36494,bu=36495,Yp=36283,Au=36284,wu=36285,Ru=36286,qg=3200,Yg=3201,$g=0,Kg=1,nr="",xn="srgb",$s="srgb-linear",ll="linear",vt="srgb",as=7680,hf=519,Zg=512,jg=513,Jg=514,$p=515,Qg=516,e0=517,t0=518,n0=519,ff=35044,df="300 es",zi=2e3,cl=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,Cu=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function i0(r,e){return(r%e+e)%e}function kl(r,e,t){return(1-t)*r+t*e}function ro(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*_,E=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,m*E);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const v=a*E;if(l=l*p+d*v,c=c*p+f*v,u=u*p+g*v,h=h*p+_*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zl=new q,pf=new $o;class et{constructor(e,t,n,i,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],S=i[4],v=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*_+a*E+l*A,s[3]=o*p+a*S+l*w,s[6]=o*m+a*v+l*b,s[1]=c*_+u*E+h*A,s[4]=c*p+u*S+h*w,s[7]=c*m+u*v+h*b,s[2]=d*_+f*E+g*A,s[5]=d*p+f*S+g*w,s[8]=d*m+f*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new et;function Kp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r0(){const r=Xo("canvas");return r.style.display="block",r}const mf={};function Os(r){r in mf||(mf[r]=!0,console.warn(r))}function s0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function o0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _f=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){const r={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nr?ll:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$s]:{primaries:e,whitePoint:n,transfer:ll,toXYZ:_f,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:_f,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),r}const ut=l0();function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class c0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Xo("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gl(i[o].image)):s.push(Gl(i[o]))}else s=Gl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?c0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h0=0;const Vl=new q;class un extends Js{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=zr,i=zr,s=Ei,o=Hr,a=di,l=qi,c=un.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Yo(),this.name="",this.source=new ph(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tu:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tu:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=kp;un.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,A=(m+1)/2,w=(u+d)/4,b=(h+_)/4,C=(g+p)/4;return S>v&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=C/s),this.set(n,i,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new un(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ph(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends f0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zp extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mi,this.minFilter=mi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),fa.subVectors(this.max,so),cs.subVectors(e.a,so),us.subVectors(e.b,so),hs.subVectors(e.c,so),Ki.subVectors(us,cs),Zi.subVectors(hs,us),Tr.subVectors(cs,hs);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Tr.z,Tr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Tr.z,0,-Tr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Tr.y,Tr.x,0];return!Wl(t,cs,us,hs,fa)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,cs,us,hs,fa))?!1:(da.crossVectors(Ki,Zi),t=[da.x,da.y,da.z],Wl(t,cs,us,hs,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,ha=new Ko,cs=new q,us=new q,hs=new q,Ki=new q,Zi=new q,Tr=new q,so=new q,fa=new q,da=new q,br=new q;function Wl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){br.fromArray(r,s);const a=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const p0=new Ko,oo=new q,Xl=new q;class mh{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Xl)),this.expandByPoint(oo.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pi=new q,ql=new q,pa=new q,ji=new q,Yl=new q,ma=new q,$l=new q;class jp{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ql.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(ql);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=ji.dot(this.direction),l=-ji.dot(pa),c=ji.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ql).addScaledVector(pa,d),f}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,s){Yl.subVectors(t,e),ma.subVectors(n,e),$l.crossVectors(Yl,ma);let o=this.direction.dot($l),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(ji,ma));if(l<0)return null;const c=a*this.direction.dot(Yl.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot($l);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,_0)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ji.crossVectors(n,Nn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ji.crossVectors(n,Nn)),Ji.normalize(),_a.crossVectors(Nn,Ji),i[0]=Ji.x,i[4]=_a.x,i[8]=Nn.x,i[1]=Ji.y,i[5]=_a.y,i[9]=Nn.y,i[2]=Ji.z,i[6]=_a.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],S=n[7],v=n[11],A=n[15],w=i[0],b=i[4],C=i[8],M=i[12],x=i[1],L=i[5],N=i[9],B=i[13],V=i[2],Y=i[6],X=i[10],G=i[14],z=i[3],te=i[7],D=i[11],ce=i[15];return s[0]=o*w+a*x+l*V+c*z,s[4]=o*b+a*L+l*Y+c*te,s[8]=o*C+a*N+l*X+c*D,s[12]=o*M+a*B+l*G+c*ce,s[1]=u*w+h*x+d*V+f*z,s[5]=u*b+h*L+d*Y+f*te,s[9]=u*C+h*N+d*X+f*D,s[13]=u*M+h*B+d*G+f*ce,s[2]=g*w+_*x+p*V+m*z,s[6]=g*b+_*L+p*Y+m*te,s[10]=g*C+_*N+p*X+m*D,s[14]=g*M+_*B+p*G+m*ce,s[3]=E*w+S*x+v*V+A*z,s[7]=E*b+S*L+v*Y+A*te,s[11]=E*C+S*N+v*X+A*D,s[15]=E*M+S*B+v*G+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+p*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],E=h*p*c-_*d*c+_*l*f-a*p*f-h*l*m+a*d*m,S=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*m+o*h*m,A=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,w=t*E+n*S+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(_*d*s-h*p*s-_*i*f+n*p*f+h*i*m-n*d*m)*b,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*b,e[4]=S*b,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*b,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*b,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*b,e[8]=v*b,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=A*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,p=o*h,m=a*h,E=l*c,S=l*u,v=l*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+v)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+S)*b,i[9]=(p-E)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/s,u=1/o,h=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=zi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===zi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===zi)g=(o+s)*h,_=-2*h;else if(a===cl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new q,ci=new Nt,m0=new q(0,0,0),_0=new q(1,1,1),Ji=new q,_a=new q,Nn=new q,vf=new Nt,xf=new $o;class Yi{constructor(e=0,t=0,n=0,i=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const Sf=new q,ds=new $o,Li=new Nt,ga=new q,ao=new q,v0=new q,x0=new $o,Mf=new q(1,0,0),yf=new q(0,1,0),Ef=new q(0,0,1),Tf={type:"added"},S0={type:"removed"},ps={type:"childadded",child:null},Kl={type:"childremoved",child:null};class Xn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new q,t=new Yi,n=new $o,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new et}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ao,ga,this.up):Li.lookAt(ga,ao,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(Li),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xn.DEFAULT_UP=new q(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,Di=new q,Zl=new q,Ii=new q,ms=new q,_s=new q,bf=new q,jl=new q,Jl=new q,Ql=new q,ec=new Bt,tc=new Bt,nc=new Bt;class fi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ui.subVectors(i,t),Di.subVectors(n,t),Zl.subVectors(e,t);const o=ui.dot(ui),a=ui.dot(Di),l=ui.dot(Zl),c=Di.dot(Di),u=Di.dot(Zl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ec,s.x),o.addScaledVector(tc,s.y),o.addScaledVector(nc,s.z),o}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Di.subVectors(e,t),ui.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ui.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ms.subVectors(i,n),_s.subVectors(s,n),jl.subVectors(e,n);const l=ms.dot(jl),c=_s.dot(jl);if(l<=0&&c<=0)return t.copy(n);Jl.subVectors(e,i);const u=ms.dot(Jl),h=_s.dot(Jl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ms,o);Ql.subVectors(e,s);const f=ms.dot(Ql),g=_s.dot(Ql);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_s,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return bf.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(bf,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(ms,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},va={h:0,s:0,l:0};function ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=i0(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ic(o,s,e+1/3),this.g=ic(o,s,e),this.b=ic(o,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=Jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ut.workingToColorSpace(rn.copy(this),e),Math.round(at(rn.r*255,0,255))*65536+Math.round(at(rn.g*255,0,255))*256+Math.round(at(rn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=xn){ut.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(va);const n=kl(Qi.h,va.h,t),i=kl(Qi.s,va.s,t),s=kl(Qi.l,va.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new pt;pt.NAMES=Jp;let M0=0;class vl extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Ns,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qp extends vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new q,xa=new _t;let y0=0;class Ai{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ro(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ff&&(e.usage=this.usage),e}}class em extends Ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tm extends Ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kr extends Ai{constructor(e,t,n){super(new Float32Array(e),t,n)}}let E0=0;const jn=new Nt,rc=new Xn,gs=new q,On=new Ko,lo=new Ko,Zt=new q;class ts extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?tm:em)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(On.min,lo.min),On.expandByPoint(Zt),Zt.addVectors(On.max,lo.max),On.expandByPoint(Zt)):(On.expandByPoint(lo.min),On.expandByPoint(lo.max))}On.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Zt.add(gs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;const c=new q,u=new q,h=new q,d=new _t,f=new _t,g=new _t,_=new q,p=new q;function m(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(_),a[M].add(_),a[x].add(_),l[C].add(p),l[M].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,M=E.length;C<M;++C){const x=E[C],L=x.start,N=x.count;for(let B=L,V=L+N;B<V;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new q,v=new q,A=new q,w=new q;function b(C){A.fromBufferAttribute(i,C),w.copy(A);const M=a[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,L)}for(let C=0,M=E.length;C<M;++C){const x=E[C],L=x.start,N=x.count;for(let B=L,V=L+N;B<V;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Ai(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ts,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new Nt,Ar=new jp,Sa=new mh,wf=new q,Ma=new q,ya=new q,Ea=new q,sc=new q,Ta=new q,Rf=new q,ba=new q;class pi extends Xn{constructor(e=new ts,t=new Qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(sc.fromBufferAttribute(h,e),o?Ta.addScaledVector(sc,u):Ta.addScaledVector(sc.sub(t),u))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Sa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Sa,wf)===null||Ar.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(Af.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Af),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],E=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=E,A=S;v<A;v+=3){const w=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=Aa(this,m,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);i=Aa(this,o,e,n,c,u,h,E,S,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],E=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=E,A=S;v<A;v+=3){const w=v,b=v+1,C=v+2;i=Aa(this,m,e,n,c,u,h,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=p,S=p+1,v=p+2;i=Aa(this,o,e,n,c,u,h,E,S,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function T0(r,e,t,n,i,s,o,a){let l;if(e.side===Pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===vr,a),l===null)return null;ba.copy(a),ba.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:r}}function Aa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ma),r.getVertexPosition(l,ya),r.getVertexPosition(c,Ea);const u=T0(r,e,t,n,Ma,ya,Ea,Rf);if(u){const h=new q;fi.getBarycoord(Rf,Ma,ya,Ea,h),i&&(u.uv=fi.getInterpolatedAttribute(i,a,l,c,h,new _t)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,h,new _t)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};fi.getNormal(Ma,ya,Ea,d.normal),u.face=d,u.barycoord=h}return u}class Zo extends ts{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Kr(c,3)),this.setAttribute("normal",new Kr(u,3)),this.setAttribute("uv",new Kr(h,2));function g(_,p,m,E,S,v,A,w,b,C,M){const x=v/b,L=A/C,N=v/2,B=A/2,V=w/2,Y=b+1,X=C+1;let G=0,z=0;const te=new q;for(let D=0;D<X;D++){const ce=D*L-B;for(let ke=0;ke<Y;ke++){const Je=ke*x-N;te[_]=Je*E,te[p]=ce*S,te[m]=V,c.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[m]=w>0?1:-1,u.push(te.x,te.y,te.z),h.push(ke/b),h.push(1-D/C),G+=1}}for(let D=0;D<C;D++)for(let ce=0;ce<b;ce++){const ke=d+ce+Y*D,Je=d+ce+Y*(D+1),$=d+(ce+1)+Y*(D+1),se=d+(ce+1)+Y*D;l.push(ke,Je,se),l.push(Je,$,se),z+=6}a.addGroup(f,z,M),f+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Ks(r[t]);for(const i in n)e[i]=n[i]}return e}function b0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const A0={clone:Ks,merge:mn};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class im extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new q,Cf=new _t,Pf=new _t;class ii extends im{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cu*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,Cf,Pf),t.subVectors(Pf,Cf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class C0 extends Xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ii(vs,xs,e,t);i.layers=this.layers,this.add(i);const s=new ii(vs,xs,e,t);s.layers=this.layers,this.add(s);const o=new ii(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new ii(vs,xs,e,t);a.layers=this.layers,this.add(a);const l=new ii(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new ii(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rm extends un{constructor(e=[],t=qs,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zo(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:fr});s.uniforms.tEquirect.value=t;const o=new pi(i,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Ei),new C0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class wa extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lf extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ac=new q,D0=new q,I0=new et;class Ur{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ac.subVectors(n,t).cross(D0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||I0.getNormalMatrix(e),i=this.coplanarPoint(ac).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new mh,U0=new _t(.5,.5),Ra=new q;class sm{constructor(e=new Ur,t=new Ur,n=new Ur,i=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],E=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,p-f,v-m).normalize(),n[1].setComponents(l+s,d+c,p+f,v+m).normalize(),n[2].setComponents(l+o,d+u,p+g,v+E).normalize(),n[3].setComponents(l-o,d-u,p-g,v-E).normalize(),n[4].setComponents(l-a,d-h,p-_,v-S).normalize(),t===zi)n[5].setComponents(l+a,d+h,p+_,v+S).normalize();else if(t===cl)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const t=U0.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ra.x=i.normal.x>0?e.max.x:e.min.x,Ra.y=i.normal.y>0?e.max.y:e.min.y,Ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N0 extends un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class om extends un{constructor(e,t,n=Qr,i,s,o,a=mi,l=mi,c,u=Vo,h=1){if(u!==Vo&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ph(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zs extends ts{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const E=m*d-o;for(let S=0;S<c;S++){const v=S*h-s;g.push(v,-E,0),_.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const S=E+c*m,v=E+c*(m+1),A=E+1+c*(m+1),w=E+1+c*m;f.push(S,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Kr(g,3)),this.setAttribute("normal",new Kr(_,3)),this.setAttribute("uv",new Kr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class O0 extends vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F0 extends vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class B0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const k0=new B0;class gh{constructor(e){this.manager=e!==void 0?e:k0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ss=new WeakMap;class z0 extends gh{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=lc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Ss.get(o);h===void 0&&(h=[],Ss.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Xo("img");function l(){u(),t&&t(this);const h=Ss.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),lc.remove(`image:${e}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Ss.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),lc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class H0 extends gh{constructor(e){super(e)}load(e,t,n,i){const s=new un,o=new z0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class am extends im{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G0 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class V0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Df=new Nt;class W0{constructor(e,t,n=0,i=1/0){this.ray=new jp(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Df.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(e,t=!0,n=[]){return Pu(e,this,n,t),n.sort(If),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Pu(e[i],this,n,t);return n.sort(If),n}}function If(r,e){return r.distance-e.distance}function Pu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Pu(s[o],e,t,!0)}}function Uf(r,e,t,n){const i=X0(n);switch(t){case Vp:return r*e;case Xp:return r*e/i.components*i.byteLength;case hh:return r*e/i.components*i.byteLength;case qp:return r*e*2/i.components*i.byteLength;case fh:return r*e*2/i.components*i.byteLength;case Wp:return r*e*3/i.components*i.byteLength;case di:return r*e*4/i.components*i.byteLength;case dh:return r*e*4/i.components*i.byteLength;case Ga:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ru:case ou:return Math.max(r,16)*Math.max(e,8)/4;case iu:case su:return Math.max(r,8)*Math.max(e,8)/2;case au:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qa:case Tu:case bu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yp:case Au:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wu:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(r){switch(r){case qi:case zp:return{byteLength:1,components:1};case Ho:case Hp:case js:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case Qr:case lh:case ki:return{byteLength:4,components:1};case Gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);function lm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function q0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_v=`#define PI 3.141592653589793
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
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
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
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
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
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`struct PhysicalMaterial {
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
}`,qv=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lx=`float getShadowMask() {
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,eS=`#define DISTANCE
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
}`,tS=`#define DISTANCE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,aS=`uniform vec3 diffuse;
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
}`,lS=`#define LAMBERT
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
}`,cS=`#define LAMBERT
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
}`,uS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,fS=`#define NORMAL
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
}`,dS=`#define NORMAL
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
}`,pS=`#define PHONG
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
}`,mS=`#define PHONG
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
}`,_S=`#define STANDARD
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
}`,gS=`#define STANDARD
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
}`,vS=`#define TOON
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
}`,xS=`#define TOON
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
}`,SS=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,yS=`#include <common>
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
}`,ES=`uniform vec3 color;
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
}`,TS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Y0,alphahash_pars_fragment:$0,alphamap_fragment:K0,alphamap_pars_fragment:Z0,alphatest_fragment:j0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:_v,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:Sv,emissivemap_fragment:Mv,emissivemap_pars_fragment:yv,colorspace_fragment:Ev,colorspace_pars_fragment:Tv,envmap_fragment:bv,envmap_common_pars_fragment:Av,envmap_pars_fragment:wv,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:kv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Dv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Fv,lights_pars_begin:Bv,lights_toon_fragment:zv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Gv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:$v,logdepthbuf_fragment:Kv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:Jv,map_fragment:Qv,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:rx,morphinstance_vertex:sx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:Sx,packing:Mx,premultiplied_alpha_fragment:yx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:bx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Dx,skinning_pars_vertex:Ix,skinning_vertex:Ux,skinnormal_vertex:Nx,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:Bx,tonemapping_pars_fragment:kx,transmission_fragment:zx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:$x,backgroundCube_frag:Kx,cube_vert:Zx,cube_frag:jx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:eS,distanceRGBA_frag:tS,equirect_vert:nS,equirect_frag:iS,linedashed_vert:rS,linedashed_frag:sS,meshbasic_vert:oS,meshbasic_frag:aS,meshlambert_vert:lS,meshlambert_frag:cS,meshmatcap_vert:uS,meshmatcap_frag:hS,meshnormal_vert:fS,meshnormal_frag:dS,meshphong_vert:pS,meshphong_frag:mS,meshphysical_vert:_S,meshphysical_frag:gS,meshtoon_vert:vS,meshtoon_frag:xS,points_vert:SS,points_frag:MS,shadow_vert:yS,shadow_frag:ES,sprite_vert:TS,sprite_frag:bS},Me={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},vi={basic:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:mn([Me.common,Me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:mn([Me.lights,Me.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};vi.physical={uniforms:mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ca={r:0,b:0,g:0},Rr=new Yi,AS=new Nt;function wS(r,e,t,n,i,s,o){const a=new pt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const A=g(S);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(S,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===gl)?(u===void 0&&(u=new pi(new Zo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ks(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Rr.copy(v.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Rr)),u.material.toneMapped=ut.getTransfer(A.colorSpace)!==vt,(h!==A||d!==A.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new pi(new Zs(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ks(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(A.colorSpace)!==vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Ca,nm(r)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:p,dispose:E}}function RS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,L,N,B,V){let Y=!1;const X=h(B,N,L);s!==X&&(s=X,c(s.object)),Y=f(x,B,N,V),Y&&g(x,B,N,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(x,L,N,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,L,N){const B=N.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let Y=V[L.id];Y===void 0&&(Y={},V[L.id]=Y);let X=Y[B];return X===void 0&&(X=d(l()),Y[B]=X),X}function d(x){const L=[],N=[],B=[];for(let V=0;V<t;V++)L[V]=0,N[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,L,N,B){const V=s.attributes,Y=L.attributes;let X=0;const G=N.getAttributes();for(const z in G)if(G[z].location>=0){const D=V[z];let ce=Y[z];if(ce===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function g(x,L,N,B){const V={},Y=L.attributes;let X=0;const G=N.getAttributes();for(const z in G)if(G[z].location>=0){let D=Y[z];D===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),V[z]=ce,X++}s.attributes=V,s.attributesNum=X,s.index=B}function _(){const x=s.newAttributes;for(let L=0,N=x.length;L<N;L++)x[L]=0}function p(x){m(x,0)}function m(x,L){const N=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;N[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),V[x]!==L&&(r.vertexAttribDivisor(x,L),V[x]=L)}function E(){const x=s.newAttributes,L=s.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==x[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function S(x,L,N,B,V,Y,X){X===!0?r.vertexAttribIPointer(x,L,N,V,Y):r.vertexAttribPointer(x,L,N,B,V,Y)}function v(x,L,N,B){_();const V=B.attributes,Y=N.getAttributes(),X=L.defaultAttributeValues;for(const G in Y){const z=Y[G];if(z.location>=0){let te=V[G];if(te===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const D=te.normalized,ce=te.itemSize,ke=e.get(te);if(ke===void 0)continue;const Je=ke.buffer,$=ke.type,se=ke.bytesPerElement,ve=$===r.INT||$===r.UNSIGNED_INT||te.gpuType===lh;if(te.isInterleavedBufferAttribute){const oe=te.data,Z=oe.stride,fe=te.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<z.locationSize;de++)m(z.location+de,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<z.locationSize;de++)p(z.location+de);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let de=0;de<z.locationSize;de++)S(z.location+de,ce/z.locationSize,$,D,Z*se,(fe+ce/z.locationSize*de)*se,ve)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)m(z.location+oe,te.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<z.locationSize;oe++)p(z.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let oe=0;oe<z.locationSize;oe++)S(z.location+oe,ce/z.locationSize,$,D,ce*se,ce/z.locationSize*oe*se,ve)}}else if(X!==void 0){const D=X[G];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(z.location,D);break;case 3:r.vertexAttrib3fv(z.location,D);break;case 4:r.vertexAttrib4fv(z.location,D);break;default:r.vertexAttrib1fv(z.location,D)}}}}E()}function A(){C();for(const x in n){const L=n[x];for(const N in L){const B=L[N];for(const V in B)u(B[V].object),delete B[V];delete L[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const N in L){const B=L[N];for(const V in B)u(B[V].object),delete B[V];delete L[N]}delete n[x.id]}function b(x){for(const L in n){const N=n[L];if(N[x.id]===void 0)continue;const B=N[x.id];for(const V in B)u(B[V].object),delete B[V];delete N[x.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function CS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==di&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==qi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ki&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function LS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ur,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,S=E*4;let v=m.clippingState||null;l.value=v,v=u(g,d,S,f);for(let A=0;A!==S;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function DS(r){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=qs:a===eu&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===eu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new P0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ws=4,Nf=[.125,.215,.35,.446,.526,.582],Fr=20,cc=new am,Of=new pt;let uc=null,hc=0,fc=0,dc=!1;const Nr=(1+Math.sqrt(5))/2,Ms=1/Nr,Ff=[new q(-Nr,Ms,0),new q(Nr,Ms,0),new q(-Ms,0,Nr),new q(Ms,0,Nr),new q(0,Nr,-Ms),new q(0,Nr,Ms),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],IS=new q;class Bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=IS}=s;uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,fc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:js,format:di,colorSpace:$s,depthBuffer:!1},i=kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=US(s)),this._blurMaterial=NS(s,e,t)}return i}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,i,s){const l=new ii(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Of),h.toneMapping=dr,h.autoClear=!1;const g=new Qp({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new pi(new Zo,g);let p=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,p=!0):(g.color.copy(Of),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const v=this._cubeSize;Pa(i,S*v,E>2?v:0,v,v),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qs||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,cc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ff[(i-s-1)%Ff.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pi(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Fr;p>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const m=[];let E=0;for(let b=0;b<Fr;++b){const C=b/_,M=Math.exp(-C*C/2);m.push(M),b===0?E+=M:b<p&&(E+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[i],A=3*v*(i>S-ws?i-S+ws:0),w=4*(this._cubeSize-v);Pa(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(h,cc)}}function US(r){const e=[],t=[],n=[];let i=r;const s=r-ws+1+Nf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ws?l=Nf[o-r+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*f),S=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,C=w>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(M,_*g*w),S.set(d,p*g*w);const x=[w,w,w,w,w,w];v.set(x,m*g*w)}const A=new ts;A.setAttribute("position",new Ai(E,_)),A.setAttribute("uv",new Ai(S,p)),A.setAttribute("faceIndex",new Ai(v,m)),e.push(A),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kf(r,e,t){const n=new xr(r,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function NS(r,e,t){const n=new Float32Array(Fr),i=new q(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function zf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Hf(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}function OS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===eu,u=l===qs||l===Ys;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Bf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function FS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function BS(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let S=0,v=E.length;S<v;S+=3){const A=E[S+0],w=E[S+1],b=E[S+2];d.push(A,w,w,b,b,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const A=S+0,w=S+1,b=S+2;d.push(A,w,w,b,b,A)}}else return;const p=new(Kp(d)?tm:em)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function kS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E]*_[E];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function HS(r,e,t){const n=new WeakMap,i=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*h),C=new Zp(b,A,w,h);C.type=ki,C.needsUpdate=!0;const M=v*4;for(let L=0;L<h;L++){const N=m[L],B=E[L],V=S[L],Y=A*w*4*L;for(let X=0;X<N.count;X++){const G=X*M;g===!0&&(i.fromBufferAttribute(N,X),b[Y+G+0]=i.x,b[Y+G+1]=i.y,b[Y+G+2]=i.z,b[Y+G+3]=0),_===!0&&(i.fromBufferAttribute(B,X),b[Y+G+4]=i.x,b[Y+G+5]=i.y,b[Y+G+6]=i.z,b[Y+G+7]=0),p===!0&&(i.fromBufferAttribute(V,X),b[Y+G+8]=i.x,b[Y+G+9]=i.y,b[Y+G+10]=i.z,b[Y+G+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new _t(A,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function GS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const cm=new un,Gf=new om(1,1),um=new Zp,hm=new d0,fm=new rm,Vf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function Qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vf[i];if(s===void 0&&(s=new Float32Array(i),Vf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xl(r,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function XS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function YS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Yf.set(n),r.uniformMatrix2fv(this.addr,!1,Yf),Kt(t,n)}}function $S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;qf.set(n),r.uniformMatrix3fv(this.addr,!1,qf),Kt(t,n)}}function KS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Xf.set(n),r.uniformMatrix4fv(this.addr,!1,Xf),Kt(t,n)}}function ZS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function QS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function eM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function rM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gf.compareFunction=$p,s=Gf):s=cm,t.setTexture2D(e||s,i)}function sM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hm,i)}function oM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fm,i)}function aM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||um,i)}function lM(r){switch(r){case 5126:return VS;case 35664:return WS;case 35665:return XS;case 35666:return qS;case 35674:return YS;case 35675:return $S;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return jS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function cM(r,e){r.uniform1fv(this.addr,e)}function uM(r,e){const t=Qs(e,this.size,2);r.uniform2fv(this.addr,t)}function hM(r,e){const t=Qs(e,this.size,3);r.uniform3fv(this.addr,t)}function fM(r,e){const t=Qs(e,this.size,4);r.uniform4fv(this.addr,t)}function dM(r,e){const t=Qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pM(r,e){const t=Qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mM(r,e){const t=Qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _M(r,e){r.uniform1iv(this.addr,e)}function gM(r,e){r.uniform2iv(this.addr,e)}function vM(r,e){r.uniform3iv(this.addr,e)}function xM(r,e){r.uniform4iv(this.addr,e)}function SM(r,e){r.uniform1uiv(this.addr,e)}function MM(r,e){r.uniform2uiv(this.addr,e)}function yM(r,e){r.uniform3uiv(this.addr,e)}function EM(r,e){r.uniform4uiv(this.addr,e)}function TM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||cm,s[o])}function bM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hm,s[o])}function AM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fm,s[o])}function wM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||um,s[o])}function RM(r){switch(r){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return _M;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return SM;case 36294:return MM;case 36295:return yM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}}class PM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function $f(r,e){r.seq.push(e),r.map[e.id]=e}function DM(r,e,t){const n=r.name,i=n.length;for(pc.lastIndex=0;;){const s=pc.exec(n),o=pc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$f(t,c===void 0?new CM(a,r,e):new PM(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new LM(a),$f(t,h)),t=h}}}class Ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);DM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const IM=37297;let UM=0;function NM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zf=new et;function OM(r){ut._getMatrix(Zf,ut.workingColorSpace,r);const e=`mat3( ${Zf.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case ll:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+NM(r.getShaderSource(e),o)}else return i}function FM(r,e){const t=OM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BM(r,e){let t;switch(e){case Bg:t="Linear";break;case kg:t="Reinhard";break;case zg:t="Cineon";break;case Hg:t="ACESFilmic";break;case Vg:t="AgX";break;case Wg:t="Neutral";break;case Gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new q;function kM(){ut.getLuminanceCoefficients(La);const r=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function HM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function GM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function vo(r){return r!==""}function Jf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(r){return r.replace(VM,XM)}const WM=new Map;function XM(r,e){let t=tt[e];if(t===void 0){const n=WM.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lu(t)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(qM,YM)}function YM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function $M(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function KM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ys&&(e="ENVMAP_MODE_REFRACTION"),e}function jM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function JM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$M(t),c=KM(t),u=ZM(t),h=jM(t),d=JM(t),f=zM(t),g=HM(s),_=i.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?tt.tonemapping_pars_fragment:"",t.toneMapping!==dr?BM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,FM("linearToOutputTexel",t.outputColorSpace),kM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=Lu(o),o=Jf(o,t),o=Qf(o,t),a=Lu(a),a=Jf(a,t),a=Qf(a,t),o=ed(o),a=ed(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=E+p+o,v=E+m+a,A=Kf(i,i.VERTEX_SHADER,S),w=Kf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let Y=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const G=jf(i,A,"vertex"),z=jf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+G+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||V==="")&&(X=!1);X&&(L.diagnostics={runnable:Y,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new Ya(i,_),M=GM(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,IM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let ey=0;class ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ny(e),t.set(e,n)),n}}class ny{constructor(e){this.id=ey++,this.code=e,this.usedTimes=0}}function iy(r,e,t,n,i,s,o){const a=new _h,l=new ty,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,L,N,B){const V=N.fog,Y=B.geometry,X=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),z=G&&G.mapping===gl?G.image.height:null,te=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=D!==void 0?D.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let Je,$,se,ve;if(te){const ye=vi[te];Je=ye.vertexShader,$=ye.fragmentShader}else Je=M.vertexShader,$=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const oe=r.getRenderTarget(),Z=r.state.buffers.depth.getReversed(),fe=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,Le=!!M.map,Ie=!!M.matcap,ue=!!G,P=!!M.aoMap,Ze=!!M.lightMap,Ve=!!M.bumpMap,k=!!M.normalMap,me=!!M.displacementMap,$e=!!M.emissiveMap,Pe=!!M.metalnessMap,Ae=!!M.roughnessMap,nt=M.anisotropy>0,R=M.clearcoat>0,y=M.dispersion>0,F=M.iridescence>0,J=M.sheen>0,j=M.transmission>0,K=nt&&!!M.anisotropyMap,Te=R&&!!M.clearcoatMap,ae=R&&!!M.clearcoatNormalMap,we=R&&!!M.clearcoatRoughnessMap,pe=F&&!!M.iridescenceMap,ne=F&&!!M.iridescenceThicknessMap,xe=J&&!!M.sheenColorMap,ze=J&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,le=!!M.specularColorMap,Ge=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,he=j&&!!M.thicknessMap,ee=!!M.gradientMap,Se=!!M.alphaMap,ie=M.alphaTest>0,Q=!!M.alphaHash,be=!!M.extensions;let He=dr;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(He=r.toneMapping);const ht={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:$,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:fe,instancingColor:fe&&B.instanceColor!==null,instancingMorph:fe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$s,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:Ie,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:Ze,bumpMap:Ve,normalMap:k,displacementMap:d&&me,emissiveMap:$e,normalMapObjectSpace:k&&M.normalMapType===Kg,normalMapTangentSpace:k&&M.normalMapType===$g,metalnessMap:Pe,roughnessMap:Ae,anisotropy:nt,anisotropyMap:K,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:y,iridescence:F,iridescenceMap:pe,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:xe,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:le,specularIntensityMap:Ge,transmission:j,transmissionMap:I,thicknessMap:he,gradientMap:ee,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:ie,alphaHash:Q,combine:M.combine,mapUv:Le&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:Ze&&_(M.lightMap.channel),bumpMapUv:Ve&&_(M.bumpMap.channel),normalMapUv:k&&_(M.normalMap.channel),displacementMapUv:me&&_(M.displacementMap.channel),emissiveMapUv:$e&&_(M.emissiveMap.channel),metalnessMapUv:Pe&&_(M.metalnessMap.channel),roughnessMapUv:Ae&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:Te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Fe&&_(M.specularMap.channel),specularColorMapUv:le&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:Se&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(k||nt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Le||Se),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:$e&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Si,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&M.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(x,M),S(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let L;if(x){const N=vi[x];L=A0.clone(N.uniforms)}else L=M.uniforms;return L}function A(M,x){let L;for(let N=0,B=u.length;N<B;N++){const V=u[N];if(V.cacheKey===x){L=V,++L.usedTimes;break}}return L===void 0&&(L=new QM(r,x,M,s),u.push(L)),L}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function ry(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function id(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||sy),n.length>1&&n.sort(d||nd),i.length>1&&i.sort(d||nd)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function oy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new id,r.set(n,[o])):i>=s.length?(o=new id,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ay(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function ly(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cy=0;function uy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hy(r){const e=new ay,t=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Nt,o=new Nt;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,E=0,S=0,v=0,A=0,w=0,b=0;c.sort(uy);for(let M=0,x=c.length;M<x;M++){const L=c[M],N=L.color,B=L.intensity,V=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],B);b++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[_]=X;const G=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=X,p++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const G=L.shadow,z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[m]=X,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==E||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=E,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=b,n.version=cy++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const S=c[m];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function rd(r){const e=new hy(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new rd(r),e.set(i,[a])):s>=o.length?(a=new rd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`;function my(r,e,t){let n=new sm;const i=new _t,s=new _t,o=new Bt,a=new O0({depthPacking:Yg}),l=new F0,c={},u=t.maxTextureSize,h={[vr]:Pn,[Pn]:vr,[Si]:Si},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:dy,fragmentShader:py}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ts;g.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let m=this.type;this.render=function(w,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(fr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=m!==Ui&&this.type===Ui,V=m===Ui&&this.type!==Ui;for(let Y=0,X=w.length;Y<X;Y++){const G=w[Y],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const te=z.getFrameExtents();if(i.multiply(te),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,z.mapSize.y=s.y)),z.map===null||B===!0||V===!0){const ce=this.type!==Ui?{minFilter:mi,magFilter:mi}:{};z.map!==null&&z.map.dispose(),z.map=new xr(i.x,i.y,ce),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let ce=0;ce<D;ce++){const ke=z.getViewport(ce);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),N.viewport(o),z.updateMatrices(G,ce),n=z.getFrustum(),v(b,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&E(z,C),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,x,L)};function E(w,b){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,f,_,null)}function S(w,b,C,M){let x=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=x.uuid,B=b.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let Y=V[B];Y===void 0&&(Y=x.clone(),V[B]=Y,b.addEventListener("dispose",A)),x=Y}if(x.visible=b.visible,x.wireframe=b.wireframe,M===Ui?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=C}return x}function v(w,b,C,M,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ui)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),V=w.material;if(Array.isArray(V)){const Y=B.groups;for(let X=0,G=Y.length;X<G;X++){const z=Y[X],te=V[z.materialIndex];if(te&&te.visible){const D=S(w,te,M,x);w.onBeforeShadow(r,w,b,C,B,D,z),r.renderBufferDirect(C,null,B,D,w,z),w.onAfterShadow(r,w,b,C,B,D,z)}}}else if(V.visible){const Y=S(w,V,M,x);w.onBeforeShadow(r,w,b,C,B,Y,null),r.renderBufferDirect(C,null,B,Y,w,null),w.onAfterShadow(r,w,b,C,B,Y,null)}}const N=w.children;for(let B=0,V=N.length;B<V;B++)v(N[B],b,C,M,x)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const _y={[qc]:Yc,[$c]:jc,[Kc]:Jc,[Xs]:Zc,[Yc]:qc,[jc]:$c,[Jc]:Kc,[Zc]:Xs};function gy(r,e){function t(){let I=!1;const he=new Bt;let ee=null;const Se=new Bt(0,0,0,0);return{setMask:function(ie){ee!==ie&&!I&&(r.colorMask(ie,ie,ie,ie),ee=ie)},setLocked:function(ie){I=ie},setClear:function(ie,Q,be,He,ht){ht===!0&&(ie*=He,Q*=He,be*=He),he.set(ie,Q,be,He),Se.equals(he)===!1&&(r.clearColor(ie,Q,be,He),Se.copy(he))},reset:function(){I=!1,ee=null,Se.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ee=null,Se=null,ie=null;return{setReversed:function(Q){if(he!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const He=ie;ie=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(Q){Q?oe(r.DEPTH_TEST):Z(r.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!I&&(r.depthMask(Q),ee=Q)},setFunc:function(Q){if(he&&(Q=_y[Q]),Se!==Q){switch(Q){case qc:r.depthFunc(r.NEVER);break;case Yc:r.depthFunc(r.ALWAYS);break;case $c:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case Kc:r.depthFunc(r.EQUAL);break;case Zc:r.depthFunc(r.GEQUAL);break;case jc:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ie!==Q&&(he&&(Q=1-Q),r.clearDepth(Q),ie=Q)},reset:function(){I=!1,ee=null,Se=null,ie=null,he=!1}}}function i(){let I=!1,he=null,ee=null,Se=null,ie=null,Q=null,be=null,He=null,ht=null;return{setTest:function(ye){I||(ye?oe(r.STENCIL_TEST):Z(r.STENCIL_TEST))},setMask:function(ye){he!==ye&&!I&&(r.stencilMask(ye),he=ye)},setFunc:function(ye,De,Qe){(ee!==ye||Se!==De||ie!==Qe)&&(r.stencilFunc(ye,De,Qe),ee=ye,Se=De,ie=Qe)},setOp:function(ye,De,Qe){(Q!==ye||be!==De||He!==Qe)&&(r.stencilOp(ye,De,Qe),Q=ye,be=De,He=Qe)},setLocked:function(ye){I=ye},setClear:function(ye){ht!==ye&&(r.clearStencil(ye),ht=ye)},reset:function(){I=!1,he=null,ee=null,Se=null,ie=null,Q=null,be=null,He=null,ht=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,E=null,S=null,v=null,A=null,w=null,b=new pt(0,0,0),C=0,M=!1,x=null,L=null,N=null,B=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=G>=2);let te=null,D={};const ce=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),Je=new Bt().fromArray(ce),$=new Bt().fromArray(ke);function se(I,he,ee,Se){const ie=new Uint8Array(4),Q=r.createTexture();r.bindTexture(I,Q),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<ee;be++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(he+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return Q}const ve={};ve[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(r.DEPTH_TEST),o.setFunc(Xs),Ve(!1),k(af),oe(r.CULL_FACE),P(fr);function oe(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Z(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function fe(I,he){return h[I]!==he?(r.bindFramebuffer(I,he),h[I]=he,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function de(I,he){let ee=f,Se=!1;if(I){ee=d.get(he),ee===void 0&&(ee=[],d.set(he,ee));const ie=I.textures;if(ee.length!==ie.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,be=ie.length;Q<be;Q++)ee[Q]=r.COLOR_ATTACHMENT0+Q;ee.length=ie.length,Se=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,Se=!0);Se&&r.drawBuffers(ee)}function Le(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Ie={[Or]:r.FUNC_ADD,[xg]:r.FUNC_SUBTRACT,[Sg]:r.FUNC_REVERSE_SUBTRACT};Ie[Mg]=r.MIN,Ie[yg]=r.MAX;const ue={[Eg]:r.ZERO,[Tg]:r.ONE,[bg]:r.SRC_COLOR,[Wc]:r.SRC_ALPHA,[Lg]:r.SRC_ALPHA_SATURATE,[Cg]:r.DST_COLOR,[wg]:r.DST_ALPHA,[Ag]:r.ONE_MINUS_SRC_COLOR,[Xc]:r.ONE_MINUS_SRC_ALPHA,[Pg]:r.ONE_MINUS_DST_COLOR,[Rg]:r.ONE_MINUS_DST_ALPHA,[Dg]:r.CONSTANT_COLOR,[Ig]:r.ONE_MINUS_CONSTANT_COLOR,[Ug]:r.CONSTANT_ALPHA,[Ng]:r.ONE_MINUS_CONSTANT_ALPHA};function P(I,he,ee,Se,ie,Q,be,He,ht,ye){if(I===fr){_===!0&&(Z(r.BLEND),_=!1);return}if(_===!1&&(oe(r.BLEND),_=!0),I!==vg){if(I!==p||ye!==M){if((m!==Or||v!==Or)&&(r.blendEquation(r.FUNC_ADD),m=Or,v=Or),ye)switch(I){case Ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lf:r.blendFunc(r.ONE,r.ONE);break;case cf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,A=null,w=null,b.set(0,0,0),C=0,p=I,M=ye}return}ie=ie||he,Q=Q||ee,be=be||Se,(he!==m||ie!==v)&&(r.blendEquationSeparate(Ie[he],Ie[ie]),m=he,v=ie),(ee!==E||Se!==S||Q!==A||be!==w)&&(r.blendFuncSeparate(ue[ee],ue[Se],ue[Q],ue[be]),E=ee,S=Se,A=Q,w=be),(He.equals(b)===!1||ht!==C)&&(r.blendColor(He.r,He.g,He.b,ht),b.copy(He),C=ht),p=I,M=!1}function Ze(I,he){I.side===Si?Z(r.CULL_FACE):oe(r.CULL_FACE);let ee=I.side===Pn;he&&(ee=!ee),Ve(ee),I.blending===Ns&&I.transparent===!1?P(fr):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Se=I.stencilWrite;a.setTest(Se),Se&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Z(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function k(I){I!==mg?(oe(r.CULL_FACE),I!==L&&(I===af?r.cullFace(r.BACK):I===_g?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Z(r.CULL_FACE),L=I}function me(I){I!==N&&(X&&r.lineWidth(I),N=I)}function $e(I,he,ee){I?(oe(r.POLYGON_OFFSET_FILL),(B!==he||V!==ee)&&(r.polygonOffset(he,ee),B=he,V=ee)):Z(r.POLYGON_OFFSET_FILL)}function Pe(I){I?oe(r.SCISSOR_TEST):Z(r.SCISSOR_TEST)}function Ae(I){I===void 0&&(I=r.TEXTURE0+Y-1),te!==I&&(r.activeTexture(I),te=I)}function nt(I,he,ee){ee===void 0&&(te===null?ee=r.TEXTURE0+Y-1:ee=te);let Se=D[ee];Se===void 0&&(Se={type:void 0,texture:void 0},D[ee]=Se),(Se.type!==I||Se.texture!==he)&&(te!==ee&&(r.activeTexture(ee),te=ee),r.bindTexture(I,he||ve[I]),Se.type=I,Se.texture=he)}function R(){const I=D[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(I){Je.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function ze(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Fe(I,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let Se=ee.get(I);Se===void 0&&(Se=r.getUniformBlockIndex(he,I.name),ee.set(I,Se))}function le(I,he){const Se=c.get(he).get(I);l.get(he)!==Se&&(r.uniformBlockBinding(he,Se,I.__bindingPointIndex),l.set(he,Se))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,D={},h={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,E=null,S=null,v=null,A=null,w=null,b=new pt(0,0,0),C=0,M=!1,x=null,L=null,N=null,B=null,V=null,Je.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Z,bindFramebuffer:fe,drawBuffers:de,useProgram:Le,setBlending:P,setMaterial:Ze,setFlipSided:Ve,setCullFace:k,setLineWidth:me,setPolygonOffset:$e,setScissorTest:Pe,activeTexture:Ae,bindTexture:nt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:pe,texImage3D:ne,updateUBOMapping:Fe,uniformBlockBinding:le,texStorage2D:ae,texStorage3D:we,texSubImage2D:J,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:Te,scissor:xe,viewport:ze,reset:Ge}}function vy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Xo("canvas")}function _(R,y,F){let J=1;const j=nt(R);if((j.width>F||j.height>F)&&(J=F/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(J*j.width),Te=Math.floor(J*j.height);h===void 0&&(h=g(K,Te));const ae=y?g(K,Te):h;return ae.width=K,ae.height=Te,ae.getContext("2d").drawImage(R,0,0,K,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+Te+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,y,F,J,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=y;if(y===r.RED&&(F===r.FLOAT&&(K=r.R32F),F===r.HALF_FLOAT&&(K=r.R16F),F===r.UNSIGNED_BYTE&&(K=r.R8)),y===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.R8UI),F===r.UNSIGNED_SHORT&&(K=r.R16UI),F===r.UNSIGNED_INT&&(K=r.R32UI),F===r.BYTE&&(K=r.R8I),F===r.SHORT&&(K=r.R16I),F===r.INT&&(K=r.R32I)),y===r.RG&&(F===r.FLOAT&&(K=r.RG32F),F===r.HALF_FLOAT&&(K=r.RG16F),F===r.UNSIGNED_BYTE&&(K=r.RG8)),y===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RG8UI),F===r.UNSIGNED_SHORT&&(K=r.RG16UI),F===r.UNSIGNED_INT&&(K=r.RG32UI),F===r.BYTE&&(K=r.RG8I),F===r.SHORT&&(K=r.RG16I),F===r.INT&&(K=r.RG32I)),y===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGB8UI),F===r.UNSIGNED_SHORT&&(K=r.RGB16UI),F===r.UNSIGNED_INT&&(K=r.RGB32UI),F===r.BYTE&&(K=r.RGB8I),F===r.SHORT&&(K=r.RGB16I),F===r.INT&&(K=r.RGB32I)),y===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),F===r.UNSIGNED_INT&&(K=r.RGBA32UI),F===r.BYTE&&(K=r.RGBA8I),F===r.SHORT&&(K=r.RGBA16I),F===r.INT&&(K=r.RGBA32I)),y===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),y===r.RGBA){const Te=j?ll:ut.getTransfer(J);F===r.FLOAT&&(K=r.RGBA32F),F===r.HALF_FLOAT&&(K=r.RGBA16F),F===r.UNSIGNED_BYTE&&(K=Te===vt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,y){let F;return R?y===null||y===Qr||y===Go?F=r.DEPTH24_STENCIL8:y===ki?F=r.DEPTH32F_STENCIL8:y===Ho&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qr||y===Go?F=r.DEPTH_COMPONENT24:y===ki?F=r.DEPTH_COMPONENT32F:y===Ho&&(F=r.DEPTH_COMPONENT16),F}function A(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==mi&&R.minFilter!==Ei?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){const y=R.target;y.removeEventListener("dispose",w),C(y),y.isVideoTexture&&u.delete(y)}function b(R){const y=R.target;y.removeEventListener("dispose",b),x(y)}function C(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,J=d.get(F);if(J){const j=J[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(R),Object.keys(J).length===0&&d.delete(F)}n.remove(R)}function M(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const F=R.source,J=d.get(F);delete J[y.__cacheKey],o.memory.textures--}function x(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let j=0;j<y.__webglFramebuffer[J].length;j++)r.deleteFramebuffer(y.__webglFramebuffer[J][j]);else r.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)r.deleteFramebuffer(y.__webglFramebuffer[J]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let J=0,j=F.length;J<j;J++){const K=n.get(F[J]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(R)}let L=0;function N(){L=0}function B(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const F=n.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(F,R,y);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+y)}function X(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ve(F,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+y)}function G(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ve(F,R,y);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+y)}function z(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){oe(F,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+y)}const te={[tu]:r.REPEAT,[zr]:r.CLAMP_TO_EDGE,[nu]:r.MIRRORED_REPEAT},D={[mi]:r.NEAREST,[Xg]:r.NEAREST_MIPMAP_NEAREST,[ua]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[Fl]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},ce={[Zg]:r.NEVER,[n0]:r.ALWAYS,[jg]:r.LESS,[$p]:r.LEQUAL,[Jg]:r.EQUAL,[t0]:r.GEQUAL,[Qg]:r.GREATER,[e0]:r.NOTEQUAL};function ke(R,y){if(y.type===ki&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ei||y.magFilter===Fl||y.magFilter===ua||y.magFilter===Hr||y.minFilter===Ei||y.minFilter===Fl||y.minFilter===ua||y.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mi||y.minFilter!==ua&&y.minFilter!==Hr||y.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));const J=y.source;let j=d.get(J);j===void 0&&(j={},d.set(J,j));const K=V(y);if(K!==R.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[K].usedTimes++;const Te=j[R.__cacheKey];Te!==void 0&&(j[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(y)),R.__cacheKey=K,R.__webglTexture=j[K].texture}return F}function $(R,y,F){return Math.floor(Math.floor(R/F)/y)}function se(R,y,F,J){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,F,J,y.data);else{K.sort((ne,xe)=>ne.start-xe.start);let Te=0;for(let ne=1;ne<K.length;ne++){const xe=K[Te],ze=K[ne],Fe=xe.start+xe.count,le=$(ze.start,y.width,4),Ge=$(xe.start,y.width,4);ze.start<=Fe+1&&le===Ge&&$(ze.start+ze.count-1,y.width,4)===le?xe.count=Math.max(xe.count,ze.start+ze.count-xe.start):(++Te,K[Te]=ze)}K.length=Te+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),pe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let ne=0,xe=K.length;ne<xe;ne++){const ze=K[ne],Fe=Math.floor(ze.start/4),le=Math.ceil(ze.count/4),Ge=Fe%y.width,I=Math.floor(Fe/y.width),he=le,ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Ge,I,he,ee,F,J,y.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function ve(R,y,F){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const j=Je(R,y),K=y.source;t.bindTexture(J,R.__webglTexture,r.TEXTURE0+F);const Te=n.get(K);if(K.version!==Te.__version||j===!0){t.activeTexture(r.TEXTURE0+F);const ae=ut.getPrimaries(ut.workingColorSpace),we=y.colorSpace===nr?null:ut.getPrimaries(y.colorSpace),pe=y.colorSpace===nr||ae===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ne=_(y.image,!1,i.maxTextureSize);ne=Ae(y,ne);const xe=s.convert(y.format,y.colorSpace),ze=s.convert(y.type);let Fe=S(y.internalFormat,xe,ze,y.colorSpace,y.isVideoTexture);ke(J,y);let le;const Ge=y.mipmaps,I=y.isVideoTexture!==!0,he=Te.__version===void 0||j===!0,ee=K.dataReady,Se=A(y,ne);if(y.isDepthTexture)Fe=v(y.format===Wo,y.type),he&&(I?t.texStorage2D(r.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Fe,ne.width,ne.height,0,xe,ze,null));else if(y.isDataTexture)if(Ge.length>0){I&&he&&t.texStorage2D(r.TEXTURE_2D,Se,Fe,Ge[0].width,Ge[0].height);for(let ie=0,Q=Ge.length;ie<Q;ie++)le=Ge[ie],I?ee&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,xe,ze,le.data):t.texImage2D(r.TEXTURE_2D,ie,Fe,le.width,le.height,0,xe,ze,le.data);y.generateMipmaps=!1}else I?(he&&t.texStorage2D(r.TEXTURE_2D,Se,Fe,ne.width,ne.height),ee&&se(y,ne,xe,ze)):t.texImage2D(r.TEXTURE_2D,0,Fe,ne.width,ne.height,0,xe,ze,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Fe,Ge[0].width,Ge[0].height,ne.depth);for(let ie=0,Q=Ge.length;ie<Q;ie++)if(le=Ge[ie],y.format!==di)if(xe!==null)if(I){if(ee)if(y.layerUpdates.size>0){const be=Uf(le.width,le.height,y.format,y.type);for(const He of y.layerUpdates){const ht=le.data.subarray(He*be/le.data.BYTES_PER_ELEMENT,(He+1)*be/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,He,le.width,le.height,1,xe,ht)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,ne.depth,xe,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Fe,le.width,le.height,ne.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,ne.depth,xe,ze,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Fe,le.width,le.height,ne.depth,0,xe,ze,le.data)}else{I&&he&&t.texStorage2D(r.TEXTURE_2D,Se,Fe,Ge[0].width,Ge[0].height);for(let ie=0,Q=Ge.length;ie<Q;ie++)le=Ge[ie],y.format!==di?xe!==null?I?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,xe,le.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ee&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,le.width,le.height,xe,ze,le.data):t.texImage2D(r.TEXTURE_2D,ie,Fe,le.width,le.height,0,xe,ze,le.data)}else if(y.isDataArrayTexture)if(I){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Fe,ne.width,ne.height,ne.depth),ee)if(y.layerUpdates.size>0){const ie=Uf(ne.width,ne.height,y.format,y.type);for(const Q of y.layerUpdates){const be=ne.data.subarray(Q*ie/ne.data.BYTES_PER_ELEMENT,(Q+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,xe,ze,be)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,ze,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,xe,ze,ne.data);else if(y.isData3DTexture)I?(he&&t.texStorage3D(r.TEXTURE_3D,Se,Fe,ne.width,ne.height,ne.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,ze,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,xe,ze,ne.data);else if(y.isFramebufferTexture){if(he)if(I)t.texStorage2D(r.TEXTURE_2D,Se,Fe,ne.width,ne.height);else{let ie=ne.width,Q=ne.height;for(let be=0;be<Se;be++)t.texImage2D(r.TEXTURE_2D,be,Fe,ie,Q,0,xe,ze,null),ie>>=1,Q>>=1}}else if(Ge.length>0){if(I&&he){const ie=nt(Ge[0]);t.texStorage2D(r.TEXTURE_2D,Se,Fe,ie.width,ie.height)}for(let ie=0,Q=Ge.length;ie<Q;ie++)le=Ge[ie],I?ee&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,xe,ze,le):t.texImage2D(r.TEXTURE_2D,ie,Fe,xe,ze,le);y.generateMipmaps=!1}else if(I){if(he){const ie=nt(ne);t.texStorage2D(r.TEXTURE_2D,Se,Fe,ie.width,ie.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,ze,ne)}else t.texImage2D(r.TEXTURE_2D,0,Fe,xe,ze,ne);p(y)&&m(J),Te.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function oe(R,y,F){if(y.image.length!==6)return;const J=Je(R,y),j=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const K=n.get(j);if(j.version!==K.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const Te=ut.getPrimaries(ut.workingColorSpace),ae=y.colorSpace===nr?null:ut.getPrimaries(y.colorSpace),we=y.colorSpace===nr||Te===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!pe&&!ne?xe[Q]=_(y.image[Q],!0,i.maxCubemapSize):xe[Q]=ne?y.image[Q].image:y.image[Q],xe[Q]=Ae(y,xe[Q]);const ze=xe[0],Fe=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Ge=S(y.internalFormat,Fe,le,y.colorSpace),I=y.isVideoTexture!==!0,he=K.__version===void 0||J===!0,ee=j.dataReady;let Se=A(y,ze);ke(r.TEXTURE_CUBE_MAP,y);let ie;if(pe){I&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Ge,ze.width,ze.height);for(let Q=0;Q<6;Q++){ie=xe[Q].mipmaps;for(let be=0;be<ie.length;be++){const He=ie[be];y.format!==di?Fe!==null?I?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,He.width,He.height,Fe,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,He.width,He.height,Fe,le,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Ge,He.width,He.height,0,Fe,le,He.data)}}}else{if(ie=y.mipmaps,I&&he){ie.length>0&&Se++;const Q=nt(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Fe,le,xe[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,xe[Q].width,xe[Q].height,0,Fe,le,xe[Q].data);for(let be=0;be<ie.length;be++){const ht=ie[be].image[Q].image;I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,ht.width,ht.height,Fe,le,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Ge,ht.width,ht.height,0,Fe,le,ht.data)}}else{I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,le,xe[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Fe,le,xe[Q]);for(let be=0;be<ie.length;be++){const He=ie[be];I?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Fe,le,He.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Ge,Fe,le,He.image[Q])}}}p(y)&&m(r.TEXTURE_CUBE_MAP),K.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Z(R,y,F,J,j,K){const Te=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),we=S(F.internalFormat,Te,ae,F.colorSpace),pe=n.get(y),ne=n.get(F);if(ne.__renderTarget=y,!pe.__hasExternalTextures){const xe=Math.max(1,y.width>>K),ze=Math.max(1,y.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,K,we,xe,ze,y.depth,0,Te,ae,null):t.texImage2D(j,K,we,xe,ze,0,Te,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),$e(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,j,ne.__webglTexture,0,me(y)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,j,ne.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(R,y,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const J=y.depthTexture,j=J&&J.isDepthTexture?J.type:null,K=v(y.stencilBuffer,j),Te=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=me(y);$e(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,K,y.width,y.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,K,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,K,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,R)}else{const J=y.textures;for(let j=0;j<J.length;j++){const K=J[j],Te=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),we=S(K.internalFormat,Te,ae,K.colorSpace),pe=me(y);F&&$e(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,we,y.width,y.height):$e(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,we,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,we,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const j=J.__webglTexture,K=me(y);if(y.depthTexture.format===Vo)$e(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(y.depthTexture.format===Wo)$e(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Le(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=J}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?de(y.__webglFramebuffer[0],R):de(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=r.createRenderbuffer(),fe(y.__webglDepthbuffer[J],R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),fe(y.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(R,y,F){const J=n.get(R);y!==void 0&&Z(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Le(R)}function ue(R){const y=R.texture,F=n.get(R),J=n.get(y);R.addEventListener("dispose",b);const j=R.textures,K=R.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let we=0;we<y.mipmaps.length;we++)F.__webglFramebuffer[ae][we]=r.createFramebuffer()}else F.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)F.__webglFramebuffer[ae]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ae=0,we=j.length;ae<we;ae++){const pe=n.get(j[ae]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&$e(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const we=j[ae];F.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const pe=s.convert(we.format,we.colorSpace),ne=s.convert(we.type),xe=S(we.internalFormat,pe,ne,we.colorSpace,R.isXRRenderTarget===!0),ze=me(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,xe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ke(r.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Z(F.__webglFramebuffer[ae][we],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else Z(F.__webglFramebuffer[ae],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ae=0,we=j.length;ae<we;ae++){const pe=j[ae],ne=n.get(pe);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ke(r.TEXTURE_2D,pe),Z(F.__webglFramebuffer,R,pe,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),p(pe)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),ke(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)Z(F.__webglFramebuffer[we],R,y,r.COLOR_ATTACHMENT0,ae,we);else Z(F.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,ae,0);p(y)&&m(ae),t.unbindTexture()}R.depthBuffer&&Le(R)}function P(R){const y=R.textures;for(let F=0,J=y.length;F<J;F++){const j=y[F];if(p(j)){const K=E(R),Te=n.get(j).__webglTexture;t.bindTexture(K,Te),m(K),t.unbindTexture()}}}const Ze=[],Ve=[];function k(R){if(R.samples>0){if($e(R)===!1){const y=R.textures,F=R.width,J=R.height;let j=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(R),ae=y.length>1;if(ae)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const ne=n.get(y[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,F,J,0,0,F,J,j,r.NEAREST),l===!0&&(Ze.length=0,Ve.length=0,Ze.push(r.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(K),Ve.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);const ne=n.get(y[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function me(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pe(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ae(R,y){const F=R.colorSpace,J=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==$s&&F!==nr&&(ut.getTransfer(F)===vt?(J!==di||j!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Ie,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=$e}function xy(r,e){function t(n,i=nr){let s;const o=ut.getTransfer(i);if(n===qi)return r.UNSIGNED_BYTE;if(n===ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zp)return r.BYTE;if(n===Hp)return r.SHORT;if(n===Ho)return r.UNSIGNED_SHORT;if(n===lh)return r.INT;if(n===Qr)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===js)return r.HALF_FLOAT;if(n===Vp)return r.ALPHA;if(n===Wp)return r.RGB;if(n===di)return r.RGBA;if(n===Vo)return r.DEPTH_COMPONENT;if(n===Wo)return r.DEPTH_STENCIL;if(n===Xp)return r.RED;if(n===hh)return r.RED_INTEGER;if(n===qp)return r.RG;if(n===fh)return r.RG_INTEGER;if(n===dh)return r.RGBA_INTEGER;if(n===Ga||n===Va||n===Wa||n===Xa)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===lu||n===cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===lu)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_u)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Tu||n===bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qa)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yp||n===Au||n===wu||n===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`;class yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new un,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:Sy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ey extends Js{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new yy,p=t.getContextAttributes();let m=null,E=null;const S=[],v=[],A=new _t;let w=null;const b=new ii;b.viewport=new Bt;const C=new ii;C.viewport=new Bt;const M=[b,C],x=new G0;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=S[$];return se===void 0&&(se=new oc,S[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=S[$];return se===void 0&&(se=new oc,S[$]=se),se.getGripSpace()},this.getHand=function($){let se=S[$];return se===void 0&&(se=new oc,S[$]=se),se.getHandSpace()};function B($){const se=v.indexOf($.inputSource);if(se===-1)return;const ve=S[se];ve!==void 0&&(ve.update($.inputSource,$.frame,c||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<S.length;$++){const se=v[$];se!==null&&(v[$]=null,S[$].disconnect(se))}L=null,N=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,E=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,oe=null,Z=null;p.depth&&(Z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=p.stencil?Wo:Vo,oe=p.stencil?Go:Qr);const fe={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new xr(d.textureWidth,d.textureHeight,{format:di,type:qi,depthTexture:new om(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new xr(f.framebufferWidth,f.framebufferHeight,{format:di,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let se=0;se<$.removed.length;se++){const ve=$.removed[se],oe=v.indexOf(ve);oe>=0&&(v[oe]=null,S[oe].disconnect(ve))}for(let se=0;se<$.added.length;se++){const ve=$.added[se];let oe=v.indexOf(ve);if(oe===-1){for(let fe=0;fe<S.length;fe++)if(fe>=v.length){v.push(ve),oe=fe;break}else if(v[fe]===null){v[fe]=ve,oe=fe;break}if(oe===-1)break}const Z=S[oe];Z&&Z.connect(ve)}}const X=new q,G=new q;function z($,se,ve){X.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const oe=X.distanceTo(G),Z=se.projectionMatrix.elements,fe=ve.projectionMatrix.elements,de=Z[14]/(Z[10]-1),Le=Z[14]/(Z[10]+1),Ie=(Z[9]+1)/Z[5],ue=(Z[9]-1)/Z[5],P=(Z[8]-1)/Z[0],Ze=(fe[8]+1)/fe[0],Ve=de*P,k=de*Ze,me=oe/(-P+Ze),$e=me*-P;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($e),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Z[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Pe=de+me,Ae=Le+me,nt=Ve-$e,R=k+(oe-$e),y=Ie*Le/Ae*Pe,F=ue*Le/Ae*Pe;$.projectionMatrix.makePerspective(nt,R,y,F,Pe,Ae),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let se=$.near,ve=$.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),x.near=C.near=b.near=se,x.far=C.far=b.far=ve,(L!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,N=x.far),b.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const oe=$.parent,Z=x.cameras;te(x,oe);for(let fe=0;fe<Z.length;fe++)te(Z[fe],oe);Z.length===2?z(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),D($,x,oe)};function D($,se,ve){ve===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function ke($,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let de=0;de<ve.length;de++){const Le=ve[de];let Ie=null;if(f!==null)Ie=f.getViewport(Le);else{const P=h.getViewSubImage(d,Le);Ie=P.viewport,de===0&&(e.setRenderTargetTextures(E,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(E))}let ue=M[de];ue===void 0&&(ue=new ii,ue.layers.enable(de),ue.viewport=new Bt,M[de]=ue),ue.matrix.fromArray(Le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),de===0&&(x.matrix.copy(ue.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(ue)}const Z=i.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const de=h.getDepthInformation(ve[0]);de&&de.isValid&&de.texture&&_.init(e,de,i.renderState)}}for(let ve=0;ve<S.length;ve++){const oe=v[ve],Z=S[ve];oe!==null&&Z!==void 0&&Z.update(oe,se,c||o)}ce&&ce($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new lm;Je.setAnimationLoop(ke),this.setAnimationLoop=function($){ce=$},this.dispose=function(){}}}const Cr=new Yi,Ty=new Nt;function by(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,E,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),S=E.envMap,v=E.envMapRotation;S&&(p.envMap.value=S,Cr.copy(v),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Cr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ay(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=i[E.id];v===void 0&&(g(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(E,A);const w=e.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const S=h();E.__bindingPointIndex=S;const v=r.createBuffer(),A=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=i[E.id],v=E.uniforms,A=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const L=C[M];if(f(L,w,M,A)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],G=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,N+V,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,V),V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,S,v,A){const w=E.value,b=S+"_"+v;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const S=E.uniforms;let v=0;const A=16;for(let b=0,C=S.length;b<C;b++){const M=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,L=M.length;x<L;x++){const N=M[x],B=Array.isArray(N.value)?N.value:[N.value];for(let V=0,Y=B.length;V<Y;V++){const X=B[V],G=_(X),z=v%A,te=z%G.boundary,D=z+te;v+=te,D!==0&&A-D<G.storage&&(v+=A-D),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=G.storage}}}const w=v%A;return w>0&&(v+=A-w),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class wy{constructor(e={}){const{canvas:t=r0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=xn;let w=0,b=0,C=null,M=-1,x=null;const L=new Bt,N=new Bt;let B=null;const V=new pt(0);let Y=0,X=t.width,G=t.height,z=1,te=null,D=null;const ce=new Bt(0,0,X,G),ke=new Bt(0,0,X,G);let Je=!1;const $=new sm;let se=!1,ve=!1;const oe=new Nt,Z=new Nt,fe=new q,de=new Bt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ue(){return C===null?z:1}let P=n;function Ze(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ah}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Q,!1),P===null){const O="webgl2";if(P=Ze(O,T),P===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,k,me,$e,Pe,Ae,nt,R,y,F,J,j,K,Te,ae,we,pe,ne,xe,ze,Fe,le,Ge,I;function he(){Ve=new FS(P),Ve.init(),le=new xy(P,Ve),k=new PS(P,Ve,e,le),me=new gy(P,Ve),k.reverseDepthBuffer&&d&&me.buffers.depth.setReversed(!0),$e=new zS(P),Pe=new ry,Ae=new vy(P,Ve,me,Pe,k,le,$e),nt=new DS(v),R=new OS(v),y=new q0(P),Ge=new RS(P,y),F=new BS(P,y,$e,Ge),J=new GS(P,F,y,$e),xe=new HS(P,k,Ae),we=new LS(Pe),j=new iy(v,nt,R,Ve,k,Ge,we),K=new by(v,Pe),Te=new oy,ae=new fy(Ve),ne=new wS(v,nt,R,me,J,f,l),pe=new my(v,J,k),I=new Ay(P,$e,k,me),ze=new CS(P,Ve,$e),Fe=new kS(P,Ve,$e),$e.programs=j.programs,v.capabilities=k,v.extensions=Ve,v.properties=Pe,v.renderLists=Te,v.shadowMap=pe,v.state=me,v.info=$e}he();const ee=new Ey(v,P);this.xr=ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(X,G,!1))},this.getSize=function(T){return T.set(X,G)},this.setSize=function(T,O,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,G=O,t.width=Math.floor(T*z),t.height=Math.floor(O*z),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(X*z,G*z).floor()},this.setDrawingBufferSize=function(T,O,W){X=T,G=O,z=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,O,W,H){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,O,W,H),me.viewport(L.copy(ce).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,O,W,H){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,O,W,H),me.scissor(N.copy(ke).multiplyScalar(z).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){me.setScissorTest(Je=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,W=!0){let H=0;if(T){let U=!1;if(C!==null){const re=C.texture.format;U=re===dh||re===fh||re===hh}if(U){const re=C.texture.type,ge=re===qi||re===Qr||re===Ho||re===Go||re===ch||re===uh,Ce=ne.getClearColor(),Ee=ne.getClearAlpha(),Be=Ce.r,We=Ce.g,Ne=Ce.b;ge?(g[0]=Be,g[1]=We,g[2]=Ne,g[3]=Ee,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Be,_[1]=We,_[2]=Ne,_[3]=Ee,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ne.dispose(),Te.dispose(),ae.dispose(),Pe.dispose(),nt.dispose(),R.dispose(),J.dispose(),Ge.dispose(),I.dispose(),j.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",_e),ee.removeEventListener("sessionend",Ye),Ue.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=$e.autoReset,O=pe.enabled,W=pe.autoUpdate,H=pe.needsUpdate,U=pe.type;he(),$e.autoReset=T,pe.enabled=O,pe.autoUpdate=W,pe.needsUpdate=H,pe.type=U}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const O=T.target;O.removeEventListener("dispose",be),He(O)}function He(T){ht(T),Pe.remove(T)}function ht(T){const O=Pe.get(T).programs;O!==void 0&&(O.forEach(function(W){j.releaseProgram(W)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,H,U,re){O===null&&(O=Le);const ge=U.isMesh&&U.matrixWorld.determinant()<0,Ce=Dn(T,O,W,H,U);me.setMaterial(H,ge);let Ee=W.index,Be=1;if(H.wireframe===!0){if(Ee=F.getWireframeAttribute(W),Ee===void 0)return;Be=2}const We=W.drawRange,Ne=W.attributes.position;let Ke=We.start*Be,gt=(We.start+We.count)*Be;re!==null&&(Ke=Math.max(Ke,re.start*Be),gt=Math.min(gt,(re.start+re.count)*Be)),Ee!==null?(Ke=Math.max(Ke,0),gt=Math.min(gt,Ee.count)):Ne!=null&&(Ke=Math.max(Ke,0),gt=Math.min(gt,Ne.count));const It=gt-Ke;if(It<0||It===1/0)return;Ge.setup(U,H,Ce,W,Ee);let At,yt=ze;if(Ee!==null&&(At=y.get(Ee),yt=Fe,yt.setIndex(At)),U.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*ue()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(U.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),me.setLineWidth(Xe*ue()),U.isLineSegments?yt.setMode(P.LINES):U.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else U.isPoints?yt.setMode(P.POINTS):U.isSprite&&yt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Xe=U._multiDrawStarts,Ct=U._multiDrawCounts,ct=U._multiDrawCount,In=Ee?y.get(Ee).bytesPerElement:1,ns=Pe.get(H).currentProgram.getUniforms();for(let Un=0;Un<ct;Un++)ns.setValue(P,"_gl_DrawID",Un),yt.render(Xe[Un]/In,Ct[Un])}else if(U.isInstancedMesh)yt.renderInstances(Ke,It,U.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ct=Math.min(W.instanceCount,Xe);yt.renderInstances(Ke,It,Ct)}else yt.render(Ke,It)};function ye(T,O,W){T.transparent===!0&&T.side===Si&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,St(T,O,W),T.side=vr,T.needsUpdate=!0,St(T,O,W),T.side=Si):St(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),m=ae.get(W),m.init(O),S.push(m),W.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),T!==W&&T.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const H=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const Ce=re[ge];ye(Ce,W,U),H.add(Ce)}else ye(re,W,U),H.add(re)}),m=S.pop(),H},this.compileAsync=function(T,O,W=null){const H=this.compile(T,O,W);return new Promise(U=>{function re(){if(H.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){U(T);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let De=null;function Qe(T){De&&De(T)}function _e(){Ue.stop()}function Ye(){Ue.start()}const Ue=new lm;Ue.setAnimationLoop(Qe),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(T){De=T,ee.setAnimationLoop(T),T===null?Ue.stop():Ue.start()},ee.addEventListener("sessionstart",_e),ee.addEventListener("sessionend",Ye),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),m=ae.get(T,S.length),m.init(O),S.push(m),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Z),ve=this.localClippingEnabled,se=we.init(this.clippingPlanes,ve),p=Te.get(T,E.length),p.init(),E.push(p),ee.enabled===!0&&ee.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&qe(re,O,-1/0,v.sortObjects)}qe(T,O,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(te,D),Ie=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ie&&ne.addToRenderList(p,T),this.info.render.frame++,se===!0&&we.beginShadows();const W=m.state.shadowsArray;pe.render(W,T,O),se===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,U=p.transmissive;if(m.setupLights(),O.isArrayCamera){const re=O.cameras;if(U.length>0)for(let ge=0,Ce=re.length;ge<Ce;ge++){const Ee=re[ge];ot(H,U,T,Ee)}Ie&&ne.render(T);for(let ge=0,Ce=re.length;ge<Ce;ge++){const Ee=re[ge];Ot(p,T,Ee,Ee.viewport)}}else U.length>0&&ot(H,U,T,O),Ie&&ne.render(T),Ot(p,T,O);C!==null&&b===0&&(Ae.updateMultisampleRenderTarget(C),Ae.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),Ge.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(m=S[S.length-1],se===!0&&we.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function qe(T,O,W,H){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){H&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const ge=J.update(T),Ce=T.material;Ce.visible&&p.push(T,ge,Ce,W,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ge=J.update(T),Ce=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),de.copy(ge.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(Ce)){const Ee=ge.groups;for(let Be=0,We=Ee.length;Be<We;Be++){const Ne=Ee[Be],Ke=Ce[Ne.materialIndex];Ke&&Ke.visible&&p.push(T,ge,Ke,W,de.z,Ne)}}else Ce.visible&&p.push(T,ge,Ce,W,de.z,null)}}const re=T.children;for(let ge=0,Ce=re.length;ge<Ce;ge++)qe(re[ge],O,W,H)}function Ot(T,O,W,H){const U=T.opaque,re=T.transmissive,ge=T.transparent;m.setupLightsView(W),se===!0&&we.setGlobalState(v.clippingPlanes,W),H&&me.viewport(L.copy(H)),U.length>0&&Tt(U,O,W),re.length>0&&Tt(re,O,W),ge.length>0&&Tt(ge,O,W),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ot(T,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new xr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?js:qi,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const re=m.state.transmissionRenderTarget[H.id],ge=H.viewport||L;re.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Ee=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(re),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Ie&&ne.render(W);const We=v.toneMapping;v.toneMapping=dr;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),se===!0&&we.setGlobalState(v.clippingPlanes,H),Tt(T,W,H),Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let gt=0,It=O.length;gt<It;gt++){const At=O[gt],yt=At.object,Xe=At.geometry,Ct=At.material,ct=At.group;if(Ct.side===Si&&yt.layers.test(H.layers)){const In=Ct.side;Ct.side=Pn,Ct.needsUpdate=!0,Vt(yt,W,H,Xe,Ct,ct),Ct.side=In,Ct.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re))}v.setRenderTarget(Ce,Ee,Be),v.setClearColor(V,Y),Ne!==void 0&&(H.viewport=Ne),v.toneMapping=We}function Tt(T,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let U=0,re=T.length;U<re;U++){const ge=T[U],Ce=ge.object,Ee=ge.geometry,Be=ge.group;let We=ge.material;We.allowOverride===!0&&H!==null&&(We=H),Ce.layers.test(W.layers)&&Vt(Ce,O,W,Ee,We,Be)}}function Vt(T,O,W,H,U,re){T.onBeforeRender(v,O,W,H,U,re),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(v,O,W,H,T,re),U.transparent===!0&&U.side===Si&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,v.renderBufferDirect(W,O,H,U,T,re),U.side=vr,U.needsUpdate=!0,v.renderBufferDirect(W,O,H,U,T,re),U.side=Si):v.renderBufferDirect(W,O,H,U,T,re),T.onAfterRender(v,O,W,H,U,re)}function St(T,O,W){O.isScene!==!0&&(O=Le);const H=Pe.get(T),U=m.state.lights,re=m.state.shadowsArray,ge=U.state.version,Ce=j.getParameters(T,U.state,re,O,W),Ee=j.getProgramCacheKey(Ce);let Be=H.programs;H.environment=T.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(T.isMeshStandardMaterial?R:nt).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",be),Be=new Map,H.programs=Be);let We=Be.get(Ee);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===ge)return ft(T,Ce),We}else Ce.uniforms=j.getUniforms(T),T.onBeforeCompile(Ce,v),We=j.acquireProgram(Ce,Ee),Be.set(Ee,We),H.uniforms=Ce.uniforms;const Ne=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=we.uniform),ft(T,Ce),H.needsLights=hn(T),H.lightsStateVersion=ge,H.needsLights&&(Ne.ambientLightColor.value=U.state.ambient,Ne.lightProbe.value=U.state.probe,Ne.directionalLights.value=U.state.directional,Ne.directionalLightShadows.value=U.state.directionalShadow,Ne.spotLights.value=U.state.spot,Ne.spotLightShadows.value=U.state.spotShadow,Ne.rectAreaLights.value=U.state.rectArea,Ne.ltc_1.value=U.state.rectAreaLTC1,Ne.ltc_2.value=U.state.rectAreaLTC2,Ne.pointLights.value=U.state.point,Ne.pointLightShadows.value=U.state.pointShadow,Ne.hemisphereLights.value=U.state.hemi,Ne.directionalShadowMap.value=U.state.directionalShadowMap,Ne.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ne.spotShadowMap.value=U.state.spotShadowMap,Ne.spotLightMatrix.value=U.state.spotLightMatrix,Ne.spotLightMap.value=U.state.spotLightMap,Ne.pointShadowMap.value=U.state.pointShadowMap,Ne.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function Mt(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ya.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ft(T,O){const W=Pe.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Dn(T,O,W,H,U){O.isScene!==!0&&(O=Le),Ae.resetTextureUnits();const re=O.fog,ge=H.isMeshStandardMaterial?O.environment:null,Ce=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$s,Ee=(H.isMeshStandardMaterial?R:nt).get(H.envMap||ge),Be=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color;let It=dr;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(It=v.toneMapping);const At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=At!==void 0?At.length:0,Xe=Pe.get(H),Ct=m.state.lights;if(se===!0&&(ve===!0||T!==x)){const fn=T===x&&H.id===M;we.setState(H,T,fn)}let ct=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ct.state.version||Xe.outputColorSpace!==Ce||U.isBatchedMesh&&Xe.batching===!1||!U.isBatchedMesh&&Xe.batching===!0||U.isBatchedMesh&&Xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Xe.instancing===!1||!U.isInstancedMesh&&Xe.instancing===!0||U.isSkinnedMesh&&Xe.skinning===!1||!U.isSkinnedMesh&&Xe.skinning===!0||U.isInstancedMesh&&Xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Xe.instancingMorph===!1&&U.morphTexture!==null||Xe.envMap!==Ee||H.fog===!0&&Xe.fog!==re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection)||Xe.vertexAlphas!==Be||Xe.vertexTangents!==We||Xe.morphTargets!==Ne||Xe.morphNormals!==Ke||Xe.morphColors!==gt||Xe.toneMapping!==It||Xe.morphTargetsCount!==yt)&&(ct=!0):(ct=!0,Xe.__version=H.version);let In=Xe.currentProgram;ct===!0&&(In=St(H,O,U));let ns=!1,Un=!1,eo=!1;const wt=In.getUniforms(),Kn=Xe.uniforms;if(me.useProgram(In.program)&&(ns=!0,Un=!0,eo=!0),H.id!==M&&(M=H.id,Un=!0),ns||x!==T){me.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),o0(oe),a0(oe),wt.setValue(P,"projectionMatrix",oe)):wt.setValue(P,"projectionMatrix",T.projectionMatrix),wt.setValue(P,"viewMatrix",T.matrixWorldInverse);const Mn=wt.map.cameraPosition;Mn!==void 0&&Mn.setValue(P,fe.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Un=!0,eo=!0)}if(U.isSkinnedMesh){wt.setOptional(P,U,"bindMatrix"),wt.setOptional(P,U,"bindMatrixInverse");const fn=U.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),wt.setValue(P,"boneTexture",fn.boneTexture,Ae))}U.isBatchedMesh&&(wt.setOptional(P,U,"batchingTexture"),wt.setValue(P,"batchingTexture",U._matricesTexture,Ae),wt.setOptional(P,U,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",U._indirectTexture,Ae),wt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",U._colorsTexture,Ae));const Zn=W.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&xe.update(U,W,In),(Un||Xe.receiveShadow!==U.receiveShadow)&&(Xe.receiveShadow=U.receiveShadow,wt.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=Ee,Kn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),Un&&(wt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&bt(Kn,eo),re&&H.fog===!0&&K.refreshFogUniforms(Kn,re),K.refreshMaterialUniforms(Kn,H,z,G,m.state.transmissionRenderTarget[T.id]),Ya.upload(P,Mt(Xe),Kn,Ae)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ya.upload(P,Mt(Xe),Kn,Ae),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(P,"center",U.center),wt.setValue(P,"modelViewMatrix",U.modelViewMatrix),wt.setValue(P,"normalMatrix",U.normalMatrix),wt.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const fn=H.uniformsGroups;for(let Mn=0,yl=fn.length;Mn<yl;Mn++){const Mr=fn[Mn];I.update(Mr,In),I.bind(Mr,In)}}return In}function bt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function hn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,W){const H=Pe.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Pe.get(T.texture).__webglTexture=O,Pe.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const W=Pe.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const $n=P.createFramebuffer();this.setRenderTarget=function(T,O=0,W=0){C=T,w=O,b=W;let H=!0,U=null,re=!1,ge=!1;if(T){const Ee=Pe.get(T);if(Ee.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Ee.__hasExternalTextures)Ae.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Ee.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const We=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[O])?U=We[O][W]:U=We[O],re=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?U=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?U=We[W]:U=We,L.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else L.copy(ce).multiplyScalar(z).floor(),N.copy(ke).multiplyScalar(z).floor(),B=Je;if(W!==0&&(U=$n),me.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&me.drawBuffers(T,U),me.viewport(L),me.scissor(N),me.setScissorTest(B),re){const Ee=Pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,W)}else if(ge){const Ee=Pe.get(T.texture),Be=O;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,W,Be)}else if(T!==null&&W!==0){const Ee=Pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ee.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(T,O,W,H,U,re,ge,Ce=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){me.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const Be=T.textures[Ce],We=Be.format,Ne=Be.type;if(!k.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-H&&W>=0&&W<=T.height-U&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ce),P.readPixels(O,W,H,U,le.convert(We),le.convert(Ne),re))}finally{const Be=C!==null?Pe.get(C).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,H,U,re,ge,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(O>=0&&O<=T.width-H&&W>=0&&W<=T.height-U){me.bindFramebuffer(P.FRAMEBUFFER,Ee);const Be=T.textures[Ce],We=Be.format,Ne=Be.type;if(!k.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ce),P.readPixels(O,W,H,U,le.convert(We),le.convert(Ne),0);const gt=C!==null?Pe.get(C).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,gt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await s0(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(Ke),P.deleteSync(It),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,W=0){const H=Math.pow(2,-W),U=Math.floor(T.image.width*H),re=Math.floor(T.image.height*H),ge=O!==null?O.x:0,Ce=O!==null?O.y:0;Ae.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ge,Ce,U,re),me.unbindTexture()};const Wt=P.createFramebuffer(),Xt=P.createFramebuffer();this.copyTextureToTexture=function(T,O,W=null,H=null,U=0,re=null){re===null&&(U!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=U,U=0):re=0);let ge,Ce,Ee,Be,We,Ne,Ke,gt,It;const At=T.isCompressedTexture?T.mipmaps[re]:T.image;if(W!==null)ge=W.max.x-W.min.x,Ce=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,We=W.min.y,Ne=W.isBox3?W.min.z:0;else{const Zn=Math.pow(2,-U);ge=Math.floor(At.width*Zn),Ce=Math.floor(At.height*Zn),T.isDataArrayTexture?Ee=At.depth:T.isData3DTexture?Ee=Math.floor(At.depth*Zn):Ee=1,Be=0,We=0,Ne=0}H!==null?(Ke=H.x,gt=H.y,It=H.z):(Ke=0,gt=0,It=0);const yt=le.convert(O.format),Xe=le.convert(O.type);let Ct;O.isData3DTexture?(Ae.setTexture3D(O,0),Ct=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ae.setTexture2DArray(O,0),Ct=P.TEXTURE_2D_ARRAY):(Ae.setTexture2D(O,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=P.getParameter(P.UNPACK_ROW_LENGTH),In=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ns=P.getParameter(P.UNPACK_SKIP_PIXELS),Un=P.getParameter(P.UNPACK_SKIP_ROWS),eo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne);const wt=T.isDataArrayTexture||T.isData3DTexture,Kn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Zn=Pe.get(T),fn=Pe.get(O),Mn=Pe.get(Zn.__renderTarget),yl=Pe.get(fn.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Mn.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,yl.__webglFramebuffer);for(let Mr=0;Mr<Ee;Mr++)wt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(T).__webglTexture,U,Ne+Mr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(O).__webglTexture,re,It+Mr)),P.blitFramebuffer(Be,We,ge,Ce,Ke,gt,ge,Ce,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||T.isRenderTargetTexture||Pe.has(T)){const Zn=Pe.get(T),fn=Pe.get(O);me.bindFramebuffer(P.READ_FRAMEBUFFER,Wt),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xt);for(let Mn=0;Mn<Ee;Mn++)wt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zn.__webglTexture,U,Ne+Mn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zn.__webglTexture,U),Kn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,re,It+Mn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,re),U!==0?P.blitFramebuffer(Be,We,ge,Ce,Ke,gt,ge,Ce,P.COLOR_BUFFER_BIT,P.NEAREST):Kn?P.copyTexSubImage3D(Ct,re,Ke,gt,It+Mn,Be,We,ge,Ce):P.copyTexSubImage2D(Ct,re,Ke,gt,Be,We,ge,Ce);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kn?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ct,re,Ke,gt,It,ge,Ce,Ee,yt,Xe,At.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,re,Ke,gt,It,ge,Ce,Ee,yt,At.data):P.texSubImage3D(Ct,re,Ke,gt,It,ge,Ce,Ee,yt,Xe,At):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,Ke,gt,ge,Ce,yt,Xe,At.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,Ke,gt,At.width,At.height,yt,At.data):P.texSubImage2D(P.TEXTURE_2D,re,Ke,gt,ge,Ce,yt,Xe,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,In),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ns),P.pixelStorei(P.UNPACK_SKIP_ROWS,Un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,eo),re===0&&O.generateMipmaps&&P.generateMipmap(Ct),me.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W=null,H=null,U=0){return Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,W,H,U)},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,me.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const mc="PRODUCTSQUADS / PRAVEG.AI",_c=[["VISIT PRAVEG.AI","https://praveg.ai"]],gc="The platform code is not public. The link opens the product Akhil works on.",Qn=[{title:"Hybrid RAG",tag:"56% TO 87% ANSWER ACCURACY",note:mc,color:"#1f4bff",image:"",blurb:"Retrieval for an enterprise data platform. Better chunking and hybrid search raised answer accuracy from 56% to 87% on a 500-document corpus.",context:"Praveg.ai is an agentic enterprise data platform. Its RAG answers over a 500-document enterprise corpus started at 56% accuracy.",built:["Optimized the chunking strategies.","Hybrid retrieval in Qdrant: dense embeddings plus BM25 sparse vectors.","Cross-encoder reranking.","Validation against golden datasets covering direct, multi-turn, table/chart and summarization queries."],role:"AI SOFTWARE ENGINEER INTERN",impact:[{label:"ANSWER ACCURACY",before:56,after:87,unit:"%"}],stats:[["500","DOCUMENT CORPUS"],["4","QUERY TYPES IN THE GOLDEN SET"]],stack:["Qdrant","Dense embeddings","BM25","Cross-encoder reranking"],links:_c,linkNote:gc},{title:"Grounded Agents",tag:"45% TO 90% GROUNDEDNESS",note:mc,color:"#ff4a1c",image:"",blurb:"Agents that cite their sources and refuse when the evidence is thin. Groundedness went from 45% to 90%.",context:"Agent answers on the platform measured 45% grounded. The goal was answers backed by evidence, and a refusal when there is not enough of it.",built:["Enforced grounding checks in the LangGraph orchestrator.","Source citations.","Low-evidence refusal.","Measurement through Langfuse traces and an automated evaluation harness."],role:"AI SOFTWARE ENGINEER INTERN",impact:[{label:"AGENT GROUNDEDNESS",before:45,after:90,unit:"%"}],stack:["LangGraph","Langfuse","Evaluation harness"],links:_c,linkNote:gc},{title:"MCP Host",tag:"REMOTE TOOLS FOR AGENTS",note:mc,color:"#0f9d6b",image:"",blurb:"An MCP host and client that lets platform agents discover and use tools on remote MCP servers.",context:"Platform agents needed to find and call tools that live on remote servers, next to toolkits managed by Composio.",built:["MCP host and client for discovering and invoking tools on remote MCP servers.","Tool-catalog caching and token handling.","Works alongside Composio-managed toolkits.","Co-built in-house MCP servers for an enterprise client."],role:"AI SOFTWARE ENGINEER INTERN",facts:["HOST + CLIENT","TOOL-CATALOG CACHING","ENTERPRISE MCP SERVERS"],stack:["MCP","Composio"],links:_c,linkNote:gc},{title:"Aegis",tag:"MCP SECURITY + RAG DIAGNOSTICS",note:"PROJECT / IN PROGRESS",color:"#7a2cff",image:"",ongoing:!0,blurb:"A security layer that checks MCP tool calls before agents run them, and a tool that explains why a RAG answer failed.",context:"Agents can call tools with risky permissions, and a wrong RAG answer rarely says what went wrong. Aegis works on both.",built:["A layer that scans and guards MCP servers and tool calls for risky permissions and unsafe actions before agents execute them.","A RAG failure diagnoser that traces retrieval and generation through Langfuse.","It pinpoints a retrieval miss, weak grounding or a prompt issue, and recommends fixes."],role:"PERSONAL PROJECT",facts:["TOOL-CALL GUARD","RAG FAILURE DIAGNOSER","IN PROGRESS"],stack:["Python","LangGraph","MCP","Langfuse","Open-source LLMs"],links:[]},{title:"BUDDY",tag:"SKILL ASSESSMENT AGENT",note:"PROJECT / 2026",color:"#c2185b",image:"",blurb:"Reads a job description and a resume, interviews the candidate, then builds a week-by-week plan to close the skill gaps.",context:"A resume says what someone claims to know, not how well they know it. BUDDY tests the claim in conversation and plans what to learn next.",built:["Parses the job description and resume with parallel async LLM calls.","Maps matched, missing and adjacent skills.","Adaptive LLaMA-3-70B interview: difficulty moves with each answer, scored by a deterministic 0-100 state machine.","FAISS RAG over learning resources, with the embedding model lazy-loaded for faster cold starts.","Week-by-week roadmap and Plotly gap-analysis dashboards, deployed on Render."],role:"PERSONAL PROJECT",stats:[["0-100","SCORED INTERVIEW"],["3-6","QUESTIONS PER SKILL"],["70B","LLAMA-3 INTERVIEWER"]],stack:["Python","FastAPI","FAISS","SentenceTransformers","LLaMA-3","Groq","Streamlit","Plotly"],links:[["GITHUB","https://github.com/AKHIL-SAURABH/BUDDY"],["LIVE DEMO","https://catalyst-frontend-fja2.onrender.com"],["VIDEO","https://github.com/user-attachments/assets/df852d61-e7c2-4a9c-bb8a-97e3961942a2"]],linkNote:"The live demo sleeps when idle and can take a few minutes to wake. The video shows it straight away."},{title:"AI Scorecard",tag:"REACT + FASTAPI",note:"PRODUCTSQUADS",color:"#a86f00",image:"",blurb:"An AI Readiness quiz for the company website, owned end to end, from the React interface to the emailed report.",context:"The AI Readiness Scorecard is a quiz on the company website that reports back by email and routes leads.",built:["React quiz interface.","FastAPI validation.","Automated email reports.","Lead routing."],role:"AI SOFTWARE ENGINEER INTERN",facts:["REACT QUIZ","FASTAPI VALIDATION","EMAIL REPORTS + LEAD ROUTING"],stack:["React","FastAPI"],links:[]}],ul={greeting:"Hi, I'm Akhil's resume as a chatbot. Ask me about experience, projects, skills or education.",suggestions:["What does Akhil do?","Tech stack?","Tell me about the RAG work","Projects?"],topics:[{keys:["hi","hello","hey","yo"],answers:["Hey! What would you like to know about Akhil?","Hello. Ask me anything about Akhil's resume."]},{keys:["who is","who are","about akhil","about you","what do you do","what does akhil do","yourself","intro","summary"],answers:["Akhil Saurabh is an AI Software Engineer building production agentic AI and RAG systems on a multi-tenant enterprise SaaS platform: LLM orchestration, retrieval and evaluation, secure FastAPI microservices, React frontends and AWS deployment."]},{keys:["experience","work at","working","do you work","akhil work","job","company","career","year","intern","current","productsquads","praveg","role"],answers:["AI Software Engineer Intern at Productsquads in Ahmedabad since July 2026, working on Praveg.ai, an agentic enterprise data platform. Ask about the RAG, agent, MCP or security work there."]},{keys:["rag","retriev","accuracy","chunk","hybrid","qdrant","rerank","vector","embedding","bm25","semantic"],answers:["Raised RAG answer accuracy from 56% to 87% on a 500-document enterprise corpus, with better chunking and hybrid retrieval in Qdrant (dense embeddings + BM25 + cross-encoder reranking), validated against golden datasets."]},{keys:["ground","hallucinat","citation","langfuse","eval","agent","langgraph","orchestrat"],answers:["Improved agent groundedness from 45% to 90% by enforcing grounding checks, source citations and low-evidence refusal in a LangGraph orchestrator, measured with Langfuse traces and an automated evaluation harness."]},{keys:["mcp","model context protocol","composio","tool call"],answers:["Engineered an MCP host and client that lets agents discover and invoke tools on remote MCP servers, with tool-catalog caching and token handling, and co-built in-house MCP servers for an enterprise client."]},{keys:["secur","auth","rbac","tenan","multi tenan","saml","jwt","oauth"],answers:["Implemented RBAC and multi-tenancy across the platform (tenant-isolated vector collections, tenant-scoped data, 350+ REST/SSE endpoints) and fixed auth and validation defects in FastAPI services secured with JWT, OAuth2 and SAML SSO."]},{keys:["graphrag","graph rag","neo4j","knowledge graph","claude code"],answers:["Led a GraphRAG feasibility study and proof of concept on Neo4j, and built a Claude Code skill that automates a plan, build, test, security and end-to-end cycle using AWS and Langfuse logs."]},{keys:["scorecard","ai readiness","quiz"],answers:["Owned the AI Readiness Scorecard end to end for the company website: React quiz UI, FastAPI validation, automated email reports and lead routing."]},{keys:["impact","result","metric","proud","biggest"],answers:["Two headline numbers: RAG answer accuracy up from 56% to 87%, and agent groundedness up from 45% to 90%."]},{keys:["project","best project","built","portfolio","side project"],answers:["Two projects: Aegis, an MCP security and RAG diagnostics platform (in progress), and BUDDY, an AI skill assessment and learning agent (2026). Ask about either."]},{keys:["aegis","diagnos"],answers:["Aegis (in progress): a security layer that guards MCP servers and tool calls against risky permissions and unsafe actions, plus a RAG failure diagnoser that traces why an answer failed and recommends fixes. Python, LangGraph, MCP, Langfuse, open-source LLMs."]},{keys:["buddy","skill assessment","interview","roadmap"],answers:["BUDDY (2026): a multi-agent pipeline that parses job descriptions and resumes, maps skill gaps, runs an adaptive LLaMA-3-70B interview and uses FAISS RAG to build a week-by-week learning roadmap. Python, FastAPI, Groq, Streamlit, deployed on Render."]},{keys:["stack","tech","tool","skill","framework","langchain","llamaindex","litellm","genai","prompt"],answers:["GenAI core: LangGraph, LangChain, LlamaIndex, MCP, Composio, LiteLLM, hybrid search, reranking, LLM evaluation and Langfuse. Ask about languages, ML, backend, frontend or cloud for more."]},{keys:["language","programming","python","typescript","sql"],answers:["Languages: Python, TypeScript, SQL and C++."]},{keys:["machine learning","ml","nlp","deep learning","tensorflow","keras","scikit","huggingface","transformer","cnn","pandas","numpy"],answers:["ML and NLP: TensorFlow, Keras, Scikit-learn, HuggingFace Transformers, SentenceTransformers, CNNs, transfer learning, Pandas and NumPy."]},{keys:["backend","fastapi","pydantic","sqlalchemy","api","microservice"],answers:["Backend: FastAPI, Pydantic, SQLAlchemy, REST/SSE APIs, microservices, JWT, OAuth2, SAML SSO, RBAC and multi-tenancy."]},{keys:["frontend","front end","react","next js","nextjs","tailwind","streamlit"],answers:["Frontend: React, Next.js, Tailwind CSS and Streamlit."]},{keys:["cloud","aws","docker","devops","database","postgres","mongo","redis","faiss","azure","github actions","deploy"],answers:["Data and cloud: PostgreSQL, MongoDB, Redis, Qdrant, FAISS, Neo4j, AWS (Lambda, ECS, S3, SQS, Step Functions), Docker, Azure DevOps and GitHub Actions."]},{keys:["education","degree","college","universit","study","studie","cgpa","gpa","parul","graduat","btech"],answers:["B.Tech in Computer Science & Engineering at Parul University, Vadodara, 2023 to 2027. CGPA 8.2 / 10."]},{keys:["leetcode","codechef","hackerrank","competitive","problem solving","dsa","coding"],answers:["LeetCode 1688 rating with 500+ problems solved, CodeChef 3-Star (1640), and HackerRank 6-Star Problem Solving, 5-Star Python and 4-Star SQL."]},{keys:["certif","course","coursera","achievement"],answers:["DeepLearning.AI Machine Learning and Deep Learning Specializations, plus IBM Data Science and Google Data Analytics Professional Certificates (Coursera)."]},{keys:["available","availability","hire","hiring","freelance","contract","rate","salary","notice"],answers:["The resume lists a current on-site internship and a degree finishing in 2027, but not availability or rates. Best to ask directly: akhilsaurabh65@gmail.com."]},{keys:["contact","email","reach","mail","phone","linkedin","github","website"],answers:["Email akhilsaurabh65@gmail.com, or visit akhilsaurabh.in. GitHub, LinkedIn and LeetCode are linked in the footer."]},{keys:["where","location","located","based","live","city","remote"],answers:["Ahmedabad, Gujarat, India. The current role is on-site there."]}],fallback:["That's not on the resume. Try asking about experience, projects, skills or education.","I only know what is on the resume, so for that one email akhilsaurabh65@gmail.com."]},vc=Qn.length,dm=6.6,pm=1,sd=dm+pm,Ry=.3,Cy=.45,xc=3.9,od=2.45,hl=.22,Py=`
  uniform float uBend;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z -= (p.x * p.x * 0.12 + p.y * p.y * 0.16) * uBend; // tube-screen bulge
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Ly=`
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
`,Dy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Iy=`
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
    return 0.5 + c * (1.0 + ${hl.toFixed(3)} * dot(a, a)) / (1.0 + ${(hl*.25).toFixed(3)}); // barrel
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
`;function Uy(r,e,t,n,i=-1,s=-1){const o=innerWidth<=800,a=r.createLinearGradient(0,0,0,800);a.addColorStop(0,e.color),a.addColorStop(.25,e.color),a.addColorStop(.52,"#ffffff"),r.fillStyle=a,r.fillRect(0,0,1280,800),r.fillStyle="#fff",r.font="110px Silkscreen",r.fillText(e.title,64,180,1150),r.font='28px "Space Mono"',r.fillText(`[0${t+1}]  ${e.tag}`,64,250),r.fillText(e.note,64,300);const l=o?44:34;r.fillStyle="#0d0d0d",r.font=`700 ${l}px "Space Mono"`;let c="",u=o?420:470;for(const f of e.blurb.split(" "))r.measureText(c+f).width>1140&&(r.fillText(c,64,u),c="",u+=l*1.38),c+=f+" ";r.fillText(c,64,u);let h=o?34:26,d;do{r.font=`700 ${h}px "Space Mono"`;const f=h*2.5,g=h,_=16;let p=64;d=n.map(m=>{const E=r.measureText(m.label).width+g*2,S={x:p,y:760-f,w:E,h:f};return p+=E+_,S}),h-=2}while(d.at(-1).x+d.at(-1).w>1216&&h>16);return d.forEach((f,g)=>{const _=g===0||g===i||g===s;r.fillStyle=g===i||g===s?e.color:"#0d0d0d",_&&r.fillRect(f.x,f.y,f.w,f.h),r.lineWidth=3,r.strokeStyle=g===i||g===s?e.color:"#0d0d0d",r.strokeRect(f.x+1.5,f.y+1.5,f.w-3,f.h-3),g===s&&(r.setLineDash([8,6]),r.strokeStyle="#0d0d0d",r.strokeRect(f.x-8,f.y-8,f.w+16,f.h+16),r.setLineDash([])),r.fillStyle=_?"#fff":"#0d0d0d",r.textBaseline="middle",r.fillText(n[g].label,f.x+(f.w-r.measureText(n[g].label).width)/2,f.y+f.h/2+2),r.textBaseline="alphabetic"}),d}function Ny(r,{reduced:e,scrollTo:t,lenis:n,openCase:i}){const s=r.querySelector(".work-gl"),o=r.querySelector(".work-list"),a=Qn.map((Z,fe)=>{const de=document.createElement("li"),Le=document.createElement("button");return Le.textContent=`[0${fe+1}] ${Z.title}`,Le.addEventListener("click",()=>t(L(fe))),de.append(Le),o.append(de),Le});let l;try{l=new wy({canvas:s,antialias:!0})}catch{a.forEach((Z,fe)=>Z.addEventListener("click",()=>i(fe)));return}l.setPixelRatio(Math.min(devicePixelRatio,2)),l.outputColorSpace=xn;const c=Z=>getComputedStyle(document.documentElement).getPropertyValue(Z).trim(),u=new Lf,h=new ii(35,1,.1,100),d=new Zs(xc,od,40,24),f=new H0,g=Qn.map((Z,fe)=>{const de=document.createElement("canvas");de.width=1280,de.height=800;const Le=new N0(de);Le.colorSpace=xn;const Ie=new Ri({vertexShader:Py,fragmentShader:Ly,transparent:!0,side:Si,uniforms:{uTex:{value:Le},uBend:{value:1},uOpacity:{value:1},uTime:{value:0}}});Z.image&&f.load(Z.image,P=>{P.colorSpace=xn,Ie.uniforms.uTex.value.dispose(),Ie.uniforms.uTex.value=P});const ue=new pi(d,Ie);return ue.userData.actions=[{label:"CASE STUDY ->",cursor:"OPEN",run:()=>i(fe)},...Z.links.map(([P,Ze])=>({label:`${P} ->`,cursor:"VISIT",run:()=>open(Ze,"_blank","noopener")}))],ue.userData.paint=(P,Ze)=>{Z.image||(ue.userData.rects=Uy(de.getContext("2d"),Z,fe,ue.userData.actions,P,Ze),Le.needsUpdate=!0)},ue.userData.paint(),u.add(ue),ue}),_=new xr(1,1,{type:js}),p=new pi(new Zs(2,2),new Ri({vertexShader:Dy,fragmentShader:Iy,uniforms:{tScene:{value:_.texture},uTime:{value:0},uGlitch:{value:0},uAspect:{value:1},uBg:{value:new pt}},depthTest:!1})),m=new Lf;m.add(p);const E=new am,S=()=>{u.background=new pt(c("--bg")),p.material.uniforms.uBg.value.copy(u.background)};S(),addEventListener("themechange",()=>{S(),M&&oe()});let v=1;function A(){const Z=s.clientWidth,fe=s.clientHeight;l.setSize(Z,fe,!1),_.setSize(Z*l.getPixelRatio(),fe*l.getPixelRatio()),h.aspect=Z/fe,p.material.uniforms.uAspect.value=h.aspect,v=Math.min(1,h.aspect/1.4),h.position.z=Math.max(0,xc*1.12/(2*Math.tan(h.fov*Math.PI/360)*h.aspect)-dm),h.updateProjectionMatrix()}A(),addEventListener("resize",A);let w=0,b=0,C=-1,M=!1;const x=je.create({trigger:r,start:"top top",end:"bottom bottom",onUpdate:Z=>w=Z.progress*(vc-1),onToggle:Z=>M=Z.isActive}),L=Z=>x.start+(x.end-x.start)*(Z/(vc-1));let N;n?.on("scroll",()=>{clearTimeout(N),N=setTimeout(()=>{if(!x.isActive)return;const Z=L(Math.round(x.progress*(vc-1)));Math.abs(scrollY-Z)>2&&n.scrollTo(Z,{duration:.9})},160)}),new IntersectionObserver(([Z])=>M=Z.isIntersecting).observe(r);function B(Z,fe){const de=fe>0,Le=-fe*Ry*(de?1.07:1),Ie=sd*Math.sin(Le);Z.position.set(-Ie*(de?.75:Cy)*v,Ie,pm-sd*Math.cos(Le)),Z.rotation.set(Le*4,Le*1.2,Le*.3);const ue=Z.material.uniforms;ue.uBend.value=1-Math.min(Math.abs(fe),1)*.85,ue.uOpacity.value=Math.min(1,Math.max(0,(2-Math.abs(fe))*2)),Z.visible=ue.uOpacity.value>.001}const V={x:0,y:0};!e&&matchMedia("(pointer: fine)").matches&&addEventListener("pointermove",Z=>{V.x=Z.clientX/innerWidth*2-1,V.y=Z.clientY/innerHeight*2-1});const Y=r.querySelector(".work-info"),X=Y.querySelector(".work-actions");let G=-1;const z=()=>M&&Math.abs(b-C)<.08,te=new W0,D=new _t,ce=new Nt,ke=Z=>{const fe=g[C];if(!z()||!fe.userData.rects)return-1;const de=s.getBoundingClientRect(),Le=(Z.clientX-de.left)/de.width-.5,Ie=.5-(Z.clientY-de.top)/de.height,ue=(1+hl*((Le*h.aspect)**2+Ie*Ie))/(1+hl*.25);D.set(Le*ue*2,Ie*ue*2),te.setFromCamera(D,h),ce.copy(fe.matrixWorld).invert();const P=te.ray.origin.clone().applyMatrix4(ce),Ze=te.ray.direction.clone().transformDirection(ce),Ve=fe.material.uniforms.uBend.value;let k=0,me=0,$e=0;for(let nt=0;nt<4;nt++){const R=($e-P.z)/Ze.z;k=P.x+R*Ze.x,me=P.y+R*Ze.y,$e=-(k*k*.12+me*me*.16)*Ve}const Pe=(k/xc+.5)*1280,Ae=(.5-me/od)*800;return fe.userData.rects.findIndex(nt=>Pe>=nt.x&&Pe<=nt.x+nt.w&&Ae>=nt.y&&Ae<=nt.y+nt.h)},Je=Z=>{Z!==G&&(G=Z,g[C].userData.paint(G),s.dataset.cursor=G<0?"SCROLL":g[C].userData.actions[G].cursor,s.dispatchEvent(new PointerEvent("pointerover",{bubbles:!0})))};s.addEventListener("pointermove",Z=>Z.pointerType==="mouse"&&Je(ke(Z))),s.addEventListener("pointerleave",()=>Je(-1)),s.addEventListener("click",Z=>{const fe=ke(Z);fe>=0&&g[C].userData.actions[fe].run()});const $=Z=>{const fe=Qn[Z];Y.querySelector("h3").textContent=fe.title,Y.querySelector("p").textContent=fe.blurb,X.replaceChildren(...g[Z].userData.actions.map((de,Le)=>{const Ie=document.createElement("button");return Ie.type="button",Ie.textContent=de.label.replace(" ->",""),Ie.addEventListener("click",de.run),Ie.addEventListener("focus",()=>g[Z].userData.paint(-1,Le)),Ie.addEventListener("blur",()=>g[Z].userData.paint()),Ie}))},se=new V0;function ve(){if(requestAnimationFrame(ve),!M||document.hidden)return;const Z=Math.min(se.getDelta(),.1),fe=se.elapsedTime,de=b;b+=(w-b)*(e?1:1-Math.exp(-Z*5));const Le=Math.abs(b-de)/Math.max(Z,.001)/60,Ie=1-Math.exp(-Z*3);h.rotation.y+=(-V.x*.045-h.rotation.y)*Ie,h.rotation.x+=(-V.y*.03-h.rotation.x)*Ie,g.forEach((Ze,Ve)=>{B(Ze,Ve-b),Ze.material.uniforms.uTime.value=fe});const ue=p.material.uniforms;ue.uTime.value=fe,ue.uGlitch.value=e?0:Math.min(Le*6,.6);const P=Math.round(b);P!==C&&(C>=0&&g[C].userData.paint(),G=-1,C=P,a.forEach((Ze,Ve)=>Ze.setAttribute("aria-current",String(Ve===P))),$(P)),oe()}function oe(){l.setRenderTarget(_),l.render(u,h),l.setRenderTarget(null),l.render(m,E)}ve()}const ad=22;function Oy(r){const e=innerWidth,t=innerHeight,n=Math.max(16,Math.round(Math.min(e,t)/26)),i=Math.ceil(e/n),s=Math.ceil(t/n),o=i+s-2||1,a=(u,h)=>(i-1-u+h)/o*.75+Math.random()*.25,l=[];for(let u=0;u<s;u++)for(let h=0;h<i;h++)l.push(a(h,u));const c=[];for(let u=0;u<ad;u++){const h=u/(ad-1);let d="";for(let g=0;g<s;g++){let _=-1;for(let p=0;p<=i;p++){const m=p<i&&l[g*i+p]<=h===r;m&&_<0&&(_=p),!m&&_>=0&&(d+=`<rect x='${_}' y='${g}' width='${p-_}' height='1'/>`,_=-1)}}const f=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${i} ${s}' width='${i*n}' height='${s*n}' shape-rendering='crispEdges'>${d}</svg>`;c.push(`url("data:image/svg+xml,${encodeURIComponent(f)}")`)}return{frames:c,size:`${i*n}px ${s*n}px`}}function mm(r,e,t,n){const{frames:i,size:s}=Oy(t),o=i.map(a=>({maskImage:a,webkitMaskImage:a,maskSize:s,webkitMaskSize:s,maskRepeat:"no-repeat",webkitMaskRepeat:"no-repeat"}));return r.animate(o,{duration:n,easing:"linear",fill:"forwards",pseudoElement:e}).finished}function xh(r,e=900){if(!document.startViewTransition)return r();const t=document.startViewTransition(r);return t.ready.then(()=>mm(document.documentElement,"::view-transition-new(root)",!0,e)).catch(()=>{}),t.finished}function Fy(r,e=900){return mm(r,void 0,!1,e).then(()=>r.remove())}function By({reduced:r,lenis:e}){const t=document.createElement("dialog");t.className="case",t.setAttribute("aria-labelledby","case-title"),t.setAttribute("data-lenis-prevent","");const n=document.createElement("div");t.append(n),document.body.append(t);let i=!1;const s=async g=>{if(!i){if(r)return g();i=!0;try{await xh(g,700)}finally{i=!1}}},o=new IntersectionObserver(g=>g.forEach(_=>{_.isIntersecting&&(o.unobserve(_.target),_.target.classList.add("in"),_.target.querySelectorAll("[data-count]").forEach(a),_.target.querySelectorAll(".cells").forEach(l))}),{root:t,rootMargin:"0px 0px 15% 0px"}),a=g=>{const _=+g.dataset.count,p=g.dataset.unit??"";if(r)return void(g.textContent=_+p);const m={v:0};Oe.to(m,{v:_,duration:1.4,ease:"power3.out",delay:.2,onUpdate:()=>g.textContent=Math.round(m.v)+p})},l=g=>{const _=[...g.children].slice(0,Math.round(+g.dataset.value/2));if(r)return _.forEach(p=>p.classList.add("on"));_.forEach((p,m)=>setTimeout(()=>p.classList.add("on"),250+m*22))},c=(g,_,p)=>`
    <div class="meter${p?" now":""}"><span>${g}</span>
      <span class="cells" data-value="${_}" role="img" aria-label="${g}: ${_}%">${"<i></i>".repeat(50)}</span>
      <b data-count="${_}" data-unit="%">0%</b></div>`,u=g=>(g.impact??[]).map(_=>`
    <div class="impact" data-in>
      <div class="impact-head">
        <p><small>BEFORE</small><span class="before">${_.before}${_.unit}</span></p>
        <span class="arrow" aria-hidden="true">-></span>
        <p><small>AFTER</small><span class="after" data-count="${_.after}" data-unit="${_.unit}">${_.after}${_.unit}</span></p>
        <span class="delta">+${_.after-_.before} PTS</span>
      </div>
      <p class="impact-name">${_.label}</p>
      <div class="meters">${c("BEFORE",_.before)}${c("AFTER",_.after,!0)}</div>
    </div>`).join("");function h(g){const _=Qn[g],p=(g+Qn.length-1)%Qn.length,m=(g+1)%Qn.length,E=String(g+1).padStart(2,"0");n.style.setProperty("--c",_.color),n.innerHTML=`
      <header class="case-top">
        <span>[${E}/${String(Qn.length).padStart(2,"0")}] CASE STUDY</span>
        <button type="button" data-go="${p}" aria-label="Previous case: ${Qn[p].title}"><- PREV</button>
        <button type="button" class="case-close">[X] CLOSE</button>
        <i class="case-progress"></i>
      </header>
      <div class="case-wrap">
        <section class="case-hero">
          <p class="kicker">[${E}] ${_.tag}</p>
          <h2 id="case-title">${_.title}</h2>
          <p class="lead">${_.blurb}</p>
          <dl class="case-meta">
            <div><dt>ROLE</dt><dd>${_.role}</dd></div>
            <div><dt>WHERE</dt><dd>${_.note}</dd></div>
            <div><dt>STATUS</dt><dd>${_.ongoing?"IN PROGRESS":"SHIPPED"}</dd></div>
            <div><dt>STACK</dt><dd>${_.stack.length} TOOLS</dd></div>
          </dl>
        </section>

        <section class="case-impact">
          <p class="case-label">${_.impact?"BEFORE -> AFTER":"HIGHLIGHTS"}</p>
          ${u(_)}
          ${_.stats?`<dl class="case-stats" data-in>${_.stats.map(([S,v])=>`<div><dd>${S}</dd><dt>${v}</dt></div>`).join("")}</dl>`:""}
          ${_.facts?`<ul class="case-facts" data-in>${_.facts.map(S=>`<li>${S}</li>`).join("")}</ul>`:""}
        </section>

        <section class="case-problem" data-in>
          <p class="case-label">THE PROBLEM</p>
          <p>${_.context}</p>
        </section>

        <section data-in>
          <p class="case-label">WHAT AKHIL ${_.ongoing?"IS BUILDING":"BUILT"}</p>
          <ol class="case-steps">${_.built.map(S=>`<li>${S}</li>`).join("")}</ol>
        </section>

        <section class="case-end" data-in>
          <div><p class="case-label">STACK</p><ul class="case-chips">${_.stack.map(S=>`<li>${S}</li>`).join("")}</ul></div>
          <div><p class="case-label">LINKS</p>
            ${_.links.length?`<p class="case-links">${ky(_)}</p>`:'<p class="case-private">No public repo or demo for this one.</p>'}
            ${_.linkNote?`<p class="case-private">${_.linkNote}</p>`:""}
          </div>
        </section>
      </div>
      <button type="button" class="case-next" data-go="${m}" style="--n:${Qn[m].color}"><small>NEXT CASE [0${m+1}]</small><strong>${Qn[m].title} -></strong></button>`,t.scrollTop=0,n.querySelector(".case-close").addEventListener("click",()=>s(()=>t.close())),n.querySelectorAll("[data-go]").forEach(S=>S.addEventListener("click",()=>s(()=>{h(+S.dataset.go),n.querySelector(".case-close").focus()}))),n.querySelectorAll("[data-in]").forEach(S=>o.observe(S))}const d=()=>n.querySelector(".case-progress")?.style.setProperty("transform",`scaleX(${t.scrollTop/Math.max(1,t.scrollHeight-t.clientHeight)})`);t.addEventListener("scroll",d,{passive:!0});const f=g=>{const _=document.querySelector(".cursor");_&&g.append(_)};return t.addEventListener("close",()=>{f(document.body),e?.start()}),g=>s(()=>{h(g),t.showModal(),f(t),e?.stop()})}const ky=r=>r.links.map(([e,t])=>`<a href="${t}" target="_blank" rel="noopener">${e}<span aria-hidden="true">-></span></a>`).join(""),$a=5,ld=28,cd="> AI SOFTWARE ENGINEER, AGENTS + RAG";let ei,Du,ud,Sc,Iu;const Pr=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});function _m(r,e){Pr.font=e;const t=Pr.measureText(r),n=(t.actualBoundingBoxAscent+t.actualBoundingBoxDescent)/$a,i=t.actualBoundingBoxLeft+t.actualBoundingBoxRight,s=Math.max(1,Math.round(i/n));Pr.canvas.width=Math.ceil(i)+2,Pr.canvas.height=Math.ceil(n*$a)+2,Pr.font=e,Pr.fillText(r,t.actualBoundingBoxLeft,t.actualBoundingBoxAscent);const o=[];for(let a=0;a<$a;a++)for(let l=0;l<s;l++)Pr.getImageData((l+.5)*(i/s),(a+.5)*n,1,1).data[3]>127&&o.push([l,a]);return{cells:o,cols:s,u:n,uw:i/s,left:t.actualBoundingBoxLeft,ascent:t.actualBoundingBoxAscent}}const gm=r=>{const e=getComputedStyle(r);return`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`};function zy(r,e){const t=r.querySelector("canvas"),n=innerWidth,i=innerHeight,s=Math.min(devicePixelRatio,2);t.width=n*s,t.height=i*s,t.style.width=`${n}px`,t.style.height=`${i}px`,ei=t.getContext("2d"),ei.scale(s,s);const o=getComputedStyle(r);Du=o.getPropertyValue("--ink").trim(),ud=o.getPropertyValue("--accent").trim(),Sc=[...e.textContent].map(A=>_m(A,gm(e)));const a=Sc.reduce((A,w)=>A+w.cols+1,-1),l=Math.max(8,Math.floor(Math.min(n*.7,1100)/a)),c=Math.round((n-a*l)/2),u=Math.round((i-$a*l)/2);Iu=[];const h=new Set;let d=0;Sc.forEach((A,w)=>{A.cells.forEach(([b,C])=>{Iu.push({letter:w,x:c+(d+b)*l,y:u+C*l,s:l}),h.add(`${d+b},${C}`)}),d+=A.cols+1});const f=l/(l<18?2:3),g=[];for(let A=u-Math.ceil(u/f)*f;A<i;A+=f)for(let w=c-Math.ceil(c/f)*f;w<n;w+=f)g.push([w,A,h.has(`${Math.floor((w-c+.01)/l)},${Math.floor((A-u+.01)/l)}`)?1:0]);const[_,p,m]=r.querySelectorAll(".pre-hud b"),E=A=>{const w=A/ld,b=(1-w)**1.3;ei.clearRect(0,0,n,i);for(const[C,M,x]of g){const L=Math.round(Math.min(1,Math.max(0,x*w**.7+(Math.random()-.42)*b*1.3))*4)/4;L&&(ei.globalAlpha=L,ei.fillStyle=Math.random()<.08*b?ud:Du,ei.fillRect(C,M,f+.5,f+.5))}ei.globalAlpha=1,_.textContent=cd.slice(0,Math.ceil(cd.length*Math.min(1,w*2))),p.textContent=b.toFixed(3),m.textContent=String(A).padStart(2,"0")};let S=-1;const v={s:0};return Oe.to(v,{s:ld,duration:2.3,ease:"power1.inOut",onUpdate:()=>{const A=Math.round(v.s);A!==S&&E(S=A)}}).then()}function Hy(r,e){r.style.pointerEvents="none",e.style.visibility="hidden";const t=[...e.querySelectorAll(".ch")],n=gm(e),i=t.flatMap(h=>{const d=h.firstChild.getBoundingClientRect(),f=_m(h.textContent.slice(-1),n);return f.cells.map(([g,_])=>({x:d.left-f.left+g*f.uw,y:d.bottom-f.ascent+_*f.u,w:f.uw,h:f.u}))}),s=Iu.map((h,d)=>({from:h,to:i[d]??i.at(-1),delay:h.letter*.06+d%7*.012,dx:Oe.utils.random(-90,90),dy:Oe.utils.random(-90,90)})),o=.95,a={t:0},l=Oe.parseEase("power3.inOut"),c=o+Math.max(...s.map(h=>h.delay)),u=()=>{ei.clearRect(0,0,ei.canvas.width,ei.canvas.height),ei.fillStyle=Du;for(const{from:h,to:d,delay:f,dx:g,dy:_}of s){const p=l(Oe.utils.clamp(0,1,(a.t-f)/o)),m=Math.sin(p*Math.PI),E=(S,v)=>S+(v-S)*p;ei.fillRect(E(h.x,d.x)+g*m,E(h.y,d.y)+_*m,E(h.s,d.w)+.4,E(h.s,d.h)+.4)}};return Oe.to(r.querySelectorAll(".pre-hud"),{autoAlpha:0,duration:.3}),Fy(r.querySelector(".pre-bg"),1e3),Oe.to(a,{t:c,duration:c,ease:"none",delay:.25,onUpdate:u}).then(()=>{e.style.visibility="",r.remove()})}let co,Sl=!0;try{Sl=localStorage.getItem("sound")!=="off"}catch{}const Mc=()=>Sl;function Gy(r){Sl=r;try{localStorage.setItem("sound",r?"on":"off")}catch{}}function Vi(r,e=.03,t=.03,n="square"){if(!(!Sl||navigator.userActivation&&!navigator.userActivation.hasBeenActive))try{co||=new AudioContext;const i=co.currentTime,s=co.createOscillator(),o=co.createGain();s.type=n,s.frequency.setValueAtTime(r,i),o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(1e-4,i+e),s.connect(o).connect(co.destination),s.start(i),s.stop(i+e)}catch{}}const Vy=r=>r[Math.random()*r.length|0],Wy=()=>Vi(1300+Math.random()*900,.025,.025),Xy=()=>Vi(520+Math.random()*160,.035,.035,"triangle"),qy=()=>{Vi(880,.05,.03),setTimeout(()=>Vi(1320,.07,.03),60)};function Yy(r){const e=` ${r.toLowerCase().replace(/[^a-z0-9]+/g," ")} `,t=i=>i.keys.reduce((s,o)=>s+(e.includes(o.length>3?` ${o}`:` ${o} `)?o.length:0),0),n=ul.topics.reduce((i,s)=>t(s)>t(i)?s:i);return Vy(t(n)?n.answers:ul.fallback)}function $y({reduced:r}){const e=document.querySelector(".ask-toggle"),t=document.querySelector(".ask-panel"),n=document.querySelector(".ask-hint"),i=t.querySelector(".ask-log"),s=t.querySelector(".ask-form"),o=s.q,a=s.querySelector("button"),l=t.querySelector(".ask-chips");let c=!1,u=!1;const h=(_,p="")=>{const m=document.createElement("p");return m.className=`ask-msg ask-${_}`,m.innerHTML=`<span class="ask-who">${_==="you"?"YOU":"AKHIL"}</span><span class="ask-text"></span>`,m.lastChild.textContent=p,i.append(m),i.scrollTop=i.scrollHeight,m.lastChild},d=_=>new Promise(p=>{const m=h("bot");if(m.classList.add("typing"),r)return m.textContent=_,m.classList.remove("typing"),p();let E=0;setTimeout(function S(){E=Math.min(_.length,E+1+(Math.random()*3|0)),m.textContent=_.slice(0,E),Wy(),i.scrollTop=i.scrollHeight,E<_.length?setTimeout(S,18+Math.random()*30):(m.classList.remove("typing"),p())},350)}),f=async _=>{_=_.trim(),!(!_||c)&&(c=!0,a.disabled=!0,qy(),h("you",_),o.value="",await d(Yy(_)),c=!1,a.disabled=!1)};o.addEventListener("keydown",_=>{(_.key.length===1||_.key==="Backspace")&&Xy()}),s.addEventListener("submit",_=>{_.preventDefault(),f(o.value)}),ul.suggestions.forEach(_=>{const p=document.createElement("button");p.type="button",p.textContent=_,p.addEventListener("click",()=>f(_)),l.append(p)});const g=_=>{n.hidden=!0,t.hidden=!_,e.setAttribute("aria-expanded",_),_&&(o.focus({preventScroll:!0}),u||(u=!0,c=!0,d(ul.greeting).then(()=>c=!1)))};return e.addEventListener("click",()=>g(t.hidden)),t.querySelector(".ask-close").addEventListener("click",()=>{g(!1),e.focus()}),n.addEventListener("click",()=>g(!0)),addEventListener("keydown",_=>{_.key==="Escape"&&!t.hidden&&(g(!1),e.focus())}),addEventListener("pointerdown",_=>{!t.hidden&&!t.contains(_.target)&&!e.contains(_.target)&&g(!1)}),function(){setTimeout(()=>{if(!t.hidden)return;n.hidden=!1;const p=e.getBoundingClientRect(),m=n.getBoundingClientRect();n.style.setProperty("--arrow",`${p.left+p.width/2-m.left-6}px`),setTimeout(()=>n.hidden=!0,8e3)},900)}}function Ky(r){const e=[...r.textContent].map(p=>{const m=document.createElement("span");return m.className="ch",m.innerHTML=`<svg class="tech-out" aria-hidden="true"><text y="1">${p}</text></svg>${p}`,m});r.replaceChildren(...e);const t=document.createElement("span");t.className="tech-frame",t.setAttribute("aria-hidden","true"),t.innerHTML="<i></i><i></i><i></i><i></i><b></b>"+"<s></s>".repeat(10),r.append(t);const n=t.querySelector("b"),i=[...t.querySelectorAll("s")],s=document.createElement("canvas").getContext("2d"),o=p=>{const m=getComputedStyle(p),E=p.firstChild.getBoundingClientRect(),S=r.getBoundingClientRect();s.font=`${m.fontWeight} ${m.fontSize} ${m.fontFamily}`;const v=s.measureText(p.textContent.slice(-1));return{x:E.left-S.left-v.actualBoundingBoxLeft,y:E.bottom-S.top-v.actualBoundingBoxAscent,w:v.actualBoundingBoxLeft+v.actualBoundingBoxRight,h:v.actualBoundingBoxAscent+v.actualBoundingBoxDescent}};let a=-1,l=null,c=!1,u=!1,h=null,d=!1,f=1,g=0;const _=p=>{if(p===a)return;e[a]?.classList.remove("on"),a=p,e[p].classList.add("on");const m=o(e[p]);n.textContent=`${e[p].textContent.slice(-1)} ${Math.round(m.w)} × ${Math.round(m.h)}`,l||=m,t.classList.add("on"),i.forEach(E=>{const S=Math.random()<.5;E.style.left=`${S?Math.random()*100:Math.random()<.5?-8:106}%`,E.style.top=`${S?Math.random()<.5?-8:106:Math.random()*100}%`,E.style.animationDelay=`${-Math.random()*1.4}s`})};e.forEach((p,m)=>{p.addEventListener("pointerenter",()=>{d&&!h&&(u=!0,_(m))}),p.addEventListener("pointerdown",S=>{d&&(_(m),S.pointerType==="mouse"&&(S.preventDefault(),p.setPointerCapture(S.pointerId),Oe.killTweensOf(p),h={el:p,x:S.clientX-Oe.getProperty(p,"x"),y:S.clientY-Oe.getProperty(p,"y"),moved:!1}))}),p.addEventListener("pointermove",S=>{if(h?.el!==p)return;const v=S.clientX-h.x,A=S.clientY-h.y;Math.hypot(v,A)>4&&(h.moved=!0),Oe.set(p,{x:v,y:A}),h.moved&&(n.textContent=`X ${Math.round(v)} Y ${Math.round(A)}`)});const E=()=>{h?.el===p&&(h.moved&&Oe.to(p,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.4)"}),p.dataset.dragged=h.moved?"1":"",h=null,a=-1,_(m))};p.addEventListener("pointerup",E),p.addEventListener("pointercancel",E),p.addEventListener("click",()=>{if(!d||p.dataset.dragged)return void(p.dataset.dragged="");Vi(520,.12,.03),e.forEach((S,v)=>{const A=Math.abs(v-m),w=-S.offsetHeight*.3*.5**A;Oe.to(S,{delay:A*.06,keyframes:[{x:0,y:w,duration:.12,ease:"power2.out"},{y:0,duration:1,ease:"elastic.out(1, 0.4)"}],overwrite:!0})})})}),r.addEventListener("pointerleave",()=>{u=!1,g=Oe.ticker.time+1.2}),new IntersectionObserver(([p])=>c=p.isIntersecting).observe(r),Oe.ticker.add((p,m)=>{if(!d||!c||(!u&&!h&&p>g&&((a+f<0||a+f>=e.length)&&(f=-f),_(a+f),g=p+1.1),a<0))return;const E=o(e[a]),S=1-Math.exp(-m*.014);for(const v of["x","y","w","h"])l[v]+=(E[v]-l[v])*S;t.style.transform=`translate(${l.x-8}px, ${l.y-8}px)`,t.style.width=`${l.w+16}px`,t.style.height=`${l.h+16}px`}),Oe.delayedCall(2.5,()=>{r.parentElement.style.overflow="visible",d=!0})}function Zy(r){const e=[...r.children].map((s,o)=>{const a=s.querySelector("h3").textContent,l=s.querySelector("p").innerText.split(/[·\n]/).map(c=>c.trim()).filter(Boolean);return s.classList.add("folder"),s.innerHTML=`
      <ul class="folder-cloud" id="folder-${o}">${l.map(c=>`<li>${c}</li>`).join("")}</ul>
      <h3><button type="button" aria-expanded="false" aria-controls="folder-${o}">
        <span class="folder-back"></span><span class="folder-paper"></span>
        <span class="folder-front"><span class="folder-label">${a}</span><small>${l.length} SKILLS</small></span>
      </button></h3>`,{card:s,btn:s.querySelector("button"),cloud:s.querySelector("ul"),pills:[...s.querySelectorAll("li")],open:!1,spots:[]}}),t=()=>{const l=e.map(u=>{const h=u.card.clientWidth,d=[[]];let f=0;return u.pills.forEach(g=>{const _=g.offsetWidth+8;f+_>h&&f&&(d.push([]),f=0),d.at(-1).push(g),f+=_}),d}),c=Math.max(...l.map(u=>u.length))*36+22;e.forEach((u,h)=>{u.card.style.paddingTop=`${c}px`,u.spots=[],l[h].forEach((d,f)=>{let _=-d.reduce((p,m)=>p+m.offsetWidth+8,-8)/2;d.forEach(p=>{u.spots.push({x:_+p.offsetWidth/2,y:-22-36/2-f*36}),_+=p.offsetWidth+8})}),u.open&&n(u,!0,!0)})};function n(s,o,a){s.open===o&&!a||(s.open=o,s.btn.setAttribute("aria-expanded",o),s.card.classList.toggle("open",o),a||Vi(o?720:480,.05,.02),Oe.killTweensOf(s.pills),s.pills.forEach((l,c)=>{if(!o)return Oe.to(l,{x:0,y:20,rotation:0,scale:.4,autoAlpha:0,duration:.3,ease:"power2.in",delay:(s.pills.length-1-c)*.03});const u=s.spots[c];Oe.to(l,{x:u.x,y:u.y,scale:1,autoAlpha:1,rotation:Oe.utils.random(-5,5),duration:.55,ease:"back.out(1.7)",delay:c*.045,onComplete:()=>Oe.to(l,{x:u.x+Oe.utils.random(-3,3),y:u.y+Oe.utils.random(-5,5),rotation:Oe.utils.random(-5,5),duration:Oe.utils.random(1.4,2.4),ease:"sine.inOut",yoyo:!0,repeat:-1})})}))}const i=matchMedia("(hover: hover) and (pointer: fine)").matches;e.forEach(s=>{Oe.set(s.pills,{xPercent:-50,yPercent:-50,y:20,scale:.4,autoAlpha:0}),i?(s.card.addEventListener("pointerenter",()=>n(s,!0)),s.card.addEventListener("pointerleave",()=>n(s,!1))):new IntersectionObserver(([o],a)=>{o.isIntersecting&&(a.disconnect(),n(s,!0))},{threshold:.6}).observe(s.btn),s.btn.addEventListener("click",o=>{(!i||!o.detail)&&n(s,!s.open)})}),t(),addEventListener("resize",t)}function jy(){const t=document.createElement("canvas");t.className="pixel-trail",t.setAttribute("aria-hidden","true"),document.body.prepend(t);const n=t.getContext("2d"),i=new Map;let s=0;const o=c=>{n.clearRect(0,0,innerWidth,innerHeight),n.fillStyle=getComputedStyle(t).color,i.forEach(({x:u,y:h,t:d},f)=>{const g=(c-d)/700;if(g>=1)return void i.delete(f);n.globalAlpha=(1-g)*.16,n.fillRect(u*28,h*28-scrollY,27,27)}),s=i.size?requestAnimationFrame(o):0},a=()=>{const c=Math.min(devicePixelRatio,2);t.width=innerWidth*c,t.height=innerHeight*c,n.setTransform(c,0,0,c,0,0)};a(),addEventListener("resize",a);let l=null;addEventListener("pointermove",c=>{const u=c.clientX,h=c.clientY+scrollY,d=performance.now(),f=l??{px:u,py:h},g=Math.min(40,Math.max(1,Math.ceil(Math.hypot(u-f.px,h-f.py)/28)));for(let _=1;_<=g;_++){const p=Math.floor((f.px+(u-f.px)*_/g)/28),m=Math.floor((f.py+(h-f.py)*_/g)/28);i.set(`${p},${m}`,{x:p,y:m,t:d})}l={px:u,py:h},s||=requestAnimationFrame(o)}),document.documentElement.addEventListener("pointerleave",()=>l=null)}const Jy=matchMedia("(hover: hover) and (pointer: fine)").matches;function Qy({reduced:r,lenis:e}){rE(),sE(),oE(),aE(r,e),!r&&(Zy(document.querySelector(".stack-grid")),Ky(document.querySelector(".hero-name .rise")),tE(),nE(),Jy&&(lE(),cE(),uE(),iE(),jy()))}const hd="!<>-_\\/[]{}=+*^?#01";function eE(r,e=700){const t=r.textContent,n=performance.now(),i=s=>{const o=Math.min(1,(s-n)/e),a=Math.floor(o*t.length);r.textContent=[...t].map((l,c)=>c<a||l===" "?l:hd[Math.random()*hd.length|0]).join(""),o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)}function tE(){document.querySelectorAll(".label, .work-ui h2, .folder-label").forEach(r=>je.create({trigger:r,start:"top 92%",once:!0,onEnter:()=>eE(r)}))}function nE(){document.querySelectorAll(".about-grid .v").forEach(r=>{const e=r.textContent,t=e.match(/\d+/);if(!t)return;const n=s=>e.replace(t[0],String(Math.round(s)).padStart(t[0].length,"0")),i={v:0};r.textContent=n(0),Oe.to(i,{v:+t[0],duration:1.6,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 92%",once:!0},onUpdate:()=>r.textContent=n(i.v)})})}function iE(){const r=[...document.querySelectorAll(".contact-big .rise")].flatMap(t=>(t.innerHTML=[...t.textContent].map(n=>`<span class="ch">${n}</span>`).join(""),[...t.children]));document.querySelectorAll(".contact-big .mask").forEach(t=>t.style.overflow="visible");const e=r.map(t=>({el:t,x:Oe.quickTo(t,"x",{duration:.7,ease:"power3"}),y:Oe.quickTo(t,"y",{duration:.7,ease:"power3"}),r:Oe.quickTo(t,"rotation",{duration:.7,ease:"power3"})}));addEventListener("pointermove",t=>{for(const n of e){const i=n.el.getBoundingClientRect();if(i.bottom<-100||i.top>innerHeight+100)continue;const s=t.clientX-(i.left+i.width/2),o=t.clientY-(i.top+i.height/2),a=Math.max(0,1-Math.hypot(s,o)/320)**2;n.x(-s*a*.25),n.y(-a*i.height*.18),n.r(-s*a*.04)}})}function rE(){const r=document.querySelector(".sound-toggle"),e=()=>{r.setAttribute("aria-pressed",Mc()),r.querySelector(".snd-label").textContent=Mc()?"SND ON":"SND OFF"};e(),r.addEventListener("click",()=>{Gy(!Mc()),e(),Vi(990,.05,.03)});let t=null;document.addEventListener("pointerover",n=>{const i=n.target.closest("a, button");i&&i!==t&&Vi(2600,.012,.012),t=i}),document.addEventListener("click",n=>{n.target.closest("a, button")&&Vi(640,.04,.025)})}function sE(){const r=document.querySelector(".nav-count"),e=document.querySelector(".nav-progress"),t=[...document.querySelectorAll("main > section")],n=String(t.length-1).padStart(2,"0");t.forEach((i,s)=>je.create({trigger:i,start:"top center",end:"bottom center",onToggle:o=>o.isActive&&(r.textContent=`${String(s).padStart(2,"0")} / ${n}`)})),je.create({start:0,end:"max",onUpdate:i=>e.style.transform=`scaleX(${i.progress})`})}function oE(){const r=document.querySelector(".contact-mail"),e=r.getAttribute("href").replace("mailto:",""),t=r.textContent;r.setAttribute("aria-label",`Copy email ${e}`);let n;r.addEventListener("click",i=>{navigator.clipboard&&(i.preventDefault(),navigator.clipboard.writeText(e).then(()=>{r.textContent="COPIED TO CLIPBOARD",clearTimeout(n),n=setTimeout(()=>r.textContent=t,1600)},()=>location.href=r.href))})}function aE(r,e){const t=document.querySelector(".marquee-track");if(!t||r)return;let n=0,i=1,s=!1;new IntersectionObserver(([a])=>s=a.isIntersecting).observe(t);const o=Oe.quickTo(t,"skewX",{duration:.4,ease:"power3"});Oe.ticker.add((a,l)=>{if(!s)return;const c=e?e.velocity:0;Math.abs(c)>.5&&(i=Math.sign(c)),n-=i*(.002+Math.min(Math.abs(c),60)*4e-4)*l,n=(n%50-50)%50,Oe.set(t,{xPercent:n}),o(Oe.utils.clamp(-10,10,-c*.25))})}function lE(){const r=document.createElement("div");r.className="cursor",r.innerHTML="<span></span>",document.body.append(r),document.documentElement.classList.add("has-cursor");const e=r.firstChild,t=Oe.quickTo(r,"x",{duration:.18,ease:"power3"}),n=Oe.quickTo(r,"y",{duration:.18,ease:"power3"});let i;addEventListener("pointermove",s=>{t(s.clientX),n(s.clientY),r.classList.add("on"),r.classList.remove("idle"),clearTimeout(i),i=setTimeout(()=>r.classList.add("idle"),500)}),document.documentElement.addEventListener("pointerleave",()=>r.classList.remove("on")),document.addEventListener("pointerover",s=>{const o=s.target.closest("[data-cursor], a, button, input");r.dataset.state=o?o.matches("input")?"text":o.dataset.cursor?"label":"link":"",e.textContent=o?.dataset.cursor||""})}function cE(){document.querySelectorAll("[data-magnetic]").forEach(r=>{const e=Oe.quickTo(r,"x",{duration:.5,ease:"power3"}),t=Oe.quickTo(r,"y",{duration:.5,ease:"power3"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();e((n.clientX-i.left-i.width/2)*.35),t((n.clientY-i.top-i.height/2)*.35)}),r.addEventListener("pointerleave",()=>{e(0),t(0)})})}function uE(){const r=document.createElement("div");r.className="xp-preview",r.setAttribute("aria-hidden","true"),r.innerHTML="<b></b><span></span>",document.body.append(r);const e=Oe.quickTo(r,"x",{duration:.45,ease:"power3"}),t=Oe.quickTo(r,"y",{duration:.45,ease:"power3"}),n=Oe.quickTo(r,"rotation",{duration:.6,ease:"power3"});let i=0;document.querySelectorAll(".xp li").forEach(s=>{s.addEventListener("pointerenter",o=>{r.style.background=s.dataset.img?`center/cover url(${s.dataset.img})`:s.dataset.color,r.firstChild.textContent=s.querySelector(".xp-co").textContent,r.lastChild.textContent=s.querySelector(".xp-year").textContent,Oe.set(r,{x:o.clientX,y:o.clientY}),i=o.clientX,r.classList.add("on")}),s.addEventListener("pointermove",o=>{e(o.clientX),t(o.clientY),n(Oe.utils.clamp(-12,12,(o.clientX-i)*.6)),i=o.clientX}),s.addEventListener("pointerleave",()=>r.classList.remove("on"))})}Oe.registerPlugin(je);const Ml=document.documentElement,oi=matchMedia("(prefers-reduced-motion: reduce)").matches;let Ti=null;oi||(Ti=new pg({duration:1.3,easing:r=>1-Math.pow(1-r,4),wheelMultiplier:.9,touchMultiplier:1.4}),Ti.on("scroll",je.update),Oe.ticker.add(r=>Ti.raf(r*1e3)),Oe.ticker.lagSmoothing(0));const vm=(r,e=1.6)=>Ti?Ti.scrollTo(r,{duration:e}):window.scrollTo(0,r);document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=document.querySelector(r.getAttribute("href"));t&&(e.preventDefault(),vm(t.getBoundingClientRect().top+scrollY))}));const Sh=document.querySelector(".theme-toggle"),hE=Sh.querySelector(".tt-label"),xm=()=>{const r=Ml.dataset.theme==="dark"?"LIGHT":"DARK";hE.textContent=r,Sh.setAttribute("aria-label",`Switch to ${r.toLowerCase()} theme`)},fl=r=>{Ml.dataset.theme=r;try{localStorage.setItem("theme",r)}catch{}xm(),dispatchEvent(new Event("themechange"))};xm();let Bs=!1;Sh.addEventListener("click",async()=>{if(Bs)return;const r=Ml.dataset.theme==="dark"?"light":"dark";if(oi)return fl(r);Bs=!0,await xh(()=>fl(r)),Bs=!1});let Da="";addEventListener("keydown",r=>{if(r.target.closest?.("input, textarea")||r.key.length!==1||(Da=(Da+r.key.toLowerCase()).slice(-4),Da!=="sudo"||Bs))return;Da="";const e=Ml.dataset.theme==="term"?"dark":"term";if(oi)return fl(e);Bs=!0,xh(()=>fl(e)).finally(()=>Bs=!1)});const fd="!<>-_\\/[]{}=+*^?#01";document.querySelectorAll("[data-scramble]").forEach(r=>{const e=r.textContent;r.getAttribute("aria-label")||r.setAttribute("aria-label",e);let t;r.addEventListener("mouseenter",()=>{if(oi)return;cancelAnimationFrame(t);const n=performance.now(),i=s=>{const o=Math.min(1,(s-n)/380),a=Math.floor(o*e.length);r.textContent=[...e].map((l,c)=>c<a||l===" "?l:fd[Math.random()*fd.length|0]).join(""),o<1&&(t=requestAnimationFrame(i))};t=requestAnimationFrame(i)})});const fE=document.querySelector(".clock"),Sm=()=>fE.textContent=new Date().toLocaleTimeString("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit"});Sm();setInterval(Sm,3e4);function dE(){if(oi)return;Oe.utils.toArray("[data-reveal]").forEach(e=>Oe.from(e,{y:28,autoAlpha:0,duration:.9,ease:"power3.out",clearProps:"opacity,visibility",scrollTrigger:{trigger:e,start:"top 88%",once:!0}})),document.querySelectorAll("[data-words]").forEach(e=>{e.setAttribute("aria-label",e.textContent.trim().replace(/\s+/g," ")),e.innerHTML=e.textContent.trim().split(/\s+/).map(t=>`<span class="w" aria-hidden="true">${t}</span>`).join(" "),Oe.to(e.querySelectorAll(".w"),{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 45%",scrub:!0}})});const r={trigger:".hero",start:"top top",end:"bottom top",scrub:!0};Oe.to(".hero-name",{yPercent:35,ease:"none",scrollTrigger:r}),Oe.fromTo(".hero-intro, .hero-meta",{yPercent:0,autoAlpha:1},{yPercent:-60,autoAlpha:0,ease:"none",immediateRender:!1,scrollTrigger:r}),Oe.utils.toArray(".xp li").forEach((e,t)=>Oe.fromTo(e,{xPercent:t%2?4:-4},{xPercent:0,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"top 60%",scrub:!0}})),Oe.fromTo(".contact-big .mask:first-child .rise",{xPercent:-18},{xPercent:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 20%",scrub:!0}}),Oe.fromTo(".contact-big .mask:last-child .rise",{xPercent:18},{xPercent:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 20%",scrub:!0}})}function pE(){oi||Oe.from(".nav > :not(.nav-progress), .hero-meta span, .hero-intro, .hero-foot > *",{y:14,autoAlpha:0,duration:.7,stagger:.06,ease:"power3.out",delay:.7})}const dd=$y({reduced:oi}),Uu=document.querySelector(".preloader"),Mm=document.querySelector(".hero-name .rise");Ti?.stop();const pd=Promise.race([document.fonts.load("40px Silkscreen"),new Promise(r=>setTimeout(r,2e3))]).catch(()=>{}),mE=oi?pd:pd.then(()=>zy(Uu,Mm));Promise.all([document.fonts.ready,mE]).then(()=>{if(Ny(document.querySelector(".work"),{reduced:oi,scrollTo:vm,lenis:Ti,openCase:By({reduced:oi,lenis:Ti})}),Qy({reduced:oi,lenis:Ti}),dE(),je.refresh(),oi)return Uu.remove(),dd();pE(),Hy(Uu,Mm).then(()=>{Ti?.start(),dd()})});
