import {useQuery} from "@tanstack/react-query";
import APIClient, {type FetchResponse} from "@/services/api-client.ts";
import ms from "ms";
import type {Genre} from "@/entities/Genre.ts";



// const useGenres = ()=>useData<Genre>("/genres");


const client = new APIClient<Genre>("/genres");

const useGenresNew = ()=>useQuery<FetchResponse<Genre>, Error>({
  queryKey: ["genre"],
  queryFn: client.getAll,
  staleTime: ms('24h') // 24 * 60 * 60 * 1000,
  // initialData: { count: genres.length, results: genres }
})

export default useGenresNew;