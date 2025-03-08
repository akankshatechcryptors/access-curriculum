import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box } from '@mui/material';

const WaveBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed', // Changed from absolute to fixed
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh', // Full viewport height
       
        pointerEvents: 'none', // Prevent the animation from interfering with mouse events
        opacity: 0.3, // Ensure full visibility
      }}
    >
      <DotLottieReact
        src="https://lottie.host/27f28252-6c51-470d-aeb6-ff3b5b5066c1/jkfDHDCjHz.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};

export default WaveBackground;