<template>
    <div id="container">
        <div style="display:flex">
            <BackButton />
            <div id="page-name">
                <p class="subtitle">{{ section }}</p>
                <h1 class="title">{{ name }}</h1>
            </div>
        </div>
        <div>
            <DeleteButton/>
            <ArchiveButton/>
            <ConfirmButton/>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import BackButton from "./widgets/BackButton.vue"
import DeleteButton from './widgets/DeleteButton.vue';
import ArchiveButton from './widgets/ArchiveButton.vue';
import ConfirmButton from './widgets/ConfirmButton.vue';
defineProps({
    name: String,
    section: String
})
</script>
<style>
#container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 78px;
}

#page-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.title {
    font-size: 24px;
    line-height: 34px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #172940;
    margin: 0;
}

.subtitle {
    color: #a2b5cd;
    font-size: 12px;
    margin: 0;
}
</style>