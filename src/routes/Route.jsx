import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../components/layouts/Main";
import Chefs from "../components/Chefs/Chefs";
import LoadRecipes from "../components/LoadRecipes/LoadRecipes";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
    children: [
        {
          path:"/",
          element:<Chefs></Chefs>,          
        },
        {
          path:"/chefs/:id",
          element:<LoadRecipes></LoadRecipes>,
          loader: ({params})=>(fetch(`http://localhost:3000/chefs/${params.id}`))
        }
      ]
    }
  ]);


  export default router