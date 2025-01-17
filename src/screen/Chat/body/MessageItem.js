import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

function MessageItem({ avatar, name, time, message, type, owner, _id, emoji }) {
  const navigation = useNavigation();
  const [emojiIndex, setEmojiIndex] = useState(emoji);

  // Hàm giả lập xử lý nhấn vào ảnh
  const handlePressImage = () => {
    console.log('Navigating to ImageChat with:', {
      avatar,
      name,
      image: message,
    });
    navigation.navigate('ImageChat', {
      avatar,
      name,
      image: message,
    });
  };

  // Hàm giả lập phản ứng emoji
  const reactMessage = (reaction) => {
    console.log(`Reacting with: ${reaction}`);
    setEmojiIndex(reaction);
  };

  // Hiển thị danh sách emoji
  const handlePressIcon = () => {
    Alert.alert('', '', [
      { text: '❤', onPress: () => reactMessage('❤') },
      { text: '👍', onPress: () => reactMessage('👍') },
      { text: '😀', onPress: () => reactMessage('😀') },
      { text: '😭', onPress: () => reactMessage('😭') },
      { text: '😡', onPress: () => reactMessage('😡') },
      {
        text: 'Thoát',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Avatar và Icon */}
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        {owner && <Entypo name="key" size={18} color="#CDAD00" />}
      </View>

      {/* Nội dung tin nhắn */}
      <View style={styles.messageContainer}>
        <TouchableOpacity onPress={handlePressIcon}>
          <Text style={styles.name}>{name}</Text>

          {type === 'image' ? (
            <TouchableOpacity onPress={handlePressImage}>
              <Image style={styles.image} source={{ uri: message }} />
            </TouchableOpacity>
          ) : type === 'unsend' ? (
            <Text style={styles.unsendText}>Tin nhắn đã thu hồi</Text>
          ) : (
            <Text style={styles.messageText}>{message}</Text>
          )}

          <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>

        {/* Emoji phản ứng */}
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{emojiIndex}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContainer: {
    marginLeft: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: '#CC9933',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 15,
    marginBottom: 5,
    color: '#333',
  },
  unsendText: {
    fontSize: 15,
    color: '#999',
    fontStyle: 'italic',
  },
  time: {
    fontSize: 10,
    color: '#C9D5D5',
    textAlign: 'right',
  },
  emojiContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  emoji: {
    fontSize: 20,
  },
});

export default MessageItem;
