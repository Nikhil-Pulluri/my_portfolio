import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Works from "./components/Works/Works"
// import ContactHome from "./components/Home/ContactHome"
import { useEffect } from "react"
import { animate, scroll } from "motion";
import Charts from "./components/Test"

// import LeetCodeProfile from "./components/Leet"







function Layout() {

  useEffect(() => {
    // Ensure the element is in the DOM before trying to animate
    const progressElement = document.querySelector('.progress');

    if (progressElement) {
      scroll(animate(".progress", {
        strokeDasharray: ["0,1", "1,1"]
      }));
    }
  }, []);

  return (
    <>

      {/* scroll animation*/}
      <div id="scroll">
        <svg id="scroll-svg" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
        </svg>
      </div>


      <Navbar/>
      <Home/>


      {/* <div style={{ position: "absolute", bottom: "45%", left: "65%", top: "45%"}}>
        <CodeEditor/>
      </div> */}


      <div id="about-outer">
        <div id="about"
        style={{height: "auto", marginBotton: "40px", paddingBottom: "50px"}}
        >
          <About/>
        </div>
      </div>

      <div id="work-outer">
        <div id="work" style={{height: "auto", marginBottom: "40px", paddingBottom: "50px"}}>
          <Works/>
          {/* <Charts/> */}

        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <div id="work" style={{height: "auto", marginBottom: "40px", paddingBottom: "50px", padding: "20px"}}>
          <LeetCodeProfile/>

        </div>
      </div> */}
      
      

      {/* <div
      style={{height: "auto", paddingTop: "50px", marginBottom: "400px"}}
      >
        <CodeEditor/>
      </div> */}

      <div
      style={{backgroundColor: "#1a1a1a",height: "auto", paddingTop: "50px"}}
      >
        <Footer/>
      </div>


      {/* <Card
          className="dark max-w-xs" x-chunk="charts-01-chunk-5"
        >
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Move</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  562/600
                  <span className="text-sm font-normal text-muted-foreground">
                    kcal
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Exercise</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  73/120
                  <span className="text-sm font-normal text-muted-foreground">
                    min
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Stand</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  8/12
                  <span className="text-sm font-normal text-muted-foreground">
                    hr
                  </span>
                </div>
              </div>
            </div>
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
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "stand",
                    value: (8 / 12) * 100,
                    fill: "var(--color-stand)",
                  },
                  {
                    activity: "exercise",
                    value: (46 / 60) * 100,
                    fill: "var(--color-exercise)",
                  },
                  {
                    activity: "move",
                    value: (245 / 360) * 100,
                    fill: "var(--color-move)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card> */}

      
    </>
  )
}

export default Layout
