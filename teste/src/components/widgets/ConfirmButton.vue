<template>
    <button :disabled="!formFilled" type="button" class="button" @click="createUser(userDetails)"><CheckIcon/></button>
</template>
<script setup>
import {CheckIcon} from "@heroicons/vue/20/solid"
import {formFilled} from "@/services/FormServices"
import { createUser, userDetails } from "@/services/UserServices";
</script>
<style>
</style>