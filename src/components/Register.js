import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const data = {
      name,
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
  
      const user = await axios.post('api/register', data, config)
  
      if(user){
        history.push('/dashboard')
      }
      
    }
    return (
      <div className="App">
        <h2>Register New User</h2>
  
        <form onSubmit={submitHandler}>
          <label>Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          <label>Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  />
  
          <button type="submit">Register</button>
        </form>

        <h3>Are you already registered Member? Login Below</h3>
        <Link to="/login">Login</Link>

      </div>
    );
}

export default Register
