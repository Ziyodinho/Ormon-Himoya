import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Un shudring </b><b>kasalligi </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Un shudring kasalligini Erysiphales turkumiga mansub zamburug‘lar qo‘zg‘atadi. Daraxtlarning barglarida zamburug‘ning tanasidan va konidiyalaridan iborat bo‘lgan oq g‘ubor paydo bo‘ladi. Konidiyalar ko‘plab miqdorda hosil bo‘lib daraxtlarning rivojlanish davrida bir daraxtdan ikkinchisiga shamol orqali uchib o‘tadi va yoz mobaynida infektsiya manbaasi hisoblanadi. Ularni oddiy lupa yoki mikroskopsiz ham ko‘rish mumkin. <span style="">Un shudring paydo bo‘lishining ilk belgilari avval barglarning ustki qismida, so‘ngra ostki qismida oq kukunsimon qatlam (g‘ubor) orqali namoyon bo‘ladi. Ko‘rinishidan bu g‘uborni juda oson artib tashlash mumkindek tuyuladi. Biroq artib tashlansa ham bu g‘ubor yangidan paydo bo‘laveradi, hamda dog‘lar hajmda kattalashaveradi – bu o‘simlik to‘qimalari bo‘ylab tez tarqaladigan zamburug‘ mitseliysidir. Odatda zararlanish o‘simlik bo‘ylab pastdan yuqoriga qarab «harakatlanadi».</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b><span style="">Kurash choralari: </b></p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;"><i><b><span style="">Agrotexnik kurash: </b> </i>Daraxtlarni yuqori agrotexnika talablarida parvarish qilish, un shudring kasalligiga qarshi tavsiya qilingan barcha agrotexnik tadbirlarni o‘tkazish lozim. </p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><b> </b>un-shudring kasalligining birinchi belgilari ko‘rinishi bilan birorta tarkibida oltingugurt mavjud bo‘lgan preparat (tuyilgan oltingugurt, kuk., 15-30 kg/ga, 0,5-1<sup>o</sup>li OOQ,Bayleton 25% n.kuk., 0,3-0,4 kg/ga) yoki propikanazol, tsiprokonozol, tibukonozol, tiofanat-metil asosli kimyoviy tavsiya etilgan me’yorlarda qo‘llash bilan ishlov berish lozim. Kasallik rivojlanishi bilan bog‘liq holda ishlovlarni yana 1<span >-2 marta takrorlash mumkin.</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>21-rasm. </b><b>Un shudring </b><b>kasalligi </b></p><p></div>`;  
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
        source={require("./i_html_df574ba4c45ce27a.jpg")} name="Изображение20" align="bottom" width="297" height="242" border="0"/>

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
        source={require("./i_html_b85c39eb5e3496de.jpg")} name="Изображение21" align="bottom" width="295" height="242" border="0"/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
