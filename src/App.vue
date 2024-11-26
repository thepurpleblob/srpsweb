<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import TheHeader from '@/components/TheHeader.vue';
    import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
    <TheHeader></TheHeader>
    <div class="">
        <router-view></router-view>
    </div>
    <TheFooter></TheFooter>
</template>

<style scoped>

</style>
