import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { configHeaders, URL } from "../utils/api";
import useAppData from "../hooks/useAppData";
import BookItem from "../components/BookItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Error from "../components/Error";

const BooksScreen = (props) => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const { data, setData } = useAppData();
    const controller = useRef(null);
    const isMounted = useRef(false);

    const filteredBooks = data.filter((book) =>
        book.title.toLowerCase().includes(query.toLocaleLowerCase())
    );

    const onRefresh = useCallback(async () => {
        controller.current = new AbortController();
        setRefreshing(true);
        const response = await fetch(URL, {
            method: "GET",
            signal: controller.current.signal,
            headers: configHeaders,
        });
        const newData = await response.json();
        // PREVENTING MEMORY LEAKS
        isMounted.current && setData(newData);
        isMounted.current && setRefreshing(false);
    }, []);

    const getData = useCallback(async () => {
        controller.current = new AbortController();
        setLoading(true);
        try {
            const response = await fetch(URL, {
                method: "GET",
                signal: controller.signal,
                headers: configHeaders,
            });
            const newData = await response.json();
            // PREVENTING MEMORY LEAKS
            isMounted.current && setData(newData);
        } catch (error) {
            isMounted.current && setError('Something went very wrong!');
        } finally {
            // PREVENTING MEMORY LEAKS
            isMounted.current && setLoading(false);
        }
    }, []);

    useEffect(() => {
        isMounted.current = true;
        getData();

        // cancel api requests
        return () => {
            isMounted.current = false;
            controller.current?.abort();
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
            ) : error ? (
                <Error onRealod={getData} error={error}/>
            ) : (
                <FlatList
                    accessibilityLabel="books"
                    data={filteredBooks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id + "id"}
                    ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    renderItem={({ item }) => <BookItem item={item} navigation={props.navigation} />}
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
