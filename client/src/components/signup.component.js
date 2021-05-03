import React, { Component } from "react";
import { withRouter } from "react-router";

export default class SignUp extends Component {
    state = {
        firstname   : '',
        lastname    : '',
        email       : '',
        password    : ''    
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.OnCreate(this.state);
        this.setState({
            firstname : '',
            lastname : '',
            email : '',
            password : ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
}

withRouter(SignUp);