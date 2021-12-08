import { API, PUBLIC_API, TOKEN } from '../../config'
const state = {
    api_base_url:'http://localhost:8000/api/',
    status: '',
    token: localStorage.getItem(TOKEN) || '',
    details : {}
}

// getters
const getters = {
    details: state => state.details,
}

// actions
const actions = {
    get_details ({ commit}) {
        return new Promise((resolve, reject) => {
            commit('set_status_loading')
            
            API.get('user/details').then((resp)=>{
                console.log('details',resp.data)
                commit('auth_success', resp.data)
                //resolve()
                resolve(resp.data)
            }).catch((err)=>{
                commit('auth_error')
                reject(err)
            })
        })
    },

}

// mutations
const mutations= {
    set_status_loading(state){
        state.status = 'loading'
    },
    auth_success(state, details){
        state.status = 'success'
        state.details = details
    },
    auth_error(state){
        state.status = 'error'
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}