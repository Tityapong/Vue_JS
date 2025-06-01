<template>
  <div id="app">
    <!-- Only show Navbar if NOT on "/dashboard" or its sub-routes -->
    <Navbar v-if="showNavFooter" />

    <!-- The router-matched component will go here -->
    <router-view />

    <!-- Only show Footer if NOT on "/dashboard" or its sub-routes -->
    <Footer v-if="showNavFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

// Grab the current route object
const route = useRoute();

// Only show navbar + footer when the path does NOT start with "/dashboard"
const showNavFooter = computed(() => !route.path.startsWith('/dashboard'));
</script>

<style>
/* any global CSS… */
</style>