import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import ContactHome from "./components/Home/ContactHome"
import Test from './components/Test'

function Layout() {

  return (
    <>
      <Navbar/>
      <Home/>


      <div style={{ position: "absolute", bottom: "45%", left: "65%", top: "45%"}}>
        <ContactHome/>
      </div>


      <div id="about"
      style={{height: "auto", marginBotton: "40px", paddingBottom: "50px"}}
      >
        <About/>
      </div>
      
      <Test/>
      

      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "50px"}}
      >
        <Footer/>
      </div>

      
    </>
  )
}

export default Layout
