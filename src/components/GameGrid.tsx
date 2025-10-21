import {Box, Text} from "@chakra-ui/react";
import {useGames} from "@/hooks/useGames.ts";


export function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      { error && <Text>{error}</Text> }
      <Box borderColor="fg.disabled" borderWidth="1px">
        <ul>
          { games.map(game=><li key={game.id}>{game.id}---{game.name}</li>) }
        </ul>
      </Box>
    </>
  );
}