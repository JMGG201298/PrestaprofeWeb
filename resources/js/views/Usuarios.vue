<template>
    <div>
        <v-snackbar
            v-model="alertSave"
            id="alertUser"
            border="right"
            color="green"
            type="success"
            class="mb-2"
            transition="scroll-y-transition"
            :timeout="2000"
        ><v-icon left>mdi-check-circle</v-icon>
        El usuario se agrego correctamente</v-snackbar>
        <v-row class="m-0">
            <v-col class="d-flex justify-end">
                <v-btn color="blue" @click="openDialogUser({})">Agregar</v-btn>
            </v-col>
        </v-row>
        <v-card class="mx-4">
            <v-card-title>
                <v-text-field append-icon="mdi-magnify"
                label="Buscar..."
                single-line
                hide-details=""
                v-model="search"></v-text-field>
            </v-card-title>
            <v-card-text>
                <v-data-table
                :headers="headers"
                :items="usuarios"
                item-key="id"
                :search="search">
                    <template v-slot:item.active="{item}">
                        <v-switch  color="success" readonly inset v-model="item.active"  @click="abrirDialogo(item)"></v-switch>
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-icon @click="openDialogUser(item)">mdi-account-edit</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <v-dialog v-model="dialog" persistent>
            <v-card>
                <v-card-title>¿Estas seguro que deseas continuar con esta acción?</v-card-title>
                <v-card-text>Al modificar el estatus del usuario, estarás permitiendo o negando al usuario poder acceder al sistema</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="green" @click="cambiarEstatus">Aceptar</v-btn>
                    <v-btn text color="red" @click="dialog=false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <DialogUser v-if="dialogUsers" :user="user" @closeDialog="dialogUsers=false" @isSavedUser="alertSave=$event"></DialogUser>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DialogUser from '../components/DialogUser.vue';
export default {
    data(){
        return{
            search:'',
            headers:[
                {text:'Nombre(s)', value:'name'},
                {text:'Apellidos', value:'last_name'},
                {text:'Correo', value:'email'},
                {text:'Role', value:'role'},
                {text:'Estatus', value:'active'},
                {text: 'Acciones',value:'actions'}
            ],
            dialog:false,
            usuarioSelected:'',
            dialogUsers:false,
            user:{},
            alertSave: false
        }
    },
    created(){
        this.$store.dispatch('getUsuarios');
        this.$store.dispatch('getRoles');
    },
    computed:{
        ...mapState({
            usuarios: state=>state.usersStore.usuarios
        })
    },
    methods:{
        cambiarEstatus(){
            var index=this.usuarios.map(usuario=>usuario.id).indexOf(this.usuarioSelected);
            this.$store.dispatch('changeStatusUser',this.usuarios[index].id, index);
            this.dialog=false;

        },
        abrirDialogo(usuario){
            this.dialog=true;
            this.usuarioSelected=usuario.id;
        },
        openDialogUser(user){
            this.user=Object.assign({},user);
            this.dialogUsers=true;
        }
    },
    components:{
        DialogUser
    },
    updated(){
        
    }
}

</script>

<style scoped>
    #alertUser{
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 10;
    }
</style>