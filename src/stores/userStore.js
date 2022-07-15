
import { defineStore } from "pinia";
import axios from 'axios'


export const useAxiosStore = defineStore("axiosStore", {
    state: () => {
        return {
            sessionInfo: useSessionStore(),
        }
    },
    actions: {

        async axiosGet(route, reqParams={}){
            const rows = await axios.get(route, { params: reqParams });
            if(rows.data.success){
                return rows.data;
            }else{
                
                if(rows.data.isLoggedIn === false){
                    this.sessionInfo.$state.sessionStatus = rows.data.data;
                    this.$router.push("/login");
                    return "";
                }else{
                    return rows.data;
                }

            }
            
        },
        async axiosPost(route, body){
            if(!body) return "No data to post";
            const rows = await axios.post(route, body);
            if(rows.data.success){
                return rows.data;
            }else{
                
                if(rows.data.isLoggedIn === false){
                    this.sessionInfo.$state.sessionStatus = rows.data.data;
                    this.$router.push("/login");
                    return "";
                }else{
                    return rows.data;
                }

            }
            
        },
        async axiosPut(route, body){
            if(!body) return "No data to put";
            const rows = await axios.put(route, body);
            if(rows.data.success){
                return rows.data;
            }else{
                
                if(rows.data.isLoggedIn === false){
                    this.sessionInfo.$state.sessionStatus = rows.data.data;
                    this.$router.push("/login");
                    return "";
                }else{
                    return rows.data;
                }

            }
            
        },
        async axiosDelete(route, reqParams={}){
            const rows = await axios.delete(route,  { params: reqParams });
            if(rows.data.success){
                return rows.data;
            }else{
                
                if(rows.data.isLoggedIn === false){
                    this.sessionInfo.$state.sessionStatus = rows.data.data;
                    this.$router.push("/login");
                    return "";
                }else{
                    return rows.data;
                }

            }
            
        },

    }
})

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
            isReqInProgress: false,
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









