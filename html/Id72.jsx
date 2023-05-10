import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Mevali daraxtlar, terak, tog‘terak, shumtol, oqqayin va chetanning kalmaraz kasalliklari</b><b> </b>qarshi<i> agrotexnik kurash </i>olib borishda bog‘ va o‘rmon daraxtlarini yuqori agrotexnika talablarida parvarish qilish, oziqlantirish, sug‘orish, hasharotlarga qarshi kurashish; qo‘zg‘atuvchi zamburug‘larning qishlovchi avlodi miqdorini kamaytirish maqsadida daraxtlar oralarida shamol yaxshi yurishini ta’minlash; daraxt tagini butalash, qurigan va ortiqcha rivojlangan shoxlarni vaqtida kesib turish; barglar to‘kilgach, ularni va to‘kilgan mevalarni yig‘ib olish va yo‘qotish, daraxt atrofi va qator oralarini 20-30 sm chuqurlikda ag‘darish, kuzda 1 marta fosfor va kaliy hamda yozda har bir daraxtga 1-1,5 kg ammofos o‘g‘itini 2 marta berish lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i>Kimyoviy kurashda </i>mevali daraxtlarga bahorda kurtaklar yoyilishidan oldin quyidagi preparatlardan biri purkaladi: Bordo suyuqligi, 3-4% li eritma (100 l suvga 3-4 kg mis kuporosi va 3-4 kg so‘ndirilgan ohak), mis kuporosi bo‘yicha 30-60 l/ga me’yorida (daraxt yaxshilab ho‘llangunicha); mis oksixlorid 90% n.kuk., 0,3-0,5% li eritma; ohak-oltingugurt qaynatmasi (ISO), 5<sup>o</sup>li; temir kuporosi 53% e.kuk., 2,0-3,0% li eritma, 30-40 kg/ga me’yorida daraxtlarga va ostidagi tuproqqa; Vektra 10% sus.k., 0,03% li suspenziya, 0,3 l/ga me’yorida. Kurtak yoyilishi davrida ham Bordo suyuqligi yoki Vektra bilan yuqoridagi ko‘rsatilgan me’yorlarda ishlov berish tavsiya qilinadi. O‘rmon daraxtlarini kimyoviy himoya qilish usuli ko‘chatxonalarda ishlatiladi. Bunda o‘suv davrida ko‘chatlarga yuqorida ko‘rsatilgan fungitsidlardan biri bilan 1-2 marta ishlov beriladi.</p><p></div>`;  
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
