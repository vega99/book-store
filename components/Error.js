import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Error = ({ error, onRealod }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
            <Pressable onPress={onRealod} style={styles.btn}>
                <Text style={styles.btnText}>Try again</Text>
            </Pressable>
        </View>
    );
};

export default Error;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    error: {
        fontWeight: 'bold',
        marginVertical: 10,
    },
    btn: {
        backgroundColor: 'rgb(99,102,241)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8
    },
    btnText: {
        color: 'white',
        fontSize: 18
    }
});
