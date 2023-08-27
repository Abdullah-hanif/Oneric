import React from "react";
import { Text } from "react-native";

const MatchComparisionComponent = ({ selectedMatch }) => {
  return (
    <Text style={{ fontWeight: "400", fontSize: 32 }}>
      {selectedMatch?.teamA?.code ||
        selectedMatch?.short_name?.split("vs")[0] ||
        "--"}{" "}
      <Text style={{ color: "#7D7D7D" }}>vs</Text>{" "}
      {selectedMatch?.teamB?.code ||
        selectedMatch?.short_name?.split("vs")[1] ||
        "--"}
    </Text>
  );
};

export default MatchComparisionComponent;
