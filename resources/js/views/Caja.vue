<template>
    <div>
        <v-row class="m-0" style="background: #006a82" justify="space-between">
                <v-col cols="12" md="6" style="margin: auto">
                    <div style="margin-left: 2em">
                        <div class="resized white--text font-weight-bold d-block">Monto de dinero en caja</div>
                        <div class="resized white--text font-weight-bold d-block" >$0.00 MXN</div>
                    </div>

                </v-col>
                <v-col cols="12" md="6">
                   <div >
                        <v-text-field
                            style="min-width: 50%;max-width: 100%"
                            dense
                            color="#006a82"
                            background-color="white"
                            hint="Ingreso de dinero"
                            persistent-hint
                            outlined
                            class="white--text d-inline-flex"
                            prepend-inner-icon="mdi-currency-usd"
                        ></v-text-field>
                            <v-btn
                            class="white--text d-inline-flex"
                            tile
                            color="#002b32"
                            depressed
                        >Agregar dinero a caja</v-btn>
                    </div>
                    <div>
                        <v-text-field
                        style="min-width: 50%;max-width: 100%"
                        dense
                        color="#006a82"
                            hint="Egreso de dinero"
                            persistent-hint
                            outlined
                            background-color="white"
                            class="white--text d-inline-flex"
                            prepend-inner-icon="mdi-currency-usd"
                        ></v-text-field>
                            <v-btn

                            color="#002b32"
                            class="d-inline-flex white--text"
                            tile
                            depressed
                        >Retira dinero a caja</v-btn>
                </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12">
                    <div class="black p-2 text-center text-md-left d-block d-md-flex">
                        <p class="d-block white--text text-h4 float-none">Reporte de ingresos</p>
                        <div class="d-flex justify-center d-md-block">
                            <div class="d-block d-md-flex justify-center" style="max-width: 200px">
                                <v-menu
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto">
                                    <template
                                        v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            label="Picker without buttons"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                    ></v-date-picker>
                                </v-menu>
                            </div>
                        </div>

                    </div>
                    <!---->
                    <v-data-table
                        :headers="headers"
                        :search="search"

                        item-key="id">
                    </v-data-table>
                    <!---->
                    <div>
                        <p class="text-h5 text-right">Total:</p>
                    </div>
                </v-col>
            </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search:'',
            headers: [
                {text:'Código', value:'codigo'},
                {text:'Ingreso', value:'ingreso'},
                {text:'Fecha', value:'fecha'},
                {text:'Motivo', value:'motivo'}
            ]
        }
    }
}
</script>

<style scoped>
.resized{
    font-size: 2em;
}

.v-messages__message{
    color: white;
}
</style>
