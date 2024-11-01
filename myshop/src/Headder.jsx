import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Headder.css'
const Headder=()=>{

    const cart=useSelector((state)=>state.cart);

    const total=cart.reduce((sum,item)=>sum+item.quantity, 0);
    

    return (
        <div className="header-container">
        <Link to="/">Home</Link>
        <Link to="/Veg">Veg</Link>
        <Link to="/NonVeg">NonVeg</Link>
        <Link to="/Cart" className="cart-link">
          Cart({total})
        </Link>
        <Link to="/OrderHistory">OrderHistory</Link>
        <Link to="/login">login</Link>

      </div>
    )
  }
  
  export default Headder;