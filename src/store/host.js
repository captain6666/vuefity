import Axios from 'axios'

const state = {
   hosts: []
}
// getters
const getters = {
  }

const actions = {
  GetHostInfo({ commit}){
    Axios.get('http://127.0.0.1:8000/nginx/')
      .then(response => {
        commit('mutateHostInfo', {hosts: response.data.results})
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  UpdateHostGroup({ dispatch }, data){
    console.log(JSON.stringify(data))
    Axios.put('http://127.0.0.1:8000/nginx/' + data.id + '/', data)
      .then(response => {
        console.log(JSON.stringify(response.data.results))
        dispatch('GetHostInfo')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

const mutations = {
    mutateHostInfo (state, { hosts }) {
      state.hosts = hosts
    }
  }

export default {
  name: 'host',
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

}