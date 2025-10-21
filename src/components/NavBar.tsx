import {HStack, Image, Text, Theme} from "@chakra-ui/react";
import logo from "../assets/react.svg";

export function NavBar() {
  console.log(logo);
  return (
    <Theme appearance="light">
      <HStack borderColor="fg.disabled" borderWidth="5px" color="fg.error">
        <Image src={logo} height="60px"></Image>
        <Text>NavBar</Text>
      </HStack>
    </Theme>
  );
}