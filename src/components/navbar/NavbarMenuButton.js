import { Box, IconButton } from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

const NavbarMenuButton = ({ openDrawerFunc }) => {
  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <IconButton
          sx={{
            color: "#e07ebb",
            background: "#e07ebb",
            "&:hover": {
              background: "#e07ebb",
              color: "#f0ebef",
            },
          }}
          onClick={openDrawerFunc}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default NavbarMenuButton;
