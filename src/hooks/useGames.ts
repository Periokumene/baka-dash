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




const useGames = (selectedGenre: Genre|null, selectedPlatform: Platform|null)=>useData<Game>(
  "/games",
  {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}},
  [selectedGenre?.id, selectedPlatform?.id]
);
export default useGames;
