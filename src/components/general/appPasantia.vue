<template>


    <navbarPasantia @toggleSidebar="toggleSidebar"/>
    <sidebarMenu :toggled="isToggled"/>

    <div id="mainContent" > 
        <router-view/>
    </div>

</template>

<script>

import sidebarMenu from "@/components/general/routing/sidebarMenu.vue"
import navbarPasantia from "@/components/general/utilities/navbarPasantia.vue"
import windowResize from "@/mixins/windowResize";

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
    }
  },
  methods:{

    toggleSidebar(){
        this.isToggled = !this.isToggled;
    },
  }, 
  watch:{

    mixinCurrentWidth(){
      this.mixinCurrentWidth < 850 ? this.isToggled = true : this.isToggled = false;
    }, 

    
  }

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


