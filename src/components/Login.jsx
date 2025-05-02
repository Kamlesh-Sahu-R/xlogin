import { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [flag, setFlag] = useState(true);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (username === 'user' && password === 'password') {
        setFlag(false);
        setMessage('Welcome, user');
      } else {
        setFlag(true);
        setMessage('Invalid username or password');
      }
    };

    return(
        <div>
            <h1>Login Page</h1>
            {message && <p>{message}</p>}
            {flag && <form onSubmit={handleLogin}>
                <p>Username:<input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /></p>
                <p>Password:<input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /></p>
                <button type="submit">Submit</button>
            </form>}
        </div>
    );
}