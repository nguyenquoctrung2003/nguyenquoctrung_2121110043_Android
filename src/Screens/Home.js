import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTile from "../Components/ProductsTile";
import ProductsCarousel from "../Components/ProductsCarousel";
import { fruits, vegetables,iPad } from "../Utils/Date";
import BottomNavigator from "../navigation/BottomNavigator";
import HomeSlider from "../Components/HomeSilder";


const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}>
      <HomeIcon />
      <HomeSearch/>
      <HomeBanner/>
      <ProductsTile title="IPhone Pro Max"/>
      <ProductsCarousel data={fruits}/>
      <ProductsTile title="AirPods                 "/>
      <ProductsCarousel data={vegetables}/>  
      <HomeSlider/>
      <ProductsTile title="iPad                         "/>  
      <ProductsCarousel data={iPad}/> 
    </SafeAreaView>

    </ScrollView>
    
  );
};
export default Home;
