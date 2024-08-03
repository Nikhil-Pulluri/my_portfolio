import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"


function Layout() {

  return (
    <>
      <Navbar/>
      <Home/>
      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", padding: "100px", zIndex: "1"}}
      ><Footer/>
      </div>
    </>
  )
}

export default Layout
