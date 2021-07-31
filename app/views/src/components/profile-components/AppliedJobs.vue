<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <div class="careerfy-employer-box-section">
                <div class="careerfy-profile-title">
                    <h2>Applied Jobs</h2>
                    <form class="careerfy-employer-search">
                        <input value="Search orders" onblur="if(this.value == '') { this.value ='Search orders'; }" onfocus="if(this.value =='Search orders') { this.value = ''; }" type="text">
                        <input value="" type="submit">
                        <i class="careerfy-icon careerfy-search"></i>
                    </form>
                </div>
                <div class="careerfy-applied-jobs">
                    <ul class="careerfy-row">
                        <li class="careerfy-column-12">
                            <div class="careerfy-applied-jobs-wrap">
                                <!-- <a href="#" class="careerfy-applied-jobs-thumb"><img src="extra-images/candidate-01.jpg" alt=""></a> -->
                                <div class="careerfy-applied-jobs-text">
                                    <div class="careerfy-applied-jobs-left">
                                        <span>@ Yup Studios</span>
                                        <h2><a href="#">Overdue Accounts Officer for Audit</a></h2>
                                        <ul>
                                            <li><i class="fa fa-map-marker"></i> Netherlands, Rotterdam</li>
                                            <li><i class="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="#">Web Developer</a></li>
                                            <li><i class="careerfy-icon careerfy-calendar"></i> Sep 26, 2017</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-rubbish"></i></a>
                                    <a href="#" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-view"></i></a>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
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
export default {
    name:"AppliedJobs",
    data(){
        return{
            
        }
    }
}
</script>