(window.webpackJsonp=window.webpackJsonp||[]).push([[22,8,12],{181:function(t,e,n){"use strict";var i=n(5),o=n(25),r=n(26),s=n(126),a=n(68),u=n(10),c=n(51).f,l=n(52).f,d=n(12).f,f=n(186).trim,v=i.Number,p=v,h=v.prototype,_="Number"==r(n(90)(h)),m="trim"in String.prototype,b=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var n,i,o,r=(e=m?e.trim():f(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+e}for(var s,u=e.slice(2),c=0,l=u.length;c<l;c++)if((s=u.charCodeAt(c))<48||s>o)return NaN;return parseInt(u,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(_?u((function(){h.valueOf.call(n)})):"Number"!=r(n))?s(new p(b(e)),n,v):b(e)};for(var g,y=n(9)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)o(p,g=y[x])&&!o(v,g)&&d(v,g,l(p,g));v.prototype=h,h.constructor=v,n(14)(i,"Number",v)}},182:function(t,e,n){"use strict";n.r(e);var i={functional:!0,props:{is:{type:String,default:"div"},content:String},render:function(t,e){var n=e.props;e.data,e.children;return t(n.is,{domProps:{innerHTML:n.content}},n.content)}},o=n(8),r=Object(o.a)(i,void 0,void 0,!1,null,null,null);e.default=r.exports},184:function(t,e,n){t.exports={}},185:function(t,e,n){"use strict";n.r(e);n(181),n(127);var i=n(188),o=n.n(i),r={components:{domel:n(182).default},props:{type:{type:String,default:"div"},text:{type:String,required:!0,validator:function(t){return!!t}},idxOffset:{type:Number,default:0}},data:function(){return{resizeHandler:null}},computed:{words:function(){return this.text.split(" ")}},mounted:function(){var t=this;this.resizeHandler=o()((function(){return t.onResize()}),50),window.addEventListener("resize",this.resizeHandler),setTimeout((function(){return t.onResize()}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeHandler)},methods:{onResize:function(){for(var t=this.$el.querySelectorAll(".word-wrap"),e=t[0].getBoundingClientRect(),n=e.bottom,i=0,o=0;o<t.length;o++)(e=t[o].getBoundingClientRect()).bottom>n&&(i++,n=e.bottom),t[o].style.setProperty("--line-idx",i+this.idxOffset);this.$el.setAttribute("data-line-count",i+1),this.$el.setAttribute("data-word-count",this.words.length),this.$emit("lineCount",i+1),this.$emit("wordCount",this.words.length)}}},s=(n(189),n(8)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.type,{tag:"domel",staticClass:"word-list"},t._l(t.words,(function(e,i){return n("span",{key:i+e,staticClass:"word-wrap",style:"--word-idx:"+i},[n("span",{staticClass:"word"},[t._v(t._s(e))])])})),0)}),[],!1,null,null,null);e.default=a.exports;installComponents(a,{Domel:n(182).default})},186:function(t,e,n){var i=n(4),o=n(32),r=n(10),s=n(187),a="["+s+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var o={},a=r((function(){return!!s[t]()||"​"!="​"[t]()})),u=o[t]=a?e(d):s[t];n&&(o[n]=u),i(i.P+i.F*a,"String",o)},d=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,f=Math.min,v=function(){return c.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=o.test(t);return a||r.test(t)?s(t.slice(2),a?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var i,o,r,s,a,u,c=0,l=!1,_=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,r=o;return i=o=void 0,c=e,s=t.apply(r,n)}function g(t){return c=t,a=setTimeout(x,e),l?b(t):s}function y(t){var n=t-u;return void 0===u||n>=e||n<0||_&&t-c>=r}function x(){var t=v();if(y(t))return w(t);a=setTimeout(x,function(t){var n=e-(t-u);return _?f(n,r-(t-c)):n}(t))}function w(t){return a=void 0,m&&i?b(t):(i=o=void 0,s)}function C(){var t=v(),n=y(t);if(i=arguments,o=this,u=t,n){if(void 0===a)return g(u);if(_)return a=setTimeout(x,e),b(u)}return void 0===a&&(a=setTimeout(x,e)),s}return e=h(e)||0,p(n)&&(l=!!n.leading,r=(_="maxWait"in n)?d(h(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),C.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=o=a=void 0},C.flush=function(){return void 0===a?s:w(v())},C}}).call(this,n(33))},189:function(t,e,n){"use strict";n(184)},225:function(t,e,n){"use strict";n.r(e);var i=n(78);var o=n(91),r=n(59);function s(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||Object(o.a)(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(34),n(15),n(185);var a={data:function(){return{isTransitioning:!1,currentIndex:-1,slideLineCount:[],slideWordCount:[],canGoToNext:[]}},computed:{questionList:function(){return[{content:"What aspect of diversity and inclusion is most important to you?",choices:["Increasing Awareness","Employee Welfare","Monitery Incentive"]},{content:"Donec augue ipsum, consequat ut lobortis in, blandit a lorem.",choices:["Phasellus sapien","Quisque condimentum","Curabitur"]},{content:"Fusce tristique felis pretium, condimentum ex eget, vestibulum leo.",choices:["Donec augue","Nulla gravida","Suspendisse"]}]},bgColor:function(){return{"background-color":["#215865","lavender","red"][this.currentIndex]||""}}},mounted:function(){var t=this;this.canGoToNext=this.questionList.map((function(t){return!1})),this.$nextTick((function(){t.transitionIn(0)}))},methods:{onRadioClick:function(t,e){this.canGoToNext[e]=!0,this.canGoToNext=s(this.canGoToNext)},gotoNext:function(){this.currentIndex!=this.questionList.length-1&&this.gotoIndex(this.currentIndex+1)},gotoIndex:function(t){var e=this;this.isTransitioning||t>=this.questionList.length||(this.isTransitioning=!0,this.transitionOut().then((function(){return e.transitionIn(t)})).then((function(){return e.isTransitioning=!1})))},transitionOut:function(){var t=this;return new Promise((function(e,n){var i=t.$refs.slides[t.currentIndex].querySelector(".questionaire-slide__content");if(!i)return console.error("contentEl not found"),void n();i.__vue__&&i.__vue__.onResize(),i.classList.remove("transition-lines"),i.classList.add("transition-word-opacity"),i.classList.add("show"),setTimeout((function(){var t=450;t+=20*(i.dataset.wordCount||0),i.classList.remove("visible"),i.classList.remove("show"),setTimeout((function(){e()}),t)}),100)}))},transitionIn:function(t){var e=this;return new Promise((function(n,i){var o=e.$refs.slides[t].querySelector(".questionaire-slide__content");if(!o)return console.error("contentEl not found"),void i();o.classList.remove("visible"),o.classList.remove("show"),o.classList.remove("transition-word-opacity"),o.classList.add("no-transition"),setTimeout((function(){o.classList.add("transition-lines"),e.currentIndex=t}),100),setTimeout((function(){o.classList.remove("no-transition")}),150),setTimeout((function(){o.__vue__&&o.__vue__.onResize();var t=450;t+=100*(o.dataset.lineCount||0),o.classList.add("show"),setTimeout((function(){n()}),t)}),200)}))}}},u=n(8),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-questionaire",style:t.bgColor},[n("div",{staticClass:"questionaire-bg"}),t._v(" "),n("div",{staticClass:"container questionaire-wrapper"},[n("div",{staticClass:"questionaire-header"},[n("div",{staticClass:"questionaire-header__label questionaire-header__label--desktop"},[t._v("Let us recommend solutions")]),t._v(" "),n("div",{staticClass:"questionaire-header__label questionaire-header__label--mobile"},[t._v("Recommended Solutions")]),t._v(" "),n("nuxt-link",{staticClass:"questionaire-header__button button button--rounded button--green",attrs:{to:"#",role:"button"}},[t._v("See how we can help")])],1),t._v(" "),n("form",{staticClass:"questionaire-carousel"},[t._l(t.questionList,(function(e,i){return[n("div",{key:i,ref:"slides",refInFor:!0,staticClass:"questionaire-slide",class:{"questionaire-slide--active":t.currentIndex==i}},[n("break-words",{staticClass:"questionaire-slide__content transition-word-opacity",class:{show:0==i},attrs:{text:e.content},on:{lineCount:function(e){t.slideLineCount[i]=e},wordCount:function(e){t.slideWordCount[i]=e}}},[t._v(t._s(e.content))]),t._v(" "),n("div",{staticClass:"questionaire-slide__choice-list"},[t._l(e.choices,(function(e,o){return n("div",{key:e,staticClass:"questionaire-slide__choice ",attrs:{role:"button"}},[n("input",{attrs:{type:"radio",name:"q"+i,id:"slide"+i+"-radio"+o},domProps:{value:e}}),t._v(" "),n("label",{staticClass:"button button--rounded",attrs:{for:"slide"+i+"-radio"+o},on:{click:function(e){return t.onRadioClick(e,i)}}},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"questionaire-slide__choice questionaire-slide__choice--next button button--rounded button--black",class:{active:t.canGoToNext[i]},attrs:{role:"button"},on:{click:t.gotoNext}},[n("span",[t._v("Next Step ("+t._s(i+1)+"/"+t._s(t.questionList.length)+")")])])],2)],1)]}))],2),t._v(" "),n("div",{staticClass:"questionaire-navigation"},t._l(t.questionList,(function(e,i){return n("button",{key:e.content,staticClass:"questionaire-nav__index",class:{"questionaire-nav__index--active":t.currentIndex==i},attrs:{role:"button"},on:{click:function(e){return e.preventDefault(),t.gotoIndex(i)}}},[t._v("\n\t\t\t\t"+t._s(i<10?"0":"")+t._s(i+1)+"\n\t\t\t")])})),0)])])}),[],!1,null,null,null);e.default=c.exports;installComponents(c,{BreakWords:n(185).default})}}]);