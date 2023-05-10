import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Po‘stloq osti qo‘ng‘izlari </b>–<i><span style="">Scolytus rugulosus </i><i>Ipidae </i><span ><i>. </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"> -(заболонники - <i>Ipidae </i>). Po‘stloq osti qo‘ng‘izlari mayda qo‘ng‘izlar bo‘lib, eng katta qo‘ng‘izlarning uzunligi 8-9 mm, qolgan po‘stloq osti qo‘ng‘izlarining tanasining uzunligi 3-4 mm bo‘ladi. Bu oilaga mansub bulgan qo‘ng‘izlarning hammasini mo‘ylovlari to‘g‘nog‘ichsimon, oyoqlari to‘rt panjali. Hamma po‘stloq osti qo‘ng‘izlari lichinkalari tanasi oqish rangda, bosh qismi sarg‘ish. Lichinkasi tanasining tuzilishi o‘roqsimon egilgan, oyoqlari yo‘q, lichinkalari po‘stloq, osti parda bilan oziqlanib har bir turi o‘ziga xos iz qoldiradi. Po‘stloq osti qo‘ng‘izlarining biologiyasi bir-biriga o‘xshashligi shundan iboratki, bular oilasi bilan bir daraxtga joylashadi. Bunda po‘stloq osti qo‘ng‘izlari oilalarga bo‘linadi: poligam oila, bunda bitta urg‘ochi qo‘ng‘iz va bir necha erkak qo‘ng‘izlar (2-10 yoki ko‘proq). Monogam - oilada bitta erkak bitta urg‘ochi bo‘ladi. Monogam holidagi urg‘ochi qo‘ng‘iz onalik yo‘lini ochadi va yonlariga tuxum qo‘yadi. Tuxumdan chiqqan lichinkalar esa o‘zlariga yo‘l ochadi va yo‘lning oxirida o‘zlariga beshikcha yasab shu joyda g‘umbakka aylanadi. G‘umbakdan chiqqan qo‘ng‘iz po‘stloqni kemirib uchib chiqadi. Poligam xildagilari urg‘ochisining soniga qarab o‘zlariga bir nechta yo‘l ochadi. Onalari ochgan yo‘ldan lichinkalari alohida o‘zlariga yo‘l ochishadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.2pt">Po‘stloq osti qo‘ng‘izlar oilasining har biri o‘ziga xos yo‘llar ochadi, bu yo‘llarni ikkinchi oila qilolmaydi. Ko‘p turdagi po‘stloq osti qo‘ng‘izlari o‘zidan chiqargan qipig‘idan onalik yo‘llarini tozalab boradi. Uchib chiqqan yosh qo‘ng‘izlar ko‘shimcha oziqlanadi va ko‘plab zarar yetkazadi. Masalan, archa lubxo‘ri qo‘shimcha oziqlanish davrida yosh novdalariga zarar yetkazadi va novdalar qurib qoladi. Qayrag‘och sharq po‘stloq osti qo‘ng‘izlari qo‘shimcha oziqlanish davrida kurtak oldini kemirib, golland kasalligini yuqtiradi. Kasal va sog‘lom daraxtlarda oziqlanib, kushka va pista po‘stloq osti qo‘ng‘izlari ham qo‘shimcha oziqlanish natijasida zarar yetkazadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Qarshi kurash choralari: </b> </i><span style="letter-spacing:-0.1pt"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.1pt">daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Fitosanitar kurash: qurigan shox va daraxtlarni kesib yo‘qotish.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.1pt">Politrin gold, 44 % em.k. 1,0 l/ga, <span style="letter-spacing:-0.1pt">Fufanon<span style="letter-spacing:-0.1pt">,<span style="letter-spacing:-0.1pt">57% e.k. va Karbofos<span style="letter-spacing:-0.1pt">,<span style="letter-spacing:-0.1pt">50 % e<span style="letter-spacing:-0.1pt">m.k<span style="letter-spacing:-0.1pt">. 1 g<span style="letter-spacing:-0.1pt">ektarig<span style="letter-spacing:-0.1pt">a 3,0 l<span style="letter-spacing:-0.1pt">itr qo‘llash. <span style="letter-spacing:-0.1pt"></p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.2pt"> <span style="letter-spacing:-0.2pt"><b>Po‘stloq osti qo‘ng‘izi va uning lichinkasi </b></p><p></div>`;  
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
        source={require("./m_html_5087a958104ea510.jpg")} />
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
        source={require("./m_html_cd28726c3774069b.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
