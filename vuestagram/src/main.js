import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

import store from './assets/store.js'
//emitter 쓸 때마다 mitt 사용
//app.config.globalProperties.axios=axios; => 모든 vue 파일에서 this.axios로 사용 가능
app.use(store).mount('#app')
