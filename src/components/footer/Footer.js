import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="xs">
          <Box sx={{ transform: "scale(1.0)" }}>
            <Typography
              variant="subtitle"
              sx={{
                color: "#e07ebb",
                fontFamily: `cursive`,
                fontSize: { xs: "small", md: "medium" },
                ml: { xs: 5, md: 1 },
              }}
              
            >
              Designed and Developed by {" "}
              <Box
                target="_blank"
                component="a"
                 href="/"
                 sx={{
                  color: "#e07ebb",
                }}
              >
              Bakialakshmi.G.D
              </Box>{" "}
              
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
