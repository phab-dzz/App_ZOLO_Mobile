import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { AntDesign, Feather } from "@expo/vector-icons";
import ItemFriend from "./ItemFriend";

function ListFriend() {
    const [friends, setFriends] = useState([
        {
            id: "1",
            name: "Nguyễn Văn A",
            lastMessage: "Hello, bạn khỏe không?",
            time: "2 phút trước",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: "2",
            name: "Trần Thị B",
            lastMessage: "Lâu rồi không gặp!",
            time: "10 phút trước",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: "3",
            name: "Lê Văn C",
            lastMessage: "Hẹn gặp nhé!",
            time: "1 giờ trước",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
    ]);

    // Hàm xử lý ghim
    const pinFriend = (id) => {
        setFriends((prevFriends) => {
            const friendIndex = prevFriends.findIndex((friend) => friend.id === id);
            const [pinnedFriend] = prevFriends.splice(friendIndex, 1);
            return [pinnedFriend, ...prevFriends];
        });
    };

    // Hàm xử lý xóa
    const deleteFriend = (id) => {
        Alert.alert(
            "Xác nhận",
            "Bạn có chắc chắn muốn xóa người này?",
            [
                { text: "Hủy", style: "cancel" },
                {
                    text: "Xóa",
                    style: "destructive",
                    onPress: () => {
                        setFriends((prevFriends) =>
                            prevFriends.filter((friend) => friend.id !== id)
                        );
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const renderItem = ({ item }) => <ItemFriend {...item} />;

    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <View style={styles.actionLeft}></View>
            <View style={styles.actionRight}>
                <View style={styles.actionButton}>
                    <Feather name="more-horizontal" size={24} color="white" />
                    <Text style={styles.actionText}>Thêm</Text>
                </View>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => pinFriend(item.id)}
                >
                    <AntDesign name="pushpin" size={24} color="white" />
                    <Text style={styles.actionText}>Ghim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => deleteFriend(item.id)}
                >
                    <AntDesign name="delete" size={24} color="white" />
                    <Text style={styles.actionText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={friends}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-230}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default ListFriend;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 10,
    },
    rowBack: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#f8f8f8",
        height: "80%",
    },
    actionLeft: {
        flex: 1,
    },
    actionRight: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ff6b6b",
        flex: 1,
    },
    actionButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        backgroundColor: "#ff6b6b",
        marginHorizontal: 5,
    },
    actionText: {
        fontSize: 12,
        color: "white",
    },
});
