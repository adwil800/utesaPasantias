

import { createWebHistory, createRouter } from "vue-router";

import notFound from "@/components/utilities/notFound";
import loginPasantia from "@/views/general/loginPasantia";
import solicitudEst from "@/views/student/solicitudEst";
import homePasantia from "@/views/general/homePasantia";

//Admin
import bolsaEmpAdmin from "@/views/admin/bolsaEmpAdmin";
import solicitudAdmin from "@/views/admin/solicitudAdmin";


import { useAxiosStore} from "../../stores/userStore";

const allowReqNavigation = async () => {

  const axiosStore = useAxiosStore();

  const me = await axiosStore.axiosGet("/auth/getme");
  //Prevent navigation if request status is !== onHold: Return to home details
  const reqData = await axiosStore.axiosGet("/pasantia/requeststatus", {studentId: me.data.idusuario});
    if(reqData.success){
      if(reqData.data.status !== "onHold" && reqData.data.status){
          return "/my";
      }
    }

  return true;

}
const isUser = async () => {

  const axiosStore = useAxiosStore();
  const me = await axiosStore.axiosGet("/auth/getme");
  const userLevel = me.data.tipo;

  if(userLevel === "user"){
    return true;
  }else{
    return "/my";
  }

};

const isAdmin = async () => {

  const axiosStore = useAxiosStore();
  const me = await axiosStore.axiosGet("/auth/getme");
  const userLevel = me.data.tipo;

  if(userLevel === "admin"){
    return true;
  }else{
    return "/my";
  }

};

const routes = [
    //General
    { path: '/login', name: "login", component: loginPasantia },
    {path: "/:catchAll(.*)", name: "Not found", component: notFound},

    //Student
    { path: '/my', name: "home", component: homePasantia },
    { path: '/solicitud', name: "solicitud", component: solicitudEst,
      beforeEnter: [isUser, allowReqNavigation],
    },

    //Admin
    { path: '/admin/empleos', name: "empleosAdmin", component: bolsaEmpAdmin,
      beforeEnter: [isAdmin],
    },
    { path: '/admin/solicitud', name: "solicitudAdmin", component: solicitudAdmin,
      beforeEnter: [isAdmin],
    },
   
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;






