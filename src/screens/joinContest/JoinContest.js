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
import FullScreenModal from "../../components/FullScreenModal";
import MatchApiService from "../../services/MatchApiService";

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

const JoinContest = ({ route, navigation }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const { matchId } = route.params;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (matchId) {
        getMatchById(matchId);
      }
    });
    return unsubscribe;
  }, []);

  const getMatchById = async (id) => {
    const response = await MatchApiService.getMatchById(id);
    console.log("selectedMatch", response?.data?.teamA);

    if (response?.data?.teamA && response?.data?.teamB) {
      setSelectedMatch(response?.data);
    }
  };

  const PrizeCard = () => {
    return (
      <View
        style={{
          padding: 5,
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          width: "95%",
          height: 113,
          alignSelf: "center",
          marginTop: "5%",
        }}
      >
        <View
          style={{
            position: "absolute",
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Image
            source={require("../../assets/Iocns/MegaSticker.png")}
            style={{ position: "relative", width: 48, height: 48 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: 400, left: 5 }}>Prize</Text>
          <Text style={{ fontSize: 11, fontWeight: 400, right: 30 }}>
            Joining fee
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", left: 5 }}>
            <Image
              source={require("../../assets/Iocns/InrLogo.png")}
              style={{ height: 21, width: 15, bottom: 5 }}
            />
            <Text style={{ fontWeight: "700", fontSize: 28 }}>3.2 lakhs</Text>
          </View>
          <View
            style={{
              right: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 90,
              height: 30,
              backgroundColor: "#5AC73D",
              borderRadius: 26,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16, color: "#FFFFFF" }}>
              ₹50
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 28,
            backgroundColor: "#FFBE00",
            borderRadius: 25,
            position: "absolute",
            top: "95%",
            alignSelf: "center",
          }}
        >
          <View style={{ left: 15, flexDirection: "row" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/Iocns/MedalIcon.png")}
                style={{ width: 8.5, height: 13 }}
              />
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  color: "#ffff",
                  left: 5,
                }}
              >
                ₹50,444
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                left: 25,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Iocns/TrophyIcon.png")}
                style={{ width: 8.5, height: 13 }}
              />
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  color: "#ffff",
                  left: 5,
                }}
              >
                60%
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", right: 2 }}
          >
            <Image
              source={require("../../assets/Iocns/loader.png")}
              style={{ right: 10, height: 19, width: 19 }}
            />
            <View
              style={{
                elevation: 5,
                width: 88,
                height: 23,
                backgroundColor: "#ffff",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 10, color: "black" }}>
                19/8,000{" "}
                <Text style={{ fontWeight: "400", fontSize: 10 }}>spots</Text>
              </Text>
            </View>
          </View>
        </View>
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
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "150%",
          position: "absolute",
          alignSelf: "center",
          zIndex: 999,
        }}
      >
        <View
          style={{
            width: 316,
            height: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#278C0C", // Change this to your desired button color
            borderRadius: 53,
            elevation: 5,
            padding: 10,
            alignItems: "center",
          }}
          onPress={toggleModal}
        >
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TouchableOpacity onPress={toggleModal} style={{ marginLeft: 15 }}>
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "400",
                  letterSpacing: 5,
                }}
              >
                CREATE POOL
              </Text>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "400",
                  letterSpacing: 5,
                }}
              >
                /
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateTeam", { matchId })}
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
                CREATE TEAM{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
          <View
            style={{ flexDirection: "row", alignItems: "center", left: 10 }}
          >
            <Text style={{ fontWeight: "400", fontSize: 32 }}>
              {selectedMatch?.teamA?.code || "--"}{" "}
              <Text style={{ color: "#7D7D7D" }}>vs</Text>{" "}
              {selectedMatch?.teamB?.code || "--"}
            </Text>
            <View style={{ flexDirection: "row", left: 10 }}>
              <Image
                source={
                  selectedMatch?.teamA?.logo ||
                  require("../../assets/Iocns/FlagPlaceholder.png")
                }
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "contain",
                  borderRadius: 100,
                }}
              />
              <Image
                source={
                  selectedMatch?.teamB?.logo ||
                  require("../../assets/Iocns/FlagPlaceholder.png")
                }
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "contain",
                  borderRadius: 100,
                  left: 10,
                }}
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
          <ScrollView
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
          </ScrollView>

          {/* Cards render */}
          <PrizeCard />
          <PrizeCard />

          <FullScreenModal
            isVisible={isModalVisible}
            onClose={toggleModal}
            content={
              <View
                style={{
                  height: 342,
                  width: 325,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                }}
              >
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 24,
                      color: "#278C0C",
                    }}
                  >
                    Wallet{" "}
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 24,
                      }}
                    >
                      information
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: "15%",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 35,
                      width: 71,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        width: 52,
                        height: 55,
                        backgroundColor: "#FFB800",
                        borderRadius: 6,
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontWeight: "700", fontSize: 27 }}>
                        25
                      </Text>
                      <Text
                        style={{ fontWeight: "700", fontSize: 27, bottom: 10 }}
                      >
                        ₹
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        textAlign: "center",
                        width: 71,
                      }}
                    >
                      Wallet Amount
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 35,
                      width: 71,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        width: 52,
                        height: 55,
                        backgroundColor: "#FFB800",
                        borderRadius: 6,
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontWeight: "700", fontSize: 27 }}>
                        25
                      </Text>
                      <Text
                        style={{ fontWeight: "700", fontSize: 27, bottom: 10 }}
                      >
                        ₹
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        textAlign: "center",
                      }}
                    >
                      Joining Bonus Amount
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 35,
                      width: 71,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        width: 52,
                        height: 55,
                        backgroundColor: "#FFB800",
                        borderRadius: 6,
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontWeight: "700", fontSize: 27 }}>
                        25
                      </Text>
                      <Text
                        style={{ fontWeight: "700", fontSize: 27, bottom: 10 }}
                      >
                        ₹
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        textAlign: "center",
                        width: 71,
                      }}
                    >
                      Useable bonus amount
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 35,
                      width: 71,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        width: 52,
                        height: 55,
                        backgroundColor: "#FFB800",
                        borderRadius: 6,
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontWeight: "700", fontSize: 27 }}>
                        25
                      </Text>
                      <Text
                        style={{ fontWeight: "700", fontSize: 27, bottom: 10 }}
                      >
                        ₹
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        textAlign: "center",
                        width: 71,
                      }}
                    >
                      Entry amount
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Wallet Left Balance
                  </Text>
                  <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <Text style={{ fontWeight: "700", fontSize: 88 }}>100</Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 68,
                        color: "#FF0F0F",
                        bottom: 10,
                      }}
                    >
                      ₹
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("UpCommingMatches")}
                  style={{
                    zIndex: 9999,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: "#278C0C",
                    width: 191,
                    height: 47,
                    borderRadius: 53,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "400",
                      fontSize: 14,
                      letterSpacing: 5,
                    }}
                  >
                    JOIN CONTEST
                  </Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default JoinContest;

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
