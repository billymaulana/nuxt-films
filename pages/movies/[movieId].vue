<script lang="ts" setup>
// MODAL
import { AppModal } from "vue3-a11y-modal";
defineComponent(AppModal);
const videoModalWindow = ref<null | { open: () => void; close: () => void }>(
  null
);
const videoSelected = ref<null | ApiVideo>(null);
const showVideo = (video: ApiVideo) => {
  if (videoModalWindow.value == null) {
    throw new Error("videoModalWindow is not defined");
  }
  videoSelected.value = video;
  videoModalWindow.value.open();
};

const route = useRoute();
const movieId = Number(route.params.movieId);

const { data: movie } = await useFetch<ApiMovieDetail>(
  `/api/movies/${movieId}`
);

const mainVideos = computed(() => {
  const results = movie.value.videos ? movie.value.videos.results : [];
  return results.slice(0, 3);
});

const statusText = computed(() => {
  switch (movie.value.status) {
    case "Rumored":
      return "Rumored";
    case "Planned":
      return "Planned";
    case "In Production":
      return "In Production";
    case "Post Production":
      return "Post-production";
    // not display released status
    // case "Released":
    //   return "Sorti";
    case "Canceled":
      return "Canceled";
    default:
      return "";
  }
});
</script>

<template>
  <NuxtLayout class="p-movie" name="default">
    <template #sidebar>
      <img
        class=""
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        :alt="movie.title"
        loading="lazy"
        width="500"
        height="750"
      />
      <div class="py-4 px-4">
        <h1 class="h3 mb-4">{{ movie.title }}</h1>
        <p class="p-movie__sidebar-sub-title">Tanggal Rilis</p>
        <p>
          {{
            new Date(movie.release_date).toLocaleString("id-ID", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>

        <p class="p-movie__sidebar-sub-title">Durasi</p>
        <p>{{ movie.runtime }} minutes</p>

        <p class="p-movie__sidebar-sub-title">Judul Asli</p>
        <p>{{ movie.original_title }}</p>

        <template v-if="statusText">
          <p class="p-movie__sidebar-sub-title">Status</p>
          <p>{{ statusText }}</p>
        </template>
      </div>
    </template>

    <div class="p-movie__content">
      <div class="p-movie__top">
        <img
          class="p-movie__main-image"
          :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          :alt="movie.title"
          loading="lazy"
          width="1920"
          height="1080"
        />

        <div v-if="mainVideos.length" class="p-movie__medias">
          <h3 class="h3 mb-3">Médias</h3>
          <div class="p-movie__video-list">
            <VideoPreviewCard
              v-for="video in mainVideos"
              :key="video.id"
              class="p-movie__video"
              tag="button"
              type="button"
              :video="video"
              @click="showVideo(video)"
            />
          </div>

          <AppModal
            :title="videoSelected ? videoSelected.name : null"
            ref="videoModalWindow"
            @close="videoSelected = null"
          >
            <VideoPlayer v-if="videoSelected" :video="videoSelected" autoplay />
          </AppModal>
        </div>
      </div>

      <div class="p-movie__details">
        <div class="px-4 py-4">
          <h3 class="h3 mb-3">TODO - rating</h3>
          <BaseRating class="p-movie__review" :rating="movie.vote_average" />
        </div>

        <div class="px-4 py-4">
          <h3 class="h3 mb-3">Synopsis</h3>
          <p class="p-movie__description">{{ movie.overview }}</p>
        </div>
      </div>
    </div>

    <!-- TODO: remove -->
    <details class="px-4">
      <summary class="has-text-warning">Detail of API data</summary>
      <pre :style="{ width: 'calc(100vw - 500px)', overflow: 'auto' }">{{
        movie
      }}</pre>
    </details>
  </NuxtLayout>
</template>

<style lang="scss">
.p-movie {
  &__sidebar-sub-title {
    margin: space(8) 0 space(2);
    text-transform: uppercase;
    font-size: $font-size-base;
    line-height: $header-line-height;
    font-family: $family-heading;
    font-weight: 400;
  }

  &__top {
    position: relative;
  }

  &__main-image {
    object-fit: cover;
    height: 80vh;
  }

  &__medias {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10rem space(4) space(3);
    color: $t-text-white;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &__video-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: space(4);
    justify-content: center;
  }
}
</style>
