import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import MyMessageItem from './MyMessagaItem'; // Thành phần MyMessagaItem
import MessageItem from './MessageItem'; // Thành phần MessageItem

// Dữ liệu mẫu cho đoạn chat
const mockRoomState = {
    lstChat: [
        {
            user: { _id: '1', avatar: 'https://via.placeholder.com/50', email: 'user1@example.com' },
            content: 'Hello, how are you?',
            createdAt: '9:00 AM',
            type: 'text',
            reacts: [{ emoji: '😀' }],
            _id: 'msg1',
        },
        {
            user: { _id: '2', avatar: 'https://via.placeholder.com/50', email: 'user2@example.com' },
            content: 'I am fine, thank you!',
            createdAt: '9:05 AM',
            type: 'text',
            reacts: [{ emoji: '😍' }],
            _id: 'msg2',
        },
        {
            user: { _id: '1', avatar: 'https://via.placeholder.com/50', email: 'user1@example.com' },
            content: 'https://via.placeholder.com/150',
            createdAt: '9:10 AM',
            type: 'image',
            reacts: [{ emoji: '😑' }],
            _id: 'msg3',
        },
        {
            user: { _id: '3', avatar: 'https://via.placeholder.com/50', email: 'owner@example.com' },
            content: 'I am the room owner.',
            createdAt: '9:15 AM',
            type: 'text',
            reacts: [{ emoji: '😭' }],
            _id: 'msg4',
        },
    ],
};

const mockUserState = {
    user: { _id: '1', email: 'user1@example.com' },
};
// { id, owner }
const BodyChat = () => {
    const roomState = mockRoomState; // Thay bằng useSelector nếu sử dụng redux thực tế
    const userState = mockUserState; // Thay bằng useSelector nếu sử dụng redux thực tế
    let count = 0;
    const owner = '3';

    return (
        <ScrollView style={styles.container}>
            {roomState.lstChat.map((e) => {
                count++;
                const isMyMessage = e.user._id === userState.user._id;
                const isOwner = e.user._id === owner;
                let emoji = null;

                if (e.reacts != null) {
                    e.reacts.map((x) => {
                        emoji = x.emoji;
                    });
                }

                if (isMyMessage) {
                    return (
                        <MyMessageItem
                            key={count}
                            avatar={e.user.avatar}
                            name={e.user.email}
                            time={e.createdAt}
                            message={e.content}
                            type={e.type}
                            owner={isOwner}
                            _id={e._id}
                            emoji={emoji}
                        />
                    );
                } else {
                    return (
                        <MessageItem
                            key={count}
                            avatar={e.user.avatar}
                            name={e.user.email}
                            time={e.createdAt}
                            message={e.content}
                            type={e.type}
                            owner={isOwner}
                            _id={e._id}
                            emoji={emoji}
                        />
                    );
                }
            })}
        </ScrollView>
    );
};

export default BodyChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
});
