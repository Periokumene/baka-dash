import useGenres from "@/hooks/useGenres.ts";
import {Text} from "@chakra-ui/react";


export function GenresList() {
  const { datas, error, isLoading} = useGenres();

  return (
    <>
      {isLoading && <Text>FETCHING...</Text>}
      {error && <Text>{error}</Text>}
      <ul>
        {datas.map((data, i) => (<li key={i}>{data.name}</li>))}
      </ul>
    </>
  );
}