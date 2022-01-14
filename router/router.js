import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/favorites", component: Favorites },
    { path: "/watch", component: Favorites },
  ],
});

export default router;
