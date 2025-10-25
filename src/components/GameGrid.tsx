import {For, Show, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {GameCardSkel} from "@/components/GameCardSkel.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "@/store.ts";


const skeletonList = [1, 2, 3, 4, 5, 6, 7];

export default function GameGrid() {
  const gameQuery = useGameQueryStore(store=>store.gameQuery);

  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);


  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >

      { error && <Text>{error.message}</Text> }

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
          <For each={data?.pages}>
            {(page, i) =>
              <For each={page.results} key={i}>
                {(game, i) => <GameCard key={i} game={game}/>}
              </For>
            }
          </For>
        </Show>

      </SimpleGrid>
    </InfiniteScroll>
  );
}