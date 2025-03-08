import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box } from '@mui/material';

const BoyStudyingLottie = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0, // Changed from left: 0 to right: 0
        width: '150px', // Adjust size as needed
        height: '150px',
       
      }}
    >
      <DotLottieReact
        src="https://lottie.host/39b5bf61-1252-426a-9b39-f422bcaa157b/q2tBhkXjd1.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default BoyStudyingLottie;