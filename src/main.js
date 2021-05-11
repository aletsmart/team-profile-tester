import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from '@/router';
import TeamProfile from '@golstats/team-profile';
import buefy from 'buefy';
import VueTagManager from 'vue-tag-manager';
import VueObserveVisibility from 'vue-observe-visibility';
import '@mdi/font/css/materialdesignicons.css';
import 'alets-fonts/css/fonts.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
Vue.use(buefy)
Vue.use(Vuex)
const store = new Vuex.Store({})
Vue.use(TeamProfile, { store });
Vue.use(VueObserveVisibility)
Vue.use(VueTagManager, {
  gtmId: 'GTM-KN7LT27',
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
