import React from "react";
import QRCode from "qrcode.react";

const App = () => {
  const qrCodeValue = "https://saikumarguduru.me";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>QR Code Generator</h1>
      <div>
        <QRCode value={qrCodeValue} size={256} fgColor="#000" />
      </div>
    </div>
  );
};


export default App;
