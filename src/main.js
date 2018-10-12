// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ToyRouter from './plugins/ToyRouter';

Vue.config.productionTip = false;
Vue.use(ToyRouter);

const toyRouter = new ToyRouter();
/* eslint-disable no-new */
window.vm = new Vue({
  beforeCreate() {},
  el: '#app',
  render: h => h(App),
  toyRouter
});
