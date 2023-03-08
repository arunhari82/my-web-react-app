import logo from './logo.svg';
import redhatlogo from "./Redhat.svg"
import './App.css';
import { useState, useEffect }  from 'react';

function App() {

  const[posts,setPosts] = useState([]);

  useEffect(()=>{});
  return (
    <div className="App">
      <header className="App-header">
        <img src={redhatlogo} alt="redhat-logo"></img>
      </header>
      <p> Hello World React Webapp for Azure devops demo</p>
    </div>
  );
}

export default App;
