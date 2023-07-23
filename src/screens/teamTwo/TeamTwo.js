import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

// for dummy data
const data = [
    {
        id: '1',
        title: 'C',
        playerName: 'S Smith',
        batter: false,
        allRounder: false,
        Bowler: false,
        wicketKeeperImage: require('../../assets/Images/CaptianUSerImg.png'),
        allRounder: false
    },
    {
        id: '2',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '3',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '4',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '5',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '6',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '7',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '8',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: false,
        wicketKeeper: false,
        allRounder: true
    },
    {
        id: '9',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: true,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '10',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: true,
        wicketKeeper: false,
        allRounder: false
    },
    {
        id: '11',
        title: 'VC',
        playerName: 'Jhon Smith',
        playerProfileImage: require('../../assets/Images/CaptianUSerImg.png'),
        batter: true,
        allRounder: false,
        Bowler: true,
        wicketKeeper: false,
        allRounder: false
    },

    // Add more items here if needed
];

const TeamTwo = ({ navigation }) => {
    const [activeItemId, setActiveItemId] = useState(null);

    return (
        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                <Image source={require('../../assets/Images/TopRightBackground.png')} />
            </View>
            <ScrollView style={styles.main} >
                <View style={{ padding: 10 }}>
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
                </View>
                <View style={{ bottom: 10, marginTop: 0, padding: 0, margin: 0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 20 }}>
                        <Text style={{ fontWeight: '400', fontSize: 32 }}>ENG <Text style={{ color: '#7D7D7D' }}>vs</Text> AUS</Text>
                        <View style={{ flexDirection: 'row', left: 10 }}>
                            <Image source={require('../../assets/Images/AUSflag.png')} />
                            <Image source={require('../../assets/Images/ENGlflag.png')} style={{ left: 10 }} />
                        </View>

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#3A3A3A ',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        }}
                    />
                    <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#CE1124', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>C</Text>
                            </View>
                            <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#CE1124', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>J Root</Text>
                            </View>
                            <Image source={require('../../assets/Images/CaptianUSerImg.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                        </View>
                        <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                            </View>
                            <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                            </View>
                            <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '45%', marginTop: 20, }}>
                        <ImageBackground source={require('../../assets/Images/CreateTeamGround.png')} style={{ elevation: 5, alignItems: 'center', height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} imageStyle={{ height: 625, width: '100%' }}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                        <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                    </View>
                                    <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                </View>
                                <Text style={{ fontWeight: '700', fontSize: 11, top: 10 }}>Wecket Keepers</Text>
                            </View>
                            <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 11, bottom: 10 }}>Batters</Text>
                                <View style={{ left: 4, flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: "center", bottom: 0 }}>
                                <Text style={{ fontWeight: '700', fontSize: 11, bottom: 5 }}>All Rounder</Text>
                                <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                        <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                    </View>
                                    <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', bottom: 0 }}>
                                <Text style={{ fontWeight: '700', fontSize: 11, bottom: 10 }}>Bowlers</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '70%', }}>

                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                    <View style={{ elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-start', top: 1, height: 16.16, width: 16.16, backgroundColor: '#012169', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 8, fontWeight: '700', color: '#F0F4F6' }}>VC</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', borderRadius: 25, height: 13, width: 48.14, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '75%', left: 0 }}>
                                            <Text style={{ color: '#ffff', fontSize: 10, fontWeight: '400' }}>S Smith</Text>
                                        </View>
                                        <Image source={require('../../assets/Images/VCaptianUserImage.png')} style={{ borderRadius: 100, width: 48, height: 48 }} />
                                    </View>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginTop: '35%'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 258,
                                height: 45,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000000', // Change this to your desired button color
                                borderRadius: 53,
                                elevation: 5
                            }}
                            onPress={() => {
                                navigation.navigate('CreateTeam')
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 12, fontWeight: '400', letterSpacing: 5 }}>
                                CREATE TEAM
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default TeamTwo;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
    },
    scrollViewContent: {
        marginTop: 10
    }
})