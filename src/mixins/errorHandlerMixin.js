 
export default{
    data(){
        return{

            //Error handler
            showError: false,
            isMsgNotification: false,
            errorMessage: "",

        }
      },
      methods:{
        toggleShowNotification(message = "", isNotification = false){
            this.isMsgNotification = isNotification;
            this.showError = !this.showError;
            this.errorMessage = message;
        },
      }, 
    
        
        
}
 