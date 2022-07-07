<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  video: { type: Object as PropType<ApiVideo>, required: true },
  tag: { type: String, default: "div" },
});

const previewImageUrl = computed(() => {
  switch (props.video.site) {
    case "YouTube":
      return `https://img.youtube.com/vi/${props.video.key}/hqdefault.jpg`;
    case "Vimeo":
      return `https://i.vimeocdn.com/video/${props.video.key}_640.jpg`;
    default:
      return "";
  }
});

const typeText = computed(() => {
  switch (props.video.type) {
    case "Trailer":
      return "Bande-annonce";
    case "Teaser":
      return "Pré-vue";
    case "Clip":
      return "Clip";
    default:
      return "";
  }
});
</script>

<template>
  <component :is="tag" class="c-video-preview-card">
    <img
      v-if="previewImageUrl"
      class="c-video-preview-card__image"
      :src="previewImageUrl"
      :alt="video.name"
      loading="lazy"
      width="480"
      height="360"
    />

    <p class="c-video-preview-card__type">{{ typeText }}</p>
  </component>
</template>

<style lang="scss">
.c-video-preview-card {
  position: relative;
  border-radius: $radius;
  overflow: hidden;
  box-shadow: $t-shadow-3;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    height: 4rem;
  }

  &__image {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  &__type {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: space(2);
    color: $t-text-white;
    text-align: center;
  }
}
</style>
