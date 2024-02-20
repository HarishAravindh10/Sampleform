import React from 'react';
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate login validation (replace with actual authentication logic)
    if (username !== 'admin' || password !== 'password') {
      setErrorMessage('Invalid username or password');
      return;
    }

    // Handle successful login (e.g., redirect to another page)
    console.log('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default App;