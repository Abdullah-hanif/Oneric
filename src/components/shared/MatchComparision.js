import React from "react";
import { Text } from "react-native";

const MatchComparisionComponent = ({ selectedMatch }) => {
  return (
    <Text style={{ fontWeight: "400", fontSize: 32 }}>
      {selectedMatch?.teamA?.code || "--"}{" "}
      <Text style={{ color: "#7D7D7D" }}>vs</Text>{" "}
      {selectedMatch?.teamB?.code || "--"}
    </Text>
  );
};

export default MatchComparisionComponent;
