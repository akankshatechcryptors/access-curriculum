import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/MGH.svg'; // Import the logo

const Header = () => {
  const location = useLocation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // Detect xs screens (< 600px)

  const getHeaderText = () => {
    if (location.pathname === '/') return 'Access Curriculum';
    const subject = location.pathname.split('/')[2]; // Extract subject from /subject/:subject
    return subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : 'Access Curriculum';
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Mobile layout (xs screens)
  if (isXs) {
    return (
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          mb: 4
        }}
      >
        {/* Logo centered above header text on xs */}
        <img
          src={Logo}
          alt="MH Logo"
          style={{
            display: 'block', // Ensure it behaves as a block element for centering
            margin: '0 auto 1rem auto', // Center horizontally and add spacing below
            height: '40px',
            boxShadow: '4px 4px 8px rgb(226, 26, 35)',
          }}
        />
        {/* Header text below logo on xs */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <Box className="header" sx={{ p: 2, mb: 4 }}>
            <Typography
              variant="h3"
              align="center"
              color="#000000"
            >
              {getHeaderText()}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    );
  }

  // Desktop layout (sm and above)
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Logo on the left side */}
      <img
        src={Logo}
        alt="MH Logo"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '60px',
          boxShadow: '4px 4px 8px rgb(226, 26, 35)',
        }}
      />
      {/* Header text container */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <Box className="header" sx={{ p: 2, mb: 4 }}>
          <Typography
            variant="h3"
            align="center"
            color="#000000"
          >
            {getHeaderText()}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Header;