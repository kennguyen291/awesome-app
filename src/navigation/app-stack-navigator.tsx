import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackParamList} from './types';
import WelcomeScreen from '../screen/welcome';
import SignInScreen from '../screen/sign-in';
import SignUpScreen from '../screen/sign-up';
import BottomTabNavigator from './bottom-tab-navigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={BottomTabNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
