import Vue from "vue";
import Router from "vue-router";
import Home from "@/containers/Home";
import Products from "@/containers/Products";
import ProductDetails from "@/containers/ProductDetails";
import Contact from "@/containers/Contact";
import About from "@/containers/About";
import Team from "@/containers/Team";
import Reference from "@/containers/Reference";
import Cart from "@/containers/Cart";
import Layout from "@/containers/Layout";
//Dashboard
import Admin from "@/containers/dashboard/Admin";
import Login from "@/containers/dashboard/Login";
import Dashboard from "@/containers/dashboard/Dashboard";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/admin",
      component: Admin,
      redirect: "/admin/dashboard",
      children: [
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        }
      ]
    },
    {
      path: "/",
      redirect: "home",
      component: Layout,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "products",
          name: "Products",
          component: Products
        },
        {
          path: "product/:name",
          name: "ProductDetails",
          component: ProductDetails
        },
        {
          path: "about",
          name: "About",
          component: About
        },
        {
          path: "contact",
          name: "Contact",
          component: Contact
        },
        {
          path: "team",
          name: "Team",
          component: Team
        },
        {
          path: "reference",
          name: "Reference",
          component: Reference
        },
        {
          path: "cart",
          name: "Cart",
          component: Cart
        }
      ]
    }
  ]
});
