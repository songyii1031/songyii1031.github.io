(this["webpackJsonpnew-react-app"]=this["webpackJsonpnew-react-app"]||[]).push([[3],{22:function(n,e,t){"use strict";t.r(e),t.d(e,"CLSThresholds",(function(){return P})),t.d(e,"FCPThresholds",(function(){return w})),t.d(e,"FIDThresholds",(function(){return nn})),t.d(e,"INPThresholds",(function(){return j})),t.d(e,"LCPThresholds",(function(){return z})),t.d(e,"TTFBThresholds",(function(){return Q})),t.d(e,"onCLS",(function(){return A})),t.d(e,"onFCP",(function(){return I})),t.d(e,"onFID",(function(){return en})),t.d(e,"onINP",(function(){return _})),t.d(e,"onLCP",(function(){return K})),t.d(e,"onTTFB",(function(){return U}));var r,i,o,a,c,u=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(u=e.timeStamp,n(e))}),!0)},s=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return u>=0?r="back-forward-cache":t&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},v=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},m=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},h=function(n){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&n()}))},g=function(n){var e=!1;return function(){e||(n(),e=!0)}},T=-1,y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(n){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===n.type?n.timeStamp:0,b())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},b=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},L=function(){return T<0&&(T=y(),C(),f((function(){setTimeout((function(){T=y(),C()}),0)}))),{get firstHiddenTime(){return T}}},S=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},w=[1800,3e3],I=function(n,e){e=e||{},S((function(){var t,r=L(),i=l("FCP"),o=p("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(o.disconnect(),n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-d(),0),i.entries.push(n),t(!0)))}))}));o&&(t=v(n,i,w,e.reportAllChanges),f((function(r){i=l("FCP"),t=v(n,i,w,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},P=[.1,.25],A=function(n,e){e=e||{},I(g((function(){var t,r=l("CLS",0),i=0,o=[],a=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=o[0],t=o[o.length-1];i&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(i+=n.value,o.push(n)):(i=n.value,o=[n])}})),i>r.value&&(r.value=i,r.entries=o,t())},c=p("layout-shift",a);c&&(t=v(n,r,P,e.reportAllChanges),h((function(){a(c.takeRecords()),t(!0)})),f((function(){i=0,r=l("CLS",0),t=v(n,r,P,e.reportAllChanges),m((function(){return t()}))})),setTimeout(t,0))})))},F=0,k=1/0,M=0,D=function(n){n.forEach((function(n){n.interactionId&&(k=Math.min(k,n.interactionId),M=Math.max(M,n.interactionId),F=M?(M-k)/7+1:0)}))},B=function(){return r?F:performance.interactionCount||0},R=function(){"interactionCount"in performance||r||(r=p("event",D,{type:"event",buffered:!0,durationThreshold:0}))},x=[],H=new Map,N=0,q=[],O=function(n){if(q.forEach((function(e){return e(n)})),n.interactionId||"first-input"===n.entryType){var e=x[x.length-1],t=H.get(n.interactionId);if(t||x.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};H.set(r.id,r),x.push(r)}x.sort((function(n,e){return e.latency-n.latency})),x.length>10&&x.splice(10).forEach((function(n){return H.delete(n.id)}))}}},J=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=g(n),"hidden"===document.visibilityState?n():(t=e(n),h(n)),t},j=[200,500],_=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},S((function(){var t;R();var r,i=l("INP"),o=function(n){J((function(){n.forEach(O);var e=function(){var n=Math.min(x.length-1,Math.floor((B()-N)/50));return x[n]}();e&&e.latency!==i.value&&(i.value=e.latency,i.entries=e.entries,r())}))},a=p("event",o,{durationThreshold:null!==(t=e.durationThreshold)&&void 0!==t?t:40});r=v(n,i,j,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),h((function(){o(a.takeRecords()),r(!0)})),f((function(){N=B(),x.length=0,H.clear(),i=l("INP"),r=v(n,i,j,e.reportAllChanges)})))})))},z=[2500,4e3],G={},K=function(n,e){e=e||{},S((function(){var t,r=L(),i=l("LCP"),o=function(n){e.reportAllChanges||(n=n.slice(-1)),n.forEach((function(n){n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-d(),0),i.entries=[n],t())}))},a=p("largest-contentful-paint",o);if(a){t=v(n,i,z,e.reportAllChanges);var c=g((function(){G[i.id]||(o(a.takeRecords()),a.disconnect(),G[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(n){addEventListener(n,(function(){return J(c)}),{once:!0,capture:!0})})),h(c),f((function(r){i=l("LCP"),t=v(n,i,z,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,G[i.id]=!0,t(!0)}))}))}}))},Q=[800,1800],U=function(n,e){e=e||{};var t=l("TTFB"),r=v(n,t,Q,e.reportAllChanges);!function n(e){document.prerendering?S((function(){return n(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)}((function(){var i=s();i&&(t.value=Math.max(i.responseStart-d(),0),t.entries=[i],r(!0),f((function(){t=l("TTFB",0),(r=v(n,t,Q,e.reportAllChanges))(!0)})))}))},V={passive:!0,capture:!0},W=new Date,X=function(n,e){i||(i=e,o=n,a=new Date,$(removeEventListener),Y())},Y=function(){if(o>=0&&o<a-W){var n={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+o};c.forEach((function(e){e(n)})),c=[]}},Z=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){X(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,V),removeEventListener("pointercancel",r,V)};addEventListener("pointerup",t,V),addEventListener("pointercancel",r,V)}(e,n):X(e,n)}},$=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,Z,V)}))},nn=[100,300],en=function(n,e){e=e||{},S((function(){var t,r=L(),a=l("FID"),u=function(n){n.startTime<r.firstHiddenTime&&(a.value=n.processingStart-n.startTime,a.entries.push(n),t(!0))},s=function(n){n.forEach(u)},d=p("first-input",s);t=v(n,a,nn,e.reportAllChanges),d&&(h(g((function(){s(d.takeRecords()),d.disconnect()}))),f((function(){var r;a=l("FID"),t=v(n,a,nn,e.reportAllChanges),c=[],o=-1,i=null,$(addEventListener),r=u,c.push(r),Y()})))}))}}}]);
//# sourceMappingURL=3.55520b69.chunk.js.map