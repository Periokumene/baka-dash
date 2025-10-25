import {create} from "zustand"
import type {Platform} from "@/hooks/useGames.ts";


export interface GameQuery{
  genreId: number | null,
  platform: Platform | null,
  ordering: string,
  searchText: string,
}

interface gameQueryStore{
  gameQuery: GameQuery,

  setGenreId:    (genreId: number|null) => void,
  setPlatform:   (platform: Platform|null) => void,
  setOrdering:   (ordering: string) => void,
  setSearchText: (searchText: string) => void,
}
const initalGameQuery : GameQuery = {
  genreId: null,
  platform: null,
  ordering: "",
  searchText: "",
}


// 这个callback是为了让我们在useState基础上，用一个总的useState去封装自己的读写方法
// 可以直接理解成 const [store, setter] = useState<GameQuery>(initialGameQuery)
// setter可以接受callback或者显式直接设置值

const useGameQueryState = create<gameQueryStore>(setter=>({
  gameQuery: initalGameQuery,
  setGenreId: genreId => {
    setter(store=>({
      gameQuery: {...store.gameQuery, genreId}
    }))
  },
  setPlatform: platform => {
    setter(store=>({
      gameQuery: {...store.gameQuery, platform}
    }))
  },
  setOrdering: ordering => {
    setter(store=>({
      gameQuery: {...store.gameQuery, ordering}
    }))
  },
  setSearchText: searchText=>{
    setter(()=>({
      gameQuery: { ...initalGameQuery, searchText } // reset other params
    }))
  }
}));

export default useGameQueryState;