
import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            userData: {},
            isLogged: false,
        }
    },
    actions:{
        async getLoggedUser(){
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



    }
})










