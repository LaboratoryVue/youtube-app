import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "main" },
      component: () => import("./views/Home")
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("./views/Login")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "empty" },
      component: () => import("./views/Register")
    },
    {
      path: "/categories",
      name: "categories",
      meta: { layout: "main" },
      component: () => import("./views/Categories")
    },
    {
      path: "/profile",
      name: "profile",
      meta: { layout: "main" },
      component: () => import("./views/Profile")
    },
    {
      path: "/record",
      name: "record",
      meta: { layout: "main" },
      component: () => import("./views/Record")
    },
    {
      path: "/detail-record",
      name: "detail-record",
      meta: { layout: "main" },
      component: () => import("./views/Detail-Record")
    },
    {
      path: "/history",
      name: "history",
      meta: { layout: "main" },
      component: () => import("./views/History")
    },
    {
      path: "/planning",
      name: "planning",
      meta: { layout: "main" },
      component: () => import("./views/Planning")
    }
  ]
});
