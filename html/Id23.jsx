import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Burishgan po‘stloqxo‘r -  </b>(морщинистый заболонник<i>- Scolytus rugulosus  </i>Rotz.). Burishgan po‘stloqxo‘r mevali daraxtlarning ashaddiy zararkunandasi, qo‘ng‘izi qo‘shimcha oziqlanganpaytida mevali daraxtlarning kurtagini yeb oziqlanadi. Bu zararkunanda lichinkalik paytida qishlabqoladi. Mart oyining ikkinchi yarmi, aprel oyining boshlarida lichinka g‘umbakka aylanadi, g‘umbaklik davri 12-18 kun davom etadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Aprel oyining ikkinchi yarmida qo‘ng‘izlar uchib chiqa boshlaydi, yoppasiga uchish may-iyun oylarida bo‘ladi. Qo‘ng‘izlar 21-25 kun yashaydi. Urg‘ochi qo‘ng‘iz 60 ta tuxum qo‘yadi, tuxumdan<span style="letter-spacing:0.7pt">10-14kundan keyin lichinkalar chiqadi va oziqlanishvaqtida 15-30 mm.L<span >ichinka yo‘lini<span >ochadi. Lichinka 31-38 kun oziq<span >lanadi. Bu zararkunanda bir yilda bir marta avlod beradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><span style="letter-spacing:-0.3pt"><i><b>Agrotexnik tadbirlar </b> </i><span style="letter-spacing:-0.3pt"><i><b>: </b> </i><span style="letter-spacing:-0.3pt">mineral <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>usul sifatida daraxtlarga Siperfos,55% em.k. -1,0 l/ga, Alfa enerji, 24,7 % sus.k. 0,4 l/ga, Fufanon,57% e.k.,Karbofos,50% em.k. 0,6-1,0 l/ga yoki Bagira, 20% s.e.k. -0,3 – 0,4 l/ga, T-34, 24,7 % sus.k. 0,3-0,4 % sus.k preparatlari purkash.</p><p></div>`;  
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
        source={require("./i_html_b159b5e4b6e6df65.jpg")} />

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
        source={require("./i_html_6790aa3c3235166a.jpg")}/>

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
        source={require("./i_html_8674c0a5c4781feb.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
