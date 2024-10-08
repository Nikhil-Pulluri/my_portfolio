import React from 'react'
import Card from './Card'
import LeetCodeProfile from '../Leet'

function WorkMobile() {
  return (
    <center style={{padding: "0px 20px"}}>
      <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>

      <div style={{color: "white", fontSize: "60px", fontWeight: "bold"}}>My Works</div>

      <div>
        <Card project="XinRaise" desc="XinRaise is a groundbreaking platform built to empower innovators and small-scale businesses by providing a secure space to share ideas and access funding. Leveraging the power of the XDC Network, XinRaise offers a decentralized solution that ensures the integrity of ideas while facilitating direct engagement between creators and investors." git="https://github.com/Nikhil-Pulluri/XinRaise"/>
      </div>

      <div>
        <Card project="Socio-Marketo" desc="Socio-Marketo is a decentralized social media platform that leverages blockchain technology to provide users with ownership and authenticity of their content. This repository contains the codebase for Socio-Marketo, including the smart contracts, web application built with Next.js, and mobile application built with Expo React Native." git="https://github.com/Nikhil-Pulluri/Socio-Marketo"/>
      </div>

      <div>
        <Card project="TCP-Server-Cpp" desc="This project demonstrates the implementation of a basic TCP server using C++. The server communicates with a client application, providing options to access a database, perform calculations, or exit." git="https://github.com/Nikhil-Pulluri/TCP-Server-Cpp"/>
      </div>

      <div>
        <Card project="Auto-Word-Completion" desc="An auto word completion tool using a TRIE (prefix tree) efficiently suggests word completions by storing words character by character. As users type, the tool quickly traverses the TRIE to predict possible words based on the input prefix. This approach ensures fast word lookups, making it ideal for applications like search engines or text editors." git="https://github.com/Nikhil-Pulluri/Auto-Word-Completion"/>
      </div>

      <div>
        <LeetCodeProfile/>
      </div>

      </div>
    </center>
  )
}

export default WorkMobile
