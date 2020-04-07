import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

import LoginScreen from './src/screens/LoginScreen'

import Home from './src/screens/HomeScreen'
import Profile from './src/screens/ProfileScreen'
import Detail from './src/screens/DetailScreen'

class BottomStack extends Component{
  render(){
    return(
      <BottomTab.Navigator>
        <BottomTab.Screen
          component={Home}
          name='HomeScreen'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name='home' color={color} size={size} />
            )
          }} />
        <BottomTab.Screen
          component={Profile}
          name='ProfileScreen'
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name='account' color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>
    )
  }
}

class MainScreen extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' options={{
          title: 'Login',
          headerShown: false
        }} component={LoginScreen} />
        <Stack.Screen name='BottomStack' options={{
          title: 'Hello Apps'
        }} component={BottomStack} />
        <Stack.Screen name='DetailScreen' options={{
          title: 'Detail'
        }} component={Detail} />
      </Stack.Navigator>
    )
  }
}

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    )
  }
}