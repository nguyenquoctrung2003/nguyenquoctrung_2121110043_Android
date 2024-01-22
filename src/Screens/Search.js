import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { fruits, iPad, vegetables } from "../Utils/Date";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const Search = ({ route }) => {
  const { params } = route || {};
  const { q: initialQuery } = params || {};
  const [query, setQuery] = useState(initialQuery || "");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fruitsResults = filterData(fruits);
    const vegetablesResults = filterData(vegetables);
    const iPadResults = filterData(iPad);
    const combinedResults = [...fruitsResults, ...vegetablesResults, ...iPadResults];
   
    setData(combinedResults);
    console.log("results", combinedResults);
  }, [query]);

  const filterData = (array) => {
    return array.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const nav = useNavigation();

  return (
    <View style={{ marginTop: 10, padding: 5 }}>
      {/* Search Input */}
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          borderRadius: 20,
          
        }}
        placeholder="Nhập từ khóa tìm kiếm"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />

      {/* Display Search Results */}
      <View style={{ flexDirection: "row", flexWrap: "wrap",alignItems: "center", }}>
        {data.map((item) => (
           <TouchableOpacity
           onPress={() => {
             nav.navigate("Details", {
               main: item,
             });
           }}
           activeOpacity={0.5}
           style={{
             height: responsiveHeight(30),
             marginTop: 8,
             borderWidth: 1,
             borderColor: "#E3E3E3",
             width: responsiveHeight(21.5),
             marginRight: 15,
             borderRadius: 20,
           }}
         >
           <Image
             style={{ height: 160, resizeMode: "contain", borderRadius: 20 }}
             source={{ uri: item.img }}
           />

           <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: "center"}}>
             <Text style={{ fontSize: 18, fontWeight: "600" }}>
               {item.name}
             </Text>
             <Text style={{ color: "gray" }}>quantity: {item.pieces}</Text>

             <View
               style={{
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "space-between",
               }}
             >
               <Text style={{ color: "#990000", fontWeight: "bold" }}>
                 {item.price} USD
               </Text>
               <AntDesign
                 name="pluscircle"
                 size={22}
                 color="#00AA00"
                 onPress={() => {
                   dispatch(addToCart(item));
                 }}
               />
             </View>
           </View>
         </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Search;
