import {Card, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";
import GamePlatformList from "@/components/GamePlatformList.tsx";
import GameScore from "@/components/GameScore.tsx";
import {GameCardHolder} from "@/components/GameCardHolder.tsx";

interface Props{
  game : Game,
}

export default function GameCard({game} : Props) {
  return (
    <GameCardHolder>
      <Card.Root>
        <Image src={game.background_image}
               width="600px" height="400px" objectFit="cover" objectPosition="center"
        />
        <Card.Body gap="2">
          <Card.Title fontSize='2xl'>{game.name}</Card.Title>
          <Card.Description>{game.name}</Card.Description>
        </Card.Body>

        <Card.Footer justifyContent="space-between">
          <GameScore score={game.metacritic }/>
          <GamePlatformList
            platforms={game.parent_platforms.map(data=>data.platform)}
          />
        </Card.Footer>
      </Card.Root>
    </GameCardHolder>
  );
}