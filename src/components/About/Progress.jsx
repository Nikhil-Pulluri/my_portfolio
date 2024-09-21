import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';

export default function CircularProgressDeterminate(props) {
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   }, 800);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>

          <img src={`/${props.image}`} style={{height: `${props.height}`, width: `${props.width}`}}/>

        <CircularProgress determinate value={props.prof} size="md" variant="plain">
          <div style={{color: "white", fontSize: "13px"}}>{props.prof}</div>
        </CircularProgress>


    </Box>
  );
}
