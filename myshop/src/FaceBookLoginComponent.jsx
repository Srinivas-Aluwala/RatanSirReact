

import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { useState } from 'react'


const FaceBookLoginComponent=()=>{

    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    const userProfile = decodeJwt(credentialResponse.credential);
    setUserName(userProfile.name); 
    setIsLoggedIn(true);
  };

  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));


    
}

 return(<>
    

    {!isLoggedIn?(<>
    <LoginSocialFacebook 
    appId='951287380367131'
    onResolve={(Response)=>{
        console.log(Response);
    }}
    onReject={(error)=>{
        console.log(error);
    }}
    >
    <FacebookLoginButton  text='continure with facebook' onSuccess={handleSuccess}/>
    </LoginSocialFacebook>
</>):(
    <h1>welcome {userName}</h1>
)}
 </>)

}
export default FaceBookLoginComponent;
