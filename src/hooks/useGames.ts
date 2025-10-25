import type {Genre} from "@/hooks/useGenres.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import APIClient, {type FetchResponse} from "@/services/api-client.ts";
import ms from "ms";


export interface Platform {
  id: number,
  name: string,
  slug: string,
}
export interface Game{
  id: number;
  name: string,
  metacritic : number,
  background_image: string,
  images: string[],
  parent_platforms: { platform: Platform} []
}
export interface GameQuery{
  genre: Genre | null,
  platform: Platform | null,
  ordering: string,
  searchText: string,
}

//
const query2Params = (gameQuery: GameQuery, page: number)=>{
  const Pack = {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchText,
        page: page,
    }
  }
  return Pack;
};

const client = new APIClient<Game>("/games");

const useGamesNew = (gameQuery: GameQuery)=>useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["game", gameQuery], // 这里即useEffect的deps，确保gameQuery修改时useQuery会更新
  queryFn: ({pageParam}) => { return client.getAll(query2Params(gameQuery, pageParam as number)) },
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages)=>{ return lastPage.next ? allPages.length + 1 : undefined },
  staleTime: ms('24h') // 24 * 60 * 60 * 1000,
});

export default useGamesNew;


