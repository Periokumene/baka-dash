import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {AxiosError} from "axios";


interface Game{
  id: number;
  name: string,
  images: string[],
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

  useEffect(() => {
    setError("FETCHING...");
    console.log("FETCHING...")
    apiClient
      .get<GameResponse>("/games")
      .then(res=>{
        setGames(res.data.results);
        setError("");
      })
      .catch((err:AxiosError)=>{ setError(err.message)});
  }, []);

  return {games, error};
}
