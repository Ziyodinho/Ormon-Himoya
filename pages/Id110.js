import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text,  } from "react-native";
import Card from "../Card";
import data from "../data";

const Bargxor = ({ navigation }) => {
  const filteredData = data.filter((item) => item.id >= 14 && item.id <= 16);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Igna bargli daraxtlarning bargxo‘r zararkunandalari",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);

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
    
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
});

export default Bargxor;
