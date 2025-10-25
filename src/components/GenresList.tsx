import useGenres from "@/hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, Spinner, Text} from "@chakra-ui/react";
import useGameQueryStore from "@/store.ts";

export function GenresList() {
  const genreId = useGameQueryStore(store=>store.gameQuery.genreId);
  const setGenreId = useGameQueryStore(store=>store.setGenreId);

  const { data, error, isLoading} = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>

      {isLoading && <Spinner/>}
      {error && <Text>{error.message}</Text>}


      <List.Root>
        { data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image src={genre.image_background} borderRadius={8}
                     boxSize="32px" objectFit="cover" objectPosition="center"
              />
              <Button fontSize="md"
                      fontWeight={genre.id === genreId ? 'bold' : 'normal'}
                      variant="outline"
                      onClick={()=>setGenreId(genre.id)}>
                {genre.name}
              </Button>
            </HStack>

          </List.Item>
        ))}
      </List.Root>
    </>
  );
}