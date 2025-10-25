import axios from 'axios'

export interface FetchResponse<T>{
  count: number;
  results: T[],
}


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36ebadd8dc06468389429e7d9e2f3a98"
  },
});