import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../common/BaseUrl";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import GlobalHeader from "../../components/GlobalHeader";
import { saveUser } from "../../redux/reducers/user/action";
import { validateInputs } from '../../common/ValidationAndRegex';
import { createJsonReviver } from "../../common/Utils";

const ProfileSetupTwo = ({ navigation }) => {
  const [KYCstate, setKYCstate] = useState('');
  const [adhaarNumber, setAdhaarNumber] = useState('');
  const [adhaarOtp, setAdhaarOtp] = useState('');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const otpTextInputRef = useRef(null); // Create a ref

  // if you need to B-sheet on button 
  // const openBottomSheet = () => {
  //   setIsBottomSheetVisible(true);
  // };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  // redux components
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
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



  const DOB = selectedDate;
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const AadharVerification = async () => {
    try {
      const validationError = validateInputs(DOB, KYCstate, adhaarNumber);
      if (validationError) {
        Alert.alert(validationError);
        return;
      }

      setLoading(true);
      const response = await fetch(`${BASE_URL}/kyc/generateOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_number: adhaarNumber, isKYCVerified: KYCstate, dateOfBirth: DOB }),
      });

      const responseData = await response.json(createJsonReviver);
      setIsBottomSheetVisible(true);

      if (responseData.success) {
        setAdhaarNumber('');
        Alert.alert("Warning!", 'Please verify your otp');
        setIsBottomSheetVisible(true);
      } else {
        setAdhaarNumber('');
        // Alert.alert('Warning', responseData?.message);
        navigation.navigate("ProfileSetupTwo");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong!. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const VerifyOtp = async () => {
    let responseData; // Declare the variable outside the try block

    try {
      if (adhaarOtp.length === 0) {
        Alert.alert("Please enter valid otp");
        setIsBottomSheetVisible(true);
        return;
      }
      setLoading(true);
      const response = await fetch(`${BASE_URL}/kyc/verifyOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: "aadhaar_v2_RPBGjLuOgUfCbLAobkXo",
          otp: adhaarOtp,
          userId: userFromStorage?.id
        }),
      });
      responseData = await response.json(createJsonReviver);; // Set the responseData within the try block

      if (responseData.success) {
        const updatedUser = { ...userFromStorage, isKYCVerified: true };
        dispatch(saveUser(updatedUser));
        setAdhaarOtp('');
        setIsBottomSheetVisible(false);
        Alert.alert("Your OTP is verified successfully");
        navigation.navigate("Home");
      } else {
        Alert.alert("Warning!", responseData.message);
        navigation.navigate("ProfileSetupTwo");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert(responseData?.message); // Use responseData here
    } finally {
      setLoading(false);
    }
  };

  const autoFillOTP = (otp) => {
    setAdhaarOtp(otp);
    otpTextInputRef.current.focus();
  };

  const handleOTPReception = (receivedOTP) => {
    setLoading(true);
    autoFillOTP(receivedOTP);
    VerifyOtp();
    setLoading(false);
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
            <Text style={{ fontWeight: "700", fontSize: 32 }}>KYC Details</Text>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Enter Your KYC Details...
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
            <Text style={{ fontWeight: "400", fontSize: 16 }}>
              Set your date of birth<Text style={{ color: 'red', fontWeight: '600', fontSize: 20 }}>*</Text>
            </Text>
            {/* datess */}
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={showDatePicker}
              >
                <Text style={styles.selectedDateText}>
                  {selectedDate ? selectedDate.toDateString() : 'Select Date of Birth'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            {/* datess */}

            <View style={{ marginTop: 20 }}>
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#1D1E22" }}
              >
                Full Name (as per Bank KYC)<Text style={{ color: 'red', fontWeight: '600', fontSize: 20 }}>*</Text>
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
                  maxLength={30}
                  placeholder="Enter your state..."
                  placeholderTextColor={"white"}
                  value={KYCstate}
                  onChangeText={(text) => setKYCstate(text)}
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingLeft: 15,
                    fontWeight: "400",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                />
                {/* <Image
                    source={require("../../assets/Iocns/UserInput.png")}
                    style={{ right: 40, width: 16, height: 16 }}
                  /> */}
              </View>

              {/* if you need dropdown */}
              {/* <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                  width: "100%",
                  height: 53,
                  backgroundColor: "#1D1E22",
                  borderRadius: 46,
                }}
              >
                <Text
                  style={{
                    paddingLeft: 15,
                    fontWeight: "400",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  Select State...
                </Text>
                <Image
                  source={require("../../assets/Iocns/DownIcon.png")}
                  style={{ width: 11, height: 6, right: 20 }}
                />
              </TouchableOpacity> */}
              <View style={{ marginTop: 20, elevation: 5 }}>
                <Text
                  style={{ fontWeight: "400", fontSize: 16, color: "#1D1E22" }}
                >
                  Enter your Aadhaar Number (12 Digits)<Text style={{ color: 'red', fontWeight: '600', fontSize: 20 }}>*</Text>
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
                    maxLength={12}
                    keyboardType="numeric"
                    placeholder="Enter Aadhaar Number..."
                    placeholderTextColor={"white"}
                    value={adhaarNumber}
                    onChangeText={(text) => setAdhaarNumber(text)}
                    style={{
                      height: "100%",
                      width: "100%",
                      paddingLeft: 15,
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#FFFFFF",
                    }}
                  />
                  <Image
                    source={require("../../assets/Iocns/UserInput.png")}
                    style={{ right: 40, width: 16, height: 16 }}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              disabled={loading}
              onPress={AadharVerification}
              style={{
                marginTop: "10%",
                padding: 10,
                alignItems: "center",
                flexDirection: "row",
                width: 199,
                height: 45,
                backgroundColor: loading ? 'grey' : "#FF0F0F",
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
                {loading ? <ActivityIndicator size={"small"} color={'white'} /> : 'CONTINUE'}
              </Text>
            </TouchableOpacity>

            <View style={{ marginTop: "6%" }}>
              <Text
                style={{ fontWeight: "400", fontSize: 17, color: "#1D1E22" }}
              >
                For any issues in KYC email us at:
              </Text>
              <View
                style={{
                  marginTop: "3%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  height: 39,
                  borderRadius: 20,
                  borderWidth: 1,
                }}
              >
                <View
                  style={{
                    left: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Image source={require("../../assets/Iocns/Envlope.png")} />
                  <Text style={{ left: 10, fontWeight: "700", fontSize: 12 }}>
                    kyc@oneric.com
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    right: 10,
                    elevation: 4,
                    width: 90,
                    height: 26,
                    backgroundColor: "#FF0F0F",
                    borderRadius: 35,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                      color: "#F0F4F6",
                    }}
                  >
                    SEND EMAIL
                  </Text>
                </TouchableOpacity>
                <CustomBottomSheet isVisible={isBottomSheetVisible}
                >
                  <Text style={{ fontWeight: '600', color: 'black', fontSize: 18, alignSelf: 'center' }}>Enter otp</Text>
                  <TextInput
                    maxLength={16}
                    keyboardType="numeric"
                    placeholder="Verify OTP"
                    placeholderTextColor={"white"}
                    value={adhaarOtp}
                    onChangeText={(text) => setAdhaarOtp(text)}
                    ref={otpTextInputRef} // Attach the ref
                    style={{
                      height: '30%',
                      borderRadius: 50,
                      paddingLeft: 10,
                      alignItems: 'center',
                      backgroundColor: "#1D1E22",
                      color: '#fff',
                      elevation: 3,
                      marginTop: '5%'
                    }}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '10%' }}>
                    <TouchableOpacity
                      disabled={loading}
                      onPress={handleOTPReception}
                      style={{
                        elevation: 3,
                        backgroundColor: loading ? 'grey' : 'green',
                        width: '30%',
                        height: 30,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Text style={{ fontSize: 11, color: '#fff', letterSpacing: 3 }}>
                        {loading ? <ActivityIndicator size={"small"} color={'white'} /> : 'VERIFY'}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={closeBottomSheet} style={{ elevation: 3, backgroundColor: 'red', width: '30%', height: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 11, color: '#fff', letterSpacing: 3 }}>CLOSE</Text>
                    </TouchableOpacity>
                  </View>
                </CustomBottomSheet>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ProfileSetupTwo;

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
    width: 92,
    height: 53,
  },
  dropdown: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1E22",
    borderRadius: 8,
  },
  selectedValue: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modal: {
    width: 92,
    backgroundColor: "#1D1E22",
    borderRadius: 8,
    paddingVertical: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  touchableOpacity: {
    width: '100%',
    height: 53,
    backgroundColor: '#1D1E22',
    justifyContent: 'center',
    paddingLeft: 15,
    borderRadius: 46
  },
  selectedDateText: {
    color: 'white',
  },
});
