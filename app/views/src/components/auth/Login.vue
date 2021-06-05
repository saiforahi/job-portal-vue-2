<template>
    <!-- ModalLogin Box -->
    <div class="careerfy-modal fade careerfy-typo-wrap" id="JobSearchModalSignup">
        <div class="modal-inner-area">&nbsp;</div>
        <div class="modal-content-area">
            <div class="modal-box-area">

                <div class="careerfy-modal-title-box">
                    <h2>Login to your account</h2>
                    <span v-on:click="closeModal" class="modal-close"><i class="fa fa-times"></i></span>
                </div>
                <form>
                    <hr/>
                    <!-- <div class="careerfy-box-title">
                        <span>Choose your Account Type</span>
                    </div>
                    <div class="careerfy-user-options">
                        <ul>
                            <li class="active">
                                <a href="#">
                                     <i class="careerfy-icon careerfy-user"></i>
                                     <span>Candidate</span>
                                     <small>I want to discover awesome companies.</small>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                     <i class="careerfy-icon careerfy-building"></i>
                                     <span>Employer</span>
                                     <small>I want to attract the best talent.</small>
                                </a>
                            </li>
                        </ul>
                    </div> -->
                    <div class="careerfy-user-form">
                        <ul>
                            <li>
                                <label>Email Address:</label>
                                <input v-model="username" type="text" value="Enter Your Email Address" onblur="if(this.value == '') { this.value ='Enter Your Email Address'; }" onfocus="if(this.value =='Enter Your Email Address') { this.value = ''; }">
                                <i class="careerfy-icon careerfy-mail"></i>
                            </li>
                            <li>
                                <label>Password:</label>
                                <input v-model="password" type="password" value="Enter Password" onblur="if(this.value == '') { this.value ='Enter Password'; }" onfocus="if(this.value =='Enter Password') { this.value = ''; }">
                                <i class="careerfy-icon careerfy-multimedia"></i>
                            </li>
                            <li>
                                <input type="button" value="Sign In" v-on:click="login"/>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                        <div class="careerfy-user-form-info">
                            <p>Forgot Password? | <a href="#" v-on:click="hideLoginAndShowRegistration">Sign Up</a></p>
                            <div class="careerfy-checkbox">
                                <input type="checkbox" id="r10" name="rr" />
                                <label for="r10"><span></span> Remember Password</label>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="careerfy-box-title careerfy-box-title-sub">
                        <span>Or Sign In With</span>
                    </div>
                    <div class="clearfix"></div>
                    <ul class="careerfy-login-media">
                        <li><a href="#"><i class="fa fa-facebook"></i> Sign In with Facebook</a></li>
                        <li><a href="#" data-original-title="google"><i class="fa fa-google"></i> Sign In with Google</a></li>
                        <li><a href="#" data-original-title="twitter"><i class="fa fa-twitter"></i> Sign In with Twitter</a></li>
                        <li><a href="#" data-original-title="linkedin"><i class="fa fa-linkedin"></i> Sign In with LinkedIn</a></li>
                    </ul> -->
                </form>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            username : "",
            password : ""
        }
    },
    computed:{
        // isLoggedIn:function(){
        //     //return this.$store
        // }
    },
    methods:{
        closeModal : function(){
            document.getElementById('JobSearchModalSignup').classList.remove('fade-in')
            document.body.classList.remove('careerfy-modal-active')
        },
        hideLoginAndShowRegistration:function(){
            document.getElementById('JobSearchModalSignup').classList.remove('fade-in')
            document.getElementById('JobSearchModalSignup').classList.add('fade')
            document.getElementById('JobSearchModalLogin').classList.add('fade-in') 
        },
        login: function (){
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', { email, password }).then(() => {
                console.log('closing modal')
                this.closeModal()
            }).catch(err => console.log(err))
        }
    },
    mounted(){

    }
}
</script>