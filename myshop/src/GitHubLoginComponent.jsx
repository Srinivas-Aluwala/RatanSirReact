

import { LoginSocialGithub } from 'reactjs-social-login';
import { GithubLoginButton } from 'react-social-login-buttons';
import { useState } from 'react'

const GitHubLoginComponent=()=>{

    const [profile,setProfile]=useState(null);


    return(<>
        
    
        {!profile?(<>
        <LoginSocialGithub 
        client_id='Ov23liiCEQ0IOgPZadi4'
        redirect_uri="http://localhost:5173" 
        onResolve={(Response)=>{
            setProfile(Response.data);
        }}
        onReject={(error)=>{
            console.log(error);
        }}
        >
        <GithubLoginButton  text='continure with GitHub'/>
        </LoginSocialGithub>
    </>):(
        <>
        <h1>welcome {profile.name}</h1>
        </>
    )}
     </>)

}
export default GitHubLoginComponent;