import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import { withRouter } from 'react-router-dom';

function Register(props){

    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

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
        setPassword(event.currentTarget.value)
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
        <form onSubmit={onSubmitHandler}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>First name</label>
            <input name="firstname" value={this.state.firstname} className="form-control" placeholder="First name"  onChange={this.handleChange}/>
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input name="lastname" value={this.state.lastname} className="form-control" placeholder="Last name" onChange={this.handleChange}/>
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input name="email" value={this.state.email} className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input name="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
        </form>
    );
}

export default withRouter(Register)