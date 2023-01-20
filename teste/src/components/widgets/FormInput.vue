<template>
    <div class="container">
        <h4 class="label-text"> {{ label }} </h4>
        <div class="input-field">
            <input :type="type" :id="label" v-model="inputValue" />
            <slot name="icon" class="input-icon"> </slot>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
const props = defineProps({
    type: String,
    label: String,
    table_field: Object
})
const inputValue = ref(props.table_field)
</script>
<style>
.label-text {
    color: #172940;
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
}

.container {
    display: flex;
    width: 47%;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
}

.input-field {
    width: 100%;
    height: 60px;
    border: 2px solid #d3dae4;
    border-radius: 6px;
    padding-left: 16px;
    display: flex;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.input-field input {
    height: 100%;
    width: 90%;
    border: none;
    padding: 0;
    margin: 0;
}

.input-field input:focus {
    outline: none;
}

.input-text {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 15px;
    color: #4f5464;
    border-radius: 6px;
}
</style>