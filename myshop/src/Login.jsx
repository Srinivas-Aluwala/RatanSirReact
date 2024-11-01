import GoogleLoginComponent from "./GoogleLoginComponent";
import FaceBookLoginComponent from "./FaceBookLoginComponent";
import { useState } from "react";




const Login=()=>{

    const [flag,setFlag]=useState(true);
    const signinoptions=()=>{
        setFlag(false);
    }
    
    return(<>
    <h1>welcome to login page</h1>
            {flag?(<button onClick={signinoptions} >signin</button>):(
                <>
                <GoogleLoginComponent />
                <FaceBookLoginComponent />
                </>
            )}



    </>)

}
export default Login;