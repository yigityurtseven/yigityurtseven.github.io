import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

createApp(App)
  .use(MotionPlugin, {
    directives: {
      "enter-fade": {
        initial: {
          opacity: 0,
          y: -100,
        },
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: "30",
            delay: 200,
          },
        },
      },
      "visible-fade": {
        initial: {
          opacity: 0,
        },
        visibleOnce: {
          opacity: 1,
        },
      },
    },
  })
  .mount("#app");
