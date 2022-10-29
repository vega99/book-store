import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContextProvider from "./context/AppContext";
import AppStack from "./navigation/AppStack";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    return (
        <SafeAreaProvider>
            <AppContextProvider>
                <View style={{ flex: 1 }}>
                    <AppStack />
                </View>
            </AppContextProvider>
        </SafeAreaProvider>
    );
}
