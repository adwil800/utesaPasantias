
<template >


    <div class="errorBody " :class="[isNotification ? 'notificationBg' : {}]">

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
        },
        isNotification: {
            type: Boolean,
            default: false,
        },
        isLogin: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return{
        }
    },
    mounted(){
        setTimeout(() => {
            this.$emit("removeError");
        }, 2000);
    },
    emits:["removeError"]
    
}
</script>


<style scoped>
    .notificationBg{
        background-color: var(--color60) !important;
    }
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
        width: 100vw;
        bottom: 0;
    }
    .errorMessage{
        font-weight: 700;
        font-size: 25px;
        color: white;
    }
</style>