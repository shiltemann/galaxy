"use strict";define([],function(){var t=Backbone.View.extend({initialize:function(t,n){this.$button=t,this.$button.length||(this.$button=$("<div/>")),this.options=n||[],this.$button.data("popupmenu",this);var i=this;this.$button.click(function(t){return $(".popmenu-wrapper").remove(),i._renderAndShow(t),!1})},_renderAndShow:function(t){this.render(),this.$el.appendTo("body").css(this._getShownPosition(t)).show(),this._setUpCloseBehavior()},render:function(){if(this.$el.addClass("popmenu-wrapper").hide().css({position:"absolute"}).html(this.template(this.$button.attr("id"),this.options)),this.options.length){var t=this;this.$el.find("li").each(function(n,i){var o=t.options[n];o.func&&$(this).children("a.popupmenu-option").click(function(n){o.func.call(t,n,o),n.preventDefault()})})}return this},template:function(t,n){return['<ul id="',t,'-menu" class="dropdown-menu">',this._templateOptions(n),"</ul>"].join("")},_templateOptions:function(t){return t.length?_.map(t,function(t){return t.divider?'<li class="divider"></li>':t.header?['<li class="head"><a href="javascript:void(0);">',t.html,"</a></li>"].join(""):['<li><a class="popupmenu-option" href="',t.href||"javascript:void(0);",'"',t.target?' target="'+t.target+'"':"",">",t.checked?'<span class="fa fa-check"></span>':"",t.html,"</a></li>"].join("")}).join(""):"<li>(no options)</li>"},_getShownPosition:function(t){var n=this.$el.width(),i=t.pageX-n/2;return i=Math.min(i,$(document).scrollLeft()+$(window).width()-n-5),i=Math.max(i,$(document).scrollLeft()+5),{top:t.pageY,left:i}},_setUpCloseBehavior:function(){function t(t){if($(document).off("click.close_popup"),window&&window.parent!==window)try{$(window.parent.document).off("click.close_popup")}catch(t){}else try{$("iframe#galaxy_main").contents().off("click.close_popup")}catch(t){}n.remove()}var n=this;if($("html").one("click.close_popup",t),window&&window.parent!==window)try{$(window.parent.document).find("html").one("click.close_popup",t)}catch(t){}else try{$("iframe#galaxy_main").contents().one("click.close_popup",t)}catch(t){}},addItem:function(t,n){return n=n>=0?n:this.options.length,this.options.splice(n,0,t),this},removeItem:function(t){return t>=0&&this.options.splice(t,1),this},findIndexByHtml:function(t){for(var n=0;n<this.options.length;n++)if(_.has(this.options[n],"html")&&this.options[n].html===t)return n;return null},findItemByHtml:function(t){return this.options[this.findIndexByHtml(t)]},toString:function(){return"PopupMenu"}});return t.create=function(n,i){return new t(n,i)},t.make_popupmenu=function(n,i){var o=[];return _.each(i,function(t,n){var i={html:n};null===t?i.header=!0:"function"===jQuery.type(t)&&(i.func=t),o.push(i)}),new t($(n),o)},t.convertLinksToOptions=function(t,n){t=$(t),n=n||"a";var i=[];return t.find(n).each(function(t,n){var o={},e=$(t);if(o.html=e.text(),e.attr("href")){var r=e.attr("href"),s=e.attr("target"),a=e.attr("confirm");o.func=function(){if(!a||confirm(a))switch(s){case"_parent":window.parent.location=r;break;case"_top":window.top.location=r;break;default:window.location=r}}}i.push(o)}),i},t.fromExistingDom=function(n,i,o){n=$(n),i=$(i);var e=t.convertLinksToOptions(i,o);return i.remove(),new t(n,e)},t.make_popup_menus=function(n,i,o){n=n||document,i=i||"div[popupmenu]",o=o||function(t,n){return"#"+t.attr("popupmenu")};var e=[];return $(n).find(i).each(function(){var i=$(this),r=$(n).find(o(i,n));e.push(t.fromDom(r,i)),r.addClass("popup")}),e},t});
//# sourceMappingURL=../../../maps/mvc/ui/popup-menu.js.map
