import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"

function Layout() {

  return (
    <>
      <Navbar/>
      <Home/>
      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "70px", marginBotton: "40px", paddingBottom: "50px"}}
      >
        <About/>
      </div>

      <Footer/>
      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", padding: "50px"}}
      >
        <Footer/>
      </div>

      

      
      
    </>
  )
}

export default Layout
