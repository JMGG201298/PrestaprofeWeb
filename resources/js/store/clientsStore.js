import axios  from 'axios';
const clientsStore = {
    state: {
        clients:[],
        dialog:false,
        client:null,
        dialogImagen:true,
        srcDialogoImagen:'clients/imageNoFound.png'
    },

    mutations: {
        setClients(state,clients){
            state.clients=clients;
        },
        openDialog(state){
            state.dialog=!state.dialog;
        },
        getClient(state,client){
            state.client=client;
        },
        openDialogImagen(state){
            state.dialogImagen=!state.dialogImagen;
            state.srcDialogoImagen=state.client.ine;
        },
        closeDialogImagen(state){
            state.dialogImagen=false;
        }

    },

    actions: {
        getClients: async function({commit}){
            try {
                const response = await axios.get("/api/getClients");
                commit('setClients',response.data);
                
            } catch (error) {
                
            }
        },
        checkClients: async function({commit},clients){
            try {
                const response = await axios.post("/api/checkClients",{clients});
                
                
            } catch (error) {
                
            }
        },
        getCliente: async function({commit},id){
            try{
                const response = await axios.get("/api/getClient/"+id);
                commit('getClient',response.data);
            }catch(error){

            }
        }
    }
}

export default clientsStore;
