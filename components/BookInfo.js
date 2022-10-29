import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./Title";
import dayjs from "dayjs";

const BookInfo = ({ book }) => {
    return (
        <View style={styles.content}>
            <Title style={styles.title}>{book.title}</Title>
            <Text style={[styles.subtitle, styles.author]}>
                Author - {book.author}
            </Text>
            <View style={styles.card}>
                <Text style={styles.cardItem}>
                    {dayjs(book.published).format("MMMM D, YYYY")}
                    {"\n"}
                    <Text style={styles.label}> published</Text>
                </Text>
                <Text style={styles.cardItem}>
                    {book.pages}
                    {"\n"} <Text style={styles.label}>pages</Text>
                </Text>
            </View>
            <Text style={styles.subtitle}>Synopsis</Text>
            <Text style={styles.description}>{book.description}</Text>
        </View>
    );
};

export default BookInfo;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
    },
    title: {
        marginBottom: 10,
    },
    subtitle: { fontWeight: "bold", fontSize: 18 },
    card: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#f7f7f7",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    cardItem: {
        width: "50%",
        textAlign: "center",
        fontWeight: "bold",
    },
    label: { fontWeight: "400", color: "gray" },
    description: {
        lineHeight: 30,
        textAlign: "justify",
        marginVertical: 10,
        fontSize: 17,
        color: "gray",
        fontWeight: "600",
    },
    author: {
        color: "gray",
    },
});
