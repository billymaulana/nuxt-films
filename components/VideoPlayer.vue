<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  video: { type: Object as PropType<ApiVideo>, required: true },
  autoplay: { type: Boolean, default: false },
});

const videoIframeSrc = computed(() => {
  switch (props.video.site) {
    case "YouTube":
      return `https://www.youtube.com/embed/${props.video.key}${
        props.autoplay ? "?autoplay=1" : ""
      }`;
    case "Vimeo":
      return `https://player.vimeo.com/video/${props.video.key}${
        props.autoplay ? "?autoplay=1" : ""
      }`;
    default:
      return "";
  }
});
</script>

<template>
  <iframe
    v-if="videoIframeSrc"
    class="c-video-player"
    :src="videoIframeSrc"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
    width="960"
    height="540"
  />
</template>

<style lang="scss">
.c-video-player {
  max-width: 100%;

  @supports (aspect-ratio: 1 / 1) {
    aspect-ratio: 16/9;
    height: auto;
  }
}
</style>
