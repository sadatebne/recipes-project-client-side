import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../components/layouts/Main";
import Chefs from "../components/Chefs/Chefs";
import LoadRecipes from "../components/LoadRecipes/LoadRecipes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          path:"/",
          element:<Chefs></Chefs>,          
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>,          
        },
        {
          path:"/login",
          element:<Login></Login>,          
        },
        {
          path:"/register",
          element:<Register></Register>,          
        },
        {
          path:"/chefs/:id",
          element:<PrivateRoute><LoadRecipes></LoadRecipes></PrivateRoute>,
          loader: ({params})=>(fetch(`http://localhost:3000/chefs/${params.id}`))
        }
      ]
    }
  ]);


  export default router