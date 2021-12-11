<template>
    <!-- Modal Signup Box -->
    <transition name="modal">
        <div class="careerfy-modal fade careerfy-typo-wrap" id="JobSearchModalLogin">
        <div class="modal-inner-area">&nbsp;</div>
        <div class="modal-content-area">
            <div class="modal-box-area">

                <div class="careerfy-modal-title-box">
                    <h2>Signup to your account</h2>
                    <span v-on:click="closeModal" class="modal-close"><i class="fa fa-times"></i></span>
                </div>
                <hr/>
                <form style="margin-top:70px;">
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
                    <div class="careerfy-user-form careerfy-user-form-coltwo">
                        <ul>
                            <li>
                                <label>First Name:</label>
                                <input  v-model="first_name" value="Enter Your Name" onblur="if(this.value == '') { this.value ='Enter Your Name'; }" onfocus="if(this.value =='Enter Your Name') { this.value = ''; }" type="text">
                                <i class="careerfy-icon careerfy-user"></i>
                            </li>
                            <li>
                                <label>Last Name:</label>
                                <input v-model="last_name" value="Enter Your Name" onblur="if(this.value == '') { this.value ='Enter Your Name'; }" onfocus="if(this.value =='Enter Your Name') { this.value = ''; }" type="text">
                                <i class="careerfy-icon careerfy-user"></i>
                            </li>
                            <li>
                                <div class="row">
                                    <label>Email Address:</label>
                                    <input v-model="email"  type="text">
                                    
                                </div>
                                <div class="row">
                                    <p v-if="errors.email" style="color:red;">{{errors.email[0]}}</p>
                                </div>
                                
                            </li>
                            
                            <li>
                                <label>Phone Number:</label>
                                <input v-model="phone"  type="text">
                                
                                <p v-if="errors.phone" style="color:red;">{{errors.phone[0]}}</p>
                            </li>
                            
                            <li>
                                <label>Password</label>
                                <input style="width:100%;" v-model="password" placeholder="Enter Your 8 digit password"  type="password">
                                
                            </li>
                            <li>
                                <label>Confirm Password</label>
                                <input style="width:100%;" v-model="confirm_password" placeholder="Confirm password" type="password">
                                
                            </li>
                            <!-- <li class="careerfy-user-form-coltwo-full">
                                <img src="extra-images/login-robot.png" alt="">
                            </li> -->
                            <li class="careerfy-user-form-coltwo-full">
                                <input type="button" value="Sign Up" v-on:click="register">
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="careerfy-box-title careerfy-box-title-sub">
                        <span>Or Sign Up With</span>
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
    </transition>
    
</template>
<script>
import swal from 'sweetalert';
export default {
    name:"Register",
    data(){
        return{
            first_name :"",
            last_name : "",
            email: "",
            phone : "",
            password:"",
            confirm_password:"",
            errors:{}
        }
    },
    methods:{
        closeModal : function(){
            document.getElementById('JobSearchModalLogin').classList.remove('fade-in')
            document.body.classList.remove('careerfy-modal-active')
        },
        register: function(){
            let email = this.email
            let phone = this.phone
            let first_name = this.first_name
            let last_name = this.last_name
            let password = this.password
            let confirm_password = this.confirm_password
            this.$store.dispatch('register', { first_name,last_name,email, phone, password, confirm_password }).then(() => {
                this.closeModal()
                swal('Success','You successfully registered and logged in!','success')
                this.$router.push('/')
            }).catch(err => this.errors=err)
        }
    },
}
</script>