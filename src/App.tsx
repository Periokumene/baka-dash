import './App.css'
import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import {GenresList} from "@/components/GenresList.tsx";
import {useState} from "react";
import {GameComboPlatform} from "@/components/GameComboPlatform.tsx";
import type {GameQuery} from "@/hooks/useGames.ts";
import {GameComboSort} from "@/components/GameComboSort.tsx";
import {GameHeading} from "@/components/GameHeading.tsx";

const areasBase = `"nav" "main"`;
const areasLg   = `"nav  nav "
                   "side main"`;

const columnsBase = "1fr";
const columnsLg   = "200px 1fr";





export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (<>
    <Grid gap="1"
          templateAreas  ={{base:areasBase, lg:areasLg}}
          templateColumns={{base:columnsBase, lg:columnsLg}}
    >

      <GridItem area="nav">
        <NavBar onChangeSearchText={newText=>{setGameQuery({...gameQuery, searchText: newText})}}/>
      </GridItem>

      <GridItem area="side" hideBelow="lg">
        <GenresList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery, genre})}/>
      </GridItem>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery}/>

        <Flex paddingLeft={0} marginTop={5} marginBottom={5}>
          <Box marginRight={5}>
            <GameComboPlatform selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
          </Box>
          <GameComboSort ordering={gameQuery.ordering} onSelectOrdering={ordering => {setGameQuery({...gameQuery, ordering})} }/>
        </Flex>

        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>




    {/*<AspectRatio ratio={16 / 9}>*/}
    {/*  <DecorativeBox></DecorativeBox>*/}
    {/*</AspectRatio>*/}
    {/*<DecorativeBox></DecorativeBox>*/}
  </>)
}
