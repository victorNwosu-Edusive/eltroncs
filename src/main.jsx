import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from "./pages/Cart";
import Cart from "./pages/Cart";
import WishList from "./pages/Wishlist";
import UserProfile from "./pages/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar includes the Outlet
    children: [
      {
        index: true,
        element: <Homepage />, // Render Homepage for the index route
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlists",
        element: <WishList />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
