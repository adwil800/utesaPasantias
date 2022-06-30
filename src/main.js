import { createApp } from 'vue'
import App from './App.vue'
import router from "./components/general/routing/routes";


import IGShading from './mixins/IGShading';




createApp(App).use(router).mixin(IGShading).mount('#app');








