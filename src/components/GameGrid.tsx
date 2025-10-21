import {For, SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";


export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid
        overflow="hidden"
        columns={[null,1,2,3,5]}
        gap="40px"
      >
        <For each={games}>
          {(game) => (
            <GameCard game={game} key={game.id}></GameCard>
          )}
        </For>
      </SimpleGrid>
      {/*<Stack gap="4" direction="row" wrap="wrap">*/}

      {/*</Stack>*/}
    </>
  );
}