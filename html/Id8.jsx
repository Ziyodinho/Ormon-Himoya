import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Qarag‘ay </b><b>shirasi </b><span >–<span ><i>C </i><i>inara pini  </i>L.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Ayniqsa qarag‘ay ko‘chatlari va yaxshi o‘sayotgan yosh daraxtlarga katta zarar yetkazadi. Lichinkalar kurtak asoslarini, ignabarglarni va ignabarglar orasida yosh novdalarni so‘rib zararlaydi. Tuxumlik bosqichida qishlaydi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b><span style="letter-spacing:-0.3pt"><b> </b><span style="letter-spacing:-0.3pt">Katta shaftoli tana shirasi va qarag‘ay shirasiga qarshi bir xil kurash tadbirlari amalga oshiriladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproq namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol<span style="letter-spacing:-0.3pt">d<span style="letter-spacing:-0.3pt">ini olish<span style="letter-spacing:-0.3pt">,qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Biologik kurash:  </b>Oltinko‘z lichinkalarini 1:5, 1:10 va 1:15, nisbatda tarqatiladi. Mikrobiopreparatlardan Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Atilla-Super, 10% em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, em.k. 10-15 l/ga, Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % k.e. – 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga, Bi-58 (yangi), 40 % em.k., 1,0-1,5 l/ga,Imitrin, 20% em.k., Danadim 40% em.k., Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Nurell-D, 55 % em.k., 1,5 l/ga, va boshqapreparatlarni qo‘llash. </p><br><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.42cm;"><i><b>Qarag‘ay </b> </i><i>( </i><i>Cinara pinea Mordv.) </i><i><b> </b> </i><i><b>shirasi </b> </i><span ><i><b>va tuxumi </b> </i></div>`;  
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
        source={require("./i_html_8d57f8333e80ef89.jpg")} />

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
        source={require("./i_html_e69db19f73ef3691.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
