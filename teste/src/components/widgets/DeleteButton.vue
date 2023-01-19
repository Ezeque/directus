<template>
    <button type="button" class="button delete"><TrashIcon style="font-size:5px"/></button>
</template>
<script setup>
import {TrashIcon} from "@heroicons/vue/24/outline"
</script>
<style lang="scss">

    .delete:hover{
        background-color: #e35169 !important;
        color: white;
    }
</style>