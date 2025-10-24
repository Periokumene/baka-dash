import useGenres from "@/hooks/useGenres.ts";
import {HStack, Image, List, Spinner, Text} from "@chakra-ui/react";


export function GenresList() {
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
              <Text fontSize="lg">{data.name}</Text>
            </HStack>

          </List.Item>
        ))}
      </List.Root>
    </>
  );
}