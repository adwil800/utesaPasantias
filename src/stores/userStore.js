
import { defineStore } from "pinia";
import axios from 'axios'


export const useSessionStore = defineStore("sessionStore", {
    state: () => {
        return {
            sessionStatus: ""
        }
    }
})


export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            userData: {},
            isLogged: false,
            sessionInfo: useSessionStore(),
        }
    },
    actions:{
        
        async setLoggedUser(){
            const res = await axios.get("auth/getme");

            //User is logged in 
            if(res.data.success){
                  this.userData = res.data.data;
                  this.isLogged = true;
            }else{ 
                this.userData = {};
                this.isLogged = false;
                this.$router.push("/login");
            } 

        },

        async isUserLogged(){
            const res = await axios.get("auth/getme");
            //User is logged in
            if(res.data.success){
                  return true;
            }else{ 
                this.sessionInfo.$state.sessionStatus  = res.data.data;
                return false;
            } 

        },

        async logoutUser(){
         
            //Clear session message:
            if(this.isUserLogged()){

                    await axios.get("auth/logout");
                    //User logged out
                    this.userData = {loggedOut: true};
                    this.isLogged = false;
                    this.$router.push("/login");

                }else{
                    this.$router.push("/login");
                }

        },
        
       

    }
})









