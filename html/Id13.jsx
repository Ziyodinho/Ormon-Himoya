import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><b>Komstok qurti </b>(червец комстока - <i>Pseudococcus comstocki  </i>Kuw.) urg‘ochisining uzunligi 3-4 mm bo‘lib, tuxum qo‘yish davrida esa 5-6 mm ga yetadi. Tanasi oq mumsimon g‘ubor bilan qoplangan, chetlarida 17 juft mumsimon o‘siq, shu jumladan, tana uzunligining yarmigacha boradigan ikkita uzun dumi bor. Oyoqlari yaxshi rivojlangan, bilinar-bilinmas kalta tuklar bilan qoplangan. Son va boldirning pastki tomoni sertuk. Ko‘zlari yirik, mo‘ylovlari 8 bo‘g‘imli bo‘ladi. Qurtning orqa qismi bir oz cho‘zilgan, tanasi anal bo‘laklarini hosil qiladi, har bir bo‘lakda bittadan tuk bo‘ladi. Anal teshigi qorinning oxirgi sigmenti tergitidadir.</p><p>Qurtning erkagi 1,02-1,5 mm uzunlikda qanotli, qizg‘ish, jigar rangli, ko‘zlari qora bo‘lib, qizil doiralar bilan o‘ralgan. Mo‘ylovlari 10 bo‘g‘imli.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;">Tuxumning uzunligi 0,3 mm, oval shaklda bo‘lib, yupqa mumsimon oq gard bilan qoplangan. Birinchi yoshdagi lichinkasining uzunligi taxminan 0,45 mm oval shaklida bo‘ladi. Oziqlana boshlashi bilan mumsimon oq g‘ubor bilan qoplanadi, ikkita dumi bor. Uning mumsimon yon o‘siqlari bo‘lmaydi. Ikkinchi yoshdagi lichinkalarning uzunligi 1 mm gacha boradi, mo‘ylovlari olti bo‘g‘imli. Uchinchi yoshdagi lichinkaning uzunligi esa 1,7 mm gacha boradi, mo‘ylovlari 7 bo‘g‘imli. Ikkinchi va uchinchi yoshdagi lichinkalari mumsimon zich oq g‘ubor va tuklar bilan qoplangan, yonida 16 juft o‘sig‘i vaikkita uzun dum ipi bor.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"> <span style="letter-spacing:-0.3pt"><b>Komstok qurti </b><span style="letter-spacing:-0.3pt"><b>va uning zarar keltirishi </b></p><p><span style="letter-spacing:-0.3pt">Komstok qurti po‘stloq tangachalari ostida, daraxtlarning kovagida, o‘simlik ildizlarida, hazon orasida, devor yoriqlarida tuxumlik davrida qishlaydi. Urg‘ochi hashorat tuxum qo‘yish paytida, mumsimon oq par, ya’ni ovisak chiqaradi, tuxumlar shu ovisakning ichida to‘p-to‘p bo‘lib turadi. Voyaga yetgan urg‘ochilari ham lichinkalari ham qishgacha qoladi, ammo q<span style="letter-spacing:-0.3pt">attiq<span style="letter-spacing:-0.3pt">sovuqda va yog‘ingarchilik ko‘p bo‘lganda o‘lib ketadi. Yaxshi himoyalanmagan joylardagi tuxumlarning ko‘pchiligi ham qish bo‘yi nobud bo‘ladi. Lichinkalar tut daraxtini<span style="letter-spacing:-0.3pt">n<span style="letter-spacing:-0.3pt">g kurtaklari bo‘rta boshlaganida tuxumdan chiqa boshlaydi.</p><p><span style="letter-spacing:-0.4pt">Komstok qurti o‘simlikning hamma qismlarini, tanasi, poyalari, shoxlari, gullari, mevalarini va 5-6 sm chuqurlikdagi tuproqqa kirib ildizlarning yuqori qismini so‘radi. Ayrim hollarda esa 40 sm gacha chuqurlikda uchraydi. Qurt odatda bargning pastki tomonidagi tomirlar bo‘ylab oziqlanadi. <span style="letter-spacing:-0.4pt"><span style="letter-spacing:-0.4pt">Bu zararkunandaning urg‘ochilari uchta lichinkalik yoshini o‘tadi, ikkinchi yoshdagi lichinka po‘st tashlagandan keyin urg‘ochisi tinchlik davriga kiradi.</p><p>Komstok qurti taxminan bir yarim oyda bir nasl beradi. Y<span >oz bo‘yi uchta ba’zan to‘rtta nasl beradi. Urg‘ochisi so‘nggi po‘st tashlashdan 10-30 kun keyin tuxum qo‘ya boshlaydi. Hasharotning birinchi nasli odatda 200-350 ta ko‘pi bilan 670 ta, ikkinchi nasli 250 ta, ko‘pi bilan 350 ta tuxum qo‘yadi. Urg‘ochi qurt 15-36 kun yashaydi.Voyaga yetgan qurtlar va lichinkalar qorong‘i joylarda yashaydi, tik tushib turgan quyosh nurida (38 <sup>0</sup>C haroratda) nobud bo‘ladi.</p><p>Birinchi yoshdagi lichinkalar chiqqan joyidan har tomonga o‘rmalab ketsa ham qurt daraxtning bir shoxi yoki shoxlar orasidagi yaqin masofadagina aktiv harakatlana oladi, xolos. Sog‘lom o‘simliklarga asosan passiv yo‘l bilan, tut ko‘chati, bargi, chiqindi, o‘tini, transport vositalari, kiyim-kechak, hayvonlar juni, qushlar panjasi, ariq suvi bilan tarqaladi, qurt qishloq xo‘jaligi asboblari va sabzavot hamda mevalar bilan ham tarqalishi mumkin.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. <span style="letter-spacing:-0.3pt">Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesishtavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i><b> </b>Mikrobiopreparatlardan Bioslip BV, em.k. 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Super-Tayson, 20 % n.kuk., 0,3-0,5 kg/ga, Ovipron, 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % k.e. – 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga, Kalito 48% sus.k., 0,1-0,15 l/ga, Proper, 11 % m.d.k., 0,25 l/ga,<i> </i>Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga, Imitrin, 20 % sus.k., 0.3-0.4 l/ga, Danadim 40 % em.k., Ekotsis, 2,5 % s.e.k. 0,5-1,0 l/ga, Atilla-Super, 10 % em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, 10-15 l/ga, va boshqapreparatlarni o‘suv davrida qo‘llash. </p><p></div>`;  
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
        source={require("./i_html_68cb28c4b66feeaa.jpg")} />

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
        source={require("./i_html_ef4fcfa9934afacc.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
