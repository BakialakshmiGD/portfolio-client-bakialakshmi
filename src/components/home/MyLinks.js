import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";

import FilePresentIcon from "@mui/icons-material/FilePresent";
import GitHubIcon from "@mui/icons-material/GitHub";
const MyLinks = () => {
  return (
    <>
      <Stack direction="row" alignItems="center"> 
  

        <Box>
          <IconButton
            component="a"
            href="https://github.com/BakialakshmiGD"
            target="_blank"
          >
            <Avatar
              sx={{
                background: "#e07ebb",
                transition: " .5s ease-out",

                "&:hover": {
                  background: "#db4ba5",
                  transform: "scale(1.1)",
                  transition: " .5s ease-in",
                },
              }}
            >
              <GitHubIcon />
            </Avatar>
          </IconButton>
        </Box>

        <Box>
          <Button
            variant="contained"
            component="a"
            href="https://drive.google.com/file/d/14bybNPFpQHl2RQMBBehyhw6poSaAnZ2Q/view"
            target="_blank"
            size="large"
            sx={{
              background: "#e07ebb",
              transition: " .5s ease-out",
              ml: 3,
              "&:hover": {
                background: "#db4ba5",
                color: "#f0ebef",
                transform: "scale(1.1)",
                px: { xs: 2, md: 5 },
                ml: 3,
                transition: " .5s ease-in",
              },
            }}
            endIcon={<FilePresentIcon />}
          >
            My Resume
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default MyLinks;
