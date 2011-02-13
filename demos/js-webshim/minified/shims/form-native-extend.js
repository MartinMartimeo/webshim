jQuery.webshims.ready("form-core form-message form-core",function(c,g,w,l,x){if(Modernizr.formvalidation){var j=g.inputTypes,p={};g.addInputType=function(a,e){j[a]=e};g.addValidityRule=function(a,e){p[a]=e};g.addValidityRule("typeMismatch",function(a,e,b,f){if(e==="")return false;f=f.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();if(j[b.type]&&j[b.type].mismatch)f=j[b.type].mismatch(e,a);return f});var h=g.cfg.forms.overrideMessages,q=!Modernizr.requiredSelect||
!Modernizr.input.valueAsDate||h,y=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],z=c.attr,r=c.fn.val,n=h?{value:1,checked:1}:{value:1},m=h?["textarea"]:[],A={radio:1,checkbox:1},k=function(a,e){if(a.form){var b=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(!h)if(!(!Modernizr.requiredSelect&&b=="select-one")&&!j[b])return;h&&!e&&A[b]&&a.name?c(l.getElementsByName(a.name)).each(function(){c.attr(this,
"validity")}):c.attr(a,"validity")}};g.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){a+="";this.setCustomValidity(a);if(q){c.data(this,"hasCustomError",!!a);k(this)}}});if(!w.noHTMLExtFixes&&!Modernizr.requiredSelect||h){c.extend(n,{required:1,size:1,multiple:1,selectedIndex:1});m.push("select")}if(!Modernizr.input.valueAsNumber||h){c.extend(n,{min:1,max:1,step:1});m.push("input")}if(q){m.forEach(function(a){var e=g.defineNodeNameProperty(a,"validity",
{get:function(){var b=this,f=e._supget.call(this);if(!f)return f;var d={};y.forEach(function(i){d[i]=f[i]});if(!c.attr(b,"willValidate"))return d;var s=c(b),B={type:(b.getAttribute&&b.getAttribute("type")||"").toLowerCase(),nodeName:(b.nodeName||"").toLowerCase()},C=r.call(s),D=!!c.data(b,"hasCustomError"),t;d.customError=D;if(d.valid&&d.customError)d.valid=false;else if(!d.valid){var u=true;c.each(d,function(i,o){if(o)return u=false});if(u)d.valid=true}c.each(p,function(i,o){d[i]=o(s,C,B,d);if(d[i]&&
(d.valid||!t&&h)){b.setCustomValidity(g.createValidationMessage(b,i));d.valid=false;t=true}});d.valid&&b.setCustomValidity("");return d},set:c.noop},true)});c.fn.val=function(){var a=r.apply(this,arguments);this.each(function(){k(this)});return a};c.attr=function(a,e,b){var f=z.apply(this,arguments);n[e]&&b!==x&&a.form&&k(a);return f};if(l.addEventListener){l.addEventListener("change",function(a){k(a.target)},true);Modernizr.input.valueAsNumber||l.addEventListener("input",function(a){k(a.target)},
true)}var v=m.join(",");g.addReady(function(a,e){c(v,a).add(e.filter(v)).attr("validity")})}}});