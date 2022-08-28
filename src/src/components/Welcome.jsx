import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%'}}>
     
      <Typography variant="h3" color='blue' gutterBottom>
      Welcome to Wortise Blog
      </Typography>
    
      <Typography variant="h4" gutterBottom>
      Below you can see all the existing posts in Wortise Blog
      </Typography>

    </Box>
  );
}
