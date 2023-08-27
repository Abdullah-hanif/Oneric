import React, { useEffect, useState } from "react";
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
import HorizontalTopList from "../../components/HorizontalTopList";
import CreateTeamCard from "../../screenComponents/CreateTeamCard";
import PlayersApiService from "../../services/PlayersApiService";
import { BASE_URL } from "../../common/BaseUrl";
import { ROLES } from "../../common/Constants";

// const cardData = [
//   {
//     id: "1",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "2",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "3",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "4",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "5",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "6",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "7",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   {
//     id: "8",
//     teamName: "AUS",
//     title: { team: "RHB", scoreTotal: "804", scoreActual: "15" },
//     firstName: "David",
//     LastName: "Green",
//     captian: { top: "2X", lowerP: "11%" },
//     viceCaptian: { top: "1.5X", lowerP: "6%" },
//     userImg: require("../../assets/Images/CaptianUSerImg.png"),
//   },
//   // Add more card items here if needed
// ];

const ALL_ROLES = [
  {
    id: ROLES.ALL_ROUNDER,
    title: "All Rounder",
    key: ROLES.ALL_ROUNDER,
  },
  {
    id: ROLES.BATSMAN,
    title: "Batsman",
    key: ROLES.BATSMAN,
  },
  {
    id: ROLES.BOWLER,
    title: "Bowler",
    key: ROLES.BOWLER,
  },
  {
    id: ROLES.KEEPER,
    title: "Wicket Keeper",
    key: ROLES.KEEPER,
  },
];

