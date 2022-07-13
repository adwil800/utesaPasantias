
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantia</span>

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

                        <div class="flexCenter">
                            
                            <label for="">DIRECCIÓN:</label>
                            <span class="bold">{{studentInformation.direccion + ", " + studentInformation.provincia}}</span>
                            
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

                            <span><a href="#" @click="openModal">Únete a la bolsa de empleos!</a></span>

                    </div>


                    <button class="Ubtn utesaBtn  alignRight" @click="nextStage">Siguiente</button>
                    
                </div>

                <!--Form bolsa de empleos-->
                <div class="utesaForm" v-if="currentStage === 2 && studentInformation.bolsaempleos">


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
                    <button class="Ubtn utesaBtn alignRight" @click="nextStage">Siguiente?</button>

                </div>

                <!--Form datos de empresa-->
                <div class="utesaForm" v-if="currentStage === 2 && !studentInformation.bolsaempleos">

                    <div class="formHeader">
                        <span>Empresa</span>
                    </div>
                    
                    <div class="companyInfo mb-3">
                        <div class="row">
                                
                            <div class="col-sm flexCenter">
                                    
                                <label for="">NOMBRE:</label>
                                <input type="text">

                            </div>
                            <div class="col-sm flexCenter">

                                <label for="">TIPO:</label>
                                <input type="text">

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-sm  flexCenter">

                                <label for="">TELEFONO:</label>
                                <input type="text">

                            </div>

                            <div class="col-sm  flexCenter">
                    
                                <label for="">DIRECCIÓN:</label>
                                <input type="text">
                                
                            </div>
                        </div>

                        <div class="col-sm-8">
                            
                                <span for="">NOMBRE DEL ENCARGADO:</span>
                                <input type="text">
                            
                            
                        </div>
                    </div>

                    <button class="Ubtn utesaBtn" @click="prevStage">Atrás</button>
                    <button class="Ubtn utesaBtn alignRight" @click="nextStage">Siguiente?</button>

                </div>

            </div>


        </div>
    </div>


    
    <Transition name="bounce">
        <modalPasantia @closeModal="closeModal" v-if="isOpen">
        
        <template v-slot:header>
                <div class="formHeader ">
                    <span>¿Qué es la bolsa de empleos?</span>
                </div>
        </template>
        <template v-slot:body>

              <p>Es un sistema de emparejamiento donde se busca asignar
                            empresas a nuestros pasantes de acuerdo a su área de desempeño.</p>
                            
                    <input type="checkbox" class="form-check-input" v-model="studentInformation.bolsaempleos" @change="updateStudentBemp"> <!--Toggle mySkills-->
                    <label for="">&nbsp; Deseo ser parte de la bolsa de empleo</label>
                
        </template>

        </modalPasantia>
    </Transition>




</template>

<script>


    import modalPasantia from "@/components/general/utilities/modalPasantia.vue"
    import modalHandler from "@/mixins/modalHandler";


export default {  
    name: "solicitudEst",
    components: {
        modalPasantia
    },
    mixins:[modalHandler],
    data(){
        return{

            currentStage: 1,
            studentInformation: "",
            //Guardar temporalmente la información de solicitud, numrecibo 0000000 o null


            //BEmp skills
            studentSkills: [],
            currentSkill: "",

            //Available skills on select
            availableSkills: [
                    {   
                        skillId: "0",
                        name: "No disponible",
                    }
            ]

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
                this.availableSkills = await this.axiosGet("/bemp/careerskills", {careerId: this.studentInformation.idcarrera});
                if(!this.availableSkills.success){
                    //console.log("The error goes here stored on data");
                }

                //Get student skills
                this.studentSkills = await this.axiosGet("/bemp/studentskills");
                if(!this.studentSkills.success){
                    //console.log("The error goes here stored on data");
                    this.studentSkills = []
                }

        },
        prevStage(){
            this.currentStage--;
        },
        async addSkill(){
            //Check if valid
            if(this.currentSkill.toString().trim().length < 1) return;
            //Check if exists
            const exists = await this.axiosGet("/bemp/studentskill", {skillId: this.currentSkill});
            if(exists.success){
                //console.log("Ya existe")
                return;
            }
            //Add
            const added = await this.axiosPost("/bemp/studentskill", {skillId: this.currentSkill});
            if(!added.success){
                //console.log("Error")
            }
            this.currentSkill = "";
            this.loadSkills();
        },
        async removeSkill(skill){
            const exists = await this.axiosDelete("/bemp/studentskill", {skillId: skill});
            if(!exists.success){
                //console.log("Error")
                return;
            }

            this.loadSkills();
        },

        async setStudentInformation(){
            this.studentInformation = await this.axiosGet("/pasantia/getstudent");
            if(!this.studentInformation.success){
                //console.log("The error goes here stored on data");
            }
            this.studentInformation = this.studentInformation.data;
            //console.log(this.studentInformation)
        },
        async updateStudentBemp(){

            const updated = await this.axiosPut("/pasantia/updatebemp", {isBemp: this.studentInformation.bolsaempleos})
            if(updated.success){
                //console.log("loading thingy, updated studentInformation.bolsaempleos successfuly")
            }
        },
        
        
    },
    watch:{
        'studentInformation.tipopasantia': async function (){
            const updated = await this.axiosPut("/pasantia/updatetpasantia", {tipopasantia: this.studentInformation.tipopasantia})
            if(updated.success){
                //console.log("loading thingy, updated studentInformation.tipopasantia successfuly")
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

        this.setStudentInformation();
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





    .skillSet{
        list-style-type: none;
        padding: 0;
    }

    .skillSet li{
        padding: 5px;
        border-radius: 10px;
        background-color: var(--htmlBg);        
        max-width: fit-content;
        margin: 3px;
        font-weight: 500;
        display: inline-block;
        position: relative;
        transition: ease 0.3s;
        cursor: pointer;

        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
    }
    .skillSet li:hover, .skillSet li:active{ /**Handle dbl click to remove skill */
        background-color: var(--htmlBgHover);
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



