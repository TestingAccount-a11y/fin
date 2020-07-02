"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,d=e[Symbol.iterator]();!(r=(i=d.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==d.return||d.return()}finally{if(a)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}!function(a){var t=a.performance||{},o=t.navigation,n=a.appVars||{},e=a.TTCOM_Scripts||{};e.perfGathering={};var i=t.timing,r=e.splunk,d=e.PromiseHandler,c=e.perfBeaconTools,s=a.analyticsUtility,m=n.perfLogging.browserResourcesSamplingPercentage,u=null,g={domInteractiveInMilliseconds:0,domCompleteInMilliseconds:0,perceivedLoadTimeInMicroseconds:0},l={divideDurationBy1000AndRoundTwoDecimals:function(e){return(e/1e3).toFixed(2)},getDifferenceBetweenTimestampsInSeconds:function(e,t){var n=t-e;return l.divideDurationBy1000AndRoundTwoDecimals(n)},getKeyValuePairsStringFromObject:function(e){var a=[];return Object.entries(e).forEach(function(e){var t=_slicedToArray(e,2),n=t[0],r=t[1];a.push("".concat(n,"=").concat(r))}),a.join("&")},getExperienceName:function(){var e="",t=document.querySelector("[data-com-type='page']");return n.pageview&&n.pageview.contentIdentifier&&(e=n.pageview.contentIdentifier),t&&t.dataset.autoSel&&(e&&(e+="|"),e+=t.dataset.autoSel),e},getRandomNumberUnder100:function(){return Math.floor(100*Math.random())+1},thisDataShouldBeTracked:function(e){e=e||{};var t=Object.assign({samplingPercentage:0,enabled:!1},e);if(!1===t.enabled||0===Number(t.samplingPercentage))return!1;if(100===Number(t.samplingPercentage))return!0;if(a.localStorage){var n=a.localStorage.getItem("includeInPerfSampling");if("true"===n)return!0;if("false"===n)return!1}var r=l.getRandomNumberUnder100()<=t.samplingPercentage;try{a.localStorage.setItem("includeInPerfSampling",r)}catch(e){}return r}},p={filterDataByNameAndFiletype:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window.location.origin;return e.filter(function(e){return 0===e.name.indexOf(t)&&0<=e.name.indexOf(n.perfLogging.browserResourcesFileTypeFilter)})},gatherRefinedData:function(){var e=t.getEntries("resource");return p.filterDataByNameAndFiletype(e).map(function(e){var t=e.duration,n=e.responseEnd;return{name:e.name,duration:t,responseEnd:n,startTime:e.startTime,transferSize:e.transferSize,nextHopProtocol:e.nextHopProtocol}})},samplingPercentageIsNotaNumber:function(){return m&&isNaN(m)},shouldBeCollected:function(){if(!t.getEntries)return!1;if(!n.perfLogging.browserResourcesEnabled||0===m)return!1;if(p.samplingPercentageIsNotaNumber())throw new Error("appVars.perfLogging.browserResourcesSamplingPercentage = ".concat(m," and is expected to be a number"));return 100===m||l.getRandomNumberUnder100()<=m},handleResourceData:function(){if(p.shouldBeCollected()&&r){var e=p.gatherRefinedData();r.logMessage({prettyMessage:"performance resource data gathered",errorMessage:JSON.stringify(e),url:"/api/v1/cse/jsError",logKey:"clientSideBrowserResourceData",logValue:l.getExperienceName(),cookieIds:"tms,s_vi"})}}},f=function(){var e,t,n,r=function(e){var t=Object.assign({},e);for(var n in e)e.hasOwnProperty(n)&&(e[n]<=0||isNaN(e[n]))&&delete t[n];return t}((e=i,t=g.perceivedLoadTimeInMicroSeconds,n=l.divideDurationBy1000AndRoundTwoDecimals(t),{navigationStart2loadEventEnd:l.getDifferenceBetweenTimestampsInSeconds(e.navigationStart,e.loadEventEnd),navigationStart2connectEnd:l.getDifferenceBetweenTimestampsInSeconds(e.navigationStart,e.connectEnd),requestStart2responseEnd:l.getDifferenceBetweenTimestampsInSeconds(e.requestStart,e.responseEnd),domLoading2domComplete:l.getDifferenceBetweenTimestampsInSeconds(e.domLoading,e.domComplete),domLoading2domContentLoaded:l.getDifferenceBetweenTimestampsInSeconds(e.domLoading,e.domContentLoaded),loadEventStart2loadEventEnd:l.getDifferenceBetweenTimestampsInSeconds(e.loadEventStart,e.loadEventEnd),navigationStart2domInteractive:l.getDifferenceBetweenTimestampsInSeconds(e.navigationStart,e.domInteractive),navigationStart2perceivedLoadTime:n,connectEnd2domContentLoaded:l.getDifferenceBetweenTimestampsInSeconds(e.connectEnd,e.domContentLoadedEventStart),navigationStart2domContentLoaded:l.getDifferenceBetweenTimestampsInSeconds(e.navigationStart,e.domContentLoadedEventStart),navigationStart2domComplete:l.getDifferenceBetweenTimestampsInSeconds(e.navigationStart,e.domComplete),redirectStart2redirectEnd:l.getDifferenceBetweenTimestampsInSeconds(e.redirectStart,e.redirectEnd),fetchStart2domainLookupStart:l.getDifferenceBetweenTimestampsInSeconds(e.fetchStart,e.domainLookupStart),domainLookupStart2domainLookupEnd:l.getDifferenceBetweenTimestampsInSeconds(e.domainLookupStart,e.domainLookupEnd),connectStart2connectEnd:l.getDifferenceBetweenTimestampsInSeconds(e.connectStart,e.connectEnd),requestStart2responseStart:l.getDifferenceBetweenTimestampsInSeconds(e.requestStart,e.responseStart),unloadEventStart2unloadEventEnd:l.getDifferenceBetweenTimestampsInSeconds(e.unloadEventStart,e.unloadEventEnd),domContentLoadedEventStart2domContentLoadedEventEnd:l.getDifferenceBetweenTimestampsInSeconds(e.domContentLoadedEventStart,e.domContentLoadedEventEnd),domLoading2domInteractive:l.getDifferenceBetweenTimestampsInSeconds(e.domLoading,e.domInteractive)}));return r.navigationType=o.type,r.navigationRedirectCount=o.redirectCount,r.experience=l.getExperienceName(),Object.assign(r,{appCodeName:a.navigator.appCodeName,appName:a.navigator.appName,appVersion:a.navigator.appVersion,concurrentHardware:a.navigator.hardwareConcurrency,oscpu:a.navigator.oscpu,platform:a.navigator.platform,productSub:a.navigator.productSub,userAgent:a.navigator.userAgent,vendor:a.navigator.vendor,vendorSub:a.navigator.vendorSub}),{prettyMessage:"performance data gathered",url:"/api/v1/cse/jsError",logKey:"clientSidePerformanceData",logValue:"data&"+l.getKeyValuePairsStringFromObject(r),cookieIds:"tms,s_vi"}},v=function(){r&&r.logMessage(f())},S=function(){var e="performance|domInteractive";return g.perceivedLoadTimeInMicroSeconds&&(e+="|perceivedLoadTime"),e},E=function(){var e="".concat(g.domInteractiveInMilliseconds);return g.perceivedLoadTimeInMicroSeconds&&(e+="|".concat(g.perceivedLoadTimeInMicroSeconds)),e},y=function(){if(s){g.domInteractiveInMilliseconds=i.domInteractive-i.navigationStart;var e=S(),t=E();s.triggerEvent("page-perf-event",[{key:"REM",value:t},{key:"EVENT_TYPE",value:e}])}},I=function(){s&&s.triggerEvent("page-perf-event",[{key:"REM",value:i.domComplete-i.navigationStart},{key:"EVENT_TYPE",value:"performance|domComplete"}])};c&&i&&(d&&window.Promise?(u=new d,document.addEventListener("DOMContentLoaded",function(){u.registerCriteria(c.getCriteria()),u.evaluateCriteria().then(function(){1<=u.countCriteria()&&(g.perceivedLoadTimeInMicroSeconds=t.now()),y()})}),window.addEventListener("load",function(){l.thisDataShouldBeTracked(n.perfLogging)&&!Object.is(i,{})&&(setTimeout(v,1e3),I()),p.handleResourceData()})):(document.addEventListener("DOMContentLoaded",function(){y()}),document.addEventListener("load",function(){I(),p.handleResourceData()})),e.perfGathering.getBeaconDurationName=S,e.perfGathering.getBeaconDurationValue=E)}(window);