<template>
    <div class="careerfy-column-9">
        <div class="careerfy-typo-wrap">
            <form class="careerfy-employer-dasboard">
                <div class="careerfy-employer-box-section">
                    <div class="careerfy-profile-title">
                        <h2>Change Password</h2>
                    </div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <li class="careerfy-column-12">
                            <label>Old Password *</label>
                            <input value="Old Password" onblur="if(this.value == '') { this.value ='Old Password'; }" onfocus="if(this.value =='Old Password') { this.value = ''; }" type="password">
                        </li>
                        <li class="careerfy-column-6">
                            <label>New Password *</label>
                            <input value="Old Password" onblur="if(this.value == '') { this.value ='Old Password'; }" onfocus="if(this.value =='Old Password') { this.value = ''; }" type="password">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Confirm New Password  *</label>
                            <input value="Old Password" onblur="if(this.value == '') { this.value ='Old Password'; }" onfocus="if(this.value =='Old Password') { this.value = ''; }" type="password">
                        </li>
                    </ul>
                    <div class="careerfy-profile-title">
                        <h2>Secuirty Questions</h2>
                    </div>
                    <ul class="careerfy-row careerfy-employer-profile-form">
                        <li class="careerfy-column-6">
                            <label>Question No1 :</label>
                            <div class="careerfy-profile-select">
                                <select>
                                    <option>What is your Mother Name?</option>
                                    <option>What is your Mother Name?</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Answer :</label>
                            <input value="Katie Monree" onblur="if(this.value == '') { this.value ='Katie Monree'; }" onfocus="if(this.value =='Katie Monree') { this.value = ''; }" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Question No2 :</label>
                            <div class="careerfy-profile-select">
                                <select>
                                    <option>Your place of Birth?</option>
                                    <option>Your place of Birth?</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Answer :</label>
                            <input value="London" onblur="if(this.value == '') { this.value ='London'; }" onfocus="if(this.value =='London') { this.value = ''; }" type="text">
                        </li>
                        <li class="careerfy-column-6">
                            <label>Question No3 :</label>
                            <div class="careerfy-profile-select">
                                <select>
                                    <option>Your favorite Teacher Name?</option>
                                    <option>Your favorite Teacher Name?</option>
                                </select>
                            </div>
                        </li>
                        <li class="careerfy-column-6">
                            <label>Answer :</label>
                            <input value="Mateusz Dembek" onblur="if(this.value == '') { this.value ='Mateusz Dembek'; }" onfocus="if(this.value =='Mateusz Dembek') { this.value = ''; }" type="text">
                        </li>
                    </ul>
                </div>
                <input type="button" class="careerfy-employer-profile-submit" value="Update Password">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:"ChangePassword",
    data(){
        return{

        }
    }
}
</script>