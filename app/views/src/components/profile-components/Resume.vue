<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <form class="careerfy-candidate-dasboard">
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title"><h2>My Resume</h2></div>
                    <div class="careerfy-candidate-section">
                        <div class="careerfy-candidate-title">
                        <h2><i class="careerfy-icon careerfy-resume-1"></i> Cover Letter</h2>
                    </div>
                    <div class="careerfy-candidate-dashboard-editor">
                        <img src="extra-images/candidate-dashboard-editor.jpg" alt="" />
                    </div>

                    <div class="careerfy-candidate-resume-wrap">
                        <div class="careerfy-candidate-title">
                            <h2><i class="careerfy-icon careerfy-mortarboard"></i> Education
                            <a
                                href="javascript:void(0)"
                                v-on:click="handle_add_education_popup"
                                class="careerfy-resume-addbtn"
                                ><span class="fa fa-plus"></span> Add education</a
                            >
                            </h2>
                        </div>

                        <div class="careerfy-add-popup" id="education-add-popup">
                            <ul class="careerfy-row careerfy-employer-profile-form">
                            <li class="careerfy-column-12">
                                <label>Title *</label>
                                <input
                                value="Masters in Fine Arts"
                                onblur="if(this.value == '') { this.value ='Masters in Fine Arts'; }"
                                onfocus="if(this.value =='Masters in Fine Arts') { this.value = ''; }"
                                type="text"
                                />
                            </li>
                            <li class="careerfy-column-6">
                                <label>From Date *</label>
                                <div class="careerfy-profile-select">
                                <select>
                                    <option>10-05-2012</option>
                                    <option>10-05-2012</option>
                                </select>
                                </div>
                            </li>
                            <li class="careerfy-column-6">
                                <label>To Date *</label>
                                <div class="careerfy-profile-select">
                                <select>
                                    <option>10-05-2014</option>
                                    <option>10-05-2014</option>
                                </select>
                                </div>
                            </li>
                            <li class="careerfy-column-12">
                                <label>Institute *</label>
                                <input
                                value="Walters University"
                                onblur="if(this.value == '') { this.value ='Walters University'; }"
                                onfocus="if(this.value =='Walters University') { this.value = ''; }"
                                type="text"
                                />
                            </li>
                            <li class="careerfy-column-12">
                                <label>Description *</label>
                                <img
                                src="extra-images/candidate-add-popup-textarea.png"
                                alt=""
                                />
                            </li>
                            <li class="careerfy-column-12">
                                <input type="submit" value="Add education" />
                            </li>
                            </ul>
                        </div>
                        <div class="careerfy-resume-education">
                            <ul class="careerfy-row">
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                    <small>2002 - 2004</small>
                                    <h2><a href="#">Masters in Fine Arts</a></h2>
                                    <span>Walters University</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                    <a href="#" class="careerfy-icon careerfy-edit"></a>
                                    <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                    <small>2012 - 2015</small>
                                    <h2><a href="#">Tommers College</a></h2>
                                    <span>Bachlors in Fine Arts</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                    <a href="#" class="careerfy-icon careerfy-edit"></a>
                                    <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                    <small>2014 - 2015</small>
                                    <h2><a href="#">Diploma in Fine Arts</a></h2>
                                    <span>Imperieal Institute of Art Direction</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                    <a href="#" class="careerfy-icon careerfy-edit"></a>
                                    <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="careerfy-candidate-resume-wrap">    
                        <div class="careerfy-candidate-title"> <h2>
                            <i class="careerfy-icon careerfy-social-media"></i> Experience 
                            <a href="javascript:void(0)" v-on:click="handle_add_experience_popup" class="careerfy-resume-addbtn"><span class="fa fa-plus"></span> Add experince</a>
                        </h2> </div>

                        <div class="careerfy-add-popup" id="add_exp_popup">
                            <ul class="careerfy-row careerfy-employer-profile-form">
                                <li class="careerfy-column-12">
                                    <label>Title *</label>
                                    <input value="Masters in Fine Arts" onblur="if(this.value == '') { this.value ='Masters in Fine Arts'; }" onfocus="if(this.value =='Masters in Fine Arts') { this.value = ''; }" type="text">
                                </li>
                                <li class="careerfy-column-5">
                                    <label>From Date *</label>
                                    <div class="careerfy-profile-select">
                                        <select>
                                            <option>10-05-2012</option>
                                            <option>10-05-2012</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="careerfy-column-5">
                                    <label>To Date *</label>
                                    <div class="careerfy-profile-select">
                                        <select>
                                            <option>10-05-2014</option>
                                            <option>10-05-2014</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="careerfy-column-2">
                                    <div class="careerfy-checkbox">
                                        <input id="r8" name="rr" type="checkbox">
                                        <label for="r8"><span></span>Present</label>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <label>Company *</label>
                                    <input value="Walters University" onblur="if(this.value == '') { this.value ='Walters University'; }" onfocus="if(this.value =='Walters University') { this.value = ''; }" type="text">
                                </li>
                                <li class="careerfy-column-12">
                                    <label>Description *</label>
                                    <img src="extra-images/candidate-add-popup-textarea.png" alt="">
                                </li>
                                <li class="careerfy-column-12">
                                    <input type="submit" value="Add experince">
                                </li>
                            </ul>
                        </div>
                        <div class="careerfy-resume-education">
                            <ul class="careerfy-row">
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                        <small>2010 - 2012</small>
                                        <h2><a href="#">Development Manager</a></h2>
                                        <span>Atract Solutions</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                        <small>2006 - 2008</small>
                                        <h2><a href="#">Senior PHP/Drupal developer</a></h2>
                                        <span>Minor Solutions</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-resume-education-wrap">
                                        <small>2002 - 2004</small>
                                        <h2><a href="#">Self Employed Professional</a></h2>
                                        <span> Abstraxct Max</span>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- <div class="careerfy-candidate-resume-wrap">    
                        <div class="careerfy-candidate-title"> <h2>
                            <i class="careerfy-icon careerfy-briefcase"></i> Portfolio 
                            <a href="#" class="careerfy-resume-addbtn"><span class="fa fa-plus"></span> Add Portfolio</a>
                        </h2> </div>

                        <div class="careerfy-company-gallery">
                            <ul class="careerfy-row">
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img :src="dummyPortFolioPic" alt=""></a>
                                        <figcaption>
                                            <span>Peca8 World</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-2.png" alt=""></a>
                                        <figcaption>
                                            <span>City Light</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-3.png" alt=""></a>
                                        <figcaption>
                                            <span>Spass Life</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-4.png" alt=""></a>
                                        <figcaption>
                                            <span>Cass Rasioaror</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-5.png" alt=""></a>
                                        <figcaption>
                                            <span>Miki Uni</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-6.png" alt=""></a>
                                        <figcaption>
                                            <span>Manhattoon</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="careerfy-column-3">
                                    <figure>
                                        <a href="#"><img src="extra-images/employer-company-photo-7.png" alt=""></a>
                                        <figcaption>
                                            <span>Aocan Active</span>
                                            <div class="careerfy-company-links">
                                                <a href="#" class="careerfy-icon careerfy-edit"></a>
                                                <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div> -->

                    <div class="careerfy-candidate-resume-wrap">    
                        <div class="careerfy-candidate-title"> <h2>
                            <i class="careerfy-icon careerfy-design-skills"></i> Skills 
                            <a href="javascript:void(0)" v-on:click="handle_add_skill_popup" class="careerfy-resume-addbtn"><span class="fa fa-plus"></span> Add Skills</a>
                        </h2> </div>

                        <div class="careerfy-add-popup" id="add_skill_popup">
                            <ul class="careerfy-row careerfy-employer-profile-form">
                                <li class="careerfy-column-12">
                                    <label>Skill Heading *</label>
                                    <input value="Web Development" onblur="if(this.value == '') { this.value ='Web Development'; }" onfocus="if(this.value =='Web Development') { this.value = ''; }" type="text">
                                </li>
                                <li class="careerfy-column-12">
                                    <label>Percentage *</label>
                                    <input value="75%" onblur="if(this.value == '') { this.value ='75%'; }" onfocus="if(this.value =='75%') { this.value = ''; }" type="text">
                                </li>
                                <li class="careerfy-column-12">
                                    <input type="submit" value="Add Skills">
                                </li>
                            </ul>
                        </div>
                        <div class="careerfy-add-skills">
                            <ul class="careerfy-row">
                                <li class="careerfy-column-12">
                                    <div class="careerfy-add-skills-wrap">
                                        <span>74</span>
                                        <h2><a href="#">Social Media Marketing</a></h2>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-add-skills-wrap">
                                        <span>67</span>
                                        <h2><a href="#">Web Development</a></h2>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-add-skills-wrap">
                                        <span>25</span>
                                        <h2><a href="#">Search Engine Optimization</a></h2>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                                <li class="careerfy-column-12">
                                    <div class="careerfy-add-skills-wrap">
                                        <span>20</span>
                                        <h2><a href="#">User Experience Design</a></h2>
                                    </div>
                                    <div class="careerfy-resume-education-btn">
                                        <a href="#" class="careerfy-icon careerfy-edit"></a>
                                        <a href="#" class="careerfy-icon careerfy-rubbish"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import dummyPortFolioPic from '../../assets/employer-company-photo-1.png'
export default {
  name: "Resume",
  data() {
    return {};
  },
  methods: {
    handle_add_education_popup: function () {
      if (
        document.getElementById("education-add-popup").style.display != "block"
      ) {
        document.getElementById("education-add-popup").style.display = "block";
      } else {
        document.getElementById("education-add-popup").style.display = "none";
      }
    },
    handle_add_experience_popup: function () {
      if (
        document.getElementById("add_exp_popup").style.display != "block"
      ) {
        document.getElementById("add_exp_popup").style.display = "block";
      } else {
        document.getElementById("add_exp_popup").style.display = "none";
      }
    },
    handle_add_skill_popup: function () {
      if (
        document.getElementById("add_skill_popup").style.display != "block"
      ) {
        document.getElementById("add_skill_popup").style.display = "block";
      } else {
        document.getElementById("add_skill_popup").style.display = "none";
      }
    },
  },
};
</script>