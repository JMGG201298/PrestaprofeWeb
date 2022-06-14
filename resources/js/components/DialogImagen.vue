<template>
    <div>
        <v-dialog @click:outside="closeDialogImagen" v-model="dialogImagen">
            <v-toolbar color="#006a82">
                <v-btn icon @click="closeDialogImagen">
                    <v-icon color="white">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card>
                <v-card-text>
                    <v-img :src="path"></v-img>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "DialogImagen",
    data(){
        return{
            dialogImagen:true
        }
    },
    computed:{
        ...mapState({
            client:state=>state.clientsStore.client
        }),
        ...mapState({
            srcDialogoImagen:state=>state.clientsStore.srcDialogoImagen
        })
    },
     methods:{
        ...mapMutations(['openDialogImagen']),
        closeDialogImagen: function(){
            this.$emit('closeDialog');
        }
    },
    props:{
        path:{
            type: String,
            required: true,
            default:'client/imageNoFound.png'
        }
    }
}
</script>