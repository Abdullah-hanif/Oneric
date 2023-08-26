import React, { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FullScreenModal from '../../components/FullScreenModal';
import GlobalHeader from '../../components/GlobalHeader';
import HorizontalTopList from '../../components/HorizontalTopList';
import FullScreenModalProfile from '../../screenComponents/FullScreenModalProfile';
import FutureMatchesCard from '../../screenComponents/FutureMatchesCard';
import UpCommingMatchesCard from '../../screenComponents/UpCommingMatchesCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatUnixTimestamp, formatUnixTimestampHM, formatUnixTimestampYMD, truncateString } from '../../common/Utils';

const data = [
    { id: '1', title: 'League', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '2', title: 'One Day International', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '3', title: 'Test matches', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '4', title: 'IPL', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '5', title: 'World cup', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    // Add more items here if needed
];
const Home = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeItemId, setActiveItemId] = useState(null);
    const [featruedMatches, setFeatruedMatches] = useState([]);
    const [upCommingMatches, setUpcommingMatches] = useState([]);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const [isModalVisibleProfile, setIsModalVisibleProfile] = useState(false);

    const toggleModalProfile = () => {
        setIsModalVisibleProfile(!isModalVisibleProfile);
    };

    const [currentPage, setCurrentPage] = useState(0);
    const sliderRef = useRef(null);

    const bannerData = [
        { id: 1, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        { id: 2, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        { id: 3, title: 'circket', image: require('../../assets/Images/BannerImage.png') },
        // Add more banner items as needed
    ];

    const UpCommingMatches = async () => {
        try {
            const dataFromAsync = await AsyncStorage.getItem('currrentUserData');
            const parsedObject = JSON.parse(dataFromAsync);

            if (!parsedObject || !parsedObject.data || !parsedObject.data.token) {
                console.error('Token not found in AsyncStorage data');
                return;
            }

            const token = parsedObject.data.token;
            const apiUrl = `https://oneric1.vercel.app/api/cricket/getLiveMatches?token=${token}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response?.json();
            if (responseData && responseData.data) {
                const matches = responseData.data;
                const formattedMatches = matches.map(match => ({
                    format: match.format,
                    teamA: match.teams.a,
                    teamB: match.teams.b,
                    key: match.key, // Use the unique key
                    startAt: match.start_at // Include the start_at timestamp
                }));
                setUpcommingMatches(formattedMatches);
            } else {
                console.error('Expected data structure not found in API response');
            }
        } catch (error) {
            console.error('Error fetching feature matches:', error);
        }
    };

    const fetchFeatureMatches = async () => {
        try {
            const dataFromAsync = await AsyncStorage.getItem('currrentUserData');
            const parsedObject = JSON.parse(dataFromAsync);

            if (!parsedObject || !parsedObject.data || !parsedObject.data.token) {
                console.error('Token not found in AsyncStorage data');
                return;
            }

            const token = parsedObject.data.token;

            const apiUrl = `https://oneric1.vercel.app/api/cricket/getfeaturedMatches?token=${token}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            if (responseData && responseData.data && responseData.data.matches) {
                setFeatruedMatches(responseData?.data?.matches);
            } else {
                console.error('Expected data structure not found in API response');
            }
        } catch (error) {
            console.error('Error fetching feature matches:', error);
        }
    };


    const handleSlideChange = (event) => {
        const slideWidth = event.nativeEvent.layoutMeasurement.width;
        const currentPageOffset = event.nativeEvent.contentOffset.x;
        const pageIndex = Math.floor(currentPageOffset / slideWidth);
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        // Add back button listener
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        // Cleanup
        return () => backHandler.remove();
    }, []);

    // for API only
    useEffect(() => {
        fetchFeatureMatches();
        UpCommingMatches();
    }, []);

    // Function to handle back button press
    const handleBackPress = async () => {
        const userData = await AsyncStorage.getItem('currrentUserData');
        if (userData) {
            // If user is logged in, prevent navigating back and exit app
            Alert.alert('Exit App', 'Are you sure you want to exit?', [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Exit', onPress: () => BackHandler.exitApp() }
            ]);
            return true; // Prevent default behavior
        } else {
            // If user is not logged in, allow navigating back
            navigation.goBack();
            return true; // Prevent default behavior
        }
    };
    return (

        <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
            <View style={styles.main} >
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
                    <Image source={require('../../assets/Images/TopRightBackground.png')} />
                </View>
                <ScrollView style={{ padding: 5, margin: 5 }}>
                    <GlobalHeader
                        sourceLeft={require('../../assets/Images/OnericLogo.png')}
                        sourceRight={require('../../assets/Iocns/Dots.png')}
                        sourceRightOnPress={toggleModalProfile}
                        styleRight={{ width: 7, height: 28, left: 20 }}
                        sourceRSleftIcon={require('../../assets/Iocns/WalletHeader.png')}
                        TextRSrighttext={'20'}
                    // sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
                    />
                    <View style={{ flexDirection: 'column', left: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 24 }}>Dashboard</Text>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>where it all begin..</Text>
                    </View>

                    {/* Bnnanerrr */}
                    <View style={{ zIndex: 9999 }}>
                        <Image source={require('../../assets/Images/ranvijay.png')} style={{ resizeMode: 'contain', position: 'absolute', zIndex: 999, flexDirection: 'row', alignSelf: 'flex-end', width: 160, height: 160, bottom: 40, top: -35 }} />
                    </View>
                    <View style={styles.containerBanner}>

                        <ScrollView
                            ref={sliderRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={handleSlideChange}
                        >
                            {bannerData.map((item, index) => (
                                <View key={item.id} style={styles.slideContainer}>
                                    {/* Replace the below Image component with your custom image component */}
                                    <Image source={item?.image} style={styles.slideImage} />
                                    {/* <Text>{item.title}</Text> */}
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.dotsContainer}>
                            {bannerData.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        { backgroundColor: index === currentPage ? '#FFFFFF' : '#000000', width: index === currentPage ? 27 : 8 },
                                    ]}
                                />
                            ))}
                        </View>
                    </View>

                    {/* bannerrrrr */}
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollViewContent}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item) => (
                            <HorizontalTopList key={item.id} item={item} activeId={activeItemId} onPress={setActiveItemId} />
                        ))}
                    </ScrollView>
                    <View style={{ alignItems: 'center', left: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Featured <Text style={{ color: '#FF0F0F', fontWeight: '600' }}>Matches</Text></Text>
                            <Image source={require('../../assets/Iocns/signals.png')} style={{ left: 10, width: 16, height: 11 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('JoinContest')}>
                            <Image source={require('../../assets/Iocns/RightSideArrow.png')} style={{ right: 20, width: 10, height: 16 }} />
                        </TouchableOpacity  >
                    </View>

                    <ScrollView horizontal scrollIndicatorInsets={false} style={{ padding: 1, margin: 1, marginTop: 10 }}>
                        {featruedMatches && featruedMatches?.map((item) => (
                            <View style={{ margin: 5 }} key={item?.key} >
                                <FutureMatchesCard
                                    MatchName={item?.format || '--'}
                                    teamShortCode={item?.short_name || '-'}
                                    teamOneName={item?.teams?.a?.name || '-'}
                                    teamTwoName={item?.teams?.b?.name || '-'}
                                    remainingTime={formatUnixTimestamp(item?.start_at) || '-'}
                                    flagAteam={item?.teams?.a?.flag || require('../../assets/Iocns/FlagPlaceholder.png')}
                                    flagBteam={item?.teams?.b?.flag || require('../../assets/Iocns/FlagPlaceholder.png')}
                                // totalAmount={item?.batPrice}
                                // onPress={() => navigation.navigate('JoinContest')}
                                />
                            </View>
                        ))}
                    </ScrollView>

                    <View style={{ alignItems: 'center', left: 10, marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: 14 }}>Upcomming <Text style={{ color: '#FF0F0F', fontWeight: '600' }}>Matches</Text></Text>
                            <Image source={require('../../assets/Iocns/signals.png')} style={{ left: 10, width: 16, height: 11 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('UpCommingMatches')}>
                            <Image source={require('../../assets/Iocns/RightSideArrow.png')} style={{ right: 20, width: 10, height: 16 }} />
                        </TouchableOpacity  >
                    </View>

                    {/* cards upcommings*/}
                    <View style={styles.container}>
                        {upCommingMatches.map((item, index) => (
                            <View key={item?.key} style={index % 2 === 0 ? styles.leftColumn : styles.rightColumn}>
                                <UpCommingMatchesCard
                                    matchName={item?.format || '-'}
                                    teamOne={item?.teamA?.country_code || '-'}
                                    teamTwo={item?.teamB?.country_code || '-'}
                                    flagFirstTeam={item?.teamsDetails?.teamOneDeatils?.flagFirstTeam || require('../../assets/Iocns/FlagPlaceholder.png')}
                                    teamsOneName={item?.teamA?.country_code || '-'}
                                    flagSecondTeam={item?.teamsDetails?.teamTwoDeatils?.flagSecondTeam || require('../../assets/Iocns/FlagPlaceholder.png')}
                                    teamsTwoName={item?.teamB?.country_code || '-'}
                                    hour={formatUnixTimestamp(item?.startAt, { date: true }) || '-'}
                                    min={formatUnixTimestamp(item?.startAt, { time: true }) || '-'}
                                    batPrice={'00'}
                                />
                            </View>
                        ))}
                    </View>

                    {/* cards upcommings*/}

                    <View style={{ marginTop: 10, bottom: 5 }}>
                        <TouchableOpacity style={styles.openButton} onPress={toggleModal}>
                            <Text style={styles.openButtonText}>Open Modal</Text>
                        </TouchableOpacity>

                        <FullScreenModal isVisible={isModalVisible} onClose={toggleModal} content={
                            <Image source={require('../../assets/Images/GiftImage.png')} style={{ width: 300, height: 450 }} />
                        } />
                        <FullScreenModalProfile isVisible={isModalVisibleProfile} onClose={toggleModalProfile} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>


    )
}

export default Home;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollViewContent: {
        marginTop: '5%'
    },
    containerBanner: {
        width: '95%',
        marginTop: 10,
        height: 108,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: 'red'
    },
    slideContainer: {
        width: windowWidth * 0.9,
        height: 200,
        backgroundColor: '#F54E4F'
    },
    slideImage: {
        width: 448,
        height: 108,
        resizeMode: 'cover'
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 5,
        left: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        bottom: 5
    },
    flatListContent: {
        justifyContent: 'space-around',
    },
    column: {
        margin: 5,
        columnGap: 8,

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 3,
        margin: 3,
        marginTop: 10
    },
    leftColumn: {
        width: '42%',
        marginBottom: 10,
    },
    rightColumn: {
        width: '48%',
        marginBottom: 10,
    },
})