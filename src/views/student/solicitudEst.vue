
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantia - ADD CORREO TO STUDENT</span>

            </div>

            <!--Comp body-->
            <div class="horizontalForm">
                
                <!--Form solicitud-->
                <div class="utesaForm" v-if="currentStage === 1">

                    <div class="formHeader">
                        <span>Estudiante</span>
                    </div>

                    <!--Datos del estudiante-->
                    <div class="studentInfo">
                        <div class="row">
                                
                            <div class="col-sm ">
                            
                                <label for="">NOMBRE: </label>
                                <span class="bold">{{studentInformation.nombre +" "+studentInformation.apellido}}</span>

                            </div>
                            <div class="col-sm ">
                                <label for="">CARRERA: </label>
                                <span class="bold">{{studentInformation.carrera}}</span>

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-sm  ">

                                <label for="">MATRICULA:</label>
                                <span class="bold">{{studentInformation.matricula}}</span>

                            </div>

                            <div class="col-sm  flexCenter">
                    
                                <label for="">TELEFONO:</label>
                                <span class="bold">{{getStudentPhones}}</span>
                                
                            </div>
                        </div>


                        <div class="row">

                            <div class="col-sm  flexCenter">
                        
                                <label for="">DIRECCIÓN:</label>
                                <span class="bold">{{studentInformation.direccion + ", " + studentInformation.provincia}}</span>
                            
                            </div>
                            
                            <div class="col-sm  ">
                                <div class="row">
                                    <div class="col-auto">
                                        <a href="#" @click.prevent="openModal('receipt')"># RECIBO:</a>
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="requestData.receiptNumber">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="lineThrough"></div>

                    <!--Datos de pasantía-->
                    <div>
                        <span>TIPO DE PASANTÍA:</span>

                        <div class="flexCenter ">
                            <input type="radio" value="0" v-model="studentInformation.tipopasantia">
                            <label class="bold ml10"> TÉCNICO</label>
                        </div>
                        <div class="flexCenter">
                            <input type="radio" value="1" v-model="studentInformation.tipopasantia">
                            <label class="bold ml10"> PROFESIONAL</label>
                        </div>
                    </div>

                    
                    <div class="lineThrough"></div>
                    <!--Aplicar a la bolsa de empleo-->
                    <div>

                        <div class="formHeader">
                            <span>¿No tienes empresa?</span>
                            <i class="fa-solid fa-circle-check isBEmp" v-if="studentInformation.bolsaempleos"></i>
                            <i class="fa-solid fa-circle-xmark isNotBEmp" v-if="!studentInformation.bolsaempleos" ></i>
                        </div>

                            <span><a href="#" @click.prevent="openModal('bemp')">Únete a la bolsa de empleos!</a></span>

                    </div>


                    <button class="Ubtn utesaBtn  alignRight" @click="nextStage">Siguiente</button>
                    
                </div>

                <!--Form bolsa de empleos-->
                <div class="utesaForm" v-if="currentStage === 2 && studentInformation.bolsaempleos === true">


                    <!--Overview-->
                    <div class="formHeader">
                        <span>Overview</span>
                    </div>



                    <!--My bemp skills-->
                    <div class="formHeader">
                        <span>Tu bolsa de empleo?</span>
                    </div>

                    <div>
                        
                        <p>Selecciona el área donde mejor te desempeñas y agregala a tus habilidades! 
                            Estas serán utilizadas para realizar el emparejamiento con la institución
                            que mas te convenga, se te notificará por correo una vez dicha asignación ocurra.
                        </p>


                        <div class="row">
                            <div class="col-md-6 mb-3">

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

                    <button class="Ubtn utesaBtn" @click="prevStage">Atrás</button>
                    <button class="Ubtn utesaBtn alignRight" @click="submitRequest" v-if="requestData.receiptNumber.length > 0">Enviar solicitud</button>
                    <button class="Ubtn utesaBtn alignRight" @click="submitRequest" v-else>Guardar solicitud</button>

                </div>

                <!--Form datos de empresa-->
                <div class="utesaForm" v-if="currentStage === 2 && studentInformation.bolsaempleos === false">

                    <div class="formHeader">
                        <span>Empresa</span>
                    </div>
                    
                    <div class="companyInfo mb-3">
                        <div class="row">
                                
                            <div class="col-sm flexCenter">
                                    
                                <label for="">NOMBRE:</label>
                                <input type="text" v-model="requestData.name" name="name">

                            </div>
                            <div class="col-sm flexCenter">

                                <label for="">TIPO:</label>
                                <select v-model="requestData.type" name="type" >
                                    <option value="" disabled selected>Selecciona</option>
                                    <option v-for="(type, index) in companyTypes" :key="index" :value="type">{{type}}</option>
                                </select>

                                <input class="ml-5" type="text" name="otherType" v-if="requestData.type === 'Otras'" v-model="requestData.otherType">

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-sm  flexCenter">

                                <label for="">TELEFONO:</label>
                                <input type="text" v-model="requestData.phone" name="phone">

                            </div>

                            <div class="col-sm  flexCenter">
                    
                                <label for="">DIRECCIÓN:</label>
                                <input type="text" v-model="requestData.address" name="address">
                                
                            </div>
                        </div>

                        <div class="col-sm-8">
                            
                                <span for="">NOMBRE DEL ENCARGADO:</span>
                                <input type="text" v-model="requestData.tutorName" name="tutorName">
                            
                            
                        </div>
                    </div>

                    <button class="Ubtn utesaBtn" @click="prevStage">Atrás</button>
                    <button class="Ubtn utesaBtn alignRight" @click="submitRequest" v-if="requestData.receiptNumber.length > 0">Enviar solicitud</button>
                    <button class="Ubtn utesaBtn alignRight" @click="submitRequest" v-else>Guardar solicitud</button>

                </div>

            </div>


        </div>
    </div>


    <Transition name="bounce">
        <modalPasantia @closeModal="closeModal" v-if="isOpen">
        
        <template v-slot:header>
                <div class="formHeader ">
                    <div v-if="currentModalData === 'bemp'">
                        <span>¿Qué es la bolsa de empleos?</span>
                    </div>
                    <div v-else-if="currentModalData === 'receipt'">
                        <span>¿Qué es el número de recibo?</span>
                    </div>

                </div>
        </template>
        <template v-slot:body>


            <div v-if="currentModalData === 'bemp'">
                <p>Es un sistema de emparejamiento donde se busca asignar
                            empresas a nuestros pasantes de acuerdo a su área de desempeño.</p>
                            
                    <input type="checkbox" class="form-check-input" v-model="studentInformation.bolsaempleos" @change="updateStudentBemp"> <!--Toggle mySkills-->
                    <label for="">&nbsp; Deseo ser parte de la bolsa de empleos</label>
            </div>

            <div v-else-if="currentModalData === 'receipt'">

                <p>Se refiere al numero del comprobante de pago de pasantías. </p>

                <ol>
                    <li>
                        Introduce el número de recibo de pago de pasantía o
                    </li>
                    <li>
                        Realiza el pago a tesorería en linea??
                    </li>
                </ol>

            </div>
        </template>

        </modalPasantia>
    </Transition>

    <Transition name="bounce">
        <errorHandler v-if="showError" @removeError="toggleShowNotification" :isNotification="isMsgNotification" :message="errorMessage"/>
    </Transition>


