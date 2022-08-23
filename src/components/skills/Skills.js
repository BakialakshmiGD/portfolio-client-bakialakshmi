import { Box, Container, Typography } from "@mui/material";
import React from "react";

import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <>
      <Box sx={{ py: 6.5, my: 6.5 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              My Skills
            </Typography>
          </Box>

          <SkillsCard />
        </Container>
      </Box>
    </>
  );
};

export default Skills;
