import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, SafeAreaView, Text,  Linking  } from "react-native";
import Card from "../GCard";
import data from "../data";



const Galereya = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Galereya",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);

  const filteredData = data.filter((item, index) => 
  (index >= 0 && index <= 33) || 
  (index >= 70 && index <= 77)
);

const [currentCardIndex, setCurrentCardIndex] = useState(0);

const handleNextCard = () => {
  const nextCardIndex = (currentCardIndex + 1) % filteredData.length;
  setCurrentCardIndex(nextCardIndex);
};

const handlePrevCard = () => {
  const prevCardIndex =
    (currentCardIndex - 1 + filteredData.length) % filteredData.length;
  setCurrentCardIndex(prevCardIndex);
};

const currentCard = filteredData[currentCardIndex];


return (
  <SafeAreaView style={styles.container}>
  <ScrollView>
    <Text></Text>
    {currentCard && (
      <Card key={currentCard.id} item={currentCard} navigation={navigation} />
    )}
  </ScrollView>
  <TouchableOpacity   style={[
        styles.prevButton,
        currentCardIndex === 0 ? styles.prevButtonActive : null,
      ]} activeOpacity={0.7} onPress={handlePrevCard}>
    <Text style={styles.buttonText}>{'\n\n\n'}{"<"}</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[
        styles.nextButton,
        currentCardIndex === 0 ? styles.nextButtonActive : null,
      ]} activeOpacity={0.5} onPress={handleNextCard}>
    <Text style={styles.buttonText}>{'\n\n\n'}{">"}</Text>
  </TouchableOpacity>
</SafeAreaView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
    paddingLeft: 10,
    paddingRight: 10,
    
  },
  prevButton: {
    position: "absolute",
    left: 0,
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,

  },
  nextButton: {
    position: "absolute",
    right: 0,
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,

  },  
  prevButtonActive: {
    backgroundColor: "grey",
    opacity: 0.2,
    
  },
  nextButtonActive: {
    backgroundColor: "grey",
    opacity: 0.2,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 70,
    opacity: 0.3,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Galereya;
