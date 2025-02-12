import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/common/header.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/aboutMe.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/common/footer.jsx';
import MyProjects from './pages/myProjects.jsx';

function App() {
  const [opacity, setOpacity] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = scrollPosition > 50 ? 1 : 0;
      setOpacity(opacityValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="app-container">
        <div className="app-content items-center justify-center w-full">
            <Header />
          <div>
            <Routes>
              <Route path="/portafolio" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myProjects" element={<MyProjects />} />
              <Route path="*" element={<Navigate to="/portafolio" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

