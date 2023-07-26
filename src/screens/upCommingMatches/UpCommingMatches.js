import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import HorizontalTopList from '../../components/HorizontalTopList';
import FullScreenModal from '../../components/FullScreenModal';

// for dummy data
const data = [
    { id: '1', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },
    { id: '2', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },
    { id: '3', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },
    { id: '4', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },
    { id: '5', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },
    { id: '6', matchName: 'The Ashes - 2023', teamsOne: 'SRI', teamTwo: 'BAN', timeDuration: { hour: '48', min: '20m' }, batPrice: '8.25lakhs', teamsFlag: { teamOne: require('../../assets/Images/AUSflag.png'), teamTwo: require('../../assets/Images/ENGlflag.png') } },

    // Add more items here if needed
];

const UpCommingMatches = ({ navigation }) => {
    const [activeItemId, setActiveItemId] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
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
                    // sourceRSleftIconFirst={require('../../assets/Iocns/PTS.png')}
                    styleRLFIMG={{ right: 5 }}
                    sourceRSleftIcon={require('../../assets/Iocns/PTS.png')}
                    styleRLIMG={{ left: 10 }}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    sourceLeftOnPress={() => navigation.goBack()}
                />
                <View style={{ marginTop: 5, padding: 5, margin: 5, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 32 }}>Upcoming Matches</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />


                    {/* Cards render */}
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                        <View style={{ padding: 8, width: 173, height: 183, backgroundColor: '#1D1E22', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '200', fontSize: 14, }}>The Ashes - 2023</Text>
                            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, }}>ENG vs AUS</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 14 }}>20h <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>19m</Text></Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', top: 5, textAlign: 'right', right: 5 }}>₹ 7.06 lakhs</Text>
                        </View>
                        <View style={{ padding: 8, width: 173, height: 183, backgroundColor: '#1D1E22', borderRadius: 8 }}>
                            <View style={{ position: 'absolute', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                <Image source={require('../../assets/Iocns/MegaSticker.png')} style={{ position: 'relative', width: 48, height: 48 }} />
                            </View>
                            <Text style={{ color: '#FFFFFF', fontWeight: '200', fontSize: 14, }}>The Ashes - 2023</Text>
                            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, }}>ENG vs AUS</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>ENG</Text>
                                </View>
                                <Image source={require('../../assets/Iocns/VSwhite.png')} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Images/AUSflag.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff' }}>AUS</Text>
                                </View>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 14 }}>20h <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>19m</Text></Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#FFFFFF',
                                    borderBottomWidth: 1,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{ fontWeight: '400', fontSize: 14, color: '#ffff', top: 5, textAlign: 'right', right: 5 }}>₹ 7.06 lakhs</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default UpCommingMatches
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
    }
})