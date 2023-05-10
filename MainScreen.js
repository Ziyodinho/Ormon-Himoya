import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import Card from "./Card";
import data from "./data";

const MainScreen = ({ navigation }) => {
  const filteredData = data.filter((item) => item.id >= 101 && item.id <= 107);
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <Text></Text>
      {filteredData.map((item) => (
        <Card key={item.id} item={item} navigation={navigation}/>
      ))}
    </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: '#fff',
    
  },
 
});

export default MainScreen;
