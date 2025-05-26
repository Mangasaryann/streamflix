<script setup>
import { ref, defineExpose, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useSearchMovie } from "@/composables/searchMovie";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import BrowseHeroContent from "@/components/hero/BrowseHeroContent.vue";
import VideoControls from "@/components/ui/VideoControls.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import NetflixBorder from "@/components/ui/NetflixBorder.vue";
import Footer from "@/components/footer/Footer.vue";
import movies from "@/api/db.json";
import MovieCard from "@/components/ui/MovieCard.vue";

const store = useStore();

const isVideoMuted = ref(true);

const video = ref(null);

const movieData = computed(() => store.state.theMovieDB.movieData);

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();

defineExpose({ video });

function toggleVideoSound(isMuted, isSoundOn) {
  isVideoMuted.value = isMuted;
  video.value.muted = isSoundOn;
}

function replayVideo() {
  if (video.value.ended) video.value.play();
}

onMounted(() => {
  store.dispatch("FETCH_MOVIES");
  store.dispatch("SET_USER_MOVIE_LIST_FROM_DB");
});
</script>

<template>
  <ResponsiveNav />
  <div :class="classes.browse">
    <div :class="classes.browse_img">
      <div class="container">
        <div :class="classes.browse_content">
          <h1>Your world of entertainment starts here.</h1>
          <p>
            Personalized recommendations, fresh premieres, and iconic hits — all
            in one place.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 :class="classes.movie_title">Popular</h2>
      <div :class="classes.browse_section">
        <MovieCard
          v-for="movie in movies.slice(0, 5)"
          v-show="movie.id < 6"
          :key="movie.id"
          :movies="movie"
        />
      </div>
      <h2 :class="classes.movie_title">Full Movies</h2>
      <div :class="classes.browse_section">
        <MovieCard
          v-for="movie in movies.slice(5, 10)"
          :key="movie.id"
          :movies="movie"
        />
      </div>
    </div>
  </div>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use "@/sass/views/browse";
</style>
