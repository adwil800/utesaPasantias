
<template>

    <div class="container-fluid" >
        <div class="row">
            
            <!--Comp header-->
            <div class="compHeader">

                <i class="fa-solid fa-house"></i>

                <span>Información general?</span>

            </div>

            <!--Comp body-->
            <div class="">
                
                
                <!--Info general-->
                <div class="utesaForm ">

                    <div class="formHeader ">
                        <span>Proceso de pasantia</span>
                    </div>

                    <div class="genInfo">

                        <p>
                            El proceso de pasantía es esto y aquello con el objetivo 
                            de colocar al estudiante en un entorno real donde tendrá que poner 
                            a prueba sus habilidades técnicas.
                        </p>

                    </div>

                    <div class="formHeader mb-2">
                        <span>Requisitos previos</span>
                    </div>

                    <!--Info requisitos-->
                    <div class="reqForm ">  
                        
                        <div class="inlineFlex">

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

                            <div class="mBoth7"></div>

                            <div class="req">

                                <div class="reqIcon pendingReq">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <i class="reqMoreInfo fa-solid fa-circle-exclamation" @click="openModal"></i>
                                </div>
                                
                                <div class="reqInfo">
                                    <span class="bold">PAGO DERECHO A PASANTIA</span>

                                    <div class="reqStatus">
                                        Pendiente
                                    </div>
                                </div>

                            </div>    

                        </div>    

                       

                    </div>


                </div>





                <!--Request is being processed-->
                <div class="utesaForm ">

                    
                    <div class="formHeader ">
                        <span>Proceso de pasantia</span>
                    </div>
                
                    <div class="">

                        <p>
                            Tu solicitud está siendo procesada por nuestro equipo, se te noficará una vez haya 
                            sido completada. 
                        </p>
                        <p>
                            Ten en cuenta que has aplicado a la <a href="#">bolsa de empleos</a>, se te notificará
                            una vez hayamos encontrado una empresa compatible con tus habilidades.
                        </p>

                    </div>

                </div>


                    
                
            </div>
                

        </div>

    </div>

    <Transition name="bounce">
        <modalPasantia @closeModal="closeModal" v-if="isOpen">
        
        <template v-slot:header>
                <div class="formHeader ">
                    <span>¿Como completar el requisito pago derecho a pasantía?</span>
                </div>
        </template>
        <template v-slot:body>

                <ol>
                    <li>
                        Introduce el número de recibo al momento de solicitar tu pasantía
                    </li>
                    <li>
                        Haz un pago a tesorería de forma presencial
                    </li>
                
                </ol>
                
        </template>

        </modalPasantia>
    </Transition>



</template>

<script>

    import modalPasantia from "@/components/general/utilities/modalPasantia.vue"

    import modalHandler from "@/mixins/modalHandler";


export default {
    name: "homePasantia",
    components:{
        modalPasantia
    },
    mixins: [modalHandler],
    data(){
        return{
        }
    },
    methods: {
          
    },
    mounted(){

    }

}

    

</script>

<style scoped>
 
    .inlineFlex{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mBoth7{
       margin-left: 7px; 
       margin-right: 7px;
    }

    @media only screen and (max-width: 768px) {
        
        .inlineFlex{
            flex-direction: column;
        }
        .mBoth7{
            display:none;
        }
    }























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
        position: relative;
    }
    .reqIcon i{
        font-size: 60px;
        color: white;
    }
    /*Popup offering a solution for pending requirement */
    .reqIcon .reqMoreInfo{
        font-size: 23px;
        position:absolute;
        top: 5px;
        left: 5px;
        cursor: pointer;
        transition: ease 0.3s;
    }
    .reqIcon .reqMoreInfo:hover{
        opacity: 0.85;
    }

    .reqIcon .reqMoreInfo:active{
        opacity: 0.85;
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
 
 

   

</style>



