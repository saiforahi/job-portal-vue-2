<template>
    <div>
        <!-- SubHeader -->
        <div class="careerfy-subheader">
            <span class="careerfy-banner-transparent"></span>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="careerfy-page-title">
                            <h1>Jobs</h1>
                            <p>Yes! You make or may not find the right job for you, but that’s ok.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SubHeader -->
        <!-- Main Content -->
        <div class="careerfy-main-content">
            
            <!-- Main Section -->
            <div class="careerfy-main-section careerfy-subheader-form-full">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 careerfy-typo-wrap">
                            <!-- Sub Header Form -->
                            <div class="careerfy-subheader-form">
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
                                        <li class="careerfy-banner-submit" style="cursor:pointer;"> <input type="button" value=""> <i class="careerfy-icon careerfy-search"></i> </li>
                                    </ul>
                                </form>
                            </div>
                            <!-- Sub Header Form -->
                        </div>

                    </div>
                </div>
            </div>
            <!-- Main Section -->

            <!-- Main Section -->
            <scale-loader :loading="is_loading" :color="'#13b5ea'" ></scale-loader>
            <div class="careerfy-main-section" v-if="!is_loading">
                
                <div class="container">
                    <div class="row">
                        <!-- <aside class="careerfy-column-3 careerfy-typo-wrap">
                            <form class="careerfy-search-filter">
                                <div class="careerfy-search-filter-wrap careerfy-without-toggle">
                                    <h2><a href="#">Locations</a></h2>
                                    <div class="careerfy-search-box">
                                        <input value="Search" onblur="if(this.value == '') { this.value ='Search'; }" onfocus="if(this.value =='Search') { this.value = ''; }" type="text">
                                        <input type="submit" value="">
                                        <i class="careerfy-icon careerfy-search"></i>
                                    </div>
                                    <ul class="careerfy-checkbox">
                                        <li>
                                            <input type="checkbox" id="r1" name="rr" />
                                            <label for="r1"><span></span>San Francisco</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="r2" name="rr" />
                                            <label for="r2"><span></span>Portland</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="r3" name="rr" />
                                            <label for="r3"><span></span>London</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="r4" name="rr" />
                                            <label for="r4"><span></span>Bangalore</label>
                                        </li>
                                    </ul>
                                    <a href="#" class="careerfy-seemore">+see more</a>
                                </div>
                                <div class="careerfy-search-filter-wrap careerfy-search-filter-toggle">
                                    <h2><a href="#" class="careerfy-click-btn">Date Posted</a></h2>
                                    <div class="careerfy-checkbox-toggle">
                                        <ul class="careerfy-checkbox">
                                            <li>
                                                <input type="checkbox" id="r5" name="rr" />
                                                <label for="r5"><span></span>Last Hour</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r6" name="rr" />
                                                <label for="r6"><span></span>Last 24 hours</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r7" name="rr" />
                                                <label for="r7"><span></span>Last 7 days</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r8" name="rr" />
                                                <label for="r8"><span></span>Last 14 days</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r9" name="rr" />
                                                <label for="r9"><span></span>Last 30 days</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r10" name="rr" />
                                                <label for="r10"><span></span>All</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="careerfy-search-filter-wrap careerfy-search-filter-toggle">
                                    <h2><a href="#" class="careerfy-click-btn">Vacancy Type</a></h2>
                                    <div class="careerfy-checkbox-toggle">
                                        <ul class="careerfy-checkbox">
                                            <li>
                                                <input type="checkbox" id="r11" name="rr" />
                                                <label for="r11"><span></span>Freelance</label>
                                                <small>13</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r12" name="rr" />
                                                <label for="r12"><span></span>Full Time</label>
                                                <small>4</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r13" name="rr" />
                                                <label for="r13"><span></span>Internship</label>
                                                <small>12</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r14" name="rr" />
                                                <label for="r14"><span></span>Part Time</label>
                                                <small>22</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r15" name="rr" />
                                                <label for="r15"><span></span>Temporary</label>
                                                <small>5</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r16" name="rr" />
                                                <label for="r16"><span></span>Volunteer</label>
                                                <small>20</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="careerfy-search-filter-wrap careerfy-search-filter-toggle">
                                    <h2><a href="#" class="careerfy-click-btn">Categories</a></h2>
                                    <div class="careerfy-checkbox-toggle">
                                        <ul class="careerfy-checkbox">
                                            <li>
                                                <input type="checkbox" id="r17" name="rr" />
                                                <label for="r17"><span></span>Accountancy</label>
                                                <small>10</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r18" name="rr" />
                                                <label for="r18"><span></span>Banking</label>
                                                <small>2</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r19" name="rr" />
                                                <label for="r19"><span></span>Charity & Voluntary</label>
                                                <small>6</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r20" name="rr" />
                                                <label for="r20"><span></span>Digital & Creative</label>
                                                <small>4</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r21" name="rr" />
                                                <label for="r21"><span></span>Estate Agency</label>
                                                <small>19</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r22" name="rr" />
                                                <label for="r22"><span></span>Graduate</label>
                                                <small>5</small>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="r23" name="rr" />
                                                <label for="r23"><span></span>IT Contractor</label>
                                                <small>10</small>
                                            </li>
                                        </ul>
                                        <a href="#" class="careerfy-seemore">+see more</a>
                                    </div>
                                </div>
                            </form>
                        </aside> -->
                        <div class="careerfy-column-12 careerfy-typo-wrap">
                            <!-- FilterAble -->
                            <div class="careerfy-filterable">
                                <h2>Showing 0-12 of {{jobs.length}} results</h2>
                                <ul>
                                    <!-- <li>
                                        <i class="careerfy-icon careerfy-sort"></i>
                                        <div class="careerfy-filterable-select">
                                            <select>
                                                <option>By resume deadline</option>
                                            </select>
                                        </div>
                                    </li> -->
                                    <li><a href="javascript:void(0)" v-on:click="gridView=true"><i class="careerfy-icon careerfy-squares"></i> Grid</a></li>
                                    <li><a href="javascript:void(0)" v-on:click="gridView=false"><i class="careerfy-icon careerfy-list"></i> List</a></li>
                                </ul>
                            </div>
                            <!-- FilterAble -->
                            <!-- JobGrid -->
                            <div v-if="gridView" class="careerfy-job careerfy-job-grid">
                                <ul class="careerfy-row">
                                    <li v-for="job in jobs" :key="job.id" class="careerfy-column-4">
                                        <div class="careerfy-job-grid-wrap">
                                            <figure v-on:click="go_to_details">
                                                <span class="careerfy-jobtype-label">Freelance</span>
                                                <a href="javascript:void(0)"><img src="extra-images/job-grid-logo-1.png" alt=""></a>
                                                <span class="careerfy-featured-label">Featured</span>
                                            </figure>
                                            <div class="careerfy-jobgrid-text">
                                                <div class="careerfy-job-tag"><a href="#">@ Massimo Artemisis</a></div>
                                                <h2><a href="javascript:void(0)">{{job.title}}</a></h2>
                                                <ul class="careerfy-job-time">
                                                    <li><a href="#">Sales & Marketing</a></li>
                                                    <li>3 days ago</li>
                                                </ul>
                                                <span class="careerfy-job-location"><i class="careerfy-icon careerfy-maps-and-flags"></i> Netherlands, Rotterdam</span>
                                                <a href="javascript:void(0)" class="careerfy-job-like"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- JobList -->
                            <div v-else class="careerfy-job careerfy-joblisting-classic">
                                <ul class="careerfy-row">
                                    <li v-for="job in jobs" :key="job.id" class="careerfy-column-12">
                                        <div class="careerfy-joblisting-classic-wrap">
                                            <figure><a href="#"><img src="extra-images/job-listing-logo-1.png" alt=""></a></figure>
                                            <div class="careerfy-joblisting-text">
                                                <div class="careerfy-list-option">
                                                    <h2><a href="#">{{job.title}}</a> <span>Featured</span></h2>
                                                    <ul>
                                                        <li><a href="#">@ Massimo Artemisis</a></li>
                                                        <li><i class="careerfy-icon careerfy-maps-and-flags"></i> Netherlands, Rotterdam</li>
                                                        <li><i class="careerfy-icon careerfy-filter-tool-black-shape"></i> Sales & Marketing</li>
                                                    </ul>
                                                </div>
                                                <div class="careerfy-job-userlist">
                                                    <a href="#" class="careerfy-option-btn">Freelance</a>
                                                    <a href="#" class="careerfy-job-like"><i class="fa fa-heart"></i></a>
                                                </div>
                                            <div class="clearfix"></div>
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
            </div>
            <!-- Main Section -->

        </div>
        <!-- Main Content -->
        
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
    
    name:"JobsGrid",
    components:{
        PulseLoader,ScaleLoader
    },
    data(){
        return{
            gridView: true,
            jobs:[],
            is_loading:false
        }
    },
    methods:{
        go_to_details:function(){
            this.$router.push({name:'jobdetails',params:{id:'1'}})
        }
    },
    mounted(){
        this.is_loading=true
        this.$store.dispatch('get_all_jobs').then((res)=>{
            console.log('jobs',res)
            this.jobs=res.data
            this.is_loading=false
        })
    }
}
</script>