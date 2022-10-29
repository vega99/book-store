import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BooksScreen from "../screens/BooksScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                animation: 'slide_from_right',
                headerShown: false
            }}>
                <Stack.Screen name="Books" component={BooksScreen} />
                <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
