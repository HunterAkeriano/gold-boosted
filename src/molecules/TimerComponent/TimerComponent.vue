<template>
  <div id="t">{{ timeStr }}</div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const props = defineProps({
  endTime: {
    type: String,
    required: true
  }
})

const timeStr = ref('')
const endTime = ref(new Date(props.endTime.replace('T', ' ').replace('Z', '')))

function updateTime() {
  if (endTime.value <= new Date()) {
    timeStr.value = 'Час вийшов'
    return
  }

  const timeDiff = Math.floor((endTime.value - new Date()) / 1000)
  const tSec = String(timeDiff % 60).padStart(2, '0')
  const tMin = String(Math.floor(timeDiff / 60) % 60).padStart(2, '0')
  const tHour = String(Math.floor(timeDiff / (60 * 60)) % 24).padStart(2, '0')

  const timeStrValue = `${tHour}:${tMin}:${tSec}`
  timeStr.value = timeStrValue
}

onMounted(updateTime)

watchEffect(() => {
  setInterval(updateTime, 1000)
})
</script>
