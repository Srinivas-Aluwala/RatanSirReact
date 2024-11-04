import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import GitHubLoginComponent from "./GitHubLoginComponent";
import { useDispatch, useSelector } from "react-redux";
import { login,logout,openModal,closeModal } from "./store";
import './Headder.css'
const Headder=()=>{

    const cart=useSelector((state)=>state.cart);
    const profile=useSelector(state=>state.user.profile);
    const total=cart.reduce((sum,item)=>sum+item.quantity, 0);
   const isOpen=useSelector(state=>state.modalstat.status);


const dispatch=useDispatch();

const handlelogin=(Response)=>{
  dispatch(login(Response.data));
  dispatch(closeModal());
}

    return (
        <div className="header-container">
        <Link to="/">Home</Link>
        <Link to="/Veg">Veg</Link>
        <Link to="/NonVeg">NonVeg</Link>
        <Link to="/Cart" className="cart-link">
          Cart({total})
        </Link>
        <Link to="/OrderHistory">OrderHistory</Link>
        <button onClick={()=>dispatch(openModal())}>{profile?(profile.first_name):'login'}</button>


        {isOpen &&(
          <>
          <h1>Welcome to the Login Page</h1>
          <div className="modal-overlay">
          <div className="modal-content">
          <button onClick={()=>dispatch(closeModal())} className="close-button">&times;</button>

          <LoginSocialFacebook 
            appId='403549482817309'
            onResolve={handlelogin}
            onReject={(error)=>{
                console.log(error);
            }}
          >
          <FacebookLoginButton  text='continure with facebook'/>
          </LoginSocialFacebook>
            <GoogleLoginComponent />
            <GitHubLoginComponent />
          </div>
          </div>
          </>)
         }


        {/* <Link to="/login">{profile?(profile.first_name):'login'}</Link> */}

      </div>
    )
  }
  
  export default Headder;