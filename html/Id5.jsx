import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Archa unsimon qurti  </b><i>(Planococcus vovae Nass.) </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Unsimon qurtlar 270 avlod 2200 turni o‘z ichiga olib, shundanyevropada 330 turdan ko‘prog‘i aniqlangan. Bular tropik va subtropik o‘lkalarda tarqalibularning ba’zi birlari evolyutsion o‘zgarishlar natijasida yerning tagida yashashga moslashgan. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:0.1pt">Unsimon qurtlar urg‘ochi va erkagi tuzilishi va rivojlanishi bilan farqlanadi. Unsimon qurtlarning tanasi cho‘ziq, ba’zilarida parallel yonboshli, ko‘pincha tuxumsimon, qorinchaning uchiga tomon ingichkalash<span style="letter-spacing:0.1pt">ganligi<span style="letter-spacing:0.1pt">bilan qalqondor va soxta qalqondorlardan farq qiladi. Ko‘pchilik tur unsimon qurtlar usti oqish <span style="letter-spacing:0.1pt">unsimon qobiq <span style="letter-spacing:0.1pt">bilan qoplangan. Ular tuxum qo‘yish davrida tanani o‘rab olgan oq paxtasimon xaltacha chiqaradi. yetuk urg‘ochining qalqoni shakli, rangi, kattaligi, asosiy qismlarning o‘rnashishi va katta – kichikligi juda xilma – xil. Unsimon qurtlar bahorgi hayot faoliyati o‘simliklar tanasida shira oqimi yurishi bilan boshlanadi. Qishlovdan chiqqan lichinkalar tez o‘sa boshlaydi va ko‘p vaqt o‘tmay tullaydi. Yetuk davrida qishlovchilar erta bahorda, qisman oziqlangandan so‘ng, tuxum qo‘yishga kirishadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Archa unsimon qurti asosan igna barglarda, novdalarda ba’zan asosiy tanada yashaydi. Qurtlar yoppasiga zararlaganda igna barglar qo‘ng‘ir tusga kiradi. Yerga to‘kiladi, ularda mog‘or zamburug‘lari rivojlanib qorayadi. Urg‘ochisi sarg‘ish qo‘ng‘ir, ba’zan ko‘kimtir rangda 2-3 mm uzunlikda. Rossiyada bir avlod beradi. Bizda hozir uning biologiyasi o‘rganilmoqda. Ikkinchi ba’zan III yoshli lichinkalari qalqonchalar po‘stloq yoriqlarida qishlab qoladi. Qishlovdan keyin lichinkalar chiqadi. Igna barglar va yosh novdalarga o‘tadi. Kuzga borib yo‘g‘on novdalarda tuxum qo‘yadigan urg‘ochilari paydo bo‘ladi. Urg‘ochisi 92 ta ba’zan 23 tagacha tuxum qo‘yadi. Undagi qishlab qoluvchi lichinkalar paydo bo‘ladi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-top:0.21cm;margin-bottom:0.21cm;"><i><b>Archa unsimon qurtlari bilan zararlangan archalar </b> </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">t<span style="letter-spacing:-0.3pt">adbirlarni o‘z vaqtida amalga oshirish, mineral <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproq namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol<span style="letter-spacing:-0.3pt">d<span style="letter-spacing:-0.3pt">ini olish<span style="letter-spacing:-0.3pt">,qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i><b> </b>Oltinko‘z lichinkalarini 1:5, 1:10 va 1:15, Kriptolemus-Cryptolameus montouzieri Muls. 1:5, 1:10 va 1:15 nisbatda tarqatiladi. Mikrobiopreparatlardan Bioslip BT, 2,0-3,0 kg/ga, Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Preparat – RR-1, 10-15 l/ga,Konfidor, 20 % em.k. 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga, Bi-58 (yangi), 40 % 1,0-1,5 l/ga, Imitrin, 20% sus.k., Danadim, 40% em.k., Nurell-D, 55 % em.k., 1,5 l/ga, Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k., 1,0-3,0 l/ga, Faskord, 10% em.k. 0,2-0,3 l/gapreparatlarni qo‘llash.</p><p></div>`;
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
    }} source={require("./i_html_4e2370c453792b.jpg")} />

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
    }} source={require("./i_html_22f23cb95acb1578.gif")}/>
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
        source={require("./i_html_1b8a1e5845699867.jpg")} />
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
        source={require("./i_html_6d77e3c8c092fc30.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
