import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';

const Login = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        email, 
        password
      }
    
    
      const config = {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    
    
    
    
      const submitHandler = async (e) => {
        e.preventDefault();
    
        const user = await axios.post('api/login', data, config)

        
        if(user){
          history.push('/dashboard')
        }
        
      }


    return (
        <div>
            <h2>Login to Dashboard</h2>

        <form onSubmit={submitHandler}>
        
          <label>Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  />
  
          <button type="submit">Login</button>
        </form>

        </div>
    )
}

export default Login
