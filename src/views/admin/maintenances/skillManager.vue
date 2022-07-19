<template >

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Administrar habilidades</span>

            </div>

            <!--Comp body-->
            <div class="horizontalForm">
                
                <!--Form bolsa de empleos-->
                <div class="utesaForm">


                    <!--Overview-->
                    <div class="formHeader">
                        <span>Habilidades por carreras</span>
                    </div>


                    <div class="col-sm-6 mb-1">
                        <span>Habilidades a utilizar en la bolsa de empleos categorizado por carreras</span>
                        <!--Vacant skills-->
                        <div class="inputGroup">

                            <!--Vacant-->
                            <select class="noRightRadius" v-model="careerSkillData.currentCareer" name="currentCareer"
                            @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                <option value="" disabled selected> Carrera </option>
                                <option v-for="career in careers.data" :key="career.idcarrera" :value="career.idcarrera">{{career.nombre}}</option>
                            </select>

                            <!--Vacant skills-->
                            <input type="text" name="newSkill" class="noRightRadius noLeftRadius" v-model="careerSkillData.newSkill" 
                            @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                            
                            <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius" 
                            @click="addCareerSkill">Agregar</button>
                        </div>
                    </div>
                    
                    <div class="col-12">

                            <ul class="skillSet">
                                <li v-for="skill in careerSkills.data" :key="skill.skillId" @dblclick="removeCareerSkill(skill.skillId)">{{skill.skillName}}</li>
                                <li v-if="careerSkills.length < 1">Lista vacía</li>
                            </ul>

                    </div>



                </div>

              

            </div>


        </div>
    </div>
    
    <Transition name="bounce">
        <errorHandler v-if="showError" @removeError="toggleShowNotification" :isNotification="isMsgNotification" :message="errorMessage"/>
    </Transition>

</template>

<script>

    import errorHandler from "@/components/utilities/errorHandler";

    import { useAxiosStore } from "@/stores/userStore";
    

export default {
    name: "skillManager",
    components: {
        errorHandler  
    },
    data(){
        return {
            axiosStore: useAxiosStore(),

            //Handle new skills
            careers: [],
            careerSkillData: {
                currentCareer: "",
                newSkill: "",
            },

            //Handle existing skills per career
            careerSkills: [],


        }
    },
    methods: {
        async setCareers(){
            this.careers = await this.axiosStore.axiosGet("/maintenances/career");
            if(!this.careers.success){
                this.careers = [];
            }
        },
        async setCareerSkills(){
            
            this.careerSkills = await this.axiosStore.axiosGet("/maintenances/careerskills", { careerId: this.careerSkillData.currentCareer });
            if(!this.careers.success){
                this.careers = [];
            }

        },
        async addCareerSkill(){
            
            //Is valid
            for(let key in this.careerSkillData){
                const cv = this.careerSkillData[key];
                if(cv.toString().trim().length < 1){
                    if(key === "currentCareer")
                    this.toggleShowNotification("Carrera invalida");
                    if(key === "newSkill")
                    this.toggleShowNotification("Habilidad invalida");

                    const input = document.querySelector(`[name="${key}"]`);
                    input.focus();
                    return;
                }

            }
            //No similar exists

            const added = await this.axiosStore.axiosPost("/maintenances/careerskills", { careerId: this.careerSkillData.currentCareer, skillName: this.careerSkillData.newSkill });
            if(!added.success){
                this.toggleShowNotification("Error del servidor");
            } 

            this.setCareerSkills();

        },
        async removeCareerSkill(skillId){
            
            const deleted = await this.axiosStore.axiosDelete("/maintenances/careerskills", { careerId: this.careerSkillData.currentCareer, skillId });
            if(!deleted.success){
                if(deleted.data.code === 1451)
                this.toggleShowNotification("Esta habilidad es usada por otros recursos, no se pudo eliminar")
            }
            this.setCareerSkills();

        },
    },
    watch:{
        "careerSkillData.currentCareer": function(){
            if(this.careerSkillData.currentCareer.toString().trim().length > 0){
                this.setCareerSkills();
            }
        }
    },
    mounted() {
        this.setCareers();
    },

}
</script>

<style scoped>
    
</style>