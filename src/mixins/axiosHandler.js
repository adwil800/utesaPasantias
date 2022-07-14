 
import {useSessionStore} from "../stores/userStore";


export default{
      data(){
        return{
            sessionInfo: useSessionStore(),
        }
      },
      methods:{
        async axiosGet(route, reqParams={}){
            const rows = await this.axios.get(route, { params: reqParams });
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
            const rows = await this.axios.post(route, body);
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
            const rows = await this.axios.put(route, body);
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
            const rows = await this.axios.delete(route,  { params: reqParams });
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
    
      }, 
    
        
        
}
 