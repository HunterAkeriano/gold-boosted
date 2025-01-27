<!--Todo-->
<template>
  <picture>
    <source :srcset="webpSource" type="image/webp" />

    <img :src="pngSource" :alt="imgAlt" />
  </picture>
</template>

<script setup>
defineProps({
  webpSource: URL,
  pngSource: URL,
  imgAlt: String
})
</script>
