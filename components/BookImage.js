import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BookImage = ({ url, navigation }) => {
    
    return (
        <View style={styles.imgContainer}>
            <ImageBackground source={{ uri: url }} style={styles.bg}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={navigation.goBack}
                >
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={40}
                        color="black"
                    />
                </TouchableOpacity>
                <View style={styles.overlay} />
                <Image
                    source={{ uri: url }}
                    style={styles.img}
                    resizeMode="contain"
                />
            </ImageBackground>
        </View>
    );
};

export default BookImage;

const styles = StyleSheet.create({
    imgContainer: {
        width: "100%",
        height: 300,
        marginBottom: 15,
    },
    bg: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    img: {
        width: "100%",
        height: "100%",
        zIndex: 2,
        position: "absolute",
    },
    back: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 3,
    },
    overlay: {
        backgroundColor: "rgba(255,255,255,0.80)",
        zIndex: 1,
        ...StyleSheet.absoluteFillObject,
    },
});
