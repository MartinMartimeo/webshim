(function(e){if(!navigator.geolocation){var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},i=0,n=e.webshims.cfg.geolocation||{};navigator.geolocation=function(){var r,a={getCurrentPosition:function(i,a,o){var s,u,l,p=2,c=function(){if(!l)if(r){if(l=!0,i(e.extend({timestamp:(new Date).getTime()},r)),f(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(r))}catch(t){}}else a&&!p&&(l=!0,f(),a({code:2,message:"POSITION_UNAVAILABLE"}))},d=function(){p--,h(),c()},f=function(){e(document).unbind("google-loader",f),clearTimeout(u),clearTimeout(s)},h=function(){if(r||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return r={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},m=function(){if(!r&&(h(),!r&&window.JSON&&window.sessionStorage))try{r=sessionStorage.getItem("storedGeolocationData654321"),r=r?JSON.parse(r):!1,r.coords||(r=!1)}catch(e){r=!1}};return m(),r?(setTimeout(c,1),void 0):n.confirmText&&!confirm(n.confirmText.replace("{location}",location.hostname))?(a&&a({code:1,message:"PERMISSION_DENIED"}),void 0):(e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){p--,e&&(r=r||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},c())},error:function(){p--,c()}}),clearTimeout(u),window.google&&window.google.loader?p--:u=setTimeout(function(){n.destroyWrite&&(document.write=t,document.writeln=t),e(document).one("google-loader",d),e.webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),s=o&&o.timeout?setTimeout(function(){f(),a&&a({code:3,message:"TIMEOUT"})},o.timeout):setTimeout(function(){p=0,c()},1e4),void 0)},clearWatch:e.noop};return a.watchPosition=function(e,t,n){return a.getCurrentPosition(e,t,n),i++,i},a}(),e.webshims.isReady("geolocation",!0)}})(jQuery),jQuery.webshims.register("details",function(e,t,i,n,r,a){var o=function(t){var i=e(t).parent("details");return i[0]&&i.children(":first").get(0)===t?i:r},s=function(t,i){t=e(t),i=e(i);var n=e.data(i[0],"summaryElement");e.data(t[0],"detailsElement",i),n&&t[0]===n[0]||(n&&(n.hasClass("fallback-summary")?n.remove():n.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(i[0],"summaryElement",t),i.prop("open",i.prop("open")))},u=function(t){var i=e.data(t,"summaryElement");return i||(i=e("> summary:first-child",t),i[0]?s(i,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+a.text+"</summary>"),i=e.data(t,"summaryElement"))),i};t.createElement("summary",function(){var i=o(this);if(i&&!e.data(this,"detailsElement")){var n,r,a=e.attr(this,"tabIndex")||"0";s(this,i),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var i=o(this);if(i){if(!r&&t.originalEvent)return r=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),r=!1,!1;clearTimeout(n),n=setTimeout(function(){t.isDefaultPrevented()||i.prop("open",!i.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(r=!0,t.preventDefault(),e(this).trigger("click"),r=!1)}}).attr({tabindex:a,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var l;t.defineNodeNamesBooleanProperty("details","open",function(t){var i=e(e.data(this,"summaryElement"));if(i){var n=t?"removeClass":"addClass",r=e(this);if(!l&&a.animate){r.stop().css({width:"",height:""});var o={width:r.width(),height:r.height()}}if(i.attr("aria-expanded",""+t),r[n]("closed-details-summary").children().not(i[0])[n]("closed-details-child"),!l&&a.animate){var s={width:r.width(),height:r.height()};r.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){l=!0,u(this),e.prop(this,"open",e.prop(this,"open")),l=!1})}),jQuery.webshims.register("mediaelement-jaris",function(e,t,i,n,r,a){"use strict";var o=t.mediaelement,s=i.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),p=0,c={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),r):0},end:function(e){return e?(t.error("buffered index size error"),r):0},length:0}},d=Object.keys(c),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var h=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:r,_calledMeta:!1,lastDuration:0},c,f),m=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},v=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,r,t)},g=a.playerPath||t.cfg.basePath+"swf/"+(a.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(a.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(a.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(a.attrs,{bgcolor:"#000000"});var y=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,v(t._elem,"canplay"),t.paused||v(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){y(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,v(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var b,w={onPlayPause:function(e,t,i){var n,r;if(null==i)try{n=t.api.api_get("isPlaying")}catch(a){}else n=i;n==t.paused&&(t.paused=!n,r=t.paused?"pause":"play",t._ppFlag=!0,v(t._elem,r),3>t.readyState&&y(3,t),t.paused||v(t._elem,"playing"))},onNotBuffering:function(e,t){y(3,t)},onDataInitialized:function(e,t){var i,n=t.duration;t.duration=e.duration,n==t.duration||isNaN(t.duration)||t._calledMeta&&2>(i=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&y(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,v(t._elem,"durationchange")},i>50?0:i>9?9:99):(t.lastDuration=t.duration,t.duration&&v(t._elem,"durationchange"),t._calledMeta||v(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),y(1,t),v(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(y(3,t),v(t._elem,"playing")),v(t._elem,"timeupdate")},onProgress:function(t,i){if(i.ended&&(i.ended=!1),i.duration&&!isNaN(i.duration)){var n=t.loaded/t.total;n>.02&&.2>n?y(3,i):n>.2&&(n>.99&&(i.networkState=1),y(4,i)),i._bufferedEnd&&i._bufferedEnd>n&&(i._bufferedStart=i.currentTime||0),i._bufferedEnd=n,i.buffered.length=1,e.event.trigger("progress",r,i._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&y(4,t),t.ended=!0,v(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,v(t._elem,"volumechange"))},ready:function(){var i=function(e){var t=!0;try{e.api.api_get("volume")}catch(i){t=!1}return t};return function(n,a){var o=0,s=function(){return o>9?(a.tryedReframeing=0,r):(o++,a.tryedReframeing++,i(a)?(a.wasSwfReady=!0,a.tryedReframeing=0,N(a),T(a)):6>a.tryedReframeing?3>a.tryedReframeing?(a.reframeTimer=setTimeout(s,9),a.shadowElem.css({overflow:"visible"}),setTimeout(function(){a.shadowElem.css({overflow:"hidden"})},1)):(a.shadowElem.css({overflow:"hidden"}),e(a._elem).mediaLoad()):(clearTimeout(a.reframeTimer),t.error("reframing error")),r)};a&&a.api&&(a.tryedReframeing||(a.tryedReframeing=0),clearTimeout(b),clearTimeout(a.reframeTimer),a.shadowElem.removeClass("flashblocker-assumed"),o?a.reframeTimer=setTimeout(s,9):s())}}()};w.onMute=w.onVolumeChange;var T=function(e){var i,n=e.actionQueue.length,r=0;if(n&&"third"==e.isActive)for(;e.actionQueue.length&&n>r;){r++,i=e.actionQueue.shift();try{e.api[i.fn].apply(e.api,i.args)}catch(a){t.warn(a)}}e.actionQueue.length&&(e.actionQueue=[])},N=function(t){t&&((t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(i){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},E=e.noop;if(u){var x={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=k.map(function(e){return e+".webshimspolyfill"}).join(" "),C=function(i){var n=t.data(i.target,"mediaelement");if(n){var r=i.originalEvent&&i.originalEvent.type===i.type;r==("third"==n.activating)&&(i.stopImmediatePropagation(),x[i.type]&&n.isActive!=n.activating&&e(i.target).pause())}};E=function(i){e(i).off(A).on(A,C),k.forEach(function(e){t.moveToFirstEvent(i,e)})},E(n)}o.setActive=function(i,n,r){if(r||(r=t.data(i,"mediaelement")),r&&r.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var a=t.data(i,"shadowData");r.activating=n,e(i).pause(),r.isActive=n,"third"==n?(a.shadowElement=a.shadowFocusElement=r.shadowElem[0],e(i).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(i).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),a.shadowElement=a.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var S=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(i){if(i){var n=t,r=i.networkState;for(y(0,i),clearTimeout(i._durationChangeTimer);--n>-1;)delete i[e[n]];i.actionQueue=[],i.buffered.length=0,r&&v(i._elem,"emptied")}}}(),D=function(t,i){var n=t._elem,r=t.shadowElem;e(n)[i?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||i?r.css({width:n.style.width||e(n).width(),height:n.style.height||e(n).height()}):r.css({width:0,height:0})},O=function(){var t={"":1,auto:1};return function(i){var n=e.attr(i,"preload");return null==n||"none"==n||e.prop(i,"autoplay")?!1:(n=e.prop(i,"preload"),!!(t[n]||"metadata"==n&&e(i).is(".preload-in-doubt, video:not([poster])")))}}(),_={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(_.A,"%26").replace(_.a,"%26").replace(_.e,"%3D").replace(_.q,"%3F"):e};o.createSWF=function(i,n,c){if(!l)return setTimeout(function(){e(i).mediaLoad()},1),r;1>p?p=1:p++,c||(c=t.data(i,"mediaelement")),(e.attr(i,"height")||e.attr(i,"width"))&&t.warn("width or height content attributes used. Webshims only uses CSS (computed styles or inline styles) to detect size of a video/audio");var d,f="audio/rtmp"==n.type||"video/rtmp"==n.type,m=e.extend({},a.vars,{poster:F(e.attr(i,"poster")&&e.prop(i,"poster")||""),source:F(n.streamId||n.srcProp),server:F(n.server||"")}),v=e(i).data("vars")||{},y=e.prop(i,"controls"),T="jarisplayer-"+t.getID(i),N=e.extend({},a.params,e(i).data("params")),x=i.nodeName.toLowerCase(),k=e.extend({},a.attrs,{name:T,id:T},e(i).data("attrs")),A=function(){D(c,e.prop(i,"controls"))};c&&c.swfCreated?(o.setActive(i,"third",c),c.currentSrc=n.srcProp,c.shadowElem.html('<div id="'+T+'">'),c.api=!1,c.actionQueue=[],d=c.shadowElem,S(c)):(d=e('<div class="polyfill-'+x+' polyfill-mediaelement" id="wrapper-'+T+'"><div id="'+T+'"></div>').css({position:"relative",overflow:"hidden"}),c=t.data(i,"mediaelement",t.objectCreate(h,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:x},_elem:{value:i},currentSrc:{value:n.srcProp},swfCreated:{value:!0},id:{value:T.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=c.buffered.length?(t.error("buffered index size error"),r):0},end:function(e){return e>=c.buffered.length?(t.error("buffered index size error"),r):(c.duration-c._bufferedStart)*c._bufferedEnd+c._bufferedStart},length:0}}})),D(c,y),d.insertBefore(i),u&&e.extend(c,{volume:e.prop(i,"volume"),muted:e.prop(i,"muted"),paused:e.prop(i,"paused")}),t.addShadowDom(i,d),E(i),o.setActive(i,"third",c),e(i).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A)),o.jarisEvent[c.id]||(o.jarisEvent[c.id]=function(e){if("ready"==e.type){var t=function(){c.api&&(O(i)&&c.api.api_preload(),w.ready(e,c))};c.api?t():setTimeout(t,9)}else c.currentTime=e.position,c.api&&(!c._calledMeta&&isNaN(e.duration)&&c.duration!=e.duration&&isNaN(c.duration)&&w.onDataInitialized(e,c),c._ppFlag||"onPlayPause"==e.type||w.onPlayPause(e,c),w[e.type]&&w[e.type](e,c)),c.duration=e.duration}),e.extend(m,{id:T,evtId:c.id,controls:""+y,autostart:"false",nodename:x},v),f?m.streamtype="rtmp":"audio/mpeg"==n.type||"audio/mp3"==n.type?(m.type="audio",m.streamtype="file"):"video/youtube"==n.type&&(m.streamtype="youtube"),a.changeSWF(m,i,n,c,"embed"),clearTimeout(c.flashBlock),s.embedSWF(g,T,"100%","100%","9.0.115",!1,m,N,k,function(n){n.success&&(c.api=n.ref,y||e(n.ref).attr("tabindex","-1").css("outline","none"),c.flashBlock=setTimeout(function(){(!n.ref.parentNode&&d[0].parentNode||"none"==n.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(i).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),b||(clearTimeout(b),b=setTimeout(function(){var i=e(n.ref);i[0].offsetWidth>1&&i[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>i[0].offsetWidth||2>i[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),i=null},8e3)))})};var P=function(e,t,i,n){return n=n||m(e),n?(n.api&&n.api[t]?n.api[t].apply(n.api,i||[]):(n.actionQueue.push({fn:t,args:i}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(i){var n,r={},a=function(e){("audio"!=i||"videoHeight"!=e&&"videoWidth"!=e)&&(r[e]={get:function(){var t=m(this);return t?t[e]:u&&n[e].prop._supget?n[e].prop._supget.apply(this):h[e]},writeable:!1})},o=function(e,t){a(e),delete r[e].writeable,r[e].set=t};o("volume",function(e){var i=m(this);if(i)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),P(this,"api_volume",[e],i),i.volume!=e&&(i.volume=e,v(i._elem,"volumechange")),i=null);else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=m(this);if(t)e=!!e,P(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,v(t._elem,"volumechange")),t=null;else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=m(this);if(t)e*=1,isNaN(e)||P(this,"api_seek",[e],t);else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=m(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),P(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,v(t._elem,e));else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),d.forEach(a),t.onNodeNamesPropertyModify(i,"controls",function(t,n){var r=m(this);e(this)[n?"addClass":"removeClass"]("webshims-controls"),r&&("audio"==i&&D(r,n),P(this,"api_controls",[n],r))}),t.onNodeNamesPropertyModify(i,"preload",function(){var e=m(this);e&&O(this)&&P(this,"api_preload",[],e)}),n=t.defineNodeNameProperties(i,r,"prop")}),l&&e.cleanData){var M=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,i;if(e&&(i=e.length)&&p)for(t=0;i>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){p--;try{e[t].api_pause()}catch(n){}}return M.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))}),jQuery.webshims.register("track",function(e,t,i,n){"use strict";var r=t.mediaelement;(new Date).getTime();var a=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var i={};return e.addEventListener=function(e,n){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]=n},e.removeEventListener=function(e,n){i[e]&&i[e]!=n&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]&&delete i[e]},e},p={getCueById:function(e){for(var t=null,i=0,n=this.length;n>i;i++)if(this[i].id===e){t=this[i];break}return t}},c={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=r.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],n=0,r=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;r>n;n++)if(i[n]===e){i.splice(n,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},f=["kind","label","srclang"],h={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(i,n){var r,a,o=[],s=[],u=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");u.push(t),-1==n.indexOf(t)&&s.push(t)}),i.scriptedTextTracks)for(r=0,a=i.scriptedTextTracks.length;a>r;r++)u.push(i.scriptedTextTracks[r]),-1==n.indexOf(i.scriptedTextTracks[r])&&s.push(i.scriptedTextTracks[r]);for(r=0,a=n.length;a>r;r++)-1==u.indexOf(n[r])&&o.push(n[r]);if(o.length||s.length){for(n.splice(0),r=0,a=u.length;a>r;r++)n.push(u[r]);for(r=0,a=o.length;a>r;r++)e([n]).triggerHandler(e.Event({type:"removetrack",track:o[r]}));for(r=0,a=s.length;a>r;r++)e([n]).triggerHandler(e.Event({type:"addtrack",track:s[r]}));(i.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(i,n){n||(n=t.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){(n.track||{}).readyState?e(i).closest("audio, video").triggerHandler("updatetrackdisplay"):e(i).triggerHandler("checktrackmode"),n.isTriggering=!1},1))},y=e("<div />")[0];i.TextTrackCue=function(e,i,n){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=n,this.id="",this.pauseOnExit=!1,l(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",a=n.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,n;if(t!=this.text)for(t=this.text,i=r.parseCueTextToHTML(t),y.innerHTML=i,e=0,n=y.childNodes.length;n>e;e++)a.appendChild(y.childNodes[e].cloneNode(!0));return a.cloneNode(!0)}),e?e.apply(this,arguments):a.cloneNode(!0)},track:null,id:""},r.createCueList=function(){return e.extend([],p)},r.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(e,t,n,r){var a;return i.test(r)?a="</"+e+">":(n.splice(0,1),a="<"+e+" "+t+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),a},r=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=n("span","class",i,e):"v"==i[0]&&(e=n("q","title",i,e)):e=""),e};return function(t){return t.replace(e,r)}}(),r.loadTextTrack=function(i,n,a,s){var u="play playing timeupdate updatetrackdisplay",l=a.track,p=function(){var a,o,s=e.prop(n,"src");if("disabled"!=l.mode&&s&&e.attr(n,"src")&&(e(i).unbind(u,p),e(n).unbind("checktrackmode",p),!l.readyState)){a=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,e(n).triggerHandler("error")},l.readyState=1;try{l.cues=r.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=r.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),r.parseCaptions(s,l,function(t){t&&"length"in t?(l.readyState=2,e(n).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):a()})},error:a})}catch(c){a(),t.warn(c)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,e(i).unbind(u,p),e(n).unbind("checktrackmode",p),e(i).on(u,p),e(n).on("checktrackmode",p),s&&(l.mode=o[l.kind]?"showing":"hidden",p())},r.createTextTrack=function(i,n){var o,s;return n.nodeName&&(s=t.data(n,"trackData"),s&&(g(n,s),o=s.track)),o||(o=l(t.objectCreate(d)),u||f.forEach(function(t){var i=e.prop(n,t);i&&(o[h[t]||t]=i)}),n.nodeName?(u&&f.forEach(function(i){t.defineProperty(o,h[i]||i,{get:function(){return e.prop(n,i)}})}),s=t.data(n,"trackData",{track:o}),r.loadTextTrack(i,n,s,e.prop(n,"default")&&e(n).siblings("track[default]")[a]()[0]==n)):(u&&f.forEach(function(e){t.defineProperty(o,h[e]||e,{value:n[e],writeable:!1})}),o.cues=r.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=r.createCueList(),o.mode="hidden",o.readyState=2)),o},r.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,r=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(a){var o,s,u,l,p,c,d,f,h,m;if(f=i.exec(a))return null;if(f=n.exec(a))return null;if(f=r.exec(a))return null;for(o=a.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),c=0;o.length>c;c++){var v=o[c];(h=e.exec(v))&&(p=h.slice(1),s=parseInt(60*60*(p[0]||0),10)+parseInt(60*(p[1]||0),10)+parseInt(p[2]||0,10)+parseFloat("0."+(p[3]||0)),u=parseInt(60*60*(p[4]||0),10)+parseInt(60*(p[5]||0),10)+parseInt(p[6]||0,10)+parseFloat("0."+(p[7]||0))),o=o.slice(0,c).concat(o.slice(c+1));break}return s||u?(l=o.join("\n"),m=new TextTrackCue(s,u,l),d&&(m.id=d),m):(t.warn("couldn't extract time information: "+[s,u,o.join("\n"),d].join(" ; ")),null)}}(),r.parseCaptions=function(e,i,n){r.createCueList();var a,o,s,u,l;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(p,c){for(;c>p;p++){if(a=e[p],s.test(a))l=!0;else if(a.replace(/\s*/gi,"").length){if(!l){t.error("please use WebVTT format. This is the standard"),n(null);break}a=r.parseCaptionChunk(a,p),a&&i.addCue(a)}if((new Date).getTime()-30>u){p++,setTimeout(function(){u=(new Date).getTime(),o(p,c)},90);break}}p>=c&&(l||t.error("please use WebVTT format. This is the standard"),n(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},r.createTrackList=function(e,i){return i=i||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(i.textTracks)),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(f,function(i,n){var r=h[n]||n;t.onNodeNamesPropertyModify("track",n,function(){var i=t.data(this,"trackData"),a=this;i&&("kind"==n&&g(this,i),u||(i.track[r]=e.prop(this,n)),clearTimeout(i.changedTrackPropTimer),i.changedTrackPropTimer=setTimeout(function(){e(a).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,a=t.data(this,"trackData");a&&(n=e(this).closest("video, audio"),n[0]&&r.loadTextTrack(n,this,a))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return r.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n=r.createTrackList(e,i);return i.blockTrackListUpdate||v.call(e,i,n),n},writeable:!1},addTextTrack:{value:function(e,i,n){var a=r.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:i||"",srclang:n||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(a),v.call(this),a}}},"prop"),e(n).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var n=t.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(i.target,n)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var i,n,r=e.prop(this,"track"),a=this.track;a&&(i=e.prop(this,"kind"),n=b(this,a),(a.mode||n)&&(r.mode=c[a.mode]||a.mode),"descriptions"!=i&&(a.mode="string"==typeof a.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",w)}};t.addReady(function(i,n){var r=n.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(r).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),r.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(e,i)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange"),e(function(){t.ready("WINDOWLOAD",function(){t.loader.loadList(["track-ui"])})})});