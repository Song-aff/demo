import { useState } from 'react'
import { Html5QrcodeSupportedFormats,Html5QrcodeScanner } from "html5-qrcode"

import './App.css'





function App() {
  const [decodedText, setDecodedText] = useState('')

  return (<div>
    <div id='reader'>qr</div>
    <div className="card">
      <button onClick={() => {
      function onScanSuccess(decodedText, decodedResult) {
        // Handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        setDecodedText(decodedText)
      }
      
      const formatsToSupport = [
        Html5QrcodeSupportedFormats.QR_CODE,
        Html5QrcodeSupportedFormats.UPC_A,
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
      ];
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          formatsToSupport: formatsToSupport
        },
        /* verbose= */ false);
      html5QrcodeScanner.render(onScanSuccess);
      
   

      }}>
        start {decodedText}
      </button>
    </div>
  </div>)


}

export default App
