<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <div class="careerfy-employer-box-section">
                <div class="careerfy-profile-title">
                    <h2>Job Alerts</h2>
                    <form class="careerfy-employer-search">
                        <input value="Search orders" onblur="if(this.value == '') { this.value ='Search orders'; }" onfocus="if(this.value =='Search orders') { this.value = ''; }" type="text">
                        <input value="" type="submit">
                        <i class="careerfy-icon careerfy-search"></i>
                    </form>
                </div>
                <div class="careerfy-job-alerts">
                    <div class="careerfy-job-alerts-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Criterias</th>
                                    <th>Created Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>Finance Accountant</span>
                                    </td>
                                    <td>Accounting Assistant, Senior, San Francisco....(10)</td>
                                    <td>September 28, 2017</td>
                                    <td>
                                        <a href="#" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-rubbish"></i></a>
                                        <a href="#" class="careerfy-savedjobs-links"><i class="careerfy-icon careerfy-view"></i></a>
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
export default {
    name:"JobAlerts",
    data(){
        return{
            
        }
    }
}
</script>