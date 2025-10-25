import {Heading} from "@chakra-ui/react";
import useGameQueryStore from "@/store.ts";



export function GameHeading() {
  const platform = useGameQueryStore(store=>store.gameQuery.platform);
  const headStr = `${platform || ""} Games`
  return (
    <Heading size="lg">{headStr}</Heading>
  );
}