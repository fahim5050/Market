import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart"
import { Outlet,RouterProvider,ScrollRestoration, createBrowserRouter } from "react-router-dom";
import { productsData } from "./api/api";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Pages/Login";

const Layout = ()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path:"/single-product/:id",
        element: <SingleProduct/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/login",
        element: <Login/>
      }
    ]
  }
])
function App() {
  return (
  <div className="font-bodyFont">
 
  <RouterProvider router={router}/>
  </div>
  );
}

export default App;
