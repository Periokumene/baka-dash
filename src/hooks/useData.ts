import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {type AxiosError, CanceledError} from "axios";



interface FetchResponse<T>{
  count: number;
  results: T[],
}



const useData = <T>(endpoint : string)=>{
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();
    setError("");
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res)=>{
        setDatas(res.data.results);
        setLoading(false);
      })
      .catch((err : AxiosError)=>{
        // 由于是异步、以及两次挂载是同一个。第一次的Effect延迟catch，变更状态时，第二次Effect已经开始了?
        // 一个证据就是，如果then不清除error，catch不绕过Cacnel，那么他的error会被残留下来！这件事晚于第二次Effect开始！
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      // 也正是因此，没法直接用finally，因为finally无法剔除第一次挂的Effect的影响
      // .finally(()=>{
      //   setLoading(false);
      // });

    return ()=>{controller.abort();};
  }, []);

  return {datas, error, isLoading};
}

export default useData;