"use client"

import {
  // Area,
  // AreaChart,
  // Bar,
  // BarChart,
  // CartesianGrid,
  // Label,
  // LabelList,
  // Line,
  // LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  // Rectangle,
  // ReferenceLine,
  // XAxis,
  // YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  // ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart"
// import { Separator } from "@/components/ui/separator"

export const description = "A collection of health charts."
import React, { useEffect, useState } from 'react';
import { fetchLeetCodeData } from '@/Utilities/leetcode';

const LeetCodeProfile = () => {
  const [data, setData] = useState(null); // State to store the fetched data
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchLeetCodeData()
      .then(fetchedData => setData(fetchedData)) 
      // console.log(data)// Store the fetched data in the state
      .catch(err => setError(err)); // Store any error in the state
  }, []); // Empty array to ensure it runs only once on mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">

  <Card className="dark max-w-full "> {/* Full width card */}
    <CardContent className="flex flex-col gap-4 p-10">
      <div className="flex flex-col items-center gap-6">
        <div className="text-white text-center font-bold text-xl">LeetCode Profile</div>

        {/* Easy */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-foreground">Easy</div>
          <div className="text-2xl font-bold">
            {data.easySolved}/{data.totalEasy}
          </div>
          <span className="text-sm font-normal text-muted-foreground">questions</span>
        </div>

        {/* Medium */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-foreground">Medium</div>
          <div className="text-2xl font-bold">
            {data.mediumSolved}/{data.totalMedium}
          </div>
          <span className="text-sm font-normal text-muted-foreground">questions</span>
        </div>

        {/* Hard */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-foreground">Hard</div>
          <div className="text-2xl font-bold">
            {data.hardSolved}/{data.totalHard}
          </div>
          <span className="text-sm font-normal text-muted-foreground">questions</span>
        </div>

        {/* Total Solved */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-foreground">Total Solved</div>
          <div className="text-2xl font-bold">
            {data.totalSolved}/{data.totalQuestions}
          </div>
          <span className="text-sm font-normal text-muted-foreground">questions</span>
        </div>
      </div>

      {/* Radial Bar Chart */}
      <ChartContainer
        config={{
          move: {
            label: "Move",
            color: "hsl(var(--chart-1))",
          },
          exercise: {
            label: "Exercise",
            color: "hsl(var(--chart-2))",
          },
          stand: {
            label: "Stand",
            color: "hsl(var(--chart-3))",
          },
        }}
        className="mx-auto aspect-square w-full max-w-[98%]" // Almost full-width for the chart
      >
        <RadialBarChart
          margin={{ left: -20, right: -20, top: -20, bottom: -20 }} // Adjusted margins for larger space
          data={[
            {
              activity: "stand",
              value: (data.hardSolved / data.totalHard) * 100,
              fill: "var(--color-stand)",
            },
            {
              activity: "exercise",
              value: (data.mediumSolved / data.totalMedium) * 100,
              fill: "var(--color-exercise)",
            },
            {
              activity: "move",
              value: (data.easySolved / data.totalEasy) * 100,
              fill: "var(--color-move)",
            },
          ]}
          innerRadius="12%" // Bigger chart
          barSize={40} // Larger bars
          startAngle={90}
          endAngle={450}
        >

          
          <PolarAngleAxis type="number" domain={[0, 100]} dataKey="value" tick={false} />
          <RadialBar dataKey="value" background cornerRadius={7} />
        </RadialBarChart>
      </ChartContainer>
    </CardContent>
    <div className="text-white text-center pb-6 flex-col gap-3 items-center">
      {/* <div><img src="./leetcode.png" alt="" style={{height: "20px", width: "20px"}}/></div> */}
      <div><a href="https://leetcode.com/u/nikhilpulluri/">Click Here</a></div>
    </div>
  </Card>



</div>

  );
};

export default LeetCodeProfile;
