<template>
  
    <SidebarMenu 
    :menu="[
        {
          href: '/my',
          title: 'Home',
          icon: 'fa fa-house',
          //external: true, opens external window
        },
        {
          href: '/solicitud',
          title: 'Solicitar pasantia',
          icon: 'fa fa-hotel',
          hidden: removeReqAccess,
        },
        {
          href: '/admin/solicitud',
          title: 'Solicitudes de pasantia',
          icon: 'fa fa-key',
          hidden: user,
        },
        {
          href: '/admin/empleos',
          title: 'Bolsa de empleos',
          icon: 'fa fa-key',
          hidden: user,
        },
      ]" 
    :showOneChild="true"  
    :width="'245px'" 
    :widthCollapsed="'45px'" 
    :collapsed="toggled" 
    :hideToggle="true" 
    
    >
        
      <template v-slot:header>

          <div class="sidebarHeader">
          </div>
        
      </template>
      
    </SidebarMenu>
   


</template>

<script>

import { SidebarMenu } from '@adwil800/vue-sidebar-menu';
import '@adwil800/vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default {
  name: "sidebarMenu",
  components: {
    SidebarMenu
  },
  props:{
    toggled: {
      type: Boolean,
      default: false,
    },
    removeReqAccess:{
      type: Boolean,
      default: false,
    },
    user:{
      type: Boolean,
      default: true,
    }
  },

}
</script>

<style scoped>
  
  .sidebarHeader{
    height: 45px;
    color: white;
    background-color: red;
  }

  
    
</style>