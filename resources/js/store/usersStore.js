import axios  from 'axios';
import { reject } from 'lodash';
const usersStore={
    state:{
        usuarios: [],
        roles: [],
        errors: []
    },
    mutations:{
        setUsuarios(state, usuarios){
            state.usuarios=usuarios;
        },
        setStatusUser(state, data){
            var index=state.usuarios.map(usuario=>usuario.id).indexOf(data.id);
            state.usuarios[index].active=data.active;
        },
        setRoles(state, roles){
            state.roles=roles;
        },
        setUser(state, user){
            state.usuarios.push(user);
            state.errors=[];
        },
        setErrors(state, errors){
            state.errors=errors;
        },
        editUser(state, user){
            state.usuarios.map((usuario)=>{
                if(usuario.id==user.id){
                    Object.assign(usuario,user);
                }
            })
        }
    },
    actions:{
        getUsuarios: async function({commit}){
            try{
                const response = await axios.get("/api/users");
                commit('setUsuarios',response.data);
            }catch(error){
                
            }
        },
        changeStatusUser: async function({commit}, id){
            try{
                const response = await axios.get("/api/changeStatusUser/"+id);
                const datos={active:response.data, id:id}
                commit('setStatusUser',datos);
            }catch(error){

            }
        },
        getRoles: async function({commit}){
            try{
                const response = await axios.get("/api/roles");
                commit('setRoles',response.data);
            }catch(error){
                reject(error);
            }
        },
        saveUser: async function({commit}, user){
            try {
                if(user.id==undefined){
                    const response = await axios.post('/api/users',user);
                    commit('setUser', response.data);
                }else{
                    const response = await axios.put('/api/users/'+user.id, user);
                    commit('editUser',response.data);
                }
            } catch (error) {
                commit('setErrors', error.response.data);
            }
        }
    }
}

export default usersStore;