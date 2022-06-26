

import { createWebHistory, createRouter } from "vue-router";

import studentOne from "@/components/student/studentOne";
import studentTwo from "@/components/student/studentTwo";
import solicitudPasantia from "@/components/student/solicitudPasantia";



const routes = [
    { path: '/st1', component: studentOne },
    { path: '/st2', component: studentTwo },
    { path: '/solicitud', component: solicitudPasantia },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/*/Navigation security
router.beforeEach((to, from) => { //next: callback or any third argument

    //Verify authentication
    //Log something
    //Return false: Cancel routing
    //Return {name: routeName}: Reroute

})*/



export default router;





