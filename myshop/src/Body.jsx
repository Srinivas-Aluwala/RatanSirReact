import React from "react"
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import OrderHistory from './OrderHistory';
import Login from "./Login";
import NotFound from "./NotFound";
const Body=()=>{

    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/Veg" element={<Veg />} ></Route>
            <Route path="/NonVeg" element={<NonVeg />} ></Route>
            <Route path="/Cart" element={<Cart />} ></Route>
            <Route path="/OrderHistory" element={<OrderHistory />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>

        </Routes>
      </>
    )
  }
  
  export default Body;