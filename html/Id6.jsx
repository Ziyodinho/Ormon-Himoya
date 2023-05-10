import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;"><b>Virgin archa  </b><i><b>(Juniperus virginiana L.)  </b> </i><b>shirasi </b><b>- </b><i><b>Juniperus schizaphis Graminum </b> </i><i><b> </b> </i></p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;">Archashoxini sevadiganlarga archa shirasi kiradi, shiralar daraxt tanasidagi suyuqlik bilan oziqlanadi. Urg‘ochi shiralar bo‘g‘iq qoramtir rangda, qanotsiz partenogenetik holatda bir ozgina changlatuvchi bo‘ladi. Boshidan naycha orqali 2 ta qoramtir yo‘l o‘tadi. Tanasi noksimon shaklda 1,75-3,05 mm ni tashkil etadi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproq namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol<span style="letter-spacing:-0.3pt">d<span style="letter-spacing:-0.3pt">ini olish<span style="letter-spacing:-0.3pt">,qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i><b> </b>Oltinko‘z lichinkalarini 1:5, 1:10 va 1:15, Kriptolemus-Cryptolameus montouzieri Muls. 1:5, 1:10 va 1:15 nisbatda tarqatiladi. Mikrobiopreparatlardan Bioslip BT, 2,0-3,0 kg/ga, Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.3pt"><i> </i><span style="letter-spacing:-0.3pt">Imitrin, 20% sus.k., Danadim, 40 % em.k., 0,8-1,0 l/ga, <span style="letter-spacing:-0.3pt">Nurell-D 55 % em.k., 1,5 l/ga, <span style="letter-spacing:-0.3pt">Ovipron 2000 KE (800 g/l), 10-15 l/ga, Preparat – RR-1, 10-15 l/ga,<span style="letter-spacing:-0.3pt">Konfidor, 20% em.k. – 0,2<span style="letter-spacing:-0.3pt">-0,3<span style="letter-spacing:-0.3pt">l/ga. <span style="letter-spacing:-0.3pt">,<span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">Bagira, 20 % em.k., 0,3-0,4 l/ga, Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k. 1,0-3,0 l/ga, <span style="letter-spacing:-0.3pt">Faskord, 10% em.k. 0,2-0,3 l/ga,<span style="letter-spacing:-0.3pt">Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga miqdorda preparatlarni qo‘llash.<br><p  align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;"><i><b>Archa shirasi  </b> </i><i><b> </b> </i><i><b>Juniperus virginiana L. </b> </i><i><b>ning daraxt tanasidagi ko‘rinishi </b> </i></div>
  `;  
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
        source={require("./i_html_809a6ea25cd7cd18.gif")}/>
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
        source={require("./i_html_1e7e37bc33ab13bd.gif")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
