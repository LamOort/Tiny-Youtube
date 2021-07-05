<template>
  <div v-if="!video" class="col-md-8"></div>
  <div v-if="video" class="col-md-8">
    <div className="ratio ratio-16x9">
      <iframe :src="videoUrl" allowfullscreen />
    </div>
    <div className="details">
      <h4>
        {{ video.snippet.title }}
      </h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
//Libs
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "VideoDetail",

  setup() {
    const store = useStore();

    const video = computed(() => store.state.video.selectedVideo);

    const videoUrl = computed(() => {
      const { videoId } = video.value.id;
      return `https://www.youtube.com/embed/${videoId}`;
    });

    return {
      video,
      videoUrl,
    };
  },
};
</script>

<style scoped></style>
