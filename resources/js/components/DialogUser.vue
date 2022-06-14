<template>
    <div>
        <v-dialog v-model="dialogUser" max-width="800px" persistent>  
            <v-card>
                <v-card-title class="mb-4">{{title}}</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" class="py-0" md="6">
                            <v-text-field outlined label="Nombre(s)" :error-messages="errors.name" v-model="user.name" prepend-inner-icon="mdi-form-textbox"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0" md="6">
                            <v-text-field outlined label="Apellidos" :error-messages="errors.last_name" v-model="user.last_name" append-icon="" prepend-inner-icon="mdi-form-textbox"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0" md="6">
                            <v-text-field type="email" outlined label="Correo" :error-messages="errors.email" v-model="user.email" prepend-inner-icon="mdi-email"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0" md="6">
                            <v-select label="Rol" :items="roles" item-text="name" :error-messages="errors.role" v-model="user.role" item-value="name" outlined prepend-inner-icon="mdi-account-convert"></v-select>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="guardar" :loading="isLoadingButton">Aceptar</v-btn>
                    <v-btn @click="closeDialog">Cancelar</v-btn>
                </v-card-actions>
                {{Object.keys(user).length}}
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'DialogUser',
    data(){
        return{
            dialogUser:true,
            isLoadingButton:false,
            isSavedUser:false
        }
    },
    methods:{
        closeDialog(){
            this.$emit('closeDialog');
        },
        guardar(){
            this.isLoadingButton=true;
            this.$store.dispatch('saveUser',this.user).then((r)=>{
                if(this.errors.length!=undefined){
                    this.isSavedUser=true;
                    this.$emit('closeDialog');
                    this.$emit('isSavedUser',this.isSavedUser);
                }else{
                    this.isLoadingButton=false;
                }
            });
            
        }
    },
    props: {
            user: {
                type: Object,
                required: true
             }
    },
    computed:{
        ...mapState({
            roles: state=>state.usersStore.roles,
            errors: state=>state.usersStore.errors
        }),
        title(){
            if(Object.keys(this.user).length==0){
                return 'Agregar Usuario';
            }else{
                return 'Editar Usuario';
            }
        }
    },
    mounted(){
       
    }
}
</script>