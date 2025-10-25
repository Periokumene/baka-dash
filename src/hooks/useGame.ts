import APIClient from "@/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import type {Game} from "@/entities/Game.ts";


const client = new APIClient<Game>("/games");
const useGame = (slug : string)=>useQuery({
  queryKey: ["games", slug],
  queryFn: ()=>client.get(slug),
})

export default useGame;