<template>
    <!-- Header -->
        <header id="careerfy-header" class="careerfy-header-one">
            <div class="container">
                <div class="row">
                    <!-- <aside class="col-md-4" style="margin-right:0px;">
                        <select>
                            <option>EN</option>
                            <option>BN</option>
                        </select>
                    </aside> -->
                    <aside class="col-md-12"><label style="cursor:pointer;" v-on:click="change_lang" class="text-right lang-label">{{currentLang}}</label></aside>
                </div>
                <div class="row">
                    <aside class="col-md-2"> <router-link to="/"><a href="#" class="careerfy-logo"><img src="images/karma-logo.png" alt=""></a></router-link> </aside>
                    <aside class="col-md-6">
                        <nav class="careerfy-navigation">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#careerfy-navbar-collapse-1" aria-expanded="false">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="careerfy-navbar-collapse-1">
                                <ul class="navbar-nav">
                                    <li class="active"><a href="#">{{$t('message.home')}}</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Demo Careerfy</a></li>
                                            <li><a href="#">Demo Hireright</a></li>
                                            <li><a href="#">Demo Jobshub</a></li>
                                            <li><a href="#">Demo BelovedJobs</a></li>
                                            <li><a href="#">Demo JobsOnline</a></li>
                                            <li><a href="#">Demo JobSearch</a></li>
                                            <li><a href="#">Demo JobFinder</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">CV Packages</a></li>
                                            <li><a href="#">Faq's</a></li>
                                            <li><a href="#">Job Grid</a></li>
                                            <li><a href="#">Job Grid W/filter</a></li>
                                            <li><a href="#">Job Listings</a></li>
                                            <li><a href="#">Job Detail</a>
                                                <ul class="sub-menu">
                                                    <li><a href="#">Job Detail I</a></li>
                                                    <li><a href="#">Job Detail II</a></li>
                                                    <li><a href="#">Job Detail III</a></li>
                                                    <li><a href="#">Job Detail IV</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Job Packages</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">For Candidates</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Applied Jobs</a></li>
                                            <li><a href="#">Changed Password</a></li>
                                            <li><a href="#">CV Manager</a></li>
                                            <li><a href="#">Job Alert</a></li>
                                            <li><a href="#">Profile Setting</a></li>
                                            <li><a href="#">Candidate Resume</a></li>
                                            <li><a href="#">Saved Jobs</a></li>
                                            <li><a href="#">Candidate Listings</a></li>
                                            <li><a href="#">Candidate Grid</a></li>
                                            <li><a href="#">Candidate Detail</a>
                                                <ul class="sub-menu">
                                                    <li><a href="#">Candidate Detail I</a></li>
                                                    <li><a href="#">Candidate Detail II</a></li>
                                                    <li><a href="#">Candidate Detail III</a></li>
                                                    <li><a href="#">Candidate Detail IV</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">For Employers</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Employer List</a></li>
                                            <li><a href="#">Employer Grid</a></li>
                                            <li><a href="#">Employer Detail</a>
                                                <ul class="sub-menu">
                                                    <li><a href="#">Employer Detail I</a></li>
                                                    <li><a href="#">Employer Detail II</a></li>
                                                    <li><a href="#">Employer Detail III</a></li>
                                                    <li><a href="#">Employer Detail IV</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Transactions</a></li>
                                            <li><a href="#">Employer Resumes</a></li>
                                            <li><a href="#">Profile Setting</a></li>
                                            <li><a href="#">Package Payment</a></li>
                                            <li><a href="#">Packages</a></li>
                                            <li><a href="#">Employer New Job</a></li>
                                            <li><a href="#">Menage Jobs</a></li>
                                            <li><a href="#">Employer Confitmation</a></li>
                                        </ul>
                                    </li>
                                    <li><router-link to="/contact-us"><a href="#">Contact</a></router-link></li>
                                </ul>
                            </div>
                      </nav>
                    </aside>
                    <aside class="col-md-4">
                        <div class="careerfy-right">
                            <ul class="careerfy-user-section">
                                <li v-if="isLoggedIn == ''"><a class="careerfy-color careerfy-open-signin-tab" v-on:click="showRegistrationForm" href="#">{{ $t('message.registration') }}</a></li>
                                <li v-if="isLoggedIn == ''"><a class="careerfy-color careerfy-open-signup-tab" href="#" v-on:click="showLoginForm">{{ $t('message.signin') }}</a></li>
                                <li v-if="isLoggedIn"><router-link to="/profile"><img :src="avatar_img" alt="Avatar" class="avatar"></router-link></li>
                            </ul>
                            <a href="#" class="careerfy-simple-btn careerfy-bgcolor"><span> <i class="careerfy-icon careerfy-arrows-2"></i>{{$t('message.post_job')}}</span></a>
                        </div>
                    </aside>
                </div>
            </div>
        </header>
        <!-- Header -->
</template>
<script>
import avatar from '../assets/avatar.png'
export default {
    name:"Header",
    data(){
        return{
            avatar_img:avatar
        }
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      currentLang : function(){ return this.$i18n.locale}
    },
    methods:{
        showLoginForm:function(){
            console.log('login btn pressed')
            document.getElementById('JobSearchModalSignup').classList.add('fade-in')
            document.body.classList.add('careerfy-modal-active')
        },
        showRegistrationForm:function(){
            console.log('login btn pressed')
            document.getElementById('JobSearchModalLogin').classList.add('fade-in')
            document.body.classList.add('careerfy-modal-active')
        },
        change_lang : function(){
            if(this.$i18n.locale == 'en'){
                this.$i18n.locale = 'bn'
            }
            else{
                this.$i18n.locale = 'en'
            }
        }
    }
}
</script>
<style>
.avatar {
  vertical-align: middle;
  width: 30px;
  height: auto;
  border-radius: 50%;
}
.lang-label{
    margin-bottom: 0px !important;
}
</style>