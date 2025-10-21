import {Badge} from '@chakra-ui/react';

export default function GameScore({score} : {score:number}) {
  let color= "green";
  color = score < 80 ? "yellow" : color;
  color = score < 60 ? "" : color;
  console.log(score);
  return (
    <>
      <Badge colorPalette={color} fontSize="14px" paddingX="2px" borderRadius="4px">{score}</Badge>
    </>
  );
}