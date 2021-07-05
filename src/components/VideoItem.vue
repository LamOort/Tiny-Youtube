<template>
  <li className="list-group-item media" @click="onVideoSelect(video.etag)">
    <img :src="thumbnailUrl" className="mr-3" />
    <div className="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "VideoItem",
  props: {
    video: {},
  },
  setup(props) {
    const store = useStore();
    const thumbnailUrl = computed(
      () => props.video.snippet.thumbnails.default.url
    );

    const onVideoSelect = (videoId) => store.dispatch("selectVideo", videoId);

    return {
      thumbnailUrl,
      onVideoSelect,
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;

  cursor: pointer;
}

li:hover {
  background: #eee;
}
</style>
