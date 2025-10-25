import {useQuery} from "@tanstack/react-query";
import apiClient, {type FetchResponse} from "@/services/api-client.ts";

interface Platform{
  id: number,
  name: string,
  slug: string,
};

// const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents");


const usePlatformsNew = ()=>useQuery<FetchResponse<Platform>>({
  queryKey: ["platform"],
  queryFn: ()=>apiClient.get('/platforms/lists/parents').then((res)=>res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  // initialData:
});

export default usePlatformsNew;