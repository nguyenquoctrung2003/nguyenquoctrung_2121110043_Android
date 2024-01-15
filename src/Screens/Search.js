import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="left" size={23} color="black" />
        </TouchableOpacity>
        <View style={styles.middle}>
          <Text style={styles.headerText}>Search</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="close" size={23} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {

    flex: 1,
    
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  imageButton: {
    width: 36,
    height: 36,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  middle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
