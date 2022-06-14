import Vue from 'vue';
import Vuex from 'vuex';

//MODULOS
import loginModule from './loginModule';
import clientsStore from './clientsStore';
import usersStore from './usersStore';
import loansStore from './loansStore';
import loanStateStore from './loanStateStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loginModule,
        clientsStore,
        usersStore,
        loansStore,
        loanStateStore
    },

});

export default store;
