<template>
  
<div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-key"></i>

                <span>Bolsa de empleos (Admin)</span>

            </div>

            <!--Comp body-->
            <div>

                <div class="utesaForm ">

                    <div class="bempNav ">
                        <div class="bempNavItems">
                            <span>&nbsp;Administrar empresas&nbsp;</span>
                            <span>&nbsp;Administrar vacantes&nbsp;</span>
                        </div>
                    </div>



                    <!--Admin companies-->
                    <div class="companyManagement mt-4 ">
                        <!--My bemp skills-->
                        <div class="formHeader">
                            <span>Administrar empresas</span>
                        </div>

                        <div class="row mobileReversedCol">
                            
                            <!--Add, edit, remove company-->
                            <div class="col-md-6 mb-3">

                                <label for="">Empresa</label>
                                <input type="text" v-model="companyName">
                                    <!--Vacants-->
                                    <label for="">Vacantes</label>
                                    <div class="inputGroup">
                                        <input type="text" class="noRightRadius" v-model="currentVacant" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                        <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius" 
                                        @click="addVacant">Agregar</button>
                                    </div>
                                        

                                    <ul class="UList mt-3">
                                        <li v-for="vacant, index in vacants" :key="index" 
                                        @dblclick="removeVacant(index)"> {{vacant.vacant}} : {{index}}</li>
                                    </ul>
                                    <!--Vacants-->


                                    <!--Vacant skills-->
                                    <label for="">Habilidades</label>
                                    <div class="inputGroup">

                                        <!--Vacant-->
                                        <select class="noRightRadius" v-model="currentVacantIndex"
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                            <option value="" disabled selected> Vacante </option>
                                            <option v-for="vacant, index in vacants" :key="index" :value="index">{{vacant.vacant}}</option>
                                        </select>

                                        <!--Vacant skills-->
                                        <select class="noRightRadius noLeftRadius" v-model="currentVacantSkill" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                            <option value="" disabled selected> Skill </option>
                                            <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{skill.name}}</option>
                                        </select>
                                        
                                        <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius" 
                                        @click="addVacantSkill(currentVacantIndex, currentVacantSkill)">Agregar</button>
                                    </div>
                                        

                                    <ul class="UList mt-3">
                                    <!--Render vacant skills-->
                                        <li v-for="skill in skillsPerVacant" :key="skill.id" 
                                         @dblclick="removeVacantSkill(skill.id)"> {{skill.name}}</li>

                                        <li v-if="skillsPerVacant.length < 1 && currentVacantIndex !== '' ">No skills</li>

                                    </ul>
                                    <!--Vacant skills-->

                                    HANDLE EDIT MODE DONE, ADD BUTTONS AND VISUAL SIGNIFIERS
                                    MAKE AN ACTUAL CHECKLIST OUT OF VSCODE TO KEEP TRACK OF PROGRESS
                                
                            </div> 
                            <!--Add, edit, remove company -->

                            
                            <!--Company information-->
                            <div class="col-md-6 tableContainer mb-3">
                                <table class=" table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Empresa</th>
                                            <th scope="col">Vacantes</th>
                                            <th scope="col">Creado?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        

                                        <tr v-for="cData, index in companyData" :key="index" @click="editCompany(cData.id)">
                                            <td>{{index+1}}</td>
                                            <td>{{cData.name}}</td>
                                            <td>{{cData.vacantData.length}}</td>
                                            <td>- - -</td>
                                        </tr>
                                      <!-- 
                                        
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Empresa</th>
                                        <th scope="col">Vacantes</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Creado</th>
                                        </tr>
                                    </thead>
                                        
                                        
                                        
                                         <tr v-for="cData, index in simplifiedCData" :key="index" @click="editCompany(cData.cId)"a>
                                            <td>{{index+1}}</td>
                                            <td>{{cData.cName}}</td>
                                            <td>{{cData.vName}}</td>
                                            <td>1/1</td>
                                            <td>{{cData.vStatus}}</td>
                                            <td>- - -</td>
                                        </tr>
                            Company information-->
                                                



                                    </tbody>
                                    </table>
                            </div>
                            <!--Company information-->


                        </div>
                    </div>


                    <!--Importar datos de la bolsa de empleo desde un csv-->


                    <!--Admin vacant requests/assignation--> 
                    <div class="vacantManagement mt-4 hidden">

                        <div class="formHeader">
                            <span>Administrar vacantes</span>
                        </div>

                        <div class="row ">
                            
                            <div class="col-md-6 mb-3">

                                <!--Student-->
                                <label for="">Estudiante</label>
                                <div class="inputGroup">
                                    <input type="text" class="noRightRadius" 
                                    @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                    <i class="fa-solid fa-search inputGroupAddon noLeftRadius"></i>
                                </div>
                                <!--Student-->


                                <!--Student skills-->

                                <ul class="UList mt-3">
                                    <li>Php</li>
                                    <li>React</li>
                                    <li>Css</li>
                                    <li>Tailwind Css</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                </ul>
                                <!--Student skills-->

                                Seleccionar un estudiante trae las vacantes compatibles con sus skills,
                                seleccionar una vacante abre un modal(?) donde ocurre la asignación.
                                <br>
                                Acá debajo saldrá wether el estudiante tiene o no una vacante lo que permitirá
                                cambiarla o removerla.
                                :::
                                Add hidden div for student info
                            </div> 

                            <!--Vacant information-->
                            <div class="col-md-6">
                                    
                                <label for="">Filtrar:</label>
                                <input type="text">
                                <div class="tableContainer mb-3">
                                    <table class=" table table-striped table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Empresa</th>
                                            <th scope="col">Vacante</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Estado?</th>
                                            <th scope="col">Habilidades?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Makr.co</td>
                                                <td>Programmer</td>
                                                <td>1/1</td>
                                                <td>Disponible</td>
                                                <td><a href="#">View skills</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>KeenEye</td>
                                                <td>Software analyst</td>
                                                <td>1/3</td>
                                                <td>Asignada</td>
                                                <td><a href="#">View skills</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>KeenEye</td>
                                                <td>Software analyst</td>
                                                <td>2/3</td>
                                                <td>Disponible</td>
                                                <td><a href="#">View skills</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>KeenEye</td>
                                                <td>Software analyst</td>
                                                <td>3/3</td>
                                                <td>Disponible</td>
                                                <td><a href="#">View skills</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <!--Vacant information-->


                        </div>

                    </div>

                </div>

            </div>



        </div>
