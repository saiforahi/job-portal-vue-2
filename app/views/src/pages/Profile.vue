<template>
    <div>
        <!-- SubHeader -->
        <sub-header></sub-header>
        <!-- SubHeader -->
        <!-- Main Content -->
        <div class="careerfy-main-content">
            
            <!-- Main Section -->
            <div class="careerfy-main-section careerfy-dashboard-fulltwo">
                <div class="container">
                    <div class="row">
                        <aside class="careerfy-column-3">
                            <div class="careerfy-typo-wrap">
                                <div class="careerfy-employer-dashboard-nav">
                                    <figure>
                                        <a href="#" class="employer-dashboard-thumb"><img style="height: 100% !important;" :src="profile_pic_store==''?'extra-images/candidate-dashboard-navthumb.jpg':profile_pic_store" alt=""></a>
                                        <figcaption>
                                            <div class="careerfy-fileUpload">
                                                <span><i class="careerfy-icon careerfy-add"></i> Upload Photo</span>
                                                <input type="file" class="careerfy-upload" @change="update_profile_pic($event.target.files)"/>
                                                <!-- <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="update_profile_pic($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*"> -->
                                            </div>
                                            <h2>{{first_name}}</h2>
                                            <span class="careerfy-dashboard-subtitle">{{job_title}}</span>
                                        </figcaption>
                                    </figure>
                                    <ul>
                                        <li><router-link to="/profile"><i class="careerfy-icon careerfy-user"></i> My Profile</router-link></li>
                                        <li><router-link :disabled="true" to="/profile/resume"><i class="careerfy-icon careerfy-resume"></i> My Resume</router-link></li>
                                        <li><router-link to="/profile/saved-jobs"><i class="careerfy-icon careerfy-heart"></i> Saved jobs</router-link></li>
                                        <li><router-link to="/profile/applied-jobs"><i class="careerfy-icon careerfy-briefcase-1"></i> Applied jobs</router-link></li>
                                        <li><router-link to="/profile/job-alerts"><i class="careerfy-icon careerfy-alarm"></i> Job Alerts</router-link></li>
                                        <!-- <li><router-link to="/profile/change-password"><i class="careerfy-icon crouter-linkreerfy-id-card"></i> CV Manager</router-link></li> -->
                                        <li><router-link to="/profile/change-password"><i class="careerfy-icon careerfy-multimedia"></i> Change Password</router-link></li>
                                        <li><a href="javascript:void(0)" v-on:click="logout"><i class="careerfy-icon careerfy-logout"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <router-view></router-view>
                        <!-- <div class="careerfy-column-9">
                            <div class="careerfy-typo-wrap">
                                <form class="careerfy-employer-dasboard">
                                    <div class="careerfy-employer-box-section">
                                        <div class="careerfy-profile-title"><h2>Basic Information</h2></div>
                                        <ul class="careerfy-row careerfy-employer-profile-form">
                                            <li class="careerfy-column-6">
                                                <label>Your Name *</label>
                                                <input value="Jody Wisternoff" onblur="if(this.value == '') { this.value ='Jody Wisternoff'; }" onfocus="if(this.value =='Jody Wisternoff') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Email *</label>
                                                <input value="contact@jodywisternoff" onblur="if(this.value == '') { this.value ='contact@jodywisternoff'; }" onfocus="if(this.value =='contact@jodywisternoff') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Date of Birth:</label>
                                                <div class="careerfy-three-column-row">
                                                    <div class="careerfy-profile-select careerfy-three-column">
                                                        <select>
                                                            <option>dd</option>
                                                            <option>dd</option>
                                                        </select>
                                                    </div>
                                                    <div class="careerfy-profile-select careerfy-three-column">
                                                        <select>
                                                            <option>mm</option>
                                                            <option>mm</option>
                                                        </select>
                                                    </div>
                                                    <div class="careerfy-profile-select careerfy-three-column">
                                                        <select>
                                                            <option>yyyy</option>
                                                            <option>yyyy</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Phone *</label>
                                                <input value="0979380947" onblur="if(this.value == '') { this.value ='0979380947'; }" onfocus="if(this.value =='0979380947') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Category *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>PHP Developer</option>
                                                        <option>PHP Developer</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Job Title *</label>
                                                <input value="PHP Developer at various agencies" onblur="if(this.value == '') { this.value ='PHP Developer at various agencies'; }" onfocus="if(this.value =='PHP Developer at various agencies') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-12">
                                                <label>Description *</label>
                                                <textarea>Nulla bibendum commodo rhoncus. Sed mattis magna nunc, ac varius quam pharetra vitae. Praesent vitae ipsum eu magna pretium aliquam. Curabitur interdum quis velit non tincidunt. Donec pretium gravida erat, a faucibus velit egestas eget. Nulla bibendum commodo rhoncus. Sed mattis magna nunc, ac varius quam itae ipsum eu magna pretium aliquam. Curabitur interdum quis velit non tincidunt. Donec pretium gravida erat, a faucibus velit egestas eget.</textarea>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="careerfy-employer-box-section">
                                        <div class="careerfy-profile-title"><h2>Address / Location</h2></div>
                                        <ul class="careerfy-row careerfy-employer-profile-form">
                                            <li class="careerfy-column-6">
                                                <label>Country *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>United Kingdom</option>
                                                        <option>United Kingdom</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Region *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>London</option>
                                                        <option>London</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>City / Town *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>London</option>
                                                        <option>London</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Postcode *</label>
                                                <input value="746000" onblur="if(this.value == '') { this.value ='746000'; }" onfocus="if(this.value =='746000') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-10">
                                                <label>Full Address *</label>
                                                <input value="Ha Dong - Ha Noi - Viet Nam" onblur="if(this.value == '') { this.value ='Ha Dong - Ha Noi - Viet Nam'; }" onfocus="if(this.value =='Ha Dong - Ha Noi - Viet Nam') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-2">
                                                <button class="careerfy-findmap-btn">Find on Map</button>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Latitude</label>
                                                <input value="51.4935825" onblur="if(this.value == '') { this.value ='51.4935825'; }" onfocus="if(this.value =='51.4935825') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Longitude</label>
                                                <input value="-0.16803379999998924" onblur="if(this.value == '') { this.value ='-0.16803379999998924'; }" onfocus="if(this.value =='-0.16803379999998924') { this.value = ''; }" type="text">
                                            </li>
                                            <li class="careerfy-column-12">
                                                <div class="careerfy-profile-map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22589232.038285658!2d-103.9763543971716!3d46.28054447273778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1507595834401"></iframe></div>
                                                <span class="careerfy-short-message">For the precise location, you can drag and drop the pin.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="careerfy-employer-box-section">
                                        <div class="careerfy-profile-title"><h2>Other Information</h2></div>
                                        <ul class="careerfy-row careerfy-employer-profile-form">
                                            <li class="careerfy-column-6">
                                                <label>Experience *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>5 Years</option>
                                                        <option>5 Years</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Age *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>24</option>
                                                        <option>24</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Current Salary($) *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>$ 2400</option>
                                                        <option>$ 2400</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Expected Salary($) *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>$ 4500</option>
                                                        <option>$ 4500</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Languages *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>English</option>
                                                        <option>English</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li class="careerfy-column-6">
                                                <label>Education Levels *</label>
                                                <div class="careerfy-profile-select">
                                                    <select>
                                                        <option>B.sc Master</option>
                                                        <option>B.sc Master</option>
                                                    </select>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <input type="submit" class="careerfy-employer-profile-submit" value="Save Setting">
                                </form>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
            <!-- Main Section -->

        </div>
        <!-- Main Content -->
    </div>
