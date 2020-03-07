import Vue from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then().catch()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
