<template>
    <div id="pannel">
        <AvatarArea class="avatar-area"/>
    </div>
</template>
<script setup>
import AvatarArea from '@/components/widgets/AvatarArea.vue'
</script>

<style>
#pannel {
    display: grid;
    columns: 12;
    padding: 22px 20px;
    background-color: #f0f4f9;
    border-radius: 10px;
}
.avatar-area{
    grid-column-start: 1;
    grid-column-end: 7;
}
</style>