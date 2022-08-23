import { Box, CardContent, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import react from "../../assets/projects/react.png";
import ProjectButtonComponent from "./ProjectButtonComponent";

const ProjectCard = ({ projectObj }) => {

  const { clientLink, siteLink, headerName, } = projectObj;

  return (
    <>
      <Box
        sx={{
          background: "white",
          my: 3,
          py: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          "&:hover": {
            boxShadow: "2px 2px 4px",
          },
        }}
        component={Paper}
        elevation={10}
      >
    

        <Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "#003399" }}
            >
              {headerName}
            </Typography>
         
              <Stack
                direction="row"
                sx={{ py: 2, border: "1px solid green", mt: 2 }}
                justifyContent="space-around"
              >
                <Box sx={{ height: "50px", objectFit: "cover" }}>
                  <img src={react} alt="" height="100%" />
                </Box>
              </Stack>

          </CardContent>

          <Box>
            <ProjectButtonComponent
              clientLink={clientLink}
              siteLink={siteLink}
            />
          </Box>

      

        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
