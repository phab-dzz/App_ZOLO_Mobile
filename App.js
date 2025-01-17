// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './src/screen/Chat/Chat';

import MainTabNavigator from './src/navigate/MainTabNavigator';
import SearchHeader from './src/component/SearchHeader';
import ListFriend from './src/screen/listFriend/ListFriend';

import { View } from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  return (

    // <View style={{ flex: 1 }}>
    //   <Chat />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainTabs'>


        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{
            headerTitle: () => <SearchHeader />,
            headerStyle: {
              backgroundColor: '#0699f9',
            },
          }}


        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
