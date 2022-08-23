import { Container, Grid } from "@mui/material";
import React from "react";

import MyLinks from "./MyLinks";
import Name from "./Name";
import Profile from "./Profile";

const HomePage = () => {
  return (
    <>
      <Container sx={{ pb: 2 }}>
        <Grid
          container
          justifyContent="center"
          sx={{ py: 5, alignItems: "center" }}
          spacing={1}
        >
          <Grid item sx={{ mt: 2, pt: 2 }} lg={12}>
            <Name />
          </Grid>
          <Grid item lg={11.9}>
            <Profile />
          </Grid>
          <Grid item lg={12} sx={{ my: 2, py: 2 }}>
            <MyLinks />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
