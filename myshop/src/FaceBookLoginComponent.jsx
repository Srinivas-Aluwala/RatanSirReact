

import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useState } from 'react'


const FaceBookLoginComponent=()=>{

const [profile,setProfile]=useState(null);
   


 return(<>
    

    {!profile?(<>
    <LoginSocialFacebook 
    appId='403549482817309'
    onResolve={(Response)=>{
        setProfile(Response.data);
    }}
    onReject={(error)=>{
        console.log(error);
    }}
    >
    <FacebookLoginButton  text='continure with facebook'/>
    </LoginSocialFacebook>
</>):(
    <h1>welcome {profile.name}</h1>
)}
 </>)

}
export default FaceBookLoginComponent;
