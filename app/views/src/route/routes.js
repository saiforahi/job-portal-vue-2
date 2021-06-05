import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import Profile from '../pages/Profile.vue'
import store from '../store/Store'
Vue.use(Router)

let router = new Router({
    mode: 'history',
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
        }
      },
      {
        path: '/contact-us',
        name: 'contactUs',
        component: Contact
      }
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