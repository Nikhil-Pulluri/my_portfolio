"use client"
import React from 'react'
// import Progress from "./Progress"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

export const description = "A collection of health charts."


// function Skills() {
//   return (
//     <div>
//       <div style={{color: "white", fontSize: "40px", fontWeight: "bold"}}>🛠️ Technical Skills ⚙️</div>

//       <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "70px"}}>

//         <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
//           <div style={{color: "white", fontSize: "25px", fontWeight: "50px"}}>Programming Languages</div>

//           <Progress image="cpp.svg" prof={85} height="48px" width="48px" />
//           <Progress image="python.svg" prof={70} height="48px" width="48px"/>
//           <Progress image="sql.svg" prof={70} height="48px" width="48px"/>

//         </div>


//         <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
//           {/* web */}

//           <div style={{color: "white", fontSize: "25px", fontWeight: "50px"}}>Web Technology</div>

//           <div style={{display: "flex", flexDirection: "row", gap: "60px"}}>


//                 {/* flex 1 */}
//                 <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}> 
//                     <Progress image="html.svg" prof={85} height="48px" width="48px" />
//                     <Progress image="css.svg" prof={85} height="48px" width="48px" />
//                     <Progress image="js.svg" prof={75} height="48px" width="48px" />
//                     <Progress image="ts.svg" prof={65} height="48px" width="48px" />
//                     <Progress image="tail.svg" prof={60} height="48px" width="48px" />
//                     <Progress image="boot.svg" prof={70} height="48px" width="48px" />
//                 </div>

//                 <div style={{ width: "3px", backgroundColor: "white", height: "100%", opacity: "0.6"}}></div>

//                 {/* flex 2 */}
//                 <div style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
//                     <Progress image="mongo.svg" prof={75} height="48px" width="48px" />
//                     <Progress image="express.svg" prof={70} height="48px" width="48px" back="white" border="8px" pad="2px"/>
//                     <Progress image="react.svg" prof={80} height="48px" width="48px" />
//                     <Progress image="node.svg" prof={75} height="48px" width="48px" back="white" border="8px" pad="2px"/>
//                     <Progress image="solidity.svg" prof={75} height="48px" width="48px" />
//                     <Progress image="php.svg" prof={75} height="48px" width="48px" />
//                 </div>
//           </div>


//         </div>

//       </div>
      
//     </div>
//   )
// }



function Skills() {
  


  

  return (
    <div>
      <div style={{color: "white", fontSize: "40px", fontWeight: "bold"}}>Skills</div>

      <Card className="dark bg-black-700 w-full max-w-4xl mx-auto shadow-none border-none mt-2" x-chunk="charts-01-chunk-0"> {/* Increased width */}
  
  <CardContent>
    <ChartContainer
      config={{
        steps: {
          label: "Steps",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <BarChart
  accessibilityLayer
  margin={{
    left: -4,
    right: -4,
  }}
  data={[
    {  steps: 85, label: "C++" },
    { steps: 70, label: "Python" },
    { steps: 70, label: "SQL" },
    { steps: 85, label: "HTML" },
    { steps: 85, label: "CSS" },
    { steps: 75, label: "JS" },
    { steps: 70, label: "TS" },
    { steps: 75, label: "Bootstrap" },
    { steps: 75, label: "Tailwind" },
    { steps: 75, label: "MongoDB" },
    { steps: 75, label: "React JS" },
    { steps: 75, label: "Express JS" },
    { steps: 75, label: "Node JS" },
    { steps: 75, label: "Solidity" },
    { steps: 75, label: "PHP" },
    // Add more entries as needed
  ]}
  barSize={47}
  barCategoryGap="60%"
>
  <Bar
    dataKey="steps"
    fill="var(--color-steps)"
    radius={5}
    fillOpacity={0.6}
    activeBar={<Rectangle fillOpacity={0.8} />}
  />
  {/* <YAxis domain={[0, '10']} /> */}
  <XAxis
    dataKey="label" // Updated to use the label property
    tickLine={false}
    axisLine={false}
    tickMargin={4}
  />
<ChartTooltip
  cursor={false}
  content={({ active, payload }) => {
    if (active && payload && payload.length) {
      const { label, steps } = payload[0].payload; // Access label and steps from payload
      return (
        <div className="tooltip bg-[#1a1a1a]  p-4 ">
          <div>Skill : {label}</div> 
          <div>Proficiency : {steps}</div>
        </div>
      );
    }
    return null; // Return null if not active or payload is empty
  }}
/>
</BarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex-col items-start gap-1">
    <CardDescription>
      Over the past 2 years, I have gained{" "}
      <span className="font-medium text-foreground">15</span> technical skills.
    </CardDescription>
  </CardFooter>
</Card>







    </div>
  )
}

export default Skills
