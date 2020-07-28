import Axios from 'axios'
import authHeader from '../services/auth-header';

const state = {
    desserts: []

}

// getters
const getters = {
  }

const actions = {
    GetDessertInfo({ commit } ) {
      Axios.get('http://127.0.0.1:8000/api/desserts/',{ headers: authHeader() })
          .then(response => {
              commit('updateUserInfo', { desserts: response.data.results})
              console.log(JSON.stringify(response.data))
          })
          .catch(function (error) {
              console.log(error)
          })
      },

      CreateDessertInfo( { dispatch }, data,  ) {
      Axios.post('http://localhost:8000/api/desserts/',data,{ headers: authHeader() })
          .then(response => {
              console.log(JSON.stringify(response.data.results))
              dispatch('GetDessertInfo')
          })
          .catch(function (error) {
              console.log(error)
          })
      },

      UpdateDessertInfo( { dispatch }, data,  ) {
      Axios.put('http://localhost:8000/api/desserts/'+ data.id + '/' ,data,{ headers: authHeader() })
          .then(response => {
              console.log(JSON.stringify(response.data.results))
              dispatch('GetDessertInfo')
          })
          .catch(function (error) {
              console.log(error)
          })
      },

      DeleteDessertInfo( { dispatch }, data,  ) {
      Axios.delete('http://localhost:8000/api/desserts/'+ data.id + '/',{ headers: authHeader() })
          .then(response => {
              console.log(JSON.stringify(response.data.results))
              dispatch('GetDessertInfo')
          })
          .catch(function (error) {
              console.log(error)
          })
      },

      SearchDessertInfo({ commit }, data ) {
      Axios.get('http://localhost:8000/search/dessert/?search='+ data,{ headers: authHeader() })
          .then(response => {
              commit('updateUserInfo', { desserts: response.data.results})
              console.log(JSON.stringify(response.data))
          })
          .catch(function (error) {
              console.log(error)
          })
      },
  }



// mutations
const mutations = {
    updateUserInfo (state, { desserts }) {
      state.desserts = desserts
    }
  }

export default {
  name: 'desserts',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
