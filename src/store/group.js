import Axios from 'axios'

const state = {
   groups: []
}
// getters
const getters = {
  }

const actions = {
   GetGroupInfo({ commit}){
    Axios.get('http://127.0.0.1:8000/group/')
      .then(response => {
        commit('updateGroupInfo', {groups: response.data.results})
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}
const mutations = {
    updateGroupInfo (state, { groups }) {
      state.groups = groups
      console.log(JSON.stringify(groups))
    }
  }
export default {
  name: 'group',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}