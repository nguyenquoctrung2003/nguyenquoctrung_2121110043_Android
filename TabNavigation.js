import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import Home from "./src/Screens/Home";
import Details from "./src/Screens/Details";
import Cart from "./src/Screens/Cart";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Orderplaced from "./src/Screens/Orderplaced";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Search from "./src/Screens/Search";


const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () => {
  return (


     <Tab.Navigator initialRouteName="Home"
  
     labeled={false}
    barStyle={{height:75,backgroundColor:"#FFFFFF", }}>
     <Tab.Screen name="Home" component={Home} options={{tabBarVisible: false,tabBarIcon:({focused})=>{return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <FontAwesome name="home" size={24} color="gray" />
            </View>
        )} }}/>
        <Tab.Screen name="Search" component={Search} options={{headerShown: false,tabBarIcon:({focused})=>{return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
         <FontAwesome name="search" size={24} color="gray" />
            </View>
        )} }}/>
        <Tab.Screen name="Cart" component={Cart} options={{headerShown: false,tabBarIcon:({focused})=>{return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
             <FontAwesome name="shopping-cart" size={24} color="gray" />
            </View>
        )} }}/>
        <Tab.Screen name="Login" component={Login} options={{headerShown: false,tabBarIcon:({focused})=>{return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <Ionicons name="people" size={24} color="gray" />
            </View>
        )} }}/>
    </Tab.Navigator>
  );
};
