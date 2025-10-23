import useData from "@/hooks/useData.ts";


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




const useGames = ()=>useData<Game>("/games");
export default useGames;
