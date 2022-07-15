 <template>
    
    <div v-if="isUser === false">
        <homeAdmin/>
    </div>
    <div v-else-if="isUser === true">
        <homeEst/>
    </div>



</template>

<script>

    import homeEst from '../student/homeEst.vue'
    import homeAdmin from '../admin/homeAdmin.vue'

    import { useUserStore } from '@/stores/userStore'

    export default {
        name: "homePasantia",
        components:{
            homeEst, homeAdmin
        },
        data(){
            return {
                isUser: "",
            }
        },
        created(){
            const userStore = useUserStore();
            if(userStore.$state.userData.tipo === "user"){
                this.isUser = true;
            }else{
                this.isUser = false;
            }
        }
    }

</script>

<style>
</style>
