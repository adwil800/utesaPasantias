
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantia</span>

            </div>

            <!--Comp body-->
            <div>
                
 
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
    name: "solicitudEst",
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
 
    /**Form */
    
 
   

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



