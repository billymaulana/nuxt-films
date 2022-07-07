<script lang="ts" setup>
const pages = [
  {
    path: "/",
    icon: "Movie-Ticket",
    title: "Movie",
  },
  {
    path: "/series",
    icon: "Old-TV",
    title: "Series TV",
  },
  {
    path: "/movies",
    icon: "Reel",
    title: "Films",
  },
  {
    path: "/playlists",
    icon: "Movie",
    title: "Playlists",
  },
  {
    path: "/coming-soon",
    icon: "Clock",
    title: "Coming Soon",
  },
];
</script>

<template>
  <nav class="c-main-nav">
    <NuxtLink v-for="page in pages" :key="page.path" :to="page.path">
      <BaseIcon :icon="page.icon" />
      <span>{{ page.title }}</span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
.c-main-nav {
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: space(4);
    text-decoration: none;
    color: $t-text;
    border-bottom: solid 1px $t-border;
    transition: color $speed-slow ease-out;

    .icon {
      display: block;
      margin-bottom: space(1);
      font-size: 2.5rem;
    }

    &:hover,
    &:focus,
    &.router-link-active {
      color: $t-primary;
    }
  }
}
</style>
