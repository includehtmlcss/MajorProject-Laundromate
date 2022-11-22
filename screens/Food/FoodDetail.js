import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../../constants'


import { Header, IconButton, CartQuantityButton, IconLabel
    , TextButton, LineDivider, Rating, StepperInput } from '../../components';


const FoodDetail = ({navigation}) => {

    const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani)

    const [selectedSize, setSelectedSize] = React.useState("")
    const[qty,setQty ] = React.useState(1)
    function renderHeader() {
        return (
            <Header
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    // alignItems: 'center',
                    // justifyContent: 'center'
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            borderWidth: 1,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => console.log("Back")}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}


                    />
                }
            />
        )

    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >

                {/* Food Card */}

                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* Calories & Favourite */}
                    <View

                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: SIZES.radius,
                            marginTop: SIZES.base
                        }}
                    >
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style={{ ...FONTS.body4, color: COLORS.darkGray2, marginLeft: SIZES.radius }}>{foodItem?.calories} calories</Text>

                        </View>

                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />
                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{
                            height: 170,
                            width: "100%"
                        }}
                    />

                </View>
                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    {/* Name & Description */}
                    <Text
                        style={{ ...FONTS.h1 }}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        {foodItem?.description}
                    </Text>

                    {/* Ratings, Duration & Shipping */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                                // backgroundColor: COLORS.primary
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="30 Mins"
                        />

                        {/* Shipping */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                                // backgroundColor: COLORS.primary
                            }}
                            icon={icons.dollar}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Free Shiping"
                        />

                    </View>

                    {/* Sizes */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Sizes:</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: SIZES.padding,
                                flexWrap: 'wrap'
                            }}
                        >

                            {dummyData.sizes.map((size, index) => {
                                return (
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            height: 55,
                                            width: 55,
                                            margin: SIZES.base,
                                            borderRadius: SIZES,
                                            borderWidth: 1,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            radius,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            }
                            )}

                        </View>


                    </View>

                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>1.2 KM away from you</Text>

                </View>

                {/* Ratings */}

                <Rating
                    rating={4}
                    iconStyle={{
                        marginLeft: 3
                    }}
                />
            </View>
        )
    }
    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* StepperInput */}
                <StepperInput
                value = {qty}
                onAdd ={ () => setQty(qty+1)}
                onMinus ={ () => {
                    if(qty>1){
                        setQty(qty-1)
                    }    
                }}
                />
                
                {/* TextButton */}
                <TextButton 
                    buttonContainerStyle={{
                        flex:1,
                        flexDirection: 'row',
                        height:60,
                        marginLeft:SIZES.radius,
                        paddingHorizontal:SIZES.radius,
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.primary
                    }}
                    label="Buy Now"
                    label2="$15.99"
                    onPress = {() => navigation.navigate("MyCart")}
                ></TextButton>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Text>FoodDetail</Text>
            {/*Header*/}
            {renderHeader}

            {/*Body*/}
            <ScrollView>
                {/*Food Detail*/}
                {renderDetails()}

                <LineDivider />

                {/* Restaurant */}

                {renderRestaurant()}

            </ScrollView>
            {/*Footer*/}
            <LineDivider />

            {renderFooter()}

        </View>
    )
}

export default FoodDetail;