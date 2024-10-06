import React from 'react'
import Progress from "./Progress"


function Skills() {
  return (
    <div>
      <div style={{color: "white", fontSize: "40px", fontWeight: "bold"}}>🛠️ Technical Skills ⚙️</div>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "70px"}}>

        <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
          <div style={{color: "white", fontSize: "25px", fontWeight: "50px"}}>Programming Languages</div>

          <Progress image="cpp.svg" prof={85} height="48px" width="48px" />
          <Progress image="python.svg" prof={70} height="48px" width="48px"/>
          <Progress image="sql.svg" prof={70} height="48px" width="48px"/>

        </div>


        <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
          {/* web */}

          <div style={{color: "white", fontSize: "25px", fontWeight: "50px"}}>Web Technology</div>

          <div style={{display: "flex", flexDirection: "row", gap: "60px"}}>


                {/* flex 1 */}
                <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}> 
                    <Progress image="html.svg" prof={85} height="48px" width="48px" />
                    <Progress image="css.svg" prof={85} height="48px" width="48px" />
                    <Progress image="js.svg" prof={75} height="48px" width="48px" />
                    <Progress image="ts.svg" prof={65} height="48px" width="48px" />
                    <Progress image="tail.svg" prof={60} height="48px" width="48px" />
                    <Progress image="boot.svg" prof={70} height="48px" width="48px" />
                </div>

                <div style={{ width: "3px", backgroundColor: "white", height: "100%", opacity: "0.6"}}></div>

                {/* flex 2 */}
                <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
                    <Progress image="mongo.svg" prof={75} height="48px" width="48px" />
                    <Progress image="express.svg" prof={70} height="48px" width="48px" back="white" border="8px" pad="2px"/>
                    <Progress image="react.svg" prof={80} height="48px" width="48px" />
                    <Progress image="node.svg" prof={75} height="48px" width="48px" back="white" border="8px" pad="2px"/>
                    <Progress image="solidity.svg" prof={75} height="48px" width="48px" />
                    <Progress image="php.svg" prof={75} height="48px" width="48px" />
                </div>
          </div>


        </div>

      </div>
      
    </div>
  )
}

export default Skills
