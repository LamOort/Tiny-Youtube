import videoAPI from "../../api/video";

/**
 * Initialize state related to Video module.
 */

const state = {
  videos: [],
  selectedVideo: null,
  responseStatus: "",
};

//getters
const getters = {};

//actions
const actions = {
  searchVideos({ commit, state }, searchTerm) {
    //Reset responseStatus
    commit("setResponseStatus", "");

    videoAPI
      .getVideosFromAPI(searchTerm)
      .then((res) => commit("setVideosToStore", res.data.items))
      .catch((err) => commit("setResponseStatus", err));
  },

  selectVideo({ commit, state }, videoId) {
    commit("setSelectedVideoById", videoId);
  },
};

//mutations
const mutations = {
  setVideosToStore(state, videos) {
    state.videos = videos.map((el) => ({ ...el }));
  },

  setSelectedVideoById(state, videoId) {
    state.selectedVideo = state.videos.find((el) => el.etag === videoId);
  },

  setResponseStatus(state, status) {
    state.responseStatus = status;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
