// import { View, Text } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NativeScreenContainer } from 'react-native-screens';
// import Login from '../Screens/Login';
// import Home from '../Screens/Home';
// import Cart from '../Screens/Cart';
// import Signup from '../Screens/Signup';
// import { FontAwesome } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons';


// const Tab =createBottomTabNavigator();
// const BottomNavigator = () => {
//   return (

//         <Tab.Navigator screeeOptions={screeeOptions}>
//         <Tab.Screen name="Home" component={Home} options={{headerShown: false,tabBarIcon:({focused})=>{return(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//               <FontAwesome name="home" size={24} color="gray" />
//             </View>
//         )} }}/>
//         <Tab.Screen name="Cart" component={Cart} options={{headerShown: false,tabBarIcon:({focused})=>{return(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//              <FontAwesome name="shopping-cart" size={24} color="gray" />
//             </View>
//         )} }}/>
//         <Tab.Screen name="Login" component={Login} options={{headerShown: false,tabBarIcon:({focused})=>{return(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//               <Ionicons name="people" size={24} color="gray" />
//             </View>
//         )} }}/>
//         </Tab.Navigator>
//   )
// }

// export default BottomNavigator