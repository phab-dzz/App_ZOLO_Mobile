import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function MyMessageItem({ avatar, name, time, message, type, owner, _id, emoji }) {
  const [messIndex, setMessIndex] = useState(message);
  const [typeIndex, setTypeIndex] = useState(type);
  const [emojiIndex, setEmojiIndex] = useState(emoji);

  // Hàm giả lập phản ứng emoji
  const reactMessage = (reaction) => {
    console.log(`Reacted with: ${reaction}`); // Log giả lập
    setEmojiIndex(reaction);
  };

  // Hàm giả lập gỡ tin nhắn
  const handleUnsendMessage = () => {
    console.log('Message unsent'); // Log giả lập
    setMessIndex('Tin nhắn đã được gỡ');
    setTypeIndex('unsend');
  };

  // Hiển thị thông báo khi nhấn giữ tin nhắn
  const handleLongPress = () => {
    Alert.alert('Thông báo', 'Bạn muốn xóa tin nhắn', [
      { text: 'Thoát', style: 'cancel' },
      { text: 'Xóa', onPress: handleUnsendMessage },
    ]);
  };

  // Hiển thị danh sách emoji
  const handlePressIcon = () => {
    Alert.alert('', '', [
      { text: '❤', onPress: () => reactMessage('❤') },
      { text: '👍', onPress: () => reactMessage('👍') },
      { text: '😀', onPress: () => reactMessage('😀') },
      { text: '😭', onPress: () => reactMessage('😭') },
      { text: '😡', onPress: () => reactMessage('😡') },
      { text: 'Thoát', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.containerC}>
      <View style={styles.container}>
        {/* Nội dung tin nhắn */}
        <View>
          {typeIndex === 'unsend' ? (
            <View style={styles.messageBox}>
              <Text style={styles.unsendText}>Tin nhắn đã được gỡ</Text>
              <Text style={styles.time}>{time}</Text>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onLongPress={handleLongPress}
                onPress={handlePressIcon}
                style={styles.messageBox}
              >
                {typeIndex === 'image' ? (
                  <TouchableOpacity>
                    <Image style={styles.image} source={{ uri: message }} />
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.messageText}>{messIndex}</Text>
                )}
                <Text style={styles.time}>{time}</Text>
              </TouchableOpacity>
              <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>{emojiIndex}</Text>
              </View>
            </View>
          )}
        </View>

        {/* Avatar và Icon */}
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
          {owner && <Entypo name="key" size={18} color="#CDAD00" />}
        </View>
      </View>
    </View>
  );
}

export default MyMessageItem;

const styles = StyleSheet.create({
  containerC: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginTop: 20,
  },
  avatarContainer: {
    marginLeft: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  messageText: {
    width: 180,
    fontSize: 15,
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
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  emojiContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  emoji: {
    fontSize: 20,
  },
});
