import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AddTodo from "./views/AddTodo.vue";
import EditTodo from "./views/EditTodo.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/create",
    component: AddTodo,
  },
  {
    path: "/todos/:id/edit",
    component: EditTodo,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {router};
