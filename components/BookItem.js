import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";

const BookItem = ({ item, navigation }) => {

    const handlePress = () => {
        navigation.navigate('BookDetails', { id: item.id })
    }

    return (
        <TouchableOpacity accessibilityLabel="book" style={styles.container} onPress={handlePress}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.title}
                >
                    {item.title}
                </Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BookItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#f7f7f7",
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: "row",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    description: {
        color: 'gray'
    }
});
