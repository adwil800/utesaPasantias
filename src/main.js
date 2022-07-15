import { createApp, markRaw } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//Mixins
import IGShading from './mixins/IGShading';

import App from './App.vue'
import router from "./components/routing/routes";

//PINIA global state management
import { createPinia } from 'pinia';
const pinia = createPinia();

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

import {useUserStore} from "./stores/userStore";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5500/api';

const app = createApp(App);
      app.use(pinia);
      app.use(router);
      app.use(VueAxios, axios);
      app.mixin(IGShading);
      app.mount('#app');

//Navigation guards



router.beforeResolve( async (to, from) => {
 
    const userStore = useUserStore();

    //Update current login state
    const isLogged = await userStore.isUserLogged();
          
    if(isLogged) userStore.setLoggedUser();
    else{
        if(userStore.$state.userData.loggedOut){
            userStore.$state.sessionInfo.sessionStatus = ""
        }
        userStore.$state.isLogged = false;
        userStore.$state.userData = {};
    }
    //console.log(userStore.$state.userData)
    //console.log("Is logged: ", isLogged, " from path: ", from.path, " to path: ", to.path)

        switch(to.path){

            //DONE
            case "/login": {
                if(from.path === "/"){
                    userStore.$state.sessionInfo.sessionStatus = ""
                }
                if(isLogged){
                    console.log("tried to go to login")
                    return "/my";
                }
                break;
            }

            //DONE - WHICHEVER ROUTE IT IS IT WILL SEND ME BACK HOME, 404 SITE NOT WORKING
            default: {
                if(!isLogged){
                    return "/login";
                }
            }
        }


  })












