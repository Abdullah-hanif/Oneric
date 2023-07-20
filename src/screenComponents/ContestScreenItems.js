import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContestScreenItems = (
    { teamName,
        userImg,
        scoreTotal,
        scoreActual,
        team,
        firstName,
        LastName,
        lowerP,
        VlowerP,
        top,
        Vtop,
    }
) => {

    return (
        <View style={{ borderBottomColor: '#000000', borderStyle: 'dotted', borderBottomWidth: 1, flexDirection: 'row', marginTop: '2%', height: 90, alignItems: 'center', padding: 5, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ alignSelf: 'center', borderRadius: 25, height: 17, width: 33, position: 'absolute', zIndex: 999, backgroundColor: '#012169', alignItems: 'center', justifyContent: 'center', top: '50%', left: 8 }}>
                        <Text style={{ color: '#ffff', fontSize: 10 }}>{teamName}</Text>
                    </View>
                    <Image source={userImg} style={{ borderRadius: 100, width: 48, height: 48 }} />
                </View>
                <View style={{}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}>
                        <View style={{ alignContent: 'center', borderColor: '#7D7D7D', borderWidth: 1, borderRadius: 25, width: 33, height: 14, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: "center", bottom: 1, fontSize: 10, color: '#7D7D7D', textAlignVertical: 'center' }}>{team}</Text>
                        </View>
                        <Text style={{ color: '#7D7D7D', fontSize: 12, left: 5 }}>PTS/MATCHES - <Text style={{ color: '#000000' }}>{scoreTotal} / {scoreActual}</Text></Text>
                    </View>
                    <View >
                        <Text style={{ fontWeight: '400', fontSize: 16, left: 10 }}>{firstName}</Text>
                        <Text style={{ fontWeight: '600', fontSize: 16, left: 10 }}>{LastName}</Text>
                    </View>
                </View>
            </View>
            {/* ifhr aye gi */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ paddingRight: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '700' }}>{top}</Text>
                    <View style={{ top: 2, borderColor: '#FF0F0F', height: 25, width: 25, borderRadius: 100, borderWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FF0F0F', fontWeight: '700', fontSize: 12 }}>C</Text>
                    </View>
                    <Text style={{ fontWeight: '400', fontSize: 12, top: 3 }}>{lowerP}</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 12, fontWeight: '700' }}>{Vtop}</Text>
                    <View style={{ top: 2, borderColor: '#4D4D4D', height: 25, width: 25, borderRadius: 100, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#4D4D4D', fontWeight: '400', fontSize: 12 }}>C</Text>
                    </View>
                    <Text style={{ fontWeight: '400', fontSize: 12, top: 3 }}>{VlowerP}</Text>
                </View>
            </View>
        </View>
    )
}

export default ContestScreenItems

const styles = StyleSheet.create({})