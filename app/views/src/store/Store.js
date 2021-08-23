// import Vue from 'vue'
// import Vuex from 'vuex'
// import { API, PUBLIC_API, TOKEN } from '../config'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     api_base_url:'http://localhost:8000/api/',
//     status: '',
//     token: localStorage.getItem(TOKEN) || '',
//     user : {}
//   },
//   mutations: {
//     auth_request(state){
//       state.status = 'loading'
//     },
//     auth_success(state, token, user){
//       state.status = 'success'
//       state.token = token
//       state.user = user
//     },
//     auth_error(state){
//       state.status = 'error'
//     },
//     logout(state){
//       state.status = ''
//       state.token = ''
//     },
//   },
//   actions: {
//     login({commit}, user){
//       return new Promise((resolve, reject) => {
//         commit('auth_request')
//         console.log(JSON.stringify(user))
//         PUBLIC_API.post('login',user).then((resp)=>{
//           localStorage.setItem(TOKEN, resp.data.token)
//           commit('auth_success', resp.data.token, resp.data.user)
//            //resolve()
//           resolve(resp)
//         }).catch((err)=>{
//           commit('auth_error')
//           localStorage.removeItem(TOKEN)
//           reject(err)
//         })
//       })
//   },
//   register({commit}, user){
//     return new Promise((resolve, reject) => {
//       commit('auth_request')
//       //console.log('register action ----- ',user)
//       // axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
//       // .then(resp => {
//       //   const token = resp.data.token
//       //   const user = resp.data.user
//         localStorage.setItem(TOKEN, 'token')
//         commit('auth_success', 'token', 'user')
//         resolve()
//       // })
//       // .catch(err => {
//       //   commit('auth_error', err)
//       //   localStorage.removeItem('token')
//       //   reject(err)
//       // })
//     })
//   },
//   logout({commit}){
//     return new Promise((resolve, reject) => {
//       console.log(localStorage.getItem(TOKEN))
//       API.post('logout').then((res)=>{
//         commit('logout')
//         localStorage.removeItem(TOKEN)
//         resolve(res.data)
//       }).catch((err)=>{
//         reject(err)
//       })
//     })
//   }
//   },
//   getters : {
//     isLoggedIn: state => !!state.token,
//     authStatus: state => state.status,
//   }
// })
  
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})