import {For, Show, SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {GameCardSkel} from "@/components/GameCardSkel.tsx";


export default function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletonList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid
        overflow="hidden"
        columns={[null,1,2,3,5]}
        gap="40px"
      >

        <Show when={isLoading}>
          <For each={skeletonList}>{sk=> <GameCardSkel key={sk}/>}</For>
        </Show>

        <Show when={!isLoading}>
          <For each={games}>
            {(game, i) => <GameCard key={i} game={game}/>}
          </For>
        </Show>

      </SimpleGrid>
    </>
  );
}