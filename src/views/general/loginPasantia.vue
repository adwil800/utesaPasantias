<template>
    
        <div class="utesaNavbar">
            <div class="logoContainer">
                <img src="@/assets/logo.gif" class="img-fluid" alt="Logo utesa">
            </div>
        </div>


        <div class="loginForm">

            <span class="sessionInfo" v-if="sessionStore.$state.sessionStatus">{{sessionStore.$state.sessionStatus}}</span>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-hotel"></i>
                <select class="noLeftRadius" v-model="campusId" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                    <option value="" disabled selected>Selecciona tu recinto</option>
                    <option value="2">Santiago</option>
                </select>
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-user"></i>
                <input type="text"  class="noLeftRadius" v-model="username" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-lock"></i>
                <input type="text"  class="noLeftRadius" v-model="psw" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <button class="Ubtn utesaBtn align-self-center" @click="login">ENTRAR</button>

        </div>



</template> 

<script>

import {useUserStore, useSessionStore, useAxiosStore} from "@/stores/userStore";
export default {
    name: "loginPasantia",
    components:{

    },
    data(){
        return{
            userStore: useUserStore(),
            sessionStore: useSessionStore(),
            axiosStore: useAxiosStore(),
            username: "1161609",
            psw: "1161609",
            campusId: "2",
        }
    },
    methods:{
        async login(){


            if(this.username.toString().trim().length < 1 || this.psw.toString().trim().length < 1 || this.campusId.toString().trim().length < 1) return;
            
            const body = {username: this.username, psw: this.psw, campusId: this.campusId};
            
            const res = await this.axiosStore.axiosPost("auth/login", body);

            this.sessionStore.$state.sessionStatus = "";
            if(!res.success){
                //Error message
                alert(res.data)
              
            }else{
                //console.log("Welcome "+res.data.data)
                //Set current user and allow conditional rendering
                this.userStore.setLoggedUser();  
                this.$router.push("/my");
            }


        },
      

    },

}


</script>


<style scoped>
    .utesaNavbar{
      background-color: var(--color60);
      height: 90px;
      margin-bottom: 120px;
    }

    .logoContainer{
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .logoContainer img{
        width: 130px;
        height: 130px;
        margin-top: 20px;
        z-index: 100;
    }


    .loginForm{
        background-color: white;
        padding: 20px;

        display:flex;
        flex-direction: column;

        margin-right: auto;
        margin-left: auto;
        
        height: fit-content;
        width: 400px;
        max-width: 90%;
        padding-top: 40px;
        border-radius: 5px;
    }
    .loginForm .inputGroup{
        margin-bottom: 20px;
    }

    .sessionInfo{ 
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px; 
        font-size: 18px;
        font-weight: 500;
        background-color: rgb(240, 218, 128);
        width: 100%;
        text-align: center;
    }

    



</style>




