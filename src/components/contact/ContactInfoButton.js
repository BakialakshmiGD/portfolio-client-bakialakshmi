import { Avatar, Box } from "@mui/material";
import React from "react";

const ContactInfoButton = ({ iconItem }) => {
  return (
    <>
      <Box>
        <Avatar
        
          sx={{
            background: "#e07ebb",
            transition: " .7s ease-out",

            "&:hover": {
              background: "#db4ba5",
              transform: "scale(1.20)",
              transition: " .5s ease-out",
            },
          }}
        >
          {iconItem}
        </Avatar>
      </Box>
    </>
  );
};

export default ContactInfoButton;
