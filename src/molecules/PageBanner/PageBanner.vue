<template>
  <div class="banner">
    <picture>
      <source media="(max-width: 767px)" :srcset="mobileSrc" />

      <source media="(min-width: 768px)" :srcset="desktopSrc" />

      <img
        class="banner__background"
        :src="desktopSrc"
        alt="Background"
        fetchpriority="high"
        width="1600"
        height="773"
      />
    </picture>
  </div>
</template>

<script setup>
defineProps(['mobileSrc', 'desktopSrc'])
</script>

<style>
@import './PageBanner.scss';
</style>
