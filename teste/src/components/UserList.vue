<template>
    <div class="interface">
        <AppSidebar />
        <div style="width: 83vw;">
            <div id="page-name">
                <h1 class="title">User Directory</h1>
            </div>

            <!-- Listagem de usuários -->
            <div style="display:flex; justify-content: space-evenly; margin-bottom:20px;">
                <div v-for="user in users" :key="user.id" class="user-list" @click="userClickHandler(user)">
                    <UserBlock :user="user" />
                </div>
            </div>
                <h5 class="" @click="tab='user'">Create User</h5>
            </div>
    </div>
</template>
<script setup>
import { getUsers } from '@/services/UserServices';
import { onMounted, ref } from 'vue';
import AppSidebar from './AppSidebar.vue';
import { userClickHandler } from '@/services/TabsService'
import UserBlock from './widgets/UserBlock.vue';
import { tab } from '@/services/TabsService';
const users = ref([])
onMounted(async () => {
    users.value = await getUsers()
    users.value = users.value.data.data
})
</script>
<style scoped>
.user-list{
    flex-wrap: wrap;
}

.interface {
    display: flex;
    height: 100vh;
}

#page-name {
    margin-bottom: 100px;
}
</style>