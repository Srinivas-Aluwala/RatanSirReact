import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import './NonVeg.css'

const NonVeg=()=>{

  const nonvegproducts=useSelector(state=>state.products.nonveg)
  const dispatch=useDispatch();
  const items=nonvegproducts.map((product,index)=>
    <p><li key={index}>
      {product.name} -${product.price.toFixed(2)}&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>add to cart</button>
    </li></p>
  );

  const filters=()=>{

    const filteritems=document.getElementById("box");

    console.log(filteritems);

  }

    return (
      <>
            <h1>non-veg items</h1>
            <div className="mainconnonveg">
        <div>
        <input type="checkbox" id="box" value="naturals"/>naturals<br />
        <input type="checkbox" id="box" value="farmfresh"/>farmfresh<br />
        <input type="checkbox" id="box" value="suguna"/>suguna<br />
        <input type="checkbox" id="box" value="ruchi"/>ruchi<br />
        <p><button onClick={filters} >apply filter</button></p>
        </div>


        <div>
        {items}
        </div>
      </div>
      </>
    )
  }
  
  export default NonVeg;