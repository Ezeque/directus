<template>
    <div class="container">
        <slot name="icon"></slot>
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
<style scoped>
.label-text{
    color: #172940;
    margin: 0;
    margin-bottom:10px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:100%;
}

.input-field{
    width: 100%;
    height: 60px;
}

.input-field :focus{
    outline: none;
}

.input-text{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px;
    color: #4f5464;
    border-radius: 6px;
}
</style>