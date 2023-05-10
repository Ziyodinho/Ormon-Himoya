import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Quyruqli buzoqbosh </b>- (медведка-<i>Gryllotolpa unispina  </i>Sauss.).Quyruqli buzoqboshi tuproqda 50-60 sm chuqurlikda so‘nggi yoshdagi lichinka stadiyasida qishlaydi. <span style="letter-spacing:0.2pt">Lichinkalarning rivojlanishi ko‘klamda tugaydi, voyaga yetgan quyruqli buzoqboshilar may oyida paydo bo‘ladi. Quyruqli buzoqboshilar asosan nam tuproqda yashab, uzun, keng yo‘llar ochadi va yo‘l-yo‘lakay uchragan ildizlarni kemirib boradi. Ular asosan o‘simliklar bilan oziqlanadi, lekin ba’zida <span style="letter-spacing:0.2pt">h<span style="letter-spacing:0.2pt">asharotlarning lichinkalarini va tuproqda yashaydigan mayda jonivorlarni ham yeydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:0.2pt">Urg‘ochisi tuxumlarini 18<span style="letter-spacing:0.2pt"><span style="letter-spacing:0.2pt">sm ga yetadigan chuqurlikdagi uyasining keng joyiga, 200-500 tadan to‘p-to‘p qilib qo‘yadi. Tuxumlaridan taxminan 1,5 <span style="letter-spacing:0.2pt">h<span style="letter-spacing:0.2pt">aftadan keyin lichinkalar chiqadi. Yosh lichinkalar uyada bir qancha vaqt urg‘ochi <span style="letter-spacing:0.2pt">h<span style="letter-spacing:0.2pt">asharot himoyasida turadi, keyinchalik tarqalib ketib, mustaqil yashay boshlaydi. Quyruqli buzoqboshi yiliga bir marta nasl beradi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><b>3-rasm. </b><b>Quyruqli buzoqbosh </b><b>qo‘ng‘izi </b></p><p></div>`;  
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
        source={require("./m_html_86c5979c99405601.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
