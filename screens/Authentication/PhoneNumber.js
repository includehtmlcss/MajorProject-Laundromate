import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import {
    FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from "../../components";

import { utils } from "../../utils";

var number;
const PhoneNumber = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [phoneNumberError, setPhoneNumberError] = React.useState("")
    function isEnableSendOtp() {
        // return phoneNumber != "" && phoneNumberError == ""
        return true
    }
    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Please enter your 10 digit mobile number"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}>
                <FormInput
                    label="Phone Number (+91)"
                    keyboardType="numeric"
                    autoCompleteType="tel"
                    placeholder="942 504 2465"
                    onChange={(value) => {
                        utils.validatePhoneNumber(value, setPhoneNumberError)
                        setPhoneNumber(value)
                        number = value;
                    }}
                    errorMsg={phoneNumberError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={phoneNumber == "" || (phoneNumber != "" && phoneNumberError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: phoneNumber == "" ? COLORS.gray : (phoneNumber != "" && phoneNumberError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
            </View>
            <TextButton
                label="Send OTP"
                disabled={isEnableSendOtp() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: "center",
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendOtp() ? COLORS.primary : COLORS.transparentPrimary
                }}
                onPress={() => {
                    number = "+91" + phoneNumber;
                    // const msg = fetch('http://1e0c-223-236-24-92.ngrok.io/api/v1/sms/send', {
                    //     method: 'POST',
                    //     headers: {
                    //         Accept: 'application/json',
                    //         'Content-Type': 'application/json'
                    //     },
                    //     body: JSON.stringify(
                    //         {
                    //             "phoneNumber": number
                    //         }
                    //     )
                    // });
                    // msg.then((response) => response.json()).then((json) => { console.log(json.message) });
                    navigation.navigate("Otp");
                }}
            />
        </AuthLayout>
    )
}
export { number };
export default PhoneNumber;