<template>
  <div>
    <UserForm v-if="tab == 'user'" />
    <UserList v-if="tab == 'all_users'" />
  </div>
</template>

<script setup>
import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'
import { tab } from '@/services/TabsService'

</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-right: 16px;
  border: none;
  background-color: #e3eaf1;
  transition: all ease 125ms;
}

.button:hover {
  background-color: #f0f4f9;
}
</style>
