import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#40afbf',
        tabBarActiveBackgroundColor: "#cccccc",
        tabBarInactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: "#697689"
      }}
>
 <Tab.Screen name="Dogs" component={Home}    options={{
          tabBarLabel: 'Dogs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
          ),
        }}/>
 <Tab.Screen name="Cats" component={Contact} options={{
          tabBarLabel: 'Cats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
          ),
        }}/>
  </Tab.Navigator>
);
}