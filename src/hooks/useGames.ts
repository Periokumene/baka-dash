import useData from "@/hooks/useData.ts";
import type {Genre} from "@/hooks/useGenres.ts";


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
}



const useGames = (gameQuery: GameQuery)=>useData<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering,
    }
  },
  [gameQuery]
);
export default useGames;
