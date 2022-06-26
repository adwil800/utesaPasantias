<template>


        <div class="sidebarNavbar">

            <div class="navbarGrid">

                <div class="preToggler"> 
                    Locky - 1 16 1609
                </div>

                <div class="toggler">
                  <i class="fa-solid fa-bars" @click="toggleSidebar"></i>
                </div>

                <div class="postToggler">
                    <img src="./assets/logo.gif" alt="Logo utesa">
                    <span>UNIVERSIDAD TECNOLÓGICA DE SANTIAGO - UTESA  ( SEDE - SANTIAGO )</span>
                </div>

            </div>


        </div>

      <sidebarMenu/>

      <div id="mainContent" > 
      
        <router-view/>
        
      </div>


</template>

<script>

import sidebarMenu from "@/components/general/routing/sidebarMenu.vue"

export default {
  name: 'App',
  components: {
    sidebarMenu
  },
  methods:{

    toggleSidebar(){
      document.querySelector(".vsm--toggle-btn").click();
    }

  }

}



</script>

<style> 


  :root{
    --color60: #009788;
    --sidebarBg: #222D32;
    --sidebarActiveLink: #0D1214;
    --htmlBg: #E5E5E5;

  }
  /*Sidebar styling*/
    
    .v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open,
    .v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open .vsm--icon{
      background-color: var(--sidebarActiveLink) !important;
    }

    .v-sidebar-menu {
      background-color: var(--sidebarBg);
    }
    .v-sidebar-menu .vsm--link_active {
      box-shadow: inset 3px 0 0 0 var(--color60) !important;
    } 
    
    .v-sidebar-menu {
      position: relative;
      float: left;
      height: calc(100vh - 50px);
      opacity: 0.3;
      /*margin-right:10px; */
    }

    .v-sidebar-menu .vsm--title{
      font-weight: normal;
      font-size: 15px;
    }

    .v-sidebar-menu.vsm_collapsed .vsm--link_level-1.vsm--link_hover .vsm--icon{
      transition: all 0.3s;
      background-color: var(--color60);
    }

    .vsm--link.vsm--link_level-1{
      padding: 5px 15px 5px 6.5px !important;
    }
    .v-sidebar-menu .vsm--toggle-btn {
      display: none;
    }

    .vs--mobile-bg{
      background: red;
    }
    .v-sidebar-menu .vsm--mobile-bg{
      background-color: var(--color60) !important;
    }



    .sidebarNavbar{
      height: 50px;
      background-color: var(--color60);
    }
     
    .navbarGrid{
      display: inline-flex;
      color: white;
    }
    .navbarGrid div{
      height: 50px;
    }

    .preToggler{
      width: 245px;
      max-width: 245px;
      background-color: #007D71;
      display: flex;
      align-items:center;
      justify-content:center;
    }
    .toggler{
      max-width: 42px;
    }
    .toggler i{
      font-size: 20px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      padding: 13px;
      height: 50px
    }
    .toggler i:hover{
      background-color: #00796E;
    }
    .postToggler{
      width: calc(100vw - 295px);
      max-width: calc(100vw - 295px);
    }
    .postToggler img{
      width: 50px;
      margin-left: 50px;
      margin-right: 30px;
    }


  /*Sidebar styling*/


  .red{
    background-color: lightcoral;
  }
  .blue{
    background-color: lightblue;
  }


  body, html{
    margin: 0;
    padding: 0;
    background-color:var(--htmlBg);
  }


  #mainContent{
    overflow: hidden;
    overflow-wrap: break-word;
  }




  /**GENERAL */
  label{
    font-size: 14px;
  }

  input{
      transition: ease 0.2s;
  }

  input:focus{
      background: red;
      box-shadow:  0px 0px 5px var(--color60);
      background-color: transparent;
      resize: none;
      outline: none;
  }

  .bold{
      font-weight: bold;
  }
</style>
