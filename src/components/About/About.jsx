import React from 'react'
import Skills from './Skills'

function About() {
  return (
    <div>
      <center>
        <h1 style={{color: "white", fontSize: "60px", fontWeight: "bold"}}>About Me</h1>
      </center>


        <div id='profile'>
              <div>
                <img style={{height: "250px", width: "250px", borderRadius: "50%"}} src="/beluga.jpg" alt="meh" />
              </div>

              <div style={{width: "700px"}}>
                <p style={{textAlign: "justify", color: "white"}}>
                Hey there! I'm <span style={{fontWeight: "bold"}}>Nikhil Pulluri</span>, a Full Stack Web3 Developer who's all about building decentralized, modern applications. I love combining front-end and back-end skills with blockchain technology to create secure and scalable solutions that are future-ready.
                <br/><br/>
                I'm currently pursuing a BTech in Computer Science and Engineering at SRM University AP, Andhra Pradesh. Along the way, I've dived into JavaScript, React, Node.js, Solidity, Ethereum, and more. What excites me about Web3 is the chance to solve complex challenges and bring innovative ideas to life through smart contracts and decentralized apps (dApps).
                <br/><br/>
                When I'm not knee-deep in code, you'll find me geeking out on the latest blockchain trends or tinkering with side projects to sharpen my skills. And when I'm taking a break from tech, you can catch me playing Call of Duty Mobile 😅, cracking DSA problems, or chilling with a good movie.
                </p>
              </div>
        </div>




      <center style={{marginTop: "100px", padding: "0px 130px"}}><Skills/></center>

    </div>
  )
}

export default About
