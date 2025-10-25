import APIClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
  })
} 

export default useScreenshots;