</template>

<script>


    import modalPasantia from "@/components/utilities/modalPasantia"
    import modalHandler from "@/mixins/modalHandler";

    import errorHandler from "@/components/utilities/errorHandler";

    import { useAxiosStore, useUserStore } from "@/stores/userStore";

export default {  
    name: "solicitudEst",
    components: {
        modalPasantia,
        errorHandler
    },
    mixins:[modalHandler],
    data(){
        return{
            axiosStore: useAxiosStore(),
            userStore: useUserStore(),

            currentStage: 1,
            studentInformation: "",

            //Is bemp
            
            //student skills
            studentSkills: [],
            currentSkill: "",
            //Available skills
            availableSkills: [], 

           
            
            //!Is bemp
            //Información de la empresa
            requestData: {
                reqId: "",
                name: "",
                type: "",
                otherType: "",
                phone: "",
                address: "",
                tutorName: "",
                receiptNumber: "",
            },
            companyTypes: ["Industrial", "De servicios", "Comercio", "Pública", "Privada" ,"Otras"]
                

        }
    },
    methods: {
       
        alignLabels(selector){
            
            //Align all labels on studentInfo section
            const labels = [...document.querySelectorAll(selector)];
            let max = Math.max.apply(Math, labels.map(e => {return e.offsetWidth})) + 3;
            labels.forEach(e => e.style.marginRight = max - e.offsetWidth+"px")
            
        }, 
        nextStage(){

            this.currentStage++;
            //Update available skills given that the student has applied to Bemp
            if(this.studentInformation.bolsaempleos){
               this.loadSkills();
            }

        },
        async loadSkills(){
             //Get career skills
                this.availableSkills = await this.axiosStore.axiosGet("/bemp/careerskills", {careerId: this.studentInformation.idcarrera});
                if(!this.availableSkills.success){
                    this.availableSkills = []
                }

                //Get student skills
                this.studentSkills = await this.axiosStore.axiosGet("/bemp/studentskills", {studentId: this.studentInformation.idestudiante});
                if(!this.studentSkills.success){
                    this.studentSkills = []
                }

        },
        prevStage(){
            this.currentStage--;
        },
        async setDefaultData(){
            //General student information
            this.studentInformation = await this.axiosStore.axiosGet("/pasantia/getstudent", {studentId: this.userStore.$state.userData.idusuario});
            if(!this.studentInformation.success){
                this.toggleShowNotification("Error del servidor");
                return;
            }
            this.studentInformation = this.studentInformation.data;

            //Request no bemp information
            let reqData = await this.axiosStore.axiosGet("/pasantia/request", {studentId: this.studentInformation.idestudiante});
            if(reqData.success === true){
               //Request found
                this.requestData = reqData.data;    
                if(!this.companyTypes.includes(this.requestData.type)){
                    this.requestData.type = "Otras";
                }
                return;

            }
            //Request bemp
            reqData = await this.axiosStore.axiosGet("/pasantia/requestbemp", {studentId: this.studentInformation.idestudiante});
             if(reqData.success === true){
               //Request found
                this.requestData.reqId = reqData.data.reqId;    
            }

        },
        //!Is bemp
        async submitRequest(){
            //If not bemp
            if(this.studentInformation.bolsaempleos === false){
                
                //Validation
                for(let key in this.requestData){
                    const cv = this.requestData[key];
                    //receiptNumber can be empty
                    if(key === "receiptNumber" || key === "otherType" || key === "reqId"){
                        continue;
                    }else{
                        if(key === "type" && cv === "Otras"){
                            if(this.requestData["otherType"].trim().length < 1){
                                const input = document.querySelector(`[name="otherType"]`);
                                    input.focus();
                                    return;
                            }
                        }
                        else if(cv.trim().length < 1){
                            const input = document.querySelector(`[name="${key}"]`);
                                  input.focus();
                                  return;
                        }
                    }

                }   

                let request = "";
                if(!this.requestData.reqId){
                    //Send new request
                    request = await this.axiosStore.axiosPost("/pasantia/request", {requestData: this.requestData, studentId: this.studentInformation.idestudiante});
                }else{
                    //Update request
                    request = await this.axiosStore.axiosPut("/pasantia/request", {requestData: this.requestData});
                }
                
                if(request.success){
                    if(this.requestData.receiptNumber.trim().length > 0 ){
                        this.toggleShowNotification("Solicitud realizada", true);
                        

                    }else{
                        this.toggleShowNotification("Datos guardados", true);
                        
                    }
                    //Loading thingy - user experience
                    setTimeout(() => {
                        this.$router.push("/my");
                    }, 2100);

                }
                else{
                    this.toggleShowNotification("Error del servidor")
                }

            }
            //If bemp
            else if(this.studentInformation.bolsaempleos === true){

                //Make sure student has at least one skill

                const studentSkills = await this.axiosStore.axiosGet("/bemp/studentskills", {studentId: this.studentInformation.idestudiante});
                if(studentSkills.success === false){
                    this.toggleShowNotification("Debes agregar al menos una habilidad");
                    return;
                }

                let request = "";
                if(this.requestData.reqId.toString().trim().length < 1){
                    //Send new request
                    request = await this.axiosStore.axiosPost("/pasantia/requestbemp", {receiptNumber: this.requestData.receiptNumber, studentId: this.studentInformation.idestudiante});
                }else if(this.requestData.reqId.toString().trim().length > 0){
                    //Update request
                    request = await this.axiosStore.axiosPut("/pasantia/requestbemp", {receiptNumber: this.requestData.receiptNumber, requestId: this.requestData.reqId});
                }
                
                if(request.success){
                    if(this.requestData.receiptNumber.trim().length > 0 ){
                        this.toggleShowNotification("Solicitud realizada", true);
                    }else{
                        this.toggleShowNotification("Datos guardados", true);
                    }
                    //Loading thingy - user experience
                    setTimeout(() => {
                        this.$router.push("/my");
                    }, 2100);

                }

            }
             

        },
        async addSkill(){
            //Check if valid
            if(this.currentSkill.toString().trim().length < 1){
                this.toggleShowNotification("Seleccione un elemento valido")
                return;
            } 
            //Check if exists
            const exists = await this.axiosStore.axiosGet("/bemp/studentskill", {skillId: this.currentSkill, studentId: this.studentInformation.idestudiante});
            if(exists.success){
                this.toggleShowNotification("Ya posees esta habilidad")
                return;
            }
            //Add
            const added = await this.axiosStore.axiosPost("/bemp/studentskill", {skillId: this.currentSkill, studentId: this.studentInformation.idestudiante});
            if(!added.success){
                this.toggleShowNotification(added.data)
            }
            this.currentSkill = "";
            this.loadSkills();
        },
        async removeSkill(skill){
            const exists = await this.axiosStore.axiosDelete("/bemp/studentskill", {skillId: skill, studentId: this.studentInformation.idestudiante});
           
            if(!exists.success){
                this.toggleShowNotification("No posees esta habilidad")
            }

            this.loadSkills();
        },
        async updateStudentBemp(){

            const updated = await this.axiosStore.axiosPut("/pasantia/updatebemp", {isBemp: this.studentInformation.bolsaempleos, studentId: this.studentInformation.idestudiante})
            if(!updated.success){
                this.toggleShowNotification(updated.data)
            }
        },

    },
    watch:{
        'studentInformation.tipopasantia': async function (){
            const updated = await this.axiosStore.axiosPut("/pasantia/updatetpasantia", {tipopasantia: this.studentInformation.tipopasantia, studentId: this.studentInformation.idestudiante})
            if(!updated.success){
                this.toggleShowNotification(updated.data)
            }
        }
    },  
    computed: {
        getStudentPhones(){
            if(this.studentInformation.telefonos){
            let numbers = "";
            this.studentInformation.telefonos.forEach(e => {
                numbers += e.telefono + " ";
            });
            return numbers;
            }
            return "";
        }
    },  
    mounted(){

        this.setDefaultData();
        this.alignLabels(".utesaForm .studentInfo label");
        this.alignLabels(".utesaForm .companyInfo label");
    },
    updated(){
        this.alignLabels(".utesaForm .studentInfo label");
        this.alignLabels(".utesaForm .companyInfo label");
    }

}

    

