import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("@/page/home/Main.vue")
    },
    {
        path: "/total",
        name: "Total",
        component: () => import("@/page/total/Main.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;