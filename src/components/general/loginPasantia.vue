<template>
    
        <div class="utesaNavbar">
            <div class="logoContainer">
                <img src="@/assets/logo.gif" class="img-fluid" alt="Logo utesa">
            </div>
        </div>


        <div class="loginForm">
            
            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-hotel"></i>
                <select class="noLeftRadius" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                    <option value="" selected>Selecciona tu recinto</option>
                    <option value="">Santiago</option>
                </select>
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-user"></i>
                <input type="text"  class="noLeftRadius" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <div class="inputGroup ">
                <i class="inputGroupAddon noRightRadius fa-solid fa-lock"></i>
                <input type="text"  class="noLeftRadius" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <button class="Ubtn utesaBtn align-self-center" @click="login">ENTRAR</button>

        </div>



</template> 

<script>


export default {
    name: "loginPasantia",
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$emit("login", {username: "user1", password:"user1"});
        },



    },
    emits:["login"],

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

    

    



</style>




