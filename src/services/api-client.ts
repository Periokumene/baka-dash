import axios, {type AxiosRequestConfig} from 'axios'

export interface FetchResponse<T>{
  count: number;
  results: T[],
}


const privateQuerySingleton = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36ebadd8dc06468389429e7d9e2f3a98"
  },
});


class APIClient<T>
{
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig)=>
    privateQuerySingleton
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res=>res.data);
}
export default APIClient;