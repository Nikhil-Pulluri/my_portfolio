import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Works from "./components/Works/Works"
// import ContactHome from "./components/Home/ContactHome"
import { useEffect } from "react"
import { animate, scroll } from "motion";





function Layout() {

  useEffect(() => {
    // Ensure the element is in the DOM before trying to animate
    const progressElement = document.querySelector('.progress');

    if (progressElement) {
      scroll(animate(".progress", {
        strokeDasharray: ["0,1", "1,1"]
      }));
    }
  }, []);

  return (
    <>

      {/* scroll animation*/}
      <div id="scroll">
        <svg id="scroll-svg" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
        </svg>
      </div>


      <Navbar/>
      <Home/>


      {/* <div style={{ position: "absolute", bottom: "45%", left: "65%", top: "45%"}}>
        <CodeEditor/>
      </div> */}


      <div id="about-outer">
        <div id="about"
        style={{height: "auto", marginBotton: "40px", paddingBottom: "50px"}}
        >
          <About/>
        </div>
      </div>

      <div id="work-outer">
        <div id="work" style={{height: "500px", marginBottom: "40px", paddingBottom: "50px"}}>
          <Works/>
        </div>
      </div>
      
      

      {/* <div
      style={{height: "auto", paddingTop: "50px", marginBottom: "400px"}}
      >
        <CodeEditor/>
      </div> */}

      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "50px"}}
      >
        <Footer/>
      </div>

      
    </>
  )
}

export default Layout
