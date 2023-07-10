import React, { useState } from 'react';
import '../Login.css';


const Login = ({ onClose }) => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
 


  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container" style={{
      position: 'relative',
      height: '100vh',
      background: `url('./images/c11.jpg') center/cover`,
      backgroundsize: 'cover',            backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     backdropFilter: 'blur(5px)'
    }} >
      <div className='login-background' style={{
          position: 'absolute',
          top: 0,          
          left: 0,         
          width: '100%',         
          height: '100%',         
          backdropFilter: 'blur(8px)',          
          zIndex: -1
        }}></div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
