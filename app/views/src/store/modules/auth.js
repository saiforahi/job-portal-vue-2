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
                localStorage.setItem(TOKEN, resp.data.token)
                commit('auth_success', resp.data.token, resp.data.user)
                //resolve()
                resolve(resp)
            }).catch((err)=>{
                commit('auth_error')
                localStorage.removeItem(TOKEN)
                reject(err)
            })
        })
    },

    logout ({commit}) {
        return new Promise((resolve, reject) => {
            console.log(localStorage.getItem(TOKEN))
            API.post('logout').then((res)=>{
            commit('logout')
            localStorage.removeItem(TOKEN)
            resolve(res.data)
        }).catch((err)=>{
            reject(err)
        })
    })
  }
}

// mutations
const mutations= {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
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