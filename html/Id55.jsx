import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:0.2pt"><b>Shahar mo‘ylovdori  </b><i><span style=""><span style="letter-spacing:0.2pt">(Городской усач<b><span style=""><span style="letter-spacing:0.2pt"></b><span style=""><span style="letter-spacing:0.2pt">-<span style=""><span style="letter-spacing:0.2pt"><span style=""><span style="letter-spacing:0.2pt">Aeolesthes sarta <span style=""><span style="letter-spacing:0.2pt">Solsk<span style=""><span style="letter-spacing:0.2pt">.)<b><span style=""><span style="letter-spacing:0.2pt">. </b> </i><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Bu qo‘ng‘iz qizg‘ish-qo‘ng‘ir yoki jigar rang tusda. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><span >Ustki tomoni qalin tuklar bilan qoplangan bo‘lib, tanasining asosiy rangini yashirib turadi. Qo‘ng‘iz qanotlari va tanasidagi tuklar qoplamasi kumush-baxmalsimon tovlanish kasb etadi. Erkagining mo‘ylovlari tanasiga nisbatan 1,5-2 bar<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">ob<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><span >ar uzun. Qo‘ng‘izning tana uzunligi har xil bo‘lib, 28 mm dan 47 mm gacha yetadi. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Bu qo‘ng‘izlar tabiatda uchib chiqishi Toshkent viloyatida aprel oyining o‘rtalarida boshlanadi. Tog‘li sharoitlarda esa kechroq, ya’ni aprel oyi oxirlari va may oyi boshlarida boshlanib, iyul oylari o‘rtalarigacha davom etadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Qo‘ng‘izlar daraxt yoriqlariga va chuqurchalariga 1-3 ta dan tuxum qo‘yadi. Tuxumlardan yangi tug‘ilgan lichinkalar daraxt qobig‘ining ostki qismidagi lub qavati bilan oziqlanadi. Ular kuzga borib, daraxtning yog‘och qismini ham kemira boshlaydi va shu yerda qishlaydi. Kechroq tug‘ilgan lichinkalar qobiq ostida qishlaydi va kelgusi yil qobiq ostidan daraxt tanasining ichki qismiga o‘tib, shu yil yozda yog‘ochlik ichida rivojlanadi. Lichinkalar ikkinchi yili iyun oylari oxiriga borib oziqlanishni to‘xtatadi. Ular o‘z yo‘llari oxiriga borib yog‘ochni kemirib g‘umbakka aylanish uchun joy ochadi va o‘sha joyda g‘umbak hosil qiladi. Shu g‘umbaklardan sentyabrga borib qo‘ng‘izlar paydo bo‘ladi va ular shu yerda qishlashadi. Odatda shahar mo‘ylovdori Markaziy <span style="letter-spacing:normal">Osiyo va Janubiy Qozog‘istonning shahar va aholi istiqomat qiladigan joylaridagi manzarali daraxtlarga qiron keltiradigan zararkunanda sifatida mashhur. Bu zararkunanda vohalarda o‘sadigan daraxtlarga xos bo‘lib, keyingi 30-40 yil davomida tog‘larning dengiz sathidan 2000 metr balandlikdagi o‘rmonzorlarda ham uchray boshladi. Qo‘ng‘izlar tabiatga qosh qorayganda chiqadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Kunduz kunlari esa xilvat joylarda bekinib yotadi. Agar daraxt batamom qurib bitmagan bo‘lsa, yangi chiqqan qo‘ng‘izlar ularni tark etmaydi, yangidan daraxt po‘stloqlarining yoriqlariga va ostiga tuxum qo‘yadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Shahar mo‘ylovdori O‘zbekiston, Tojikiston, Turkmaniston, Janubiy Qozog‘iston, va Janubiy Qirg‘izistondagi ko‘pgina shahar va aholi punktlaridagi mevali va manzarali daraxtlarning jiddiy zararkunandasidir. Bu zararkunanda ko‘pgina daraxtlar jumladan, grek yong‘og‘i, olma, nok, olxo‘ri, qayrag‘och, terak, tol, chinor, eman, oq qayin, shumtol, zarang, tut, akatsiya, tikon daraxti va maklyura kabi mevali va manzarali daraxtlarga katta zarar yetkazadi. Qo‘ng‘izlar sog‘lom daraxtlarni butunlay ishg‘ol qiladi va nihoyat quritadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:0.2pt"><i><b>Qarshi kurash choralari </b> </i><span style="letter-spacing:0.2pt"><i>: </i><span style="letter-spacing:0.2pt"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:0.2pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:0.2pt">(qo‘ng‘izlarni uchish davrida) Nurell-D, 55% e.k., 1,5 l/ga, <span style="letter-spacing:0.2pt">Karbofos 50% e.k. - 3,0 l/ga, Bi-58(yangi), 40% em.k. 1,0-1,5 l/ga, <span style="letter-spacing:0.2pt">Fufanon 57% e.k. - 3,0 l/ga; preparatlari sarflanadi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:0.2pt"><b>21-rasm. </b><span style="letter-spacing:0.2pt"><b>Shahar mo‘ylovdori </b></p><p></div>`;  
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
        source={require("./m_html_3d2992c6e48eefe5.jpg")} />

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
        source={require("./m_html_b2647d69c0859801.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
