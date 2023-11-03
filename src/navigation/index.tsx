import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './auth-stack-navigator';
import AppStackNavigator from './app-stack-navigator';
import useUserGlobalStore from '../store/useUserGlobalStore';
import { Provider } from 'react-redux';
import { store} from "../store/reduxStore"
import { Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../store/reduxIndex';



const Navigation = () => {
  const {user, updateUser} = useUserGlobalStore();
  const dispatch = useDispatch()
  const {depositMoney} = bindActionCreators(actionCreators, dispatch)
  const state = useSelector((state: State) => state.test)

  console.log('user', JSON.stringify(user, null, 2));
  useEffect(() => {
    updateUser({
      email: 'khang@gmail.com',
      name: 'khang',
    });
    return () => {};
  }, []);
  const loggedIn = true;

  const handleOnPress = () => {
    console.log("click")
    depositMoney(1000)
  }

  return (
           <NavigationContainer>
        {/* <Text>{state}</Text>
        <Button title="Deposit" onPress={handleOnPress}></Button> */}
      {/* <AuthStackNavigator /> */}
      {loggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>

 
  );
};

export default Navigation;
