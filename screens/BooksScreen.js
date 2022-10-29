import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { configHeaders, URL } from "../utils/api";
import useAppData from "../hooks/useAppData";
import BookItem from "../components/BookItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const BooksScreen = (props) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const { data, setData } = useAppData();
    const refreshController = useRef(null);

    const filteredBooks = data.filter((book) =>
        book.title.toLowerCase().includes(query.toLocaleLowerCase())
    );

    const onRefresh = useCallback(async () => {
        refreshController.current = new AbortController();
        setRefreshing(true);
        const response = await fetch(URL, {
            method: "GET",
            signal: refreshController.current.signal,
            headers: configHeaders,
        });
        const newData = await response.json();
        setData(newData);
        setRefreshing(false);
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(URL, {
                    method: "GET",
                    signal: controller.signal,
                    headers: configHeaders,
                });
                const newData = await response.json();
                setData(newData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();

        // cancel api requests
        return () => {
            controller.abort();
            refreshController.current?.abort();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator
                        testID="loading"
                        size={"large"}
                        color={"lightgray"}
                    />
                </View>
            ) : (
                <FlatList
                    accessibilityLabel="books"
                    data={filteredBooks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id + "id"}
                    ListHeaderComponent={
                        <Header query={query} setQuery={setQuery} />
                    }
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    renderItem={({ item }) => (
                        <BookItem item={item} navigation={props.navigation} />
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default BooksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },

    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
