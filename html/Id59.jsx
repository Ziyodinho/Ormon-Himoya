import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b><span >Terak kichik <span >tilla qo‘ng‘izi - </b><span ><i>( </i><span >малая тополевая златка<b><span ></b><span >-<b><i><span >Melanophila picta </i><i><span > </i><span >Pall<span >.<i><span >) </i><i><span > </i></b><span style="letter-spacing:normal"><span >Rossiyaning yevropa qismida ko‘p tarqalgan bo‘lib, ixota o‘rmonlarini, ayniqsa, tog‘<span style="letter-spacing:normal"><span ><span style="letter-spacing:normal"><span >terak va madaniy terakzorlarga jiddiy zarar yetkazadi. U Markaziy Osiyoda terak, tol va oq akatsiya daraxtlarini eng ko‘p zararlaydigan zararkunandadir.<b><span style="letter-spacing:normal"><span ></b><span style="letter-spacing:normal"><span >Bu qo‘ng‘izning ikki turi mavjud bo‘lib, ular har doim terak va tol daraxtlarida rivojlanadi. Bu qo‘ng‘iz qora yaltiroq yoki bug‘doy rang ko‘rinishda bo‘lib, mayda-mayda nuqtachalari mavjud. Qanotlari qora rangda, sariq dog‘lar bilan qoplangan. Odatda har bir qanotida 8 tadan dog‘lari bo‘ladi. <span style="letter-spacing:normal"><span ><i>Agrilus pratensis  </i><span style="letter-spacing:normal"><span >turining tanasining uzunligi 4,5-6,5 mm. <span style="letter-spacing:normal"><span ><span style="letter-spacing:normal"><i><span >Melanophila picta Pall  </i><span style="letter-spacing:normal"><span >turining tana uzunligi esa 8-14 mm ga yetadi.</p><p align="justify" ><span style="letter-spacing:normal">Katta yoshli lichinkalari oziqlanish vaqtida oq rangda, oziqlanish tugagandan so‘ng sarg‘ish rangda bo‘ladi. Lichinkalar tanasining oldingi qismi yo‘g‘onlashgan. Katta yoshli lichinkalar uzunligi 20-26 mm. Tuxumdan chiqqan lichinkalar po‘stloq osti lub qavati bilan oziqlanadi. Keyinroq esa yog‘ochlik qismini ham kemira boshlaydi. Lichinkalarning rivojlanish bosqichi taxminan 45-50 kunga cho‘ziladi. Iyul oyining birinchi yarmida lichinkalar g‘umbakka aylanish uchun daraxt ichini kovlab o‘ziga joy tayyorlaydi va avgust oyida deyarli hamma lichinkalar o‘sha joylarda g‘umbakka aylanadi. G‘umbakka aylanish 10-15 kun davom etadi. Ular shu yerda qishlaydi. Bu qo‘ng‘iz o‘rmon xo‘jalik ko‘chatzorlarida keng tarqalib, o‘rmon xo‘jalik ko‘chatchiligiga katta talofatlar keltiradi.</p><p align="justify" ><span style="letter-spacing:normal"><span >Bu zararkunanda keng doiradagi ekologik sharoitda yashashga moslashgan. Ko‘payishi (generatsiyasi) bir yillik. Qo‘ng‘izning tabiatga uchib chiqishi may oyining boshlarida kuzatilib, iyun oyi oxirlarigacha davom etadi (dengiz sathidan 1500 m balandliklarda bir oy kechroq). Qo‘ng‘izlar issiqsevar va yorug‘sevar. Shuning uchun ular issiq kunlarda, ya’ni kunduzi soat 10 dan kech soat 17 gacha juda faol bo‘ladi. Ular shu vaqtda oziqlanadi, juftlashadi va tuxum qo‘yadi. Qo‘ng‘izlar daraxt yoriqlari va chuqurchalariga 2-3 ta qilib tuxum qo‘yadi. Tuxumlarning rivojlanishi taxminan 10 kun davom etadi. May oyining ikkinchi yarmida tuxumlardan lichinkalar chiqadi<span style="letter-spacing:normal">.</p><p align="justify" ><span style="letter-spacing:normal">Bu qo‘ng‘izning ommaviy ko‘payishi juda tez boshlanadi. Adabiyotlardagi ma’lumotlarga ko‘ra o‘tmishda Toshkent viloyati Angren o‘rmon xo‘jaligidagi terak ko‘chatxonalarining 26% gacha, CHirchiq o‘rmon xo‘jaligining yosh terak ko‘chatxonalarining katta qismi zararlangan, 25% daraxt esa nobud bo‘lgan. Hattoki, ekish ishlarining sifatli o‘tkazilishi va ko‘chatlarning 100% ko‘karishiga qaramay ushbu o‘rmon xo‘jaligining 77% yosh ko‘chatzorlari ayni shu zararkunandadan aziyat chekkanligi qayd qilingan.</p><p align="justify" ><span style="letter-spacing:normal">Bu zararkunanda Rossiyaning yevropa qismida, janubiy-sharqiy o‘lkalarda keng tarqalgan. Bundan tashqari u Uzoq Sharq, Janubiy Sibir, Xitoy, Mongoliya o‘rmonlarida ham ko‘p uchraydi. <span style="letter-spacing:normal"><span >Shuningdek, Saratov, Volgagrad, Rostov, Astraxan viloyatlarida, Old Osiyo va Markaziy Osiyoda terakzor va tol darxtlarini katta nobudgarchiliklarga olib keladi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Qarshi kurash choralari </b> </i><span style="letter-spacing:normal"><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Kimyoviy kurash </b> </i><span style="letter-spacing:normal"><i><b>: </b> </i><span style="letter-spacing:normal"><span style="letter-spacing:normal">Amrell-D, 60% em.k. 1,0-1,5 l/ga, Siperfos, 55% em.k. 1,5 l/ga, <span style="letter-spacing:normal">Karbofos- 50 % k.em. 1<span style="letter-spacing:normal">,0 l/ga <span style="letter-spacing:normal">Fufanon<span style="letter-spacing:normal">,<span style="letter-spacing:normal">57 % e.k. g<span style="letter-spacing:normal">ektarga<span style="letter-spacing:normal">3,0<span style="letter-spacing:normal">litr miqdorda yuqoridagi preparatlardan birini qo‘llash. <span style="letter-spacing:normal"></p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span ><b><span >Terak kichik <span >tilla qo‘ng‘izi</b></p><p></div>`;  
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
        source={require("./m_html_7678d2b04617fa1e.jpg")} />

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
        source={require("./m_html_598a04bd7de6685b.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
