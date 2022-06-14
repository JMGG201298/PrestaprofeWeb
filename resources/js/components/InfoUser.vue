<template>
    <div v-if="client!=null">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar color="#006a82">
                    <v-toolbar-title style="color:white">Informacion detallada</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="openDialog">
                        <v-icon color="white">mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-card elevation="3">
                            <v-card-title class="black white--text py-4 mb-4 text-center">ID&nbsp;<span>{{client.id}}</span></v-card-title>
                            <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Nombre(s): <span>{{client.name}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Apellidos: <span>{{client.last_name}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>CURP: <span>{{client.curp}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Genero: <span>{{client.gender}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Fecha de nacimiento: <span>{{client.birth_date}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Estado civil: <span>{{client.civil_status}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Dirección: <span>{{client.address}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Telefono: <span>{{client.phone}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Correo: <span>{{client.email}}</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>RFC: <span>{{client.rfc}}</span></p>
                                </v-col>
                            </v-row>
                            </v-card-text>
                            <hr>
                            <v-row class="px-4">
                                <v-col cols="12" sm="6" md="4">
                                    <v-card>
                                        <v-card-text>
                                            <div class="contenedorFoto">
                                                <img @click="openDialogImagen(client.selfie)" class="fotos" :src="client.selfie" />
                                            </div>
                                        </v-card-text>
                                        <v-card-subtitle class="py-0 text-center">Selfie</v-card-subtitle>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-card>
                                        <v-card-text>
                                            <div class="contenedorFoto">
                                                <v-btn v-if="client.ine.split('.')[1]=='pdf'" target="_blank" :href="getDomain+'/'+client.ine" >Ver pdf</v-btn>
                                                <img v-else @click="openDialogImagen(client.ine)" class="fotos" :src="client.ine"/>
                                            </div>
                                        </v-card-text>
                                        <v-card-subtitle class="py-0 text-center">INE</v-card-subtitle>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-card>
                                        <v-card-text>
                                            <div class="contenedorFoto">
                                                <img @click="openDialogImagen(client.pay_stub)" class="fotos" :src="client.pay_stub"/>
                                            </div>
                                        </v-card-text>
                                        <v-card-subtitle class="py-0 text-center">Comprobante de pago</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                        <br>
                        <v-card elevation="3" shaped>
                            <v-card-title class="black white--text py-4 mb-4">Referencias</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <p>Nombre: <span>{{client.first_reference_person_name}}</span></p>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <p>Telefono: <span>{{client.first_reference_person_phone}}</span></p>
                                    </v-col>
                                </v-row>
                                <hr>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <p>Nombre: <span>{{client.second_reference_person_name}}</span></p>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <p>Telefono: <span>{{client.second_reference_person_phone}}</span></p>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>

        <DialogImagen v-if="isShowDialog" :path="path" @closeDialog="closeDialog"></DialogImagen>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import DialogImagen from './DialogImagen.vue'
export default {
    name: 'InfoUser',
    components:{
        DialogImagen
    },
    data(){
        return{
            estatusForm:true,
            path:'',
            isShowDialog:false
        }
    },
    computed:{
        ...mapState({
            dialog: state=>state.clientsStore.dialog
        }),
        ...mapState({
            client:state=>state.clientsStore.client
        }),
        getDomain(){
            return window.location.origin
        }
    },
    methods:{
        ...mapMutations(['openDialog']),
        openDialogImagen: function(path){
            this.path=path;
            this.isShowDialog=true;
        },
        closeDialog: function(){
            this.isShowDialog=false;
        }
    },
    mounted: function(){
    }
}
</script>

<style scoped>
    p{
        font-size: 17px;
        font-weight: 800;
    }
    span{
        font-size: 16px;
        font-weight: 500;
    }
    /*.fotos{
        width: 229px;
        height: 180px;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
    }
    .iconoFoto{
        display: none;
    }
    .fotos{
        transition: transform .2s;
    }

    .fotos:hover .iconoFoto{
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .fotos:hover{
        cursor: pointer;
        transform: scale(1.5);
        z-index: 10;
    }*/
    .contenedorFoto{
        overflow: hidden;
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
    .fotos{
        height: 100%;
        transition: all .3s ease;
        object-fit: contain;
    }
    .fotos:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
</style>