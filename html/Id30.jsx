import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b><span style="">Igna bargli daraxtlarning sitosporoz kasalligi</b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="">Igna bargli daraxtlarning sitosporoz kasalligini <i>Cytospora pini </i><span style="">zamburug‘i qo‘zg‘atadi. Kasallik qo‘zg‘atuvchisi asosan poyalarini zararlab, zararlangan poya rangi o‘zgarib, so‘ngra poya qurib qoladi. Kasallik asosan iqlimni keskin o‘zgarishi ya’ni daraxtlarga sovuq yoki issiqni salbiy ta’siri natijasida paydo bo‘ladi. Qarshi kurash choralari olib borilmaganda ushbu kasallik tufayli daraxt qurib qolishiga olib keladi. </p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style=""> <b>Sitosporoz ( </b><i>Cytospora pini </i><b><span style="">) kasalligini zarari</b></p><p><b><span style="">Kurash choralari: </b></p><p><i><b><span style="">Agrotexnik kurash:</b> </i>Daraxtlarni yuqori agrotexnika talablarida parvarish qilish, sitosporoz kasalligiga qarshi tavsiya qilingan barcha agrotexnik tadbirlarni o‘tkazish lozim.</p><p><i><b>Kimyoviy kurash: </b> </i><b> </b>Impak, 25% sus.k. 0,1-0,2l/ga. va Banjo forte sus.k., 0,8-1,0 l/ga. (azoksistrobin, penkanazol, propamokarb gidroxlorid, fosetil) preparatlari bilan ishlovberish.</p><p></div>`;  
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
        source={require("./i_html_9349bdbb086b4142.jpg")}/>

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
        source={require("./i_html_6d03d9b8916f8d11.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
