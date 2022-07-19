
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-house"></i>

                <span>Información general?</span>

            </div>

            <!--Comp body-->
            <div class="">
                
                
                <!--Info general-->
                <div class="utesaForm" v-if="isReqInProcess === false">

                    <div class="formHeader ">
                        <span>Proceso de pasantia</span>
                    </div>

                    <div class="genInfo">

                        <p>
                            El proceso de pasantía es esto y aquello con el objetivo 
                            de colocar al estudiante en un entorno real donde tendrá que poner 
                            a prueba sus habilidades técnicas.
                        </p>

                    </div>

                    <div class="formHeader mb-2">
                        <span>Requisitos previos</span>
                    </div>

                    <!--Info requisitos-->
                    <div class="reqForm ">  
                        
                        <div class="inlineFlex">

                            <div class="req">

                                <div class="reqIcon completedReq">
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                
                                <div class="reqInfo">
                                    <span class="bold">APROBAR TODAS LAS ASIGNATURAS HASTA EL 6TO CUATRIMESTRE INCLUIDO</span>

                                    <div class="reqStatus">
                                        Completado
                                    </div>

                                </div>

                            </div>    

                            <div class="mBoth7"></div>

                            <div class="req">

                                <div class="reqIcon pendingReq" v-if="!isReceiptNumber">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <i class="reqMoreInfo fa-solid fa-circle-exclamation" @click="openModal('reqPagoPas')"></i>
                                </div>
                                
                                <div class="reqIcon completedReq" v-else-if="isReceiptNumber">
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>

                                <div class="reqInfo">
                                    <span class="bold">PAGO DERECHO A PASANTIA</span>

                                    <div class="reqStatus">
                                        <div v-if="!isReceiptNumber">Pendiente</div>
                                        <div v-else-if="isReceiptNumber">Completado</div>
                                    </div>
                                </div>

                            </div>    

                        </div>    

                       

                    </div>


                </div>


                <!--Request is being processed-->
                <div class="utesaForm " v-else-if="isReqInProcess === true">

                    
                    <div class="formHeader ">
                        <span>Proceso de pasantia</span>
                    </div>
                
                    <div class="">

                        <p v-if="isReqBemp">
                            Tu solicitud está siendo procesada por nuestro equipo. <br>
                            Ten en cuenta que has aplicado a la <a href="#" @click.prevent="openModal('whatsBemp')">bolsa de empleos</a>, se te notificará
                            una vez hayamos encontrado una empresa compatible con tus habilidades.
                        </p>

                        <p v-else>
                            Tu solicitud está siendo procesada por nuestro equipo, se te noficará una vez haya 
                            sido completada. 
                        </p>

                    </div>


                    <!--Skills based - eval-->

                        <div class="row" v-if="isReqBemp">
                            <span>Aún puedes editar tus habilidades para incrementar tus probabilidades de encontrar una empresa</span>
                            <div class="col-md-6 mb-3 mt-3">
                                
                                <div class="inputGroup">
                                    <select class="noRightRadius" v-model="currentSkill"
                                    @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                        <option value="" disabled selected> Selecciona </option>
                                        <option v-for="skill in availableSkills.data" :key="skill.skillId" :value="skill.skillId">{{skill.name}}</option>
                                        <option v-if="availableSkills.length < 1" value = "" disabled>No value</option>
                                    </select>
                                    <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius" @click="addSkill">Agregar</button>
                                </div>
                            
                            </div>

                            <div class="col-12">

                                    <ul class="skillSet">
                                        <li v-for="skill in studentSkills.data" :key="skill.skillId" @dblclick="removeSkill(skill.skillId)">{{availableSkills.data.find(x => x.skillId === skill.skillId).name}}</li>
                                        <li v-if="studentSkills.length < 1">Lista vacía</li>
                                    </ul>

                            </div>
                        
                        
                        </div> 



                </div>
                
            </div>
                

        </div>

    </div>

    <Transition name="bounce">
        <modalPasantia @closeModal="closeModal" v-if="isOpen">
        
        <template v-slot:header>
                <div class="formHeader ">
                    <div v-if="currentModalData === 'reqPagoPas'">
                        <span>¿Como completar el requisito pago derecho a pasantía?</span>
                    </div>
                    <div v-else-if="currentModalData === 'whatsBemp'">
                        <span>¿Qué es la bolsa de empleos?</span>
                    </div>
                </div>
        </template>
        <template v-slot:body>
            <div v-if="currentModalData === 'reqPagoPas'">

                <ol>
                    <li>
                        Introduce el número de recibo al momento de solicitar tu pasantía
                    </li>
                    <li>
                        Haz un pago a tesorería de forma presencial
                    </li>
                
                </ol>
            </div>

            <div v-else-if="currentModalData === 'whatsBemp'">

                <p>Es un sistema de emparejamiento donde se busca asignar
                        empresas a nuestros pasantes de acuerdo a su área de desempeño.</p>
                    <br>
                <button class="Ubtn utesaBtn" @click="removeStudentBemp"> Retirar bolsa de empleos </button>
            </div>
                
        </template>

        </modalPasantia>
    </Transition>


    <Transition name="bounce">
        <errorHandler v-if="showError" @removeError="toggleShowNotification" :isError="isMsgNotification" :message="errorMessage"/>
    </Transition>

</template>

<script>

    import modalPasantia from "@/components/utilities/modalPasantia";

    import modalHandler from "@/mixins/modalHandler";
    import errorHandler from "@/components/utilities/errorHandler";


    import { useAxiosStore, useUserStore } from "@/stores/userStore";
