import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TopicSubAccordion from './TopicSubAccordion';
import { motion } from 'framer-motion';

const CompetencyAccordion = ({ competency, subject, topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  const handleChange = (event, isExpanded) => {
    setIsOpen(isExpanded);
  };

  const defaultTopics = ['Books', 'Chapters', 'Videos', 'Cases', 'Q&A'];
  const physiologyTopics = ['Textbook', 'Table/Figure', 'Multimedia', 'Cases', 'Flashcards', 'Q & A'];
  const anatomyTopics = ['Textbooks', 'Dissection', 'Images & Tables', 'Multimedia', 'Cases', 'Q & A', 'Anatomy and Physiology'];
  const biochemistryTopics = ['Textbooks', 'Images & Tables','Cases', 'Q & A'];
  const pharmacologyTopics = ['Textbooks', 'Images & Tables', 'Multimedia', 'Cases', 'Flashcards', 'Q & A'];
  const microbiologyTopics = ['Textbooks', 'Images & Tables', 'Multimedia', 'Cases', 'Flashcards', 'Q & A'];
  const pathologyTopics = ['Textbooks', 'Images & Tables', 'Flashcards', 'Cases', 'Q & A'];
  const surgeryTopics= ['Textbook Chapters', 'Quick References', 'Differential Diagnosis', 'Clinical Cases', 'Patient Education', 'Boards & Beyond', 'Multimedia:Podcast', 'Review Questions', '2 Minute Medicine/2MM'];
  const gynecologyTopics= ['Textbook Chapters', 'Quick References', 'Differential Diagnosis', 'Clinical Cases', 'Patient Education', 'Boards & Beyond', 'Multimedia:Podcast', 'Review Questions', '2 Minute Medicine/2MM'];

  const topics = subject.toLowerCase() === 'physiology' 
    ? physiologyTopics 
    : subject.toLowerCase() === 'anatomy' 
    ? anatomyTopics 
    : subject.toLowerCase() === 'biochemistry' 
    ? biochemistryTopics
    : subject.toLowerCase() === 'microbiology' 
    ? microbiologyTopics
    : subject.toLowerCase() === 'pathology' 
    ? pathologyTopics
    : subject.toLowerCase() === 'pharmacology' 
    ? pharmacologyTopics
    : subject.toLowerCase() === 'surgery' 
    ? surgeryTopics
    : subject.toLowerCase() === 'gynecology' 
    ? gynecologyTopics
    : defaultTopics;

  const displayCompetency = typeof competency === 'string' ? competency : `Competency ${competency}`;

  return (
    <motion.div
      variants={accordionVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.4, type: 'tween' }}
    >
      <Accordion className="accordion" onChange={handleChange} expanded={isOpen}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#e21a23' }} />}
          aria-controls={`panel-${competency}-content`}
          id={`panel-${competency}-header`}
        >
          <Typography variant="h6">
            {displayCompetency}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {topics.map((topicName) => (
              <TopicSubAccordion
                key={topicName}
                topic={topicName}
                competency={competency}
                subject={subject}
                parentTopic={topic}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default CompetencyAccordion;