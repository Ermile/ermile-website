/*!jQuery Knob*/
!function(t){"use strict";var i={},s=Math.max,h=Math.min;i.c={},i.c.d=t(document),i.c.t=function(t){return t.originalEvent.touches.length-1},i.o=function(){var s=this;this.o=null,this.$=null,this.i=null,this.g=null,this.v=null,this.cv=null,this.x=0,this.y=0,this.$c=null,this.c=null,this.t=0,this.isInit=!1,this.fgColor=null,this.pColor=null,this.dH=null,this.cH=null,this.eH=null,this.rH=null,this.run=function(){var i=function(t,i){var h;for(h in i)s.o[h]=i[h];s.init(),s._configure()._draw()};if(!this.$.data("kontroled"))return this.$.data("kontroled",!0),this.extend(),this.o=t.extend({min:this.$.data("min")||0,max:this.$.data("max")||100,stopper:!0,readOnly:this.$.data("readonly"),cursor:this.$.data("cursor")===!0&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:null==this.$.data("displayinput")||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor")||this.$.data("fgcolor")||"#87CEEB",inline:!1,step:this.$.data("step")||1,draw:null,change:null,cancel:null,release:null},this.o),this.$.is("fieldset")?(this.v={},this.i=this.$.find("input"),this.i.each(function(i){var h=t(this);s.i[i]=h,s.v[i]=h.val(),h.bind("change",function(){var t={};t[i]=h.val(),s.val(t)})}),this.$.find("legend").remove()):(this.i=this.$,this.v=this.$.val(),""==this.v&&(this.v=this.o.min),this.$.bind("change",function(){s.val(s._validate(s.$.val()))})),!this.o.displayInput&&this.$.hide(),this.$c=t('<canvas width="'+this.o.width+'px" height="'+this.o.height+'px"></canvas>'),this.c=this.$c[0].getContext("2d"),this.$.wrap(t('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+'px;"></div>')).before(this.$c),this.v instanceof Object?(this.cv={},this.copy(this.v,this.cv)):this.cv=this.v,this.$.bind("configure",i).parent().bind("configure",i),this._listen()._configure()._xy().init(),this.isInit=!0,this._draw(),this},this._draw=function(){var t=!0,i=document.createElement("canvas");i.width=s.o.width,i.height=s.o.height,s.g=i.getContext("2d"),s.clear(),s.dH&&(t=s.dH()),t!==!1&&s.draw(),s.c.drawImage(i,0,0),i=null},this._touch=function(t){var h=function(t){var i=s.xy2val(t.originalEvent.touches[s.t].pageX,t.originalEvent.touches[s.t].pageY);i!=s.cv&&(s.cH&&s.cH(i)===!1||(s.change(s._validate(i)),s._draw()))};return this.t=i.c.t(t),h(t),i.c.d.bind("touchmove.k",h).bind("touchend.k",function(){i.c.d.unbind("touchmove.k touchend.k"),s.rH&&s.rH(s.cv)===!1||s.val(s.cv)}),this},this._mouse=function(t){var h=function(t){var i=s.xy2val(t.pageX,t.pageY);i!=s.cv&&(s.cH&&s.cH(i)===!1||(s.change(s._validate(i)),s._draw()))};return h(t),i.c.d.bind("mousemove.k",h).bind("keyup.k",function(t){if(27===t.keyCode){if(i.c.d.unbind("mouseup.k mousemove.k keyup.k"),s.eH&&s.eH()===!1)return;s.cancel()}}).bind("mouseup.k",function(){i.c.d.unbind("mousemove.k mouseup.k keyup.k"),s.rH&&s.rH(s.cv)===!1||s.val(s.cv)}),this},this._xy=function(){var t=this.$c.offset();return this.x=t.left,this.y=t.top,this},this._listen=function(){return this.o.readOnly?this.$.attr("readonly","readonly"):(this.$c.bind("mousedown",function(t){t.preventDefault(),s._xy()._mouse(t)}).bind("touchstart",function(t){t.preventDefault(),s._xy()._touch(t)}),this.listen()),this},this._configure=function(){return this.o.draw&&(this.dH=this.o.draw),this.o.change&&(this.cH=this.o.change),this.o.cancel&&(this.eH=this.o.cancel),this.o.release&&(this.rH=this.o.release),this.o.displayPrevious?(this.pColor=this.h2rgba(this.o.fgColor,"0.4"),this.fgColor=this.h2rgba(this.o.fgColor,"0.6")):this.fgColor=this.o.fgColor,this},this._clear=function(){this.$c[0].width=this.$c[0].width},this._validate=function(t){return~~((0>t?-.5:.5)+t/this.o.step)*this.o.step},this.listen=function(){},this.extend=function(){},this.init=function(){},this.change=function(){},this.val=function(){},this.xy2val=function(){},this.draw=function(){},this.clear=function(){this._clear()},this.h2rgba=function(t,i){var s;return t=t.substring(1,7),s=[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)],"rgba("+s[0]+","+s[1]+","+s[2]+","+i+")"},this.copy=function(t,i){for(var s in t)i[s]=t[s]}},i.Dial=function(){i.o.call(this),this.startAngle=null,this.xy=null,this.radius=null,this.lineWidth=null,this.cursorExt=null,this.w2=null,this.PI2=2*Math.PI,this.extend=function(){this.o=t.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:!0},this.o)},this.val=function(t){return null==t?this.v:(this.cv=this.o.stopper?s(h(t,this.o.max),this.o.min):t,this.v=this.cv,this.$.val(this.v),this._draw(),void 0)},this.xy2val=function(t,i){var n,e;return n=Math.atan2(t-(this.x+this.w2),-(i-this.y-this.w2))-this.angleOffset,this.angleArc!=this.PI2&&0>n&&n>-.5?n=0:0>n&&(n+=this.PI2),e=~~(.5+n*(this.o.max-this.o.min)/this.angleArc)+this.o.min,this.o.stopper&&(e=s(h(e,this.o.max),this.o.min)),e},this.listen=function(){var i,n,e=this,a=function(t){t.preventDefault();var i=t.originalEvent,s=i.detail||i.wheelDeltaX,h=i.detail||i.wheelDeltaY,n=parseInt(e.$.val())+(s>0||h>0?e.o.step:0>s||0>h?-e.o.step:0);e.cH&&e.cH(n)===!1||e.val(n)},o=1,l={37:-e.o.step,38:e.o.step,39:e.o.step,40:-e.o.step};this.$.bind("keydown",function(a){var r=a.keyCode;if(r>=96&&105>=r&&(r=a.keyCode=r-48),i=parseInt(String.fromCharCode(r)),isNaN(i)&&(13!==r&&8!==r&&9!==r&&189!==r&&a.preventDefault(),t.inArray(r,[37,38,39,40])>-1)){a.preventDefault();var c=parseInt(e.$.val())+l[r]*o;e.o.stopper&&(c=s(h(c,e.o.max),e.o.min)),e.change(c),e._draw(),n=window.setTimeout(function(){o*=2},30)}}).bind("keyup",function(){isNaN(i)?n&&(window.clearTimeout(n),n=null,o=1,e.val(e.$.val())):e.$.val()>e.o.max&&e.$.val(e.o.max)||e.$.val()<e.o.min&&e.$.val(e.o.min)}),this.$c.bind("mousewheel DOMMouseScroll",a),this.$.bind("mousewheel DOMMouseScroll",a)},this.init=function(){(this.v<this.o.min||this.v>this.o.max)&&(this.v=this.o.min),this.$.val(this.v),this.w2=this.o.width/2,this.cursorExt=this.o.cursor/100,this.xy=this.w2,this.lineWidth=this.xy*this.o.thickness,this.lineCap=this.o.lineCap,this.radius=this.xy-this.lineWidth/2,this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset),this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc),this.angleOffset=this.o.angleOffset*Math.PI/180,this.angleArc=this.o.angleArc*Math.PI/180,this.startAngle=1.5*Math.PI+this.angleOffset,this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var t=s(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.o.width/2+4>>0)+"px",height:(this.o.width/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.o.width/3>>0)+"px","margin-left":"-"+(3*this.o.width/4+2>>0)+"px",border:0,background:"none",font:"bold "+(this.o.width/t>>0)+"px Arial","text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})},this.change=function(t){this.cv=t,this.$.val(t)},this.angle=function(t){return(t-this.o.min)*this.angleArc/(this.o.max-this.o.min)},this.draw=function(){var t,i,s=this.g,h=this.angle(this.cv),n=this.startAngle,e=n+h,a=1;s.lineWidth=this.lineWidth,s.lineCap=this.lineCap,this.o.cursor&&(n=e-this.cursorExt)&&(e+=this.cursorExt),s.beginPath(),s.strokeStyle=this.o.bgColor,s.arc(this.xy,this.xy,this.radius,this.endAngle,this.startAngle,!0),s.stroke(),this.o.displayPrevious&&(i=this.startAngle+this.angle(this.v),t=this.startAngle,this.o.cursor&&(t=i-this.cursorExt)&&(i+=this.cursorExt),s.beginPath(),s.strokeStyle=this.pColor,s.arc(this.xy,this.xy,this.radius,t,i,!1),s.stroke(),a=this.cv==this.v),s.beginPath(),s.strokeStyle=a?this.o.fgColor:this.fgColor,s.arc(this.xy,this.xy,this.radius,n,e,!1),s.stroke()},this.cancel=function(){this.val(this.v)}},t.fn.dial=t.fn.knob=function(s){return this.each(function(){var h=new i.Dial;h.o=s,h.$=t(this),h.run()}).parent()}}(jQuery);
/* jQuery UI Widget 1.10.1+amd*/
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(o){}s(e)},t.widget=function(e,i,n){var s,o,a,r,u={},d=e.split(".")[0];e=e.split(".")[1],s=d+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[d]=t[d]||{},o=t[d][e],a=t[d][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new a(t,e)},t.extend(a,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(n,function(e,n){return t.isFunction(n)?void(u[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(u[e]=n)}),a.prototype=t.widget.extend(r,{widgetEventPrefix:o?r.widgetEventPrefix:e},u,{constructor:a,namespace:d,widgetName:e,widgetFullName:s}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a)},t.widget.extend=function(i){for(var s,o,a=n.call(arguments,1),r=0,u=a.length;u>r;r++)for(s in a[r])o=a[r][s],a[r].hasOwnProperty(s)&&o!==e&&(i[s]=t.isPlainObject(o)?t.isPlainObject(i[s])?t.widget.extend({},i[s],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,s){var o=s.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,u=n.call(arguments,1),d=this;return a=!r&&u.length?t.widget.extend.apply(null,[a].concat(u)):a,this.each(r?function(){var n,s=t.data(this,o);return s?t.isFunction(s[a])&&"_"!==a.charAt(0)?(n=s[a].apply(s,u),n!==s&&n!==e?(d=n&&n.jquery?d.pushStack(n.get()):n,!1):void 0):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}:function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new s(a,this))}),d}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},s=i.split("."),i=s.shift(),s.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;a<s.length-1;a++)o[s[a]]=o[s[a]]||{},o=o[s[a]];if(i=s.pop(),n===e)return o[i]===e?null:o[i];o[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];r[i]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var u=n.match(/^(\w+)\s*(.*)$/),d=u[1]+o.eventNamespace,h=u[2];h?s.delegate(h,d,r):i.bind(d,r)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}})});
/* jQuery Iframe Transport Plugin 1.6.1*/
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(r){if(r.async){var a,n,o;return{send:function(p,i){a=e('<form style="display:none;"></form>'),a.attr("accept-charset",r.formAcceptCharset),o=/\?/.test(r.url)?"&":"?","DELETE"===r.type?(r.url=r.url+o+"_method=DELETE",r.type="POST"):"PUT"===r.type?(r.url=r.url+o+"_method=PUT",r.type="POST"):"PATCH"===r.type&&(r.url=r.url+o+"_method=PATCH",r.type="POST"),n=e('<iframe src="javascript:false;" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",function(){var t,o=e.isArray(r.paramName)?r.paramName:[r.paramName];n.unbind("load").bind("load",function(){var t;try{if(t=n.contents(),!t.length||!t[0].firstChild)throw new Error}catch(r){t=void 0}i(200,"success",{iframe:t}),e('<iframe src="javascript:false;"></iframe>').appendTo(a),a.remove()}),a.prop("target",n.prop("name")).prop("action",r.url).prop("method",r.type),r.formData&&e.each(r.formData,function(t,r){e('<input type="hidden"/>').prop("name",r.name).val(r.value).appendTo(a)}),r.fileInput&&r.fileInput.length&&"POST"===r.type&&(t=r.fileInput.clone(),r.fileInput.after(function(e){return t[e]}),r.paramName&&r.fileInput.each(function(t){e(this).prop("name",o[t]||r.paramName)}),a.append(r.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),a.submit(),t&&t.length&&r.fileInput.each(function(r,a){var n=e(t[r]);e(a).prop("name",n.prop("name")),n.replaceWith(a)})}),a.append(n).appendTo(document.body)},abort:function(){n&&n.unbind("load").prop("src","javascript".concat(":false;")),a&&a.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})});
/* jQuery File Upload Plugin 5.26*/
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery.ui.widget"],e):e(window.jQuery)}(function(e){"use strict";e.support.xhrFileUpload=!(!window.XMLHttpRequestUpload||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:e(document),fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,formData:function(e){return e.serializeArray()},add:function(t,i){(i.autoUpload||i.autoUpload!==!1&&(e(this).data("blueimp-fileupload")||e(this).data("fileupload")).options.autoUpload)&&i.submit()},processData:!1,contentType:!1,cache:!1},_refreshOptionsList:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_BitrateTimer:function(){this.timestamp=+new Date,this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,i){var r=e-this.timestamp;return(!this.bitrate||!i||r>i)&&(this.bitrate=(t-this.loaded)*(1e3/r)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var i;return"function"==typeof t.formData?t.formData(t.form):e.isArray(t.formData)?t.formData:t.formData?(i=[],e.each(t.formData,function(e,t){i.push({name:e,value:t})}),i):[]},_getTotal:function(t){var i=0;return e.each(t,function(e,t){i+=t.size||1}),i},_initProgressObject:function(e){e._progress={loaded:0,total:0,bitrate:0}},_onProgress:function(e,t){if(e.lengthComputable){var i,r=+new Date;if(t._time&&t.progressInterval&&r-t._time<t.progressInterval&&e.loaded!==e.total)return;t._time=r,i=Math.floor(e.loaded/e.total*(t.chunkSize||t._progress.total))+(t.uploadedBytes||0),this._progress.loaded+=i-t._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,t.bitrateInterval),t._progress.loaded=t.loaded=i,t._progress.bitrate=t.bitrate=t._bitrateTimer.getBitrate(r,i,t.bitrateInterval),this._trigger("progress",e,t),this._trigger("progressall",e,this._progress)}},_initProgressListener:function(t){var i=this,r=t.xhr?t.xhr():e.ajaxSettings.xhr();r.upload&&(e(r.upload).bind("progress",function(e){var r=e.originalEvent;e.lengthComputable=r.lengthComputable,e.loaded=r.loaded,e.total=r.total,i._onProgress(e,t)}),t.xhr=function(){return r})},_initXHRData:function(t){var i,r=t.files[0],n=t.multipart||!e.support.xhrFileUpload,o=t.paramName[0];t.headers=t.headers||{},t.contentRange&&(t.headers["Content-Range"]=t.contentRange),n?e.support.xhrFormDataFileUpload&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:o,value:t.blob}):e.each(t.files,function(e,r){i.push({name:t.paramName[e]||o,value:r})})):(t.formData instanceof FormData?i=t.formData:(i=new FormData,e.each(this._getFormData(t),function(e,t){i.append(t.name,t.value)})),t.blob?(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"',i.append(o,t.blob,r.name)):e.each(t.files,function(e,r){(window.Blob&&r instanceof Blob||window.File&&r instanceof File)&&i.append(t.paramName[e]||o,r,r.name)})),t.data=i):(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"',t.contentType=r.type,t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&e("<a></a>").prop("href",t.url).prop("host")!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e,"iframe")},_getParamName:function(t){var i=e(t.fileInput),r=t.paramName;return r?e.isArray(r)||(r=[r]):(r=[],i.each(function(){for(var t=e(this),i=t.prop("name")||"files[]",n=(t.prop("files")||[1]).length;n;)r.push(i),n-=1}),r.length||(r=[i.prop("name")||"files[]"])),r},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,r){var n=e.Deferred(),o=n.promise();return i=i||this.options.context||o,t===!0?n.resolveWith(i,r):t===!1&&n.rejectWith(i,r),o.abort=n.promise,this._enhancePromise(o)},_addConvenienceMethods:function(e,t){var i=this;t.submit=function(){return"pending"!==this.state()&&(t.jqXHR=this.jqXHR=i._trigger("submit",e,this)!==!1&&i._onSend(e,this)),this.jqXHR||i._getXHRPromise()},t.abort=function(){return this.jqXHR?this.jqXHR.abort():this._getXHRPromise()},t.state=function(){return this.jqXHR?i._getDeferredState(this.jqXHR):void 0},t.progress=function(){return this._progress}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),i=t&&t.split("-"),r=i&&i.length>1&&parseInt(i[1],10);return r&&r+1},_chunkedUpload:function(t,i){var r,n,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes=t.uploadedBytes||0,p=t.maxChunkSize||a,d=s.slice||s.webkitSlice||s.mozSlice,u=e.Deferred(),h=u.promise();return this._isXHRUpload(t)&&d&&(l||a>p)&&!t.data?i?!0:l>=a?(s.error="Uploaded bytes exceed file size",this._getXHRPromise(!1,t.context,[null,"error",s.error])):(n=function(){var i=e.extend({},t),h=i._progress.loaded;i.blob=d.call(s,l,l+p,s.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,o._initXHRData(i),o._initProgressListener(i),r=(o._trigger("chunksend",null,i)!==!1&&e.ajax(i)||o._getXHRPromise(!1,i.context)).done(function(r,s,p){l=o._getUploadedBytes(p)||l+i.chunkSize,i._progress.loaded===h&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),t.uploadedBytes=i.uploadedBytes=l,i.result=r,i.textStatus=s,i.jqXHR=p,o._trigger("chunkdone",null,i),o._trigger("chunkalways",null,i),a>l?n():u.resolveWith(i.context,[r,s,p])}).fail(function(e,t,r){i.jqXHR=e,i.textStatus=t,i.errorThrown=r,o._trigger("chunkfail",null,i),o._trigger("chunkalways",null,i),u.rejectWith(i.context,[e,t,r])})},this._enhancePromise(h),h.abort=function(){return r.abort()},n(),h):!1},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),t._progress||(t._progress={}),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,i,r,n){var o=n._progress.total;n._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),n),n.result=t,n.textStatus=i,n.jqXHR=r,this._trigger("done",null,n)},_onFail:function(e,t,i,r){r.jqXHR=e,r.textStatus=t,r.errorThrown=i,this._trigger("fail",null,r),r.recalculateProgress&&(this._progress.loaded-=r._progress.loaded,this._progress.total-=r._progress.total)},_onAlways:function(e,t,i,r){this._active-=1,this._trigger("always",null,r),0===this._active&&this._trigger("stop")},_onSend:function(t,i){i.submit||this._addConvenienceMethods(t,i);var r,n,o,s,a=this,l=a._getAJAXSettings(i),p=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,r=r||((n||a._trigger("send",t,l)===!1)&&a._getXHRPromise(!1,l.context,n)||a._chunkedUpload(l)||e.ajax(l)).done(function(e,t,i){a._onDone(e,t,i,l)}).fail(function(e,t,i){a._onFail(e,t,i,l)}).always(function(e,t,i){if(a._sending-=1,a._onAlways(e,t,i,l),l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var r=a._slots.shift();r;){if("pending"===a._getDeferredState(r)){r.resolve();break}r=a._slots.shift()}})};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.pipe(p)):s=this._sequence=this._sequence.pipe(p,p),s.abort=function(){return n=[void 0,"abort","abort"],r?r.abort():(o&&o.rejectWith(l.context,n),p())},this._enhancePromise(s)):p()},_onAdd:function(t,i){var r,n,o,s,a=this,l=!0,p=e.extend({},this.options,i),d=p.limitMultiFileUploads,u=this._getParamName(p);if((p.singleFileUploads||d)&&this._isXHRUpload(p))if(!p.singleFileUploads&&d)for(o=[],r=[],s=0;s<i.files.length;s+=d)o.push(i.files.slice(s,s+d)),n=u.slice(s,s+d),n.length||(n=u),r.push(n);else r=u;else o=[i.files],r=[u];return i.originalFiles=i.files,e.each(o||i.files,function(n,s){var p=e.extend({},i);return p.files=o?s:[s],p.paramName=r[n],a._initProgressObject(p),a._addConvenienceMethods(t,p),l=a._trigger("add",t,p)}),l},_replaceFileInput:function(t){var i=t.clone(!0);e("<form></form>").append(i)[0].reset(),t.after(i).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(e,r){return r===t[0]?i[0]:r}),t[0]===this.element[0]&&(this.element=i)},_handleFileTreeEntry:function(t,i){var r,n=this,o=e.Deferred(),s=function(e){e&&!e.entry&&(e.entry=t),o.resolve([e])};return i=i||"",t.isFile?t._file?(t._file.relativePath=i,o.resolve(t._file)):t.file(function(e){e.relativePath=i,o.resolve(e)},s):t.isDirectory?(r=t.createReader(),r.readEntries(function(e){n._handleFileTreeEntries(e,i+t.name+"/").done(function(e){o.resolve(e)}).fail(s)},s)):o.resolve([]),o.promise()},_handleFileTreeEntries:function(t,i){var r=this;return e.when.apply(e,e.map(t,function(e){return r._handleFileTreeEntry(e,i)})).pipe(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(t){t=t||{};var i=t.items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(e.map(i,function(e){var t;return e.webkitGetAsEntry?(t=e.webkitGetAsEntry(),t&&(t._file=e.getAsFile()),t):e.getAsEntry()})):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){t=e(t);var i,r,n=t.prop("webkitEntries")||t.prop("entries");if(n&&n.length)return this._handleFileTreeEntries(n);if(i=e.makeArray(t.prop("files")),i.length)void 0===i[0].name&&i[0].fileName&&e.each(i,function(e,t){t.name=t.fileName,t.size=t.fileSize});else{if(r=t.prop("value"),!r)return e.Deferred().resolve([]).promise();i=[{name:r.replace(/^.*\\/,"")}]}return e.Deferred().resolve(i).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).pipe(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(t)},_onChange:function(t){var i=this,r={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(r.fileInput).always(function(e){r.files=e,i.options.replaceFileInput&&i._replaceFileInput(r.fileInput),i._trigger("change",t,r)!==!1&&i._onAdd(t,r)})},_onPaste:function(t){var i=t.originalEvent.clipboardData,r=i&&i.items||[],n={files:[]};return e.each(r,function(e,t){var i=t.getAsFile&&t.getAsFile();i&&n.files.push(i)}),this._trigger("paste",t,n)===!1||this._onAdd(t,n)===!1?!1:void 0},_onDrop:function(e){var t=this,i=e.dataTransfer=e.originalEvent.dataTransfer,r={};i&&i.files&&i.files.length&&e.preventDefault(),this._getDroppedFiles(i).always(function(i){r.files=i,t._trigger("drop",e,r)!==!1&&t._onAdd(e,r)})},_onDragOver:function(t){var i=t.dataTransfer=t.originalEvent.dataTransfer;return this._trigger("dragover",t)===!1?!1:void(i&&-1!==e.inArray("Files",i.types)&&(i.dropEffect="copy",t.preventDefault()))},_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop}),this._on(this.options.pasteZone,{paste:this._onPaste})),this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_setOption:function(t,i){var r=-1!==e.inArray(t,this._refreshOptionsList);r&&this._destroyEventHandlers(),this._super(t,i),r&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_create:function(){var t=this.options;e.extend(t,e(this.element[0].cloneNode(!1)).data()),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},progress:function(){return this._progress},add:function(t){var i=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always(function(e){t.files=e,i._onAdd(null,t)}):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var i,r,n=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return r=!0,i?i.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always(function(e){r||(t.files=e,i=n._onSend(null,t).then(function(e,t,i){o.resolve(e,t,i)},function(e,t,i){o.reject(e,t,i)}))}),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})});


