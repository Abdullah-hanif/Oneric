import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalHeader from "../../components/GlobalHeader";
import HorizontalTopList from "../../components/HorizontalTopList";
import { useSelector } from "react-redux";
import TeamApiService from "../../services/TeamApiService";
import { ROLES } from "../../common/Constants";
import PlayerCard from "../../components/shared/PlayerCard";

// for dummy data
const data = [
  {
    id: "1",
    title: "League",
    titleImage: {
      activeImg: require("../../assets/Iocns/BatImgActive.png"),
      nonActiveImg: require("../../assets/Iocns/BatImg.png"),
    },
  },
  {
    id: "2",
    title: "One Day International",
    titleImage: {
      activeImg: require("../../assets/Iocns/BatImgActive.png"),
      nonActiveImg: require("../../assets/Iocns/BatImg.png"),
    },
  },
  {
    id: "3",
    title: "Test matches",
    titleImage: {
      activeImg: require("../../assets/Iocns/BatImgActive.png"),
      nonActiveImg: require("../../assets/Iocns/BatImg.png"),
    },
  },
  {
    id: "4",
    title: "IPL",
    titleImage: {
      activeImg: require("../../assets/Iocns/BatImgActive.png"),
      nonActiveImg: require("../../assets/Iocns/BatImg.png"),
    },
  },
  {
    id: "5",
    title: "World cup",
    titleImage: {
      activeImg: require("../../assets/Iocns/BatImgActive.png"),
      nonActiveImg: require("../../assets/Iocns/BatImg.png"),
    },
  },
  // Add more items here if needed
];
const dataTwo = [
  {
    id: "1",
    title: "League",
    titlePoint: "Batting Points",
    activeIcon: {
      activeImg: require("../../assets/Iocns/ArrowUp.png"),
      nonActiveImg: require("../../assets/Iocns/ArrowDown.png"),
    },
  },
  {
    id: "2",
    title: "League",
    titlePoint: "Batting Points",
    titleImage: {
      activeImg: require("../../assets/Iocns/ArrowUp.png"),
      nonActiveImg: require("../../assets/Iocns/ArrowDown.png"),
    },
  },
  {
    id: "3",
    title: "League",
    titlePoint: "Other Points",
    titleImage: {
      activeImg: require("../../assets/Iocns/ArrowUp.png"),
      nonActiveImg: require("../../assets/Iocns/ArrowDown.png"),
    },
  },
  {
    id: "4",
    title: "League",
    titlePoint: "Other Points",
    titleImage: {
      activeImg: require("../../assets/Iocns/ArrowUp.png"),
      nonActiveImg: require("../../assets/Iocns/ArrowDown.png"),
    },
  },
  // Add more items here if needed
];
const TeamOne = ({ navigation }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [myTeams, setMyTeams] = useState(null);

  const userFromStorage = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userFromStorage) {
        const userId = userFromStorage?.id;
        // getAllPlayers(matchId);
        // console.log("userId", userId);
        getMyTeams(userId);
      }
    });
    return unsubscribe;
  }, [userFromStorage]);

  const getMyTeams = async (userId) => {
    const response = await TeamApiService.getMyTeams(userId);
    if (response?.success) {
      const allTeams = response?.data;
      setMyTeams(allTeams);
    }
  };

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
      item?.players?.filter(
        (player) => player?.player?.roles[0] === ROLES.BOWLER
      ).length || 0;

    const totalWicketKeeper =
      item?.players?.filter(
        (player) => player?.player?.roles[0] === ROLES.KEEPER
      ).length || 0;

    const isMatchStarted = item?.match?.status === "started";

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
              <Text style={{ fontWeight: "800", fontSize: 12 }}>
                {item?.name || "--"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                {!isMatchStarted && (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CreateTeam", {
                        matchId: item?.match?.id,
                        playersToBeEdited: item?.players || null,
                      });
                    }}
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
                )}
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <PlayerCard
              title="C"
              item={item?.captain}
              textColor={"white"}
              stripColor={"red"}
            />
            <PlayerCard
              title="VC"
              item={item?.viceCaptian}
              textColor={"white"}
              stripColor={"blue"}
            />
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

  return (
    <ImageBackground
      source={require("../../assets/Images/BgImageLite.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "flex-end",
          left: 10,
        }}
      >
        <Image source={require("../../assets/Images/TopRightBackground.png")} />
      </View>
      <ScrollView style={styles.main}>
        <GlobalHeader
          sourceLeft={require("../../assets/Iocns/Back.png")}
          styleLeft={{ width: 25, height: 20 }}
          sourceRight={require("../../assets/Images/OnericLogo.png")}
          styleRight={{ width: 49, height: 47, left: 20 }}
          // sourceRSleftIconFirst={require('../../assets/Iocns/PTS.png')}
          styleRLFIMG={{ right: 5 }}
          sourceRSleftIcon={require("../../assets/Iocns/PTS.png")}
          styleRLIMG={{ left: 10 }}
          // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
          sourceLeftOnPress={() => navigation.goBack()}
        />
        <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
          {/* <View
            style={{ flexDirection: "row", alignItems: "center", left: 10 }}
          >
            <Text style={{ fontWeight: "400", fontSize: 32 }}>
              ENG <Text style={{ color: "#7D7D7D" }}>vs</Text> AUS
            </Text>
            <View style={{ flexDirection: "row", left: 10 }}>
              <Image source={require("../../assets/Images/AUSflag.png")} />
              <Image
                source={require("../../assets/Images/ENGlflag.png")}
                style={{ left: 10 }}
              />
            </View>
          </View> */}
          <View
            style={{
              borderBottomColor: "#3A3A3A ",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />
          {/* <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item) => (
              <HorizontalTopList
                key={item.id}
                item={item}
                activeId={activeItemId}
                onPress={setActiveItemId}
              />
            ))}
          </ScrollView> */}
          {myTeams?.length > 0 && myTeams.map((item) => <MyTeamCard key={item.id} item={item} />)}

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "35%",
            }}
          >
            <TouchableOpacity
              style={{
                width: 258,
                height: 45,
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: "#278C0C", // Change this to your desired button color
                borderRadius: 53,
                elevation: 5,
              }}
              onPress={() => {
                // navigation.navigate("CreateTeam", { matchId: item?.match?.id });
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "400",
                  letterSpacing: 5,
                }}
              >
                CREATE TEAM+
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default TeamOne;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 3,
    margin: 3,
  },
  scrollViewContent: {
    marginTop: 10,
  },
});
