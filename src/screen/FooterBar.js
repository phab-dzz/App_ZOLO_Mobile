import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "8%",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        bottom: 0,
    },
    containerIcon: {
        justifyContent: 'center',
    },
});

export default function FooterBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerIcon}>
                <AntDesign name="message1" size={20} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <AntDesign name="team" size={20} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <AntDesign name="clockcircleo" size={20} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerIcon}>
                <AntDesign name="user" size={20} color="grey" />
            </TouchableOpacity>
        </View>

    );
}
