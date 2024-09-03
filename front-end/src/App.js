import React, { useState } from 'react';
import {Input, Row, Col} from 'reactstrap';
import './App.css';

function App() {

  const[text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
      <Row>
        <Col className="bg-light border">
          <Input className='link' onChange={(element) => {setText(element.target.value)}} value={text} 
          />
        </Col>
      </Row>
      
      </header>
    </div>
  );
}

export default App;