const CreateTeam = ({ route, navigation }) => {
  const teamSize = 11;
  const [selectedTeamNumber, setSelectedTeamNumber] = useState(null);
  const [activeItemId, setActiveItemId] = useState(ROLES.ALL_ROUNDER);
  const [completeData, setCompleteData] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const { matchId, playersToBeEdited } = route.params;

  const handleTeamNumberSelect = (teamNumber) => {
    if (teamNumber < 8) {
      Alert.alert("Select atleast 8 players");
      return;
    }
    setSelectedTeamNumber(teamNumber);
  };

  const renderOption = (teamNumber) => {
    const isActive = selectedTeamNumber === teamNumber;
    return (
      <TouchableOpacity
        key={teamNumber}
        onPress={() => handleTeamNumberSelect(teamNumber)}
        style={[
          styles.option,
          { gap: 5, borderRightWidth: teamNumber === 11 ? 0 : 1 },
        ]}
      >
        {isActive ? (
          <Image
            source={require("../../assets/Iocns/CreateTeamActiveTick.png")}
          />
        ) : (
          <Image
            source={require("../../assets/Iocns/CreateTeamInActiveTick.png")}
          />
        )}
        <Text style={[styles.optionText, { color: "#FFFFFF" }]}>
          {teamNumber}
        </Text>
      </TouchableOpacity>
    );
  };

  const players =
    completeData.find((item) => item.key === activeItemId)?.data || [];

  const cardData = players.map((item) => {
    const firstName = item?.player?.legal_name.split(" ")[0] || "--";
    const lastName = item?.player?.legal_name.split(" ")[1] || "--";
    const teamTitle = item?.player?.nationality?.code || "--";
    const role = item?.player?.roles[0] || "--";
    return {
      id: item?.player?.key || "--",
      teamName: teamTitle,
      title: { team: teamTitle, scoreTotal: "00", scoreActual: "00" },
      firstName: firstName,
      LastName: lastName,
      role: role,
      captian: { top: "2X", lowerP: "11%" },
      viceCaptian: { top: "1.5X", lowerP: "6%" },
      userImg: item?.logo || require("../../assets/Iocns/profile.png"),
    };
  });

  // Initialize selectedPlayers state with all values as false
  const initialSelectedPlayers = cardData.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {});

  const [selectedPlayers, setSelectedPlayers] = useState(
    initialSelectedPlayers
  ); // Store selected players by their card ID

  const handlePlayerSelect = (cardId) => {
    setSelectedPlayers((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId], // Toggle the selected state
    }));
  };

  // HANDLE PREVIEW WITH VALIDATION
  const handlePreview = () => {
    // SELECTION OF ATLEAT 8 PLAYERS
    // ATLEAST ONE WICKET KEEPER AND THREE BOWLER AND THREE BATSMAN AND ONE ALLROUNDER

    const allPlayers = Object.values(selectedMatch?.players)?.map((item) => {
      return {
        ...item,
        selected: selectedPlayers[item?.player?.key],
        role: item?.player?.roles[0] || "--",
      };
    });

    const allSelectedPlayers = allPlayers.filter((item) => {
      const selected = selectedPlayers[item?.player?.key];
      return selected === true;
    });

    if (allSelectedPlayers.length < 8) {
      Alert.alert(
        "Select atleast 8 players includes 1 keeper 3 bowlers 3 batsman and 1 all rounder"
      );
      return;
    }

    const selectedPlayersRolesCount = allSelectedPlayers.reduce((acc, item) => {
      acc[item?.role] = (acc[item?.role] || 0) + 1;
      return acc;
    }, {});

    if (selectedPlayersRolesCount[ROLES.BOWLER] < 3) {
      Alert.alert("Please select atleast 3 bowlers before proceeding");
      return;
    }

    if (selectedPlayersRolesCount[ROLES.BATSMAN] < 3) {
      Alert.alert("Please select atleast 3 batsman before proceeding");
      return;
    }

    if (selectedPlayersRolesCount[ROLES.ALL_ROUNDER] < 1) {
      Alert.alert("Please select atleast 1 all rounder before proceeding");
      return;
    }

    if (selectedPlayersRolesCount[ROLES.KEEPER] < 1) {
      Alert.alert("Please select atleast 1 wicket keeper before proceeding");
      return;
    }

    navigation.navigate("Contest", {
      selectedPlayers: allSelectedPlayers,
      selectedMatch: selectedMatch,
    });
  };

  // PLAYERS AND ROLES WORK STARTS HERE
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (matchId) {
        getAllPlayers(matchId);
      }
    });
    return unsubscribe;
  }, [matchId]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     if (playersToBeEdited) {
  //       console.log("playersToBeEdited-----------",playersToBeEdited)
  //       setSelectedPlayers(playersToBeEdited)
  //     }
  //   });
  //   return unsubscribe;
  // }, [playersToBeEdited]);

  const getAllPlayers = async (matchId) => {
    const response = await fetch(`${BASE_URL}/matches/${matchId}`);
    const parsedResponse = await response.json();

    if (parsedResponse?.players) {
      // GROUP ROLE WISE PLAYERS
      const players = parsedResponse?.players;
      const finalData = await Promise.all([
        PlayersApiService.getPlayersByType(players, "bowler"),
        PlayersApiService.getPlayersByType(players, "batsman"),
        PlayersApiService.getPlayersByType(players, "all_rounder"),
        PlayersApiService.getPlayersByType(players, "keeper"),
      ]);

      const total = finalData.reduce((acc, item) => {
        return acc + item.length;
      }, 0);

      setCompleteData([
        {
          key: ROLES.BOWLER,
          roleName: "Bowler",
          data: finalData[0],
          totalPlayers: total,
        },
        {
          key: ROLES.BATSMAN,
          roleName: "Batsman",
          data: finalData[1],
          totalPlayers: total,
        },
        {
          key: ROLES.ALL_ROUNDER,
          roleName: "All Rounder",
          data: finalData[2],
          totalPlayers: total,
        },
        {
          key: ROLES.KEEPER,
          roleName: "Wicket Keeper",
          data: finalData[3],
          totalPlayers: total,
        },
      ]);

      setSelectedMatch(parsedResponse);
    }
  };

  const totalSelectedPlayers =
    Object.values(selectedPlayers)?.filter((item) => item === true)?.length ||
    0;
  const totalPlayers =
    (completeData &&
      completeData.find((item) => item.key === activeItemId)?.totalPlayers) ||
    0;

  return (
    <ImageBackground
      source={require("../../assets/Images/BgImageLite.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          position: "absolute",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/Images/BottomLeftbackground.png")}
          style={{ height: 330, width: 330 }}
        />
      </View>
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
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginTop: "165%",
          width: "100%",
          flex: 1,
          zIndex: 999,
        }}
      >
        <TouchableOpacity
          style={styles.buttonForAbsoulute}
          onPress={() => {
            handlePreview();
          }}
        >
          <Text
            style={{
              color: "#fff",
              letterSpacing: 3,
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            PREVIEW
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        <GlobalHeader
          sourceLeft={require("../../assets/Iocns/Back.png")}
          styleLeft={{ width: 25, height: 20 }}
          sourceRight={require("../../assets/Images/OnericLogo.png")}
          styleRight={{ width: 49, height: 47, left: 20 }}
          sourceRSleftIconFirst={require("../../assets/Iocns/PTS.png")}
          styleRLFIMG={{ right: 5 }}
          sourceRSleftIcon={require("../../assets/Iocns/WalletHeader.png")}
          TextRSrighttext={"20"}
          sourceRSRightIcon={require("../../assets/Images/ProfileImage.png")}
          sourceLeftOnPress={() => navigation.goBack()}
        />
        <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              left: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontWeight: "700", fontSize: 27 }}>
                Create Team
              </Text>
              <View
                style={{
                  zIndex: 999,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 44,
                  height: 44,
                  backgroundColor: "#5AC73D",
                  borderRadius: 100,
                  bottom: 15,
                  left: 0,
                }}
              >
                <Text
                  style={{ fontWeight: "700", fontSize: 13, color: "#ffff" }}
                >
                  {totalSelectedPlayers || "0"}/11
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 5,
                right: 15,
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/Iocns/FlagPlaceholder.png")}
                  style={{
                    width: 23,
                    height: 16,
                    borderRadius: 100,
                    marginRight: 5,
                  }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "700", fontSize: 11 }}>0/0</Text>
              </View>
              <Image
                source={require("../../assets/Iocns/VS.png")}
                style={{ width: 23, height: 16 }}
              />
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../assets/Iocns/FlagPlaceholder.png")}
                  style={{ width: 23, height: 16, borderRadius: 100 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "700", fontSize: 11 }}>0/0</Text>
              </View>
            </View>
          </View>
          <View style={{ left: 10 }}>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Min 8 Players from a Team
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />

          {/* Selecable option */}

          <View style={styles.container}>
            {Array.from({ length: teamSize }, (_, index) => index + 1).map(
              (teamNumber) => renderOption(teamNumber)
            )}
          </View>
          {/* Selecable option */}
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 15 }}
          >
            {ALL_ROLES.map((item) => (
              <HorizontalTopList
                key={item.id}
                item={item}
                activeId={activeItemId}
                onPress={setActiveItemId}
              />
            ))}
          </ScrollView>

          <View
            style={{
              alignItems: "center",
              marginTop: 10,
              left: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#7D7D7D", fontWeight: "400", fontSize: 16 }}>
              Selected{" "}
              <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>
                ({totalSelectedPlayers}) out of ({totalPlayers}) Players
              </Text>
            </Text>
            <TouchableOpacity style={{ right: 15 }}>
              {/* <Image
                source={require("../../assets/Iocns/FilterIcon.png")}
                style={{ width: 15, height: 16 }}
              /> */}
            </TouchableOpacity>
          </View>

          {cardData?.map((item, index) => (
            <CreateTeamCard
              key={item.key}
              teamName={item.teamName}
              firstName={item.firstName}
              LastName={item.LastName}
              team={item.title.team}
              scoreTotal={item.title.scoreTotal}
              scoreActual={item.title.scoreActual}
              top={item.captian.top}
              lowerP={item.captian.lowerP}
              VlowerP={item.viceCaptian.top}
              Vtop={item.viceCaptian.lowerP}
              userImg={item.userImg}
              selected={selectedPlayers[item.id]} // Pass selected state based on the card ID
              onSelect={() => handlePlayerSelect(item.id)} // Pass the handler function
            />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 3,
    margin: 3,
  },
  buttonForAbsoulute: {
    shadowColor: "#4FAC36   ",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    borderRadius: 25,
    zIndex: 999,
    width: 258,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#278C0C",
    position: "relative",
  },

  container: {
    width: "100%",
    height: 53,
    borderRadius: 25,
    backgroundColor: "#7B7B7B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    overflow: "hidden",
    marginTop: 15,
    alignSelf: "center",
  },
  option: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // borderRightWidth: 1,
    borderRightColor: "#FFFFFF",
  },
  optionText: {
    fontSize: 11,
    fontWeight: "700",
  },
  tickIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 5,
  },
});
