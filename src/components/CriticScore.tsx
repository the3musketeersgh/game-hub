import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 95 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius={4}>
      {score}
    </Badge>
  );
}

export default CriticScore;
