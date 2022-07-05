

import { createWebHistory, createRouter } from "vue-router";

import notFound from "@/components/general/utilities/notFound";
import loginPasantia from "@/components/general/loginPasantia";
import solicitudEst from "@/components/student/solicitudEst";
import homePasantia from "@/components/general/homePasantia";

//Admin
import bolsaEmpAdmin from "@/components/admin/bolsaEmpAdmin";
import solicitudAdmin from "@/components/admin/solicitudAdmin";

const routes = [
    //General
    { path: '/login', name: "login", component: loginPasantia },
    {path: "/:catchAll(.*)", name: "Not found", component: notFound},

    //Student
    { path: '/', name: "home", component: homePasantia },
    { path: '/solicitud', name: "solicitud", component: solicitudEst },

    //Admin
    { path: '/admin/empleos', name: "empleosAdmin", component: bolsaEmpAdmin },
    { path: '/admin/solicitud', name: "solicitudAdmin", component: solicitudAdmin },

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





