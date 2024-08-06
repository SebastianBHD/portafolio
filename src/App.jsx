import { useState } from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
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

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProjects" element={<MyProjects />} />
      </Routes>
      <Footer />
      </div>
    </div>
    </>
  )
}

export default App
