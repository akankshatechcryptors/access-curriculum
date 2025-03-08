import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopicCard = ({ topic, subject }) => {
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
        className="card"
        onClick={() => navigate(`/topic/${subject}/${topic.toLowerCase().replace(/ /g, '-')}`)}
        sx={{ cursor: 'pointer', p: 2 }}
      >
        <CardContent>
          <Typography variant="h5" color="#000000">
            {topic}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TopicCard;