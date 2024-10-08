import React from 'react'

function AboutMobile() {
  return (
    <center>
      <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
        <div>
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Me</h1>
        </div>


        {/* profile pic */}
        <div>
          <img src="/beluga.jpg" alt="meh" style={{height: "180px", width: "180px", border: "none", borderRadius: "50%"}} />
        </div>


        {/* about */}

        <div>
        <div className="text-justify text-white px-5">
            Hey there! I'm <span className="font-bold">Nikhil Pulluri</span>, a Full Stack Web3 Developer who's all about building decentralized, modern applications. I love combining front-end and back-end skills with blockchain technology to create secure and scalable solutions that are future-ready.
            <br /><br />
            I'm currently pursuing a BTech in Computer Science and Engineering at SRM University AP, Andhra Pradesh. Along the way, I've dived into JavaScript, React, Node.js, Solidity, Ethereum, and more. What excites me about Web3 is the chance to solve complex challenges and bring innovative ideas to life through smart contracts and decentralized apps (dApps).
            <br /><br />
            When I'm not knee-deep in code, you'll find me geeking out on the latest blockchain trends or tinkering with side projects to sharpen my skills. And when I'm taking a break from tech, you can catch me playing Call of Duty Mobile 😅, cracking DSA problems, or chilling with a good movie.
          </div>
        </div>
      </div>
    </center>
  )
}

export default AboutMobile
