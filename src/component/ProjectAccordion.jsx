import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import MyCard from './MyCard';
import { useSelector } from 'react-redux';

const ProjectAccordion = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const projects = useSelector(state => state.projects.projects);

    return (
        <div>
            {
                projects.map((project) => (
                    <div className="mt-1" key={project.id}>
                        <Accordion
                            expanded={expanded === `panel${project.id}`}
                            onChange={handleExpansion(`panel${project.id}`)}
                            slots={{ transition: Fade }}
                            slotProps={{ transition: { timeout: 400 } }}
                            sx={{
                                '& .MuiAccordion-region': { height: expanded === `panel${project.id}` ? 'auto' : 0 },
                                '& .MuiAccordionDetails-root': { display: expanded === `panel${project.id}` ? 'block' : 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>{project.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='flex flex-wrap gap-3'>
                                    <MyCard tasks={project.tasks} ID={project.id} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))
            }

        </div>
    );

}

export default ProjectAccordion