export default {
    name: "homePasantia",
    components:{
        modalPasantia,
        errorHandler
    },
    mixins: [modalHandler],
    data(){
        return{
            axiosStore: useAxiosStore(),
            userStore: useUserStore(),
            isReqInProcess: "",
            isReqBemp: false,
            isReceiptNumber: false,
            
            //student skills
            studentSkills: [],
            currentSkill: "",
            //Available skills
            availableSkills: [], 
        }
    },
    methods: {
        async requestStatus(){
        //Request information
        const reqData = await this.axiosStore.axiosGet("/pasantia/requeststatus", {studentId: this.userStore.$state.userData.idusuario});
        if(reqData.success){
            
            if(reqData.data.status === "pending"){
                this.isReqInProcess = true;
            }
            else if(reqData.data.status !== "pending"){
                this.isReqInProcess = false;
            }
            if(reqData.data.bemp){
                this.isReqBemp = true;
            }
            if(reqData.data.numrecibo !== "" && reqData.data.numrecibo !== null){
                this.isReceiptNumber = true;
            }

        }else if(reqData.noReq === true) this.isReqInProcess = false;

        },
        async loadStudentData(){

            //General student information
            const studentCareer = await this.axiosStore.axiosGet("/maintenances/studentcareer", {studentId: this.userStore.$state.userData.idusuario});
            if(!studentCareer.success){
                this.toggleShowNotification("Error del servidor");
                return;
            }

            //Get career skills
            this.availableSkills = await this.axiosStore.axiosGet("/maintenances/careerskills", {careerId: studentCareer.data.idcarrera});
            if(!this.availableSkills.success){
                this.availableSkills = []
            }

            //Get student skills
            this.studentSkills = await this.axiosStore.axiosGet("/bemp/studentskills", {studentId: this.userStore.$state.userData.idusuario});
            if(!this.studentSkills.success){
                this.studentSkills = []
            }

        },
        async addSkill(){
            //Check if valid
            if(this.currentSkill.toString().trim().length < 1){
                this.toggleShowNotification("Seleccione un elemento valido")
                return;
            } 
            //Check if exists
            const exists = await this.axiosStore.axiosGet("/bemp/studentskill", {skillId: this.currentSkill, studentId: this.userStore.$state.userData.idusuario});
            if(exists.success){
                this.toggleShowNotification("Ya posees esta habilidad")
                return;
            }
            //Add
            const added = await this.axiosStore.axiosPost("/bemp/studentskill", {skillId: this.currentSkill, studentId: this.userStore.$state.userData.idusuario});
            if(!added.success){
                this.toggleShowNotification(added.data)
            }
            this.currentSkill = "";
            this.loadStudentData();
        },
        async removeSkill(skill){
            
            //At least one skill must be left since student applied to BEMP
            const studentSkills = await this.axiosStore.axiosGet("/bemp/studentskills", {studentId: this.userStore.$state.userData.idusuario});
            console.log(studentSkills.data.length, studentSkills.data)
            if(studentSkills.data.length === 1){
                this.toggleShowNotification("Debes tener al menos una habilidad");
                return;
            }

            const deleted = await this.axiosStore.axiosDelete("/bemp/studentskill", {skillId: skill, studentId: this.userStore.$state.userData.idusuario});
            if(!deleted.success){
                this.toggleShowNotification("No posees esta habilidad")
                return;
            }

            this.loadStudentData();
        },
        async removeStudentBemp(){

            const updated = await this.axiosStore.axiosPut("/pasantia/removebemp", {isBemp: false, studentId: this.userStore.$state.userData.idusuario})
            console.log(updated)
            if(!updated.success){
                this.toggleShowNotification(updated.data)
                return;
            }

            this.$router.go();
            
        },
    },
    mounted(){
        this.requestStatus();
        this.loadStudentData();

    }

}

    

</script>

<style scoped>
 
    .inlineFlex{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mBoth7{
       margin-left: 7px; 
       margin-right: 7px;
    }

    @media only screen and (max-width: 768px) {
        
        .inlineFlex{
            flex-direction: column;
        }
        .mBoth7{
            display:none;
        }
    }




















    /**Info requisitos */
    .reqForm{
        margin-bottom: 30px;
    }
    .req{
        display: flex;
        margin-bottom: 10px;
        min-height: 150px;
        max-height: 180px;
        width: 600px;
        max-width: 90%;
        min-width: 230px;
        margin-left: auto;
        margin-right: auto;
        box-shadow:  0px 0px 5px gray;
        border-radius: 10px;
    }

    .pendingReq{
        background-color: lightcoral;
    }
    .completedReq{
        background-color: var(--color60);
    }

    .reqIcon{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 50%;
        max-width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .reqIcon i{
        font-size: 60px;
        color: white;
    }
    /*Popup offering a solution for pending requirement */
    .reqIcon .reqMoreInfo{
        font-size: 23px;
        position:absolute;
        top: 5px;
        left: 5px;
        cursor: pointer;
        transition: ease 0.3s;
    }
    .reqIcon .reqMoreInfo:hover{
        opacity: 0.85;
    }

    .reqIcon .reqMoreInfo:active{
        opacity: 0.85;
    }

    .reqInfo{
        padding-left: 15px;
        padding-right: 15px;
        background-color: white;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;


    }
    
    .reqStatus{
        font-size: 20px;
    }


    
    @media only screen and (max-width: 576px) {
        
        .reqIcon{
            min-width: 80px;
            max-width: 80px;
        }
        .reqIcon i{
            font-size: 50px;
        }
    }

    /**Info requisitos */
 
 

   

</style>



