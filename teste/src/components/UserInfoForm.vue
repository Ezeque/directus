<template>
    <div class="inputsPannel">
        <FormInput label="First Name" />
        <FormInput label="Last Name" />
        <FormInput label="Email" />
        <FormInput label="Password" />
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
</script>
<style>
.inputsPannel{
    display: flex;

}
</style>