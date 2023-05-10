import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b><span style="">Oddiy </b><b><span style="">virgin </b><b><span style="">archalar</b><b><span style="">i</b><b><span style="">ning zang kasalligi – </b>Gymnosporangium confusum<b><span style=""></b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"></b>– asosan (mojjevelnik) oddiy archaga zarar yetkazadi. Oddiy archaning zang kasalligi asosan shamol orqali tarqalib, hozirgi vaqtda Shimoliy Amerika, Shimoliy Afrika, Aziya va yevropa davlatlarida keng tarqalgan. Oddiy archaning zang kasalligi infektsion bo‘lib, kasallikni <span style="">Gymnosporangium turkumiga mansub zamburug‘lar qo‘zg‘atadi. Kasallik qo‘zg‘atuvchisi yozda va yoz oxirlarida tez rivojlanib tarqaladi. Zang kasalligi bilan kasallangan archalarda 2-4 sm diametrdagi qizil sharsimon modda hosil qiladi. Zang kasalligini qo‘zg‘atuvchisi Gymnosporangium confusum va Gymnosporangium turkestanicum zamburug‘lari ixtisoslangan parazitlar hisoblanib, tugallanmagan rivojlanish tsiklidan iborat. Patogen teliosporasi bahorda paydo bo‘lib yozgacha rivojlanadi. </p><p><b><span style="">Kurash choralari: </b></p><p><i><b><span style="">Agrotexnik kurash: </b> </i>Agrotexnik qoidalarga rioya qilish, qurigan novdalarni kesib turish, daraxtlarni yuqori agrotexnika talablarida parvarish qilish, zang kasalligiga qarshi tavsiya qilingan barcha agrotexnik tadbirlarni o‘tkazish lozim. </p><p><span style="letter-spacing:-0.3pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.3pt">ko‘chatxonalarda ishlatiladi va bunda o‘suv davrida fungitsidlardan biri bilan 1-3 marta ishlov beriladi. Bahorda kurtaklar yozilishidan Bordo suyuqligi 3-4 % li eritma (100 l suvga 3-4 kg mis kuporosi va 3-4 kg so‘ndirilgan ohak), mis kuporosi bo‘yicha 30-60 l/ga me’yorida (daraxt yaxshilab ho‘llangunicha); mis oksixlorid 90 % n.kuk., 0,3-0,5<span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">% li eritma; temir kuporosi 53 % <span style="letter-spacing:-0.3pt">n<span style="letter-spacing:-0.3pt">.kuk., 2,0-3,0 % li eritma, 30-40 kg/ga me’yorida daraxtlarga va ostidagi tuproqqa. Kasallik rivojlanishini hisobga olgan holda kurtak yozilishi davrida va keyingi muddatlarda ham Bordo suyuqligi yoki triazol guruhiga mansub fungitsidlardan biri bilan tavsiya qilingan me’yorlarda yana 1 yoki 2 marta ishlov berish tavsiya qilinadi. </p><p></div>`;  
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
        source={require("./i_html_6d2b3b5f5b432f1f.jpg")} />

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
        source={require("./i_html_9fecd3c7ef4ff6fa.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
