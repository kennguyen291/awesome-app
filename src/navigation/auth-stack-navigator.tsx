import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackParamList} from './types';
import WelcomeScreen from '../screen/welcome';
import SignInScreen from '../screen/sign-in';
import SignUpScreen from '../screen/sign-up';

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
