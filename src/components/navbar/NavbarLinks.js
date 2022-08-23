import { Stack } from "@mui/material";
import React from "react";

import NavLinkText from "./NavLinkText";

const NavbarLinks = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexGrow: 2,
          display: {
            md: "flex",
            justifyContent: "flex-end",
          },
        }}
        spacing={6}
      >
        <NavLinkText name="Home" href="/#home" />
        <NavLinkText name="About" href="/#about" />
        <NavLinkText name="Skills" href="/#skills" />
        <NavLinkText name="Projects" href="/#projects" />
        <NavLinkText name="Contact" href="/#contact" />

      
      </Stack>
    </>
  );
};

export default NavbarLinks;
