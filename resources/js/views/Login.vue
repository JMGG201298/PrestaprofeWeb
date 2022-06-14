<template>
    <v-row no-gutters style="background-color: #006a82" justify="center" align="center">
        <v-col cols="6" class="d-flex justify-center">
            <v-card flat dense max-width="550" >
                <v-card-title class="v-flex justify-center black white--text">
                    <v-btn
                    v-if="stateForm"
                    icon
                    color="white"
                    @click="loginForm"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-spacer v-if="stateForm"></v-spacer>
                    <span>{{title}}</span>
                </v-card-title>
                <v-card-text style="padding: 32px 32px 16px 32px;">
                    <v-row v-if="!stateForm">
                        <v-col cols="12">
                            <v-text-field
                            :error-messages="errorLogin.email"
                            v-model="email"
                            prepend-icon="mdi-account"
                            color="pprimary"
                            dense
                            filled
                            rounded
                            placeholder="Usuario">
                            </v-text-field>

                             <v-text-field
                             :error-messages="errorLogin.password"
                             v-model="password"
                             prepend-icon="mdi-lock"
                             color="pprimary"
                             :append-icon="iconEye"
                             @click:append="showPassword"
                             dense
                             filled
                             rounded
                             placeholder="Contraseña"
                             :type="type">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <a style="color: #006a82" @click="recoveryForm">¿Olvidaste tu Contraseña?</a>
                        </v-col>
                    </v-row>
                    <v-row v-if="stateForm">
                        <p style="text-align: center;">Recibirás una nueva contraseña por correo</p>
                        <v-col cols="12">
                            <v-text-field
                            v-model="recoverEmail"
                            prepend-icon="mdi-account"
                            color="pprimary"
                            dense
                            filled
                            rounded
                            placeholder="Usuario"
                            :error-messages="error.email">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    v-if="!stateForm"
                    :loading="isLoadingButton"
                    @click="intentLogin()"
                    text
                    depressed
                    color="#006a82" >Entrar</v-btn>
                    <v-btn
                    @click="recoveryPassword"
                    v-if="stateForm"
                    text
                    depressed
                    color="#006a82"
                    :loading="isLoading">Restablecer contraseña</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios';
import { logIn } from '../utils/auth';

export default {
    data(){
        return{
            isLoadingButton: false,
            title: 'INICIAR SESIÓN EN PRESTAPROFE',
            stateForm: false,
            email: '',
            password: '',
            passwordError: '',
            recoverEmail: '',
            iconEye: 'mdi-eye',
            type:'password',
            error:[],
            isLoading:false,
            errorLogin:[]
        }
    },
    methods: {
        intentLogin: async function(){
            try {
                this.isLoadingButton=true;
                await axios.get('/sanctum/csrf-cookie');
                await axios.post("/login",{
                    email: this.email,
                    password: this.password
                });
                logIn();
                this.$store.dispatch('login');
                this.$store.dispatch('loadUser');
                this.$router.push({name: 'Inicio'});
            } catch (error) {
                this.errorLogin=error.response.data.errors;
                
            }finally{
                this.isLoadingButton=false;
            }
            
        },
        recoveryForm(){
            this.title="RECUPERAR CONTRASEÑA";
            this.stateForm=true;
        },
        loginForm(){
            this.title="INICIAR SESIÓN EN PRESTAPROFE";
            this.stateForm=false;
        },
        showPassword(){
            this.iconEye=(this.iconEye=='mdi-eye-off')?'mdi-eye':'mdi-eye-off';
            this.type=(this.type=='password')?'text':'password';
        },

        async recoveryPassword(){
            this.isLoading=true;
            try {
                const response = await axios.get("/api/recovery-user/"+this.recoverEmail);
                if(response.status==200){
                    this.error=[];
                    this.loginForm();
                }
            } catch (error) {
                this.error=error.response.data;
            }finally{
                this.isLoading=false;
            }
        }
    },
    async beforeCreate(){
    }
}
</script>

