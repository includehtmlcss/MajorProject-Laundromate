import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants'


const Rating = ({ rating, iconStyle, activeColor = COLORS.orange, inactiveColor = COLORS.lightOrange3 }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 1 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 2 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 3 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 4 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconStyle
                }}
            />
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 5 ? activeColor : inactiveColor,
                    ...styles.rateIcon,
                    ...iconStyle
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    rateIcon: {
        width: 15,
        height: 15
    }
})

export default Rating;