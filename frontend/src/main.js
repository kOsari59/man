import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//컴포넌트 전역 등록(토글버튼, 스크롤 픽커)
import Toggle from "@vueform/toggle";
import ScrollPicker from 'vue3-scroll-picker';
import axios from 'axios'


const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.component("Toggle",Toggle);
app.component("ScrollPicker",ScrollPicker)
app.mount('#app');