$(function()
{
  var ul = $('#form_uploader ul');

  $('#drop a').click(function(){
    // Simulate a click on the file input button
    // to show the file browser dialog
    $(this).parent().find('input').click();
  });

  // Initialize the jQuery File Upload plugin
  $('#form_uploader').fileupload({

    // This element will accept file drag/drop uploading
    dropZone: $('body'),

    // This function is called when a file is added to the queue;
    // either via the browse button, or via drag/drop:
    add: function (e, data) {

      var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
        ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

      // Append the file name and file size
      tpl.find('p').text(data.files[0].name)
             .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

      // Add the HTML to the UL element
      data.context = tpl.appendTo(ul);

      // Initialize the knob plugin
      tpl.find('input').knob();

      // Listen for clicks on the cancel icon
      tpl.find('span').click(function(){

        if(tpl.hasClass('working')){
          jqXHR.abort();
        }

        tpl.fadeOut(function(){
          tpl.remove();
        });

      });

      // Automatically upload the file once it is added to the queue
      var jqXHR = data.submit();
    },

    progress: function(e, data){

      // Calculate the completion percentage of the upload
      var progress = parseInt(data.loaded / data.total * 100, 10);

      // Update the hidden input field and trigger a change
      // so that the jQuery knob plugin knows to update the dial
      data.context.find('input').val(progress).change();

      if(progress == 100){
        data.context.removeClass('working');
      }
    },

    fail:function(e, data){
      // Something has gone wrong!
      data.context.addClass('error');
    }

  });


  // Prevent the default action when a file is dropped on the window
  $(document).on('drop dragover', function (e) {
    var dt = e.originalEvent.dataTransfer;
    if(dt.types != null && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('application/x-moz-file')))
    {
      $('#drop').addClass('dragover');
    }
    e.preventDefault();
  });

  // Prevent the default action when a file is dropped on the window
  $(document).on('drop dragleave', function (e) {
    $('#drop').removeClass('dragover');
    e.preventDefault();
  });

  // Prevent the default action when a file is dropped on the window
  // $(document).on('drop drop', function (e) {
  //     $('#drop').addClass('dragover');
  //     $('#drop').removeClass('dragover');
  //     e.preventDefault();
  // });


  // Helper function that formats the file sizes
  function formatFileSize(bytes) {
    if (typeof bytes !== 'number') {
      return '';
    }

    if (bytes >= 1000000000) {
      return (bytes / 1000000000).toFixed(2) + ' GB';
    }

    if (bytes >= 1000000) {
      return (bytes / 1000000).toFixed(2) + ' MB';
    }

    return (bytes / 1000).toFixed(2) + ' KB';
  }

});