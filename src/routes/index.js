import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Page404 from "~/pages/Page404";
import Comingsoon from "~/pages/Comingsoon";
import TeamItem from "~/components/TeamItem";
import TourItem from "~/components/TourItem";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";

import { HeaderOnly } from "~/Layout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/404", component: Page404, layout: null },
  { path: "/comingsoon", component: Comingsoon, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },

  { path: "/test", component: TourItem, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
