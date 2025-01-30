import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/aboutMe.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer.jsx';
import MyProjects from './pages/myProjects.jsx';

function App() {
  const [opacity, setOpacity] = useState(0);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = scrollPosition > 50 ? 0.7 : 0;
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
        <div className="app-content overflow-x-hidden">
          <div
            className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500`}
            style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
          >
            <Header />
          </div>
          <div className="pt-[64px]">
            <Routes>
              <Route path="/portafolio" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myProjects" element={<MyProjects />} />
              <Route path="*" element={<Navigate to="/portafolio" replace />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
