import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import {GenresList} from "@/components/GenresList.tsx";


const areasLg   = `"nav  nav "
                   "side main"`;
const areasBase = `"nav" "main"`;

const columnsLg   = "200px 1fr";
const columnsBase = "1fr";

export default function App() {

  return (<>
    <Grid gap="1"
          templateAreas  ={{base:areasBase, lg:areasLg}}
          templateColumns={{base:columnsBase, lg:columnsLg}}
    >

      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <GridItem area="side" hideBelow="lg">
        <GenresList/>
      </GridItem>

      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>




    {/*<AspectRatio ratio={16 / 9}>*/}
    {/*  <DecorativeBox></DecorativeBox>*/}
    {/*</AspectRatio>*/}
    {/*<DecorativeBox></DecorativeBox>*/}
  </>)
}
