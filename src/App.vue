<template>

  <div v-if="userStore.$state.isLogged">
    <appPasantia />
  </div>
  <div v-else >
    <loginPasantia/>
  </div>

</template>

<script>

import loginPasantia from "@/views/general/loginPasantia.vue";
import appPasantia from "@/views/general/appPasantia.vue";


import {useUserStore} from "@/stores/userStore";
export default {
  name: 'App',
  components: {
    loginPasantia,
    appPasantia
  },
  data(){
    return{
      userStore: useUserStore(),
    }
  },
  created(){

    this.userStore.setLoggedUser();
  }

}



</script>

<style> 

  /**GENERAL */
  :root{
    --color60: #009788;
    --color60Hover: #037d71;
    --sidebarBg: #222D32;
    --sidebarActiveLink: #0D1214;
    --htmlBg: #E5E5E5;
    --htmlBgHover: #afabab8c;

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
    overflow-x: hidden;
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


  input[type="text"], select, input[type="password"]{
    width: 100%;
    border-radius: 3px;
    border: solid 1.3px gray; 
    height: 38px;
    font-size: 16px;
    padding-left: 5px;
  }
  .bold{
      font-weight: bold !important;
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

  .utesaForm{
      box-shadow:  0px 0px 5px gray;
      border-radius: 10px;
      background-color: white;
      margin-bottom: 30px;
      padding: 30px  30px 30px;
  }

  .formHeader span{
      font-size: 27px;
      font-weight: 350;
      margin-bottom: 15px;
  }
  
  @media only screen and (max-width: 576px) {
      
    .formHeader span{
        font-size: 23px;
    }

  }
  
    .compHeader{
        display: flex;
        padding: 15px;
        background-color: white;
        margin-bottom: 30px; 
    }
    .compHeader i{
        font-size: 40px;
        align-self: center;
    }
    .compHeader span{
        font-size: 30px;
        margin-left: 40px;
    }



    .inputGroup{
        display: flex;
    }
    .noLeftRadius{
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
    }
    .noRightRadius{
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }
    .inputGroup button{
      height: 38px !important;
    }
    .inputGroupAddon{
        transition: ease 0.3s;
        display: flex;
        align-items: center;
        padding: 0.370rem 0.70rem;
        font-size: 18px;
        color: white;
        white-space: nowrap;
        background-color: var(--color60);
        border: 1px solid var(--color60);
        border-radius: 3px;
    }










    
/**TRANSITION animation */
.bounce-enter-active {
  animation: bounce-in 0.3s;
  overflow: hidden;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
  overflow: hidden;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 576px) {
            
    .bounce-enter-active {
    animation: bounce-in 0.5s; 
    }
    .bounce-leave-active {
    animation: bounce-in 0.5s reverse; 
    }
    
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
    }

}
/**TRANSITION animation */

a{
  text-decoration: none;
}

a:hover, a:active{
  text-decoration: underline;
}


    .skillSet{
        list-style-type: none;
        padding: 0;
    }

    .skillSet li{
        padding: 5px;
        border-radius: 10px;
        background-color: var(--htmlBg);        
        max-width: fit-content;
        margin: 3px;
        font-weight: 500;
        display: inline-block;
        position: relative;
        transition: ease 0.3s;
        cursor: pointer;

        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
    }
    .skillSet li:hover, .skillSet li:active{ /**Handle dbl click to remove skill */
        background-color: var(--htmlBgHover);
    } 
</style>
