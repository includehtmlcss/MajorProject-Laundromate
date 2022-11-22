// npm i react-native-keyboard-aware-scroll-view --save
// 1:38:52
import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
    
} from 'react-native';

import {KeyBoardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { Header, IconButton,TextButton , FormInput,FormInputCheck,RadioButton} from '../../components';
import {FONTS, SIZES, COLORS, icons, images} from '../../constants';
import {utils} from '../../utils';
const AddCard = ({ navigation, route }) => {
    const [selectedCard , setSelectedCard] = React.useState(null)
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName , setCardName] = React.useState("")
    const [ cardNameError, setCardNameError] = React.useState("")
    const [expiryDate , setExpiryDate] = React.useState("")
    const[expiryDateError, setExpiryDateError] = React.useState("")
    const[cvv , setCvv] = React.useState("")
    const[cvvError, setCvvError] = React.useState("")
    const[isRemember , setIsRemember] = React.useState(false)
    React.useEffect(() => {
        let {selectedCard} =route.params
        setSelectedCard(selectedCard)
    },[]) 
    function isEnabledAddCart(){
        return cardNumber != "" && cardName != "" && expiryDate != "" && 
        cvv!="" && cardNumberError == "" && cardNameError == "" && 
        cvvError == "" && expiryDateError == "" 
    }
    function renderHeader(){
        return (<Header
            title = "ADD NEW CARDS"
            containerStyle = {{
                height: 50,
                marginHorizontal:SIZES.padding,
                marginTop:40
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
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View 
                        style = {{
                            width : 40
                        }}
                    />

                }
            
            />
            )
    }
    function renderCard(){
        return(
            <ImageBackground
            source = { images.card}
            style ={{
                height :200,
                width :"100%",
                marginTop :SIZES.radius,
                borderRadius: SIZES.radius,
                overflow : 'hidden'

            }}>
                {/* LoGo */}
                <Image
                    source= {selectedCard.icon}
                    resizeMode="contain"
                    style={{
                        position: 'absolute',
                        top:20,
                        right:20,
                        height:40,
                        width:80
                    }}
                    
                />
                {/* Details  */}
                <View
                style={{
                    position: 'absolute',
                    bottom:10,
                    left:0,
                    right:0,
                    paddingHorizontal  :SIZES.padding
                }}>
                    <Text style={{
                        color: COLORS.white,...FONTS.h3

                    }}> 
                    {cardName}
                    </Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex :1 , color: COLORS.white,...FONTS.body3}}>{cardNumber}</Text>
                        <Text style={{ color: COLORS.white , ...FONTS.body3}}>{expiryDate}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    function renderForm() {
        return (
            <View
            style={{ marginTop:SIZES.padding*2}}
            >
                {/* Card number */}
                <FormInput
                    label = "Card Number"
                    keyboardType="number-pad"
                    maxLength={19}
                    value = {cardNumber}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g , '$1 ').trim())
                        utils.validateInput(value,19,setCardNumberError)
                    }}
                    errorMsg= {cardNumberError}
                    appendComponet={
                        <FormInputCheck
                        value={cardNumber}
                        error ={cardNumberError}
                        />
                    }
                />
                {/* CardHolder Name */}
                <FormInput
                    label = "CardHolder Name"
                    value = {cardName}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validateInput(value,1,setCardNameError)
                        setCardName(value)
                    }}
                    errorMsg= {cardNameError}
                    appendComponet={
                        <FormInputCheck
                        value={cardName}
                        error ={cardNameError}
                        />
                    }
                />
                {/* Expiry Date */}
                <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius
                }}
                >
                <FormInput
                    label = "Expiry Date"
                    value = {expiryDate}
                    placeholder = "MM/YY"
                    maxlength={5}
                    containerStyle={{
                        flex:1
                    }}
                    onChange={(value) => {
                        utils.validateInput(value,5,setExpiryDateError)
                        setExpiryDate(value)
                    }}
                    errorMsg= {cardNameError}
                    appendComponet={
                        <FormInputCheck
                        value={expiryDate}
                        error ={expiryDateError}
                        />
                    }
                />
                {/* CVV */}
                <FormInput
                    label = "CVV"
                    value = {cvv}
                    maxlength={3}
                    containerStyle={{
                        flex:1,
                        marginLeft:SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validateInput(value,3,setCvvError)
                        setCvv(value)
                    }}
                    errorMsg= {cardNameError}
                    appendComponet={
                        <FormInputCheck
                        value={cvv}
                        error ={cvvError}
                        />
                    }
                />
                </View>
                {/* Remember */}
                <View
                style = {{
                    alignItems: 'flex-start',
                    marginTop:SIZES.padding
                }}
                >
                    <RadioButton
                    label ="Remeber this card Details "
                    isSelected ={isRemember}
                    onPress = { () => setIsRemember(!isRemember)}
                    ></RadioButton>

                </View>
            </View>
        )
    }
    function renderFooter(){
        return (
            <View
            style={{ 
                paddingTop:SIZES.radius,
                paddingBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding

            }}

            >
                <TextButton
                    label= "Add Card"
                    disable={!isEnabledAddCart()}
                    buttonContainerStyle={{ 
                        height : 60 ,
                        borderRadius : SIZES.radius,
                        backgroundColor : isEnabledAddCart()?  COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress = {() => navigation.goBack()}
                />

            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,    
                backgroundColor:COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyBoardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal:SIZES.padding
                }}
            ></KeyBoardAwareScrollView>

                {/* Card */}
                {renderCard()}
                {/* Forms */}
                {renderForm()}
                {/* Footer */}
                {renderFooter()}

        </View>
    )
}

export default AddCard;