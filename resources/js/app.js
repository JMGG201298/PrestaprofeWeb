/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import vuetify from './plugins/vuetify'
import App from './App.vue';
// import VueAxios from 'vue-axios';
import store from './store/store';
import router from "./router";
// import axios from 'axios';
// import { routes } from './routes';

// Vue.use(VueAxios, axios);

// const router = new VueRouter({
//     mode: 'history',
//     routes: routes
// });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


window.axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if(401 == error.response.status){
            router.push({name: 'login'}).then(()=>{
                store.dispatch("logout");
            }).catch(err => {
                
            });
        }
        return Promise.reject(error);
    }
);

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    components: {
        App,
        
    },
    async beforeCreate(){
        this.$store.dispatch('loadStoredState');
        this.$store.dispatch('loadUser');
    }
});
