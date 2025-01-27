<template>
  <a class="link" :href="to" v-if="href" target="_blank">
    <slot class="link__icon-block"></slot>
    {{ text }}
  </a>

  <router-link class="link" :to="to" v-else>
    <slot class="link__icon-block"></slot>
    {{ text }}
  </router-link>
</template>

<script setup>
defineProps({
  href: Boolean,
  text: String,
  to: [String, Object]
})
</script>

<style>
@import './LinkComponent.scss';
</style>
