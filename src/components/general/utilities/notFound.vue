
<template>
 


    <div class="center">

        <i class="fa-solid fa-ghost notFound"> </i>
        <div class="text">
            <span class="notFoundTitle">PAGE NOT FOUND</span> 
            <br>
            <span class="notFoundSubtitle">Redirecting: {{redirectTimer}}</span>
        </div>
        
    </div>

</template>

<script>
export default {
    name: "notFound",
    data(){
        return{
            redirectTimer: 11,
        }
    },

    watch:{

        redirectTimer(){
            if(this.redirectTimer < 1){
                this.$router.push({path: "/"});
            }else{
                setTimeout(() => {
                    this.redirectTimer--;
                }, 1000);
            }
        }

    },
    mounted(){
        this.redirectTimer--;
    },

    
}
</script>

<style scoped>
    .center{
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .notFoundTitle{
        font-size: 9vh;
    }
    .notFoundSubtitle{
        font-size: 6vh;
        padding-left: 40px;
    }


    .notFound{
        font-size: 30vh;
        padding-right: 20px;
    }

</style>





