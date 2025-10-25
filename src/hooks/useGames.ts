import type {Genre} from "@/hooks/useGenres.ts";
import {useQuery} from "@tanstack/react-query";
import APIClient, {type FetchResponse} from "@/services/api-client.ts";


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


const query2Params = (gameQuery: GameQuery)=>{
  console.log(gameQuery);
  const Pack = {
    params: {
      genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchText,
    }
  }
  return Pack;
};

const client = new APIClient<Game>("/games");

const useGamesNew = (gameQuery: GameQuery)=>useQuery<FetchResponse<Game>>({
  queryKey: ["game", gameQuery], // 这里即useEffect的deps，确保gameQuery修改时useQuery会更新
  queryFn: ()=>client.getAll(query2Params(gameQuery)),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  // initialData:
});



export default useGamesNew;
