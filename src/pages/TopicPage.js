import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import CompetencyAccordion from '../components/CompetencyAccordion';
import { motion } from 'framer-motion';

// Import topic data
import * as GeneralPhysiology from '../subjects/physiology/GeneralPhysiology';
import * as HematologyPhysiology from '../subjects/physiology/HematologyPhysiology';
import * as NerveAndMusclePhysiology from '../subjects/physiology/NerveAndMusclePhysiology';
import * as GITPhysiology from '../subjects/physiology/GITPhysiology';
import * as CVSPhysiology from '../subjects/physiology/CVSPhysiology';
import * as RespiratoryPhysiology from '../subjects/physiology/RespiratoryPhysiology';
import * as RenalPhysiology from '../subjects/physiology/RenalPhysiology';
import * as EndocrinePhysiology from '../subjects/physiology/EndocrinePhysiology';
import * as ReproductiveSystemPhysiology from '../subjects/physiology/ReproductiveSystemPhysiology';
import * as Neurophysiology from '../subjects/physiology/Neurophysiology';
import * as IntegratedPhysiology from '../subjects/physiology/IntegratedPhysiology';
import * as UpperLimb from '../subjects/anatomy/UpperLimb';
import * as ThoracicCage from '../subjects/anatomy/ThoracicCage'
import * as AbdominalCavity from '../subjects/anatomy/AbdominalCavity';
import * as Posterior from '../subjects/anatomy/Posterior';
import * as BiochemicalLab from '../subjects/biochemistry/BiochemicalLabTests';
import * as Genitourinary from '../subjects/microbiology/Genitourinary';
import * as NeoplasticDisorders from '../subjects/pathology/NeoplasticDisorders';
import * as Pharmacology from '../subjects/pharmacology/Pharmacology'

// Map topic names to their data
const topicData = {
  'general-physiology': GeneralPhysiology,
  'hematology-physiology': HematologyPhysiology,
  'nerve-and-muscle-physiology': NerveAndMusclePhysiology,
  'git-physiology': GITPhysiology,
  'cvs-physiology': CVSPhysiology,
  'respiratory-physiology': RespiratoryPhysiology,
  'renal-physiology': RenalPhysiology,
  'endocrine-physiology': EndocrinePhysiology,
  'reproductive-system-physiology': ReproductiveSystemPhysiology,
  'neurophysiology': Neurophysiology,
  'integrated-physiology': IntegratedPhysiology,
  'features-of-individual-bones(upper-limb)': UpperLimb,
  'thoracic-cage': ThoracicCage,
  'abdominal-cavity': AbdominalCavity,
  'posterior-triangle-of-neck': Posterior,
  'biochemical-laboratory-tests': BiochemicalLab,
  'genitourinary-&-sexually-transmitted-infections': Genitourinary,
  'neoplastic-disorders': NeoplasticDisorders,
  'pharmacology' : Pharmacology
  
};

const TopicPage = () => {
  const { subject, topic } = useParams();

  const subjectLabel = subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : 'Unknown';
  const topicLabel = topic ? topic.replace(/-/g, ' ').charAt(0).toUpperCase() + topic.replace(/-/g, ' ').slice(1) : 'Unknown';

  const breadcrumb = [
    { label: 'Access Curriculum', path: '/' },
    { label: subjectLabel, path: `/subject/${subject || ''}` },
    { label: topicLabel, path: `/topic/${subject || ''}/${topic || ''}` },
  ];

  const topicInfo = topicData[topic.toLowerCase()];
  const competencies = topicInfo ? topicInfo.competencies : [];

  return (
    <Box sx={{ width: '100%', padding: '0 2vw', boxSizing: 'border-box', position: 'relative', minHeight: '100vh' }}>
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
        <div>
          {competencies.length > 0 ? (
            competencies.map((competency, index) => (
              <CompetencyAccordion
                key={index}
                competency={competency}
                subject={subject}
                topic={topic}
              />
            ))
          ) : (
            <Typography variant="h6" color="#000000" align="center">
              No competencies available for this topic.
            </Typography>
          )}
        </div>
      </motion.div>
    </Box>
  );
};

export default TopicPage;