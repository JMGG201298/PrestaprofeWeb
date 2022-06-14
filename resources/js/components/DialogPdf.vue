<template>
    <div style="height:100%">
        <v-dialog
            v-model="dialog"
            fullscreen
            class="dialogo">
            <v-toolbar
                color="#006a82">
                <v-spacer></v-spacer>
                <v-toolbar-title class="white--text">Detalles del préstamo / #<span>{{loan.id}}</span></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    color="white">
                    <v-icon>mdi-printer</v-icon>
                </v-btn>
                <v-btn
                    icon
                    color="white">
                    <v-icon>mdi-clipboard-text-search-outline</v-icon>
                </v-btn>
                <v-btn
                    icon
                    color="white">
                    <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    small
                    fab
                    dark
                    color="red"
                    v-on:click="closePdf()"
                >
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <div class="contenedor">
                <v-progress-circular
                v-if="isLoading"
                class="spinner"
                color="primary"
                size="100"
                indeterminate>  
                </v-progress-circular>
                <iframe v-show="!isLoading" class="estiloPdf" :onload="loadedPdf()" :src="srcPdf"></iframe>
            </div>
            
        </v-dialog>
    </div>
</template>

<script>
export default({
    name: 'DialogPdf',
    data() {
        return {
            srcPdf:'',
            dialog: false,
            isLoading: true
        }
    },
    methods: {
        closePdf: function(){
            this.dialog=false;
        },
        openPdf: function(){
            this.dialog=true;
            this.isLoading=true;
        },
        changePdf(src){
            this.srcPdf=src;
        },
        loadedPdf(){
            this.isLoading=false;
            console.log("YA cargo");
        }
    },
    created() {
        
    },
    props:{
        loan: Object
    }
})
</script>

<style scoped>
    .contenedor{
        height: 100%;
        width: 100%;
        background: rgba(40, 43, 37, 0.726);
        height: calc(100% - 64px);
    }
    
    .estiloPdf{
        height: 100%;
        width: 50%;
        margin: 0 auto;
        display: block;
    }
    .spinner{
        margin: 0 auto;
        display: block;
    }
</style>