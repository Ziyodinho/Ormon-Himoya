import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>O‘rmon daraxtlari, terak, tog‘terak, qoraterak, tol, qizil, zirk, do‘lana, archa, jumrut, chetan va gullarning zang kasalliklari</b>.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurashda</b> </i></b>daraxtlarni yuqori agrotexnika talablarida parvarish qilish, kalmaraz kasalligiga qarshi tavsiya qilingan barcha agrotexnik tadbirlarni o‘tkazish lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash. </b> </i></b>O‘rmon daraxtlarini kimyoviy himoya qilish usuli ko‘chatxonalarda ishlatiladi va bunda o‘suv davrida fungitsidlardan biri bilan 1-3 marta ishlov beriladi. Bahorda kurtaklar yozilishidan Bordo suyuqligi, 3-4% li eritma (100 l suvga 3-4 kg mis kuporosi va 3-4 kg so‘ndirilgan ohak), mis kuporosi bo‘yicha 30-60 l/ga me’yorida (daraxt yaxshilab ho‘llangunicha); mis oksixlorid 90% n.kuk., 0,3-0,5% li eritma; temir kuporosi 53% e.kuk., 2,0-3,0% li eritma, 30-40 kg/ga me’yorida daraxtlarga va ostidagi tuproqqa. Kasallik rivojlanishini hisobga olgan holda kurtak yozilishi davrida va keyingi muddatlarda ham Bordo suyuqligi yoki triazol guruhiga mansub fungitsidlardan biri bilan tavsiya qilingan me’yorlarda yana 1 yoki 2 marta ishlov berish tavsiya qilinadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Yapon saforasining zang kasalligiga qarshi kurashda harorat va namlikni tartibga solib (issiqxonani shamollatib) turish, o‘simliklarga talab darajasida o‘g‘itlarni solish; zang kasalligining birinchi belgilari (xlorozlar va birinchi zang yostiqchalari) ko‘rinishi bilan barcha o‘simliklarga (jumladan tashqi ko‘rinishi sog‘lom bo‘lganlariga ham) darhol 1% li Bordo suyuqligini purkash talab etiladi. Kasallik rivojlanishi to‘xtamasa, ishlovdan keyin yana 10 kun oralatib 2-3 marta triazol guruhiga mansub fungitsidlardan biri (masalan, Bayleton 25% n.kuk., 0,75 kg/ga, Bamper 25% em.k., 0,3-0,4 l/ga, Alto Super 33% em.k., 0,2 l/ga va b.) bilan ishlov berish talab etiladi.</p><p></div>`;  
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

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;