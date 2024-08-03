import React, {useState,useEffect, useRef} from 'react'
import { LinearGradient } from 'react-text-gradients'
import ParticleBackground from '../Particles/ParticleBackground'
import Intro from './Intro'

function Home() {

  const [show, setShow] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);



  // const parallaxRef = useRef(null)

  // useEffect(()=> {

  //   const parallax = (e)=> {
  //     const elem = parallaxRef.current
  //     const _w = window.innerWidth / 2;
  //     const _h = window.innerHeight / 2;
  //     const _mouseX = e.clientX;
  //     const _mouseY = e.clientY;
  //     const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  //     const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  //     const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  //     const x = `${_depth3}, ${_depth2}, ${_depth1}`;
  //     console.log(x);
  //     elem.style.backgroundPosition = x;
  //   }

  //   document.addEventListener('mousemove', parallax)

  //   return ()=> {
  //     document.removeEventListener('mousemove', parallax)
  //   }
    

  // }, [])


  return (
    <>
    <div>
    <ParticleBackground/>
      <div> {/*adding relative position to the particle  */}
            
        <div id="home"  >
      

          {show && (<div className='fadeIn' style={{fontWeight: "bold", marginTop: "200px"}}>Hello!</div>)}
          {show && (
          <div className='fadeIn'>
            <div  style={{fontWeight: "bold", opacity: "0.4", marginTop: "100px"}}>This is</div>
            <div style={{fontWeight: "bold"}}>
              <LinearGradient gradient={['to right', '#00f ,#f0f']}>
                Nikhil Pulluri
              </LinearGradient>
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
