import React, {useState, useEffect} from 'react'

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
    {show && (<div className='fadeIn' id='contactHome'>
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
    </div>)}
    </>
  )
}

export default ContactHome
