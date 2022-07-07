<template>
  <div class="c-card">
    <div v-if="$slots.image" class="c-card__image">
      <slot name="image" />
    </div>
    <div v-if="$slots.default" class="c-card__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.c-card {
  border-radius: $radius;
  box-shadow: $t-shadow-3;
  overflow: hidden;
  background: $t-surface-2;

  &__content {
    padding: space(3);
  }
}
</style>
