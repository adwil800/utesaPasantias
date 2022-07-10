<template>
  
    <div class="sidebarNavbar">

          <div class="navbarGrid">

              <div class="preToggler"> 
                  {{formattedUserInfo}} &nbsp;
                  <i class="fa-solid fa-right-from-bracket logout" @click="logout"></i>
              </div>

              <div class="toggler">
                <i class="fa-solid fa-bars" @click="emitToggle"></i>
              </div>

              <div class="postToggler ">
                  <img src="@/assets/logo.gif" alt="Logo utesa" @click="goHome">
                  <span class="overflowDisplay">UNIVERSIDAD TECNOLÓGICA DE SANTIAGO - UTESA  ( SEDE - SANTIAGO )</span>
              </div>

          </div>


    </div>
</template>

<script>
import {useUserStore} from "@/stores/userStore";
export default {
  name: "navbarPasantia",
  data(){
    return{
      userStore: useUserStore(),
    }
  },
  methods:{
    emitToggle(){
      this.$emit("toggleSidebar");
    },
    goHome(){
      this.$router.push("/");
    },
    logout(){
      
      this.userStore.logoutUser();

    }
  },
  computed:{
    formattedUserInfo(){
      const name = this.userStore.$state.userData.nombre.split(" ")[0]; 
      const lastname = this.userStore.$state.userData.apellido.split(" ")[0]; 
      const username = this.userStore.$state.userData.usuario;
      
      return name + " " + lastname + " " + username; 
    }
  },
  emits:["toggleSidebar"],
}
</script>

<style scoped>

    .logout{
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .logout:hover{
      color: lightcoral
    }


    .sidebarNavbar{
      background-color: var(--color60);
      font-weight: 500;
      height: 58px;
    }
     
    .navbarGrid{
      display: inline-flex;
      color: white;
      width: 100vw;
    }
    .navbarGrid div{
      height: 58px;
      display: flex;
      align-items:center;
      justify-content:center;
    }

    .preToggler{
      width: 245px;
      max-width: 245px;
      background-color: #007D71;
    }
    .toggler{
      max-width: 50px;
    }
    .toggler i{
      font-size: 20px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      height: 58px;
      width: 50px;
      display: flex;
      align-items:center;
      justify-content:center;
    }
    .toggler i:hover{
      background-color: #00796E;
    }
    .postToggler{
      margin-left: auto;
      margin-right: auto;
      
    }
    .postToggler img{
      width: 58px;
      cursor: pointer;
      transition: ease 0.3s;
    }
    .postToggler img:hover{
      opacity: 0.8;
    }



    @media only screen and (max-width: 960px) {
      .overflowDisplay{
        display: none;
      }

    }

    @media only screen and (max-width: 576px) {
        
              
      @media (hover: none) {
        .toggler i:hover { background-color: inherit; }
      }
      .toggler i:active{
        background-color: #00796E;
      }
      .postToggler img:active{
        opacity: 0.6;
      }

    }


</style>