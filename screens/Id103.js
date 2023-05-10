import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import Card from "../Card";
import data from "../data";

const LandscapePests = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Keng yaproqli manzarali daraxtlarning zararkunandalari",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);

  
const filteredData = data.filter((item) => item.id >= 113 && item.id <= 116);

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
  button: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#eee",
    textAlign: 'center',
    lineHeight: 'normal',
    maxWidth:'90%',
    marginHorizontal: 'auto',

  },
  buttonText: {
    fontSize: 18,
  },
});

export default LandscapePests;
