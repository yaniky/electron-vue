import "./index.scss";
import { createApp } from "vue";
import route from "@/route";
import store from "@/store";
import App from "./App.vue";

const app = createApp(App);

app.use(route);
app.use(store);
app.mount("#app");