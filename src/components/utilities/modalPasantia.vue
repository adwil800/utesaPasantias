<template>
   
        <div class="modalContainer" @click="emitCloseModal">
            <div class="modalContent" @click.stop>
                

                    <!--Header-->
                    <div class="modalHeader">
                        <slot name="header"></slot>
                    </div>
                    <!--Body-->
                    <div class="modalBody ">
                        <slot name="body"></slot>
                    </div>



            </div>
        </div> 





</template>

<script>
export default {
    name: "modalPasantia",
    methods:{
        emitCloseModal(){
            this.$emit("closeModal");
        }
    },
    emits:["closeModal"],

}
</script>

<style scoped>
    
   



    .modalBody{
        max-height: calc(100vh - 345px);
        overflow: auto;
    }
    .modalContainer{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: #00978850;
        height: 100vh;
        width: 100vw;
        cursor: pointer;
        display: flex;
    }

    .modalContent{
        background-color: white;
        max-height: calc(100vh - 200px);
        width: 70%;
        cursor: initial;
        margin:auto;
        padding: 50px;
        border-radius: 10px;
        overflow-y: auto;
    }


    @media only screen and (max-width: 768px) {
        
        .modalContent{
            width: 90%;
            padding: 25px;
        }
    }
</style>