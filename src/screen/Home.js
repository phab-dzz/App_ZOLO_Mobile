import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from './Search';
import FooterBar from './FooterBar';
import BodyChat from './Chat/body/BodyChat';
export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {/* <Search style={styles.search} /> */}
                <View style={styles.content}>
                    <Text>Home</Text>
                </View>
            </View>
            <FooterBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ccc",
    },
    main: {
        flex: 1,
    },
    search: {
        height: 60,
        width: '100%',
    },
    content: {
        flex: 1,

    },
});
