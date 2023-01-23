import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = ({ navigation }) => {
	const openDrawerHandler = () => {
		navigation.toggleDrawer();
	};
	return (
		<View>
			<Text>UserScreen</Text>
			<Button title="open drawer" onPress={openDrawerHandler} />
		</View>
	);
};

export default UserScreen;

const styles = StyleSheet.create({});
