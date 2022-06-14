<template>
    <div class="p-4">
        <v-row>
            <v-col cols="12" lg="6">
                <v-card elevation="8" style="height: 100%">
                    <v-card-title><p class="h2">Préstamos Anuales</p></v-card-title>
                    <v-card-text>
                        <v-sparkline :value="valuesGraphic" smooth>
                            <template v-slot:label="item">
                                {{item.value}}
                            </template>
                        </v-sparkline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6">
                <v-row>
                    <v-col xs="12" sm="6">
                        <v-card elevation="8" class="tarjetas">
                            <v-card-text>
                                <v-row>
                                    <v-col class="d-flex justify-content-center align-items-center">
                                        <v-icon class="p-4 white--text container-icon">mdi-account-group</v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-row><v-col class="pb-0"><p class="font-weight-black">Número de clientes</p></v-col></v-row>
                                        <v-row><v-col class="pt-0"><span>#</span></v-col></v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col xs="12" sm="6">
                        <v-card elevation="8" class="tarjetas">
                            <v-card-text>
                                <v-row>
                                    <v-col class="d-flex justify-content-center align-items-center">
                                        <v-icon class="p-4 white--text container-icon">mdi-credit-card</v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-row><v-col class="pb-0"><p class="font-weight-black">Préstamos Activos</p></v-col></v-row>
                                        <v-row><v-col class="pt-0"><span>#</span></v-col></v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6">
                        <v-card elevation="8" class="tarjetas">
                            <v-card-text>
                                <v-row>
                                    <v-col class="d-flex justify-content-center align-items-center">
                                        <v-icon class="p-4 white--text container-icon">mdi-account-cash</v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-row><v-col class="pb-0"><p class="font-weight-black">Préstamos Pendientes</p></v-col></v-row>
                                        <v-row><v-col class="pt-0"><span>#</span></v-col></v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col xs="12" sm="6">
                        <v-card elevation="8" class="tarjetas">
                            <v-card-text>
                                <v-row>
                                    <v-col class="d-flex justify-content-center align-items-center">
                                        <v-icon class="p-4 white--text container-icon">mdi-cash-multiple</v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-row><v-col class="pb-0"><p class="font-weight-black">Monto por Cobrar</p></v-col></v-row>
                                        <v-row><v-col class="pt-0"><span>#</span></v-col></v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col >
                <v-card-title class="black white--text h4">Pagos
                    <v-spacer></v-spacer>
                    <span class="choiceDate">12/12/2022</span>
                </v-card-title>
            </v-col>
        </v-row>

        <DialogDate></DialogDate>
    </div>
</template>

<script>
import DialogDate from '../components/DialogDate.vue';
export default {
    data(){
        return{
            valuesGraphic:[10,20,1,6,15,8,9,11,4,1,18,5]
        }
    },
    components:{
        DialogDate
    }
}
</script>

<style scoped>
    .tarjetas{
        border-left: 5px solid rgb(240, 208, 66);

    }
    .container-icon{
        font-size: 50px;
        border-radius:100%;
        background-color:#006a82;
    }
    .choiceDate{
        cursor: pointer;
    }
</style>