<template>
  <div className="search-bar">
    <input type="text" v-model="term" @keyup.enter="onSearch(term)" />
    <button type="button" @click="onSearch(term)">Search</button>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "SearchBar",

  setup() {
    const store = useStore();

    const onSearch = (searchTerm) => store.dispatch("searchVideos", searchTerm);

    return {
      onSearch,
    };
  },
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  display: inline-flex;

  padding-bottom: 20px;
}

input {
  flex: 1 1 75%;
  margin-right: 30px;
}

button {
  flex: 1 1 25%;
}
</style>
