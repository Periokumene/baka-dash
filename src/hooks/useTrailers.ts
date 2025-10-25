import APIClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}



export default function useTrailer(gameId : number){
  const client = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: client.getAll,
  });
}