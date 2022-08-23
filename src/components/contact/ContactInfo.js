import { Box, Stack } from "@mui/material";
import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ContactInfoButton from "./ContactInfoButton";
import ContactInfoTypography from "./ContactInfoTypography";

const ContactInfo = () => {
  return (
    <>
      <Box>
        <Stack spacing={5} justifyContent="center" sx={{ my: 5 }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton iconItem={<PhoneIcon />} />
              <ContactInfoTypography contactInfo="+91 7358438514" />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton iconItem={<EmailIcon />} />
              <ContactInfoTypography
                contactInfo="bakialakshmi.g.d@gmail.com"
                siteLink="mailto:bakialakshmi.g.d@gmail.com"
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton iconItem={<GitHubIcon />} />
              <ContactInfoTypography
                contactInfo="BakialakshmiGD"
                siteLink="https://github.com/BakialakshmiGD"
              />
            </Stack>
          </Box>
          {/* <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton iconItem={<LinkedInIcon />} />
              <ContactInfoTypography
                contactInfo=""
                siteLink=""
              />
            </Stack>
          </Box> */}
        </Stack>
      </Box>
    </>
  );
};

export default ContactInfo;
