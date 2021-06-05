<template>
    <!-- Banner -->
        <div class="careerfy-banner careerfy-typo-wrap">
            <span class="careerfy-banner-transparent"></span>
            <div class="careerfy-banner-caption">
                <div class="container">
                    <h1>Aim Higher. Reach Farther. Dream Bigger.</h1>
                    <p>A better career is out there. We'll help you find it to use.</p>
                    <form class="careerfy-banner-search">
                        <ul>
                            <li>
                                <input value="Job Title, Keywords, or Company" onblur="if(this.value == '') { this.value ='Job Title, Keywords, or Company'; }" onfocus="if(this.value =='Job Title, Keywords, or Company') { this.value = ''; }" type="text">
                            </li>
                            <li>
                                <input value="City, State or ZIP" onblur="if(this.value == '') { this.value ='City, State or ZIP'; }" onfocus="if(this.value =='City, State or ZIP') { this.value = ''; }" type="text">
                                <i class="careerfy-icon careerfy-location"></i>
                            </li>
                            <li>
                                <div class="careerfy-select-style">
                                    <select>
                                        <option>Categories</option>
                                        <option>Categories</option>
                                        <option>Categories</option>
                                    </select>
                                </div>
                            </li>
                            <li class="careerfy-banner-submit"> <input type="button" value=""> <i class="careerfy-icon careerfy-search"></i> </li>
                        </ul>
                    </form>
                    <div class="careerfy-banner-btn">
                        <a href="#" class="careerfy-bgcolorhover"><i class="careerfy-icon careerfy-up-arrow"></i> Upload Your Resume</a>
                        <a href="#" class="careerfy-bgcolorhover"><i class="careerfy-icon careerfy-portfolio"></i> Hiring? Post a job for free</a>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
export default {
    name:"Home",
    components:{Header,Footer,Login,Register},
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>