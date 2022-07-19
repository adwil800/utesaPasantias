<template>
  
<div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantía (admin) </span>

            </div>

            <!--Comp body-->
            <div>

                <div class="utesaForm ">
                    



                    <div class="">

                        <div class="formHeader">
                            <span>Administrar solicitudes</span>
                        </div>

                        <div class="row mobileReversedCol">
                            
                            <!--Requests-->
                            <div class="col-12">


                            
                                <label for="">Filtrar</label>
                                <div class="inputGroup">
                                    <input type="text"
                                    @focus="inputGroupShading" @blur="inputGroupShading($event, false)">
                                </div>




                                <div class="tableContainer mb-3">

                                    <table class=" table table-striped table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">Matricula</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Estado?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr  @click="openModal">
                                                <td>1-16-1609</td>
                                                <td>Adwil Castillo</td>
                                                <td>02/02/02</td>
                                                <td>Inicial</td>
                                                <td>Pendiente</td>
                                            </tr>
                                            <tr>
                                                <td>1-16-1609</td>
                                                <td>Adwil Castillo</td>
                                                <td>02/02/02</td>
                                                <td>Inicial</td>
                                                <td>Pendiente</td>
                                            </tr>
                                            <tr>
                                                <td>1-16-1609</td>
                                                <td>Adwil Castillo</td>
                                                <td>02/02/02</td>
                                                <td>Inicial</td>
                                                <td>Pendiente</td>
                                            </tr>
                                            <tr>
                                                <td>1-16-1609</td>
                                                <td>Adwil Castillo</td>
                                                <td>02/02/02</td>
                                                <td>Inicial</td>
                                                <td>Pendiente</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>

                            </div>
                            <!--Requests-->

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
                    <span>Solicitud xyz #23</span>
                </div>
                    <a href="#">Copia de cédula</a> <br>
                    <a href="#">Comprobante de pago</a>
            </template>
            <template v-slot:body>

                <div class="pad30">

                    <div class="formHeader">
                        <span>Estudiante</span>
                    </div>

                    <!--Datos del estudiante-->
                    <div class="">
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
                    <div class="mt-2">
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
                    <!--Datos de empresa-->

                    <div class="formHeader">
                        <span>Empresa</span>
                    </div>
                    
                    <div class="companyInfo">
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

                </div>


            </template>

        </modalPasantia>
    </Transition>








</template>

<script> 
    
    import modalPasantia from "@/components/utilities/modalPasantia.vue";
    import modalHandler from "@/mixins/modalHandler";
    


export default {
    name: "solicitudAdmin", 
    components: {
        modalPasantia
    },
    mixins: [modalHandler],

}
</script>

<style scoped>


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

    .pad30{
        padding: 30px 30px 30px;
    }

    .ml10{
        margin-left: 10px;
    }



    .flexCenter{
      display: flex;
      align-items:center;
    }
    
    @media only screen and (max-width: 400px) {
            
        .flexCenter{
            display: initial;
        }
    }


 
    .row{
        margin-bottom: 10px;
    }

</style>



