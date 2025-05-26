<script setup>
import { useModal } from "@/composables/modal";
import { useMovieTrailer } from "@/composables/movieTrailer";
import { useProfileMovieList } from "@/composables/profileMovieList";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import MovieTrailerOverlay from "@/components/ui/movie-modal/ModalTrailerOverlay.vue";
import Backdrop from "@/components/ui/movie-modal/Backdrop.vue";

const props = defineProps({
  movies: Object,
});

const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

const { openMovieTrailerModal, closeMovieTrailerModal, isBackdropOpen } =
  useMovieTrailer();

const { addToProfileList, deleteFromProfileList, isMovieInUserList } =
  useProfileMovieList();
</script>

<template>
  <div class="move_card" :key="movies.id">
    <div :class="classes.movieCardOverlay"></div>
    <img
      class="move_img"
      styles="{{height:100%}}"
      :src="movies.img"
      alt="movie
    poster"
    />
  </div>
</template>

<style lang="scss" module="classes">
@use "@/sass/components/ui/movie-card";
</style>
