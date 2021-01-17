import Vue from 'vue'
import App from './App.vue'
import ComponentGlobal from './components/Component-Global'
import ComponentLocal from './components/Component-Local'

Vue.config.productionTip = false

Vue.component('contador-global', ComponentGlobal)
Vue.component('contador-local', ComponentLocal)

new Vue({
  render: h => h(App),
}).$mount('#app')
