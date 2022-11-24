import React from 'react';
import {
    View,
    Text
} from 'react-native';

import OTPInputView from "@twotalltotems/react-native-otp-input"
import { FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../components";
import { AuthLayout } from "../";
import { number } from "./PhoneNumber";

const Otp = ({ navigation }) => {
    const [timer, setTimer] = React.useState(60)
    const [otp, setOtp] = React.useState("")
    const [isValidOtp, setIsValidOtp] = React.useState(false);

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                }
                else {
                    return prevTimer
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication code has been sent to you"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}>
                <OTPInputView
                    pinCount={6}
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 45,
                        height: 45,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        // console.log(code)
                        setOtp(code)
                    }}
                />
                {/* CountDown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Didn't recieve code ?  </Text>
                    <TextButton label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            // marginTop: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: "center",
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => {
                        const msg = fetch('http://0593-182-77-67-142.ngrok.io/api/v1/sms/validate', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    "phoneNumber": number,
                                    "userInputOtp": otp
                                }
                            )
                        });
                        msg.then((response) => {
                            if (response.headers.get('Content-Length') === "9") {
                                setIsValidOtp(true);
                            }
                        });
                        setTimeout(() => {
                            console.log();
                            console.log(otp);
                            console.log(number);
                            console.log(isValidOtp);
                            if(isValidOtp) {
                                navigation.replace("SignUp")
                            }
                        }, 1000);
                    }}
                />

                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        By Signing Up you agree to our
                    </Text>
                    <TextButton
                        label="Terms and Conditions"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("TnC")}
                    />
                </View>
            </View>
        </AuthLayout>

    )
}

export default Otp;