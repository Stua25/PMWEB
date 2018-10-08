import Vue from 'vue';
import VueRouter from 'vue-router';
import buefy from 'buefy'

Vue.use(VueRouter); 
Vue.use(buefy);

import VueAxios from 'vue-axios';
import Axios from 'axios';
Vue.use(VueAxios, Axios);

import App from './App.vue';
import inicio from './components/Index.vue'
import firt from './components/first.vue'
import Institucion from './components/Institucion/index.vue'

const routes =[
    {
        name: 'Index', 
        path: '/', 
        component: inicio
    }, 
    {
        name: 'first',
        path: '/first', 
        component: firt
    },
    {
        name:'Institucion-Index',
        path: '/Institucion/index',
        component: Institucion
    }

]

const router = new VueRouter({mode: 'history', routes: routes })
new Vue(Vue.util.extend({router}, App)).$mount('#app')

