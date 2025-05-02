import { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    //const [flag, setFlag] = useState(true);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (username === 'user' && password === 'password') {
        //setFlag(false);
        setMessage('Welcome, user!');
      } else {
        //setFlag(true);
        setMessage('Invalid username or password');
      }
    };

    return(
        <div>
            <h1>Login Page</h1>

            {message && <p>{message}</p>}

            
                <form 
                    onSubmit={handleLogin}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px', 
                    }}
                >
                    <label htmlFor="username">Username
                        <input
                            type="text"
                            id = "username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="password">Password
                        <input
                            type="text"
                            id = "password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" style={{ width: '100px' }}>Submit</button>
                </form>
            
        </div>
    );
}