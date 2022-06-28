<template>
  
    <div class="sidebarNavbar">

          <div class="navbarGrid">

              <div class="preToggler"> 
                  Locky - 1 16 1609
              </div>

              <div class="toggler">
                <i class="fa-solid fa-bars" @click="emitToggle"></i>
              </div>

              <div class="postToggler ">
                  <img src="@/assets/logo.gif" alt="Logo utesa">
                  <span class="overflowDisplay">UNIVERSIDAD TECNOLÓGICA DE SANTIAGO - UTESA  ( SEDE - SANTIAGO )</span>
              </div>

          </div>


    </div>
</template>

<script>
export default {
  name: "navbarPasantia",
  methods:{
    emitToggle(){
      this.$emit("toggleSidebar");
    }
  },
  emits:["emitToggle"],
}
</script>

<style scoped>


    .sidebarNavbar{
      background-color: var(--color60);
      font-weight: 500;
      height: 58px;
    }
     
    .navbarGrid{
      display: inline-flex;
      color: white;
      width: 100vw;
    }
    .navbarGrid div{
      height: 58px;
      display: flex;
      align-items:center;
      justify-content:center;
    }

    .preToggler{
      width: 245px;
      max-width: 245px;
      background-color: #007D71;
    }
    .toggler{
      max-width: 50px;
    }
    .toggler i{
      font-size: 20px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      height: 58px;
      width: 50px;
      display: flex;
      align-items:center;
      justify-content:center;
    }
    .toggler i:hover{
      background-color: #00796E;
    }
    .postToggler{
      width: 100%;
    }
    .postToggler img{
      width: 58px;
    }



    @media only screen and (max-width: 960px) {
      .overflowDisplay{
        display: none;
      }

    }

    @media only screen and (max-width: 576px) {
        
      .preToggler{
        width: fit-content;
        padding-left: 10px;
        padding-right: 10px;
        white-space: nowrap;
      }
              
      @media (hover: none) {
         .toggler i:hover { background-color: inherit; }
      }
      .toggler i:active{
        background-color: #00796E;
      }

    }


</style>