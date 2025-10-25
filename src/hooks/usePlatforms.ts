import {useQuery} from "@tanstack/react-query";
import APIClient, {type FetchResponse} from "@/services/api-client.ts";
import ms from "ms";
import type {Platform} from "@/entities/Platform.ts";


// const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents");


const Client = new APIClient<Platform>("/platforms/lists/parents");

const usePlatformsNew = ()=>useQuery<FetchResponse<Platform>, Error>({
  queryKey: ["platform"],
  queryFn: Client.getAll,
  staleTime: ms('24h') // 24 * 60 * 60 * 1000,
  // initialData:
});

export default usePlatformsNew;