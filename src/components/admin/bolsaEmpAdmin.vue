<template>
  
<div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-key"></i>

                <span>Bolsa de empleos (Admin) - loading from Student bemp </span>

            </div>

            <!--Comp body-->
            <div>

                <div class="utesaForm ">
                    
                    <div class="bempNav ">
                        <div class="bempNavItems">
                            <span>&nbsp;Administrar bolsa&nbsp;</span>
                            <span>&nbsp;Administrar solicitudes&nbsp;</span>
                        </div DESIGN A FANCY LIST COMPONENT LIKE  REQ ON HOME SITE TO DISPLAY AVAILABLE VACANTS AND STUFF>
                    </div>



                    <div class="companyManagement mt-4 ">
                        <!--My bemp skills-->
                        <div class="formHeader">
                            <span>Administrar empresas</span>
                        </div>

                        <div class="row mobileReversedCol">
                            
                            <!--Add, edit, remove company-->
                            <div class="col-md-6 mb-3">

                                <label for="">Empresa</label>
                                <input type="text">
                                    <!--Vacants-->
                                    <label for="">Vacantes</label>
                                    <div class="inputGroup">
                                        <input type="text" class="noRightRadius" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                        <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius">Agregar</button>
                                    </div>
                                        

                                    <ul class="companyVacants mt-3">
                                        <li>Php</li>
                                        <li>React</li>
                                        <li>Css</li>
                                        <li>Tailwind Css</li>
                                        <li>Python</li>
                                        <li>Java</li>

                                    </ul>
                                    <!--Vacants-->


                                    <!--Vacant skills-->
                                    <label for="">Habilidades</label>
                                    <div class="inputGroup">

                                        <!--Vacant-->
                                        <select class="noRightRadius" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                            <option value="" selected> Vacante </option>
                                            <option value="">Programmer</option>
                                            <option value="">System analyst</option>
                                        </select>

                                        <!--Vacant skills-->
                                        <select class="noRightRadius noLeftRadius" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                            <option value="" selected> Skill </option>
                                            <option value="">Php</option>
                                            <option value="">Vue.js</option>
                                            <option value="">React.js</option>
                                            <option value="">Node.js</option>
                                            <option value="">Express.js</option>
                                            <option value="">React native</option>
                                            <option value="">Html</option>
                                            <option value="">Css</option>
                                            <option value="">Tailwind Css</option>
                                            <option value="">Python</option>
                                            <option value="">Java</option>
                                            <option value="">C#</option>
                                            <option value="">Asp.net</option>
                                            <option value="">Sql server</option>
                                        </select>
                                        
                                        <button class="Ubtn utesaBtn inputGroupAddon noLeftRadius">Agregar</button>
                                    </div>
                                        

                                    <ul class="skillSet mt-3">
                                        <li>Php</li>
                                        <li>React</li>
                                        <li>Css</li>
                                        <li>Tailwind Css</li>
                                        <li>Python</li>
                                        <li>Java</li>

                                    </ul>
                                    <!--Vacant skills-->

                                    Handle edit mode on table click
                                
                                
                            </div> 
                            <!--Add, edit, remove company-->

                            <!--Company information-->
                            <div class="col-md-6 companiesTable mb-3">
                                <table class=" table table-striped table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Empresa</th>
                                        <th scope="col">Vacante</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Creado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Makr.co</td>
                                            <td>Programmer</td>
                                            <td>1/1</td>
                                            <td>Disponible</td>
                                            <td>02/03/04</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>KeenEye</td>
                                            <td>Software analyst</td>
                                            <td>1/3</td>
                                            <td>Asignada</td>
                                            <td>02/03/04</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>KeenEye</td>
                                            <td>Software analyst</td>
                                            <td>2/3</td>
                                            <td>Disponible</td>
                                            <td>02/03/04</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>KeenEye</td>
                                            <td>Software analyst</td>
                                            <td>3/3</td>
                                            <td>Disponible</td>
                                            <td>02/03/04</td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                            <!--Company information-->


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








    .companiesTable, .vacantAssigmentTable{
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



    .skillSet, .companyVacants{
        list-style-type: none;
        padding: 0;
    }

    .skillSet li, .companyVacants li{
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
    .skillSet li:hover, .skillSet li:active,
    .companyVacants li:hover, .companyVacants li:active
    { /**Handle dbl click to remove skill */
        background-color: var(--htmlBgHover);
    }






 
</style>



