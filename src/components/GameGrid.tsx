import {For, Show, SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {type Platform} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {GameCardSkel} from "@/components/GameCardSkel.tsx";
import type {Genre} from "@/hooks/useGenres.ts";


interface Props{
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
}


export default function GameGrid({selectedGenre, selectedPlatform} : Props) {
  const { datas, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletonList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      { error && <Text>{error}</Text> }
      { selectedGenre && <Text>{selectedGenre.name}</Text>}
      <SimpleGrid
        overflow="hidden"
        columns={[null,1,2,3,5]}
        gap="40px"
      >

        <Show when={isLoading}>
          <For each={skeletonList}>{sk=> <GameCardSkel key={sk}/>}</For>
        </Show>

        {/*<Show when={!isLoading}>不要包Loading，因为这样不利于IsLoading状态异常时的数据排查</Show>*/}
        {/*我们没有选择，因为刷新的时候Loading还是必须清掉已有的内容*/}
        <Show when={!isLoading}>
          <For each={datas}>
            {(data, i) => <GameCard key={i} game={data}/>}
          </For>
        </Show>

      </SimpleGrid>
    </>
  );
}