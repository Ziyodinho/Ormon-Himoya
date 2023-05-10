import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;"><b>Archa meva pashshasi  </b>(можжевельниковая плодовая муха- <i>Rhagoletis turaaica Rhod. </i>). Qishlab qolgan pashsha iyun-iyul oylarida uchib chiqadi va archa mevasining tugunlariga va mevachasiga tuxum qo‘yadi. Tuxumdan chiqqan lichinka mevaning po‘stini teshib, meva ichiga kiradi va shu yerda xayot kechiradi. <span >Bitta mevada 2-3 tagacha lichinka bo‘ladi. Zararlangan mevalarning<span >40% i to‘kilib ketadi.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.1pt">daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Fitosanitar kurash: qurigan shox<span style="letter-spacing:-0.1pt">, po‘stloq <span style="letter-spacing:-0.1pt">va daraxtlarni kesib yo‘qotish.Kuzatish, ko‘payishini oldini olish, tarqalishiga yo‘l qo‘ymaslik, o‘z vaqtida zararlangan daraxtlar va shoxlarni qirqib tashlash.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;"><span ><i><b>Kimyoviy kurash:  </b> </i><span style="letter-spacing:-0.1pt">Super tayson, 20 % .kuk., 0,3-0,5 kg/ga, Karbofos- 50 % em.k.3,0 l/ga. Fufanon 57% e.k. preparatidan gektariga 3,0 l; sarflanadi. </p><p></div>`;  
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

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
