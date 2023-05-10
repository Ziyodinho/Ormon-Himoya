import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Shahar mo‘ylovdori  </b><i><span style=""><span >–<span style=""><span style="">Aeolesthes sarta Solsk<span style="">. </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Shahar mo‘ylovdori<b> </b><i><span style="">(городской усач<b><span style=""></b><span style="">-<span style=""><span style="">Aeolesthes sarta <span style="">Solsk<span style="">.)<b><span style="">. </b> </i><span style="letter-spacing:normal">Bu<span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt">qo‘ng‘iz qizg‘ish-qo‘ng‘ir yoki jigar rang tusda. <span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt"><span >Ustki tomoni qalin tuklar bilan qoplangan bo‘lib, tanasining asosiy rangini yashirib turadi. Qo‘ng‘iz qanotlari va tanasidagi tuklar qoplamasi kumush-baxmalsimon tovlanish kasb etadi. Erkagining mo‘ylovlari tanasiga nisbatan 1,5-2 baravar uzun. Qo‘ng‘izning tana uzunligi har<span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt">-<span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt"><span >xil bo‘lib, 28 mm dan 47 mm gacha yetadi. <span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt"><span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt">Bu qo‘ng‘izlar tabiatda uchib chiqishi Toshkent viloyatida aprel oyining o‘rtalarida boshlanadi. Tog‘li sharoitlarda esa kechroq, ya’ni aprel oyi oxirlari va may oyi boshlarida boshlanib, iyul oylari o‘rtalarigacha davom etadi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Qo‘ng‘izlar daraxt yoriqlariga va chuqurchalariga 1-3 tadan tuxum qo‘yadi. Tuxumlardan yangi tug‘ilgan lichinkalar daraxt qobig‘ining ostki qismidagi lub qavati bilan oziqlanadi. Ular kuzga borib, daraxtning yog‘och qismini ham kemira boshlaydi va shu yerda qishlaydi. Kechroq tug‘ilgan lichinkalar qobiq ostida qishlaydi va kelgusi yil qobiq ostidan daraxt tanasining ichki qismiga o‘tib, shu yil yozda yog‘ochlik ichida rivojlanadi. Lichinkalar ikkinchi yili iyun oylari oxiriga borib oziqlanishni to‘xtatadi. Ular o‘z yo‘llari oxiriga borib yog‘ochni kemirib g‘umbakka aylanish uchun joy ochadi va o‘sha joyda g‘umbak hosil qiladi. Shu g‘umbaklardan sentyabrga borib qo‘ng‘izlar paydo bo‘ladi va ular shu yerda qishla<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">y<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">di. Odatda shahar mo‘ylovdori <span style="letter-spacing:0.2pt"> Markaziy <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Osiyo va Janubiy Qozog‘istonning shahar va aholi istiqomat qiladigan joylaridagi manzarali daraxtlarga qiron keltiradigan zararkunanda sifatida mashhur. Bu zararkunanda vohalarda o‘sadigan daraxtlarga xos bo‘lib, keyingi 30-40 yil davomida tog‘larning dengiz sathidan 2000 metr balandlikdagi o‘rmonzorlarida ham uchray boshladi. Qo‘ng‘izlar tabiatga qosh qorayganda chiqadi.</p><p  align="center" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><b>Shahar mo‘ylovdori  </b><b><span style="">-</b><b><span style=""></b><i><b><span style="">Aeolesthes sarta</b> </i><b><span style="">Solsk</b><b><span style="">. </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Kunduz kunlari esa xilvat joylarda bekinib yotadi. Agar daraxt batamom qurib bitmagan bo‘lsa, yangi chiqqan qo‘ng‘izlar ularni tark etmaydi, yangidan daraxt po‘stloqlarining yoriqlariga va ostiga tuxum qo‘yadi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt">Shahar mo‘ylovdori O‘zbekiston, Tojikiston, Turkmaniston, Janubiy Qozog‘iston, va Janubiy Qirg‘izistondagi ko‘pgina shahar va aholi punktlaridagi mevali va manzarali daraxtlarning jiddiy zararkunandasidir. Bu zararkunanda ko‘pgina daraxtlar jumladan, grek yong‘og‘i, olma, nok, olxo‘ri, qayrag‘och, terak, tol, chinor, eman, oq qayin, shumtol, zarang, tut, akatsiya, tikon daraxti va maklyura kabi mevali va manzarali daraxtlarga katta zarar yetkazadi. Qo‘ng‘izlar sog‘lom daraxtlarni butunlay ishg‘ol qiladi va nihoyat quritadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>kuzgi shudgorlash, qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan shoxlarni kesish, yaxob suvlarni berish.</p><p  style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.4pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Aykon-Miks 20 % s.d.g., 0,4 l/ga,<span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Agrofos Ekstra, 60 %, em.k. 0,5-1,0 l/ga,<span style="letter-spacing:-0.4pt"><i> </i>Karbofos,50 % k.em., 3,0 l/ga. Fufanon, 57 % em.k., 3,0 l/ga, preparatidan gektariga 3,0 litr sarf-me’yorda daraxtlarning o‘suv davrida qo‘llash.</p><p></div>`;  
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
        source={require("./i_html_f57136a766fbaa44.jpg")} />

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
        source={require("./i_html_13c7b7e1d833961f.jpg")} />

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
        source={require("./i_html_83dc29b577313fa.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
