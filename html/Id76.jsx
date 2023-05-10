import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Mevali daraxtlar, yong‘oq, o‘rmon daraxtlari ildiz bo‘g‘zining bakterial rak kasalligi</b><b>. </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash. </b> </i><b> </b>Bog‘larda va daraxtzorlarda agrotexnik tadbirlarni o‘z vaqtida o‘tkazish, qurigan daraxt, to‘nka, zararlangan shoxlarni kuzda va erta bahorda, zararlangan joydan 8-10 sm pastroqdan olib, kesish, kesilgan joylarni zararsizlantirish va ularga bog‘ surtmasi surtish lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i><b>. </b>Zararlangan shoxlarni kesish uchun ishlatilgan ish qurollarini formalinning 5% li eritmasi bilan dezinfektsiyalash; shtamb yoki ildiz bo‘g‘zi zararlangan daraxtlarni qazib olib, yo‘qotish; daraxtlarni har xil mexanik jarohatlanishdan asrash; ko‘chatzorlarda shishlari bo‘lgan nihollarni qazib olib, yoqib yuborish; yangi bog‘ yaratish uchun faqat sog‘lom material qo‘llash; payvand uchun materialni sog‘lom o‘simliklardan olish; bakteriyaga chidamli ildiz payvandtaglarini qo‘llash; iloji boricha kurtak bilan payvandlash usulini qo‘llash; payvand joylariga 1% li mis kuporos surtish va suv bilan bir necha marta yuvish; ko‘chatzor yaratish uchun yerosti suvlari to‘planmaydigan, oldingi yillari shishlar bilan zararlangan mevali daraxtlar va tok bo‘lmagan, nordonroq tuproqli yerlarni tanlash yoki tuproqqa fosfor va kaliyli o‘g‘itlarni solish, tokzorda ishlatilgan tokqaychi va boshqa asbob-uskunalarni 5% li formalin bilan zararsizlantirish lozim.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Payvand uchun ishlatiladigan materialni qo‘llashdan oldin ZnSO<sub>4</sub>tuzining 0,2% li eritmasiga 5 min davomida (so‘ngra toza suv bilan yaxshilab yuvish lozim) yoki oksitetratsiklin gidroxlorid eritmasiga botirish bakteriyaga qarshi yaxshi samara beradi.</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"> <b>Bakterial rak  </b><b>kasalligi </b></p><p></div>`;  
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
        source={require("./m_html_d012cdb841f89dde.jpg")} />

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
        source={require("./m_html_20a288cc99aad871.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
