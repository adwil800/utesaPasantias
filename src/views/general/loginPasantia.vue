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
                <select class="noLeftRadius" v-model="userData.campusId" name="campusId" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                    <option value="" disabled selected>Selecciona tu recinto</option>
                    <option v-for="campus in campuses" :key="campus.idrecinto" :value="campus.idrecinto">{{campus.nombre}}</option>
                </select>
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-user"></i>
                <input type="text"  class="noLeftRadius" v-model="userData.username" name="username" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-lock"></i>
                <input type="password"  class="noLeftRadius" v-model="userData.psw" name="psw" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <button class="Ubtn utesaBtn align-self-center" @click="login">ENTRAR</button>

        </div>

    <Transition name="bounce">
        <errorHandler v-if="showError" @removeError="toggleShowNotification" :isLogin = "true" :message="errorMessage"/>
    </Transition>

</template> 

<script>

        import errorHandler from "@/components/utilities/errorHandler";
        import {useUserStore, useSessionStore, useAxiosStore} from "@/stores/userStore";

export default {
    name: "loginPasantia",
    components:{
        errorHandler
    },
    data(){
        return{
            userStore: useUserStore(),
            sessionStore: useSessionStore(),
            axiosStore: useAxiosStore(),

            userData: {
                campusId: "2",
                username: "1123342",
                psw: "1123342",
            },

            campuses: [],
            
        }
    },
    methods:{

        async login(){


            for (const key in this.userData) {
                if(this.userData[key].toString().trim().length < 1){
                    //Find element and focus
                    const input = document.querySelector(`[name="${key}"]`);
                        console.log(input)
                          input.focus();
                    return;
                }

            }

            
            const body = {username: this.userData.username, psw: this.userData.psw, campusId: this.userData.campusId};
            
            const res = await this.axiosStore.axiosPost("auth/login", body);

            this.sessionStore.$state.sessionStatus = "";
            if(!res.success){
                //Error message
                this.toggleShowNotification(res.data);
                const input = document.querySelector(`[name="username"]`);
                      input.focus();
              
            }else{
                //console.log("Welcome "+res.data.data)
                //Set current user and allow conditional rendering
                this.userStore.setLoggedUser();  
                this.$router.push("/my");
            }


        },
        async getCampus(){
            const campuses = await this.axiosStore.axiosGet("/auth/getcampus");
            if(!campuses.success){
                this.toggleShowNotification("Error del servidor");
                return;
            }
                this.campuses = campuses.data;

        },
        handleKeyup(e){
            e.preventDefault();
            if (13 == e.keyCode) {
                this.login();
            }
        }
      

    },
    mounted() {
        this.getCampus();
         document.addEventListener('keyup', this.handleKeyup)
    },
    unmounted() {
         document.removeEventListener('keyup', this.handleKeyup)
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




