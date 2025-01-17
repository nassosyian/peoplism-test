// plugins/jsonld.js
import Vue from 'vue';
import NuxtJsonld from 'nuxt-jsonld';
 
Vue.use(NuxtJsonld);
 
// you can set the indentation
Vue.use(NuxtJsonld, {
  space: process.env.NODE_ENV === 'production' ? 2 : 4, // default: 2
});