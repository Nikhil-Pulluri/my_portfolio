import React from 'react'
import Progress from "./Progress"


function Skills() {
  return (
    <div>
      <div style={{color: "white", fontSize: "40px", fontWeight: "bold"}}>🛠️ Technical Skills ⚙️</div>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "70px"}}>

        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <div style={{color: "white", fontSize: "25px", fontWeight: "50px"}}>Programming Languages</div>

          <Progress image="cpp.png" prof={25} />

        </div>


        <div>
          {/* web */}
        </div>

      </div>
      
    </div>
  )
}

export default Skills
