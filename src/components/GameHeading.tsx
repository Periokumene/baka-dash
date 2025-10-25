import type {GameQuery} from "@/hooks/useGames.ts";
import {Heading} from "@chakra-ui/react";

interface Props{
  gameQuery: GameQuery,
}

export function GameHeading({gameQuery} : Props) {
  const headStr = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading size="lg">{headStr}</Heading>
  );
}