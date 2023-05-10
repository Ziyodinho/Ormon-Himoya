import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>Igna barglilar </b><span style="letter-spacing:-0.3pt"><b>va butalarning bo‘qoq kasalli </b><span style="letter-spacing:-0.3pt"><b>gi </b><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt"><span >–<span style="letter-spacing:-0.3pt"><span lang="fr-FR"><i>Daldinia concentrica </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt">Igna barglilar<span style="letter-spacing:-0.3pt">va butalarning bo‘qoq (трутовик) kasalli<span style="letter-spacing:-0.3pt">gi (<span style="letter-spacing:-0.3pt"><span lang="fr-FR"><i>Daldinia concentrica)  </i><span style="letter-spacing:-0.3pt"><span lang="fr-FR">daraxtlarda 2-7 sm diametrdagi qattiq sharsimon qo‘ng‘ir-binafsha rangdagi meva tanachasini hosil qilib igna bargli daraxtlarni keskin zararlaydi. Kasallik butun dunyoda tarqalgan bo‘lib, patogen sporalari shamol orqali keng maydonlarga tarqaladi. Patogen fakultativ parazit hisoblanib qurigan va chirigan daraxtlarda saprotrof holda hayot kechiradi. </p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Igna barglilar </b><b>va butalarning bo‘qoq ( </b>trutovik<b>- </b><span style="letter-spacing:-0.3pt"><span lang="fr-FR"><i>Daldinia concentrica) </i><b>) kasalligi </b></p><p><b><span style="">Kurash choralari: </b><i><b><span style="">Agrotexnik kurash:</b> </i>daraxt po‘stloqlarini va bo‘qoq o‘simtalarini kesib tozalash, sug‘orish rejimi amal qilish, yetarli oziqalar bilan ta’minlash. Daraxtlarni shikastlangan joylarini turli xil kimyoviy moddalar bilan ishlov  berish.</p><p><i><b>Kimyoviy kurash: </b> </i><b> </b>Bo‘qoqkasalligini oldini olish uchun 5% li temir kuporasi suyuqligini purkash tavsiya etiladi.Impak, 25% sus.k. 0,1-0,2l/ga. va Banjo forte sus.k., 0,8-1,0 l/ga. (azoksistrobin, penkanazol, propamokarb gidroxlorid, fosetil) preparatlari bilan ishlovberish.</p><p></div>`;  
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
        source={require("./i_html_16ce8b1c95cd6f83.jpg")} />

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
        source={require("./i_html_f31bbcfa0fdf5908.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
