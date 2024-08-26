import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import ContactHome from "./components/Home/ContactHome"

function Layout() {

  return (
    <>
      <Navbar/>
      <Home/>


      <div style={{ position: "absolute", bottom: "45%", left: "65%", top: "45%"}}>
        <ContactHome/>
      </div>


      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "70px", marginBotton: "40px", paddingBottom: "50px"}}
      >
        <About/>
      </div>


      <div style={{color: "white", height: "300px"}}>
          testing
      </div>
      

      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", padding: "50px"}}
      >
        <Footer/>
      </div>

      
    </>
  )
}

export default Layout
