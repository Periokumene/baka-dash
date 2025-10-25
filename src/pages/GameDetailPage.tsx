import {useParams} from "react-router-dom"
import useGame from "@/hooks/useGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import {ExpandableText} from "@/components/ExpandableText.tsx";
import {GameAttributes} from "@/components/GameAttributes.tsx";
import GameTrailer from "@/components/GameTrailer.tsx";

function GameDetailPage() {
  // router配置了 games/:slug 路径 -- GameDetailPage，因此访问games/GTA的时候，会渲染GameDetailPage，并且我们知道slug是GTA
  const {slug} = useParams();

  const {data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
}

export default GameDetailPage;