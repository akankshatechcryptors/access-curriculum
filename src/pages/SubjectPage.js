import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box, Grid } from '@mui/material';
import TopicCard from '../components/TopicCard';
import { motion } from 'framer-motion';

const physiologyTopics = [
  'General Physiology',
  'Hematology Physiology',
  'Nerve and Muscle Physiology',
  'GIT Physiology',
  'CVS Physiology',
  'Respiratory Physiology',
  'Renal Physiology',
  'Endocrine Physiology',
  'Reproductive System Physiology',
  'Neurophysiology',
  'Integrated Physiology',
];

const anatomyTopics = [
  'Thoracic Cage',
  'Posterior Triangle of Neck',
  'Abdominal Cavity',
  'Features of Individual Bones(Upper Limb)',
];

const biochemistryTopics = [
  'Biochemical Laboratory Tests'
];

const microbiologyTopics = [
  'Genitourinary & Sexually transmitted infections'
];

const pathologyTopics = [
  'Neoplastic disorders'
];

const pharmacologyTopics =[
  'Pharmacology'
];

const surgeryTopics= [
    'Shock'
];

const gynecologyTopics= [
  'Infertility'
];

const SubjectPage = () => {
  const { subject } = useParams();

  const subjectLabel = subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : 'Unknown';

  const breadcrumb = [
    { label: 'Access Curriculum', path: '/' },
    { label: subjectLabel, path: subject ? `/subject/${subject}` : '/' },
  ];

  const topics = subject && subject.toLowerCase() === 'physiology' 
    ? physiologyTopics 
    : subject && subject.toLowerCase() === 'anatomy' 
    ? anatomyTopics 
    : subject && subject.toLowerCase() === 'biochemistry' 
    ? biochemistryTopics 
    : subject && subject.toLowerCase() === 'microbiology' 
    ? microbiologyTopics
    : subject && subject.toLowerCase() === 'pathology' 
    ? pathologyTopics
    : subject && subject.toLowerCase() === 'pharmacology' 
    ? pharmacologyTopics
    : subject && subject.toLowerCase() === 'surgery' 
    ? surgeryTopics
    : subject && subject.toLowerCase() === 'gynecology' 
    ? gynecologyTopics
    : [];
  

  return (
    <Box sx={{ px: '2vw', pb: 3, position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <Typography variant="h4" gutterBottom className="breadcrumb" sx={{ marginBottom: '1em' }}>
          {breadcrumb.map((crumb, index) => (
            <span key={index}>
              <Link to={crumb.path} style={{ textDecoration: 'none', color: index === breadcrumb.length - 1 ? '#000000' : '#e21a23' }}>
                {crumb.label}
              </Link>
              {index < breadcrumb.length - 1 && ' > '}
            </span>
          ))}
        </Typography>
        <div className="accordion-wrapper">
          {topics.length > 0 ? (
            <Grid container spacing={3}>
              {topics.map((topic, index) => (
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: '100%',
                    '@media (min-width: 700px)': { flexBasis: '50%' },
                    '@media (min-width: 960px)': { flexBasis: '33.33%' },
                    p: 2,
                    paddingRight: '32px',
                  }}
                  key={index}
                >
                  <TopicCard topic={topic} subject={subject} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" color="#000000" align="center">
              No topics available yet.
            </Typography>
          )}
        </div>
      </motion.div>
    </Box>
  );
};

export default SubjectPage;