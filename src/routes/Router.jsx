import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AddDoll from "../Pages/AddDoll/AddDoll";
import AllDolls from "../Pages/AllDolls/AllDolls";
import PrivateRoute from "../Layout/PrivateRoute";
import Error404Page from "../Pages/Error/Error";
import SingleDoll from "../Pages/SingleDoll/SingleDoll";
import MyDolls from "../Pages/MyDolls/MyDolls";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/alldolls",
        element: <AllDolls />,
      },
      {
        path: "/doll/:id",
        element: (
          <PrivateRoute>
            <SingleDoll />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://khelagorbackend.vercel.app/api/doll/${params.id}`),
      },
      {
        path: "/mydolls",
        element: (
          <PrivateRoute>
            <MyDolls />
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddDoll />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
