import {useQuery} from "@tanstack/react-query";
import APIClient, {type FetchResponse} from "@/services/api-client.ts";

interface Platform{
  id: number,
  name: string,
  slug: string,
};

// const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents");


const Client = new APIClient<Platform>("/platforms/lists/parents");

const usePlatformsNew = ()=>useQuery<FetchResponse<Platform>, Error>({
  queryKey: ["platform"],
  queryFn: Client.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24h
  // initialData:
});

export default usePlatformsNew;