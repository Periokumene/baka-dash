import useData from "@/hooks/useData.ts";
import type {Genre} from "@/hooks/useGenres.ts";


export interface PlatForm{
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
  parent_platforms: { platform: PlatForm} []
}




const useGames = (selectedGenre: Genre|null)=>useData<Game>(
  "/games",
  {params: {genres: selectedGenre?.id}},
  [selectedGenre?.id]
);
export default useGames;
