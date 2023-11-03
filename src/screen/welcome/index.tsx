import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {AuthScreenNavigationType} from '../../navigation/types';
import {LinearGradient} from 'expo-linear-gradient';
const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  return (
    <>
      {/* <LinearGradient
        colors={[
          '#ffffff',
          '#fcecff',
          '#f8daff',
          '#fae2ff',
          '#fae2ff',
          '#ffffff',
        ]}
        style={{flex: 1}}> */}
        <Text>Sign In Screen</Text>
        <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen} />
        <Button title="Navigate to Sign In" onPress={navigateToSignInScreen} />
      {/* </LinearGradient> */}
    </>
  );
};

export default WelcomeScreen;
