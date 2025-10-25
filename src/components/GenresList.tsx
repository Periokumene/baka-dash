import useGenres, {type Genre} from "@/hooks/useGenres.ts";
import {Button, HStack, Image, List, Spinner, Text} from "@chakra-ui/react";


interface Props{
  selectedGenre: Genre|null,
  onSelectGenre: (genre:Genre) => void,
}

export function GenresList({selectedGenre, onSelectGenre} : Props) {
  const { datas, error, isLoading} = useGenres();

  return (
    <>
      {isLoading && <Spinner/>}
      {error && <Text>{error}</Text>}

      <List.Root>
        { datas.map((data) => (
          <List.Item key={data.id} paddingY="5px">
            <HStack>
              <Image src={data.image_background} borderRadius={8}
                     boxSize="32px" objectFit="cover" objectPosition="center"
              />
              <Button fontSize="lg" variant="link" onClick={()=>onSelectGenre(data)}> {data.name}</Button>
              {/*<Text fontSize="lg">{data.name}</Text>*/}
            </HStack>

          </List.Item>
        ))}
      </List.Root>
    </>
  );
}