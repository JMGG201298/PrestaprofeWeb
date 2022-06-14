
import Vue from 'vue'
import VueRouter from "vue-router";
import store from './store/store';

Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        component: () => import('./views/Dashboard.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                name: 'Inicio',
                path: '',
                component:()=>import('./views/Inicio')
            },
            {
                path: 'bank',
                name: 'Caja',
                component: () => import('./views/Caja.vue')
            },
            {
                path: 'loans',
                name: 'Préstamos',
                component: () => import('./views/Prestamos.vue')
            },

            {
                path: 'clients',
                name: 'Clientes',
                component: () => import('./views/Clients.vue')
            },
            {
                path: 'charges',
                name: 'Cobros',
                component: () => import('./views/Clients.vue')
            },
            {
                path: 'arrears',
                name: 'Atrasos',
                component: () => import('./views/Clients.vue')
            },
            {
                path: 'reports',
                name: 'Reportes',
                component: () => import('./views/Clients.vue')
            },
            {
                path: 'users',
                name: 'Usuarios',
                component: () => import('./views/Usuarios.vue')
            },
        ]
    },
    {
        path: "/auth-login",
        component: () => import('./views/Login.vue'),
        name: 'login'
    },
];

const router = new VueRouter({
    routes,
    mode: 'hash'
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if((store.state.loginModule.isLoggedIn == 'false' || store.state.loginModule.isLoggedIn == false)){
            next({
                name: 'login'
            })
        }else{
            next();
        }

    }else{
        next();
    }
})
export default router;
