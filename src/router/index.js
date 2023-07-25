import HomePage from "@/pages/home-page.vue";
import CallbackPage from "@/pages/callback-page.vue";
import Vue from "vue";
import Router from "vue-router";
import { authenticationGuard } from "../authentication-guard";

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
      beforeEnter: authenticationGuard,
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
      beforeEnter: authenticationGuard,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
      beforeEnter: authenticationGuard,
    },
    {
      path: "/callback",
      name: "callback",
      component: CallbackPage,
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFoundPage,
    },
  ],
});

export default router;
