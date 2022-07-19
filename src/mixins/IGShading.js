 
export default{
    data(){
        return{

        }
      },
      methods:{
        
        inputGroupShading(e, shade = true){

            let interactable = e.target.parentElement.querySelectorAll("i, button");
            let multiInputs = e.target.parentElement.querySelectorAll("input, select");

            if(shade){
                  if(interactable)
                        interactable.forEach(e => {
                              e.style.boxShadow = "0px 0px 5px  var(--color60)";
                        });

                  if(multiInputs)
                        multiInputs.forEach(e => {
                              e.style.boxShadow = "0px 0px 5px  var(--color60)";
                        });
            }else{
                  if(interactable)
                        interactable.forEach(e => {
                              e.style.boxShadow = "none";
                        });
                  if(multiInputs)
                        multiInputs.forEach(e => {
                              e.style.boxShadow = "none";
                        });
            }


        },
    
      }, 
    
        
        
}
 