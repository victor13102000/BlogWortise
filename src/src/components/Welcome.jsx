import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types({ userName }) {
  
  return (
    <Box sx={{ width: "100%" }}>
      {userName ? (
        <Typography variant="h3" color="blue" gutterBottom>
          Welcome to profile {userName}
        </Typography>
      ) : (
        <Typography variant="h3" color="blue" gutterBottom>
          Welcome to Wortise Blog
        </Typography>
      )}
      {userName ? (
        <Typography variant="h4" gutterBottom>
          Here you can see all his articles
        </Typography>
      ) : (
        <Typography variant="h4" gutterBottom>
          Below you can see all the existing posts in Wortise Blog
        </Typography>
      )}
    </Box>
  );
}