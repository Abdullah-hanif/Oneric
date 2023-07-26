import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FullScreenModalProfile from '../screenComponents/FullScreenModalProfile';

const GlobalHeader = ({
    sourceLeft ,
    sourceRight ,
    styleLeft,
    styleRight ,
    sourceRSleftIcon ,
    TextRSrighttext ,
    styleRLIMG,
    styleRRIMG,
    sourceRSRightIcon,
    onPressRSRIcon,
    sourceRSleftIconFirst,
    styleRLFIMG,
    sourceLeftOnPress,
    sourceRightOnPress,
    
}) => {

    const navigation = useNavigation();
    
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:8,margin:8}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={sourceLeftOnPress}>
                    <Image source={sourceLeft} style={styleLeft ? styleLeft : { height: 48, width: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={sourceRightOnPress}>
                    <Image source={sourceRight} style={styleRight ? styleRight : { left: 20, height: 48, width: 50 }} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={sourceRSleftIconFirst} style={styleRLFIMG ? styleRLFIMG : {width:20,height:17}} />
                    <Image source={sourceRSleftIcon} style={styleRLIMG ? styleRLIMG : {width:20,height:17}} />
                    <Text style={{fontWeight:'700',fontSize:14,left:10}}>{TextRSrighttext || ''}</Text>
                   {sourceRSRightIcon ?
                    <TouchableOpacity onPress={onPressRSRIcon}>
                    <Image source={sourceRSRightIcon} style={styleRRIMG ? styleRRIMG : {width:65,height:70}} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>navigation.navigate('ProfileSetupOne')}>
                    <Image source={require('../assets/Images/ProfileImage.png')} style={styleRRIMG ? styleRRIMG : {width:65,height:70}} />
                    </TouchableOpacity>}
                  
                </View>
            </View>
          
        </View>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({})