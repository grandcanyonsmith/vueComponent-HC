import Vue from "vue";
import Router from "vue-router";
import ProfileHeader from "./components/ProfileHeader";
import { profileHeaderData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: ProfileHeader,
      props: {
        userContainerBoxProps: profileHeaderData.userContainerBoxProps,
        frame15082Props: profileHeaderData.frame15082Props,
      },
    },
  ],
});
