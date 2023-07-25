import HomePage from "@/pages/home-page.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const NotFoundPage = () => import("@/pages/not-found-page.vue");
const ProfilePage = () => import("@/pages/profile-page.vue");
const PublicPage = () => import("@/pages/public-page.vue");
const ProtectedPage = () => import("@/pages/protected-page.vue");
const AdminPage = () => import("@/pages/admin-page.vue");

const router = new Router({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/public",
      name: "public",
      component: PublicPage,
    },
    {
      path: "/protected",
      name: "protected",
      component: ProtectedPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFoundPage,
    },
  ],
});

export default router;
