import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style=""><b>Xisor pista bargxo‘ri  </b><span style="">(гиссарский фисташковый листоед<span style=""><i><b>-  </b> </i><i><span style="">Luperus hissaricus Oglob </i><i><span style="">). </i><span style="letter-spacing:normal">Bu qo‘ng‘iz to‘q-jigar rang, oldingi yelkasi tiniq ko‘rinishga ega. Mo‘ylovlari ipsimon, uzunligi tanasining yarmiga teng. Hasharot juda mayda, uzunligi 1,5-2 mm qo‘ng‘izlar, bargning ostki yoki ustki tomonida 30-40 dona bo‘lib yopishib turishadi. Ular barglarning yumshoq joylarini kemiradi va ingichka barg tomirlariga mutlaqo teginmaydi. Qattiq zararlanishi natijasida barglar qorayib va qovjirab qurib qoladi. Qo‘ng‘izlar yosh daraxtlarni zaiflashtirib qo‘yadi va nihoyat nobud qiladi. Ushbu zararkunanda O‘zbekistonda pistachilik bilan shug‘ullanuvchi o‘rmon xo‘jaliklari pistazorlarini zararlab kelayotgan zararkunandalardan biridir.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><span >Hisor pista bargxo‘ri biologiyasi hali o‘rganilmagan. Ammo, ma’lumki qo‘ng‘izlarning uchishi iyun oyining uchinchi o‘n kunligidan, iyul oyining ikkinchi yarmigacha davom etadi. Bu davr oralig‘ida qo‘ng‘izlar pistazorlarga o‘z ta’sirini o‘tkazib ulguradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i>sifatida<b> </b>Tanrek, 20 % em.k. 0,2-0,3 l/ga, Dalmetoat, 40% em.k. 1,5-2,0 l/ga, Bagira,20% s.e.k. -0,3 l/ga vaKarate 5 % k.e. – 0,5 l/ga kimyoviy preparatlari qo‘llaniladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><span style=""><b>Xisor pista bargxo‘ri </b></p><p></div>`;  
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
        source={require("./m_html_94d95e8c25323286.jpg")} name="Рисунок 113" align="bottom" width="299" height="222" border="0"/>
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
        source={require("./m_html_9ad625484db1d89f.jpg")} name="Рисунок 116" align="bottom" width="283" height="222" border="0"/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
