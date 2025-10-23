import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {AxiosError, CanceledError} from "axios";

export interface Genre{
  id: number,
  name: string,
}

interface GenreResponse{
  count: number,
  results: Genre[],
}

export function useGenres(){
  const [genres, setGenres]       = useState<Genre[]>([]);
  const [error, setError]         = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient.get<GenreResponse>("/genres", {signal: controller.signal})
      .then(res=>{
        setGenres(res.data.results);
      })
      .catch((err : AxiosError)=>{
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(()=>{
        setIsLoading(false);
      })

    return ()=>{controller.abort()};
  }, []);


  return {genres, error, isLoading};
}