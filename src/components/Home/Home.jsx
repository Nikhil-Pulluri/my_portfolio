import React, {useState,useEffect, useRef} from 'react'
import { LinearGradient } from 'react-text-gradients'
import ParticleBackground from '../Particles/ParticleBackground'
import Intro from './Intro'

function Home() {

  const [show, setShow] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    <div>
    <ParticleBackground/>
      <div style={{display: "flex", flexDirection: "column", gap: "60px"}}> {/*adding relative position to the particle  */}
            

          <div id="home"  >

         

            {show && (
              <div style={{display: "flex", flexDirection: "column", gap: "5px", marginTop: "200px"}}>
                <div className='fadeIn' style={{fontWeight: "bold"}}>Hello👋🏼</div>
                <div className='fadeIn'>
                  <div  style={{fontWeight: "bold", opacity: "0.4", fontSize: "60px"}}>This is</div>
                  <div style={{fontWeight: "bold", fontSize: "60px"}}>
                    <LinearGradient gradient={['to right', '#e44f4f ,#9b50bb,#0093ff']}>
                      Nikhil Pulluri
                    </LinearGradient>
                  </div>
                </div>
              </div>
            )}



          </div>


          <div className='intro'>
          <Intro/>
          </div>

      </div> 


    </div>
    </>
  )
}

export default Home
