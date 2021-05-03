import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if (response.payload.loginSuccess) {
                props.history.push('/Main')
            } else {
                alert('Error˝')
            }
        })
    }

    return ( 
    
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit ={onSubmitHandler}>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" value={Email} onChange={onEmailHandler}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={Password} onChange={onPasswordHandler}/>
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    </div>
    </div>
    );
}
export default withRouter(Login)

