 
export default{
    data(){
        return{
          mixinCurrentWidth: "",
        }
      },
      methods:{
        onResize(){
          this.mixinCurrentWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        },
    
      }, 
      mounted () {    
    
        window.addEventListener('resize', this.onResize, { passive: true });
        this.mixinCurrentWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
      }, 
}
 