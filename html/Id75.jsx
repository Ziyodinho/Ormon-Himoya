import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';


 const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>O‘rmon daraxtlari, eman, shumtol, zarang, terak va tol turlari, zirk, do‘lana, chetan va gullarning un-shudring kasalliklari</b><b>. </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash. </b> </i><b> </b>Daraxtlarni yuqori agrotexnika talablarida parvarish qilish, kalmaraz kasalligiga qarshi tavsiya qilingan barcha agrotexnik tadbirlarni o‘tkazish lozim. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash. </b> </i></b>O‘rmon daraxtlarini kimyoviy himoya qilish usuli ko‘chatxonalarda ishlatiladi va bunda un-shudring kasalligining birinchi belgilari ko‘rinishi bilan birorta tarkibida oltingugurt mavjud bo‘lgan preparat (tuyilgan oltingugurt, kuk., 15-30 kg/ga, 0,5-1<sup>o</sup>li OOQ) yoki Bayleton, 25% n.kuk., 0,3-0,4 kg/ga bilan ishlov berish lozim. Kasallik rivojlanishi bilan bog‘liq holda ishlovlarni yana 1-2 marta takrorlash mumkin.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;">Ochiq maydonlarda va/yoki issiqxonalarda o‘stiriladigan atirgul va borshqa gullarning kasalliklariga qarshi ham kalmaraz kasalligiga qarshi ishlatiladigan agrotexnik tadbirlarni hamda fungitsidlarni qo‘llash mumkin (Bayleton 0,75 kg/ga me’yorida ishlatiladi).</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Daraxtlarning </b><b>un shudring kasalligi </b></p><p></div>`; 
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
       source={require("./m_html_93074e984e3c48ef.jpg")} />


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
       source={require("./m_html_d0a869ac2151e2dc.jpg")} />


   </ScrollView></SafeAreaView >
   
 );
};


export default Id;