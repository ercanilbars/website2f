import React from "react";
import { Box } from "@chakra-ui/react";

import ottomanLogo from '../../assets/logo.svg';

export default function Logo(props) {
  return (
    <Box {...props}>
      <img src={ottomanLogo} alt="Ottoman" />
    </Box>
  );
}
