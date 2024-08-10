import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';

import "./index.css"
const Login = () => {  
    const [userName, setUserName] = useState('');  
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {  
        e.preventDefault();   
        if(userName.length>0 && password.length>0){
          navigate('/home');
            
            
        } else {  
            alert('Enter UserName or Password');  
          } 
        console.log('Username:', userName, 'Password:', password);  
    };  

    return (  
        <div className="container mt-5">  
        <div className="row justify-content-center">  
          <div className="col-md-6 bb">  
            <div className="card">  
              <div className="card-header">  
                <h2 className="text-center">Login</h2>  
              </div>  
              <div className="card-body">  
                <form onSubmit={handleSubmit}>  
                  <div className="form-group">  
                    <label htmlFor="userName">Username:</label>  
                    <input  
                      type="text"  
                      className="form-control"  
                      id="userName"  
                      value={userName}  
                      onChange={(e) => setUserName(e.target.value)}  
                       
                    />  
                  </div>  
                  <div className="form-group">  
                    <label htmlFor="password">Password:</label>  
                    <input  
                      type="password"  
                      className="form-control"  
                      id="password"  
                      value={password}  
                      onChange={(e) => setPassword(e.target.value)}  
                     
                    />  
                  </div>  
          
                  <button type="submit" className="btn btn-primary btn-block">  
                    Login  
                  </button>  
                  
                </form>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    );  
}  

export default Login;  