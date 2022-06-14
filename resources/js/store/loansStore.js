import axios from "axios";

const loansStore = {
    state:{
        loans:[],
    },
    mutations:{
        setLoans(state, loans){
            state.loans=loans;
        }
    },
    actions:{
        getLoans: async function({commit}){
            try{
                const response= await axios.get('/api/loans');
                commit('setLoans',response.data);
            }catch(e){

            }
        }
    }
}

export default loansStore;