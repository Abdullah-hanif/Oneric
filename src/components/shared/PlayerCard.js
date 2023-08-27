import { View, Text, Image } from "react-native";
import React from "react";

const PlayerCard = ({ item, title, textColor, stripColor }) => {
  return (
    <View
      style={{
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          flexDirection: "row",
          alignSelf: "flex-start",
          top: 1,
          height: 16.16,
          width: 16.16,
          backgroundColor: stripColor || "#CE1124",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 8,
            fontWeight: "700",
            color: textColor || "white",
          }}
        >
          {title || "NA"}
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          borderRadius: 25,
          height: 13,
          width: 48.14,
          position: "absolute",
          zIndex: 999,
          backgroundColor: stripColor || "#CE1124",
          alignItems: "center",
          justifyContent: "center",
          top: "75%",
          left: 0,
        }}
      >
        <Text
          style={{
            color: textColor || "#ffff",
            fontSize: 10,
            fontWeight: "400",
          }}
        >
          {item.name || item.firstName || item.LastName || "NA"}
        </Text>
      </View>
      <Image
        source={require("../../assets/Images/CaptianUSerImg.png")}
        style={{ borderRadius: 100, width: 48, height: 48 }}
      />
    </View>
  );
};

export default PlayerCard;
