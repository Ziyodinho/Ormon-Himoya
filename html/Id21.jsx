import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Po‘stloq osti qo‘ng‘izlari </b>-(заболонники-<i><span style="">Scolytus rugulosus </i>Ipidae). Po‘stloq osti qo‘ng‘izlari mayda qo‘ng‘izlar bo‘lib, eng katta qo‘ng‘izlarning uzunligi 8-9 mm, qolgan po‘stloq osti qo‘ng‘izlarining tanasining uzunligi 3-4 mm bo‘ladi. Bu oilaga mansub bulgan qo‘ng‘izlarning hammasini mo‘ylovlari to‘g‘nag‘ichsimon, oyoqlari to‘rt panjali. Hamma po‘stloq osti qo‘ng‘izlari lichinkalari tanasi oqish rangda, bosh qismi sarg‘ish. Lichinkasi tanasining tuzilishi o‘roqsimon egilgan, oyoqlari yo‘q, lichinkalari po‘stloq, osti parda bilan oziqlanib har bir turi o‘ziga xos iz qoldiradi. Po‘stloq osti qo‘ng‘izlarining biologiyasi bir-biriga o‘xshashligi shundan iboratki, bular oilasi bilan bir daraxtga joylashadi. Bunda po‘stloq osti qo‘ng‘izlari oilalarga bo‘linadi: poligam oila, bunda bitta urg‘ochi qo‘ng‘iz va bir necha erkak qo‘ng‘izlar (2-10 yoki ko‘proq). Monogam - oilada bitta erkak bitta urg‘ochi bo‘ladi. </p><p><span style="letter-spacing:0.2pt">Monogam holidagi urg‘ochi qo‘ng‘iz onalik yo‘lini ochadi va yonlariga tuxum qo‘yadi. Tuxumdan chiqqan lichinkalar esa o‘zlariga yo‘l ochadi va yo‘lning oxirida o‘zlariga beshikcha yasab shu joyda g‘umbakka aylanadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:0.1pt">G‘umbakdan chiqqan qo‘ng‘iz po‘stloqni kemirib uchib chiqadi. Poligam xildagilari urg‘ochisining soniga qarab o‘zlariga bir nechta yo‘l ochadi. Onalari ochgan yo‘ldan lichinkalari alohida o‘zlariga yo‘l ochishadi. Po‘stloq osti qo‘ng‘izlar oilasining har biri o‘ziga xos yo‘llar ochadi, bu yo‘llarni ikkinchi oila qilolmaydi.</p><p><span style="letter-spacing:0.1pt">Ko‘p turdagi po‘stloq osti qo‘ng‘izlari o‘zidan chiqargan qipig‘idan onalik yo‘llarini tozalab boradi. Uchib chiqqan yosh qo‘ng‘izlar ko‘shimcha oziqlanadi va ko‘plab zarar yetkazadi. Masalan, archa lubxo‘ri qo‘shimcha oziqlanish davrida yosh novdalariga zarar yetkazadi va novdalar qurib qoladi. Qayrag‘och sharq po‘stloq osti qo‘ng‘izlari qo‘shimcha oziqlanish davrida kurtak oldini kemirib, golland kasalligini yuqtiradi. Kasal va sog‘lom daraxtlarda <span style="letter-spacing:0.1pt">qarag‘ay<span style="letter-spacing:0.1pt">va pista po‘stloq osti qo‘ng‘izlari ham qo‘shimcha oziqlanish natijasida zarar yetkazadi.</p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><span style="letter-spacing:-0.3pt"><i><b>Agrotexnik tadbirlar </b> </i><span style="letter-spacing:-0.3pt"><i><b>i </b> </i><span style="letter-spacing:-0.3pt">o‘z vaqtida amalga oshirish. mineral ug‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>usul sifatida daraxtlarning o‘suv davrida Alfa enerji, 24,7 % sus.k. 0,4 l/ga, Fufanon, 57 % em.k., 3,0 l/ga, Siperfos,55% em.k. 1,0 l/ga, Karbofos,50% em.k. 0,6-1,0 l/ga yoki Bagira 20% s.e.k. -0,3 – 0,4 l/ga, T-34, 24,7 % sus.k. 0,3-0,4 % sus.k. preparatlari purkash.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>Po‘stloq osti qo‘ng‘izlari </b><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">-<i><b><span style="">Scolytus rugulosus</b> </i><i><span style="">. </i></p><p></div>`;  
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
        source={require("./i_html_a7f11b42401fa1e5.jpg")} />

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
        source={require("./i_html_2de6cbd1457486e9.jpg")} />

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
        source={require("./i_html_4fcd80d5cbd3b4f3.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
