import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Servicedetails from './components/Servicesdetails';
import video from "./videos/preloader.mp4"

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails" element={<Servicedetails />} />
          </Route>
        </Routes>
      </Router>
    )
      :
      (
        <div className='preloader'>
          <video autoPlay muted src={video} />
        </div>
      )
  )

}

export default App;
