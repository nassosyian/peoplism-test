(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{180:function(t,e,s){"use strict";s(181);var n=s(183);e.a={props:{durationSec:{type:Number,default:1}},data:function(){return{svgPathLength:0,progress:0}},computed:{svgStyle:function(){return{"stroke-dasharray":this.svgPathLength,"stroke-dashoffset":(1-this.progress)*this.svgPathLength}}},mounted:function(){this.$refs.writeon?(this.svgPathLength=this.$refs.writeon.getTotalLength(),this.$el&&(this.$el.style.opacity=1)):console.error('no "writeon" ref found')},methods:{play:function(){var t=this;n.a.fromTo(this,{progress:0},{progress:1,duration:this.durationSec,ease:"power3.inOut",onComplete:function(){t.$emit("play-ended")}})}}}},203:function(t,e,s){"use strict";s.r(e);var n={mixins:[s(180).a]},r=s(8),i=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"needle-underline-svg svg-writeon",staticStyle:{opacity:"0","enable-background":"new 0 0 211.6 29.7"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 211.6 29.7","xml:space":"preserve","aria-hidden":"true",focusable:"false",role:"img"}},[e("mask",{attrs:{id:"needle-mask"}},[e("path",{staticStyle:{fill:"white"},attrs:{id:"mask",d:"M184.2,5.4c-18.4-1.8-39.3-2.4-70.7-2c-43,0.6-57.2,1.2-75.3,3.3c-9.2,1-16.8,1.6-16.8,1.1\n\t\tc0-1.4-18,3.6-18.6,5.1C2,15.1,4,15.2,13.9,13.5c6.6-1.1,9.5-1.2,9.6-0.3c0.4,2.2,6.2,2.8,27.7,2.6c33.4-0.1,68.1,2.1,112.8,7.3\n\t\tc8.9,1,17.2,2.1,18.4,2.4c4.7,1.1,7.5,1,8.1-0.3c0.8-2-3.9-2.9-31.2-6.4c-38.7-4.9-70.6-7.1-108.8-7.3c-5.3-0.1,5.2-1.1,18.8-2\n\t\tc35.8-2.2,55.6-1.9,103.8,1.6c15.1,1.1,28.2,1.8,29.3,1.7c1-0.1,2.1-0.9,2.4-1.6C205.6,8.9,198.2,6.8,184.2,5.4z"}})]),this._v(" "),e("path",{ref:"writeon",style:this.svgStyle,attrs:{mask:"url(#needle-mask)",fill:"none",stroke:"#DBE0FA","stroke-width":"6","stroke-miterlimit":"10",d:"M23.4,6L0.9,12.8l25.8-2.9\nc0,0,54.2-6.8,69.2-6.8s25,0,25,0s75.3-0.3,84.5,4.3s-4.5,4.2-4.5,4.2S147.1,7.9,99.6,6.8c-63.8-1.5-76,5.7-76,5.7L78.4,14\nc3.1,0.1,39.6,2.3,42.7,2.7l77.3,10.1"}})])}),[],!1,null,null,null);e.default=i.exports}}]);