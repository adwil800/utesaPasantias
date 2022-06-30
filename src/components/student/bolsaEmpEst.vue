<template>
    


    <div class="container-fluid hidden" >
            <div class="row">
                
                <!--Comp header-->
                <div class="compHeader">

                    <i class="fa-solid fa-key"></i>

                    <span>Bolsa de empleos </span>

                </div>

                <!--Comp body-->
                <div>

                    <div class="utesaForm ">





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

                        <div class="">
                            
                            <p>Selecciona el área donde mejor te desempeñas y agregala a tus habilidades! 
                                Estas serán utilizadas para realizar el emparejamiento con la institución
                                que mas te convenga, se te notificará por correo una vez dicha asignación ocurra.
                            </p>


                            <div class="row">
                                <div class="col-md-6 mb-3">

                                    <div class="inputGroup">
                                        <select class="noRightRadius" 
                                        @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                            <option value="" selected> Selecciona </option>
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

                                
                                </div>

                                <div class="col-12">

                                        <ul class="skillSet">
                                            <li>Php</li>
                                            <li>React</li>
                                            <li>Css</li>
                                            <li>Tailwind Css</li>
                                            <li>Python</li>
                                            <li>Java</li>

                                        </ul>

                                </div>
                            
                            
                            
                            </div> 

                        </div>













                    </div>

                </div>



            </div>
    </div>

    <bolsaEmpAdmin/>

    

</template>

<script> 

import bolsaEmpAdmin from "@/components/admin/bolsaEmpAdmin.vue";

export default {
    name: "bolsaEmpEst", 
    components:{
        bolsaEmpAdmin
    }


}
</script>

<style scoped>


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









 
</style>



