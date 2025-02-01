"use client"
import LeetCodeProfile from "../Leet"
import React from 'react'
import Card from "./Card"

function Works() {
  return (
    <div>
      <center>
      <h1 style={{color: "white", fontSize: "60px", fontWeight: "bold"}}>My Works</h1>
      <div className="dark chart-wrapper mx-auto flex max-w-6xl flex-col items-start justify-center gap-4 p-2 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">

      <Card project="Mindful AI" desc="Mindful AI is a therapist chatbot with therapy service to the mentally challenged people with smooth responses from the AI. All the user data and the chat data is stored and user has complete privacy to chat with my chatbot" git="https://github.com/Nikhil-Pulluri/Mindful-AI"/>

        <Card project="XinRaise" desc="XinRaise is a groundbreaking platform built to empower innovators and small-scale businesses by providing a secure space to share ideas and access funding. Leveraging the power of the XDC Network, XinRaise offers a decentralized solution that ensures the integrity of ideas while facilitating direct engagement between creators and investors." git="https://github.com/Nikhil-Pulluri/XinRaise"/>

        <Card project="Role Based Access Control" desc="Role Based Access Control is a web application where people company's admins can manage the permissions related to the access of the dashboard and alter employee's detais. Employees can only access thier dashboard only if the access is given by the admin" git="https://github.com/Nikhil-Pulluri/Role-Based-Access-Control"/>

      </div>





      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">



        <Card project="Socio-Marketo" desc="Socio-Marketo is a decentralized social media platform that leverages blockchain technology to provide users with ownership and authenticity of their content. This repository contains the codebase for Socio-Marketo, including the smart contracts, web application built with Next.js, and mobile application built with Expo React Native." git="https://github.com/Nikhil-Pulluri/Socio-Marketo"/>

        <Card project="Auto-Word-Completion" desc="An auto word completion tool using a TRIE (prefix tree) efficiently suggests word completions by storing words character by character. As users type, the tool quickly traverses the TRIE to predict possible words based on the input prefix. This approach ensures fast word lookups, making it ideal for applications like search engines or text editors." git="https://github.com/Nikhil-Pulluri/Auto-Word-Completion"/>

        <Card project="TCP-Server-Cpp" desc="This project demonstrates the implementation of a basic TCP server using C++. The server communicates with a client application, providing options to access a database, perform calculations, or exit." git="https://github.com/Nikhil-Pulluri/TCP-Server-Cpp"/>

      </div>



      <div className="grid w-full flex-1 gap-6">
        

        <LeetCodeProfile/>
      </div>




    </div>


    
      </center>


        {/* <center>
          <div className="text-white text-2xl">This website is still under construction. Kindly connect with me if you have to using below social handles!</div>
          <div className="border-white"><ContactHome/></div>
        </center> */}

    </div>
  )
}

export default Works
