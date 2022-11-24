import React from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
	Header,
	IconButton,
	FormInput,
	CardItem,
	FooterTotal
} from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { location } from '../Authentication/SignUp';
import { laundry } from '../Home/Home';
import { q1, q2, q3, tot } from '../Laundry/LaundryDetail';

const Checkout = ({ navigation, route }) => {

	function renderHeader() {
		return (
			<Header
				title="CHECKOUT"
				containerStyle={{
					height: 50,
					marginHorizontal: SIZES.padding,
					marginTop: 25,
					alignItems: 'center'
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
						style={{
							width: 40
						}}
					/>
				}

			/>
		)
	}

	function renderDeliveryAddr() {
		return (
			<View
				style={{
					marginTop: SIZES.padding
				}}
			>
				<Text style={{ ...FONTS.h3 }}>Pickup Address</Text>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: SIZES.radius,
						paddingVertical: SIZES.radius,
						paddingHorizontal: SIZES.radius,
						borderWidth: 2,
						borderRadius: SIZES.radius,
						borderColor: COLORS.lightGray2
					}}
				>
					<Image
						source={icons.location1}
						style={{
							width: 40,
							height: 40,
							tintColor: COLORS.primary,
							marginRight: 10
						}}
					/>
					<Text
						style={{
							marginLeft: SIZES.radius,
							width: "85%",
							...FONTS.body3,
							overflow: 'hidden'
						}}
					>
						{location}
					</Text>
				</View>
			</View>
		)
	}

	const orderSummaryArr = [];
	const qty = [q1, q2, q3];
	const items = (q1 > 0 ? 1 : 0) + (q2 > 0 ? 1 : 0) + (q3 > 0 ? 1 : 0);
	for (let i = 0; i < 3; i++) {
		if (qty[i] != 0) {
			orderSummaryArr.push(
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingVertical: SIZES.radius,
						paddingHorizontal: SIZES.radius,
						justifyContent: 'space-between'
					}}
					key={laundry.services[i].id}
				>
					<Text
						style={{
							...FONTS.body3,
							flex: 4
						}}
					>
						{laundry.services[i].name}
					</Text>
					<Text
						style={{
							...FONTS.body3,
							flex: 1
						}}
					>
						{qty[i] + "x"}
					</Text>
					<Text
						style={{
							...FONTS.body3,
							flex: 1,
							textAlign: 'right'
						}}
					>
						₹{qty[i] * laundry.services[i].price}
					</Text>
				</View>
			);
		}
	}
	function renderOrderSummary() {
		return (
			<View
				style={{
					// marginTop: SIZES.padding
					marginTop: SIZES.radius,
				}}
			>
				{orderSummaryArr}
			</View>
		)
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white
			}}
		>
			{/* Header */}
			{renderHeader()}

			{/* Body */}
			<KeyboardAwareScrollView
				keyboardDismissMode="on-drag"
				extraScrollHeight={-200}
				contentContainerStyle={{
					flexGrow: 1,
					paddingHorizontal: SIZES.padding,
					paddingBottom: 20
				}}
			>

				{/* Delivery Address */}
				{renderDeliveryAddr()}

				<Text style={{ ...FONTS.h3, marginTop: SIZES.padding }}>Order Summary - {laundry.name}</Text>
				{renderOrderSummary()}

			</KeyboardAwareScrollView>
			<FooterTotal
				subTotal={tot}
				shippingFee={0.00}
				total={tot}
				onPress={() => navigation.replace("Success")}
			/>
		</View>
	)
}

export default Checkout; 