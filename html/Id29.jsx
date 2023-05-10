import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span lang="fr-FR"><b>Qarag‘ay daraxtlarining shyutte kasalligi </b><span lang="fr-FR">- <span lang="fr-FR"><i>Lophodermium </i><i> </i><span lang="fr-FR"><i> pinus </i></p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span lang="fr-FR">Qarag‘ay daraxtlarining shyutte kasalligi (<span lang="fr-FR"><i>Lophodermium </i><i> </i><span lang="fr-FR"><i>pinus </i><span lang="fr-FR">) qo‘zg‘atuvchi zamburug‘ igna bargli daraxt katta zarar yetkazadi. So‘ngi yillari bu kasallik tarqalish areali kengayib, asosan ko‘chatzorlarda yosh igna bargli daraxtlarga zarar yetkazishi kuzatilmoqda. Qarag‘ayning kasalllanishi yoz o‘rtalarida zamburug‘ meva tanasi pishib yetilganda apotetsiy va xaltasporalari xaltalaridan chiqqan vaqtiga to‘g‘ri keladi. Xaltalarning hosil bo‘lishi kuzgacha davom etishi mumkin, ba’zan bahorda ham kuzatilib, asosan rivojlanish davri yoz fasliga tug‘ri keladi. Xaltachalar o‘sgandan keyin mitseliylari ignabarg ichiga og‘izchalar orqali kiradi va kuzda kasallikni birinchi beliglari paydo bo‘ladi. Sporalar kirgan joylarida sariq dog‘lar hosil bo‘ladi va igna barglarni uchlari qurib tukila boshlaydi. Shyutte kasalligi bilan kasallangan 3-4 yoshli ko‘chatlarning novdalari kalta, uchlari notekis ochilib qoladi. <span lang="fr-FR"><i>Lophodermium </i><span lang="fr-FR">turkumiga<span lang="fr-FR"><i> </i><span lang="fr-FR">mansub boshqa turdagi zamburug‘lar asosan qarigan daraxtlarni zararlaydi. </p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span lang="fr-FR"><b>Shyutte ( </b><span lang="fr-FR"><i>Lophodermium </i><i> </i><span lang="fr-FR"><i>pinus </i><span lang="fr-FR"><b>) kasalligining zarari  </b></p><p><b><span style="">Kurash choralari: </b></p><p><i><b><span style="">Agrotexnik kurash:</b> </i>sug‘orish rejimigaamal qilish, yetarli oziqa moddalar bilan ta’minlash.</p><p><i><b>Kimyoviy kurash: </b> </i><b> </b>Kasalliklarga qarshi Sporagin 1500 yeA/g s.e.k., 4,0-6,0 l/ga., (Fitobakteriomitsin-stereptotritsin antibiotiklar kompleksi 1,0-2,0 l/ga, Basillus subtilis) asosli preparatlar bilan ishlov berish.</p><p></div>`;  
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
        source={require("./i_html_58dbf6721f3419d2.jpg")}/>

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
        source={require("./i_html_a5db65a2c32b0cad.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
