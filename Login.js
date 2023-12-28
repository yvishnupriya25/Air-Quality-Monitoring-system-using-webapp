import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const nav = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if the entered credentials are correct
        if (username === 'vishnupriya' && password === 'vishnu') {
          nav('/dashboard')
        } else {
          alert('Invalid username or password');
        }
      };

    return (
        <div className="log"><center>
          <h1>Login</h1></center>
          <label><center>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </center></label>
          <br />
          <label><center>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </center></label>
          <br />
          <center><button onClick={handleLogin}>Login</button></center>
        </div>
    );
}

export default Login;
