import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import App from "./App";
import AddProduct from "./components/private/AddProduct";
import UpdateProduct from "./components/private/UpdateProduct";
import Products from "./components/private/Products";
import Brand from "./components/Brand";
import Error from "./components/shared/Error";
import ProductDetails from "./components/ProductDetails";
import SignUp from "./components/logInOut/signup";
import SignIn from "./components/logInOut/signin";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MyCart from "./components/user/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path : '/products',
        element: <Products></Products>,
        loader: () => fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product'),
      },
      {
        path: 'addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: 'updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product/${params.id}`)
      },
      {
        path: 'productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product/${params.id}`)
      },
      {
        path: '/brand/:brandName',
        element: <Brand></Brand>,
        loader: () => fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product'),
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ({params}) => fetch(`https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product`)
      }
      // {
      //   path: '/users',
      //   element: <Users></Users>,
      //   loader: () => fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/user'),  
      // }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>    
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);