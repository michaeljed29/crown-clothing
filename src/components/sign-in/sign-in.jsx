import React from 'react'
import './sign-in.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase-utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  submitHandler = () => {
    this.setState({email: '', password: ''})
  }

  changeHandler = e => {
    e.preventDefault()

    const { name, value } = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput type="email" id="email" name="email" value={this.state.email} changeHandler={this.changeHandler} label="email" required />
          <FormInput type="password" id="password" name="password" value={this.state.password} changeHandler={this.changeHandler} label="password" required />
          <div className="btn-group">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn