<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <form class="careerfy-employer-dasboard">
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>Basic Information</h2></div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <li class="careerfy-column-6">
                            <label>Your First Name *</label>
                            <input v-model="first_name" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Your Last Name</label>
                            <input v-model="last_name" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Email *</label>
                            <input v-model="email" type="email">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Date of Birth:</label>
                            <input class="form-control" v-model="dob" type="date">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Phone *</label>
                            <input v-model="phone" type="text">
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
                            <textarea v-model="description"></textarea>
                        </li>
                    </ul>
                </div>
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>Address / Location</h2></div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <li class="careerfy-column-6">
                            <label>Country *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="country">
                                    <option value="bd">Bangladesh</option>
                                    <option value="uk">United Kingdom</option>
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
                <input type="button" class="careerfy-employer-profile-submit" value="Save Setting">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProfileData",
    data(){
        return{
            details:{},
            first_name:'',
            last_name:'',
            email:'',
            dob:'',
            phone:'',
            category:'',
            job_title:'',
            description:'',
            country:'uk'
        }
    },
    mounted() {
        this.$store.dispatch('get_details').then((user) => {
            console.log('profile details',JSON.parse(JSON.stringify(user)))
            this.details=user
            this.first_name=user.first_name
            this.last_name=user.last_name
            this.email=user.email
            this.dob=user.details.dob
            this.phone=user.phone
            this.description=user.details.description?user.details.description:''
        }).catch(err => console.log(err))
    },
}
</script>