import React, { useContext, useState } from 'react';

import { SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchContext } from '../context/SearchContext';
import { EvilIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const SearchHeader = () => {
  const { searchQuery, setSearchQuery } = useState('');

  const hanldPress = () => {
    // Xử lý khi nhấn vào QR Code
  };

  const hanldPressCreateGroup = () => {
    // Xử lý khi nhấn vào tạo nhóm
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Ionicons name="search-outline" size={30} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm..."
          placeholderTextColor="white"
          onChangeText={setSearchQuery}
          value={searchQuery}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />
      </View>
      <View style={styles.containerIconRight}>
        <TouchableOpacity onPress={hanldPress} style={styles.containerIconQR}>
          <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={hanldPressCreateGroup} style={styles.containerIconAdd}>
          <Ionicons name="add-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0093fa',
    paddingHorizontal: 10,
    flex: 1,
    height: 45,
    marginRight: 10,
  },
  containerTitle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
    color: 'white',
  },
  input: {
    height: 45,
    fontSize: 20,
    color: 'white',
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#0093fa',
    borderRadius: 8,
  }, containerIconRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerIconQR: {
    marginHorizontal: 10,
  },
  containerIconAdd: {
    marginHorizontal: 10,
  },
});

export default SearchHeader;
