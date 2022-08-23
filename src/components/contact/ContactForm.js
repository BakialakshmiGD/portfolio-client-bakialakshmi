import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const ContactForm = ({ sendMessage, loadingState }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const changeHandler = (evn) => {
    setState((prevState) => ({
      ...prevState,
      [evn.target.name]: evn.target.value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, message } = state;
    if (!name || !email || !message) {
      return;
    } else {
      sendMessage(state);
      setState({ name: "", email: "", message: "" });
    }
  };
  return (
    <>
      <Box
        sx={{ py: 2, background: "#fee1f5", mr: 3 }}
      >
        <Stack component="form" justifyContent="center">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.name}
            onChange={changeHandler}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.email}
            onChange={changeHandler}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            minRows={6}
            multiline
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.message}
            onChange={changeHandler}
          />

          <Button
            sx={
              loadingState
                ? {
                    mx: { xs: 3, md: 5 },
                    my: 2,
                    background: "#e07ebb",
                    color: "#f0ebef",
                    transform: "scale(1.1)",
                    px: { xs: 2, md: 5 },
                    transition: " .5s ease-in",
                  }
                : {
                    background: "#e07ebb",
                    transition: " .5s ease-out",
                    mx: { xs: 3, md: 5 },
                    my: 2,
                    "&:hover": {
                      background: "#db4ba5",
                      color: "#f0ebef",
                      transform: "scale(1.1)",
                      px: { xs: 2, md: 3 },
                      transition: " .5s ease-in",
                    },
                  }
            }
            variant="contained"
            onClick={handleSubmit}
          >
            {loadingState ? "Sending Message..." : "Send Message"}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactForm;
