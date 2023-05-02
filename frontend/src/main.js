import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//컴포넌트 전역 등록(토글버튼, 스크롤 픽커)
import Toggle from "@vueform/toggle";
import ScrollPicker from 'vue3-scroll-picker';

/* 이모티콘 import*/
import { library } from '@fortawesome/fontawesome-svg-core';

/* 
   원하는 아이콘을 개별적으로 import
*/
import { faHouse, faUser,faCheck,faGear,faTemperatureHalf,faBath,faClock as faClockSolid } from '@fortawesome/free-solid-svg-icons'
import { faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons'

/* import font awesome 컴포넌트 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faHouse,faUser,faCheck,faGear,faBath,faTemperatureHalf,faClockSolid,faClockRegular)


const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.component("Toggle",Toggle);
app.component("ScrollPicker",ScrollPicker)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.mount('#app');
