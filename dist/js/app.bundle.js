!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$(document).ready((function(){$(".navbar a, footer a[href='#myPage']").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},500,(function(){window.location.hash=t}))}})),$(window).scroll((function(){$(".slideanim").each((function(){$(this).offset().top<$(window).scrollTop()+600&&$(this).addClass("slide")}))}));const e=new Date("Feb 1, 2018 00:00:00").getTime(),t=setInterval((function(){const n=(new Date).getTime(),o=e-n;Math.floor(o/864e5),Math.floor(o%864e5/36e5),Math.floor(o%36e5/6e4),Math.floor(o%6e4/1e3);o<0&&clearInterval(t)}),1e3)}))}]);