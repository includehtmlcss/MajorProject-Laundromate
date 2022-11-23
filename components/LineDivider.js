import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants'

const LineDivider = ({ lineStyle }) => {
    return (
        <View
            style={{
                width: '100%',
                height: 2,
                backgroundColor: COLORS.lightGray2,
                ...lineStyle
            }}
        />
    )
}


export default LineDivider;