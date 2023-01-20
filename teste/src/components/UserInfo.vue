<template>
    <div id="pannel">
        <AvatarArea class="avatar-area" />
        <div style="display:flex; flex-direction: column">
            <h3 class="user-name">{{ `${userDetails.firstName} ${userDetails.lastName}` }}</h3>
            <h4 class="user-email">{{ `${userDetails.email}` }}</h4>
        </div>
    </div>
</template>
<script setup>
import { userDetails } from '@/services/UserServices'
import AvatarArea from '@/components/widgets/AvatarArea.vue'
</script>

<style>
#pannel {
    display: flex;
    align-items: center;
    padding: 22px 20px;
    background-color: #f0f4f9;
    border-radius: 10px;
}

.user-name {
    color: #172940;
    margin: 0;
    text-align: left;
}

.user-email{
    margin: 0;
    color: #a2b5cd;
    text-align: left;
}
</style>