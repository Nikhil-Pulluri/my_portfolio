import React, {useEffect, useRef} from 'react'

function Home() {

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
    <div>
      {/* do not forget to add the reference and change the id */}
      <div id="home" >
        <h1><span style={{fontSize: "30px"}}>This is </span><br/><span style={{fontWeight:"bold"}}>Nikhil Pulluri</span></h1>
      </div>
    </div>
  )
}

export default Home
