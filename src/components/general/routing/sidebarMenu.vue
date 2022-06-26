<template>
  
    <SidebarMenu :menu="menu" :showOneChild="true"  :width="'245px'" :widthCollapsed="'45px'" >
        
      <template v-slot:header>

          <div class="sidebarHeader">
          </div>
        
      </template>
      
    </SidebarMenu>
   


</template>

<script>

import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

  export default {
    name: "sidebarMenu",
    components: {
      SidebarMenu
    },
    data() {

      return {
        menu: [


          {
            href: '/solicitud',
            title: 'Solicitar pasantia',
            icon: 'fa fa-hotel'
          },
          {
            href: '/st1',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            title: 'Charts',
            icon: 'fa fa-home',
            child: [
              {
                href: '/st2',
                title: 'Sub Link'
              }
            ]
          }


        ]
      }

    }

  }
</script>

<style scoped>
  
  .sidebarHeader{
    height: 45px;
    color: white;
    background-color: red;
  }
    
  
</style>