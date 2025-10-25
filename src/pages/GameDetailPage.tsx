import {useParams} from "react-router-dom"

function GameDetailPage() {
  // router配置了 games/:id 路径 -- GameDetailPage，因此访问games/123的时候，会渲染GameDetailPage，并且我们知道ID是123
  const routeParams = useParams();
  return (
    <>{routeParams.id}</>
  );
}

export default GameDetailPage;