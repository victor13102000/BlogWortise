import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Post({post}) {
    console.log(post)
  const [expanded, setExpanded] = React.useState(false)
  var handleChange = function (panel) { return function (event, isExpanded) {
    setExpanded(isExpanded ? panel : false);
}; };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {post.user.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{post.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         {post.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
