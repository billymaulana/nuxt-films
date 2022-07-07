<script lang="ts" setup>
defineProps({
  icon: { type: String, required: true },
});
</script>

<template>
  <span class="icon" :class="`icon-${icon}`"></span>
</template>
