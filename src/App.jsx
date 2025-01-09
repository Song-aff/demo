import { useState } from 'react'
import { Html5Qrcode } from "html5-qrcode"

import './App.css'

function App() {
  const [decodedText, setDecodedText] = useState('')

  return (<div>
    <div id='reader'>qr</div>
    <div className="card">
      <button onClick={() => {
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          setDecodedText(decodedText)
          console.log(`Code matched = ${decodedText}`, decodedResult);
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback).catch(err => err);

      }}>
        start {decodedText}
      </button>
    </div>
  </div>)


}

export default App
