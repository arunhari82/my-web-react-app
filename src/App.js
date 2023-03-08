import logo from './logo.svg';
import redhatlogo from "./Redhat.svg"
import './App.css';
import { useState, useEffect }  from 'react';

function App() {

  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => response.json)
    .then((data) => {})
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={redhatlogo} alt="redhat-logo"></img>
      </header>
      <p> Hello World React Webapp for Azure devops demo Version 2.0</p>
    </div>
  );
}

export default App;
