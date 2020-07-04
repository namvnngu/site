import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingCat from './components/Loading';
import LandingPage from './components/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [])

  return (
    <div className="App">
      {loading ?
        (<LoadingCat />)
        :
        (
          <div className="nam-nguyen">
            <LandingPage />
             <div style={{ height: "200vh" }}></div>
          </div>
        )
      }
    </div>
  );
}

export default App;
