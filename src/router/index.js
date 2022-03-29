import Vue from "vue";
import VueRouter from "vue-router";
import MyLogin from "../views/MyLogin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/myLogin",
  },
  {
    path: "/myLogin",
    name: "myLogin",
    component: MyLogin,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/MyHome.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name == "myLogin") {
    next();
  } else {
    let cont = localStorage.getItem("token");
    if (cont) {
      next();
    } else {
      next("/myLogin");
    }
  }
});
export default router;
