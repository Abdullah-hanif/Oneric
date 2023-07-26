import React, { useEffect, useRef, useState } from 'react';
import { Button, ScrollView, Text, FlatList } from 'react-native';
import { Image, ImageBackground, Keyboard, StyleSheet, View, TouchableOpacity } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';
import FullScreenModal from '../../components/FullScreenModal';
import ContestScreenItems from '../../screenComponents/ContestScreenItems';
import HorizontalTopList from '../../components/HorizontalTopList';

const CreateTeam = ({ navigation }) => {
  const teamSize = 11;
  const [selectedTeamNumber, setSelectedTeamNumber] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);

  const handleTeamNumberSelect = (teamNumber) => {
    setSelectedTeamNumber(teamNumber);
  };

  const renderOption = (teamNumber) => {
    const isActive = selectedTeamNumber === teamNumber;
    return (
      <TouchableOpacity
        key={teamNumber}
        onPress={() => handleTeamNumberSelect(teamNumber)}
        style={[
          styles.option,
          { gap: 5, borderRightWidth: teamNumber === 11 ? 0 : 1 },
        ]}
      >
        {isActive ? <Image source={require('../../assets/Iocns/CreateTeamActiveTick.png')} /> : <Image source={require('../../assets/Iocns/CreateTeamInActiveTick.png')} />}
        <Text style={[styles.optionText, { color: '#FFFFFF' }]}>
          {teamNumber}
        </Text>
      </TouchableOpacity>
    );
  };
  const cardData = [
    {
      id: '1',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '2',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '3',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '4',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '5',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '6',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '7',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    {
      id: '8',
      teamName: 'AUS',
      title: { team: 'RHB', scoreTotal: '804', scoreActual: '15' },
      firstName: 'David',
      LastName: 'Green',
      captian: { top: '2X', lowerP: '11%' },
      viceCaptian: { top: '1.5X', lowerP: '6%' },
      userImg: require('../../assets/Images/CaptianUSerImg.png')
    },
    // Add more card items here if needed
  ];
  // for dummy data
  const data = [
    { id: '1', title: 'League', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '2', title: 'One Day International', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '3', title: 'Test matches', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '4', title: 'IPL', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    { id: '5', title: 'World cup', titleImage: { activeImg: require('../../assets/Iocns/BatImgActive.png'), nonActiveImg: require('../../assets/Iocns/BatImg.png') } },
    // Add more items here if needed
  ]
  return (

    <ImageBackground source={require('../../assets/Images/BgImageLite.png')} style={{ flex: 1 }}>
      <View style={{ position: 'absolute', height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Image source={require('../../assets/Images/BottomLeftbackground.png')} style={{ height: 330, width: 330 }} />
      </View>
      <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'flex-end', left: 10 }}>
        <Image source={require('../../assets/Images/TopRightBackground.png')} />
      </View>
      <View style={{ alignItems: 'center', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', marginTop: '165%', width: '100%', flex: 1, zIndex: 999 }}>
        <TouchableOpacity style={styles.buttonForAbsoulute} onPress={() => navigation.navigate('JoinContest')}>
          <Text style={{ color: '#fff', letterSpacing: 3, fontWeight: '400', fontSize: 12 }}>PREVIEW</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main} >

        <GlobalHeader
          sourceLeft={require('../../assets/Iocns/Back.png')}
          styleLeft={{ width: 25, height: 20 }}
          sourceRight={require('../../assets/Images/OnericLogo.png')}
          styleRight={{ width: 49, height: 47, left: 20 }}
          sourceRSleftIconFirst={require('../../assets/Iocns/PTS.png')}
          styleRLFIMG={{ right: 5 }}
          sourceRSleftIcon={require('../../assets/Iocns/WalletHeader.png')}
          TextRSrighttext={'20'}
          sourceRSRightIcon={require('../../assets/Images/ProfileImage.png')}
          sourceLeftOnPress={() => navigation.goBack()}
        />
        <View style={{ marginTop: 5, padding: 5, margin: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: '700', fontSize: 32 }}>Create Team</Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 44, height: 44, backgroundColor: '#5AC73D', borderRadius: 100, bottom: 15, left: 5 }}>
                <Text style={{ fontWeight: '700', fontSize: 13, color: '#ffff' }}>0/11</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 5, right: 10 }}>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/Images/AUSflag.png')} />
                <Text style={{ fontWeight: '700', fontSize: 11 }}>0/0</Text>
              </View>
              <Image source={require('../../assets/Iocns/VS.png')} />
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/Images/ENGlflag.png')} style={{}} />
                <Text style={{ fontWeight: '700', fontSize: 11 }}>0/0</Text>
              </View>
            </View>

          </View>
          <View style={{ left: 10 }}>
            <Text style={{ fontWeight: '400', fontSize: 12 }}>Max 7 Players from a Team</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10
            }}
          />

          {/* Selecable option */}

          <View style={styles.container}>
            {Array.from({ length: teamSize }, (_, index) => index + 1).map((teamNumber) =>
              renderOption(teamNumber)
            )}
          </View>
          {/* Selecable option */}
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 15 }}
          >
            {data.map((item) => (
              <HorizontalTopList key={item.id} item={item} activeId={activeItemId} onPress={setActiveItemId} />
            ))}
          </ScrollView>

          <View style={{ alignItems: 'center', marginTop: 10, left: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#7D7D7D', fontWeight: '400', fontSize: 16 }}>Select   <Text style={{ color: 'black', fontWeight: '400', fontSize: 16 }}>Batter (3-6)</Text></Text>
            <TouchableOpacity style={{right:15}}>
              <Image source={require('../../assets/Iocns/FilterIcon.png')} style={{ width: 15, height: 16 }} />
            </TouchableOpacity>
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
            />
          ))}
        </View>

      </ScrollView>



    </ImageBackground>


  )
}

export default CreateTeam;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 3,
    margin: 3
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#278C0C',
    position: 'relative'
  },

  container: {
    width: '100%',
    height: 53,
    borderRadius: 25,
    backgroundColor: '#7B7B7B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    overflow: 'hidden',
    marginTop: 15,
    alignSelf: 'center'
  },
  option: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // borderRightWidth: 1,
    borderRightColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 11,
    fontWeight: '700',
  },
  tickIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 5,
  },

})