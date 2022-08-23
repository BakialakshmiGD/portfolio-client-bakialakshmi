import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AboutMeContent from "./AboutMeContent";

const AboutMe = () => {
  return (
    <>
      <Box sx={{ py: 6, my: 6 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              About Me
            </Typography>
          </Box>
          <AboutMeContent />
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
