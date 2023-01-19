<template>
    <div class="container">
        <h4 class="label-text"> {{label}} </h4>
        <input class="input-field" :type="type" :value="info" :id="label"/>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
/* import { userDetails } from '@/services/UserServices'; */
    const info = ref('teste')
    defineProps({
        type : String,
        label : String,
    })
</script>
<style>
.label-text{
    color: #172940;
    font-size: 15px;
    margin: 0;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
}

.input-field{
    width: 380px;
    height: 60px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.input-text{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px;
    color: #4f5464;
    border-radius: 6px;
}
</style>