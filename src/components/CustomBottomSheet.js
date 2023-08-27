import React from 'react';
import { ImageBackground, View } from 'react-native';

const CustomBottomSheet = ({ isVisible, children }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/Images/PrizePoolBg.png')} style={styles.contentContainer} imageStyle={{ resizeMode: 'cover', opacity: 0.7 }}>
                {children}
            </ImageBackground>
        </View>
    );
};

const styles = {
    container: {
        position: 'absolute',
        bottom: -60,
        left: 0,
        right: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        height: 290,
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 20,
        paddingTop: 30,
        borderWidth: 1,
    },

};

export default CustomBottomSheet;
