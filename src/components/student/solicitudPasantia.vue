
<template>


    <div class="container-fluid compContainer" >
        <div class="row">

            <div class="compHeader">

                <i class="fa-solid fa-briefcase"></i>

                <span>Solicitud de pasantia</span>

            </div>

            <div class="compContent">
                

                <div class="utesaForm ">

                    <div class="formHeader">
                        <span>Estudiante</span>
                    </div>

                    <div class="row ">
                            
                        <div class="col-6 formInput">
                            
                            <div class="row">
                                <div class="col-auto">
                                    <label for="">NOMBRE:&nbsp; &nbsp; &nbsp; </label>
                                </div>
                                <div class="col ">
                                    <span class="bold">LUIS GERMAN REYES PEÑA</span>
                                </div>
                            </div>


                        </div>
                        <div class="col-6  formInput">

                            <div class="row">
                                <div class="col-auto  ">
                                    <label for="">CARRERA: &nbsp; </label>
                                </div>
                                <div class="col ">
                                    <span class="bold">ING. EN SISTEMAS COMPUTACIONALES</span>
                                </div>
                            </div>

                        </div>


                        <div class="col-6  formInput">

                                <div class="row">
                                    <div class="col-auto">
                                        <label for="">MATRICULA:</label>
                                    </div>
                                    <div class="col">
                                        <span class="bold">2-17-2038</span>
                                    </div>
                                </div>

                        </div>

                        <div class="col-6   formInput">
                        
                            <div class="row">
                                <div class="col-auto">
                                    <label for="">TELEFONO:</label>
                                </div>
                                <div class="col">
                                    <input type="text">
                                </div>
                            </div>
                            
                        </div>

                        <div class="col-12  formInput ">

                            <div class="row">
                                <div class="col-auto">
                                    <label for="">DIRECCIÓN:&nbsp; </label>
                                </div>
                                <div class="col">
                                    <input type="text">
                                </div>
                            </div>
                            
                        </div>
 

                    </div>

                    <div class="lineThrough"></div>

                    <div class="row">
                        
                        <span>NIVEL DE PASANTIA:</span>

                        <div>
                            <input type="radio">
                            <label class="bold ml10"> TÉCNICO</label>
                        </div>
                        <div>
                            <input type="radio">
                            <label class="bold ml10"> PROFESIONAL</label>
                        </div>

                    </div>
                
                </div>
                

            </div>

        </div>
    </div>

   



</template>

<script>
export default {


}
</script>

<style scoped>

    .compHeader{
        display: inline-flex;
        padding: 15px;
        background-color: white;
        margin-bottom: 30px;
    }
    .compHeader i{
        font-size: 40px;
        margin-top: 4px;
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
        margin-bottom: 5px;
        padding: 30px  30px 30px;
    }
    
    .formHeader{
        font-size: 25px;
        font-weight: 350;
        margin-bottom: 15px;
    }
 
    .formInput input{
        width: 100%;
        border-radius: 3px;
        border: solid 1.3px gray; 
    }
    .formInput{
        margin-bottom: 7px;
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


</style>



