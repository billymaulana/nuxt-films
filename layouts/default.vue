<template>
  <div class="l-default">
    <div class="l-default__nav">
      <NuxtLink to="/" class="l-default__logo">
        <img src="~assets/images/logo.svg" alt="" width="100" height="50" />
      </NuxtLink>

      <TheMainNav class="l-default__nav-list" />
    </div>
    <div class="l-default__top">
      <input type="text" />
    </div>

    <div v-if="$slots.sidebar" class="l-default__sidebar">
      <slot name="sidebar" />
    </div>

    <div class="l-default__main">
      <div class="l-default__content">
        <slot />
      </div>

      <footer class="l-default__footer">
        <a>Billy Maulana</a>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.l-default {
  $c-top-height: 90px;
  $c-sidebar-shadow: var(--inner-sidebar-shadow), var(--sidebar-shadow);

  display: grid;
  grid-template-rows: $c-top-height 1fr;
  grid-template-columns: 160px 300px 1fr;
  grid-template-areas: "nav top top" "nav sidebar main";
  min-height: 100vh;
  width: 100%;

  &__nav {
    position: sticky;
    top: 0;
    z-index: 5;
    grid-area: nav;
    box-shadow: $c-sidebar-shadow;
    height: 100vh;
    background: $t-surface-1;
    max-height: -webkit-fill-available;
  }

  &__top {
    position: sticky;
    top: 0;
    z-index: 5;
    grid-area: top;
    box-shadow: $t-shadow-3;
    background: $t-surface-1;
    border-bottom: solid 1px $t-border;
  }

  &__sidebar {
    grid-area: sidebar;
    position: relative;
    background: $t-surface-2;
    box-shadow: $c-sidebar-shadow;
  }

  &__main {
    grid-area: main;
    grid-column: 2 / -1;
    display: flex;
    flex-direction: column;
  }

  &__sidebar + &__main {
    grid-area: main;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: space(2);
    height: $c-top-height;
    border-bottom: solid 1px $t-border;
  }

  &__nav-link {
    display: block;
    text-align: center;
    margin: 0;
    padding: space(2);
    border-bottom: solid 1px $t-border;
  }

  &__content {
    flex-grow: 1;
  }

  &__footer {
    margin-top: space(3);
    padding: space(3) space(4);
    background: $t-surface-2;
    text-align: center;
    color: $t-text-light;
    border-top: solid 1px $t-border;
  }
}
</style>
