import { API, PUBLIC_API, TOKEN } from '../../config'
const state = {
    jobs:[],
    status: '',
    
}

// getters
const getters = {
    jobs: state => state.jobs,
}

// actions
const actions = {
    get_job_details ({ commit},id) {
        return new Promise((resolve, reject) => {
            API.get('jobs/details/'+id).then((resp)=>{
                console.log('details',resp.data)
                //resolve()
                resolve(resp.data.data)
            }).catch((err)=>{
                reject(err)
            })
        })
    },
    get_all_jobs ({ commit},data) {
        return new Promise((resolve, reject) => {
            commit('fetching_jobs')
            // console.log()
            API.get('jobs/all').then((resp)=>{
                console.log('all job response',resp.data)
                //resolve()
                commit('job_fetch_done',resp.data.data)
                resolve(resp.data)
            }).catch((err)=>{
                commit('jobs_fetch_error')
                reject(err)
            })
        })
    },

}

// mutations
const mutations= {
    fetching_jobs(state){
        state.status = 'loading'
    },
    job_fetch_done(state, jobs){
        state.status = 'success'
        state.jobs = jobs
    },
    jobs_fetch_error(state){
        state.status = 'error'
    },
    
}

export default {
  state,
  getters,
  actions,
  mutations
}