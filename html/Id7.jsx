import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><span style="letter-spacing:-0.3pt"><b>Katta shaftoli tana shirasi –  </b><span style="letter-spacing:-0.3pt"><i>Pterochloroides persicae </i><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt"><i>Chol. </i><span style="letter-spacing:-0.3pt"></p><p><span style="letter-spacing:-0.3pt">Asosan qarag‘aylarning tanasi va yo‘g‘on novdalari, barg ostiga yopishib so‘rishi natijasida daraxt<span style="letter-spacing:-0.3pt">lar zaiflashib, issiq va sovuqqa chidamsiz bo‘lib qoladi<span style="letter-spacing:-0.3pt">. Katta shaftoli tana shirasi nisbatan yirik hasharot bo‘lib, uzunligi 4 mm yo‘g‘onligi 2 mm keladi, tanasi nok shaklda bo‘lib, lichinkasi cho‘zinchoq, qanotli zotining qorni yuqoridan yassilangan bo‘ladi. Yetuk zotlarining rangi qoramtir kul rang, qora dog‘chalarga ega. Bu shirada naychalar o‘rniga ikkita do‘mboqchasi rivojlangan. Tuxumlari qora va yaltiroq, 1,5 mm keladi. Katta shaftoli tana shirasi tuxumlik shaklida daraxt po‘stloqlarida qishlab chiqadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt">Katta shaftoli tana shirasining o‘zi va zarari ayniqsa avgust-oktyabr oylarida kuchli namoyon bo‘ladi. Zararlangan shaftoli daraxtlarining osti chiqindi suyuqlik chiqishi oqibatida qorayib qoladi, daraxt esa zaiflashadi, kechki hosil kamayadi, daraxt sovuqqa chidamsiz bo‘lib qoladi, kelgusi yili hosili kamayib, ikkilamchi zararkunandalarga (po‘stloq osti zararkunandalari – zabolonniklar) bardoshsiz bo‘lib qoladi. Oqibatda shox va daraxt quriydi<br><br><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b><span style="letter-spacing:-0.3pt"><b> </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproq namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol<span style="letter-spacing:-0.3pt">d<span style="letter-spacing:-0.3pt">ini olish<span style="letter-spacing:-0.3pt">,qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Biologik kurash:  </b>Oltinko‘z lichinkalarini 1:5, 1:10 va 1:15, nisbatda tarqatiladi. Mikrobiopreparatlardan Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Atilla-Super, 10% em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, em.k. 10-15 l/ga, Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % k.e. – 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga, Bi-58 (yangi), 40 % em.k., 1,0-1,5 l/ga,Imitrin, 20% em.k., Danadim 40% em.k., Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Nurell-D, 55 % em.k., 1,5 l/ga, va boshqapreparatlarni qo‘llash. </p><p></div>`;  
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
        source={require("./i_html_3f6af5fd9f3d1f59.jpg")}/>

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
        source={require("./i_html_3b2eeec8ab913ef2.gif")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
