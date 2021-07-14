import Vue from 'vue';
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(VueSmoothScroll, {updateHistory: false, //(window && window.innerWidth < 780 ? false : true), 
							offset:  (window && window.innerWidth < 780 ? 0 : -92),  })