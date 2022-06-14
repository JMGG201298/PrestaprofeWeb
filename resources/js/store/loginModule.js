import axios from 'axios';
import { isLoggedIn, logOut, logIn } from '../utils/auth';
const loginModule = {
    state: {
        isLoggedIn: localStorage.getItem('isLoggedIn') || false,
        user: {}
    },

    mutations: {
        setLoggedIn (state, isLogged){
            state.isLoggedIn = isLogged;
        },
        setUserLogin(state, user){
            state.user=user;
        }
    },

    actions: {
        login: async function ({commit}){
            try {
                commit('setLoggedIn', true);
                logIn();
            } catch (error) {
                error.dispose();
            }
        },

        logout: async function ({commit}){
            try {
                commit('setLoggedIn', false);
                commit('setUserLogin',{});
                logOut();
            } catch (error) {
                error.dispose();
            }
        },

        loadStoredState(context) {
            context.commit("setLoggedIn", isLoggedIn());
        },

        loadUser: async function({commit, dispatch}){
            if(isLoggedIn()){
                try {
                    const response = await axios.get("/api/user");
                    commit('setUserLogin',response.data);
                   
                }catch (error) {
                    if(401 == error.response.status){
                        dispatch("logout");
                    }
                }
                
            }
        }
    }
}

export default loginModule;
