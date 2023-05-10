import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Pista urug‘xo‘ri  </b>(фисташковый семеед<i>- Eurytoma plotairovi  </i>Nik.). <span >Bu hasharo<span >tning biologiyasi juda kam o‘rganilgan. Bu hasharot yiliga ikki marta avlod beradi. Birinchi avlodi Bobotog‘<span >sharoitida may oyining o‘rtalaridan boshlab iyun oyining o‘rtasigacha,<span >bir oy davom etadi. Ikkinchi avlodi iyul oyining o‘rtalaridan boshlab to avgust o‘rtasigacha davom etadi. Urug‘xo‘rlar lichinkalik holatida, meva ichida qishlaydi<span >va shu yerda g‘umbakka aylanadi. Kelgusi yil bahorda to‘kilmagan pista ichida aprel oxirida, mart boshida hali oziqlanib ulgurmagan lichinkalari uchraydi, g‘umbaklari esa mayning birinchi dekadasi oxirida naydo bo‘ladi. Zararlangan mevani zararlanmaganidan ajratish oson (rangi kizg‘ish bo‘ladi, po‘sti bujmayib danagidan ajratib bo‘lmaydi). Bobotog‘ sharoitida qariyib 40-50% zarar yetkazadi. Boshqa joylarda bundan ham ko‘p.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.1pt">daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Fitosanitar kurash: qurigan shox<span style="letter-spacing:-0.1pt">, po‘stloq <span style="letter-spacing:-0.1pt">va daraxtlarni kesib yo‘qotish.Kuzatish, ko‘payishini oldini olish, tarqalishiga yo‘l qo‘ymaslik, o‘z vaqtida zararlangan daraxtlar va shoxlarni qirqib tashlash.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.1pt">Politrin gold, 44 % em.k. 1,0 l/ga, Super tayson, 20 % .kuk., 0,3-0,5 kg/ga,Fufanon,57% e.k. 3,0 l/ga,Karbofos,50 % em.k.3,0l/ga,preparatlari sarflanadi.</p><p></div>`;  
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
