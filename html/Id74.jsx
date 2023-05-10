import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Bodom kasalliklari </b>(klyasterosporioz, barg buralishi, un-shudring,qizil dog‘lanish (polistigmoz).</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><i><b>Agrotexnik </b> </i><span style="letter-spacing:-0.3pt"><i><b>kurash. </b> </i><span style="letter-spacing:-0.3pt">Sho<span style="letter-spacing:-0.3pt">xlar qalinlashib ketishiga yo‘l qo‘ymaslik, bahorda va kuzda barglar to‘kilishidan oldin zararlangan shoxlarni butash va ularni bog‘dan chiqarib, yo‘qotish; kesilgan joylarni ohak sutining 1% mis yoki 3% temir kuporosi bilan aralashmasini surtib, dezinfektsiyalash; daraxtni yoshartiruvchi kesish usulini qo‘llash; agrotexnika qoidalariga rioya qilish (tuproqqa ishlov berish, o‘z vaqtida o‘g‘itlash va sug‘orish); chidamli navlar ekish lozim. Zararlangan novda va shoxlarni faqat bahorda va kuzda emas, balki ularni ko‘rgach, darhol butash lozim. Bu ishlovlar kasallik daraxtning boshqa qismlariga va boshqa daraxtlarga tarqalishining oldini oladi. Kasallik tufayli zaiflashgan va ko‘p novdalarini yo‘qotgan daraxtlarni bahorda, o‘suv davri boshlanishidan oldin, qo‘shimcha NPK va mikroelementlar bilan oziqlantirish darkor.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><i><b>Kimyoviy kurash.</b><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">Eng samarali kurash chorasi – daraxtlarga fungitsid purkashdir. Bahorda kurtaklar bo‘rtishidan oldin yoki bo‘rtib boshlashi bilan hamda kuzda barglar to‘kilgandan keyin mis xloroksidi 900 g/kg, 4-8 kg/ga yoki 3% Bordo suyuqligi, mavsum davomida esa 2-3 marta – gullashdan keyin darhol va 2-3 hafta so‘ngra, yosh mevalar ochilgandan keyin ularga, jiqqa ho‘llab 1% Bordo suyuqligi yoki boshqa biror fungitsid (Bayleton 25% n.kuk., 0,06-0,12 kg/ga, 0,01-0,02<span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">% eritma, Skor 25% em.k., 0,2 l/ga, mis xloroksidi 900 g/kg, 4-8 kg/ga, Xorus 75% s.e.g., 3,5 g/10 l suvga va b.) purkash lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Gullar ochilgan paytda fungitsid purkash mumkin emas. Agar daraxt kamroq zararlangan bo‘lsa va yog‘ingarchilik ko‘p bo‘lmasa, mevaning kattaligi no‘xatday bo‘lgan paytda daraxtlarga bir marta fungitsid purkash ularni kasallikdan to‘la himoya qiladi. Bunday ob-havo O‘zbekistonda odatda ko‘p mavsumlarda kuzatiladi.klyasterosporioz<span style="letter-spacing:-0.3pt">kasalligini qo‘zg‘atuvchi zamburug‘ novdalardagi yaralarda 3 yilgacha saqlanishi mumkin, shu sababdan, kasallik har yili kuzatiladigan bog‘larda 2-3 yil davomida, har yili kuzda va bahorda zararlangan shoxlarni butash va reja asosida muntazam (har 2 haftada 1 marta) kimyoviy ishlov berish lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Un-shudringga qarshi OOQ, 0,25-1,0<sup>o</sup>, 1% li Bordo suyuqligi, tuyilgan oltingugurt, 15,0-30 kg/ga, Topaz 10% em.k., 0,5-1,0 l/ga, Topsin-M 70% n.kuk., 1,0 kg/ga va b mavsumda 1-3 marta purkash zarur, unda birinchi ishlov yozgi infektsiyaning birinchi belgilari paydo bo‘lganda, keyingi ishlovlar har 10 kun o‘tganda beriladi.</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;"><span style="letter-spacing:-0.3pt"><b>Bodomni </b><b>klyasterosporioz </b><b>kasalligi </b><b>va u </b><b>ni zarari </b></p><p></div>`;  
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
        source={require("./m_html_cfec1a6ab7a3ba8a.jpg")} />

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
        source={require("./m_html_3b34ae36491f6a33.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
