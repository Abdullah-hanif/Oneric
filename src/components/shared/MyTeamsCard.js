import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";

const MyTeamCard = ({ item }) => {
  const totalAllRounder =
    item?.players?.filter(
      (player) => player?.player?.roles[0] === ROLES.ALL_ROUNDER
    ).length || 0;

  const totalBatsman =
    item?.players?.filter(
      (player) => player?.player?.roles[0] === ROLES.BATSMAN
    ).length || 0;

  const totalBowler =
    item?.players?.filter((player) => player?.player?.roles[0] === ROLES.BOWLER)
      .length || 0;

  const totalWicketKeeper =
    item?.players?.filter((player) => player?.player?.roles[0] === ROLES.KEEPER)
      .length || 0;

  return (
    <View
      style={{
        alignSelf: "center",
        width: "95%",
        height: 223,
        marginTop: 50,
        overflow: "visible",
      }}
    >
      <ImageBackground
        source={require("../../assets/Images/GroundImageOne.png")}
        style={{
          overflow: "visible",
          height: 193,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View
          style={{
            borderWidth: 0.8,
            elevation: 3,
            padding: 15,
            justifyContent: "center",
            opacity: 0.8,
            borderRadius: 30,
            backgroundColor: "#FFFFFF",
            width: "95%",
            alignSelf: "center",
            height: 32,
            bottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "800", fontSize: 12 }}>My Team 1</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateTeam")}
                style={{
                  elevation: 4,
                  width: 23,
                  height: 23,
                  backgroundColor: "#000000",
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/Iocns/EditIcon.png")}
                  style={{ width: 13, height: 13 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 4,
                  width: 23,
                  height: 23,
                  backgroundColor: "#000000",
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={require("../../assets/Iocns/CopyIcon.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
                backgroundColor: "#CE1124",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "700",
                  color: "#F0F4F6",
                }}
              >
                C
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
                backgroundColor: "#CE1124",
                alignItems: "center",
                justifyContent: "center",
                top: "75%",
                left: 0,
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 10,
                  fontWeight: "400",
                }}
              >
                J Root
              </Text>
            </View>
            <Image
              source={require("../../assets/Images/CaptianUSerImg.png")}
              style={{ borderRadius: 100, width: 48, height: 48 }}
            />
          </View>
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
                backgroundColor: "#012169",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: "700",
                  color: "#F0F4F6",
                }}
              >
                VC
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
                backgroundColor: "#012169",
                alignItems: "center",
                justifyContent: "center",
                top: "75%",
                left: 0,
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 10,
                  fontWeight: "400",
                }}
              >
                S Smith
              </Text>
            </View>
            <Image
              source={require("../../assets/Images/VCaptianUserImage.png")}
              style={{ borderRadius: 100, width: 48, height: 48 }}
            />
          </View>
        </View>
        <View
          style={{
            elevation: 3,
            justifyContent: "center",
            opacity: 0.8,
            borderRadius: 30,
            width: "95%",
            height: 32,
            top: 15,
            backgroundColor: "#5AC73D",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              zIndex: 99999,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              WK <Text style={{ color: "white" }}>({totalWicketKeeper})</Text>
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              BAT <Text style={{ color: "white" }}>({totalBatsman})</Text>
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              AR <Text style={{ color: "white" }}>({totalAllRounder})</Text>
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              BOWL <Text style={{ color: "white" }}>({totalBowler})</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default MyTeamCard;
