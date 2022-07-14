
<template >


    <div class="errorBody" :class="[fullWidth ? 'calcFullWidth' : 'calcSWidth']">

        <span class="errorMessage">{{message}}</span>

    </div>

</template>


<script>
export default {
    name: "errorHandler",
    props: {
        message: {
            type: String,
            default: "",
        }
    },
    data(){
        return{
            fullWidth: false,
        }
    },
    mounted(){
        const sidebar = document.querySelector(".v-sidebar-menu");
        this.fullWidth = sidebar.classList.contains("vsm_expanded");

        setTimeout(() => {
            this.$emit("removeError");
        }, 2000);
    },
    emits:["removeError"]
    
}
</script>


<style scoped>
    .errorBody{
        background-color: lightcoral;
        padding: 15px;
        max-height: 100px;
        overflow-x: hidden;
        overflow-wrap: break-word;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0;
    }
    .errorMessage{
        font-weight: 700;
        font-size: 25px;
        color: white;
    }
    .calcFullWidth{
        width: calc(100vw - 245px);
    }
    .calcSWidth{
        width: calc(100vw - 45px);
    }
</style>