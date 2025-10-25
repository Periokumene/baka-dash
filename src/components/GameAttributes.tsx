import { SimpleGrid, Text } from '@chakra-ui/react';
import type {Game} from "@/hooks/useGames.ts";
import {DefinitionItem} from "@/components/DefinitionItem.tsx";
import GameScore from "@/components/GameScore.tsx";


interface Props {
  game: Game;
}

export function GameAttributes({ game }: Props){
  return (
    <SimpleGrid columns={2} as="dl">

      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <GameScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>

    </SimpleGrid>
  )
}
