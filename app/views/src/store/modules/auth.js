import { API, PUBLIC_API, TOKEN } from '../../config'
const state = {
    api_base_url:'http://localhost:8000/api/',
    status: '',
    token: localStorage.getItem(TOKEN) || '',
    user : {}
}

// getters
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
}

// actions
const actions = {
    login ({ commit}, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            console.log(JSON.stringify(user))
            PUBLIC_API.post('login',user).then((resp)=>{
                console.log('login res',resp.data)
                localStorage.setItem(TOKEN, resp.data.token)
                commit('auth_success', resp.data.token)
                //resolve()
                resolve(resp)
            }).catch((err)=>{
                commit('auth_error')
                console.log(err)
                localStorage.clear()
                sessionStorage.clear()
                reject(err)
            })
        })
    },
    update_basic ({ commit}, data) {
        return new Promise((resolve, reject) => {
            console.log('basic data',JSON.stringify(data))
            API.put('update-basic',data).then((resp)=>{
                console.log('res',resp.data)
                //resolve()
                resolve(resp)
            }).catch((err)=>{
                reject(err)
            })
        })
    },
    logout ({commit}) {
        return new Promise((resolve, reject) => {
            console.log(localStorage.getItem(TOKEN))
            API.post('logout').then((res)=>{
                commit('logout')
                localStorage.clear()
                resolve(res.data)
            }).catch((err)=>{
                commit('logout')
                localStorage.clear()
                resolve(err)
            })
        })
    }
}

// mutations
const mutations= {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token){
        state.status = 'success'
        state.token = token
        // state.user = user
    },
    auth_error(state){
        state.status = 'error'
    },
    logout(state){
        state.status = ''
        state.token = ''
    },
    
}

export default {
  state,
  getters,
  actions,
  mutations
}