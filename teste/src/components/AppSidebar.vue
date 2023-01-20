<template>
    <div class="app-sidebar">
        <div id="directus-section">
            <p>Directus</p>
        </div>
        <div class="menu-item" @click="tab = 'all_users'">
            <FolderIcon style="color:#6644ff; width: 20px; padding: 10px;"/>
            All Users
        </div>
    </div>
</template>
<script setup>
import { FolderIcon } from '@heroicons/vue/24/outline';
import { tab } from '@/services/TabsService';

</script>
<style>

.menu-item{
    padding: 10px;
    color: #172940;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

#directus-section{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#directus-section{
    background-color: #e4eaf1;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #172940
}
.app-sidebar{
    width: 17vw;
    background-color: #f0f4f9;
    margin:0 32px 0 0;
}
</style>