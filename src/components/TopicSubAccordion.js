import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
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
import * as Pharmacology from '../subjects/pharmacology/Pharmacology';
import * as Shock from '../subjects/surgery/Shock';
import * as Infertility from '../subjects/gynecology/Infertility';



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
  'pharmacology' : Pharmacology,
  'shock': Shock,
  'infertility': Infertility
};

const TopicSubAccordion = ({ topic, competency, subject, parentTopic }) => {
  const subAccordionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const placeholderContent = [
    { title: "No Resource Available"},
  ];

  const topicInfo = topicData[parentTopic.toLowerCase()] || { content: {} };
  const competencyKey = competency.split(' ')[0];
  const items = topicInfo.content && topicInfo.content[competencyKey] && topicInfo.content[competencyKey][topic]
    ? topicInfo.content[competencyKey][topic]
    : placeholderContent;

  return (
    <motion.div
      variants={subAccordionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#e21a23' }} />}
          aria-controls={`panel-${topic}-content`}
          id={`panel-${topic}-header`}
        >
          <Typography variant="subtitle1">
            {topic}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: index * 0.1, type: 'tween' }}
              >
                <ListItem>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="link">
                    <ListItemText primary={item.title} />
                  </a>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default TopicSubAccordion;