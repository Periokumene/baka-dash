import axios, {type AxiosRequestConfig} from 'axios'

export interface FetchResponse<T>{
  count: number;
  results: T[],
  next: string | null,
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

  // 非简写情况下尽量都写上return吧。靠单箭头返回，链式编程行数多了倘若不小心加了花括号，可能会没注意到漏掉return
  getAll = (config?: AxiosRequestConfig)=>{
    return privateQuerySingleton
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res=>res.data);
  }

  // 实际上这个是特化的不应该放在这里，但是我太累了懒得管了
  get = (slug : number|string)=>
  {
    return privateQuerySingleton
      .get<T>(this.endpoint + '/' + slug)
      .then(res=> {return res.data});
  }

}
export default APIClient;