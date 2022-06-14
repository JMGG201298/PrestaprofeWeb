import { default } from './Login.vue';
<template>
    <div class="p-3">
        <v-card>
            <v-card-title class="black">
                <span class="white--text">Lista de clientes</span>
                <v-spacer></v-spacer>
                <v-text-field
                    append-icon="mdi-magnify"
                    label="Buscar..."
                    solo
                    single-line
                    hide-details
                    v-model="search"
                    dense
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                    class="ma-2"
                    id="btnHerramientas"
                    @click="showTools"
                >Herramientas de búsqueda
                <v-icon>mdi-menu-down</v-icon></v-btn>
            </v-card-title>
            <v-card-actions
                v-if="isBtnSearchTools"
                class="contenedorHerramientas">
                <v-select
                    label="Seleccionar Estado"
                    :items="loanStates"
                    item-text="name"
                    solo
                    hide-details
                    class="cbBusqueda"
                    dense
                    v-model="searchState"
                ></v-select>
                <v-spacer></v-spacer>
                <v-select
                    label="Seleccionar Nivel"
                    solo
                    hide-details
                    class="cbBusqueda"
                    dense
                ></v-select>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-data-table
                :headers="headers"
                :items="filters"
                :search="search"
                show-select
                :item-class="colorRow">
                <template v-slot:item.name="{item}">
                    {{item.last_name+' '+item.name}}
                </template>
                <template v-slot:item.state="{item}">
                    {{item.state}}
                    <v-menu
                        top
                        offset>
                        <template v-slot:activator="{on,attrs}">
                            <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item2, index) in listStates"
                                :key="index"
                                link
                                dense
                                v-on:click="changeStatusLoan(item2, item)">
                                <v-icon>{{item2.icon}}</v-icon>
                                <v-list-item-title>
                                    {{item2.title}}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                </template>
                <template v-slot:item.base_amount="{item}">
                    {{mxCurrencyFormat.format(item.base_amount)}}
                </template>
                <template v-slot:item.term="{item}">
                    {{item.term + " días" }}
                </template>
                <template v-slot:item.accion="{item}">
                    <v-btn
                        icon>
                        <v-icon
                            v-on:click="openDialogPdf(item)"
                        >mdi-eye</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>

        <DialogPdf ref="dialogPdfComponent" :loan="loan"></DialogPdf>
        <DialogNote></DialogNote>
    </div>
</template>

<script>
import DialogPdf from '../components/DialogPdf.vue';
import DialogNote from '../components/DialogNote.vue';
import { mapState } from 'vuex';

export default ({
    data() {
        return {
            mxCurrencyFormat: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
            headers: [
                {text:'Nombre(s)', value:'name'},
                {text:'Monto del préstamo', value:'base_amount'},
                {text:'Fecha', value:'application_date'},
                {text:'Plazo', value:'term'},
                {text:'Estado', value:'state'},
                {text:'Acción', value:'accion'},
                {text:'ID', value:'id'}],
            search:'',
            listStates:[
                {title:'Revisar préstamo', icon: 'mdi-magnify', id: 2},
                {title:'Aceptar préstamo', icon: 'mdi-check', id: 3},
                {title:'Rechazar préstamo', icon: 'mdi-close', id: 8}
            ],
            isBtnSearchTools:false,
            searchState:'',
            src:'http://127.0.0.1:8000/api/loan-pdf/1',
            isDialogPdf:false,
            loan:{}
        }
    },
    methods: {
        openDialogPdf(loan){
            this.loan=loan;
            this.$refs.dialogPdfComponent.changePdf("http://127.0.0.1:8000/api/loan-pdf/"+loan.id+"#toolbar=0");
            this.$refs.dialogPdfComponent.openPdf();
        },
        colorRow(item){
            let clase='No';
            if(item.state=="Pendiente")
                clase="colorPendiente";
            if(item.state=="Revisión")
                clase="colorRevision";
            if(item.state=="Activo")
                clase="colorActivo";
            if(item.state=="Vencido")
                clase="colorVencido";
            if(item.state=="Congelado")
                clase="colorCongelado";
            if(item.state=="Pagado")
                clase="colorPagado";
            if(item.state=="Rechazado")
                clase="colorRechazado";

            return clase;
        },
        iconState(state){
            let icono="";
            if(state.name=="Pendiente")
                icono="mdi-clock-outline";
            if(state.name=="Revisión")
                icono="mdi-magnify";
            if(state.name=="Activo")
                icono="mdi-access-point";
            if(state.name=="Vencido")
                icono="mdi-exclamation";
            if(state.name=="Congelado")
                icono="mdi-snowflake-alert"
            if(state.name=="Pagado")
                icono="mdi-check";
            if(state.name=="Rechazado")
                clase="mdi-close";
            return icono;
        },
        showTools(){
            this.isBtnSearchTools=!this.isBtnSearchTools;
            this.searchState='';
        },
        filterSearchText(item){
            return item.name.toLowerCase().includes(this.search.toLowerCase());
        },
        filterStateText(item){
            return item.state.toLowerCase().includes(this.searchState.toLowerCase());
        },
        changeStatusLoan(state, loan){
            console.log(loan);
        }
    },
    computed:{
        ...mapState({
            loans: state=>state.loansStore.loans
        }),
        ...mapState({
            loanStates: state=>state.loanStateStore.loanStates
        }),
        filters(){
            let conditions=[];
            if(this.search){
                conditions.push(this.filterSearchText);
            }
            if(this.searchState){
                conditions.push(this.filterStateText);
            }

            if(conditions.length>0){
                return this.loans.filter((loan)=>{
                    return conditions.every((condition)=>{
                        return condition(loan);
                    })
                })
            }
            return this.loans;
        }
    },
    components:{
        DialogPdf,
        DialogNote
    },
    created() {
        this.$store.dispatch('getLoans');
        this.$store.dispatch('getStates');
    }
})
</script>


<style>
    #btnHerramientas{
        font-size: 14px;
        text-transform: none;
        color: rgb(0, 0, 0);
        background-color: #d1d1d1f3;
    }
    .cbBusqueda{
        font-size: 10px;
    }
    .contenedorHerramientas{
        background-color: #a39d9d4d;
    }
    .colorPendiente{
        background-color: rgba(39, 173, 214, 0.26) !important;
    }
    .colorPendiente:hover{
        background-color: rgba(241, 241, 241, 0.450) !important;
    }
    .colorRevision{
        background-color: rgba(238, 255, 0, 0.26) !important;
    }
    .colorRevision:hover{
        background-color: rgba(44, 136, 250, 0.4) !important;
    }
    .colorActivo{
        background-color: rgba(33, 228, 49, 0.26) !important;
    }
    .colorActivo:hover{
        background-color: rgba(33, 228, 49, 0.450) !important;
    }
    .colorVencido{
        background-color: rgba(224, 140, 12, 0.26) !important;
    }
    .colorVencido:hover{
        background-color: rgba(224, 140, 12, 0.45) !important;
    }
    .colorCongelado{
        background-color: rgba(33, 215, 228, 0.26) !important;
    }
    .colorCongelado:hover{
        background-color: rgba(33, 215, 228, 0.450) !important;
    }
    .colorPagado{
        background-color: rgba(33, 118, 228, 0.26) !important;
    }
    .colorPagado:hover{
        background-color: rgba(33, 118, 228, 0.450) !important;
    }
    .colorRechazado{
        background-color: rgba(228, 33, 33, 0.26) !important;
    }
    .colorRechazado:hover{
        background-color: rgba(228, 33, 33, 0.450) !important;
    }
</style>
