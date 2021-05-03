import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';

function Main(props) {
    const dispatch = useDispatch();
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
    

    return ( 
        <div className="auth-wrapper">
        <form>
        <h2>Main Page</h2>
        <Table dataSource={dataSource} columns={columns} />;
        
        {/* <div className="form-group">
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
        </p> */}
        
    </form>
    </div>
    );
}
export default withRouter(Main)