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
                            <input class="form-control" v-model="dob" :formatter="format" type="date">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Phone *</label>
                            <input v-model="phone" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Father Name *</label>
                            <input v-model="father_name" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Mother Name</label>
                            <input v-model="mother_name" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Marital Status</label>
                            <div class="careerfy-profile-select">
                                <!-- <v-select :create-option="book => ({ label: book, code: book })" v-model="religion" :options="[{label: 'Canada', code: 'ca'}]" @input="setReligion"></v-select> -->
                                <select v-model="marital_status">
                                    <option v-for="status in marital_statuses" :key="status.id" :value="status.id">{{status.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li v-if="marital_status=='married'" class="careerfy-column-6">
                            <label>Spouse Name</label>
                            <input v-model="spouse_name" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Religion *</label>
                            <div class="careerfy-profile-select">
                                <!-- <v-select :create-option="book => ({ label: book, code: book })" v-model="religion" :options="[{label: 'Canada', code: 'ca'}]" @input="setReligion"></v-select> -->
                                <select>
                                    <option v-for="religion in religions" :key="religion.id" :value="religion.id">{{religion.title.en}}</option>
                                    
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Legal Doc type *</label>
                            <div class="careerfy-profile-select">
                                <!-- <v-select :create-option="book => ({ label: book, code: book })" v-model="religion" :options="[{label: 'Canada', code: 'ca'}]" @input="setReligion"></v-select> -->
                                <select v-model="legal_doc_type">
                                    <option value="nid">NID</option>
                                    <option value="birth_certificate">Birth Certificate</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Legal Doc No *</label>
                            <input v-model="legal_doc_no" type="text">
                        </li>
                        <!-- <li class="careerfy-column-6 careerfy-fileUpload">
                            <span><i class="careerfy-icon careerfy-add"></i> Upload Legal Doc</span><input type="file" class="careerfy-upload" />
                        </li> -->
                        
                        <!-- <li class="careerfy-column-12">
                            <label>Description *</label>
                            <textarea v-model="description"></textarea>
                        </li> -->
                    </ul>
                </div>
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>PresentAddress / Location</h2></div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <!-- <li class="careerfy-column-6">
                            <label>Country *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="country">
                                    <option value="bd">Bangladesh</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                            </div>
                        </li> -->
                        <li class="careerfy-column-6">
                            <label>District *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="present_address.district">
                                    <option  value="-1">select</option>
                                    <option v-for="district in districts" :key="district.id" :value="district.id">{{district.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Thana *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="present_address.thana">
                                    <option v-for="thana in present_thanas" :key="thana.id" :value="thana.id">{{thana.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Union *</label>
                            <input type="text" v-model="present_address.union">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Village</label>
                            <input type="text" v-model="present_address.village_para">
                        </li>
                        <li class="careerfy-column-12">
                            <label>Street / House no</label>
                            <input type="text" v-model="present_address.road_house_name">
                        </li>
                        <li class="careerfy-column-12">
                            <label>Postal Code</label>
                            <input type="text" v-model="present_address.postal_code">
                        </li>
                        <!-- <li class="careerfy-column-12">
                            <div class="careerfy-profile-map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22589232.038285658!2d-103.9763543971716!3d46.28054447273778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1507595834401"></iframe></div>
                            <span class="careerfy-short-message">For the precise location, you can drag and drop the pin.</span>
                        </li> -->
                    </ul>
                </div>
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>Permanent Address / Location</h2></div>
                    <div class="row">
                        <div class="col">
                            <label>
                                <span><input type="checkbox" v-model="same_address" :checked="same_address"></span>   <span>Same as present address</span>
                            </label>
                        </div>
                    </div>
                    <ul v-if="!same_address" class="careerfy-row careerfy-employer-profile-form">
                        <!-- <li class="careerfy-column-6">
                            <label>Country *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="country">
                                    <option value="bd">Bangladesh</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                            </div>
                        </li> -->
                        <li class="careerfy-column-12">
                            
                            <!-- <label> </label> -->
                            <!-- <div class="careerfy-profile-select">
                                <select>
                                    <option>B.sc Master</option>
                                    <option>B.sc Master</option>
                                </select>
                            </div> -->
                            
                        </li>
                        <li class="careerfy-column-6">
                            <label>District *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="permanent_address.district">
                                    <option v-for="district in districts" :key="district.id" :value="district.id">{{district.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Thana *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="permanent_address.thana">
                                    <option v-for="thana in permanent_thanas" :key="thana.id" :value="thana.id">{{thana.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Union *</label>
                            <input type="text" v-model="permanent_address.union">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Village</label>
                            <input  type="text" v-model="permanent_address.village_para">
                        </li>
                        <li class="careerfy-column-12">
                            <label>Street / House no</label>
                            <input  type="text" v-model="permanent_address.road_house_name">
                        </li>
                        <li class="careerfy-column-12">
                            <label>Postal Code</label>
                            <input  type="text" v-model="permanent_address.postal_code">
                        </li>
                        <!-- <li class="careerfy-column-12">
                            <div class="careerfy-profile-map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22589232.038285658!2d-103.9763543971716!3d46.28054447273778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1507595834401"></iframe></div>
                            <span class="careerfy-short-message">For the precise location, you can drag and drop the pin.</span>
                        </li> -->
                    </ul>
                </div>
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>Other Information</h2></div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <li class="careerfy-column-6">
                            <label>Gender *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="gender">
                                    <option v-for="item in genders" :key="item.id" :value="item.id">{{item.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Age *</label>
                            <input v-model="age" type="number">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Future Plan</label>
                            <div class="careerfy-profile-select">
                                <select v-model="future_plan">
                                    <option v-for="item in future_plans" :key="item.id" :value="item.id">{{item.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Ethnicity</label>
                            <div class="careerfy-profile-select">
                                <select v-model="ethnicity">
                                    <option v-for="item in ethnicities" :key="item.id" :value="item.id">{{item.title.en}}</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Highest Level of Education *</label>
                            <div class="careerfy-profile-select">
                                <select v-model="top_degree">
                                    <option value="diploma">Diploma Engineering</option>
                                    <option value="hsc">HSC</option>
                                    <option value="ssc">SSC</option>
                                    <option value="class 8">Class 8 passed</option>
                                    <option value="class 5">Class 5 passed</option>
                                    <option value="sign">Can sign only/Literate</option>
                                    <option value="not literate">Not Literate</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <div class="row">
                                <div class="col">
                                    <label>
                                        <span><input type="checkbox" v-model="is_disabled" :checked="is_disabled"></span>   <span>Disable Status *</span>
                                    </label>
                                </div>
                            </div>
                            <!-- <label> </label> -->
                            <!-- <div class="careerfy-profile-select">
                                <select>
                                    <option>B.sc Master</option>
                                    <option>B.sc Master</option>
                                </select>
                            </div> -->
                            
                        </li>
                    </ul>
                </div>
                <scale-loader :loading="is_loading" :color="'#13b5ea'"></scale-loader>
                <input type="button" v-on:click="update_details()" class="careerfy-employer-profile-submit" value="Save Setting">
            </form>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import swal from 'sweetalert'
import {API} from '../../config'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
    name:"ProfileData",
    components:{
        ScaleLoader,
    },
    data(){
        return{
            is_loading:false,
            //select options
            religions:[],
            ethnicities:[],
            marital_statuses:[],
            blood_groups:[],
            future_plans:[],
            genders:[],
            districts:[],
            thanas:[],
            present_thanas:[],
            permanent_thanas:[],

            details:{},
            first_name:'',
            last_name:'',
            email:'',
            dob:null,
            phone:'',
            gender:null,
            age:null,
            marital_status:null,
            spouse_name:'',
            father_name:'',
            mother_name:'',
            religion:null,
            ethnicity:null,
            is_disabled:false,
            top_degree:null,
            future_plan:null,
            legal_doc_type:null,
            legal_doc_no:null,
            present_address:{
                district:-1,
                thana:null,
                union:null,
                village_para:null,
                road_house_name:null,
                postal_code:null,
                division_region:null
            },
            permanent_address:{
                district:null,
                thana:null,
                union:null,
                village_para:null,
                road_house_name:null,
                postal_code:null,
                division_region:null
            },
            same_address:false
        }
    },
    watch:{
        is_disabled:function(){
            console.log(this.is_disabled)
        },
        religion:function(){
            console.log(this.religion)
        },
        present_address:{
            handler(val){
                this.present_thanas= Array.from(this.thanas).filter(function(thana) {
                    return thana.district_id == val.district;
                })
            },
            deep: true
        },
        permanent_address:{
            handler(val){
                this.permanent_thanas= Array.from(this.thanas).filter(function(thana) {
                    return thana.district_id == val.district;
                })
            },
            deep: true
        },
        same_address:function(val){
            if(val){
                this.permanent_address.district = this.present_address.district
                console.log(val)
            }
        },
    },
    methods:{
        make_addresses_same:function(val){
            console.log(val)
            if(val == 'on'){
                console.log(this.present_address.district)
            }
        },
        setReligion:function(value){
            console.log('religion input',value)
            this.religion=value
        },
        format:function(value,event){
            return moment(value).format('YYYY-MM-DD')
        },
        update_details:function(){
            this.is_loading=true
            let data={
                first_name:this.first_name,
                last_name:this.last_name,
                email:this.email,
                phone:this.phone,
                dob:this.dob,

                father_name:this.father_name,
                mother_name:this.mother_name,
                spouse_name:this.spouse_name,
                marital_status:this.marital_status,

                gender:this.gender,
                age:this.age,
                
                religion:this.religion,
                ethnicity:this.ethnicity,
                is_disabled:this.is_disabled == 0?false:true,
                top_degree:this.top_degree,
                future_plan:this.future_plan,
                legal_doc_type:this.legal_doc_type,
                legal_doc_no:this.legal_doc_no,
                present_address: this.present_address,
                permanent_address : this.permanent_address
            }
            console.log('update_payload',data,JSON.stringify(data))
            this.$store.dispatch('update_details',data).then((res)=>{
                console.log(res)
                this.is_loading=false
                if(res.success == true){
                    swal('Success','Your profile updated!','success')
                }
            }).catch(err=>{
                this.is_loading=false
            })
        }
    },
    mounted() {
        this.is_loading=true
        API.get('user/preset-data').then(res=>{
            console.log('pre set',res.data.data)
            this.marital_statuses=res.data.data.marital_statuses
            this.religions=res.data.data.religions
            this.blood_groups=res.data.data.blood_groups
            this.ethnicities=res.data.data.ethnicities
            this.genders = res.data.data.genders
            this.future_plans = res.data.data.future_plans,
            this.districts=res.data.data.districts,
            this.thanas = res.data.data.thanas
            this.present_thanas = res.data.data.thanas
            this.permanent_thanas = res.data.data.thanas
        })
        this.$store.dispatch('get_details').then((user) => {
            console.log('profile details',JSON.parse(JSON.stringify(user)))
            this.details=user
            this.first_name=user.first_name
            this.last_name=user.last_name
            this.email=user.email
            this.dob=user.details?.dob
            this.phone=user.phone
            this.father_name=user.details?.father_name?user.details.father_name:''
            this.mother_name = user.details?.mother_name?user.details.mother_name:''
            this.marital_status = user.details?.marital_status?user.details.marital_status:null
            this.spouse_name = user.details?.spouse_name?user.details.spouse_name:''
            this.religion = user.details?.religion?user.details.religion:null
            console.log('gender',user.details?.gender)
            this.gender = user.details?.gender?user.details.gender:null
            this.age = user.details?.age?user.details.age:''
            this.present_address = user.details?.present_address,
            this.permanent_address = user.details?.permanent_address
            this.is_loading=false
        }).catch(err => {console.log(err); this.is_loading=false;})
    },
}
</script>