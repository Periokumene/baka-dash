import {useParams} from "react-router-dom"
import useGame from "@/hooks/useGame.ts";
import {Text, Heading, Spinner} from "@chakra-ui/react";

function GameDetailPage() {
  // router配置了 games/:slug 路径 -- GameDetailPage，因此访问games/GTA的时候，会渲染GameDetailPage，并且我们知道slug是GTA
  const {slug} = useParams();
  console.log("请求---" + slug);

  const {data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;