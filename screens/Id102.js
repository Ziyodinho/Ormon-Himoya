import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, ScrollView , SafeAreaView,  Text,} from "react-native";
import Card from "../Card";
import data from "../data";

const HiloDiseases = ({ navigation }) => {
  const filteredData = data.filter((item) => item.id >= 27 && item.id <= 34);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Igna bargi daraxtlarning asosiy kasalliklari",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <ScrollView >
      <Text></Text>
        {filteredData.map((item) => (
        <Card key={item.id} item={item} navigation={navigation}/>
      ))}
      </ScrollView>
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
  content: {
    flex: 1, // установка flex для содержимого блока
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});

export default HiloDiseases;
