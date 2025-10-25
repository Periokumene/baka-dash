import APIClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import type {Trailer} from "@/entities/Trailer.ts";




export default function useTrailer(gameId : number){
  const client = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: client.getAll,
  });
}