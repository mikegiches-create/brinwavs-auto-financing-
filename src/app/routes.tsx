import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";
import WishlistPage from "./pages/WishlistPage";
import ComparePage from "./pages/ComparePage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "cars", Component: ListingPage },
      { path: "cars/:id", Component: DetailsPage },
      { path: "wishlist", Component: WishlistPage },
      { path: "compare", Component: ComparePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
