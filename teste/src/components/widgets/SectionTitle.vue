<template>
    <div class="section-title">
        <div style="display: flex" :class="textColor(color)">
            <slot name="icon"></slot>
            <h1 class="title" :class="textColor(color)">{{ name }}</h1>
        </div>
        <hr style="color:#4f5464">
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    name: String,
    color: String
})

const textColor = (color)=>{
    if(color == 'red'){
        return 'red-text'
    }
}
</script>
<style>
    .section-title{
        margin-bottom: 45px;
    }
    .red-text{
        color: #e35169
    }
</style>