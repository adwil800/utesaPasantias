<template>

    <navbarPasantia @toggleSidebar="toggleSidebar"/>
    <sidebarMenu :toggled="isToggled" :removeReqAccess="isReqInProcess" :user="isUser"/>

    <div id="mainContent" > 
        <router-view/>
    </div>

</template>

<script>

import sidebarMenu from "@/components/routing/sidebarMenu.vue"
import navbarPasantia from "@/components/utilities/navbarPasantia.vue"
import windowResize from "@/mixins/windowResize";
import { useAxiosStore, useUserStore } from "@/stores/userStore";

export default {
  name: 'appPasantia',
  components: {
    sidebarMenu,
    navbarPasantia
  },
  mixins: [windowResize],
  data(){
    return{
      isToggled: false,
      isReqInProcess: false,
      isUser: "",
      axiosStore: useAxiosStore(),
      userStore: useUserStore(),
    }
  },
  methods:{

    toggleSidebar(){
        this.isToggled = !this.isToggled;
    },
    async requestStatus(){

      const userLevel = this.userStore.$state.userData.tipo;
      if(userLevel === "user"){
        this.isUser = true;
      }else{
        this.isUser = false;
      }

      //Request information
      const reqData = await this.axiosStore.axiosGet("/pasantia/requeststatus", {studentId: this.userStore.$state.userData.idusuario});
      if(reqData.success){
          if(reqData.data.status === "pending"){
              this.isReqInProcess = true;
          }
      }

      if(!this.isUser){ //is admin
        //Dont show solicitudes est
        this.isReqInProcess = true;
      } 

    }, 

  }, 
  watch:{

    mixinCurrentWidth(){
      this.mixinCurrentWidth < 850 ? this.isToggled = true : this.isToggled = false;
    }, 

    '$route' (){

        //If sidebar is absolute collapse it on every route change
        if(this.mixinCurrentWidth < 850){
          this.isToggled = true;
        }

      this.requestStatus();    

    }

  },
  mounted(){
    this.requestStatus();    
  },

}
</script>

<style scoped>
 
  /*Sidebar styling*/
    
    .v-sidebar-menu {
      background-color: var(--sidebarBg);
    }
    .v-sidebar-menu {
      position: relative;
      float: left;
      height: calc(100vh - 58px);

    }
    
    @media only screen and (max-width: 850px) {
      .v-sidebar-menu {
        position: absolute;
        margin-top: 58px;
        height: calc(100vh - 58px);

      }
      #mainContent{
        margin-left: 45px;
      }
    }
    .v-sidebar-menu >>> .vsm--link.vsm--link_level-1{
      padding: 5px 15px 5px 6.5px !important;
    } 
    
    @media only screen and (max-width: 300px) {
        #mainContent{
          overflow-x: auto !important;
        }
    }
  /*Sidebar styling*/











  #mainContent{
    overflow-x: hidden;
    overflow-y: auto;
    overflow-wrap: break-word;
    height: calc(100vh - 58px);
  }

</style>


