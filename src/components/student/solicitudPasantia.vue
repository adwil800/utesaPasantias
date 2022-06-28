
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantia</span>

            </div>

            <!--Comp body-->
            <div class="">
                


                <!--Info requisitos-->
                <div class="reqForm "> <!--Unnecessary-->

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
                    
                    <div class="req">

                        <div class="reqIcon pendingReq">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </div>
                        
                        <div class="reqInfo">
                            <span class="bold">PAGO DERECHO A PASANTIA</span>

                            <div class="reqStatus">
                                Pendiente
                            </div>
                        </div>

                    </div>

                    <div class="req">

                        <div class="reqIcon pendingReq">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </div>
                        
                        <div class="reqInfo">
                            <span class="bold">COPIA DE CÉDULA</span>

                            <div class="reqStatus">
                                Pendiente
                            </div>
                        </div>

                    </div>


                </div>



                <!--Form solicitud-->
                <div class="utesaForm ">

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

                        <div class="flexCenter d-flex">
                            <input type="radio">
                            <label class="bold ml10"> TÉCNICO</label>
                        </div>
                        <div class="flexCenter d-flex">
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
                
            </div>
                

        </div>

    </div>

   



</template>

<script>
export default {
    name: "solicitudPasantia",
    data(){
        return{

        }
    },
    methods: {
          
        alignLabels(selector){
            
            //Align all labels on studentInfo section
            const labels = [...document.querySelectorAll(selector)];
            let max = Math.max.apply(Math, labels.map(e => {return e.offsetWidth})) + 3;
            labels.forEach(e => e.style.marginRight = max - e.offsetWidth+"px")
            
        }
    },
    mounted(){
                
                
        this.alignLabels(".utesaForm .studentInfo label");
        this.alignLabels(".utesaForm .companyInfo label");

    }

}

    

</script>

<style scoped>

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
    }
    .reqIcon i{
        font-size: 60px;
        color: white;
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
 



















    .compHeader{
        display: flex;
        padding: 15px;
        background-color: white;
        margin-bottom: 30px; 
    }
    .compHeader i{
        font-size: 40px;
        align-self: center;
    }
    .compHeader span{
        font-size: 30px;
        margin-left: 40px;
    }
    /**Form */
    .utesaForm{
        box-shadow:  0px 0px 5px gray;
        border-radius: 10px;
        background-color: white;
        margin-bottom: 30px;
        padding: 30px  30px 30px;
    }
    
    .formHeader span{
        font-size: 27px;
        font-weight: 350;
        margin-bottom: 15px;
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



