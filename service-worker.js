"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/assets/images/atoz.svg","deaffb604962d93b1f1894c61d179462"],["/assets/images/check.svg","da7f7f5c2162697e742496bf7f3686ed"],["/assets/images/icon.svg","8dc263b368938e66ff731134971b69ea"],["/assets/images/jad-joubran-2018-2.png","3a000e1583e49b2a546770950bec673a"],["/assets/images/jad-joubran-2018.png","b19df93fa6d9154c9dca6c7e92a87365"],["/assets/images/jad-joubran.png","24bb172195d4662b2a02f71d2e5351b4"],["/assets/images/logo.svg","1015d513ab31ab46eb227af3d074d77a"],["/assets/images/nicole-saidy.png","ff787aad16d599a96535af325499728c"],["/assets/images/phone.svg","a0578822b5ab4e5d442cfecf415917da"],["/assets/images/stars.svg","08716e25ad944fbacb410c9225a82af0"],["/assets/images/team.svg","c82a01d538835fa648fa217adbddb455"],["/assets/images/twitter.svg","9252258b15d1f90903b40535e9be512f"],["/css/app-bd477ab5b79c441e05ff.bundle.css","31b7fc845c878fb819662014e3621458"],["/index.html","af3cd985bd7eb9716b0f18ab90847475"],["/js/app-41a5ca0dde7e5c6abfdc.bundle.js","0adeb141323f0ab791e6ac22baf86687"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,!1);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});