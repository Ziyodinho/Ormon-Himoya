import React, { useState , useCallback } from "react";
import { StyleSheet, ImageBackground, Text, Animated ,   TouchableOpacity, View} from "react-native";

export default function Card(props) {
  const { id, title, description, image, image2, content, navigation } = props.item;
    
  const styles = StyleSheet.create({
    card: { 
      alignSelf: "center",
      maxWidth: '95%',
      width: '95%',
      minWidth: '95%',
      borderRadius: 30,
      elevation: 7,
      shadowColor: "#000",
      shadowOffset: {
        width: -5,
        height: 5,
      },
  shadowOpacity: 0.5,
  shadowRadius: 10,
    marginBottom: 20,
   
      overflow: 'hidden',
      backgroundColor: "#eee",
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstCard: {
      marginTop: 10,
    },
    lastCard: {
      marginBottom: 20,
    },
    image: {
      width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    
    },
    title: {
      width: '100%',
      fontSize: 20,
      color: "black",
      padding: 10,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      textAlign: 'center',
    },
    strong: {
      fontWeight: 'bold',
    },
  });
  const handleNavigation = useCallback(() => {
    props.navigation.navigate(`Id${props.item.id}`);
  }, [props.navigation, props.item.id]);
  
  const [opacityValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacityValue, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
    <View style={styles.card}>
    <TouchableOpacity  onPressIn={handlePressIn}
      onPressOut={handlePressOut} activeOpacity={0.9} onPress={handleNavigation}>
         <Animated.View style={{ opacity: opacityValue }}>
       <ImageBackground style={styles.image} source={props.item.image2 ? props.item.image2 : props.item.image}
       >

  </ImageBackground>
  </Animated.View>
      </TouchableOpacity>
      </View>
      <Text style={styles.title} selectable={true}><Text style={{fontSize: 24, 
      }}>{title}</Text>
  {description !== "" ? <Text style={{fontSize: 16}}>{'\n'}{description}</Text> : null}
</Text>
    </>
  );
}


