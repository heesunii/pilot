import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import { withRouter } from 'react-router-dom';

function Register(props){

    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(Password !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }
        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
        .then(response=> {
            if(response.payload.success){
                props.history.push("/login")
            }
            else{
                alert("Failed to Sign up!")
            }
        })
    }
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={onSubmitHandler}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Name</label>
            <input name="name" value={Name} className="form-control" placeholder="Enter Name"  onChange={onNameHandler}/>
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input name="email" value={Email} className="form-control" placeholder="Enter email" onChange={onEmailHandler}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input name="password" value={Password} className="form-control" placeholder="Enter password" onChange={onPasswordHandler}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input name="password" value={confirmPassword} className="form-control" placeholder="Enter Confirm Password" onChange={onConfirmPasswordHandler}/>
        </div>


        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
        </form>
        </div>
        </div>
    );
}

export default withRouter(Register)