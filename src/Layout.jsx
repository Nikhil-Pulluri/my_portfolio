import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Works from "./components/Works/Works"
// import ContactHome from "./components/Home/ContactHome"
import { useState, useEffect } from "react"
import { animate, scroll } from "motion";
import AboutMobile from "./components/About/AboutMobile"
import WorkMobile from "./components/Works/WorkMobile"
import Contact from "./components/Contact/Contact"






function Layout() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(()=>{

    const handleResize = () => {
      setIsMobile (window.innerWidth < 768)
    }

    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  },[])

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
      {!isMobile && (<div id="scroll">
        <svg id="scroll-svg" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
        </svg>
      </div>)}


      <Navbar/>
      <Home/>


    


      <div id="about-outer">
        <div id="about"
        style={{height: "auto", marginBotton: "40px", paddingBottom: "50px"}}
        >
          {isMobile? <AboutMobile/> : <About/>}
        </div>
      </div>
  


      <div id="work-outer">
        <div id="work" style={{height: "auto", marginBottom: "40px", paddingBottom: "50px"}}>
          {isMobile? <WorkMobile/> : <Works/>}

        </div>
      </div>


      <div id="about-outer">
        <div id="about"
        style={{height: "auto", marginBotton: "40px", paddingBottom: "50px", padding: "0px 20px"}}
        >
          <Contact/>
        </div>
      </div>


      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "50px"}}
      >
        <Footer/>
      </div>


     
      
    </>
  )
}

export default Layout
