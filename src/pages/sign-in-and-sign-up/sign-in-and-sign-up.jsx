import React from 'react'
import './sign-in-and-sign-up.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
    
  </div>
)

export default SignInAndSignUp