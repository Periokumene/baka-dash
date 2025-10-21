import {Card, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";
import GamePlatformList from "@/components/GamePlatformList.tsx";
import GameScore from "@/components/GameScore.tsx";

interface Props{
  game : Game,
}

export default function GameCard({game} : Props) {
  console.log(game);
  return (
    <>
      <Card.Root width="320px" height="520px" borderRadius={10} overflow="hidden">
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
    </>
  );
}