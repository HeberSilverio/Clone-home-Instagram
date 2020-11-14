/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder=Holder||{};!function(e,t){function a(e,t,a){t=parseInt(t,10),e=parseInt(e,10);var i=Math.max(t,e),o=Math.min(t,e),n=1/12,r=Math.min(.75*o,.75*i*n);return{height:Math.round(Math.max(a.size,r))}}function i(e){var t=[];for(p in e)e.hasOwnProperty(p)&&t.push(p+":"+e[p]);return t.join(";")}function o(e){var t=e.ctx,i=e.dimensions,o=e.template,n=e.ratio,r=e.holder,s="literal"==r.textmode,l="exact"==r.textmode,d=a(i.width,i.height,o),c=d.height,h=i.width*n,u=i.height*n,f=o.font?o.font:"Arial,Helvetica,sans-serif";canvas.width=h,canvas.height=u,t.textAlign="center",t.textBaseline="middle",t.fillStyle=o.background,t.fillRect(0,0,h,u),t.fillStyle=o.foreground,t.font="bold "+c+"px "+f;var g=o.text?o.text:Math.floor(i.width)+"x"+Math.floor(i.height);if(s){var i=r.dimensions;g=i.width+"x"+i.height}else if(l&&r.exact_dimensions){var i=r.exact_dimensions;g=Math.floor(i.width)+"x"+Math.floor(i.height)}var p=t.measureText(g).width;return p/h>=.75&&(c=Math.floor(.75*c*(h/p))),t.font="bold "+c*n+"px "+f,t.fillText(g,h/2,u/2,h),canvas.toDataURL("image/png")}function n(e){var t=e.dimensions,i=e.template,o=e.holder,n="literal"==o.textmode,r="exact"==o.textmode,s=a(t.width,t.height,i),l=s.height,d=t.width,c=t.height,h=i.font?i.font:"Arial,Helvetica,sans-serif",u=i.text?i.text:Math.floor(t.width)+"x"+Math.floor(t.height);if(n){var t=o.dimensions;u=t.width+"x"+t.height}else if(r&&o.exact_dimensions){var t=o.exact_dimensions;u=Math.floor(t.width)+"x"+Math.floor(t.height)}var f=$({text:u,width:d,height:c,text_height:l,font:h,template:i});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(f)))}function r(e){return b.use_canvas&&!b.use_svg?o(e):n(e)}function s(e,t,a,i){var o=a.dimensions,n=a.theme,s=a.text?decodeURIComponent(a.text):a.text,l=o.width+"x"+o.height;n=s?g(n,{text:s}):n,n=a.font?g(n,{font:a.font}):n,t.setAttribute("data-src",i),a.theme=n,t.holder_data=a,"image"==e?(t.setAttribute("alt",s?s:n.text?n.text+" ["+l+"]":l),(b.use_fallback||!a.auto)&&(t.style.width=o.width+"px",t.style.height=o.height+"px"),b.use_fallback?t.style.backgroundColor=n.background:(t.setAttribute("src",r({ctx:k,dimensions:o,template:n,ratio:_,holder:a})),a.textmode&&"exact"==a.textmode&&(v.push(t),c(t)))):"background"==e?b.use_fallback||(t.style.backgroundImage="url("+r({ctx:k,dimensions:o,template:n,ratio:_,holder:a})+")",t.style.backgroundSize=o.width+"px "+o.height+"px"):"fluid"==e&&(t.setAttribute("alt",s?s:n.text?n.text+" ["+l+"]":l),"%"==o.height.slice(-1)?t.style.height=o.height:null!=a.auto&&a.auto||(t.style.height=o.height+"px"),"%"==o.width.slice(-1)?t.style.width=o.width:null!=a.auto&&a.auto||(t.style.width=o.width+"px"),("inline"==t.style.display||""===t.style.display||"none"==t.style.display)&&(t.style.display="block"),d(t),b.use_fallback?t.style.backgroundColor=n.background:(v.push(t),c(t)))}function l(e,t){var a={height:e.clientHeight,width:e.clientWidth};return a.height||a.width?(e.removeAttribute("data-holder-invisible"),a):(e.setAttribute("data-holder-invisible",!0),void t.call(this,e))}function d(t){if(t.holder_data){var a=l(t,e.invisible_error_fn(d));if(a){var i=t.holder_data;i.initial_dimensions=a,i.fluid_data={fluid_height:"%"==i.dimensions.height.slice(-1),fluid_width:"%"==i.dimensions.width.slice(-1),mode:null},i.fluid_data.fluid_width&&!i.fluid_data.fluid_height?(i.fluid_data.mode="width",i.fluid_data.ratio=i.initial_dimensions.width/parseFloat(i.dimensions.height)):!i.fluid_data.fluid_width&&i.fluid_data.fluid_height&&(i.fluid_data.mode="height",i.fluid_data.ratio=parseFloat(i.dimensions.width)/i.initial_dimensions.height)}}}function c(t){var a;a=null==t.nodeType?v:[t];for(var i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o.holder_data){var n=o.holder_data,s=l(o,e.invisible_error_fn(c));if(s){if(n.fluid){if(n.auto)switch(n.fluid_data.mode){case"width":s.height=s.width/n.fluid_data.ratio;break;case"height":s.width=s.height*n.fluid_data.ratio}o.setAttribute("src",r({ctx:k,dimensions:s,template:n.theme,ratio:_,holder:n}))}n.textmode&&"exact"==n.textmode&&(n.exact_dimensions=s,o.setAttribute("src",r({ctx:k,dimensions:n.dimensions,template:n.theme,ratio:_,holder:n})))}}}}function h(t,a){for(var i={theme:g(A.themes.gray,{})},o=!1,n=t.length,r=0;n>r;r++){var s=t[r];e.flags.dimensions.match(s)?(o=!0,i.dimensions=e.flags.dimensions.output(s)):e.flags.fluid.match(s)?(o=!0,i.dimensions=e.flags.fluid.output(s),i.fluid=!0):e.flags.textmode.match(s)?i.textmode=e.flags.textmode.output(s):e.flags.colors.match(s)?i.theme=e.flags.colors.output(s):a.themes[s]?a.themes.hasOwnProperty(s)&&(i.theme=g(a.themes[s],{})):e.flags.font.match(s)?i.font=e.flags.font.output(s):e.flags.auto.match(s)?i.auto=!0:e.flags.text.match(s)&&(i.text=e.flags.text.output(s))}return o?i:!1}function u(e,t){var a="complete",i="readystatechange",o=!1,n=o,r=!0,s=e.document,l=s.documentElement,d=s.addEventListener?"addEventListener":"attachEvent",c=s.addEventListener?"removeEventListener":"detachEvent",h=s.addEventListener?"":"on",u=function(r){(r.type!=i||s.readyState==a)&&(("load"==r.type?e:s)[c](h+r.type,u,o),!n&&(n=!0)&&t.call(e,null))},f=function(){try{l.doScroll("left")}catch(e){return void setTimeout(f,50)}u("poll")};if(s.readyState==a)t.call(e,"lazy");else{if(s.createEventObject&&l.doScroll){try{r=!e.frameElement}catch(g){}r&&f()}s[d](h+"DOMContentLoaded",u,o),s[d](h+i,u,o),e[d](h+"load",u,o)}}function f(e,t){var e=e.match(/^(\W)?(.*)/),t=t||document,a=t["getElement"+(e[1]?"#"==e[1]?"ById":"sByClassName":"sByTagName")],i=a.call(t,e[2]),o=[];return null!==i&&(o=i.length||0===i.length?i:[i]),o}function g(e,t){var a={};for(var i in e)e.hasOwnProperty(i)&&(a[i]=e[i]);for(var i in t)t.hasOwnProperty(i)&&(a[i]=t[i]);return a}var m={use_svg:!1,use_canvas:!1,use_fallback:!1},b={},w=!1;canvas=document.createElement("canvas");var x=1,y=1,v=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)m.use_fallback=!0;else var k=canvas.getContext("2d");else m.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(m.use_svg=!0,m.use_canvas=!1),m.use_fallback||(x=window.devicePixelRatio||1,y=k.webkitBackingStorePixelRatio||k.mozBackingStorePixelRatio||k.msBackingStorePixelRatio||k.oBackingStorePixelRatio||k.backingStorePixelRatio||1);var _=x/y,A={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};e.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{size:A.themes.gray.size,foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},font:{regex:/font\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(e){return this.regex.exec(e)[1]}}};var $=function(){if(window.XMLSerializer){var e=new XMLSerializer,t="http://www.w3.org/2000/svg",a=document.createElementNS(t,"svg");a.webkitMatchesSelector&&a.setAttribute("xmlns","http://www.w3.org/2000/svg");var o=document.createElementNS(t,"rect"),n=document.createElementNS(t,"text"),r=document.createTextNode(null);return n.setAttribute("text-anchor","middle"),n.appendChild(r),a.appendChild(o),a.appendChild(n),function(t){return a.setAttribute("width",t.width),a.setAttribute("height",t.height),o.setAttribute("width",t.width),o.setAttribute("height",t.height),o.setAttribute("fill",t.template.background),n.setAttribute("x",t.width/2),n.setAttribute("y",t.height/2),r.nodeValue=t.text,n.setAttribute("style",i({fill:t.template.foreground,"font-weight":"bold","font-size":t.text_height+"px","font-family":t.font,"dominant-baseline":"central"})),e.serializeToString(a)}}}();for(var S in e.flags)e.flags.hasOwnProperty(S)&&(e.flags[S].match=function(e){return e.match(this.regex)});e.invisible_error_fn=function(e){return function(e){if(e.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},e.add_theme=function(t,a){return null!=t&&null!=a&&(A.themes[t]=a),e},e.add_image=function(t,a){var i=f(a);if(i.length)for(var o=0,n=i.length;n>o;o++){var r=document.createElement("img");r.setAttribute("data-src",t),i[o].appendChild(r)}return e},e.run=function(t){b=g({},m),w=!0;var a=g(A,t),i=[],o=[],n=[];for(null!=a.use_canvas&&a.use_canvas&&(b.use_canvas=!0,b.use_svg=!1),"string"==typeof a.images?o=f(a.images):window.NodeList&&a.images instanceof window.NodeList?o=a.images:window.Node&&a.images instanceof window.Node?o=[a.images]:window.HTMLCollection&&a.images instanceof window.HTMLCollection&&(o=a.images),"string"==typeof a.bgnodes?n=f(a.bgnodes):window.NodeList&&a.elements instanceof window.NodeList?n=a.bgnodes:window.Node&&a.bgnodes instanceof window.Node&&(n=[a.bgnodes]),c=0,d=o.length;d>c;c++)i.push(o[c]);var r=document.getElementById("holderjs-style");r||(r=document.createElement("style"),r.setAttribute("id","holderjs-style"),r.type="text/css",document.getElementsByTagName("head")[0].appendChild(r)),a.nocss||(r.styleSheet?r.styleSheet.cssText+=a.stylesheet:a.stylesheet.length&&r.appendChild(document.createTextNode(a.stylesheet)));for(var l=new RegExp(a.domain+'/(.*?)"?\\)'),d=n.length,c=0;d>c;c++){var u=window.getComputedStyle(n[c],null).getPropertyValue("background-image"),p=u.match(l),x=n[c].getAttribute("data-background-src");if(p){var y=h(p[1].split("/"),a);y&&s("background",n[c],y,u)}else if(null!=x){var y=h(x.substr(x.lastIndexOf(a.domain)+a.domain.length+1).split("/"),a);y&&s("background",n[c],y,u)}}for(d=i.length,c=0;d>c;c++){var v,k;k=v=u=null;try{k=i[c].getAttribute("src"),attr_datasrc=i[c].getAttribute("data-src")}catch(_){}if(null==attr_datasrc&&k&&k.indexOf(a.domain)>=0?u=k:attr_datasrc&&attr_datasrc.indexOf(a.domain)>=0&&(u=attr_datasrc),u){var y=h(u.substr(u.lastIndexOf(a.domain)+a.domain.length+1).split("/"),a);y&&(y.fluid?s("fluid",i[c],y,u):s("image",i[c],y,u))}}return e},u(t,function(){window.addEventListener?(window.addEventListener("resize",c,!1),window.addEventListener("orientationchange",c,!1)):window.attachEvent("onresize",c),w||e.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){e.run({})})}),"function"==typeof define&&define.amd&&define([],function(){return e}),function(){function e(e){this.message=e}var t="undefined"!=typeof exports?exports:this,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=Error(),e.prototype.name="InvalidCharacterError",t.btoa||(t.btoa=function(t){for(var i,o,n=0,r=a,s="";t.charAt(0|n)||(r="=",n%1);s+=r.charAt(63&i>>8-8*(n%1))){if(o=t.charCodeAt(n+=.75),o>255)throw new e("'btoa' failed");i=i<<8|o}return s}),t.atob||(t.atob=function(t){if(t=t.replace(/=+$/,""),1==t.length%4)throw new e("'atob' failed");for(var i,o,n=0,r=0,s="";o=t.charAt(r++);~o&&(i=n%4?64*i+o:o,n++%4)?s+=String.fromCharCode(255&i>>(6&-2*n)):0)o=a.indexOf(o);return s})}(),document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,a,i,o=document,n=[];if(o.querySelectorAll)return o.querySelectorAll("."+e);if(o.evaluate)for(a=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=o.evaluate(a,o,null,0,null);i=t.iterateNext();)n.push(i);else for(t=o.getElementsByTagName("*"),a=new RegExp("(^|\\s)"+e+"(\\s|$)"),i=0;i<t.length;i++)a.test(t[i].className)&&n.push(t[i]);return n}),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var a=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),a.test(t)&&(t=t.replace(a,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])})}(Holder,window),$("#search").keyup(function(){var e=$("#search").val(),t=new RegExp(e,"i"),a='<ul class="ls-search">';a+='<li class="ls-no-list-style"><h2 class="ls-title-2">Resultado da busca</h2></li>',$.getJSON("/locawebstyle/assets/javascripts/busca.json",function(e){console.log(this),$.each(e,function(e,i){(-1!=i.title.search(t)||-1!=i.path.search(t))&&(a+='<li class="ls-no-list-style"><a class="ls-display-block" href="/locawebstyle/'+i.path+'">'+i.title,a+="<p>"+i.description+"</p></a></li>")}),$("#results").html(a)})});var lsdocs=function(){"use strict";function e(){i(),o(),a(),t()}function t(e){$(".doc-test-themes").find("a").on("click",function(){var e=$(this).data("toggle-class");$("html").attr("class",$("html").attr("class").split(" ").map(function(e){return/ls-theme/.test(e)?"":e}).join(" ").replace(/  /g,"")).addClass(e)})}function a(){$(".doc-menu").on("click",function(){$(this).toggleClass("active")})}function i(){$("code.language-html").each(function(e,t){var a=$(this).html();$(this).text(a),$(this).removeClass("language-html").addClass("language-markup")})}function o(){if($("html").hasClass("ls-window-lg")||$("html").hasClass("ls-window-md")){var e=$(".doc-sidebar-inner").width();$(".doc-sidebar-inner").height()<$(window).height()&&$(window).scroll(function(){var t=$(this).scrollTop();t+$(window).height()+40==$(document).height()+40&&$(".doc-sidebar-inner").css("margin-top","0px"),t>="391"?$(".doc-sidebar-inner").addClass("doc-affix").css("width",e):$(".doc-sidebar-inner").removeClass("doc-affix").removeAttr("style")})}}return{init:e}}();$(window).on("load",function(){lsdocs.init()});var lsdocs=lsdocs||{};lsdocs.icones=function(){"use strict";function e(){t(),a()}function t(){var e='<form class="doc-search-icons"><input type="search" id="searchIcons" aria-label="Buscar \xedcone" placeholder="Buscar \xedcone"><p id="searchResultText"></p></form>';$(".list-icons").eq(0).before(e)}function a(){$("#searchIcons").on("keyup",function(e){var t=$(this).val(),a=$("#searchResultText"),o=i.find('[class*="'+t+'"]');console.log(o),t.length>0?0===o.size()?(a.html("Nenhum \xedcone encontrado com o termo: <b>"+t+"</b>"),i.hide()):(i.hide(),o.parent(".list-icons li").show(),a.html("Encontrado(s) <b>"+o.size()+"</b> \xedcone(s)")):(i.show(),a.html("&nbsp;"))})}var i=$(".list-icons li");return{init:e}}(),$(window).on("load",function(){lsdocs.icones.init()}),window.tourGuiadoDoc={},tourGuiadoDoc=function(){"use strict";function e(){locastyle.guidedTour.init(t)}var t={id:"tourDemoDoc",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:"passo1",title:"O t\xedtulo do passo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"bottom",arrowOffset:"center"},{target:"passo2",title:"T\xedtulo passo 2",content:"Este \xe9 o texto do passo 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"left",arrowOffset:"center"},{target:"demo-init",title:"T\xedtulo passo 3- Final",content:"Um textinho do passo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",placement:"right",arrowOffset:"center"}]};return{init:e}}(),window.setTimeout(function(){tourGuiadoDoc.init()},1e3);