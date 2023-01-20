<template>
    <div style="width:160px">
        <div class="avatar-block">
        </div>
        <h4>{{`${user.firstName} ${user.lastName}`}}</h4>
    </div>    
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    user: Object
})
</script>
<style>
.avatar-block {
    width: 160px;
    height: 160px;
    background-color: #f0f4f9;
    margin-bottom : 10px;
}
</style>
