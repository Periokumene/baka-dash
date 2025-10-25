import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import GameGrid from "@/components/GameGrid.tsx";
import {GenresList} from "@/components/GenresList.tsx";
import {GameComboPlatform} from "@/components/GameComboPlatform.tsx";
import {GameComboSort} from "@/components/GameComboSort.tsx";
import {GameHeading} from "@/components/GameHeading.tsx";


const areasBase = "main";
const areasLg   = "side main";

const columnsBase = "1fr";
const columnsLg   = "150px 1fr";

function HomePage() {
  return (
    <Grid gap="1"
          templateAreas  ={{base:areasBase, lg:areasLg}}
          templateColumns={{base:columnsBase, lg:columnsLg}}
    >
      <GridItem area="side" hideBelow="lg">
        <GenresList/>
      </GridItem>

      <GridItem area="main">
        <GameHeading/>

        <Flex paddingLeft={0} marginTop={5} marginBottom={5}>
          <Box marginRight={5}>
            <GameComboPlatform/>
          </Box>
          <GameComboSort/>
        </Flex>

        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default HomePage;