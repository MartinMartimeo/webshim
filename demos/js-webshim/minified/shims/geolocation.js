(function(e){if(!navigator.geolocation){var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},i=0,n=e.webshims.cfg.geolocation||{};navigator.geolocation=function(){var a,r={getCurrentPosition:function(i,r,o){var s,l,u,p=2,c=function(){if(!u)if(a){if(u=!0,i(e.extend({timestamp:(new Date).getTime()},a)),h(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(a))}catch(t){}}else r&&!p&&(u=!0,h(),r({code:2,message:"POSITION_UNAVAILABLE"}))},d=function(){p--,f(),c()},h=function(){e(document).unbind("google-loader",h),clearTimeout(l),clearTimeout(s)},f=function(){if(a||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return a={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},m=function(){if(!a&&(f(),!a&&window.JSON&&window.sessionStorage))try{a=sessionStorage.getItem("storedGeolocationData654321"),a=a?JSON.parse(a):!1,a.coords||(a=!1)}catch(e){a=!1}};return m(),a?(setTimeout(c,1),void 0):n.confirmText&&!confirm(n.confirmText.replace("{location}",location.hostname))?(r&&r({code:1,message:"PERMISSION_DENIED"}),void 0):(e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){p--,e&&(a=a||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},c())},error:function(){p--,c()}}),clearTimeout(l),window.google&&window.google.loader?p--:l=setTimeout(function(){n.destroyWrite&&(document.write=t,document.writeln=t),e(document).one("google-loader",d),e.webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),s=o&&o.timeout?setTimeout(function(){h(),r&&r({code:3,message:"TIMEOUT"})},o.timeout):setTimeout(function(){p=0,c()},1e4),void 0)},clearWatch:e.noop};return r.watchPosition=function(e,t,n){return r.getCurrentPosition(e,t,n),i++,i},r}(),e.webshims.isReady("geolocation",!0)}})(jQuery);