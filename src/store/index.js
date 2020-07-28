import Vue from 'vue'
import Vuex from 'vuex'
import dessert from './dessert'
import { auth } from './auth';
import  host  from './host';
import group from './group'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getsoon(){
      console.log('getsoon')
    }
  },
  modules: {
    host,
    dessert,
    auth,
    group
  }
})
