<script lang="ts" setup>
defineProps({
  /** The value from 0 to 10 */
  rating: { type: Number, required: true },
});
</script>

<template>
  <div class="c-rating" :class="{ 'c-rating--danger': rating < 5 }">
    {{ rating }}
  </div>
</template>

<style lang="scss">
.c-rating {
  color: $t-success;

  &--danger {
    color: $t-danger;
  }
}
</style>
