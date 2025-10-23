import {Box} from "@chakra-ui/react";
import React from "react";

export function GameCardHolder({children} : { children : React.ReactNode}) {
  return (
    <Box width="300px" height="600px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}