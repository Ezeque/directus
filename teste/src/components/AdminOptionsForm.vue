<template>
    <div class="inputsPannel">
        <FormSelect label="Status" :options="['teste 1', 'teste 2', 'teste 3']" />
        <FormSelect label="Role" :options="['teste 1', 'teste 2', 'teste 3']" />
        <BlockInput label="Token"/>
        <FormSelect label="Provider"/>
        <FormInput label="Externa Identifier">
            <template #icon>
                <UserCircleIcon style="width: 30px; color:#a2b5cd"/>
            </template>
        </FormInput>
    </div>
</template>
<script setup>
import FormSelect from './widgets/FormSelect.vue';
import BlockInput from './widgets/BlockInput.vue';
import FormInput from './widgets/FormInput.vue';
import { UserCircleIcon } from '@heroicons/vue/20/solid';
</script>
<style scoped>
.inputsPannel{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>