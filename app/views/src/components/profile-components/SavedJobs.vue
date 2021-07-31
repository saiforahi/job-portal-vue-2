<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <div class="careerfy-employer-box-section">
                <div class="careerfy-profile-title">
                    <h2>Saved Jobs</h2>
                    <form class="careerfy-employer-search">
                        <input value="Search orders" onblur="if(this.value == '') { this.value ='Search orders'; }" onfocus="if(this.value =='Search orders') { this.value = ''; }" type="text">
                        <input value="" type="submit">
                        <i class="careerfy-icon careerfy-search"></i>
                    </form>
                </div>
                <div class="careerfy-candidate-savedjobs">
                    <div class="careerfy-candidate-savedjobs-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Job Title</th>
                                    <th>Company</th>
                                    <th>Date Saved</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="javascript:void(0)" class="careerfy-savedjobs-thumb"><img :src="'extra-images/candidate-saved-jobs-thumb-2.png'" alt=""></a>
                                        <h2><a href="#">German Speaking Team Leader</a></h2>
                                    </td>
                                    <td><span>@ Yup Studios</span></td>
                                    <td>Sep 26, 2017</td>
                                    <td>
                                        <a href="javascript:void(0)" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-rubbish"></i></a>
                                        <a href="javascript:void(0)" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-view"></i></a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="careerfy-pagination-blog">
                    <ul class="page-numbers">
                        <li><a class="prev page-numbers" href="#"><span><i class="careerfy-icon careerfy-arrows4"></i></span></a></li>
                        <li><span class="page-numbers current">01</span></li>
                        <li><a class="page-numbers" href="#">02</a></li>
                        <li><a class="page-numbers" href="#">03</a></li>
                        <li><a class="page-numbers" href="#">04</a></li>
                        <li><a class="next page-numbers" href="#"><span><i class="careerfy-icon careerfy-arrows4"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dummyImage from '../../assets/candidate-saved-jobs-thumb.png'
export default {
    name:"SavedJobs",
    data(){
        return{

        }
    }
}
</script>