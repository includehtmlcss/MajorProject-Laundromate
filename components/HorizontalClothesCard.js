import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { userLatitude, userLongitude } from "../screens/Authentication/SignUp";

const HorizontalClothesCard = ({ containerStyle, imageStyle, item, onPress }) => {
    console.log(userLatitude+" "+userLongitude)
    console.log(item.latitude+" "+item.longitude)
    console.log()
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={item.image}
                style={imageStyle}
            />

            {/* Info */}
            <View
                style={{
                    flex: 1,
                }}
            >
                {/* Name */}
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>
                    {item.name}
                </Text>

                {/* Description */}
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                    Located At
                    {/* {item.location} */}
                </Text>

                {/* Price */}
                <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
                    <Image
                        source={icons.location}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.primary
                        }}
                    />
                    {Math.round(
                        (Math.sqrt(
                            Math.pow(item.longitude-userLongitude,2) + 
                            Math.pow(item.latitude-userLatitude,2)
                        ))*100
                    )/100} Kms
                </Text>

            </View>

            {/* Times */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                }}
            >
                <Image
                    source={icons.Times}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
                    {item.Times} Times
                </Text>
            </View>


        </TouchableOpacity>
    )
}

export default HorizontalClothesCard;