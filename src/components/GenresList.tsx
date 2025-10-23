import {useGenres} from "@/hooks/useGenres.ts";
import {Text} from "@chakra-ui/react";


export function GenresList() {
  const { genres, error, isLoading} = useGenres();

  return (
    <>
      {isLoading && <Text>FETCHING...</Text>}
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre, i) => (<li key={i}>{genre.name}</li>))}
      </ul>
    </>
  );
}