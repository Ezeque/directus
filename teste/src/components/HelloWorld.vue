<template>
  <div id="userPage">
    <AppSidebar/>
    <div id="interface">
      <PageTitle name="Admin User" section="User Directory"></PageTitle>
      <div style="width: 83%;">
        <UserInfo />
        <UserInfoForm id="form-info" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from './PageTitle.vue'
import UserInfo from './UserInfo.vue'
import UserInfoForm from './UserInfoForm.vue';
import AppSidebar from './AppSidebar.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userPage{
  display: flex;
}

#interface{
  width: 83vw;
  padding-top: 35px;
}
#form-info {
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
