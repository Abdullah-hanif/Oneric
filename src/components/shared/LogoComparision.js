import React from "react";
import { View, Image } from "react-native";

const LogoComparision = ({ selectedMatch }) => {
  const getSource = (team) => {
    if (team?.logo) {
      return { uri: team?.logo };
    }
    return require("../../assets/Iocns/FlagPlaceholder.png");
  };

  return (
    <View style={{ flexDirection: "row", left: 10 }}>
      <Image
        source={getSource(selectedMatch.teamA)}
        style={{ width: 25, height: 25 }}
        resizeMode="contain"
      />
      <Image
        source={getSource(selectedMatch.teamB)}
        style={{ left: 10, width: 25, height: 25 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoComparision;
