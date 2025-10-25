import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import {SearchInput} from "@/components/SearchInput.tsx";



export default function NavBar() {
  return (
      <HStack borderColor="fg.disabled"
              borderBottomWidth="1px"
              justifyContent="space-between">
        <HStack>
          <Image src={logo} height="60px" margin="12px"></Image>
        </HStack>
        <SearchInput/>
        <ColorModeButton float="right"/>
      </HStack>
  );
}