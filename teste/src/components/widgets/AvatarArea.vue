<template>
    <div class="avatar-circle">
        <UserCircleIcon style="width: 50px; color: #a2b5cd" />
    </div>
</template>
<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/outline';
</script>
<style>
.avatar-circle {
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 144px;
    border-radius: 100%;
    border: solid 6px white;
    box-shadow: rgba(23, 41, 64, 0.2) 0px 0px 6px 0px
}
</style>