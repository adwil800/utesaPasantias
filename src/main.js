import { createApp, markRaw } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//Mixins
import IGShading from './mixins/IGShading';

import App from './App.vue'
import router from "./components/general/routing/routes";

//PINIA global state management
import { createPinia } from 'pinia';
const pinia = createPinia();

pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

import {useUserStore} from "./stores/userStore";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5500/';

const app = createApp(App);
      app.use(pinia);
      app.use(router)
      app.use(VueAxios, axios)
      app.mixin(IGShading)
      app.mount('#app');



//Navigation guards

router.beforeResolve( async (to, from) => {

    const userStore = useUserStore();
    //Update current login state
          userStore.getLoggedUser();

    PINIA DOESNT WORK WITH NAVIGATION GUARDS

    console.log("FROM: ", from.path)

    //   '/solicitud' '/admin/empleos' '/admin/solicitud'
  
        switch(to.path){
            //DONE
            case "/": { 
                console.log("HOME: ", userStore.$state.isLogged);
                if(!userStore.$state.isLogged){
                    return "/login";
                } 

                break;
            }
            

            case "/solicitud": {
                if(!userStore.$state.isLogged){
                    return "/login";
                }

                break;
            }
            

            //DONE
            case "/login": {

                if(userStore.$state.isLogged){
                    return false;
                }

                break;
            }
            //DONE
            case "/logout": {


                if(userStore.$state.isLogged){

                    const res = await axios.get("auth/logout");
                    //User logged out
                    if(res.data.success){
                        userStore.$state.userData = {};
                        userStore.$state.isLogged = false;
                    } 

                    return "/login";

                }else{
                    return "/login";
                }

            }

            //DONE
            default: {
                    return "/";
            }
        }


  })












