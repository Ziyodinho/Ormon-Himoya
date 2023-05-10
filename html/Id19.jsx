import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><b>Ka</b><b>tt</b><b>a</b><b>shoxdumli mo‘ylovdor</b><i><b>– </b> </i><i>Sirex gigas  </i><i>T </i><i>iuganus. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;">Kattashoxdumli mo‘ylovdor (Рогохвост большой хвойный<i><b> </b> </i><i><b>- </b> </i><i>Sirex gigas  </i>Tiuganus)<i> </i>Yevropaning deyarli hamma joyida, Osiyoning katta qismida va Yaponiyada keng tarqalgan. yevropadan yog‘och maxsulotlarini eksport qilish natijasida Yangi Zelandiyaga borib kolgan. 1951 yilda zararlangan yog‘ochdan tayyorlangan qutilar bilan Avstraliyaga yetib borgan. Bundan tashqari Rossiyaning yevropa qismida Sibir, Kamchatka va Saxalin o‘rmonlarida keng tarqalgan. Shuningdek, Markaziy Osiyo tog‘larining (Tyan-Shan) qoraqarag‘ay o‘rmonlarida uchraydi (Maxnovskiy, 1966).Pardaqanotlilar turkumiga mansub hasharot. Urg‘ochisining tana uzunligi 25-50 mm. Boshi va ko‘krak qismi asosan qora rangli. Qorni sarg‘ish rangli. Faqat o‘rtangi segmenti qoramtir.Erkagi maydaroq bo‘lib tana uzunligi 12sm dan 32sm gacha o‘zgarib turadi. Erkagining ham boshi va ko‘krak qismi qora rangli. Qorni esa qizg‘ish rangli.Lichinkalari tsilindrsimon, oqish, ko‘zlari yo‘q, uch juft qisqa ko‘krak oyoqlari bor. G‘umbagi oq-sarg‘ish, katta yoshli hasharotga o‘xshaydi.</p><p  align="center" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"> <b>Ka</b><b>tt</b><b>a</b><b>shoxdumli mo‘ylovdor</b><b>- </b><i><b>Sirex gigas </b> </i><b>T</b><b>iuganus. </b></p><p  align="justify" >Hasharotlar tabiatga may oyining oxirlarida uchib chiqadi. Asosan, ko‘pchiligi iyun va iyul oylarida uchib chiqadi. Urg‘ochilari hasharotlar daraxt po‘stlog‘ining ostki tomoniga tuxum qo‘yadi. Ular 5-10 mm chuqurlikda 4-8 tadan tuxum qo‘yadi. Bitta urg‘ochi hasharot bir mavsumda 50 tadan 350 tagacha tuxum qo‘yadi. Yangi kesilgan va zararlangan daraxtlarga tezda joylashadi.Taxminan bir oydan keyin tuxumlardan lichinkalar chiqadi va avval po‘stloq osti yumshoq qavati bilan oziqlanadi. Keyinchalik daraxt tanasining ichki tomoniga qarab teshib ketaveradi. Ma’lum masofadan keyin lichinkalar markaz tomondan, daraxt tanasining tashqi tomoniga qarab qaytadi va g‘umbakka aylanish uchun nisbatan kengaytirilgan beshikcha yasaydi. Lichinkalar hosil qilgan teshik yo‘l unsimon yog‘och qipig‘i bilan to‘lgan bo‘ladi. Ularning rivojlanshni 2-3 yil davom etadi.Asosan ular qoraqarag‘ay, oq qarag‘ay va tilog‘och kabi daraxt turlarini zararlaydi.</p><p align="justify" ><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><i><b>Agrotexnik tadbirlar </b> </i><i><b>i </b> </i>o‘z vaqtida amalga oshirish. Mineral o‘g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli o‘tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>usul sifatida daraxtlarga Fufanon, 57 % em.k., 3,0 l/ga, Siperfos,55% em.k. 1,0 l/ga, Karbofos,50 % em.k. 0,6-1,0 l/ga yoki Bagira 20 % em.k.0,3 – 0,4 l/ga preparatlari qo‘llaniladi.</p><p></div>`;  
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
        source={require("./i_html_36437fe1552c7962.jpg")}/>
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
        source={require("./i_html_b08c3e1827e2dcbb.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
