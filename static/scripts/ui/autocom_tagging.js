"use strict";!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use_strict";function e(t,e){a(t).find(".tag-name").each(function(){a(this).click(function(){var t=a(this).text().split(":");return e(t[0],t[1]),!0})})}var a=t;return t.fn.autocomplete_tagging=function(i){function n(t){a(t).mouseenter(function(){a(this).attr("src",g.delete_tag_img_rollover)}),a(t).mouseleave(function(){a(this).attr("src",g.delete_tag_img)}),a(t).click(function(){var e=a(this).parent(),i=e.find(".tag-name").eq(0).text().split(":"),n=i[0],r=i[1],l=e.prev();e.remove(),delete g.tags[n];var s=g.get_toggle_link_text_fn(g.tags);return o.text(s),a.ajax({url:g.ajax_delete_tag_url,data:{tag_name:n},error:function(){g.tags[n]=r,l.hasClass("tag-button")?l.after(e):u.prepend(e),alert("Remove tag failed"),o.text(g.get_toggle_link_text_fn(g.tags)),t.mouseenter(function(){a(this).attr("src",g.delete_tag_img_rollover)}),t.mouseleave(function(){a(this).attr("src",g.delete_tag_img)})},success:function(){}}),!0})}function r(t){var e=a("<img/>").attr("src",g.delete_tag_img).addClass("delete-tag-img");n(e);var i=a("<span>").text(t).addClass("tag-name");i.click(function(){var e=t.split(":");return g.tag_click_fn(e[0],e[1]),!0});var r=a("<span></span>").addClass("tag-button");return r.append(i),g.editable&&r.append(e),r}var l={get_toggle_link_text_fn:function(t){var e=_.size(t);return e>0?e+(e>1?" Tags":" Tag"):"Add tags"},tag_click_fn:function(t,e){},editable:!0,input_size:20,in_form:!1,tags:{},use_toggle_link:!0,item_id:"",add_tag_img:"",add_tag_img_rollover:"",delete_tag_img:"",ajax_autocomplete_tag_url:"",ajax_retag_url:"",ajax_delete_tag_url:"",ajax_add_tag_url:""},g=t.extend(l,i),s=a(this),u=s.find(".tag-area"),o=s.find(".toggle-link"),d=s.find(".tag-input"),c=s.find(".add-tag-button");o.click(function(){var t;return t=u.is(":hidden")?function(){0===a(this).find(".tag-button").length&&u.click()}:function(){u.blur()},u.slideToggle("fast",t),a(this)}),g.editable&&d.hide(),d.keyup(function(t){if(27===t.keyCode)a(this).trigger("blur");else if(13===t.keyCode||188===t.keyCode||32===t.keyCode){var e=this.value;if(-1!==e.indexOf(": ",e.length-2))return this.value=e.substring(0,e.length-1),!1;if(188!==t.keyCode&&32!==t.keyCode||(e=e.substring(0,e.length-1)),(e=a.trim(e)).length<2)return!1;this.value="";var i=r(e),n=u.children(".tag-button");0!==n.length?n.slice(n.length-1).after(i):u.prepend(i);var l=e.split(":");g.tags[l[0]]=l[1];var s=g.get_toggle_link_text_fn(g.tags);o.text(s);var d=a(this);return a.ajax({url:g.ajax_add_tag_url,data:{new_tag:e},error:function(){i.remove(),delete g.tags[l[0]];var t=g.get_toggle_link_text_fn(g.tags);o.text(t),alert("Add tag failed")},success:function(){d.data("autocompleter").cacheFlush()}}),!1}});var f={selectFirst:!1,formatItem:function(t,e,a,i,n){var r=i.split(":");return 1===r.length?r[0]:r[1]},autoFill:!1,highlight:!1};d.autocomplete_verheul(g.ajax_autocomplete_tag_url,f),s.find(".delete-tag-img").each(function(){n(a(this))}),e(a(this),g.tag_click_fn),c.click(function(){return a(this).hide(),u.click(),!1}),g.editable&&(u.bind("blur",function(t){_.size(g.tags)>0&&(c.show(),d.hide(),u.removeClass("active-tag-area"))}),u.click(function(t){var e=a(this).hasClass("active-tag-area");if(a(t.target).hasClass("delete-tag-img")&&!e)return!1;if(a(t.target).hasClass("tag-name")&&!e)return!1;a(this).addClass("active-tag-area"),c.hide(),d.show(),d.focus();return a(window).bind("click.tagging_blur",function(t){!function(t,e){t.attr("id"),e!==t&&(t.blur(),a(window).unbind("click.tagging_blur"),a(this).addClass("tooltip"))}(u,a(t.target))}),!1})),g.use_toggle_link&&u.hide()},e});
//# sourceMappingURL=../../maps/ui/autocom_tagging.js.map
