import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalHeader from "../../components/GlobalHeader";
import HorizontalTopList from "../../components/HorizontalTopList";
import FullScreenModal from "../../components/FullScreenModal";
import { getUserDataFromAsyncStorage } from "../../common/Utils";
import { BASE_URL } from "../../common/BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../redux/reducers/user/action";
import { Alert } from "react-native";

// for dummy data
const data = [
  {
    id: "1",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },
  {
    id: "2",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },
  {
    id: "3",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },
  {
    id: "4",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },
  {
    id: "5",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },
  {
    id: "6",
    matchName: "The Ashes - 2023",
    teamsOne: "SRI",
    teamTwo: "BAN",
    timeDuration: { hour: "48", min: "20m" },
    batPrice: "8.25lakhs",
    teamsFlag: {
      teamOne: require("../../assets/Images/AUSflag.png"),
      teamTwo: require("../../assets/Images/ENGlflag.png"),
    },
  },

  // Add more items here if needed
];

const ProfileSetupOne = ({ navigation }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState(null);

  // redux components
  const dispatch = useDispatch();
  const userFromStorage = useSelector((state) => state.user);

  useEffect(() => {
    try {
      if (userFromStorage) {
        setUserData(userFromStorage);
      }
    } catch (error) {
      console.error("Error in profile setup one screen:", error);
    }
  }, [userFromStorage]);

  const handleNext = async () => {
    try {
      if (userData?.username === "" || userData?.username === null) {
        Alert.alert("Please enter your name");
        return;
      }
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/users/${userData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userData?.username }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        dispatch(saveUser(userData));
        setIsLoading(false);
        navigation.navigate("ProfileSetupTwo");
        return;
      } else {
        setIsLoading(false);
        Alert.alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
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
          sourceLeftOnPress={() => navigation.goBack()}
        />
        <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
          <View style={{ flexDirection: "column", left: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 32 }}>
              Profile Setup
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Enter Your Details...
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#3A3A3A ",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
            }}
          />

          <View style={{ margin: 5, padding: 5 }}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Upload your Image{" "}
              <Text
                style={{ fontWeight: "700", fontSize: 16, color: "#FF0F0F" }}
              >
                or
              </Text>
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#999A9E" }}
              >
                {" "}
                select form our library
              </Text>{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 20,
                alignSelf: "flex-start",
                width: "100%",
                right: 15,
              }}
            >
              <View style={{ width: 142, height: 142 }}>
                <TouchableOpacity
                  style={{
                    top: "40%",
                    left: "90%",
                    alignSelf: "flex-end",
                    flexDirection: "row",
                    position: "absolute",
                    zIndex: 9999,
                    width: 33,
                    height: 33,
                    backgroundColor: "#5AC73D",
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupPlus.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <Image
                  source={require("../../assets/Images/ProfileSetupUser.png")}
                  style={{ width: 142, height: 142 }}
                />
              </View>
              <View style={styles.container}>
                <View style={styles.row}>
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupOne.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupTwo.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupThree.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.row}>
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupFour.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupFive.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupSix.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.row}>
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupEleven.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupEight.png")}
                    style={styles.image}
                  />
                  <Image
                    source={require("../../assets/Iocns/ProfileSetupNine.png")}
                    style={styles.image}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#1D1E22" }}
              >
                Full Name (as per Bank KYC)
              </Text>
              <View
                style={{
                  marginTop: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  height: 53,
                  backgroundColor: "#1D1E22",
                  borderRadius: 46,
                }}
              >
                <TextInput
                  placeholder="UserName"
                  value={userData?.username}
                  placeholderTextColor={"white"}
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingLeft: 15,
                    fontWeight: "400",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                  onChangeText={(value) => {
                    setUserData({ ...userData, username: value });
                  }}
                />
                <Image
                  source={require("../../assets/Iocns/UserInput.png")}
                  style={{ right: 40, width: 16, height: 16 }}
                />
              </View>
              <View style={{ marginTop: 20, elevation: 5 }}>
                <Text
                  style={{ fontWeight: "400", fontSize: 16, color: "#1D1E22" }}
                >
                  Referral’s Mobile Number (Earn Cashback)
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: "center",
                    width: "100%",
                    height: 53,
                    backgroundColor: "#1D1E22",
                    borderRadius: 46,
                  }}
                >
                  <TextInput
                    placeholder="Optional..."
                    placeholderTextColor={"white"}
                    style={{
                      height: "100%",
                      width: "100%",
                      paddingLeft: 15,
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#FFFFFF",
                    }}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                !isLoading && handleNext();
              }}
              style={{
                marginTop: "10%",
                padding: 10,
                alignItems: "center",
                flexDirection: "row",
                width: 199,
                height: 45,
                backgroundColor: isLoading ? "gray" : "#FF0F0F",
                borderRadius: 53,
              }}
            >
              <Image
                source={require("../../assets/Iocns/RightArrow.png")}
                style={{ width: 26, height: 19 }}
              />
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#FFFFFF",
                  left: 10,
                  letterSpacing: 5,
                }}
              >
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ProfileSetupOne;

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
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 142,
    width: 142,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "33.33%",
  },
  image: {
    width: 51,
    height: 68,
    margin: 2,
  },
});
