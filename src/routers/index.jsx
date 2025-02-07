import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import index from "../pages/home";
import Home from "../pages/home";
import Favorite from "../pages/favorite";
import List from "../pages/list";
import Singlepage from "../pages/singlepage";

 export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:"favorite",
                element:<Favorite/>
            },
            {
                path:"list",
                element:<List/>
            },{
                path:"list/:id",
                element:<Singlepage/>
            }
           
        ]
    }
])