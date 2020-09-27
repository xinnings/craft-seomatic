/*!
 * @project        SEOmatic
 * @name           javascript-editor.js
 * @author         Andrew Welch
 * @build          Sun, Sep 27, 2020 3:53 AM ET
 * @release        b6ad668cb3d6b33fdc04b45f99b83121acf38f28 [develop]
 * @copyright      Copyright (c) 2020 nystudio107
 *
 */!function(e){function t(t){for(var n,s,a=t[0],u=t[1],l=t[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={4:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;i.push([119,1,11]),r()}({119:function(e,t,r){var n=r(27);r(120),r(30),$((function(){$("textarea.seomatic-javascript-editor").each((function(){var e=$(this),t=$("<div>",{position:"absolute",width:"98%",height:700,class:e.attr("class")}).insertBefore(e);e.css("display","none");var r=n.edit(t[0]);r.renderer.setShowGutter(e.data("gutter")),r.getSession().setValue(e.val()),r.getSession().setMode("ace/mode/javascript"),r.setTheme("ace/theme/github"),r.setFontSize(14),r.setShowPrintMargin(!1),r.setDisplayIndentGuides(!0),r.renderer.setShowGutter(!0),r.setHighlightActiveLine(!1),r.session.setUseWorker(!1),r.setOptions({minLines:10,maxLines:1/0}),e.closest("form").submit((function(){e.val(r.getSession().getValue())}))}))}))}});
//# sourceMappingURL=javascript-editor.js.map