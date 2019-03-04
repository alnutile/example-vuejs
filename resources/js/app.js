/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('dashboard-wrapper', require('./components/DashboardWrapper.vue').default);
Vue.component('nav-area', require('./components/Nav.vue').default);


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCharts from 'vue-charts'
Vue.use(VueCharts)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        charts: {},
        range: "daily"
    },
    getters: {
        range(state) {
            return state.range;
        }
    },
    mutations: {
        chartsData(state, charts) {
            console.log("charts into vuex", charts);
            state.charts = charts
        },
        rangePicker(state, range) {
            console.log('vuex choose range', range);
            state.range = range;
        }
    },
    actions: {
        getCharts({
            commit,
            state
        }, range) {
            return new Promise((resolve, reject) => {
                axios(`/api/data?range=${range}`)
                    .then(results => {
                        console.log(results);
                        state.charts = results.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
        }
    }
})

const app = new Vue({
    el: '#app',
    store: store //or just store
});
