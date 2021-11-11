import { IRouteSidebar } from "../interfaces/IRoutes";

export const routes: IRouteSidebar[] = [
  {
    name: "Dasboard",
    path: "/",
    icon: "home",
    component: "Dasboard",
  },
  {
    name: "Ibadah",
    path: "/ibadah",
    icon: "ibadah",
    component: "PageIbadah",
  },
  {
    name: "Kehadiran",
    path: "/kehadiran",
    icon: "ibadah",
    component: "PageKehadiran",
  },
  {
    name: "Login",
    path: "/login",
    icon: "ibadah",
    component: "PageLogin",
  },
  {
    name: "Logout",
    path: "/logout",
    icon: "ibadah",
    component: "PageLogout",
  },
  {
    name: "Register",
    path: "/register",
    icon: "ibadah",
    component: "PageRegister",
  },
];
