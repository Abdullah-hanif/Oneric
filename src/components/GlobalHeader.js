import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GlobalHeader = ({
    sourceLeft ,
    sourceRight ,
    styleLeft,
    styleRight ,
    sourceRSleftIcon ,
    TextRSrighttext ,
    styleRLIMG,
    styleRRIMG,
    sourceRSRightIcon
}) => {
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:8,margin:8}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={sourceLeft} style={styleLeft ? styleLeft : { height: 48, width: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={sourceRight} style={styleRight ? styleRight : { left: 20, height: 48, width: 50 }} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={sourceRSleftIcon} style={styleRLIMG ? styleRLIMG : {width:20,height:17}} />
                    <Text style={{fontWeight:'700',fontSize:14,left:10}}>{TextRSrighttext || ''}</Text>
                    <Image source={sourceRSRightIcon} style={styleRRIMG ? styleRRIMG : {width:65,height:70}} />
                </View>
            </View>
        </View>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({})