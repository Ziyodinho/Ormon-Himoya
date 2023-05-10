import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><b>Komstok qurti </b><span style="letter-spacing:-0.3pt">(<span style="letter-spacing:-0.3pt">червец комстока - <span style="letter-spacing:-0.3pt"><i>Pseudococcus comstocki  </i><span style="letter-spacing:-0.3pt">Kuw.) urg‘ochisining uzunligi 3-4 mm bo‘lib, tuxum qo‘yish davrida esa 5-6 mm ga yetadi. Tanasi oq mumsimon g‘ubor bilan qoplangan, chetlarida 17 juft mumsimon o‘siq, shu jumladan, tana uzunligining yarmigacha boradigan ikkita uzun dumi bor. Oyoqlari yaxshi rivojlangan, bilinar bilinmas kalta tuklar bilan qoplangan. Son va boldirning pastki tomoni sertuk. Ko‘zlari yirik, mo‘ylovlari 8 bo‘g‘imli bo‘ladi. Qurtning erkagi 1,02-1,5 mm uzunlikda qanotli, qizg‘ish, jigar rangli, ko‘zlari qora bo‘lib, qizil doiralar bilan o‘ralgan. Mo‘ylovlari 10 bo‘g‘imli.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt">Komstok qurti po‘stloq tangachalari ostida, daraxtlarning kovagida, o‘simlik ildizlarida, hazon orasida, devor yoriqlarida tuxumlik davrida qishlaydi. Urg‘ochi hashorat tuxum qo‘yish paytida, mumsimon oq par, ya’ni ovisak chiqaradi, tuxumlar shu ovisakning ichida to‘p-to‘p bo‘lib turadi. Voyaga yetgan urg‘ochilari ham lichinkalari ham qishgacha qoladi, ammo qora sovuqda va yog‘ingarchilik ko‘p bo‘lganda o‘lib ketadi. Yaxshi himoyalanmagan joylardagi tuxumlarning ko‘pchiligi ham qish bo‘yi nobud bo‘ladi. Lichinkalar tut daraxtinig kurtaklari bo‘rta boshlaganida tuxumdan chiqa boshlaydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Komstok qurti o‘simlikning hamma qismlarini, tanasi, poyalari, shoxlari, gullari, mevalarini va 5-6 sm chuqurlikdagi tuproqqa kirib ildizlarning yuqori qismini so‘radi. Ayrim hollarda esa 40 sm gacha chuqurlikda uchraydi. Qurt odatda bargning pastki tomonidagi tomirlar bo‘ylab oziqlanadi.Bu zararkunandaning urg‘ochilari uchta lichinkalik yoshini o‘tadi, ikkinchi yoshdagi lichinka po‘st tashlagandan keyin urg‘ochisi tinchlik davriga kiradi.Komstok qurti taxminan bir yarim oyda bir nasl beradi. Y<span >oz bo‘yi uchta ba’zan to‘rtta nasl beradi. Urg‘ochisi so‘nggi po‘st tashlashdan 10-30 kun keyin tuxum qo‘ya boshlaydi. Voyaga yetgan qurtlar va lichinkalar qorong‘i joylarda yashaydi, tik tushib turgan quyosh nurida (38<sup>0</sup>S haroratda) nobud bo‘ladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.2pt">Birinchi yoshdagi lichinkalar chiqqan joyidan har tomonga o‘rmalab ketsa ham qurt daraxtning bir shoxi yoki shoxlar orasidagi yaqin masofadagina aktiv harakatlana oladi, xolos. Sog‘lom o‘simliklarga asosan passiv yo‘l bilan, tut ko‘chati, bargi, chiqindi, o‘tini, transport vositalari, kiyim-kechak, hayvonlar juni, qushlar panjasi, ariq suvi bilan tarqaladi, qurt qishloq xo‘jaligi asboblari va sabzavot hamda mevalar bilan ham tarqalishi mumkin.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i>O‘simlik bardoshliligini oshiradigan chora tadbirlarni qo‘llash.Unsimon qurtlarining samarali kushandasi psevdofikus (<i>Pseudaphicus malinus Gah. </i>) qo‘llash mumkin. Undan tashqari tabiatda bu qurtlar bilan bona mushkasi (pashsha) <i>Leucopis bona Rohd </i>. va xonqizlaridan <i>Nephus </i>va <i>Scymnus </i>pardaqanotlilardan <i>Leptomastidae matritensis </i>va <i>Snartocerus subaeneus </i>kushandalari oziqlanishi kuzatiladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>turli sintetik piretroid hamda fosfororganik insektitsidlarni qo‘llash.</p><p></div>`;  
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
        source={require("./m_html_396a481326a28303.jpg")}/>

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
        source={require("./m_html_50cb931b4043b12.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
