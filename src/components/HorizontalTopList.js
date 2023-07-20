import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { truncateString } from '../common/Utils';

export default HorizontalTopList = ({ item, activeId, onPress }) => {
    const isActive = item.id === activeId;

    return (
        <TouchableOpacity
            onPress={() => onPress(item.id)}
            style={[
                styles.card,
                { borderColor: isActive ? '#FF0F0F' : '#7D7D7D', borderWidth: isActive ? 2 : 1 },
            ]}
        >
            <Text style={[styles.title, { color: isActive ? '#FF0F0F' : '#7D7D7D', fontWeight: isActive ? '700' : '400' }]}>{truncateString(item.title, 14)}</Text>
            {
                isActive ? <Image source={item?.titleImage?.activeImg} style={{ width: 31, height: 31 }} />
                    :
                    <Image source={item?.titleImage?.nonActiveImg} style={{ width: 31, height: 31 }} />
            }
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    scrollViewContent: {
        flexDirection: 'row',
    },

    card: {
        width: 138,
        height: 45,
        borderRadius: 53,
        // borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 8,
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'left',
        width: 80

    },
});