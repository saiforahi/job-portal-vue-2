<template>
    <login/>
</template>
<script>
import login from '../components/auth/Login.vue'
export default {
    components: { login },
    name:"Login",
    data(){
        return{
            
        }
    },
    mounted(){
        document.getElementById('JobSearchModalSignup').classList.add('fade-in')
        document.body.classList.add('careerfy-modal-active')
    }
}
</script>