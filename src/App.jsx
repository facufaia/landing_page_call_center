import NavBar from "./components/nav_bar/nav_bar"
import Footer from "./components/footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/home"
import WhoWeUs from "./Pages/who_we_us"
import LegalSecurity from "./Pages/legal_security"
import Contact from "./Pages/contact"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/landing_page_call_center" element={<Home/>}/>
          <Route path="/quienes-somos" element={<WhoWeUs/>}/>
          <Route path="/seguridad-legal" element={<LegalSecurity/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
