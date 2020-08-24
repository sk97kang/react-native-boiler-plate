import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Loading from '~/components/Loading';

import Login from '~/screens/Auth/Login';
import PasswordReset from '~/screens/Auth/PasswordReset';
import Signup from '~/screens/Auth/Signup';

import First from '~/screens/First';
import Second from '~/screens/Second';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
};

const FirstTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="First"
        component={First}
        options={{ title: 'First App', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

const SecondTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <BottomTab.Navigator tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        name="First"
        component={FirstTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              size={24}
              color={focused ? 'lightblue' : 'black'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Second"
        component={SecondTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="user"
              size={24}
              color={focused ? 'lightblue' : 'black'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right" drawerType="slide">
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState('home');

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <MainNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
