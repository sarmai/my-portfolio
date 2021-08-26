import Vue from 'vue'
import App from './App.vue'
import './assets/styles/normalize.css'
import './assets/styles/utilities.css'
import './assets/styles/colors.css'
import './assets/styles/styles.css'
import router from './router'


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')