import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Mevali daraxtlar, yong‘oq, o‘rmon daraxtlarining qora rak va sitosporoz qurish kasalliklari</b><b>. </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik </b> </i><b> </b><b>kurash. </b>Mevali daraxtlar va o‘rmon daraxtlarida kalmarazga qarshi tavsiya qilingan barcha agrotexnik usullarni qo‘llash va mumlangan mevalarni terib yo‘qotish qora rak va tsitosporoz kasalliklariga qarshi ham samara beradi. Kuchli zararlangan daraxtlar va shoxlarni kesib olish va bog‘dan chiqarib, yoqib yuborish, mumiyolashgan mevalarni to‘plab yo‘qotish lozim. Kesilgan joylarga bog‘ surtmasi yoki moyli bo‘yoq surkash kerak. </p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Mevali daraxtlar </b><b>ni </b><b>tsitosporoz kasalli </b><b>gi </b><b>va u </b><b>ni zarari  </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i><b>. </b>Barglar va yosh mevalar zararlanishiga qarshi Topsin, Kaptan va Folpet fungitsidlaridan birini qo‘llash samarali. Kasallikning asosiy shakli – daraxt tanasi va shoxlaridagi yaralarni purkash yordamida yo‘qotadigan fungitsidlar mavjud emas. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Zararlangan po‘stloqlarni tozalash havo harorati 15<sup>o</sup>S dan past bo‘lganida amalga oshiriladi, bunda zararlangan po‘stloqni (uning atrofidagi 1,5-2 sm keladigan zararlanmagan po‘stloqni ham qo‘shib) yog‘och qismigacha o‘tkir pichoq bilan kesib tozalanadi va bog‘dan chiqarib, yoqib yuboriladi, tozalangan joyni fungitsidlardan (3% temir kuporosi eritmasi, 1-2% li DNOK, 1-2% li nitrafen yoki 1-2% li mis kuporosi) biri bilan zararsizlantirish va unga darhol bog‘ surtmasi (70% nigrol + 15% kanifol + 15% parafin yoki 70% nigrol + 30% kul) yoki moyli bo‘yoq (200 g olifa + 100 g oxra) surkash lozim. Po‘stloqni kesib tozalamasdan ham ohakli oltingugurt qaynatmasi (OOQ – ISO) yoki tsink sulfati bilan bor elementining aralashmasini surkash kasallikni ancha kamaytiradi. Vegetatsiya davrida kalmarazga qarshi tavsiya qilingan fungitsidlarni purkash qora rakka qarshi ham biroz samara beradi.</p><p></div>`;  
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
        source={require("./m_html_79743c06dc581a7f.jpg")}/>

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
        source={require("./m_html_db63bd08348b9d33.jpg")} />
        </ScrollView></SafeAreaView >
     
  );
};

export default Id;
