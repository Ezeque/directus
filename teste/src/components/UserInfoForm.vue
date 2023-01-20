<template>
    <div class="inputsPannel">
        <FormInput label="First Name" >
            <template #icon> <UserCircleIcon style="width:30px; color:#a2b5cd"/> </template>
        </FormInput>
        <FormInput label="Last Name" >
            <template #icon> <UserCircleIcon style="width:30px; color:#a2b5cd"/> </template>
        </FormInput>
        <FormInput label="Email" >
            <template #icon> <EnvelopeIcon style="width:30px; color:#a2b5cd"/> </template>
        </FormInput>
        <FormInput label="Password" type="password"> 
            <template #icon> <LockClosedIcon style="width:30px; color:#a2b5cd"/> </template>
        </FormInput>
        <BlockInput label="Avatar"/>
        <FormInput label="Location" />
        <FormInput label="Title" />
        <DescriptionArea/>
        <BlockInput label="Tags"/>
    </div>
</template>
<script setup>
import FormInput from './widgets/FormInput.vue';
import BlockInput from './widgets/BlockInput.vue';
import DescriptionArea from './widgets/DescriptionArea.vue'
import { UserCircleIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

</script>
<style>
.inputsPannel{
    display: flex;

}
</style>