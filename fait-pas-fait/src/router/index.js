import { createRouter, createWebHistory } from "vue-router";
import FaitPasFait from "../views/fait-pas-fait.vue";
import Timeline from "../views/timeline.vue";
import Home from "../views/home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
          },
      {
        path: "/bilan-de-nos-actions",
        name: "fait-pas-fait",
        component: FaitPasFait,
      },
      {
        path: "/timeline",
        name: "timeline",
        component: Timeline,
      }
    ],
    navigationFallback: {
      rewrite: "/index.html",
      exclude: ["/images/*.{png,jpg,gif}", "/css/*"],
    },
  });
  
  export default router;
  