</div>

</template>

<script> 


export default {
    name: "bolsaEmpAdmin", 
    components: {
    },
    data(){
        return{

            //QOL vars
            isShowSubrow: false,


            //General from BD
            companyData: [
                {
                    id: "1",
                    name: "Mkr.co",
                    vacantData: [
                        {
                            vacant: "Web dev",
                            skills: [1, 2],
                            status: "Unavailable",
                        },
                        {
                            vacant: "Analyst",
                            skills: [3],
                            status: "Available",
                        },
                    ],
                },
                {
                    id: "2",
                    name: "KeenEye.co",
                    vacantData: [
                        {
                            vacant: "Checker",
                            skills: [0, 2],
                            status: "Available",
                        },
                        {
                            vacant: "DevOps",
                            skills: [1],
                            status: "Unavailable",
                        },
                        {
                            vacant: "Programming",
                            skills: [3],
                            status: "Available",
                        },
                    ],
                },
            ],
            skills: [
                {
                    id: 0,
                    name:"Php"
                },
                {
                    id: 1,
                    name:"React"
                },
                {
                    id: 2,
                    name:"Javascript"
                },
                {
                    id: 3,
                    name:"Java"
                },
            
            ],



            
            //Company management
            companyName: "",
            currentVacant: "",
            vacants: [{vacant: "KOK", skills:[0, 2, 3]}],
            currentVacantIndex: "",
            currentVacantSkill: "",



        }
    },
    methods: {
        addVacant(){
            //Check if valid
            if(this.currentVacant.trim().length < 1) return;
            //Check if exists
            for (var i = 0; i < this.vacants.length; i++) {
                if(this.vacants[i].vacant == this.currentVacant){
                    return;
                }                
            }
            //Add
            this.vacants.push({vacant: this.currentVacant, skills: []});

            this.currentVacant = "";

        },
        removeVacant(index){ 
            this.vacants.splice(index, 1);
            this.currentVacantIndex = "";
            this.currentVacantSkill = "";
        },
        addVacantSkill(vacantIndex, skill){

            //Check if valid
            if(vacantIndex.toString().trim().length < 1 || skill.toString().trim().length < 1) return;
            
            const exists = this.vacants[vacantIndex].skills.includes(skill);

            if(!exists){
                this.vacants[vacantIndex].skills.push(skill);
                this.currentVacantSkill = "";
            }
            else{
                console.log("Validation on skill already exists")
            }

        },
        removeVacantSkill(skillId){

            //Get vacant
            const index = this.vacants[this.currentVacantIndex].skills.indexOf(skillId);
            if(index !== -1){
                this.vacants[this.currentVacantIndex].skills.splice(index, 1);
            }


        },
        editCompany(companyId){
            

            const cData = this.companyData[this.companyData.findIndex(e => e.id == companyId)];

            this.companyName = cData.name;
            this.vacants = cData.vacantData;
        },

        showSubrow(){
            this.isShowSubrow = !this.isShowSubrow;
            console.log(this.isShowSubrow)
        },

        parentWorm(el, tag){
            if(el === undefined || el === null) return;
            
            while(el.parentElement){
                if(el.tagName.toLowerCase() === tag.toLowerCase()){
                    return el;
                }
                el = el.parentElement;
            }
            return null;

        },

    },
    computed:{

        
        skillsPerVacant: function(){
            
            if(this.vacants[this.currentVacantIndex]){
                return this.skills.filter(e => {
                    return this.vacants[this.currentVacantIndex].skills.includes(e.id);
                });
            }

            return [];

        },
        simplifiedCData: function(){ //Discarded atm

            const cData = [];

            this.companyData.forEach(e => {

                e.vacantData.forEach(vInfo => {

                    cData.push({cId: e.id, cName: e.name, vName: vInfo.vacant, vSkills: vInfo.skills, vStatus: vInfo.status});

                });

            });

            return cData;

        }

        

    }


}
</script>

<style scoped>

    .bempNav{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
        background-color: var(--color60);
        overflow: hidden;
    }
    .bempNavItems{
        display: flex;
    }
    .bempNavItems span{
        font-size: 18px;
        color: white;
        cursor: pointer;
        transition: ease 0.3s;
        padding: 5px;

    }
    .bempNavItems span:hover, .bempNavItems span:active{
        background-color: var(--color60Hover);
    }

    .utesaForm{
        position: relative;
    }



















    @media only screen and (max-width: 768px) {
      
        .mobileReversedCol{
            display: flex;
            flex-direction: column-reverse;
        }


    }








    .tableContainer{
        max-height: 250px;
        overflow: auto ;
        padding: 0;
    }

    tbody tr{
        cursor: pointer;
    }

    th{
        position: sticky; top: 0;
        background: white;
    }



    .UList{
        list-style-type: none;
        padding: 0;
    }

    .UList li{
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
    .UList li:hover, .UList li:active{
        /**Handle dbl click to remove skill */
        background-color: var(--htmlBgHover);
    }






 
</style>



