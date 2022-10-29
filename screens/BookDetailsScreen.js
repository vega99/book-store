import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppData from "../hooks/useAppData";
import BookImage from "../components/BookImage";
import BookInfo from "../components/BookInfo";

const BookDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const { data } = useAppData();

    const selectedBook = data.find((book) => book.id === id);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <BookImage url={selectedBook.imgUrl} navigation={navigation} />
                <BookInfo book={selectedBook} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
