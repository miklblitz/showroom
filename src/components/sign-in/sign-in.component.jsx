import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle, signInWithGoogle } from '../../firebase/firebase.utils';

 import './sign-in.style.scss';

 class SignIn extends React.Component{
   constructor(){
     super();
     this.state = {
       email: '',
       password: ''
     }
   }

   handleSubmit = e =>{
    e.preventDefault();

    this.setState({email: '', password: ''})
   }

   handleChange = e => {
    const {value, name} = e.target;

    this.setState({[name]: value})
   } 

   render(){
    return(
      <div className='sign-in'>
        <h2>I have already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label="Email"
            autoComplete="off"
            required 
          />
          <FormInput 
            name="password" 
            type="password"
            handleChange={this.handleChange} 
            value={this.state.password} 
            label="Password"
            autoComplete="off"
            required 
          />

          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
        </form>
      </div>
    )
   }  
 }
  

 export default SignIn;