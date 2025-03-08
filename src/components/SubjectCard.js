import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SubjectCard = ({ subject }) => {
  const navigate = useNavigate();
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Card
        className="subject-card"
        onClick={() => navigate(`/subject/${subject.toLowerCase()}`)}
        sx={{ cursor: 'pointer' }}
      >
        <CardContent>
          <Typography variant="h4" color="#000000">
            {subject}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SubjectCard;