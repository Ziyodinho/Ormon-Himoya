import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><span style="letter-spacing:0.2pt"><b>Barg va shoxlarning yuqumsiz kasalliklari</b><span style="letter-spacing:0.2pt">. Daraxtlarda so‘lish, ranglarning o‘zgarishi, barg va novdalarning qurishi kuzatilishi mumkin. Ularda yuqumli kasallik qo‘zg‘atuvchilari topilmaydi, bunday holllarda tashqi muhit omillari kasallik sababchisi bo‘lib xizmat qiladi. Tuproqda namlikning yetishmasligi barglarning so‘lishi va qurishiga olib keladi. Tuproqda namlik me’yoridan ortiq bo‘lib havoning kirishi yomonlashsa ildizlar nobud bo‘ladi va chiriydi. Ko‘pincha igna bargli daraxtlarda yaxshi yog‘ochlashishga ulgurmagan (turli kasalliklar ta’sirida) shoxlar past haroratlar ta’sirida nobud bo‘ladi. Tuproqda oziqa moddalarning yetishmasligi ham daraxtlarda turli yuqumsiz kasalliklarning yuzaga kelishiga sababchi bo‘ladi. Jumladan oziq moddalarning umumiy yetishmasligi pakanalikni keltirib chiqarsa, temir yetishmasligi yoki kaltsiy miqdorini ortib ketishi xlorotiklikni yuzaga keltiradi. Tuproqda turli-xil tuzlarning miqdori ortib ketishi barglarning sarg‘ayishiga sababchi bo‘ladi. Havodagi zaharli gazlar daraxtlarning kuchsizlanishi va hatto nobud bo‘lishiga olib keladi. Dastlab barglarda qizg‘ish qo‘ng‘ir nikroz dog‘lar paydo bo‘ladi. Igna barglar esa qizil tus oladi. Daraxtlarning o‘sishi sezilarli sekinlashadi. Ba’zan daraxt barglari to‘kiladi va butunlay qurib qoladi. Yuqumsiz kasalliklar yuzaga kelganda uni qo‘zg‘atgan yoki bu tashqi omil bartaraf etishga qaratilgan tadbirlar qo‘llaniladi. Igna bargli daraxtlar mamlakatimiz xududlarida sho‘rlanmagan tuproqlarda yaxshi o‘sib rivojlanadi. Igna barglar daraxtlar tuproq unumdorligiga talabchan guruhiga kiradi. Igna bargli daraxtlarning yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, o‘g‘itlash va sug‘orish ishlari sifatli o‘tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish muhim ahamiyat kasb etadi.</p><p><span style="letter-spacing:-0.3pt">Igna bargli daraxtlar agrobiotsenozida muvozanat o‘zgarayotganligi munosabatini bilan tog‘li va sug‘oriladigan hududlarda har-xil turdagi zararli organizmlar ko‘plab uchrashi kuzatilgan. </p><p><span style="letter-spacing:0.1pt">Respublikamiz iqlim sharoiti yuqoridagi kasalliklarning bioekologik xususiyatlari, tur tarkibi, turlarning tarqalish areali ularning zarar keltirish darajasi va ularga qarshi oldini olish choralari yetarlicha o‘rganilmagan. Igna bargli daraxtlar kasalliklariga qarshi kurash yuqori biologik va iqtisodiy samara beradigan entomofaglarga hamda issiqxona hayvonlarga kam ta’sir qiladigan, ekologik xavfsiz oziq-ovaqt mahsulotlarini ifloslantirmaydigan bo‘lishi kerak. Hozirgi vaqtda mamlakatmizda obodonlashtirish va ko‘kalamzorlashtirishda igna bargli daraxtlarning sanitar-gigenik hamda estetik jihatdan ahamiyati yuqori bo‘lib hisoblanadi.</p><p  align="center" ><b>Barg va shoxlarning yuqumsiz kasalliklari </b></p><p><b><span style="">Kurash choralari: </b></p><p><span style="letter-spacing:0.2pt"><i><b><span style="">Agrotexnik kurash:</b> </i><span style="letter-spacing:0.2pt">tadbirlarni o‘z vaqtida amalga oshirish. mineral ug‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini olini olish. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:0.2pt">o‘<span style="letter-spacing:0.2pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p></div>`;  
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
        source={require("./i_html_5657213eea841275.jpg")}/>

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
        source={require("./i_html_2753c03126dcec6c.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
