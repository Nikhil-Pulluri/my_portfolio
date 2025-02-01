import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

function ContactHome() {
  const [show, setShow] = useState(false);


  useEffect(()=> {
    const timer = setTimeout(()=>{
      setShow((prev)=> !prev)
    }, 500)

    return ()=> clearTimeout(timer)
  }, [])
  return (
    <>
    {/* <div className='fadeIn' id='contactHome'>
      <center>
          <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>

          <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>

              <div id='social' style={{border: "none", borderRadius: "50%", padding: "5px 5px", width: "50px"}}>
                <a href='https://github.com/Nikhil-Pulluri'><img id='github' style={{height: "40px", width: "40px"}} src="/git-vio.png" alt="GitHub" /></a>
              </div>


              <div id='social' style={{border: "none", borderRadius: "50%", padding: "5px 5px", width: "50px"}}>
                <a href='https://www.linkedin.com/in/nikhil-sri-ram-pulluri-03bb64211/'><img id='github' style={{height: "40px", width: "40px"}} src="/linkedin.png" alt="LinkedIn" /></a>
              </div>



          </div>

          <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
            <div style={{display: "flex", gap: "10px"}} id="resume">
              <div><img style={{height: "25px", width: "20px"}} src="/resume.png" alt="resume" /></div>
              <div><a href='https://drive.google.com/file/d/18DpUwZN9RHheg5gYXSSCH0fHAOEwb6wc/view?usp=sharing'>Resume</a></div>
            </div>
            <div id="resume">
              <a href=''>CV</a>
            </div>
          </div>

        </div>
      </center>
    </div> */}

        <motion.div>
          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-center justify-center gap-4 mt-8">
            <a href="https://github.com/Nikhil-Pulluri?tab=repositories">
              <button variant="default" size="lg">
                View Projects
              </button>
            </a>
            <a href="mailto:nikhilpulluri7810@gmail.com">
              <button variant="outline" size="lg">
                Contact Me
              </button>
            </a>
          </motion.div> */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex items-center justify-center gap-6 mt-12">
              <a href="https://github.com/Nikhil-Pulluri" className="text-muted-foreground hover:text-white transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nikhil-sri-ram-pulluri-03bb64211/" className="text-muted-foreground hover:text-white transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="https://x.com/NikhilPulluri3" className="text-muted-foreground hover:text-white transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
          </motion.div>
        </motion.div>

    </>
  )
}

export default ContactHome
