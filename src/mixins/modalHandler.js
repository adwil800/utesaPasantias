 
export default{
    data(){
        return{
          isOpen: false,
        }
      },
      methods:{

        openModal(){
          this.isOpen = true;
        },
        closeModal(){
          this.isOpen = false;
        }
    
      }, 
}
 