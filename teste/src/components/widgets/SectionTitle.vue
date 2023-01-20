<template>
    <div class="section-title">
        <div style="display: flex">
            <slot name="icon"></slot>
            <h1 class="title">{{ name }}</h1>
        </div>
        <hr style="color:#4f5464">
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    name: String
})
</script>
<style>
    .section-title{
        margin-bottom: 45px;
    }
</style>