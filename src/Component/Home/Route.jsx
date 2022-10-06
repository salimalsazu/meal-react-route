import { createBrowserRouter } from "react-router-dom";
import Details from "../CardsDetails/Details";
import Meals from "../Meals/Meals";
import Home from "./Home";


export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Home></Home>,
        children: [

            {
                path: '/meals/:name',
                loader: async ({ params }) => {
                    // console.log(params.name)
                    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
                },
                element: <Meals></Meals>
            },
            {
                path: '/details/:detail',
                loader: async ({ params }) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detail}`)
                },
                element: <Details></Details>
            }
        ]
    }

]);