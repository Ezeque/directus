<template>
    <form class="inputsPannel">
        <FormInput label="First Name" :table_field="userData.firstName" @change="checkFilled(userData)">
            <template #icon>
                <UserCircleIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>
        <FormInput label="Last Name" :table_field="userData.lastName" @change="checkFilled(userData)">
            <template #icon>
                <UserCircleIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>
        <FormInput label="Email" :table_field="userData.email" @change="checkFilled(userData)">
            <template #icon>
                <EnvelopeIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>
        <FormInput label="Password" type="password" :table_field="userData.password" @change="checkFilled(userData)">
            <template #icon>
                <LockClosedIcon style="width:30px; color:#a2b5cd" />
            </template>
        </FormInput>
        <BlockInput label="Avatar" v-model="userData.avatar" >
            <template #icon> </template>
        </BlockInput>
        <FormInput label="Location" v-model="userData.location" :table_field="userData.location"/>
        <FormInput label="Title" v-model="userData.title" :table_field="userData.title"/>
        <DescriptionArea />
        <BlockInput label="Tags" v-model="userData.tags" :table_field="userData.tags"/>
    </form>
</template>
<script>
import {toRefs} from 'vue'
import FormInput from './widgets/FormInput.vue';
import BlockInput from './widgets/BlockInput.vue';
import DescriptionArea from './widgets/DescriptionArea.vue'
import { UserCircleIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import { userDetails } from '@/services/UserServices';
import {checkFilled} from '@/services/FormServices'

export default {
    setup() {
        const userData = toRefs(userDetails)
        return{
            checkFilled,
            userData
        }
    },

    components:{
        FormInput,
        BlockInput,
        DescriptionArea,
        UserCircleIcon,
        EnvelopeIcon,
        LockClosedIcon,
    }
}

</script>
<style>
.inputsPannel {
    display: flex;

}
</style>