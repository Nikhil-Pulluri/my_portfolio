import React from 'react'


function Skills() {
  return (
    <div>
      <div style={{color: "white", fontSize: "60px", fontWeight: "bold"}}>Skills</div>

      <center>
        <div style={{paddingRight: "30px", paddingLeft: "30px", marginTop: "50px", display: "flex", justifyContent: "center", gap: "400px"}}>
          <div style={{height: "500px", boxShadow: "5px white", color: "white"}}>
            <div style={{color: "white", fontSize: "25px", fontWeight: "bold"}}>Programming Languages</div>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "30px", fontSize: "16px", fontWeight: "normal"}}>
              <div><img style={{height: "60px", width: "60px"}} src="/cpp.png" alt="" /></div>
              <div><img style={{height: "60px", width: "60px"}} src="/python.png" alt="" /></div>
              <div><img style={{height: "37.8px", width: "72px"}} src="/sql.png" alt="" /></div>
              <div><img style={{height: "37.8px", width: "72px"}} src="/php.png" alt="" /></div>
            </div>
          </div>
          <div style={{height: "500px", color: "white"}}>
          <div style={{color: "white", fontSize: "25px", fontWeight: "bold"}}>Web Technology</div>

          </div>

        </div>

        <div style={{height: "500px", color: "white", fontSize: "20px", fontWeight: "bold"}}></div>
      </center>
    </div>
  )
}

export default Skills
