import axios from "axios";

const loanStateStore={
    state:{
        loanStates:[]
    },
    mutations:{
        getStates(state, states){
            state.loanStates=states;
        }
    },
    actions:{
        getStates: async function({commit}){
            try{
                const response = await axios.get('/api/loan-states');
                commit('getStates', response.data);
            }catch(e){

            }
            
        }
    }
}

export default loanStateStore;