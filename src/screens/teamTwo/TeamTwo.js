import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalHeader from "../../components/GlobalHeader";
import MatchComparisionComponent from "../../components/shared/MatchComparision";
import { ROLES } from "../../common/Constants";
import { useSelector } from "react-redux";
import DialogInput from "react-native-dialog-input";
import FullScreenLoader from "../../components/shared/Loading";
import TeamApiService from "../../services/TeamApiService";

const TeamTwo = ({ route, navigation }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userFromStorage = useSelector((state) => state.user);

  const {
    selectedPlayers,
    selectedMatch,
    selectedCaptain,
    selectedViceCaptain,
    selectedWicketKeeper,
  } = route.params;

  const selectedBowlers = selectedPlayers?.filter((item) => {
    return (
      item?.role === (ROLES.BOWLER || "bowler") ||
      item?.player?.roles[0] === (ROLES.BOWLER || "bowler")
    );
  });

  const selectedBatters = selectedPlayers?.filter((item) => {
    return (
      item?.role === (ROLES.BATSMAN || "batsman") ||
      item?.player?.roles[0] === (ROLES.BATSMAN || "batsman")
    );
  });

  const selectedWicketKeepers = selectedPlayers?.filter((item) => {
    return (
      item?.role === (ROLES.KEEPER || "keeper") ||
      item?.player?.roles[0] === (ROLES.KEEPER || "keeper")
    );
  });

  const selectedAllRounders = selectedPlayers?.filter((item) => {
    return (
      item?.role === ROLES.ALL_ROUNDER ||
      item?.player?.roles[0] === ROLES.ALL_ROUNDER
    );
  });

  console.log("selectedPlayers", {
    selectedPlayers,
    selectedMatch,
    selectedCaptain,
    selectedViceCaptain,
    selectedWicketKeeper,
    selectedBowlers,
    selectedBatters,
    selectedWicketKeepers,
  });

  const getTeamLogoSource = (team) => {
    if (team?.logo) {
      return { uri: team?.logo };
    }
    return require("../../assets/Iocns/FlagPlaceholder.png");
  };

  const getPlayerLogoSource = (player) => {
    if (player?.logo) {
      return { uri: player?.logo };
    }
    return require("../../assets/Iocns/profile.png");
  };

  const CaptainAndViceCaptainView = ({ item }) => {
    return (
      <View
        style={{
          marginTop: "5%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
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
            <Text style={{ fontSize: 8, fontWeight: "700", color: "#F0F4F6" }}>
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
            <Text style={{ color: "#ffff", fontSize: 10, fontWeight: "400" }}>
              {`${selectedCaptain?.firstName || ""} ` || "Captain"}
            </Text>
          </View>
          <Image
            source={getPlayerLogoSource(selectedCaptain)}
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
            <Text style={{ fontSize: 8, fontWeight: "700", color: "#F0F4F6" }}>
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
            <Text style={{ color: "#ffff", fontSize: 10, fontWeight: "400" }}>
              {`${selectedViceCaptain?.firstName || ""} ` || "Vice Captain"}
            </Text>
          </View>
          <Image
            source={getPlayerLogoSource(selectedViceCaptain)}
            style={{ borderRadius: 100, width: 48, height: 48 }}
          />
        </View>
      </View>
    );
  };

  const PlayerCard = ({ item, title }) => {
    return (
      <View style={{ marginLeft: 10 }}>
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
            {title || "--"}
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
              textAlign: "center",
            }}
          >
            {item?.player?.name || ""}
          </Text>
        </View>
        <Image
          source={getPlayerLogoSource(item?.player)}
          style={{ borderRadius: 100, width: 48, height: 48 }}
        />
      </View>
    );
  };

  const handleCreateTeam = async (teamName) => {
    const userId = userFromStorage?.id || "NA";
    const matchId = selectedMatch?.id || "NA";

    setIsLoading(true);
    const response = await TeamApiService.createTeam(
      selectedPlayers,
      userId,
      matchId,
      teamName,
      selectedCaptain,
      selectedViceCaptain
    );

    if (response?.success) {
      setIsDialogVisible(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Alert.alert("Error", response?.message || "Something went wrong");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/Images/BgImageLite.png")}
      style={{ flex: 1 }}
    >
      {/* TEXT INPUT MODAL STARTED */}
      <DialogInput
        isDialogVisible={isDialogVisible}
        title={"Team Name"}
        message={"Please Input Your Team Name"}
        hintInput={"Enter Here..."}
        submitInput={(inputText) => {
          setTeamName(inputText);
          handleCreateTeam(inputText);
        }}
        closeDialog={() => setIsDialogVisible(false)}
      ></DialogInput>
      {/* TEXT INPUT MODAL ENDED */}

      {/* LOADING COMPONENT STARTED */}
      <FullScreenLoader show={isLoading} />
      {/* LOADING COMPONENT ENDED */}
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
        <View style={{ padding: 10 }}>
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
        </View>
        <View style={{ bottom: 10, marginTop: 0, padding: 0, margin: 0 }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", left: 20 }}
          >
            <MatchComparisionComponent selectedMatch={selectedMatch} />
            <View style={{ flexDirection: "row", left: 10 }}>
              <Image
                source={getTeamLogoSource(selectedMatch?.teamA || null)}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
              <Image
                source={getTeamLogoSource(selectedMatch?.teamB || null)}
                style={{ left: 10, width: 25, height: 25 }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#3A3A3A ",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />

          {/* CAPTAIN AND VICE CAPTAIN VIEW STARTED */}
          <CaptainAndViceCaptainView />
          {/* CAPTAIN AND VICE CAPTAIN VIEW ENDED */}

          <View style={{ width: "100%", height: "45%", marginTop: 20 }}>
            <ImageBackground
              source={require("../../assets/Images/CreateTeamGround.png")}
              style={{
                elevation: 5,
                alignItems: "center",
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
              imageStyle={{ height: 625, width: "100%" }}
            >
              {/* WICKET KEEP VIEW STARTED */}
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    elevation: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    {selectedWicketKeepers?.map((item, index) => {
                      return (
                        <PlayerCard key={index} item={item} title={"WC"} />
                      );
                    })}
                  </View>
                </View>
                <Text style={{ fontWeight: "700", fontSize: 11, top: 10 }}>
                  Wecket Keepers
                </Text>
              </View>
              {/* WICKET KEEP VIEW ENDED */}

              {/* BATTERS VIEW STARTED */}
              <View
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 11, bottom: 10 }}>
                  Batters
                </Text>

                <View style={{ display: "flex", flexDirection: "row" }}>
                  {selectedBatters?.map((item, index) => {
                    return <PlayerCard key={index} item={item} title={"BAT"} />;
                  })}
                </View>
              </View>
              {/* BATTERS VIEW ENDED */}

              {/* ALL ROUNDER VIEW STARTED */}
              <View style={{ alignItems: "center", bottom: 0 }}>
                <Text style={{ fontWeight: "700", fontSize: 11, bottom: 5 }}>
                  All Rounder
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  {selectedAllRounders?.map((item, index) => {
                    return <PlayerCard key={index} item={item} title={"AR"} />;
                  })}
                </View>
              </View>
              {/* ALL ROUNDER VIEW ENDED */}

              {/* BOWLERS VIEW STARTED */}
              <View style={{ alignItems: "center", bottom: 0 }}>
                <Text style={{ fontWeight: "700", fontSize: 11, bottom: 10 }}>
                  Bowlers
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  {selectedBowlers?.map((item, index) => {
                    return <PlayerCard key={index} item={item} title={"BOW"} />;
                  })}
                </View>
              </View>
              {/* BOWLERS VIEW ENDED */}
            </ImageBackground>
          </View>
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
                backgroundColor: "#000000", // Change this to your desired button color
                borderRadius: 53,
                elevation: 5,
              }}
              onPress={() => {
                setIsDialogVisible(true);
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
                CREATE TEAM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default TeamTwo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
  },
  scrollViewContent: {
    marginTop: 10,
  },
});
