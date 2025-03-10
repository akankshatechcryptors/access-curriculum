import React from 'react';
import { Box, Grid } from '@mui/material';
import SubjectCard from '../components/SubjectCard';
import { motion } from 'framer-motion';
import BoyStudyingLottie from '../components/BoyStudyingLottie';

const subjects = ['Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology', 'Microbiology'];

const Home = () => {
  return (
    <Box sx={{ p: 3, position: 'relative' }}>
      {/* Boy Studying Animation in Bottom-Right Corner */}
      <BoyStudyingLottie />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <Grid container spacing={0.5} justifyContent="center">
          {subjects.map((subject, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              sx={{
                paddingLeft: '4px',
                paddingRight: '4px',
                paddingTop: 2,
                paddingBottom: 2,
                marginLeft: { xs: 0, sm: 0, md: "-5vw" },
                marginRight: { xs: 0, sm: 0, md: "-5vw" },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SubjectCard subject={subject} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Home;