import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="welcome"
				screenOptions={{
					drawerActiveBackgroundColor: "#22f",
					drawerActiveTintColor: "white",
				}}
			>
				<Drawer.Screen
					name="welcome"
					options={{
						headerStyle: {
							backgroundColor: "purple",
						},
						headerTintColor: "white",
						drawerLabel: "Welcome Screen",
						drawerIcon: ({ color }) => (
							<Feather name="home" size={24} color={color} />
						),
					}}
					component={WelcomeScreen}
				/>
				<Drawer.Screen
					name="user"
					component={UserScreen}
					options={{
						drawerIcon: ({ color }) => (
							<AntDesign name="user" size={24} color={color} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
