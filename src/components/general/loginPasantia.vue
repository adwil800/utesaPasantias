<template>
    
        <div class="utesaNavbar">
            <div class="logoContainer">
                <img src="@/assets/logo.gif" class="img-fluid" alt="Logo utesa">
            </div>
        </div>


        <div class="loginForm">
            
            <div class="inputGroup ">
                <i class="inputGroupText fa-solid fa-hotel"></i>
                <select name="" id="" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                    <option value="" selected>Selecciona tu recinto</option>
                    <option value="">Santiago</option>
                </select>
            </div>

            <div class="inputGroup ">
                    <i class="inputGroupText fa-solid fa-user"></i>
                <input type="text" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
            </div>

            <div class="inputGroup ">
                    <i class="inputGroupText fa-solid fa-lock"></i>
                <input type="text" @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
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

        inputGroupShading(e, shade = true){

            const i = e.target.parentElement.querySelector("i");

            if(shade){
                  i.style.boxShadow = "0px 0px 5px 1px var(--color60)";
            }else{
                  i.style.boxShadow = "none";
            }


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

    .inputGroup{
        display: flex;
    }
    .inputGroup input, .inputGroup select{
        
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
    }
    .inputGroupText{
        transition: ease 0.3s;
        display: flex;
        align-items: center;
        padding: 0.370rem 0.70rem;
        font-size: 18px;
        color: white;
        white-space: nowrap;
        background-color: var(--color60);
        border: 1px solid var(--color60);
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        border-radius: 3px;
    }

    



</style>




