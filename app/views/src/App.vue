<template>
  <div id="app">
    <div class="careerfy-wrapper">
      <Header/>
      <router-view :key="$route.fullPath"></router-view>
      <Footer/>
    </div>
    <Register/>
    <Login/>
  </div>
</template>
<style>
/* a{
  color: black !important;
  text-decoration: none !important;
} */
.v-spinner{
    text-align: center !important;
}
</style>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Register from './components/auth/Register.vue'
import Login from './components/auth/Login.vue'
export default {
  name: 'App',
  components: {
    Header,Footer,Login,Register
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
          resolve()
        }
        throw err;
      });
    });
  }
}
</script>

