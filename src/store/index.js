import { createStore, createLogger } from "vuex";
import video from "./modules/video";

export default createStore({
  modules: {
    video,
  },
  plugins: [createLogger()],
});
