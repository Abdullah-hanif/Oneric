import React, { useEffect, useState } from "react";
import {
  FlatList,
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
import FullScreenModal from "../../components/FullScreenModal";
import UpCommingMatchesCard from "../../screenComponents/UpCommingMatchesCard";
import { useSelector } from "react-redux";
import { MATCH_STATUS } from "../../common/Constants";
import { BASE_URL } from "../../common/BaseUrl";
import FullScreenLoader from "../../components/shared/Loading";

// for dummy data
const data = [
  {
    id: "1",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "2",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "3",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "4",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "5",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "6",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "7",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },
  {
    id: "8",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsDetails: {
      teamOneDeatils: {
        flagFirstTeam: require("../../assets/Images/AUSflag.png"),
        teamsOneName: "SRI",
      },
      teamTwoDeatils: {
        flagSecondTeam: require("../../assets/Images/ENGlflag.png"),
        teamsTwoName: "ENG",
      },
    },
  },

  // Add more items here if needed
];

const UpCommingMatches = ({ navigation }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allUpcomingMatches, setAllUpcomingMatches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userFromStorage = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userFromStorage) {
        getUpcommingMatches();
      }
    });
    return unsubscribe;
  }, [userFromStorage]);

  const getUpcommingMatches = async () => {
    try {
      setIsLoading(true);
      const apiUrl = `${BASE_URL}/matches?status=${MATCH_STATUS.NOT_STARTED}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      const responseData = await response?.json();

      if (responseData && responseData.data) {
        const matches = responseData.data;

        const formattedMatches = matches.map((match) => ({
          id: match.id,
          matchName: "match.name",
          teamsOne: match?.teamA?.code,
          teamTwo: match?.teamB?.code,
          timeDuration: { hour: "48", min: "20m" },
          batPrice: match.winingPrice || "00",
          teamsDetails: {
            teamOneDeatils: {
              flagFirstTeam: require("../../assets/Iocns/FlagPlaceholder.png"),
              teamsOneName: match.teamA.code || "NA",
            },
            teamTwoDeatils: {
              flagSecondTeam: require("../../assets/Iocns/FlagPlaceholder.png"),
              teamsTwoName: match.teamB.code || "NA",
            },
          },
        }));
        // console.log("formattedMatches=============", matches);
        setAllUpcomingMatches(formattedMatches);
        setIsLoading(false);
      } else {
        console.error("Expected data structure not found in API response");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching feature matches:", error);
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <UpCommingMatchesCard
      matchName={item?.matchName}
      teamOne={item?.teamsOne}
      teamTwo={item?.teamTwo}
      flagFirstTeam={item?.teamsDetails?.teamOneDeatils?.flagFirstTeam}
      teamsOneName={item?.teamsDetails?.teamOneDeatils?.teamsOneName}
      flagSecondTeam={item?.teamsDetails?.teamTwoDeatils?.flagSecondTeam}
      teamsTwoName={item?.teamsDetails?.teamTwoDeatils?.teamsTwoName}
      hour={item?.timeDuration?.hour}
      min={item?.timeDuration?.min}
      batPrice={item?.batPrice}
      onPress={() => {
        navigation.navigate("JoinContest", { matchId: item.id });
      }}
    />
  );

  return (
    <ImageBackground
      source={require("../../assets/Images/BgImageLite.png")}
      style={{ flex: 1 }}
    >
      <FullScreenLoader show={isLoading} />
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
        <View style={{ marginTop: 5, padding: 3, margin: 3 }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", left: 10 }}
          >
            <Text style={{ fontWeight: "700", fontSize: 32 }}>
              Select Match
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#3A3A3A ",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />

          {/* Cards render */}
          <View
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              data={allUpcomingMatches}
              renderItem={renderItem}
              keyExtractor={(item) => item?.id}
              numColumns={2} // Set the number of columns here (2 in this example)
              columnWrapperStyle={styles.column}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default UpCommingMatches;

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
  flatListContent: {
    justifyContent: "space-around",
  },
  column: {
    margin: 5,
    columnGap: 8,
  },
});
