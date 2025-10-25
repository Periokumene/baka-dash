import {useQuery} from "@tanstack/react-query";
import apiClient, {type FetchResponse} from "@/services/api-client.ts";

export interface Genre{
  id: number,
  name: string,
  image_background: string,
}

// const useGenres = ()=>useData<Genre>("/genres");


const useGenresNew = ()=>useQuery<FetchResponse<Genre>>({
  queryKey: ["genre"],
  queryFn: ()=>apiClient.get('/genres').then(res=>res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  // initialData: { count: genres.length, results: genres }
})

export default useGenresNew;