import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ user, setUser ] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => fetch('https://api.backend.dev/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        })}>Login</button>
        <button onClick={() => fetch('https://api.backend.dev/logout', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        })}>Logout</button>
        <button onClick={() => fetch('https://api.backend.dev/user').then(res => res.json()).then(data => setUser(data.username))}>
          Get user
        </button>
        <p>User is {user}</p>
      </header>
    </div>
  );
}

export default App;
