import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants'
import { IconButton } from '../components';

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 60,
                width: 130,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            <IconButton
                containerStyle={{
                    width: 50,
                    // height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.minus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray
                }}
                onPress={onMinus}
            />

            <View
                style = {{
                    flex : 1,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}  
                >
                    <Text style = {{...FONTS.h2}}>
                        {value}
                    </Text>
                </View>
            <IconButton
                containerStyle={{
                    width: 50,
                    // height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.primary
                }}
                onPress={onAdd}
            />
        </View>
    )
}

export default StepperInput;