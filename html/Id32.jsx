import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><span style="letter-spacing:0.2pt"><b>Igna bargli  </b><span style="letter-spacing:0.2pt"><b>daraxtlar ildiz bo‘g‘zining rak kasalligi </b></p><p><span style="letter-spacing:0.2pt">Igna bargli <span style="letter-spacing:0.2pt">daraxtlar ildiz bo‘g‘zining rak kasalligi<span style="letter-spacing:0.2pt">– qo‘zg‘atuvchisi <span style="letter-spacing:0.2pt"><span lang="fr-FR"><i>Agrobacterium tumefaciens  </i><span style="letter-spacing:0.2pt"><span lang="fr-FR">bakteriyasi hisoblanadi. Rak kasalligi <span style="letter-spacing:0.2pt">qo‘zg‘atuvchisi<span style="letter-spacing:0.2pt"><span lang="fr-FR"><i>Agrobacterium radiobacter </i><span style="letter-spacing:0.2pt"><span lang="fr-FR"> <span style="letter-spacing:0.2pt">tayoqchimon grammmanfiy tuproq patogeni hisoblanib, igna bargli daraxtlar, grek yong‘og‘i, tok, danak mevali daraxtlar va qand lavlagi o‘simliklarini jiddiy zararlaydi. <span style="letter-spacing:0.2pt"><span lang="fr-FR">Patogen tuproqda hayot kechirib o‘simliklarga asosan mexanik va sovuq ta’siri shikastlangan joylariga kirib kasallik qo‘zg‘atadi. Ildiz bo‘g‘zi raki kasalligi igna bargli daraxtlarning ildiz bo‘g‘zida shish hosil qilib, oziq moddalarning o‘tkazuvchi to‘qimalarda tiqilib qolishi natijasida o‘simliklar qurib qolishiga olib keladi. </p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>I</b><b>ldiz bo‘g‘zi rak</b><b>i </b><b> </b><b>( </b><span style="letter-spacing:0.2pt"><span lang="fr-FR"><i>Agrobacterium tumefaciens </i><b>) </b><b>kasalligi </b></p><p><b><span style="">Kurash choralari: </b><i><b><span style="">Agrotexnik kurash-</b> </i>qurigan novdalarni kesib turish, daraxtlar shikastlanini olidini olish, kasallik kuchli rivojlanishi kutilganda birinchi belgilari ko‘rinishi bilanoq, 1% li Bordo suyuqligi purkash lozim. To‘kilgan barglarni va mevalarni to‘plab yo‘qotish, daraxt tagidagi va atrofidagi tuproqni ag‘darish va o‘g‘itlash tavsiya qilinadi.</p><p><i><b>Kimyoviy kurash: </b> </i><b> </b>Kabrio Top,60% s.d.g. 1,0-2,0 kg/ga.,Almaz,10% 0,2-0,25 l/ga, Nirmal,10% em.k. 0,2-0,25 l/ga, Zeroks,300% k.s.e. 1,0-2,0 l/ga preparatlarni qo‘llash.</p><p></div>`;  
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
        source={require("./i_html_cbee6f233c7e3be8.jpg")} />
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
        source={require("./i_html_9db1e5ab259f801a.jpg")} />

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
        source={require("./i_html_3099edf5642a733.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
