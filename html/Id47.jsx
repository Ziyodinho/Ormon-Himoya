import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Pista bargxo‘ri  </b><span style="">(фисташковый листоед<i><b><span style=""></b> </i><b><span style="">-</b><b><span style=""></b><i>Labidostomis stenostomci </i><i> </i>Ws<i>. </i><span style="letter-spacing:1.0pt"><b><span style="">). </b><span style="letter-spacing:normal"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Pista bargxo‘ri Markaziy <span style="letter-spacing:normal">Osiyoda pistazorlarning eng xavfli zararkunandasi hisoblanadi. Bu qo‘ng‘iz O‘zbekistonda, ya’ni Bobotog‘da, Hisor tog‘ tizmalarida va pista o‘sadigan boshqa tog‘li <span style="letter-spacing:normal">hududlarda hamda <span style="letter-spacing:normal">Qozog‘iston, Turkmaniston, Tojikiston, Janubiy Qirg‘izistonda ko‘p uchrab pistazorlarga juda katta zarar yetkazadi. U pista daraxtlariga xujum qilib butun barglarni yeb, yosh novdalarni yalong‘ochlab ketadi. Zararkunandaning bu turi nafaqat tabiiy pistazorlarda, balki yosh madaniy pistazorlarda ham ko‘p uchrab, o‘rmon xo‘jalik uchastkalariga katta talofat yetkazadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal">Bu qo‘ng‘iz ko‘k-yashil, metalsimon yaltiroq, qanotlari jilosiz, to‘q-sarik rangda. yelka qanotlarida bittadan qora dog‘i bor. Qo‘ng‘izning tana uzunligi 11-12 mm gacha yetadi. <span style="letter-spacing:normal"><span style="letter-spacing:normal">Qo‘ng‘izlar tabiatda paydo bo‘lgandan 3-5 kundan keyin juftlashadi. Urg‘ochisi juftlashgandan so‘ng 60-80 ta (to‘p-to‘p) qilib tuxum qo‘yadi. Tu<span style="letter-spacing:normal">x<span style="letter-spacing:normal">umlari cho‘zinchoq shaklda bo‘ladi. Tuxumlarini rivojlanish davri 8-10 kunga cho‘ziladi. Tuxumdan chikqan lichinkalar tuproqqa tushadi v<span style="letter-spacing:normal">a<span style="letter-spacing:normal">o‘rmon chirindilari ostida o‘z rivojlanishini davom ettiradi. Lichinkalar bahorda 14-15 sm chuqurlikda g‘umbakka aylanadi. Qo‘ng‘izlarning rivojlanish davri 18-20 kun davom etadi. <span style="letter-spacing:normal">SH<span style="letter-spacing:normal">y<span style="letter-spacing:normal">davr orasida ular daraxtlarning barglarini yeb tamom qiladi. Qo‘ng‘izlar kunning issiq vaqtida juda harakatchan bo‘ladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Hasharotlarning tabiatda paydo bo‘lishi geografik joylashuviga bog‘liq. Masalan, Turkmanistonda aprel oyining o‘rtalarida boshlanib, may oyining o‘rtalarida tugaydi. Tojikistonda (Hisor tog‘lari) esa zararkunandaning uchib chiqishi may oyining o‘rtalaridan boshlanib, iyun oyining o‘rtalarigacha davom etadi. Bobotog‘da (O‘zbekiston) bu hasharotning paydo bo‘lishi 20-25-apreldan boshlanadi. <span style="letter-spacing:normal">Q<span style="letter-spacing:normal">o‘ng‘izlar asosan pista va bodom barglari bilan oziqlanadi. Ular bir daraxtga mahkam o‘rnashib barglarni yeb tugatadi, keyin esa ikkinchi daraxtga uchib o‘tadi. <span style="letter-spacing:normal"><span >Bu hasharotning pistazorlarga ommaviy zarar yetkazishi mavsumi bir oy davom etadi. Zararkunandaniig bu turi Markaziy <span style="letter-spacing:normal"><span >Osiyoda mavjud barcha pistazorlarda keng tarqalgan.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i>Imtirin, 20 % sus.k. 0,3-0,4 l/ga, Karate,5 % k.em. – 0,5 l/ga va Bagira 20% s.e.k. - 0,3 l/ga, Bi-58 (yangi), 40% 1,0-1,5 l/gakimyoviy preparatlaribilanva Lepipobaktotsid, J (Ba-2000 yeA/g) 2-3 A mikrobiopreparati qo‘llaniladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"> <b>Pista bargxo‘ri </b><b>va uning zarari </b></p><p></div>`;  
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
        source={require("./m_html_68b778c69be4d8c3.jpg")} />

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
        source={require("./m_html_28156f75ede11b6.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
