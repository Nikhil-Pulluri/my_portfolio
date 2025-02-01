import React from 'react'
import ContactHome from '../Home/ContactHome'

function Contact() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>

      <div style={{color: "white", fontSize: "50px", fontWeight: "bold"}}>Connect With Me!</div>

      <div>
        <ContactHome/>
      </div>

    </div>
  )
}

export default Contact
