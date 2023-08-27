import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RedButton from "../../components/RedButton";
// firebase imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";
import useCrudApi from "../../customAPIHook/useCrudApi";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/reducers/user/action";
import { BASE_URL } from "../../common/BaseUrl";

const OtpVerification = ({ navigation, route }) => {
  const { verificationId, phoneNumber } = route.params;
  const [otp, setOtp] = useState("");
  const [remainingTime, setRemainingTime] = useState(60);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const dispatch = useDispatch();

  const inputRefs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const handleInputChange = (value, index) => {
    setOtp((prevOtp) => {
      const updatedOtp = prevOtp.split("");
      updatedOtp[index] = value;
      return updatedOtp.join("");
    });

    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleInputFocus = (index) => {
    if (!otp[index]) {
      inputRefs[index].current.focus();
    }
  };

  const handleInputBlur = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    let timer;
    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [remainingTime]);

  useEffect(() => {
    // Reset the timer when the component mounts or when OTP is successfully received
    setRemainingTime(60);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    // Add back button listener
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    // Cleanup
    return () => backHandler.remove();
  }, []);

  // Function to handle back button press
  const handleBackPress = () => {
    if (firebase.auth().currentUser) {
      // If user is logged in, prevent navigating back and exit app
      Alert.alert("Exit App", "Are you sure you want to exit?", [
        { text: "Cancel", style: "cancel" },
        { text: "Exit", onPress: () => BackHandler.exitApp() },
      ]);
      return true; // Prevent default behavior
    } else {
      // If user is not logged in, allow navigating back
      navigation.goBack();
      return true; // Prevent default behavior
    }
  };

  // firebase
  const confirmCode = async () => {
    setLoadingVisible(true); // Show loading indicator
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );

    try {
      // Sign in with the provided OTP credential
      await firebase.auth().signInWithCredential(credential);
      setOtp(""); // Clear the OTP input field

      // Manually fetch API
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        dispatch(saveUser(responseData.data));

        if (responseData?.data?.isKYCVerified) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("ProfileSetupOne");
        }
        Alert.alert("Login successful");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setLoadingVisible(false); // Hide loading indicator (regardless of success or error)
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/Images/BgImageLite.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.main}>
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
          <Image
            source={require("../../assets/Images/TopRightBackground.png")}
          />
        </View>
        {/* for logo */}
        <View style={{ padding: 10, margin: 10, marginTop: 100 }}>
          <Image source={require("../../assets/Images/OnericLogo.png")} />

          {/* for main content */}

          <ScrollView style={{ padding: 5, margin: 5 }}>
            <Text style={{ fontSize: 35, fontWeight: "900" }}>
              OTP <Text style={{ fontWeight: "300" }}>Verification</Text>
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "200" }}>
              Please enter the OTP sent to
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#0D8BEE",
                textDecorationLine: "underline",
              }}
            >
              {phoneNumber}
            </Text>

            <View style={{ marginTop: 19 }}>
              <Text style={{ fontWeight: 400, fontSize: 16 }}>Enter OTP</Text>
            </View>

            <View style={styles.otpContainer}>
              {inputRefs.map((inputRef, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  style={[
                    styles.otpInputContainer,
                    { borderColor: otp[index] ? "#fff" : "#ccc" },
                  ]}
                  onPress={() => handleInputFocus(index)}
                >
                  <TextInput
                    ref={inputRef}
                    style={styles.otpInput}
                    value={otp[index] || ""}
                    onChangeText={(value) => handleInputChange(value, index)}
                    maxLength={1}
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    placeholder="0"
                    placeholderTextColor={"#fff"}
                    //   onBlur={handleInputBlur}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.container}>
              {remainingTime > 0 ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/Iocns/OtpTimer.png")}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text style={styles.timerText}>
                    {formatTime(remainingTime)}
                  </Text>
                </View>
              ) : (
                <Text style={styles.timerTextExpire}>Time Expired!</Text>
              )}
            </View>
            <View style={{ marginTop: "15%" }}>
              <RedButton
                text={
                  loadingVisible == true ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    "Verify"
                  )
                }
                iconImg={require("../../assets/Iocns/RightArrow.png")}
                onPress={() => !loadingVisible && confirmCode()}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "transparent",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1D1E22",
    height: 53,
    width: "100%",
    borderRadius: 35,
    elevation: 2,
    alignSelf: "center",
    marginTop: "5%",
  },
  otpInputContainer: {
    borderRightWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
    width: 45,
    justifyContent: "center",
  },
  otpInput: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 111,
    height: 35,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: "5%",
  },
  timerText: {
    fontSize: 16,
    fontWeight: "bold",
    left: 5,
  },
  timerTextExpire: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
