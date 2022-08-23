import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectArray from "./projectArray";

const Projects = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="md">
          <Box>

            <Typography variant="h3" align="center" sx={{ mb: 4 }}>
              Projects
            </Typography>
            
          </Box>

          <Grid container justifyContent="center" sx={{ py: 6 }} spacing={6}>
            {ProjectArray.map((projectObj, index) => (
              <Grid item  lg={4.5} key={index}>
                <ProjectCard projectObj={projectObj} />
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </>
  );
};

export default Projects;
