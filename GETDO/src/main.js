import "./assets/main.css";

// Vue & Vue-router
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);

// V-calendar
import VCalendar from "v-calendar";
import "v-calendar/style.css";

app.use(VCalendar, {});

app.mount("#app");
