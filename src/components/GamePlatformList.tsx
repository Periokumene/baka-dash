import type {Platform} from "@/hooks/useGames.ts";
import {For, HStack, Icon} from "@chakra-ui/react";

import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdError } from "react-icons/md";
import type { IconType } from "react-icons";


interface Props{
  platforms: Platform[],
}

const iconTypeMap : {[key:string]:IconType} = {
  playStation: FaPlaystation,
  xbox: FaXbox,
  pc: FaWindows,
  nintendo: BsNintendoSwitch,
  mac: FaApple,
};
// const iconNodeMap : {[key:string]:React.ReactNode}= {
//   playStation: <FaPlaystation/>,
//   xbox: <FaXbox/>,
//   pc: <FaWindows/>,
//   nintendo: <BsNintendoSwitch/>,
//   mac: <FaApple/>,
// }


export default function GamePlatformList({platforms} : Props) {
  return (
    <>
      {/* 这个方法显然没有 <Icon as> 的方案更好，后者能让我们显示指定Icon的同时还保留 ChakraIcon的特性*/}
      {/*<HStack>*/}
      {/*  <FaPlaystation/>*/}
      {/*  <For each={platforms}>*/}
      {/*  {(platform)=>{ return platform.slug in iconNodeMap ? iconNodeMap[platform.slug] : <MdError/>}}*/}
      {/*  </For>*/}
      {/*</HStack>*/}

      <HStack>
        <For each={platforms}>
          {(platform, i)=><Icon key={i} as={platform.slug in iconTypeMap ? iconTypeMap[platform.slug] : MdError} color='gray.500'/>}
        </For>
      </HStack>
    </>
  );
}