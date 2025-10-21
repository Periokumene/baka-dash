import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

export default function NavBar() {
  return (
      <HStack borderColor="fg.disabled" borderWidth="1px" justifyContent="space-between">
        <HStack>
          <Image src={logo} height="60px"></Image>
          <Text>NavBar</Text>
        </HStack>
        <ColorModeButton float="right"/>
      </HStack>
  );
}