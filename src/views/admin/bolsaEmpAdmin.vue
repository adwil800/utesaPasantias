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

                    


                    <!--Admin companies-->
                    <div class="companyManagement ">
                        <!--My bemp skills-->
                        <div class="formHeader">
                            <span>Administrar empresas</span>
                        </div>

                        <div class="row mobileReversedCol">
                            
                            <!--Add, edit, remove company-->
                            <div class="col-sm-5 mb-3">

                                    <label for="" class="alignCenter">EMPRESA</label>
                                    <div class="inputGroup ">
                                        <input type="text" v-model="companyData.name" name="name" class="noRightRadius" disabled
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                        <i class="inputGroupAddon noLeftRadius fa-solid fa-xmark utesaDanger" v-if="this.companyId !== ''" @click="removeUpdateMode"></i>
                                    </div>

                                    <!--Vacants-->
                                    <div>
                                        <label for="">VACANTES</label>
                                    
                                        <!--Campus-->
                                        <select x v-model="addVacantObj.campusId" name="campusId" >
                                            <option value="" disabled selected>Selecciona un recinto</option>
                                            <option v-for="campus in campuses" :key="campus.idrecinto" :value="campus.idrecinto">{{campus.nombre}}</option>
                                        </select>

                                        <select class="mb-2 mt-2" v-model="addVacantObj.currentCareer" name="currentCareer">
                                            <option value="" disabled selected> Carrera </option>
                                            <option v-for="career in careers" :key="career.idcarrera" :value="career.idcarrera">{{career.nombre}}</option>
                                        </select>

                                        <input type="text" v-model="addVacantObj.currentVacant" name="currentVacant">
                                        <div style="display: flex; justify-content: center">
                                            <button class="Ubtn utesaBtn blockBtn" @click="addVacant" >Agregar</button>
                                        </div>
                                        <ul class="UList mt-3">
                                            <li v-for="vacant, index in vacants" :key="index" 
                                            @dblclick="removeVacant(index)"> {{vacant.vacant}} : {{index}}</li>
                                        </ul>
                                    </div>
                                    <!--Vacants-->


                                    <!--Vacant skills-->
                                    <label for="">HABILIDADES</label>
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

                                
                            </div> 
                            <!--Add, edit, remove company -->

                            
                            <!--Company information-->
                            <div class="mt-3 col-sm-7">
                                <label for="">Filtrar por {{filterBy}}</label>
                                <input type="text" v-model="filterText" @input="filterCompanies">
                                
                                <div class="tableContainer">
                                    <table class=" table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre
                                                    <input type="radio" value="nombre" v-model="filterBy">
                                                </th>
                                                <th scope="col">Tipo
                                                    <input type="radio" value="tipo" v-model="filterBy">
                                                </th>
                                                <th scope="col">Actividad
                                                    <input type="radio" value="actividad" v-model="filterBy">
                                                    
                                                </th>
                                                <th scope="col">Teléfono
                                                    <input type="radio" value="telefono" v-model="filterBy">

                                                </th>
                                                <th scope="col">Dirección
                                                    <input type="radio" value="dirección" v-model="filterBy">

                                                </th>
                                                <th scope="col">Encargado
                                                    <input type="radio" value="encargado" v-model="filterBy">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="company, index in allCompanies" :key="company.id" class="pointer" @click="editCompany(company.id, index)">
                                                <td>{{company.name}}</td>
                                                <td>{{company.type}}</td>
                                                <td>{{company.about}}</td>
                                                <td>{{company.phone}}</td>
                                                <td>{{company.address}}</td>
                                                <td>{{company.tutorName}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

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




    <Transition name="bounce">
        <modalPasantia @closeModal="closeModal" v-if="isOpen">
        
        <template v-slot:header>
                <div class="formHeader ">
                    <div v-if="currentModalData === 'bemp'">
                        <span>Empresas</span>
                    </div>
                </div>
        </template>
        <template v-slot:body>

            <div v-if="currentModalData === 'bemp'">

                <!--Company information-->

            </div>

        </template>

        </modalPasantia>
    </Transition>

    <Transition name="bounce">
        <errorHandler v-if="showError" @removeError="toggleShowNotification" :isNotification="isMsgNotification" :message="errorMessage"/>
    </Transition>

</template>

<script> 

    import errorHandler from "@/components/utilities/errorHandler";
    import modalPasantia from "@/components/utilities/modalPasantia";
    import modalHandler from "@/mixins/modalHandler";

    import { useAxiosStore } from "@/stores/userStore";
export default {
    name: "bolsaEmpAdmin", 
    components: {
        modalPasantia,
        errorHandler
    },
    mixins: [modalHandler],
    data(){
        return{

            axiosStore: useAxiosStore(),
             //Handle company selection
            companyId: "", //To update
            companyData: {
                name: "",
                type: "",
                about: "",
                otherType: "",
                phone: "",
                address: "",
                tutorName: "",
            },
            //Companies modal for editing
            allCompanies: [],
            filterBy: "nombre",
            filterText: "",

            //Data for vacant registration
            campuses: [],
            careers: [],
            addVacantObj:{
                campusId: "",
                currentCareer: "",
                currentVacant: "",
            },



            //QOL vars
            isShowSubrow: false,


            //General from BD
            

            
            //Company management
            companyName: "",
            vacants: [{vacant: "KOK", skills:[0, 2, 3]}],
            currentVacantIndex: "",
            currentVacantSkill: "",



          

        }
    },
    methods: {

        
        //Company selection
        clearTableSelection(){
            const trs = document.querySelectorAll(".tableContainer table tbody tr");
            trs.forEach(tr => {tr.classList.remove("selectedRow")})
        },
        editCompany(companyId, index){
            this.clearTableSelection();

            const trs = document.querySelectorAll(".tableContainer table tbody tr");
            trs[index].classList.add("selectedRow");

            this.companyId = companyId;
            this.closeModal();
            this.companyData = {...this.allCompanies[index]};
            
            //Update campus and careers
            this.getCampus();
            
        },
        removeUpdateMode(){
            this.companyId = "";
            this.clearTableSelection();
            for(let key in this.companyData){
                this.companyData[key] = "";
            }   
        },
        filterCompanies(){
            //Tbody
            const trs = document.querySelectorAll(".tableContainer table tbody tr");
            let child = "";
            switch(this.filterBy){
                case "nombre": {
                        child = 0;
                    break;
                }
                case "tipo": {
                        child = 1;
                    break;
                }
                case "actividad": {
                        child = 2;
                    break;
                }
                case "telefono": {
                        child = 3;
                    break;
                }
                case "dirección": {
                        child = 4;
                    break;
                }
                case "encargado": {
                        child = 5;
                    break;
                }
            }  
            trs.forEach(tr => {

                const filteredRow = Array.from(tr.children)[child];
                const isVisible = filteredRow.textContent.toLowerCase().includes(this.filterText.toLowerCase());
                tr.classList.toggle("hidden", !isVisible);

            });

        },
        async getCompanies(){
            //Load companies
            const req = await this.axiosStore.axiosGet("/bemp/company");
            if(req.success){
                this.allCompanies = req.data;
            }else{ 
                this.toggleShowNotification("Error del servidor");
                this.allCompanies = [];
            }

        },



        //Vacant handlers
        async getCampus(){
            const campuses = await this.axiosStore.axiosGet("/auth/getcampus");
            if(!campuses.success){
                this.toggleShowNotification("Error del servidor");
                return;
            }
            this.campuses = campuses.data;
        },
        async setCareers(){
            const careers = await this.axiosStore.axiosGet("/maintenances/career");
            if(!careers.success){
                this.toggleShowNotification("Error del servidor");
                return;
            }
            this.careers = careers.data;
        },

        addVacant(){
            
            if(this.companyId.toString().trim().length < 1){
                this.toggleShowNotification("Selecciona una empresa");
            }
            
            //Validation
            for(let key in this.addVacantObj){
                const cv = this.addVacantObj[key];
                if(cv.toString().trim().length < 1){
                    const input = document.querySelector(`[name="${key}"]`);
                        input.focus();
                            return;
                }
            }  
            
            //Check if exists
            //Add
            const added = this.axiosStore.axiosPost("/bemp/vacants", { companyId: this.companyId, careerId: this.addVacantObj.careerId, campusId: this.addVacantObj.campusId, name: this.addVacantObj.currentVacant})
            if(!added.success){
                this.toggleShowNotification("Error del servidor");
            }

            this.addVacantObj.currentVacant = "";

        },
        removeVacant(index){ 
            this.vacants.splice(index, 1);
            this.currentVacantIndex = "";
            this.currentVacantSkill = "";
        },
        //Vacant skill handlers
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
        editCompany1(companyId){
            

            const cData = this.companyDataSample[this.companyDataSample.findIndex(e => e.id == companyId)];

            this.companyName = cData.name;
            this.vacants = cData.vacantData;
        },

        showSubrow(){
            this.isShowSubrow = !this.isShowSubrow;
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

            this.companyDataSample.forEach(e => {

                e.vacantData.forEach(vInfo => {

                    cData.push({cId: e.id, cName: e.name, vName: vInfo.vacant, vSkills: vInfo.skills, vStatus: vInfo.status});

                });

            });

            return cData;

        }

        

    },  
    watch: {
        
        filterBy(){
            this.filterText = "";
            this.filterCompanies();
        }
    },
    mounted() {
        this.getCompanies();
        this.getCampus();
        this.setCareers();
    },

}
</script>

<style scoped>


    .selectedRow{
        background-color: var(--color60) !important;
    }
    .selectedRow td{
        color: white !important;
    }


    @media only screen and (max-width: 768px) {
      
        .mobileReversedCol{
            display: flex;
            flex-direction: column-reverse;
        }


    }




    .utesaForm{
        position: relative;
    }


    @media only screen and (max-width: 576px) {
        
        .utesaForm .companyInfo .row div{
            margin-bottom: 10px;
        }

        .utesaForm .companyInfo > .row{
            margin-bottom: 0;
        }



    }

    .blockBtn{
        margin: 10px;
        width: 80%;
    }


    .tableContainer{
        min-height: 250px;
        max-height: 230px;
        overflow: auto ;
        padding: 0;
    }


    tbody tr{
        cursor: pointer;
    }

    th{
        position: sticky; top: 0;
        background: white;
        min-width: 120px;
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



