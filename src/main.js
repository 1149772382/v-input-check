import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import InputCheck from './directive/inputCheck.js';


Vue.use(ElementUI);
Vue.use(InputCheck);

new Vue({
  el: '#app',
  render: (h) => h(App),
})