import React, { useEffect, useState } from 'react';

function App() {
  const [backendMsg, setBackendMsg] = useState("");

  useEffect(() => {
    fetch("https://your-backend.onrender.com/api/hello")
      .then(res => res.json())
      .then(data => setBackendMsg(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from Frontend</h1>
      <h2>{backendMsg}</h2>
    </div>
  );
}

export default App;