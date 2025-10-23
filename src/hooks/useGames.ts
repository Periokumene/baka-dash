import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {AxiosError} from "axios";


export interface Game{
  id: number;
  name: string,
  metacritic : number,
  background_image: string,
  images: string[],
  parent_platforms: { platform: PlatForm} []
}
export interface PlatForm{
  id: number,
  name: string,
  slug: string,
}

interface GameResponse{
  count: number,
  next: string,
  previous: string,
  results: Game[],
}

export function useGames(){
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<GameResponse>("/games")
      .then(res=>{
        setGames(res.data.results);
        setError("");
      })
      .catch((err:AxiosError)=>{
        setError(err.message);
      })
      .finally(()=>{
        setIsLoading(false)
      });
  }, []);

  return {games, error, isLoading};
}
