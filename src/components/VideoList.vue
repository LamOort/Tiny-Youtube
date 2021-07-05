<template>
  <ul className="list-group col-md-4">
    <VideoItem
      className="list-group-item"
      v-for="video in videos || []"
      :key="video.etag"
      :video="video"
    >
      {{ video.snippet.title }}
    </VideoItem>
  </ul>
</template>

<script>
//Libs
import { computed } from "vue";
import { useStore } from "vuex";

//Components
import VideoItem from "./VideoItem.vue";

export default {
  name: "VideoList",

  components: {
    VideoItem,
  },

  setup() {
    const store = useStore();

    const videos = computed(() => store.state.video.videos);

    return {
      videos,
    };
  },
};
</script>

<style lang="scss" scoped></style>
