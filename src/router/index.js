import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AdminView from "../views/AdminView.vue";
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import UpdateProductView from "../views/UpdateProductView.vue";
import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";
import WishList from "../views/WishListView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/updateP",
    name: "updateP",
    component: UpdateProductView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishList,
  },
];

// beforeEnter() {
//   if(!store.state.user) {
//     router.push({name: 'login'});
//   }
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
