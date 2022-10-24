import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Clock from "../views/Clock.vue";
import Pomodoro from "../views/Pomodoro.vue";
import Calendar from "../views/Calendar.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },
  { path: "/", component: Home },
  { path: "/clock", component: Clock },
  { path: "/pomodoro", component: Pomodoro },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
