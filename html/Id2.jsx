import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div><p  align="justify"><b>Quyruqli buzoqbosh </b>- (медведка-<i>Gryllotolpa unispina  </i>Sauss.).</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;">Quyruqli buzoqboshi tuproqda 50-60 sm chuqurlikda so‘nggi yoshdagi lichinka yoki yetuk zot stadiyasida qishlaydi. Lichinkalarning rivojlanishi ko‘klamda tugaydi, voyaga yetgan quyruqli buzoqboshlar may oyida paydo bo‘ladi. Quyruqli buzoqboshlar asosan nam tuproqda yashab, uzun, keng yo‘llar ochadi va yo‘l-yo‘lakay uchragan ildizlarni kemirib boradi. Ular asosan o‘simliklar bilan oziqlanadi, lekin ba’zida hasharotlarning lichinkalarini va tuproqda yashaydigan mayda jonivorlarni ham yeydi. Urg‘ochisi tuxumlarini 18sm ga yetadigan chuqurlikdagi uyasining keng joyiga, 200-500 tadan to‘p-to‘p qilib qo‘yadi. Tuxumlaridan taxminan 1,5 haftadan keyin lichinkalar chiqadi. Yosh lichinkalar uyada bir qancha vaqt urg‘ochi hasharot himoyasida turadi, keyinchalik tarqalib ketib, mustaqil yashay boshlaydi. Quyruqli buzoqbosh yiliga bir marta avlod beradi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Quyruqli buzoqbosh qo‘ng‘izi va lichinkasi </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvi berish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Tifuz, 48% sus.k. 0,03 l/ga,<i> </i>Ximidor, 60 % sus.k. 0,035 l/ga, Nurell-D, 55 % em.k., 1,5 l/ga<i>, </i>Fufanon, 57 % 1,5-2,0 l/ga,<i> </i>Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k., 1,0-3,0 l/ga sarf – me’yorda qo‘llash.</p></div>`;  
const Id = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 20,
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
    }} 
       source={require("./i_html_1b64c2f1a8ab8618.jpg")} />
      
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
      source={require("./i_html_ee2988b6cd790830.jpg")} />
      
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
       source={require("./i_html_d9be457579d2ee51.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
