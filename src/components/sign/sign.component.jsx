 import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
 import './sign.style.scss';

 const Sign = () =>(
   <div class='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
 )

 export default Sign;