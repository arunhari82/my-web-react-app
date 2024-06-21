import logo from './logo.svg';
import redhatlogo from "./Redhat.svg"
import './App.css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://backendnodeservice-dev-env.apps.cluster-g6j54.g6j54.sandbox2065.opentlc.com/products').then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setProducts(data);
      }, (err) => {
        console.log(err);
        setIsLoaded(true);
        setError(err);
      })
  }, []);

  let loadedContent;

  if (!isLoaded) {
    loadedContent = <div>Loading...</div>;
  }
  else {
    loadedContent = <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Test</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => { return <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>Code Change Demo</td></tr> })}
      </tbody>
    </Table>;
  }
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={redhatlogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Text className="justify-content-center">
             Azure Devops Demo Version 1.2
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
          
           {/* <Navbar.Brand href="#main" class="navbar-right">
              <img
                src={charlesriver}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
          /> 
            </Navbar.Brand>*/}
          </Navbar.Collapse>



        </Container>
      </Navbar>
     {/* <h2> Product and Services List </h2>
      {loadedContent} */}
    </div>
  );
}

export default App;
