import useTrailer from "@/hooks/useTrailers.ts";

interface Props{
  gameId: number,
}
export default function GameTrailer({gameId} : Props) {
  // const Fuck = useTrailer(gameId);
  const {data, error, isLoading} = useTrailer(gameId);

  // 被坑死了，这里写成!isLoading会提前返回，此时下面的data?.results 类型判断会失灵，但是这是为什么

  if (isLoading) return null;
  if (error) throw(error);

  const first = data?.results[0];
  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : <i>Video Invalid!</i>;
}