</script>

<style scoped>
 
    .ml-5{
        margin-left: 5px;
    }
    .isBEmp, .isNotBEmp{
        font-size: 35px;
        margin-left: 10px;
        margin-top: 5px;
        position: absolute;
    }

    .isBEmp{
        color: var(--color60);
    }
    .isNotBEmp{
        color: lightcoral;

    }






    .alignRight{
        position: absolute;
        right: 30px;
        bottom: 30px;
    }
 
    /**Form */
    
 
   
    .utesaForm{
        position: relative;
    } 
    .utesaForm .studentInfo > .row, .utesaForm .companyInfo > .row{
        margin-bottom: 10px;
    }
    
    .lineThrough{
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        border-top: 3px solid rgb(128, 128, 128, 0.1);
    }

    .ml10{
        margin-left: 10px;
    }
    /**Form */

    .flexCenter{
      display: flex;
      align-items:center;
    }

    @media only screen and (max-width: 576px) {
        
        .utesaForm .studentInfo .row div, .utesaForm .companyInfo .row div{
            margin-bottom: 10px;
        }

        .utesaForm .studentInfo > .row, .utesaForm .companyInfo > .row{
            margin-bottom: 0;
        }



    }
    
    @media only screen and (max-width: 400px) {
            
        .flexCenter{
            display: initial;
        }
    }


 
</style>



