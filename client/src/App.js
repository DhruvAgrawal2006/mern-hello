import React, { useState, useEffect } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState(null);

  useEffect(() => {
    fetch(`https://mern-hello-lmvx.onrender.com`) // or your backend URL
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.message === "backend is working") {
          setBackendStatus("backend is working");
        } else {
          setBackendStatus("backend responded but unexpected message");
        }
      })
      .catch(() => {
        setBackendStatus("could not connect to backend");
      });
  }, []);

  return (
    <div>
      <h1>frontend is working</h1>
      {backendStatus && <h2>{backendStatus}</h2>}
    </div>
  );
}

export default App;
