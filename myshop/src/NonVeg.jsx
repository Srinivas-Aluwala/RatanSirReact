import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

const NonVeg=()=>{

  const nonvegproducts=useSelector(state=>state.products.nonveg)
  const dispatch=useDispatch();
  const items=nonvegproducts.map((product,index)=>
    <p><li key={index}>
      {product.brand} - {product.name} -${product.price.toFixed(2)}&emsp;
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
        <div>
        <input type="checkbox" id="box" value="naturals"/>naturals
        <input type="checkbox" id="box" value="farmfresh"/>farmfresh
        <input type="checkbox" id="box" value="suguna"/>suguna
        <input type="checkbox" id="box" value="ruchi"/>ruchi<br />
        <p><button onClick={filters} >apply filter</button></p>
        </div>


        <div>
        {items}
        </div>
      </>
    )
  }
  
  export default NonVeg;