import './App.css'
import {ColorModeButton} from "./components/ui/color-mode.tsx";
import {DecorativeBox} from "@/components/DecorativeBox.tsx";
import {Grid, GridItem} from "@chakra-ui/react";
import {NavBar} from "@/components/NavBar.tsx";



export default function App() {

  return (<>
    <ColorModeButton/>
    <Grid gap="1"
          templateAreas={`"nav  nav "
                          "side main"`}
    >

      <GridItem area="nav">
        <NavBar/>
      </GridItem>

        <GridItem area="side">
          <DecorativeBox text="side"/>
        </GridItem>


      <GridItem area="main">
        <DecorativeBox text="main"/>
      </GridItem>
    </Grid>


    {/*<AspectRatio ratio={16 / 9}>*/}
    {/*  <DecorativeBox></DecorativeBox>*/}
    {/*</AspectRatio>*/}
    {/*<DecorativeBox></DecorativeBox>*/}
  </>)
}
