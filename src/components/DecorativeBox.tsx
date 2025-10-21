import {Box} from "@chakra-ui/react";


export function DecorativeBox({text="DecBox"} : {text?: string}) {
  return (
    <Box p="4" color="fg.disabled" backgroundColor="fg.disabled" borderWidth="1px" borderColor="border.disabled">
      {text}
    </Box>
  );
}