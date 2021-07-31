import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Resume from '../components/profile-components/Resume.vue'
import ProfileData from '../components/profile-components/Profile.vue'
import Contact from '../pages/Contact.vue'
import Profile from '../pages/Profile.vue'
import store from '../store/Store'
import SavedJobs from '../components/profile-components/SavedJobs.vue'
import AppliedJobs from '../components/profile-components/AppliedJobs.vue'
import JobAlerts from '../components/profile-components/JobAlerts.vue'
import ChangePassword from '../components/profile-components/ChangePassword.vue'
import JobsGrid from '../pages/JobsGrid.vue'
import JobDetails from '../components/jobs/JobDetails.vue'
Vue.use(Router)

let router = new Router({
    mode: 'hash',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
          requiresAuth: true
        },
        children:[
          {
            path: '',
            name: 'profile data',
            component: ProfileData
          },
          {
            path: '/profile/resume',
            name: 'resume',
            component: Resume
          },
          {
            path: '/profile/saved-jobs',
            name: 'savedjobs',
            component: SavedJobs
          },
          {
            path: '/profile/applied-jobs',
            name: 'appliedjobs',
            component: AppliedJobs
          },
          {
            path: '/profile/job-alerts',
            name: 'jobalerts',
            component: JobAlerts
          },
          {
            path: '/profile/change-password',
            name: 'changepassword',
            component: ChangePassword
          },
        ]
      },
      {
        path: '/contact-us',
        name: 'contactUs',
        component: Contact
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: JobsGrid
      },
      {
        path: '/job/details/:id',
        name: 'jobdetails',
        component: JobDetails,
        // props: {
        //   header: true,
        //   content: true
        // },
      },
    ]
  })
  
  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

  export default router