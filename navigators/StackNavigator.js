import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
}
