
require('./bootstrap');

import router from './router'

const app = new Vue({
    el: '#app',

    router: router
});
