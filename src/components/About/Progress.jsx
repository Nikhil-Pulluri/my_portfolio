import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';
import {useState, useEffect} from 'react'

// export default function CircularProgressDeterminate(props) {

// testing git push


//   return (
//     <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>

//           <img src={`/${props.image}`} style={{height: `${props.height}`, width: `${props.width}`}}/>

//         <CircularProgress determinate value={props.prof} size="md" variant="plain">
//           <div style={{color: "white", fontSize: "13px"}}>{props.prof}</div>
//         </CircularProgress>


//     </Box>
//   );
// }


export default function Progress(props) {


  const [isLoading, setIsLoading] = React.useState(false);


  const [prof, setProf] = useState(0);


  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: prof,
    onComplete: () => {
      setIsLoading(false);
    },
  });




    
useEffect(()=>{


  const navbar = document.getElementById('navbar')

  const handleScroll = ()=> {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;





    if (scrollTop > 1160) {
      // Scrolling down
      handleButtonClick(props.prof)
    } 

  }

  window.addEventListener('scroll', handleScroll);

  return ()=> {
    window.removeEventListener('scroll', handleScroll)
  }

}, [])



  const handleButtonClick = (val) => {
    if (isLoading) {
      setIsLoading(false);
     

    }  else {
      setIsLoading(true);
      setProf((prev)=>val)
    }
  };

  return (
<>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>

             <img src={`/${props.image}`} style={{height: `${props.height}`, width: `${props.width}`}}/>

            <CircularProgress determinate value={value1} size="md" variant="plain">
              
                <Typography>
                  <div style={{color: "#ffff", opacity: "1", fontSize: "13px"}}>
                  {value1}
                  </div>
                </Typography>
            </CircularProgress>


        </Box>

</>
  );
}

