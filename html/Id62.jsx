import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Qayrag‘och katta po‘stloqxo‘ri  </b><b>- </b>(большой карагачовый заболонник<i>- Scolytus scolytus  </i>Fabr.). Qayrag‘och katta po‘stloqxo‘ri, qayrag‘ochdan boshqa, terak, yong‘oq, tol daraxtlarini yo‘g‘on shoxi va tanalariga zarar yetkazadi. Bu zararkunanda oziqlanadigan daraxtida lichinkalik holatida qishlab qoladi. Mart oyining birinchi o‘n kunligida g‘umbakka aylanadi va aprel oyining boshlarida qo‘ng‘izi uchib chiqadi va qo‘shimcha oziqlanadi. Urg‘ochi qo‘ng‘iz onalik yo‘lini yonlariga 60 tagacha tuxum qo‘yadi. Hamma tuxumini 6-12 kun ichida qo‘yib bo‘ladi. Qo‘yilgan tuxumidan 7-10 kundan keyin lichinkalar chiqadi va urg‘ochi hasharot yasagan yo‘lga perpendikulyar qilib ichkariga yo‘l ochadi. Yo‘lning uzunligi 70 mm bo‘ladi. Lichinka hammasi bo‘lib 18-20 kun oziqlanadi, tog‘li joylarda 30 kun. <span >Bu zararkunanda vodiy joylarida 4 ta, tog‘li xududlarda 3 ta avlod beradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Burishgan po‘stloqxo‘r </b><b>-  </b>(морщинистый заболонник<i>- Scolytus rugulosus  </i>Rotz.). Burishgan po‘stloqxo‘r mevali daraxtlarning ashaddiy zararkunandasi, qo‘ng‘izi qo‘shimcha oziqlangan paytida mevali daraxtlarning kurtagini yeb oziqlanadi. Bu zararkunanda lichinkalik paytida qishlab qoladi. Mart oyining ikkinchi yarmi, aprel oyining boshlarida lichinka g‘umbakka aylanadi, g‘umbaklik davri 12-18 kun davom etadi. Aprel oyining ikkinchi yarmida qo‘ng‘izlar uchib chiqa boshlaydi, yoppasiga uchish may-iyun oylarida bo‘ladi. Qo‘ng‘izlar 21-25 kun yashaydi. Urg‘ochi qo‘ng‘iz 60ta tuxum qo‘yadi, tuxumdan <span style="letter-spacing:0.7pt">10-14kundan keyin lichinkalar chiqadi va oziqlanish vaqtida 15-30 mm lichinka yo‘lini ochadi. <span >Lichinka 31- 38 kun oziq<span >lanadi. Bu zararkunanda bir yilda bir marta avlod beradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.1pt">daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Fitosanitar kurash: qurigan shox<span style="letter-spacing:-0.1pt">, po‘stloq <span style="letter-spacing:-0.1pt">va daraxtlarni kesib yo‘qotish.Kuzatish, ko‘payishini oldini olish, tarqalishiga yo‘l qo‘ymaslik, o‘z vaqtida zararlangan daraxtlar va shoxlarni qirqib tashlash.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i>Karbofos,50 % em.k.-3,0l/ga,<span style="letter-spacing:-0.1pt">Politrin gold, 44 % em.k. 1,0 l/ga, Fufanon,57% e.k. 3,0 l/ga preparatlari sarflanadi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Qayrag‘och katta po‘stloqxo‘ri </b></p><p></div>`;  
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
        source={require("./m_html_4773a8e511569c6e.jpg")} />

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
        source={require("./m_html_47c5843c69961e6e.png")}  />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
