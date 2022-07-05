<template>
  
    <SidebarMenu 
    :menu="menu" 
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

import { SidebarMenu } from '@adwil800/vue-sidebar-menu'
import '@adwil800/vue-sidebar-menu/dist/vue-sidebar-menu.css'

  export default {
    name: "sidebarMenu",
    components: {
      SidebarMenu
    },
    props:{
      toggled: {
        type: Boolean,
        default: false,
      }
    },
    data() {

      return {
        menu: [

          {
            href: '/logout',
            title: 'Logout',
            icon: 'fa fa-user'
          },
          {
            href: '/',
            title: 'Home',
            icon: 'fa fa-house'
          },
          {
            href: '/solicitud',
            title: 'Solicitar pasantia',
            icon: 'fa fa-hotel'
          },
          {
            title: 'Admin',
            icon: 'fa fa-admin',
            child: [
              {
                href: '/admin/solicitud',
                title: 'Solicitudes pasantia'
              },
              {
                href: '/admin/empleos',
                title: 'Bolsa empleos',
              }
            ]
          }


        ],
          
      }

    },
    methods:{

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