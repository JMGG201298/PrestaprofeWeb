<template>
    <div>
      <v-card class="mx-4">
        <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar..."
              single-line
              hide-details
              solo-inverted>
            </v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :search="search"
          :items="clients"
          v-model="selectedClients"
          item-key="id"
          show-select>
          <template v-slot:item.accion="{ item }">
              <v-icon
                small
                class="mr-2" 
                @click="getInfoDetail(item)"
              >
                mdi-eye
              </v-icon>
              <v-icon
                small
                class="mr-2"
              >
                mdi-cancel
              </v-icon>
              <v-icon
                small
              >
                mdi-delete
              </v-icon>
      </template>
      </v-data-table>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="clientsId==0"  small depressed color="black" class="white--text" @click="showClient">Verificar</v-btn>
      </v-card-actions>
    </v-card>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    data(){
        return{
            search:'',
            headers:[
                {text:"Nombre(s)",value:"name"},
                {text:"Apellido(s)",value:"last_name"},
                {text:"Verificado",value:"is_admon_verified"},
                {text:"Accion",value:"accion"}
            ],
            selectedClients:[]
        }
    },
    created(){
        /*fetch("http://127.0.0.1:8000/api/getClients")
        .then(response=>response.json())
        .then(data=>this.clients=data);
        axios.get("http://127.0.0.1:8000/api/getClients")
        .then(response=>{this.clients=response.data});*/
        this.$store.dispatch('getClients');

    },
    computed:{
        ...mapState({
            clients: state=>state.clientsStore.clients
        }),
        clientsId:{
            get: function() {
                return this.selectedClients.map(item=>item.id).length; 
            },
            set: function(arreglo) {
                this.selectedClients=arreglo;
            }
        }

    },
    methods:{
        showClient(){
            this.$store.dispatch('checkClients',this.selectedClients.map(item=>item.id))
            .then((response)=>{this.$store.dispatch('getClients')});
        },
        getInfoDetail(item){
            this.$store.dispatch('getCliente',item.id);
            this.openDialog();
        },
        ...mapMutations(['openDialog'])
    }
}
</script>

