import {Heading} from "@chakra-ui/react";
import useGameQueryStore from "@/store.ts";



export function GameHeading() {
  const platform = useGameQueryStore(store=>store.gameQuery.platform);
  const headStr = `${platform?.name || ""} Games`
  return (
    <Heading size="5xl" marginY={5}>{headStr}</Heading>
  );
}