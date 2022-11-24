import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../../constants'


import { Header, IconButton, CartQuantityButton, IconLabel, TextButton, LineDivider, Rating, StepperInput } from '../../components';
import { laundry } from '../Home/Home';
import { userLatitude, userLongitude } from '../Authentication/SignUp';
import { TouchableOpacity } from 'react-native-gesture-handler';

var q1, q2, q3, tot;
const LaundryDetail = ({ navigation }) => {
	console.log(laundry);
	function renderHeader() {
		return (
			<Header
				title={laundry.name}
				containerStyle={{
					height: 50,
					paddingHorizontal: SIZES.padding,
					marginTop: 25,
					alignItems: 'center',
					justifyContent: 'center'
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
					<CartQuantityButton
						quantity={3}
					/>
				}
			/>
		)
	}

	// const cartArr = [];
	// for (let i = 0; i < laundry.services.length; i++) {
	// 	cartArr.push(
	// 		<View
	// 			style={{
	// 				flexDirection: 'row',
	// 				alignItems: 'center',
	// 				justifyContent: 'space-between',
	// 				marginBottom: SIZES.padding
	// 			}}
	// 			key={laundry.services[i].id}
	// 		>
	// 			<View
	// 				style={{
	// 					flexDirection: 'row',
	// 					alignItems: 'center'
	// 				}}
	// 			>
	// 				<View
	// 					style={{
	// 						height: 60,
	// 						width: 60,
	// 						borderRadius: SIZES.radius,
	// 						backgroundColor: COLORS.lightGray2,
	// 						marginRight: SIZES.padding - 5,
	// 						alignItems: 'center',
	// 						justifyContent: 'center',
	// 						paddingTop: 8
	// 					}}
	// 				>
	// 					<Image
	// 						source={laundry.services[i].img}
	// 						resizeMode="contain"
	// 						style={{
	// 							height: 60,
	// 							tintColor: COLORS.darkGray,
	// 						}}
	// 					/>
	// 				</View>
	// 				<View
	// 					style={{
	// 						flexDirection: 'column',
	// 						alignItems: 'flex-start'
	// 					}}
	// 				>
	// 					<Text
	// 						style={{
	// 							...FONTS.body2,
	// 							fontSize: SIZES.body4 + 2
	// 						}}
	// 					>
	// 						{laundry.services[i].name}
	// 					</Text>
	// 					<Text
	// 						style={{
	// 							...FONTS.body4,
	// 							marginTop: -3,
	// 							color: COLORS.darkGray
	// 						}}
	// 					>
	// 						₹{laundry.services[i].price} / pc
	// 					</Text>
	// 				</View>
	// 			</View>
	// 			<View
	// 				style={{
	// 					flexDirection: 'row',
	// 					alignItems: 'center'
	// 				}}
	// 			>
	// 				<TouchableOpacity
	// 					style={{
	// 						height: 33,
	// 						width: 33,
	// 						borderTopLeftRadius: SIZES.radius - 4,
	// 						borderBottomLeftRadius: SIZES.radius - 4,
	// 						borderColor: COLORS.darkGray2,
	// 						borderWidth: 1,
	// 						borderRightWidth: 0,
	// 						alignItems: 'center',
	// 						justifyContent: 'center',
	// 					}}
	// 					onPress={() => console.log("Minus")}
	// 				>
	// 					<Image
	// 						source={icons.minus}
	// 						style={{
	// 							width: 15,
	// 							height: 15,
	// 							tintColor: COLORS.darkGray2
	// 						}}
	// 					/>
	// 				</TouchableOpacity>
	// 				<View
	// 					style={{
	// 						height: 33,
	// 						width: 33,
	// 						borderColor: COLORS.primary,
	// 						backgroundColor: COLORS.primary,
	// 						borderWidth: 1,
	// 						alignItems: 'center',
	// 						justifyContent: 'center',
	// 					}}
	// 				>
	// 					<Text
	// 						style={{
	// 							...FONTS.h3,
	// 							color: COLORS.white
	// 						}}
	// 					>
	// 						1
	// 					</Text>
	// 				</View>
	// 				<TouchableOpacity
	// 					style={{
	// 						height: 33,
	// 						width: 33,
	// 						borderTopRightRadius: SIZES.radius - 4,
	// 						borderBottomRightRadius: SIZES.radius - 4,
	// 						borderColor: COLORS.darkGray2,
	// 						borderWidth: 1,
	// 						borderLeftWidth: 0,
	// 						alignItems: 'center',
	// 						justifyContent: 'center',
	// 					}}
	// 					onPress={() => console.log("Plus")}
	// 				>
	// 					<Image
	// 						source={icons.plus}
	// 						style={{
	// 							width: 15,
	// 							height: 15,
	// 							tintColor: COLORS.darkGray2
	// 						}}
	// 					/>
	// 				</TouchableOpacity>
	// 			</View>
	// 		</View>
	// 	);
	// }

	const [qty1, setQty1] = React.useState(0);
	const [qty2, setQty2] = React.useState(0);
	const [qty3, setQty3] = React.useState(0);
	const [total, setTotal] = React.useState(0);

	function renderDetails() {
		return (
			<View
				style={{
					marginTop: 20,
					marginBottom: SIZES.padding,
					paddingHorizontal: SIZES.padding
				}}
			>
				{/* Laundry Card */}
				<View
					style={{
						height: 190,
						borderRadius: 15,
						backgroundColor: COLORS.primary,
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
								source={icons.Times}
								style={{
									width: 30,
									height: 30,
									tintColor: COLORS.white
								}}
							/>
							<Text style={{ ...FONTS.body4, color: COLORS.white, marginLeft: SIZES.base - 5 }}>{laundry.Times} Times</Text>
						</View>
						{/* Favourite */}
						<View
							style={{
								flexDirection: 'row',
							}}
						>
							<Image
								source={icons.rating}
								style={{
									width: 18,
									height: 18,
									tintColor: COLORS.white
								}}
							/>
							<Text style={{ ...FONTS.body4, color: COLORS.white, marginLeft: SIZES.base - 3 }}>Rated {laundry.rating}/5</Text>
						</View>
					</View>

					{/* Laundry Image */}
					<Image
						source={laundry?.image}
						resizeMode="contain"
						style={{
							height: 170,
							width: "100%",
							marginTop: -8,
							tintColor: COLORS.white
						}}
					/>

				</View>
				{/* Laundry Info */}
				<View
					style={{
						marginTop: SIZES.padding,
					}}
				>
					{/* Name & Address */}
					<Text
						style={{ ...FONTS.h1, fontSize: SIZES.h1 - 4 }}
					>
						{laundry.name}
					</Text>
					<Text
						style={{
							marginTop: SIZES.base,
							color: COLORS.darkGray,
							textAlign: 'justify',
							...FONTS.body3
						}}
					>
						{laundry.location + ", Indore"}
					</Text>

					{/* Ratings, Duration & Distance */}
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
							icon={icons.rating}
							label={laundry.rating + "/5"}
							labelStyle={{
								color: COLORS.white
							}}
						/>

						{/* Duration */}
						<IconLabel
							containerStyle={{
								marginLeft: SIZES.radius + 5,
								paddingHorizontal: 0
								// backgroundColor: COLORS.primary
							}}
							icon={icons.clock}
							iconStyle={{
								tintColor: COLORS.black
							}}
							label={laundry.eta + " days"}
						/>

						{/* Shipping */}
						<IconLabel
							containerStyle={{
								marginLeft: SIZES.radius + 5,
								paddingHorizontal: 0,
								// backgroundColor: COLORS.primary
							}}
							icon={icons.location}
							iconStyle={{
								tintColor: COLORS.black
							}}
							label={Math.round(
								(Math.sqrt(
									Math.pow(laundry.longitude - userLongitude, 2) +
									Math.pow(laundry.latitude - userLatitude, 2)
								)) * 100
							) / 100 + " Kms"}
						/>

					</View>

					<Text
						style={{
							...FONTS.h3,
							marginTop: SIZES.padding
						}}
					>
						Choose From Our Services
					</Text>

					{/* Laundry Services Cart */}
					<View
						style={{
							marginTop: SIZES.padding
						}}
					>
						{/* {cartArr} */}
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: SIZES.padding
							}}
							key={laundry.services[0].id}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										height: 60,
										width: 60,
										borderRadius: SIZES.radius,
										backgroundColor: COLORS.lightGray2,
										marginRight: SIZES.padding - 5,
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: 8
									}}
								>
									<Image
										source={laundry.services[0].img}
										resizeMode="contain"
										style={{
											height: 60,
											tintColor: COLORS.darkGray,
										}}
									/>
								</View>
								<View
									style={{
										flexDirection: 'column',
										alignItems: 'flex-start'
									}}
								>
									<Text
										style={{
											...FONTS.body2,
											fontSize: SIZES.body4 + 2
										}}
									>
										{laundry.services[0].name}
									</Text>
									<Text
										style={{
											...FONTS.body4,
											marginTop: -3,
											color: COLORS.darkGray
										}}
									>
										₹{laundry.services[0].price} / pc
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopLeftRadius: SIZES.radius - 4,
										borderBottomLeftRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderRightWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									disabled={qty1 === 0 ? true : false}
									onPress={() => {
										console.log("Minus");
										setQty1(qty1 - 1);
										setTotal(total - laundry.services[0].price);
									}}
								>
									<Image
										source={icons.minus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
								<View
									style={{
										height: 33,
										width: 33,
										borderColor: COLORS.primary,
										backgroundColor: COLORS.primary,
										borderWidth: 1,
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Text
										style={{
											...FONTS.h3,
											color: COLORS.white
										}}
									>
										{qty1}
									</Text>
								</View>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopRightRadius: SIZES.radius - 4,
										borderBottomRightRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderLeftWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									onPress={() => {
										console.log("Plus");
										setQty1(qty1 + 1);
										setTotal(total + laundry.services[0].price);
									}}
								>
									<Image
										source={icons.plus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: SIZES.padding
							}}
							key={laundry.services[1].id}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										height: 60,
										width: 60,
										borderRadius: SIZES.radius,
										backgroundColor: COLORS.lightGray2,
										marginRight: SIZES.padding - 5,
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: 8
									}}
								>
									<Image
										source={laundry.services[1].img}
										resizeMode="contain"
										style={{
											height: 60,
											tintColor: COLORS.darkGray,
										}}
									/>
								</View>
								<View
									style={{
										flexDirection: 'column',
										alignItems: 'flex-start'
									}}
								>
									<Text
										style={{
											...FONTS.body2,
											fontSize: SIZES.body4 + 2
										}}
									>
										{laundry.services[1].name}
									</Text>
									<Text
										style={{
											...FONTS.body4,
											marginTop: -3,
											color: COLORS.darkGray
										}}
									>
										₹{laundry.services[1].price} / pc
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopLeftRadius: SIZES.radius - 4,
										borderBottomLeftRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderRightWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									disabled={qty2 === 0 ? true : false}
									onPress={() => {
										console.log("Minus");
										setQty2(qty2 - 1);
										setTotal(total - laundry.services[1].price);
									}}
								>
									<Image
										source={icons.minus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
								<View
									style={{
										height: 33,
										width: 33,
										borderColor: COLORS.primary,
										backgroundColor: COLORS.primary,
										borderWidth: 1,
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Text
										style={{
											...FONTS.h3,
											color: COLORS.white
										}}
									>
										{qty2}
									</Text>
								</View>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopRightRadius: SIZES.radius - 4,
										borderBottomRightRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderLeftWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									onPress={() => {
										console.log("Plus");
										setQty2(qty2 + 1);
										setTotal(total + laundry.services[1].price);
									}}
								>
									<Image
										source={icons.plus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: SIZES.padding
							}}
							key={laundry.services[2].id}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										height: 60,
										width: 60,
										borderRadius: SIZES.radius,
										backgroundColor: COLORS.lightGray2,
										marginRight: SIZES.padding - 5,
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: 8
									}}
								>
									<Image
										source={laundry.services[2].img}
										resizeMode="contain"
										style={{
											height: 60,
											tintColor: COLORS.darkGray,
										}}
									/>
								</View>
								<View
									style={{
										flexDirection: 'column',
										alignItems: 'flex-start'
									}}
								>
									<Text
										style={{
											...FONTS.body2,
											fontSize: SIZES.body4 + 2
										}}
									>
										{laundry.services[2].name}
									</Text>
									<Text
										style={{
											...FONTS.body4,
											marginTop: -3,
											color: COLORS.darkGray
										}}
									>
										₹{laundry.services[2].price} / pc
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopLeftRadius: SIZES.radius - 4,
										borderBottomLeftRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderRightWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									disabled={qty3 === 0 ? true : false}
									onPress={() => {
										console.log("Minus");
										setQty3(qty3 - 1);
										setTotal(total - laundry.services[2].price);
									}}
								>
									<Image
										source={icons.minus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
								<View
									style={{
										height: 33,
										width: 33,
										borderColor: COLORS.primary,
										backgroundColor: COLORS.primary,
										borderWidth: 1,
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Text
										style={{
											...FONTS.h3,
											color: COLORS.white
										}}
									>
										{qty3}
									</Text>
								</View>
								<TouchableOpacity
									style={{
										height: 33,
										width: 33,
										borderTopRightRadius: SIZES.radius - 4,
										borderBottomRightRadius: SIZES.radius - 4,
										borderColor: COLORS.darkGray2,
										borderWidth: 1,
										borderLeftWidth: 0,
										alignItems: 'center',
										justifyContent: 'center',
									}}
									onPress={() => {
										console.log("Plus");
										setQty3(qty3 + 1);
										setTotal(total + laundry.services[2].price);
									}}
								>
									<Image
										source={icons.plus}
										style={{
											width: 15,
											height: 15,
											tintColor: COLORS.darkGray2
										}}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
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
				{/* TextButton */}
				<TextButton
					buttonContainerStyle={{
						flex: 1,
						flexDirection: 'row',
						height: 60,
						paddingHorizontal: SIZES.radius,
						borderRadius: SIZES.radius,
						backgroundColor: total === 0 ? COLORS.transparentPrimary : COLORS.primary
					}}
					disabled={total === 0 ? true : false}
					label={"Pay ₹" + total + " and Schedule Pickup"}
					onPress={() => {
						q1 = qty1;
						q2 = qty2;
						q3 = qty3;
						tot = total;
						navigation.navigate("Checkout")
					}}
				/>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.white }}>
			{/*Header*/}
			{renderHeader()}

			{/*Body*/}
			<ScrollView>
				{/*Laundry Detail*/}
				{renderDetails()}

				{/* <LineDivider /> */}

			</ScrollView>
			{/*Footer*/}
			<LineDivider />

			{renderFooter()}

		</View>
	)
}

export { q1, q2, q3, tot };
export default LaundryDetail;