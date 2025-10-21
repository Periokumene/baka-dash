import './App.css'
import {DecorativeBox} from "@/components/DecorativeBox.tsx";
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";



export default function App() {

  return (<>
    <Grid gap="1"
          templateAreas={`"nav  nav "
                          "side main"`}
    >

      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <GridItem area="side" hideBelow="md">
        <DecorativeBox text="side"/>
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
