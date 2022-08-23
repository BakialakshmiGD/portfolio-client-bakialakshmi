import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <>
      <Box sx={{ my: 2, py: 2 }}>
        <Typography
          sx={{
            fontSize: {
              lg: "3rem",
            },
          }}
        >
        Full Stack Developer [MERN]
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
