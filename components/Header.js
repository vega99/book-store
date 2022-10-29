import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Title from "./Title";

const Header = ({ query, setQuery }) => {
    return (
        <View style={styles.titleContainer}>
            <Title>Books List</Title>
            <TextInput
                placeholder="Search..."
                style={styles.input}
                value={query}
                onChangeText={setQuery}
            />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 10,
        width: "100%",
        alignItems: "center",
    },
    input: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#f7f7f7",
        borderRadius: 8,
        marginTop: 10,
    },
});
