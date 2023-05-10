import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Qayrag‘och katta po‘stloqxo‘ri  </b><b>- </b>(большой карагачовый заболонник<i>- Scolytus scolytus  </i>Fabr.).</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Qayrag‘och katta po‘stloqxo‘ri, qayrag‘ochdan tashqari, terak, yong‘oq, tol daraxtlarini yo‘g‘on shoxi va tanalariga zarar yetkazadi. Bu zararkunanda oziqlanadigan daraxtida lichinkalik holatida qishlab qoladi. Mart oyining birinchi o‘n kunligida g‘umbakka aylanadi va aprel oyining boshlarida qo‘ng‘izi uchib chiqadi va qo‘shimcha oziqlanadi. Urg‘ochi qo‘ng‘iz onalik yo‘lini yonlariga 60 tagacha tuxum qo‘yadi. Hamma tuxumini 6-12 kun ichida qo‘yib bo‘ladi. Qo‘yilgan tuxumidan 7-10 kundan keyin lichinkalar chiqadi va urg‘ochi hasharot yasagan yo‘lga perpendikulyar qilib ichkariga yo‘l ochadi. Yo‘lning uzunligi 70 mm bo‘ladi. Lichinka hammasi bo‘lib 18-20 kun oziqlanadi, tog‘li joylarda 30 kun. <span >Bu zararkunanda vodiy joylarida 4 ta, tog‘li xududlarda 3 ta avlod beradi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>Po‘stloq osti qo‘ng‘izlari </b><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt"><b>- </b><i><b><span style="">Scolytus rugulosus. </b> </i></p><p></div>`;  
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
        source={require("./i_html_acc56c77e7a12088.jpg")}/>

      <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 0.5,
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
        source={require("./Id22.png")}/>

      <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 0.5,
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
        source={require("./i_html_8f9d77ff52531ede.gif")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
