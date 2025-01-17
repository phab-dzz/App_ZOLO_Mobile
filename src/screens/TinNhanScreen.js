import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListFriend from '../screen/listFriend/ListFriend';

const TinNhanScreen = () => {
    return (
        <View style={styles.container}>
            <ListFriend />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 18,
    },
});

export default TinNhanScreen;
