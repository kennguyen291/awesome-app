import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamList} from './types';
import HomeStackNavigator from './home-stack-navigator';
import CompletedScreen from '../screen/completed';
import TodayScreen from '../screen/today';
import CategoriesStackNavigator from './categories-stack-navigator';
import Icons from '../component/shared/icons';
import theme from '../utils/theme';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({color}) => <Icons name="home" color={color} />,
          headerShown: false
        })}></Tab.Screen>
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: 'Completed',
          tabBarIcon: ({color}) => <Icons name="completed" color={color} />,
          headerShown: false
        })}></Tab.Screen>
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: 'Calendar',
          tabBarIcon: ({color}) => <Icons name="calendar" color={color} />,
          headerShown: false
        })}></Tab.Screen>
      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStackNavigator}
        options={() => ({
          title: 'Categories',
          tabBarIcon: ({color}) => <Icons name="categories" color={color} />,
          headerShown: false
        })}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
