import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import elementPlus from 'element-plus';

const app = createApp(App)
app.use(router)
app.use(elementPlus)
app.mount('#app')

// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出る
// 以下はVue3.0系で削除された
// Vue.config.productionTip = false