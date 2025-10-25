import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import {GenresList} from "@/components/GenresList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenres.ts";

const areasBase = `"nav" "main"`;
const areasLg   = `"nav  nav "
                   "side main"`;

const columnsBase = "1fr";
const columnsLg   = "200px 1fr";


export default function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);

  return (<>
    <Grid gap="1"
          templateAreas  ={{base:areasBase, lg:areasLg}}
          templateColumns={{base:columnsBase, lg:columnsLg}}
    >

      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <GridItem area="side" hideBelow="lg">
        <GenresList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre}/>
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>




    {/*<AspectRatio ratio={16 / 9}>*/}
    {/*  <DecorativeBox></DecorativeBox>*/}
    {/*</AspectRatio>*/}
    {/*<DecorativeBox></DecorativeBox>*/}
  </>)
}
