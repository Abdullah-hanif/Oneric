import React, { useEffect, useRef, useState } from "react";
import { Button, ScrollView, Text, FlatList, Alert } from "react-native";
import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import GlobalHeader from "../../components/GlobalHeader";
import FullScreenModal from "../../components/FullScreenModal";
import ContestScreenItems from "../../screenComponents/ContestScreenItems";
import MatchComparisionComponent from "../../components/shared/MatchComparision";
import LogoComparision from "../../components/shared/LogoComparision";
import { ROLES } from "../../common/Constants";

const Contest = ({ route, navigation }) => {
  const { selectedPlayers, selectedMatch } = route.params;
  const [selectedCaptain, setSelectedCaptain] = useState(null);
  const [selectedViceCaptain, setSelectedViceCaptain] = useState(null);

  const cardData = selectedPlayers?.map((item) => {
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
      captian: { top: "2X", lowerP: "0%" },
      viceCaptian: { top: "0%", lowerP: "2X" },
      userImg: item?.logo || require("../../assets/Iocns/profile.png"),
    };
  });

  const handlePreview = () => {
    if (!selectedCaptain || !selectedViceCaptain) {
      Alert.alert("Please select captain and vice captain");
      return;
    }

    navigation.navigate("TeamTwo", {
      selectedPlayers: selectedPlayers,
      selectedMatch: selectedMatch,
      selectedCaptain: selectedCaptain,
      selectedViceCaptain: selectedViceCaptain,
      isEdit: true
    });
  };

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
            style={{ flexDirection: "row", alignItems: "center", left: 10 }}
          >
            <MatchComparisionComponent selectedMatch={selectedMatch} />
            <LogoComparision selectedMatch={selectedMatch} />
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />
          <View style={{ marginTop: 10, left: 10 }}>
            <Text style={{ color: "#7D7D7D", fontWeight: "400", fontSize: 16 }}>
              Choose{" "}
              <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>
                Captain
              </Text>{" "}
              &{" "}
              <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>
                Vice Captian
              </Text>
            </Text>
          </View>

          {cardData.map((item, index) => (
            <ContestScreenItems
              key={item.id}
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
              onCaptainSelect={() => {
                if (selectedCaptain?.id === item.id) {
                  setSelectedCaptain(null);
                  return;
                }
                setSelectedCaptain(item);
              }}
              onViceCaptainSelect={() => {
                if (selectedViceCaptain?.id === item.id) {
                  setSelectedViceCaptain(null);
                  return;
                }
                setSelectedViceCaptain(item);
              }}
              isCaptain={selectedCaptain?.id === item.id}
              isViceCaptian={selectedViceCaptain?.id === item.id}
            />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Contest;

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
});
