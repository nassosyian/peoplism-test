(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{181:function(t,e,r){"use strict";var i=r(5),n=r(25),s=r(26),a=r(126),o=r(68),u=r(10),c=r(51).f,f=r(52).f,h=r(12).f,l=r(186).trim,p=i.Number,m=p,g=p.prototype,N="Number"==s(r(90)(g)),w="trim"in String.prototype,d=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var r,i,n,s=(e=w?e.trim():l(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var a,u=e.slice(2),c=0,f=u.length;c<f;c++)if((a=u.charCodeAt(c))<48||a>n)return NaN;return parseInt(u,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(N?u((function(){g.valueOf.call(r)})):"Number"!=s(r))?a(new m(d(e)),r,p):d(e)};for(var v,I=r(9)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)n(m,v=I[k])&&!n(p,v)&&h(p,v,f(m,v));p.prototype=g,g.constructor=p,r(14)(i,"Number",p)}},186:function(t,e,r){var i=r(4),n=r(32),s=r(10),a=r(187),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t,e,r){var n={},o=s((function(){return!!a[t]()||"​"!="​"[t]()})),u=n[t]=o?e(h):a[t];r&&(n[r]=u),i(i.P+i.F*o,"String",n)},h=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},232:function(t,e,r){"use strict";r.r(e);r(181);var i=0,n={props:{aspect:{type:String,default:"xMidYMid"},width:{type:Number,required:!0},height:{type:Number,required:!0},imgUrl:{type:String,required:!0},maskUrl:{type:String,default:""}},computed:{viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},maskID:function(){return"_pngMask"+i}},beforeMount:function(){i++}},s=r(8),a=Object(s.a)(n,(function(){var t=this.$createElement;this._self._c;return this.maskUrl?this._m(0):this._m(1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{preserveAspectRatio:this.aspect,version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:this.viewBox}},[e("defs",[e("mask",{attrs:{id:this.maskID}},[e("image",{staticClass:"mask-img",attrs:{width:"100%",height:"100%","xlink:href":this.maskUrl}})])]),this._v(" "),e("image",{staticClass:"color-img",attrs:{mask:"url(#"+this.maskID+")",width:"100%",height:"100%","xlink:href":this.imgUrl}})])},function(){var t=this.$createElement;return(this._self._c||t)("image",{attrs:{"xlink:href":this.imgUrl}})}],!1,null,null,null);e.default=a.exports}}]);