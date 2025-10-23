import {Card, Skeleton, SkeletonText} from "@chakra-ui/react";
import {GameCardHolder} from "@/components/GameCardHolder.tsx";

export function GameCardSkel() {
  return (
    <>
      <GameCardHolder>
        <Card.Root>
          <Skeleton height="200px"/>
          <Card.Body gap="2">
            <SkeletonText mt="4" noOfLines={3} gap="4"/>
          </Card.Body>

          <Card.Footer justifyContent="space-between">
          </Card.Footer>
        </Card.Root>
      </GameCardHolder>
    </>
  );
}