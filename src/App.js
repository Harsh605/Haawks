import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Servicedetails from './components/Servicesdetails';

function App() {

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");

  useEffect(() => {
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
        setLoading(false);
      }, 3300);
    }

  }, [])

  return (
    (!loading) &&
    (<Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails" element={<Servicedetails />} />
        </Route>
      </Routes>
    </Router>
    )
  )

}

export default App;
