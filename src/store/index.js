import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const store = new Vuex.Store({
    getter: {
        isLogin: state => state.isLogin
    },
    state: {
        isLogin: false,
    },
    mutations: {
        logout(state) {
            state.isLogin = false;
        },
        login(state) {
            state.isLogin = true;
        }
    },
})

export default store

