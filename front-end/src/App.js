import React, { useState } from 'react';
import {Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QRCode from "react-qr-code";
import QRCodeLink from 'qrcode';

function App() {

  const[linkText, setLinkText] = useState("");
  const[linkQrCode, setLinkQrCode] = useState('');

  function handleQrCode(e){
    const value = e.target.value;
    setLinkText(value);
    handleGenerate(value);
  }

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3
    }, function(err, url){
      setLinkQrCode(url);
    })
  }

  return (
    <div className="app"> 
      <QRCode className='Qr' value={linkText}/>
      <Input className='link' onChange={(e) => {handleQrCode(e)}} value={linkText} 
      />
      <br/>
      <Button color="primary" href={linkQrCode} download={`qrcode.png`}>
        Salvar QRCode
      </Button>
    </div>
  );
}

export default App;
