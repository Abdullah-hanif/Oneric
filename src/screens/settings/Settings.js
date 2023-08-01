import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

const Settings = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownData = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Add more options as needed
    ];

    const handleDropdownSelect = (value) => {
        setSelectedValue(value);
        setShowDropdown(false);
    };


    const RadioButton = ({ label, selected, onPress }) => {
        return (
            <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
                <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
                    {selected && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        );
    };
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                <Image source={require('../../assets/Images/TopRightBackground.png')} />
            </View>

            <ScrollView style={styles.main} >
                <GlobalHeader
                    sourceLeft={require('../../assets/Iocns/Back.png')}
                    styleLeft={{ width: 25, height: 20 }}
                    sourceRight={require('../../assets/Images/OnericLogo.png')}
                    styleRight={{ width: 49, height: 47, left: 20 }}
                    sourceLeftOnPress={() => navigation.goBack()}
                />
                <View style={{ marginTop: 5, padding: 5, margin: 5, }}>
                    <View style={{ flexDirection: 'row', left: 10, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 30, justifyContent: 'center' }}>Settings</Text>
                        <Image source={require('../../assets/Iocns/Settings.png')} style={{ left: 10, top: 5 }} />

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />


                    <View style={{ margin: 5, padding: 5 }}>

                        <View style={{ marginTop: 20, elevation: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#1D1E22' }}>Enter your name</Text>
                            <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 53, backgroundColor: '#1D1E22', borderRadius: 46 }}>
                                <TextInput maxLength={11} keyboardType='twitter' placeholder='User Name' placeholderTextColor={'white'} style={{ height: '100%', width: '100%', paddingLeft: 15, fontWeight: '400', fontSize: 16, color: '#FFFFFF' }} />
                                <Image source={require('../../assets/Iocns/UserInput.png')} style={{ right: 40, width: 16, height: 16 }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, elevation: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#1D1E22' }}>Enter your mobile number</Text>
                            <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 53, backgroundColor: '#1D1E22', borderRadius: 46 }}>
                                <TextInput maxLength={11} keyboardType='numeric' placeholder='Mobile Number' placeholderTextColor={'white'} style={{ height: '100%', width: '100%', paddingLeft: 15, fontWeight: '400', fontSize: 16, color: '#FFFFFF' }} />
                                {/* <Image source={require('../../assets/Iocns/UserInput.png')} style={{ right: 40, width: 16, height: 16 }} /> */}
                            </View>
                        </View>

                        <View style={{ marginTop: 20, elevation: 5 }}>

                        <Text style={{ fontWeight: '400', fontSize: 16 }}>Set your date of birth</Text>
                        {/* datess */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 92, height: 53, borderRadius: 46, backgroundColor: '#1D1E22' }}>
                                <Text style={{ fontWeight: '400', fontSize: 16, color: '#FFFFFF' }}>DD</Text>
                                <Image source={require('../../assets/Iocns/DownIcon.png')} style={{ width: 11, height: 6 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 92, height: 53, borderRadius: 46, backgroundColor: '#1D1E22' }}>
                                <Text style={{ fontWeight: '400', fontSize: 16, color: '#FFFFFF' }}>MM</Text>
                                <Image source={require('../../assets/Iocns/DownIcon.png')} style={{ width: 11, height: 6 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 117, height: 53, borderRadius: 46, backgroundColor: '#1D1E22' }}>
                                <Text style={{ fontWeight: '400', fontSize: 16, color: '#FFFFFF' }}>YYYY</Text>
                                <Image source={require('../../assets/Iocns/DownIcon.png')} style={{ width: 11, height: 6 }} />
                            </TouchableOpacity>
                        </View>
                        </View>
                        {/* datess */}


                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#1D1E22' }}>Full Name (as per Bank KYC)</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, width: '100%', height: 53, backgroundColor: '#1D1E22', borderRadius: 46 }}>
                                <Text style={{ paddingLeft: 15, fontWeight: '400', fontSize: 16, color: '#FFFFFF' }} >Select State...</Text>
                                <Image source={require('../../assets/Iocns/DownIcon.png')} style={{ width: 11, height: 6, right: 20 }} />
                            </TouchableOpacity>
                            <View style={{ marginTop: 20, elevation: 5 }}>
                                <Text style={{ fontWeight: '400', fontSize: 16, color: '#1D1E22' }}>Enter your email adress</Text>
                                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 53, backgroundColor: '#1D1E22', borderRadius: 46 }}>
                                    <TextInput maxLength={11} keyboardType='email-address' placeholder='Email adress...' placeholderTextColor={'white'} style={{ height: '100%', width: '100%', paddingLeft: 15, fontWeight: '400', fontSize: 16, color: '#FFFFFF' }} />
                                    <Image source={require('../../assets/Iocns/UserInput.png')} style={{ right: 40, width: 16, height: 16 }} />
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, elevation: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#1D1E22' }}>Select gender</Text>
                            <View style={{ alignSelf:'center',width:'95%',marginTop: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                                <RadioButton
                                    label="Male"
                                    selected={selectedOption === 'Option 1'}
                                    onPress={() => handleOptionChange('Option 1')}
                                />
                                <RadioButton
                                    label="Female"
                                    selected={selectedOption === 'Option 2'}
                                    onPress={() => handleOptionChange('Option 2')}
                                />
                                <RadioButton
                                    label="Others"
                                    selected={selectedOption === 'Option 3'}
                                    onPress={() => handleOptionChange('Option 3')}
                                />
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('ProfileSetupTwo')} style={{ marginTop: '10%', padding: 10, alignItems: 'center', flexDirection: 'row', width: 199, height: 45, backgroundColor: '#FF0F0F', borderRadius: 53 }}>

                            <Text style={{ fontWeight: '400', fontSize: 16, color: '#FFFFFF', left: 10, letterSpacing: 5 }}>SAVE IT!</Text>

                        </TouchableOpacity>
                        <View style={{ marginTop: '10%' }}>
                            <Text style={{ fontWeight: '400', fontSize: 17, color: '#1D1E22' }}>For any issues in KYC email us at:</Text>
                            <View style={{ marginTop: '3%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 39, borderRadius: 20, borderWidth: 1 }}>
                                <View style={{ left: 10, flexDirection: "row", justifyContent: 'center', alignContent: 'center' }}>
                                    <Image source={require('../../assets/Iocns/Envlope.png')} />
                                    <Text style={{ left: 10, fontWeight: '700', fontSize: 12 }}>kyc@oneric.com</Text>
                                </View>
                                <TouchableOpacity style={{ right: 10, elevation: 4, width: 90, height: 26, backgroundColor: '#FF0F0F', borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: '700', fontSize: 12, color: '#F0F4F6' }}>SEND EMAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default Settings
    ;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 3,
        margin: 3
    },
    scrollViewContent: {
        marginTop: 10
    },
    container: {
        width: 92,
        height: 53,
    },
    dropdown: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D1E22',
        borderRadius: 8,
    },
    selectedValue: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    modal: {
        width: 92,
        backgroundColor: '#1D1E22',
        borderRadius: 8,
        paddingVertical: 4,
    },
    dropdownItem: {
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        color: '#FFFFFF',
        fontSize: 16,
    },

    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        borderColor: '#5AC73D',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FF0F0F',
    },
    label: {
        fontSize: 16,
    },

})