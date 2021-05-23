import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./App/Modules/Home";
const Product = () => import("./App/Modules/Product");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
