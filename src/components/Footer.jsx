import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box style={{ marginTop: "80px", width:"100%" }} id="footer">
      <Stack sx={{ alignItems: "center" }} flexWrap="wrap" pt="20px">
        <img src={Logo} alt="logo" style={{ width: "200px", height: "40px" }} />
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        mt="10px"
        textAlign="center"
        pb="20px"
      >
        All Rights Reserved 2022
      </Typography>
    </Box>
  );
}

export default Footer;
