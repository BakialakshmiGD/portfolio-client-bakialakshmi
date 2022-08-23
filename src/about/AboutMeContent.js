import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutMeContent = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 2, my: 2 }}>
        <Typography variant="body1" sx={{ py: 1 }}>
          I am Bakialakshmi.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
         Completed Zen Class Full Stack Development Programme @{" "}
          <Box
            component="a"
            target="_blank"
            href="https://www.guvi.in"
            sx={{ color: "white" }}
          >
            Guvi
          </Box>
          , Chennai.
        </Typography>
        
        <Typography variant="body1" sx={{ py: 1 }}>
          I am passionate about building web Applications and eager to learn new
          things around Development.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          A self-motivated individual with knack for getting things done.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          Looking for an entry-level position in Full stack development to expand my knowledge and skills 
          and work for the overall growth of an organization.
        </Typography>
      </Container>
    </>
  );
};

export default AboutMeContent;
