<template>
  <div id="userPage">
    <AppSidebar/>
    <div id="interface">
      <PageTitle name="Admin User" section="User Directory"></PageTitle>
      <div style="width: 83%;">
        <UserInfo />
        <UserInfoForm id="form-info" />
        <SectionTitle style="text-align:left" name="User Preferences">
          <template #icon> <UserIcon style="width:30px"/> </template>
        </SectionTitle>
        <UserPreferencesForm/>
        <SectionTitle style="text-align:left" name="Admin Options" color="red">
          <template #icon> <ShieldCheckIcon style="width:30px"/> </template>
        </SectionTitle>
        <AdminOptionsForm/>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from './PageTitle.vue'
import UserInfo from './UserInfo.vue'
import UserInfoForm from './UserInfoForm.vue';
import AppSidebar from './AppSidebar.vue'
import SectionTitle from './widgets/SectionTitle.vue';
import { UserIcon, ShieldCheckIcon } from '@heroicons/vue/20/solid';
import UserPreferencesForm from './UserPreferencesForm.vue'
import AdminOptionsForm from './AdminOptionsForm.vue';
</script>



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
