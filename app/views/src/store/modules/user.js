import { API, PUBLIC_API, TOKEN } from '../../config'
const state = {
    api_base_url:'http://localhost:8000/api/',
    status: '',
    token: localStorage.getItem(TOKEN) || '',
    details : {},
    profile_pic:''
}

// getters
const getters = {
    details: state => state.details,
    profile_pic: state => state.profile_pic,
}

// actions
const actions = {
    get_details ({ commit}) {
        return new Promise((resolve, reject) => {
            commit('set_status_loading')
            
            API.get('user/details').then((resp)=>{
                console.log('details',resp.data)
                commit('auth_success', resp.data.data)
                //resolve()
                resolve(resp.data.data)
            }).catch((err)=>{
                commit('auth_error')
                reject(err)
            })
        })
    },
    update_details ({ commit},data) {
        return new Promise((resolve, reject) => {
            // commit('updating_details')
            // console.log()
            API.put('user/update-details',data).then((resp)=>{
                console.log('details update response',resp.data)
                //resolve()
                resolve(resp.data)
            }).catch((err)=>{
                
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
        state.profile_pic = details.media.length>0?details.media[0].original_url:''
    },
    auth_error(state){
        state.status = 'error'
    },
    update_profile_pic(state,new_pic){
        state.profile_pic = new_pic
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}