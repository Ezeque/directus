<template>
    <button :disabled="!formFilled" type="button" class="button"><CheckIcon/></button>
</template>
<script setup>
import {CheckIcon} from "@heroicons/vue/20/solid"
import {formFilled} from "@/services/FormServices"
</script>
<style>
</style>