</template>
<script>
import swal from 'sweetalert'
import SubHeader from '../components/profile-components/SubHeader.vue'
import {API, FILE_API} from '../config'
export default {
  components: { SubHeader },
    name:"Profile",
    data(){
        return{
            profile_pic:''
        }
    },
    computed:{
        first_name(){
            return this.$store.getters.details.first_name
        },
        job_title(){
            return this.$store.getters.details.job_title?this.$store.getters.details.job_title:''
        },
        profile_pic_store(){
            console.log('ffr',this.$store.getters.profile_pic)
            this.profile_pic=this.$store.getters.profile_pic
            return this.$store.getters.profile_pic
        }
    },
    mounted(){
        // console.log('pro pic',this.$store.getters.details.profile_pic)
    },
    methods:{
        logout:function(){
            this.$router.push('/')
            this.$store.dispatch('logout').then((res)=>{
                
            }).catch(err => {
                console.log(err);
                
                }
            )
        },
        update_profile_pic:function(file){
            console.log(file)
            
            let formData=new FormData()
            formData.append('image',file[0])
            FILE_API.post('user/update-profile-pic',formData).then(res=>{
                console.log(res)
                this.profile_pic=URL.createObjectURL(file[0])
                this.$store.commit('update_profile_pic',URL.createObjectURL(file[0]))
                swal('Upadted','Your profile image has been updated','success')
            })
        }
    }
}
</script>