import React from 'react'

function About() {
  return (
    <div id='about'>
      <center>
        <h1 style={{color: "white", fontSize: "60px", fontWeight: "bold"}}>About Me</h1>
      </center>

      <div id='profile'>
        <div><img style={{height: "250px", width: "250px"}} src="/beluga.jpg" alt="meh" /></div>
        <div style={{width: "700px"}}>
          <p style={{textAlign: "justify", color: "white"}}>Hi, I'm Nikhil Pulluri, a passionate Full Stack Developer specializing in building modern, scalable web applications. With a solid foundation in both front-end and back-end technologies, I thrive on creating seamless user experiences while ensuring efficient, robust functionality.

          <br/>
          <br/>

            I'm persuing a BTech degree in Computer Science and Engineering at SRM Univerity AP, Andhra Pradesh, and over the past few years, I've gained experience working with various web technologies, including JavaScript, React, Node.js, and Firebase. My passion for coding comes from the ability to solve complex problems and turn creative ideas into reality through elegant code.

            <br/>
            <br/>

            Outside of work, I'm always exploring the latest trends in tech, contributing to open-source projects, and working on side projects that challenge me to grow as a developer. When I'm not coding, you'll likely find me playing Call Of Duty Mobile 😅, Solving DSA and watching Movies.
            
</p>
        </div>
      </div>
    </div>
  )
}

export default About
