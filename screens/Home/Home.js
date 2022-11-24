import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList,
} from 'react-native';
import FilterModal from './FilterModal';
import { HorizontalClothesCard, VerticalClothesCard } from "../../components";
import {
	FONTS,
	SIZES,
	COLORS,
	icons
} from "../../constants";
import { useNavigation } from '@react-navigation/native';
import { location } from '../Authentication/SignUp';

const Section = ({ title, onPress, children }) => {
	return (
		<View>
			{/* Header */}
			<View
				style={{
					flexDirection: 'row',
					marginHorizontal: SIZES.padding,
					marginTop: 30,
					marginBottom: 20
				}}
			>
				<Text style={{ flex: 1, ...FONTS.h3 }}>
					{title}
				</Text>

				{/* <TouchableOpacity
					onPress={onPress}
				>
					<Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
						Show All
					</Text>
				</TouchableOpacity> */}

			</View>

			{/* Content */}
			{children}
		</View>
	)
}

var laundry;
const Home = () => {

	const navigation = useNavigation();
	const [showFilterModal, setShowFilterModal] = React.useState(false);
	// Render

	function renderSearch() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 40,
					alignItems: 'center',
					marginHorizontal: SIZES.padding,
					marginVertical: SIZES.base,
					paddingHorizontal: SIZES.radius,
					borderRadius: SIZES.radius,
					backgroundColor: COLORS.lightGray2,
					marginBottom: 20,
					marginTop: 20
				}}
			>
				{/* Icon */}
				<Image
					source={icons.search}
					style={{
						height: 20,
						width: 20,
						tintColor: COLORS.darkGray
					}}
				/>

				{/* Text Input */}
				<TextInput
					style={{
						flex: 1,
						marginLeft: SIZES.radius,
						color: COLORS.darkGray,
						...FONTS.body3,
					}}
					placeholder="What's dirty today..."
					placeholderTextColor={COLORS.gray3}
				/>
				{/* Filter Button */}
				<TouchableOpacity
					onPress={() => setShowFilterModal(true)}
				>
					<Image
						source={icons.filter}
						style={{
							height: 20,
							width: 20,
							tintColor: COLORS.darkGray
						}}
					/>

				</TouchableOpacity>

			</View>
		)
	}

	function renderPickUpFrom() {
		return (
			<View
				style={{
					marginTop: SIZES.radius,
					marginHorizontal: SIZES.padding
				}}
			>
				<Text
					style={{
						color: COLORS.primary,
						...FONTS.body3
					}}
				>
					PICKING UP FROM
				</Text>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: SIZES.base,
						alignItems: 'center'
					}}
				>
					<Text style={{ ...FONTS.h3 }}>
						{location}
					</Text>
					<Image
						source={icons.down_arrow}
						style={{
							marginLeft: SIZES.base,
							height: 20,
							width: 20,
							tintColor: COLORS.primary
						}}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	// const msg = fetch('http://laundromate-env.eba-hhbbzuqp.ap-south-1.elasticbeanstalk.com/', {
	// 	method: 'GET',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(
	// 		{

	// 		}
	// 	)
	// });

	// DATA (TO BE FETCHED FROM API)

	const topRatedLaundries = [{
		id: 1,
		name: "Suresh Laundry",
		location: "Vijay Nagar",
		price: "7/item",
		Times: 79,
		isFavourite: true,
		image: require("../../assets/dummyData/dryclean.png"),
		rating: 4,
		latitude: 20.555,
		longitude: 76.222,
		services: [{
			id: 1,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 100
		}, {
			id: 2,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 15
		}, {
			id: 3,
			name: "Curtain Cleaning",
			img: require("../../assets/dummyData/curtaincleaning.png"),
			price: 120
		}],
		eta: 2
	}, {
		id: 2,
		name: "Ramesh Cleaners",
		location: "South Tukoganj",
		price: "7/item",
		Times: 102,
		isFavourite: true,
		image: require("../../assets/dummyData/woolencare.png"),
		rating: 3.8,
		latitude: 24.22,
		longitude: 70.11,
		services: [{
			id: 1,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 10
		}, {
			id: 2,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 110
		}, {
			id: 3,
			name: "Linen Wash",
			img: require("../../assets/dummyData/linenwash.png"),
			price: 120
		}],
		eta: 3
	}, {
		id: 3,
		name: "Cloth Care",
		location: "Geeta Bhawan",
		price: "7/item",
		Times: 94,
		isFavourite: true,
		image: require("../../assets/dummyData/linenwash.png"),
		rating: 3.6,
		latitude: 21.33,
		longitude: 72.123,
		services: [{
			id: 1,
			name: "Curtain Cleaning",
			img: require("../../assets/dummyData/curtaincleaning.png"),
			price: 100
		}, {
			id: 2,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 15
		}, {
			id: 3,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 120
		}],
		eta: 1.5
	}];

	const nearbyLaundries = [{
		id: 1,
		name: "Suresh Laundry",
		location: "Vijay Nagar",
		price: "7/item",
		Times: 79,
		isFavourite: true,
		image: require("../../assets/dummyData/dryclean.png"),
		rating: 4,
		latitude: 20.555,
		longitude: 76.222,
		services: [{
			id: 1,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 100
		}, {
			id: 2,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 15
		}, {
			id: 3,
			name: "Curtain Cleaning",
			img: require("../../assets/dummyData/curtaincleaning.png"),
			price: 120
		}],
		eta: 2
	}, {
		id: 2,
		name: "Ramesh Cleaners",
		location: "South Tukoganj",
		price: "7/item",
		Times: 102,
		isFavourite: true,
		image: require("../../assets/dummyData/woolencare.png"),
		rating: 3.8,
		latitude: 24.22,
		longitude: 70.11,
		services: [{
			id: 1,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 10
		}, {
			id: 2,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 110
		}, {
			id: 3,
			name: "Linen Wash",
			img: require("../../assets/dummyData/linenwash.png"),
			price: 120
		}],
		eta: 3
	}, {
		id: 3,
		name: "Cloth Care",
		location: "Geeta Bhawan",
		price: "7/item",
		Times: 94,
		isFavourite: true,
		image: require("../../assets/dummyData/linenwash.png"),
		rating: 3.6,
		latitude: 21.33,
		longitude: 72.123,
		services: [{
			id: 1,
			name: "Curtain Cleaning",
			img: require("../../assets/dummyData/curtaincleaning.png"),
			price: 100
		}, {
			id: 2,
			name: "Iron & Fold",
			img: require("../../assets/dummyData/heavysteampress.png"),
			price: 15
		}, {
			id: 3,
			name: "Dry Clean",
			img: require("../../assets/dummyData/dryclean.png"),
			price: 120
		}],
		eta: 1.5
	}];

	return (
		<View
			style={{
				flex: 1
			}}
		>
			{/* Location */}
			{renderPickUpFrom()}

			{/* Search */}
			{renderSearch()}

			{/* Filter */}
			{showFilterModal &&
				<FilterModal
					isVisible={showFilterModal}
					onClose={() => setShowFilterModal(false)}
				/>
			}
			<FlatList
				data={nearbyLaundries}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View
						style={{
							marginTop: -20
						}}
					>
						{/* TOP RATED LAUNDRIES */}
						<Section
							title="Top Rated Laundries"
							onPress={() => console.log("Show All Top Rated Laundries")}
						>
							<FlatList
								data={topRatedLaundries}
								keyExtractor={item => `${item.id}`}
								horizontal
								showsHorizontalScrollIndicator={false}
								renderItem={({ item, index }) => (
									<VerticalClothesCard
										containerStyle={{
											marginLeft: index == 0 ? SIZES.padding : 18,
											marginRight: index == topRatedLaundries.length - 1 ? SIZES.padding : 0
										}}
										item={item}
										onPress={() => {
											// console.log("Top Rated Laundry No." + item.id)
											laundry = topRatedLaundries[item.id - 1];
											navigation.navigate("LaundryDetail");
										}}
									/>
								)}
							/>
						</Section>

						{/* LAUNDRIES NEARBY ME */}

						<Section
							title="Laundries Nearby Me"
							onPress={() => console.log("Show All Laundries Nearby Me")}
						>
							<FlatList
								data={nearbyLaundries}
								keyExtractor={item => `${item.id}`}
								horizontal
								showsHorizontalScrollIndicator={false}
								renderItem={({ item, index }) => (
									<HorizontalClothesCard
										containerStyle={{
											height: 180,
											width: SIZES.width * 0.85,
											marginLeft: index == 0 ? SIZES.padding : 18,
											marginRight: index == nearbyLaundries.length - 1 ? SIZES.padding : 0,
											paddingRight: SIZES.radius,
											alignItems: 'center'
										}}
										imageStyle={{
											marginTop: 35,
											height: 150,
											width: 150
										}}
										item={item}
										onPress={() => {
											laundry = nearbyLaundries[item.id - 1];
											navigation.navigate("LaundryDetail");
										}}
									/>
								)}
							/>
						</Section>
					</View>
				}
				ListFooterComponent={
					<View style={{ height: 240 }} />
				}
			/>
		</View>
	)
}
export { laundry };
export default Home;