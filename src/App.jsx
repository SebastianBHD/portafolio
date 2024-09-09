import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate} from 'react-router-dom'
import Header from './components/header.jsx'
import Home from './pages/home.jsx'
import AboutMe from './pages/aboutMe.jsx'
import Contact from './pages/contact.jsx'
import Footer from './components/footer.jsx'
import MyProjects from './pages/myProjects.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <Header></Header>
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
    </>
  )
}

export default App
