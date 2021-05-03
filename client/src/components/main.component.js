import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import { withRouter } from 'react-router-dom';

function Main(props) {
    const dispatch = useDispatch();

    

    return ( 
        <form>
        <h3>Main Page</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
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
    );
}
export default withRouter(Main)