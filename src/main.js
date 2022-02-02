import Vue from "vue";

import "./style.css";

//Fake backend
import { fakeBackend } from "./_helpers";
fakeBackend();

import {
    initFacebookSdk,
    jwtInterceptor,
    errorInterceptor,
    router
} from "./_helpers";
import { App } from "./App.vue";

//Enable interceptors for HTTP requests
jwtInterceptor();
errorInterceptor();

//Wait fro facebook sdk to start app
initFacebookSdk();

//Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");