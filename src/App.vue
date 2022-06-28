<template>

  <div v-if="isLogged">
    <appPasantia />
  </div>
  <div v-else >
    <loginPasantia @login="authenticateUser"/>
  </div>


</template>

<script>

import loginPasantia from "@/components/general/loginPasantia.vue";
import appPasantia from "@/components/general/appPasantia.vue";
import router from "@/components/general/routing/routes";

export default {
  name: 'App',
  components: {
    loginPasantia,
    appPasantia
  },
  mixins:[router],
  data(){
    return{
      isLogged: false,
    }
  },
  methods:{

    authenticateUser(credentials){

        //Auth user
        console.log(credentials);

        this.$router.push("/solicitud");
        this.isLogged = true;



    }, 
    logout(){
        this.isLogged = false;
    }

  }, 
  watch:{
    '$route' (to, from){
        //Check for login and logout
        const toPath = to.path.replace("/", "");
        const fromPath = from.path.replace("/", "");

        switch(toPath.toLowerCase()){
          case "logout": 
              this.logout();
              this.$router.push("login");
            break;

          case "login":
              if(this.isLogged){
                this.$router.push(fromPath);
                //Prevent navigation
              }
            break;
          
          default: 
              if(!this.isLogged){
                this.$router.push("login")
              }
            break;
        }
    }
  },

}


</script>

<style> 

  /**GENERAL */
  :root{
    --color60: #009788;
    --color60Hover: #028b7d;
    --sidebarBg: #222D32;
    --sidebarActiveLink: #0D1214;
    --htmlBg: #E5E5E5;

  }

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
  
  span, label {
      font-size: 16px;
  }

  input, select{
      transition: ease 0.2s;
      background: white;
  }
  input:focus, select:focus{
      box-shadow:  0px 0px 5px var(--color60);
      background-color: transparent;
      resize: none;
      outline: none;
  }


  input[type="text"], select{
    width: 100%;
    border-radius: 3px;
    border: solid 1.3px gray; 
    height: 38px;
    font-size: 16px;
    padding-left: 5px;
  }
  .bold{
      font-weight: bold;
  }

  .Ubtn{
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: ease 0.3s;
  }

  .utesaBtn{
    background-color: var(--color60);
    color: white;
  }
  .utesaBtn:hover{
    color: white;
    background-color: var(--color60Hover);
  }
  .utesaBtn:focus{
    box-shadow:  0px 0px 5px var(--color60);
  }

  .flexSelfCenter{
    align-self: center;
  }

  .hidden{
    display:none;
  }


</style>
