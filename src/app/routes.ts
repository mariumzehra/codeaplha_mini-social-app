import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { PostDetail } from "./components/PostDetail";
import { Explore } from "./components/Explore";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: Explore },
      { path: "profile/:userId", Component: Profile },
      { path: "post/:postId", Component: PostDetail },
    ],
  },
]);
