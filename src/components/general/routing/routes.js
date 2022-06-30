

import { createWebHistory, createRouter } from "vue-router";

import notFound from "@/components/general/utilities/notFound";
import loginPasantia from "@/components/general/loginPasantia";
import solicitudEst from "@/components/student/solicitudEst";
import bolsaEmpEst from "@/components/student/bolsaEmpEst";
import homePasantia from "@/components/general/homePasantia";

const routes = [
    { path: '/', name: "home", component: homePasantia },
    { path: '/login', name: "login", component: loginPasantia },
    { path: '/solicitud', name: "solicitud", component: solicitudEst },
    { path: '/empleos', name: "empleos", component: bolsaEmpEst },
    {path: "/:catchAll(.*)", name: "Not found", component: notFound},
    
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
/**router.beforeEach((to, from) => { //next: callback or any third argument

    //Verify authentication
    const toPath = to.path.replace("/", "");
    const fromPath = from.path.replace("/", "");
        console.log(fromPath + " to " + toPath)
    if(toPath.toLowerCase() !== "login"){
        console.log("test auth")
    }else{
      //Sign out
    }

    //Log something
    //Return false: Cancel routing
    //Return {name: routeName}: Reroute

  })
 */





