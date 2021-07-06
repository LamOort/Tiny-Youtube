<template>
  <div className="app-wrapper">
    <div className="header">
      <SearchBar />
    </div>
    <div className="row">
      <VideoDetail />
      <VideoList />
    </div>
  </div>
</template>

<script>
//Libs

//Components
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";

export default {
  name: "App",

  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

head {
  display: none;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: "Montserrat", sans-serif;
}

/* CSS Reset */
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
form,
label,
table,
tbody,
thead,
tr,
th,
td,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none !important;
}

a,
a:hover,
a:focus {
  cursor: pointer;
  text-decoration: none;

  color: inherit;
}

#app {
  width: 100%;
}

.app-wrapper {
  padding: 0 80px;
  max-width: 1760px;
  margin: 0 auto;
}

.header {
  padding-top: 50px;
}
</style>
