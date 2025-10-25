import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import {SearchInput} from "@/components/SearchInput.tsx";

interface Props{
  onChangeSearchText : (newText:string)=>void,
}


export default function NavBar({onChangeSearchText} : Props) {
  return (
      <HStack borderColor="fg.disabled" borderWidth="1px" justifyContent="space-between">
        <HStack>
          <Image src={logo} height="60px"></Image>
          <Text>NavBar</Text>
        </HStack>
        <SearchInput onChangeSearchText={onChangeSearchText}/>
        <ColorModeButton float="right"/>
      </HStack>
  );
}