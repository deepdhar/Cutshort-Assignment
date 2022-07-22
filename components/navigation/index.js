import React from "react";
import { createStackNavigator, TransitionPreset, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InfoScreen from "../screens/InfoScreen";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import SendMoneyScreen from "../screens/SendMoneyScreen";
import { Easing } from "react-native";

const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: config,
                        close: config
                    }
                }}
            >
                <Stack.Screen options={{headerShown: false}} name="InfoScreen" component={InfoScreen}/>
                <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen options={{headerShown: false}} name="RequestScreen" component={RequestScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SendMoneyScreen" component={SendMoneyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const config = {
    animation: 'timing',
    config: {
        duration: 300,
        easing: Easing.linear
    }
}

export default MyStack;