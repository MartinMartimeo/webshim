jQuery.webshims.register("form-message",function(a,b,n,k,p,d){var c=b.validityMessages,n=d.overrideMessages||d.customMessages?["customValidationMessage"]:[];c.en=c.en||c["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){c.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){c.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){c.en.rangeOverflow[a]=
"Value must be at or before {%max}."});c["en-US"]=c["en-US"]||c.en;c[""]=c[""]||c["en-US"];c.de=c.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){c.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){c.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){c.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var g=
c[""];b.createValidationMessage=function(b,c){var d=g[c];d&&"string"!==typeof d&&(d=d[a.prop(b,"type")]||d[(b.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==d.indexOf("{%"+c)){var i=("label"==c?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,c))||"";d=d.replace("{%"+c+"}",i);"value"==c&&(d=d.replace("{%valueLen}",i.length))}});return d||""};(b.bugs.validationMessage||!Modernizr.formvalidation)&&
n.push("validationMessage");b.activeLang({langObj:c,module:"form-core",callback:function(a){g=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}});n.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],
c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(d){var g=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var k=a.prop(c,"validity")||{valid:1};if(k.valid||(d=b.getContentValidationMessage(c,k)))return d;if(k.customError&&c.nodeName&&(d=Modernizr.formvalidation&&g.prop._supget?g.prop._supget.call(c):b.data(c,"customvalidationMessage")))return d;a.each(k,function(a,f){if("valid"!=a&&f&&(d=b.createValidationMessage(c,
a)))return!1});return d||""},writeable:!1}})})})});
Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,b,n,k){b.inputTypes=b.inputTypes||{};var p=b.cfg.forms,d,c=b.inputTypes,g={radio:1,checkbox:1};b.addInputType=function(a,b){c[a]=b};var r={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},m={valueMissing:function(f,c,h){if(!f.attr("required"))return!1;var d=!1;if(!("type"in h))h.type=(f[0].getAttribute("type")||f[0].type||"").toLowerCase();
if("select"==h.nodeName){if(c=!c)if(!(c=0>f[0].selectedIndex))f=f[0],c="select-one"==f.type&&2>f.size?!!a("> option:first-child",f).prop("selected"):!1;f=c}else f=g[h.type]?"checkbox"==h.type?!f.is(":checked"):!b.modules["form-core"].getGroupElements(f).filter(":checked")[0]:!c;return f},tooLong:function(){return!1},typeMismatch:function(a,b,h){if(""===b||"select"==h.nodeName)return!1;var d=!1;if(!("type"in h))h.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();c[h.type]&&c[h.type].mismatch&&
(d=c[h.type].mismatch(b,a));return d},patternMismatch:function(a,c,h){if(""===c||"select"==h.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(d){b.error('invalid pattern value: "'+a+'" | '+d),a=!1}return!a?!1:!a.test(c)}};b.addValidityRule=function(a,b){m[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var f=this.form||this;a.data(f,"invalidEventShim")||(a(f).data("invalidEventShim",!0).bind("submit",
a.event.special.invalid.handler),b.moveToFirstEvent(f,"submit"))},teardown:a.noop,handler:function(f){if(!("submit"!=f.type||f.testedValidity||!f.originalEvent||!a.nodeName(f.target,"form")||a.prop(f.target,"noValidate"))){d=!0;f.testedValidity=!0;if(!a(f.target).checkValidity())return f.stopImmediatePropagation(),d=!1;d=!1}}};a(k).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var s=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,
"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return s.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=p.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=p.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},r)}}},"prop");var l=function(f){var c,h=a.prop(f,"validity");if(h)a.data(f,"cachedValidity",
h);else return!0;if(!h.valid){c=a.Event("invalid");var g=a(f).trigger(c);if(d&&!l.unhandledInvalids&&!c.isDefaultPrevented())b.validityAlert.showFor(g),l.unhandledInvalids=!0}a.removeData(f,"cachedValidity");return h.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var f=!0,c=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});l.unhandledInvalids=!1;for(var h=0,d=c.length;h<d;h++)l(c[h])||
(f=!1);return f}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){l.unhandledInvalids=!1;return l(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(f){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+f)}},willValidate:{set:a.noop,get:function(){var f={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||c.readOnly||f[c.type]||c.form&&a.prop(c.form,"noValidate"))}}()},
validity:{set:a.noop,get:function(){var f=a(this).getNativeElement(),c=f[0],h=a.data(c,"cachedValidity");if(h)return h;h=a.extend({},r);if(!a.prop(c,"willValidate")||"submit"==c.type)return h;var d=f.val(),g={nodeName:c.nodeName.toLowerCase()};h.customError=!!b.data(c,"customvalidationMessage");if(h.customError)h.valid=!1;a.each(m,function(a,c){if(c(f,d,g))h[a]=!0,h.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",h.valid?"false":"true");c=f=null;return h}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(f){a(this).getShadowFocusElement().attr("aria-required",!!f+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);var i=function(){var f,c=0,b=a([]),d=1E9,g=function(){var a=b.prop("value"),f=a.length;f>c&&f>d&&(f=Math.max(c,d),b.prop("value",a.substr(0,f)));c=f},i=function(){clearTimeout(f);b.unbind(".maxlengthconstraint")};return function(k,o){i();if(-1<o)d=o,c=a.prop(k,"value").length,b=a(k),b.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",
function(){setTimeout(g,0)}),b.bind("keyup.maxlengthconstraint",g),b.bind("blur.maxlengthconstraint",i),f=setInterval(g,200)}}();i.update=function(f,c){f===k.activeElement&&(null==c&&(c=a.prop(f,"maxlength")),i(e.target,c))};a(k).bind("focusin",function(f){var c;"TEXTAREA"==f.target.nodeName&&-1<(c=a.prop(f.target,"maxlength"))&&i(f.target,c)});b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);i.update(this)},get:function(){var a=this.getAttribute("maxlength");
return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);i.update(this,a)}else this.setAttribute("maxlength","0"),i.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,"maxlength")}}});
var u={submit:1,button:1,image:1},j={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b="form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),
d="form"+c.name,g=c.name,i="click.webshimssubmittermutate"+g,l=function(){if("form"in this&&u[this.type]){var o=a.prop(this,"form");if(o){var t=a.attr(this,d);if(null!=t&&(!c.limitedTo||t.toLowerCase()===a.prop(this,b))){var q=a.attr(o,g);a.attr(o,g,t);setTimeout(function(){if(null!=q)a.attr(o,g,q);else try{a(o).removeAttr(g)}catch(c){o.removeAttribute(g)}},9)}}}};switch(c.proptype){case "url":var m=k.createElement("form");j[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,
d);if(null==c)return"";m.setAttribute("action",c);return m.action}}};break;case "boolean":j[b]={prop:{set:function(c){c?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":j[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var b=a.attr(this,d);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:b}}};break;default:j[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=
a.attr(this,d);return null!=c?c:""}}}}j[d]||(j[d]={});j[d].attr={set:function(c){j[d].attr._supset.call(this,c);a(this).unbind(i).bind(i,l)},get:function(){return j[d].attr._supget.call(this)}};j[d].initAttr=!0;j[d].removeAttr={value:function(){a(this).unbind(i);j[d].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],j);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",
""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});b.defineNodeNameProperty("form","noValidate",{prop:{set:function(c){c?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});b.addReady(function(c,b){var d;a("form",c).add(b.filter("form")).bind("invalid",a.noop);try{if(c==k&&!("form"in(k.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",c).eq(0).getShadowFocusElement()[0])&&
d.offsetHeight&&d.offsetWidth&&d.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var g=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},i=function(b,
d,q,i){!1===q&&(q=a.prop(b,"value"));if(!c&&"password"!=b.type){if(!q&&i&&g(b)){var j;a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){b.value=a.prop(b,"value");d.box.removeClass("placeholder-visible");clearTimeout(j);a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){g(b);clearTimeout(j);j=setTimeout(function(){g(b)},9)}).bind("blur.placeholderremove",
function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=q}else if(!q&&i){a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){d.box.removeClass("placeholder-visible");a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}d.box.removeClass("placeholder-visible")},j=function(b,d,g,h,j){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");
if("focus"==j||!j&&b===k.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&i(b,h,"",!0);else if(!1===d&&(d=a.prop(b,"value")),d)i(b,h,d);else if(!1===g&&(g=a.attr(b,"placeholder")||""),g&&!d){d=h;!1===g&&(g=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=g;d.box.addClass("placeholder-visible")}else i(b,h,d)},l=function(c){var c=a(c),b=c.prop("id"),d=!(!c.prop("title")&&!c.attr("aria-labeledby"));!d&&b&&(d=!!a('label[for="'+b+'"]',c[0].form)[0]);d||(b||(b=a.webshims.getID(c)),
d=!!a("label #"+b)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+b+'" class="placeholder-text"></label>')},m=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){j(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){j(b,
!1,!1,d,a.type)},0)});if("password"==b.type||c){d.text=l(b);d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){j(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.curCSS(b,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);
d.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var g={width:a(b).width(),height:a(b).height()},h=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,f){var g=a.curCSS(b,f);d.text.css(f)!=g&&d.text.css(f,g)});g.width&&g.height&&d.text.css(g);"none"!==h&&d.box.addClass("placeholder-box-"+h)}else g=function(c){a(b).hasClass("placeholder-visible")&&(i(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&j(b,!1,!1,d)},9))},a(n).bind("beforeunload",
g),d.box=a(b),b.form&&a(b.form).submit(g);return d},update:function(c,d){if(b[a.prop(c,"type")]||a.nodeName(c,"textarea")){var f=m.create(c);f.text&&f.text.text(d);j(c,!1,d,f)}}}}();a.webshims.publicMethods={pHolder:m};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);m.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},f;["attr","prop"].forEach(function(c){d[c]=
{set:function(d){var g=b.contentAttr(this,"placeholder");a.removeData(this,"cachedValidity");var h=f[c]._supset.call(this,d);g&&"value"in this&&j(this,d,g);return h},get:function(){return a(this).hasClass("placeholder-visible")?"":f[c]._supget.call(this)}}});f=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,n,k){(function(){if(!("value"in k.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var c=a.data(this,"outputShim");c||(c=p(this));c(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,c,g){"removeAttr"!=g&&(c=a.data(this,"outputShim"))&&c(b)});var p=function(d){if(!d.getAttribute("aria-live")){var d=a(d),c=(d.text()||"").trim(),
g=d.attr("id"),r=d.attr("for"),m=a('<input class="output-shim" type="text" disabled name="'+(d.attr("name")||"")+'" value="'+c+'" style="display: none !important;" />').insertAfter(d),s=m[0].form||k,l=function(a){m[0].value=a;a=m[0].value;d.text(a);b.contentAttr(d[0],"value",a)};d[0].defaultValue=c;b.contentAttr(d[0],"value",c);d.attr({"aria-live":"polite"});g&&(m.attr("id",g),d.attr("aria-labeldby",b.getID(a('label[for="'+g+'"]',s))));r&&(g=b.getID(d),r.split(" ").forEach(function(a){(a=k.getElementById(a))&&
a.setAttribute("aria-controls",g)}));d.data("outputShim",l);m.data("outputShim",l);return l}};b.addReady(function(b,c){a("output",b).add(c.filter("output")).each(function(){p(this)})})}})();(function(){var p={updateInput:1,input:1},d={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},c=function(a){var c,d=a.prop("value"),k=function(c){if(a){var f=a.prop("value");f!==d&&(d=f,(!c||!p[c.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},l,i=function(){clearTimeout(l);
l=setTimeout(k,9)},n=function(){a.unbind("focusout",n).unbind("keyup keypress keydown paste cut",i).unbind("input change updateInput",k);clearInterval(c);setTimeout(function(){k();a=null},1)};clearInterval(c);c=setInterval(k,99);i();a.bind("keyup keypress keydown paste cut",i).bind("focusout",n).bind("input updateInput change",k)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(k).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!d[b.target.type]&&c(a(b.target))})})();b.isReady("form-output",!0)});
