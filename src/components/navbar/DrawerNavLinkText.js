import { Typography } from "@mui/material";
import React from "react";

const DrawerNavLinkText = ({ name, href, closeDrawerFunc }) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: 'cursive',
          color: "#e07ebb",
          textDecoration: "underline",
        }}
        variant="h1"
        component="a"
        href={href}
        onClick={closeDrawerFunc}
      >
        {name}
      </Typography>
    </>
  );
};

export default DrawerNavLinkText;
