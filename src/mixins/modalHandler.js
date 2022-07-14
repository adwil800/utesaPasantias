 
export default{
    data(){
        return{
          isOpen: false,
          currentModalData: "",
        }
      },
      methods:{

        openModal(name){
          this.isOpen = true;
          this.currentModalData = name;
        },
        closeModal(){
          this.isOpen = false;
          this.currentModalData = "";
        }
    
      }, 
}
 