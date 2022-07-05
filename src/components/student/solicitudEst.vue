
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
                                <span class="bold">LUIS GERMAN REYES PEÑA</span>

                            </div>
                            <div class="col-sm ">

                                <label for="">CARRERA: </label>
                                <span class="bold">ING. EN SISTEMAS COMPUTACIONALES</span>

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-sm  ">

                                <label for="">MATRICULA:</label>
                                <span class="bold">2-17-2038</span>

                            </div>

                            <div class="col-sm  flexCenter">
                    
                                <label for="">TELEFONO:</label>
                                <input type="text">
                                
                            </div>
                        </div>

                        <div class="flexCenter">
                            
                            <label for="">DIRECCIÓN:</label>
                            <input type="text">
                            
                        </div>
                    </div>

                    <div class="lineThrough"></div>

                    <!--Datos de pasantía-->
                    <div>
                        <span>TIPO DE PASANTÍA:</span>

                        <div class="flexCenter ">
                            <input type="radio">
                            <label class="bold ml10"> TÉCNICO</label>
                        </div>
                        <div class="flexCenter">
                            <input type="radio">
                            <label class="bold ml10"> PROFESIONAL</label>
                        </div>
                    </div>

                    
                    <div class="lineThrough"></div>
                    <!--Aplicar a la bolsa de empleo-->
                    <div>

                        <div class="formHeader">
                            <span>¿No tienes empresa?</span>
                            <i class="fa-solid fa-circle-check isBEmp" v-if="isBEmp"></i>
                            <i class="fa-solid fa-circle-xmark isNotBEmp" v-if="!isBEmp" ></i>
                        </div>

                            <span><a href="#" @click="openModal">Únete a la bolsa de empleos!</a></span>

                    </div>


                    <button class="Ubtn utesaBtn  alignRight" @click="nextStage">Siguiente</button>
                    
                </div>

                <!--Form bolsa de empleos-->
                <div class="utesaForm" v-if="currentStage === 2 && isBEmp">


                    <!--Overview-->
                    <div class="formHeader">
                        <span>Overview</span>
                    </div>

                    <div class="">

                        <p>La bolsa de empleos es un sistema de emparejamiento donde se busca asignar
                            empresas a nuestros pasantes de acuerdo a su área de desempeño.</p>
                            
                        <input type="checkbox" name="" id=""> <!--Toggle mySkills-->
                        <label for="">&nbsp; Deseo ser parte de la bolsa de empleo</label>

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
                                        <option v-for="skill in availableSkills" :key="skill.id" :value="skill.id">{{skill.name}}</option>
                                    </select>
                                    <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius" @click="addSkill">Agregar</button>
                                </div>
                            
                            </div>

                            <div class="col-12">

                                    <ul class="skillSet">
                                        <li v-for="skill in skills" :key="skill" @dblclick="removeSkill(skill)">{{availableSkills[skill].name}}</li>
                                        <li v-if="skills.length < 1">Lista vacía</li>
                                    </ul>

                            </div>
                        
                        
                        
                        </div> 

                    </div>

                    <button class="Ubtn utesaBtn" @click="prevStage">Atrás</button>
                    <button class="Ubtn utesaBtn alignRight" @click="nextStage">Siguiente?</button>

                </div>

                <!--Form datos de empresa-->
                <div class="utesaForm" v-if="currentStage === 2 && !isBEmp">

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
                            
                    <input type="checkbox" class="form-check-input" v-model="isBEmp"> <!--Toggle mySkills-->
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

            isBEmp: false,
            currentStage: 1,





            //BEmp skills
            skills: [],
            currentSkill: "",

            //Available skills on select
            availableSkills: [
                    {   
                        id: "0",
                        name: "Php",
                    },
                    {   
                        id: "1",
                        name: "Vue.js",
                    },
                    {   
                        id: "2",
                        name: "React.js",
                    },
                    {   
                        id: "3",
                        name: "Node.js",
                    },
                    {   
                        id: "4",
                        name: "Express.js",
                    },
                    {   
                        id: "5",
                        name: "React native",
                    },
                    {   
                        id: "6",
                        name: "Html",
                    },
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

        },
        prevStage(){
            this.currentStage--;
        },
        addSkill(){
            //Check if valid
            if(this.currentSkill.trim().length < 1) return;
            //Check if exists
            if(this.skills.includes(this.currentSkill)) return;
            //Add
            this.skills.push(this.currentSkill);
        },
        removeSkill(skill){
            this.skills.splice(this.skills.indexOf(skill), 1);
        }

    },
    mounted(){
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



