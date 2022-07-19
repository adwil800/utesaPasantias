<template >

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Mantenimientos - Bolsa de empleos</span>

            </div>

            <!--Comp body-->
            <div>
                
                


                <!--Form bolsa de empleos-->
                <div class="utesaForm">

                    <!--Registro empresas bolsa de empleos-->
                    <div>

                        <div class="formHeader">
                            <span>Empresas</span>
                        </div>
                        
                        <div class="companyInfo mb-3">
                            <div class="row">
                                    
                                <div class="col-sm ">
                                        
                                    <div class="inputGroup ">
                                    <label for="" class="alignCenter">NOMBRE:</label>

                                        <input type="text" v-model="companyData.name" name="name" class="noRightRadius"
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                        <i class="inputGroupAddon noLeftRadius fa-solid fa-search utesaBtn" :class="this.companyId !== '' ? 'noRightRadius' : {}" @click="openModal('bemp')"></i>
                                        <i class="inputGroupAddon noLeftRadius fa-solid fa-xmark utesaDanger" v-if="this.companyId !== ''" @click="removeUpdateMode"></i>

                                    </div>

                                </div>
                                <div class="col-sm flexCenter">

                                    <label for="">TIPO:</label>
                                    <select v-model="companyData.type" name="type" >
                                        <option value="" disabled selected>Selecciona</option>
                                        <option v-for="(type, index) in companyTypes" :key="index" :value="type">{{type}}</option>
                                    </select>

                                    <input class="ml-5" type="text" name="otherType" v-if="companyData.type === 'Otras'" v-model="companyData.otherType">

                                </div>

                            </div>

                            <div class="row">
                                <div class="col-sm  flexCenter">

                                    <label for="">TELEFONO:</label>
                                    <input type="text" v-model="companyData.phone" name="phone">

                                </div>

                                <div class="col-sm  flexCenter">
                        
                                    <label for="">DIRECCIÓN:</label>
                                    <input type="text" v-model="companyData.address" name="address">
                                    
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm  flexCenter">

                                    <span for="">NOMBRE DEL ENCARGADO:</span>
                                    <input type="text" v-model="companyData.tutorName" name="tutorName">

                                </div>

                                <div class="col-sm  flexCenter">
                        
                                    <label for="">ACTIVIDAD:</label>
                                    <input type="text" v-model="companyData.about" name="address">
                                    
                                </div>
                            </div>

                            <div class="col-sm-8">
                                
                                
                                
                            </div>
                        </div>

                        <button class="Ubtn utesaBtn alignRight" @click="submitRequest" v-if="this.companyId === ''">Registrar</button>
                        <button class="Ubtn utesaDanger alignRight" @click="submitRequest" v-else-if="this.companyId !== ''">Actualizar</button>

                    </div>

                        

                    <!--Habilidades por carreras-->
                    <div class="mt-4">
                        <div class="formHeader">
                            <span>Habilidades por carreras</span>
                        </div>


                        <div class="col-sm-6 mb-1">
                            <span>Habilidades a utilizar en la bolsa de empleos categorizado por carreras</span>
                            <!--Skills-->
                            <div class="inputGroup">

                                <!--Career skills-->
                                <select class="noRightRadius" v-model="careerSkillData.currentCareer" name="currentCareer"
                                @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                    <option value="" disabled selected> Carrera </option>
                                    <option v-for="career in careers.data" :key="career.idcarrera" :value="career.idcarrera">{{career.nombre}}</option>
                                </select>
 
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

                <label for="">Filtrar por {{filterBy}}</label>
                <input type="text" v-model="filterText" @input="filterCompanies">


                <!--Company information-->  
                <div class="tableContainer mt-3">
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
    name: "mantBolsaEmpleos",
    components: {
        errorHandler,
        modalPasantia
    },
    mixins: [modalHandler],
    data(){
        return {
            axiosStore: useAxiosStore(),

            //Handle new companies
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
            companyTypes: ["Industrial", "De servicios", "Comercio", "Pública", "Privada" ,"Otras"],
            //Companies modal for editing
            allCompanies: [],
            filterBy: "nombre",
            filterText: "",




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

        //Handle new company
        alignLabels(selector){
        
            //Align all labels on studentInfo section
            const labels = [...document.querySelectorAll(selector)];
            let max = Math.max.apply(Math, labels.map(e => {return e.offsetWidth})) + 3;
            labels.forEach(e => e.style.marginRight = max - e.offsetWidth+"px")
            
        }, 
        async submitRequest(){

                for(let key in this.companyData){
                    const cv = this.companyData[key];
                    console.log(cv)
                    //receiptNumber can be empty
                    if(key === "otherType" || key === "id"){
                        continue;
                    }else{
                        if(key === "type" && cv === "Otras"){
                            if(this.companyData["otherType"].trim().length < 1){
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
                if(!this.companyId){
                    //Send new request
                    request = await this.axiosStore.axiosPost("/bemp/company", {requestData: this.companyData});
                }else{
                    //Update request
                    console.log("updating")
                    request = await this.axiosStore.axiosPut("/bemp/company", {requestData: this.companyData, companyId: this.companyId});
                }
                if(request.success){
                    if(this.companyId !== ''){
                        this.toggleShowNotification("Registro actualizado", true);
                        this.removeUpdateMode();
                    }
                    else if(this.companyId === '')
                        this.toggleShowNotification("Registro existoso", true);
                        
                    //clear elements
                    for(let key in this.companyData){
                        this.companyData[key] = "";
                    }   
                }
                else{
                    this.toggleShowNotification("Error del servidor")
                }
                




        },
        editCompany(companyId, index){
            this.companyId = companyId;
            this.closeModal();
            
            this.companyData = this.allCompanies[index];

            if(!this.companyTypes.includes(this.companyData.type)){
                this.companyData.type = "Otras";
            }
            
            //Set update mode
        },
        removeUpdateMode(){
            this.companyId = "";
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

                console.log(isVisible)
                tr.classList.toggle("hidden", !isVisible);

            });



        },





        //Handle career skills
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

            this.careerSkillData.newSkill = "";
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
        },
        async currentModalData(){
            if(this.currentModalData === "bemp"){
                //Load companies
                const req = await this.axiosStore.axiosGet("/bemp/company");
                if(req.success){
                    this.allCompanies = req.data;
                }else{ 
                    alert("Algo salió mal!");
                    this.allCompanies = [];
                }
            }
        },
        filterBy(){
            this.filterText = "";
            this.filterCompanies();
        }
    },
    mounted() {
        this.setCareers();
        this.alignLabels(".utesaForm .companyInfo label");
    },
    updated(){
        this.alignLabels(".utesaForm .companyInfo label");
    }


}
</script>

<style scoped>
    
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

    .utesaForm{
        position: relative;
    } 
    .utesaForm .studentInfo > .row, .utesaForm .companyInfo > .row{
        margin-bottom: 10px;
    }
    .flexCenter{
      display: flex;
      align-items:center;
    }

    .alignCenter{
      align-self:center;
    }

    

    .tableContainer{
        min-height: 230px;
        max-height: 230px;
        overflow: auto ;
        padding: 0;
    }


    th{
        position: sticky; top: 0;
        background: white;
    }


</style>