import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
    en: {
      message: {
        home:'Home',
        signin: 'Sign in',
        registration : "Sign up",
        post_job:"Post Job"
      }
    },
    bn: {
      message: {
        home:'হোম',
        signin: 'লগইন',
        registration : "রেজিস্ট্রেশান",
        post_job:"জব পোস্ট করুন"
      }
    }
}
  
  // Create VueI18n instance with options
  export default  new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
  })

  