import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Olxo‘ri, tikanolxo‘ri, tog‘olcha mevalari shishishi ( </b><b>« </b><b>karmashki </b><b>» </b><b>) </b><b>kasalligi. </b> Bahorda may oyining oxirigacha va kuzda zararlangan va qurigan novdalarni qirqish va yo‘qotish, to‘kilgan barglarni terib, ko‘mib tashlash; daraxtlar tagini ag‘darib turish; daraxtlarga erta bahorda kurtak bo‘rta boshlaganda 3%-li, gullashdan keyin 1%-li Bordo suyuqligi yoki boshqa birorta fungitsidni (mis oksixloridi 900 g/kg n.kuk., 4-8 kg/ga, Bayleton 25% n.kuk., 0,06-0,12 l/ga, 0,01-0,02% ishchi eritma, Skor 25% em.k., 0,2 l/ga va b.) bir mavsumda 1-2 marta purkash tavsiya qilinadi.</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Olxo‘rini karmashka kasalligi </b></p><p></div>`;  
const Id = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
  }); 

  return (
    <SafeAreaView style={styles.container}><ScrollView >
     
      <HTMLView  value={htmlContent}
  stylesheet={{ // стили для HTML-контента
    p: {
      fontSize: 18,
      color: '#000',
      textAlign: 'justify',
    },
  }} contentWidth={windowWidth} />
 <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 1,
      alignSelf: 'center',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
      width: 3,
      height: 4,
                    },
      shadowOpacity: 0.5,
      shadowRadius: 5,
borderRadius: 10,
    }} 
        source={require("./m_html_1e07cbd0c00327a3.jpg")} />

      <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 1,
      alignSelf: 'center',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
      width: 3,
      height: 4,
                    },
      shadowOpacity: 0.5,
      shadowRadius: 5,
borderRadius: 10,
    }} 
        source={require("./m_html_cf91530ab5a53517.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;