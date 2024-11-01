import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart,deleteFromCart } from "./store";
import './Cart.css'


const Cart=()=>{

  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart);
  const total=cart.reduce((sum,item)=>sum+(item.price*item.quantity), 0)
  const code=['SEENU10','SEENU20','SEENU30'];
  const coderef=useRef(null);
  const products=cart.map((product, index)=>

    <li key={index}>
      {product.name} : ${product.price.toFixed(2)} -  Qty:{product.quantity}&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>+</button>&emsp;
      <button onClick={()=>dispatch(removeFromCart(product))}>-</button>&emsp;
      <button onClick={()=>dispatch(deleteFromCart(product))}>Delete</button>
    </li>
  );

  const [couponMsg,setCouponMsg]=useState(null);
  const [discountMsg,setDiscountMsg]=useState(null)
  const [discount, setDiscount]=useState(0);
  const [couponDiscount, setCouponDiscount]=useState(0);

  /*
calculaitng discount in other way using multi value return function and destructuring concept


  const [discountPercent, setDiscountPercent]=useState(0);
const discountpercent=(dis)=>{
  setDiscountPercent(dis);
}

const calculatetotal=()=>{

  const discountAmt=total*(discountPercent/100);

  const netAmt=total-disdiscountAmt;


  return(
    discountAmt:parseFloat(discountAmt.toFixed(2)),
    netAmt:parseFloat(netAmt.toFixed(2))
  )
}


const {discountAmt,netAmt}= calculatetotal();


  */
  
  const discountpercent=(dis)=>{

    switch (dis) {
      case 10:setDiscount(total*0.1);
      setDiscountMsg('10% discount applied!');
        break;

      case 20:setDiscount(total*0.2);
      setDiscountMsg('20% discount applied!');
        break;

      case 30:setDiscount(total*0.3);
      setDiscountMsg('30% discount applied!');
        break;
    
      default:setDiscount(0);
        break;
    }
  }

  const applyCoupon=()=>{
   // e.preventDefault();
    const status=code.find(codes=>codes === coderef.current.value);

    if(status)
    {
      switch (coderef.current.value) {
        case 'SEENU10':setCouponDiscount(total*0.1);
          break;

        case 'SEENU20':setCouponDiscount(total*0.2);
          break;

        case 'SEENU30':setCouponDiscount(total*0.3);
          break;
      
        default:setCouponDiscount(0);
          break;
      }

      setCouponMsg("'"+coderef.current.value+"'"+'  Coupon Applied!')
    }
    else{
      setCouponMsg('Invalid Coupon Code')
    }
  }

  const netamt=total-couponDiscount-discount;

    return (
      <>
         {cart.length === 0 ? (<h3>Cart is empty</h3>):(
          <>
         <h1>Cart</h1>

         <p>{products}</p>
         <p>Total bill : {total}</p>

        <p>Enter coupon code : <input ref={coderef} type='text' placeholder="coupon code"/></p>
        <button onClick={applyCoupon}>Apply Coupon</button>
        <p>{couponMsg}</p>
        <p>Coupon Code Discount : {couponDiscount} </p>


        <p><button onClick={()=>discountpercent(10)}>10% discount</button>&emsp;
        <button onClick={()=>discountpercent(20)}>20% discount</button>&emsp;
        <button onClick={()=>discountpercent(30)}>30% discount</button></p>
        {discountMsg}
        <p> Discount Amt : {discount}</p>


        <p>Net bill : {netamt}</p>

        <p><button>Complete order</button></p> 
        </>
         )}
         </> 
    );
  }
  
  export default Cart;