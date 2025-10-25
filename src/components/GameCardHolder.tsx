import {Box} from "@chakra-ui/react";
import React from "react";

export function GameCardHolder({children} : { children : React.ReactNode}) {
  return (
    <Box width="400px" height="600px" borderRadius={10} overflow="hidden"
         _hover={{
           transform: 'scale(1.03)',
           transition: 'all .3s ease-in-out',
           filter: "brightness(1.02)",
         }}
    >
      {children}
    </Box>
  );
}