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
          <Route path="/landing_page_call_center/" element={<Home/>}/>
          <Route path="/landing_page_call_center/quienes-somos" element={<WhoWeUs/>}/>
          <Route path="/landing_page_call_center/seguridad-legal" element={<LegalSecurity/>}/>
          <Route path="/landing_page_call_center/contacto" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
