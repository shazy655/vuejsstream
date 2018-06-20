//Import Vue From ES2017
import Vue from 'vue'
window.Vue = Vue;
//Import Axios  From ES2017
import VueRouter from 'vue-router'
import axios from 'axios'
import Form from './core/Form'


window.axios = axios;

Vue.use(VueRouter);

window.axios.defaults.headers.common = {
    'X-Requested-With' : 'XMLHttpRequest'
}

window.Form = Form;