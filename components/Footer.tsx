import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Logo from "@/public/images/Logo.png";

const Footer = () => {
  return (
    <Box m="80px" bgcolor="#fff3f4" alignItems="center" alignContent="center">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Image src={Logo} alt="logo" height={50} width={50} />
        <Typography variant="h3">PulseFusion</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
