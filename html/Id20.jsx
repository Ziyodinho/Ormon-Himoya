import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.2pt"><b>Tyan-shan shox mo‘ylovdori </b><span style="letter-spacing:-0.2pt"><b> </b><span style="letter-spacing:-0.2pt"><i>– </i><span style="letter-spacing:-0.2pt"><i>Paururus juvencus, Paururus tianshanicus Sem. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.2pt"><b>Tyan-shan shox </b><span style="letter-spacing:-0.2pt"><b> </b><span style="letter-spacing:-0.2pt"><b>mo‘ylovdori </b><span style="letter-spacing:-0.2pt">(синий тянь-шаньский (сосновый) рогохвост<span style="letter-spacing:-0.2pt"><i> </i><span style="letter-spacing:-0.2pt">–<span style="letter-spacing:-0.2pt"><i>Paururus juvencus, Paururus tianshanicus  </i><span style="letter-spacing:-0.2pt">Sem.). <span style="letter-spacing:-0.2pt"><i> </i>Tyan-shan turlari butun yevropa, Shimoliy Amerika, Yaponiya, Yangi Zelandiya o‘rmonlarida keng, tarqalgan. Bundan tashqari Rossiyaning yevropa qismida shimoliy Kavkaz va Zakavkaze Qrim, Sibir va Saxalin o‘rmonlarida ham keng tarqalgan. Markaziy Osiyo sharoitida <span style="letter-spacing:normal"><i>Paururus tianshanicus Scm </i><span style="letter-spacing:normal"><i> </i>turi Chotqol tog‘larining qarag‘ayzor o‘rmonlarida ko‘p uchraydi. <span style="letter-spacing:-0.2pt">Pardaqanotlilar turkumiga mansub hasharot. Urg‘ochisi qoramtir-ko‘k. Tana uzunligi 15-30 mm. erkagi kich<span style="letter-spacing:-0.2pt">ik<span style="letter-spacing:-0.2pt">roq. Tana uzunligi 10-25 mm. Qor<span style="letter-spacing:-0.2pt">ni<span style="letter-spacing:-0.2pt">ning orqa tomoni qizg‘ish-sariq rangdan tana qismiga tomon to‘q-jigarrang tusda o‘zgarib boradi. Ammo, ba’zan ko‘k-qoramtir rangga o‘zgarish xususiyatiga ega. Boshi qoramtir-ko‘kish, mo‘ylovlari qora, oyoqlari qizg‘ish sariq rangli. Generatsiyasi ikki yillik.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:-0.2pt">Zararkunandaning tabiatga uchib chiqishi aprel oyining o‘rtalarida boshlanib, iyul oyining o‘rtalarigacha davom etadi. Urg‘ochisi daraxtning 2-3 m balandlikdagi har<span style="letter-spacing:-0.2pt">-<span style="letter-spacing:-0.2pt">xil shoxlariga 2 tadan tuxum qo‘yadi. Bir mavsumda bitta urg‘ochisi 350-480 ta tuxum qo‘yishi mumkin. Tuxumdan chiqqan lichinkalar po‘stloq ostida 15-25 sm uzunlikdagi teshik yo‘llar hosil qiladi. Ular teshikchalarni yumshoq, unsimon yog‘och qipig‘i bilan to‘ldirib boradi. <span style="letter-spacing:-0.2pt"><span style="letter-spacing:-0.1pt">Qachonki lichinkalar o‘z yo‘lidan, ya’ni, daraxt tanasining markazidan tashqi tomoniga qarab qaytganda voyaga yetib qoladi va oziqlanishni to‘xtatib g‘umbakka aylanish uchun beshikcha hosil qiladi. Bu beshikcha odatdagi teshik yo‘llaridan unsimon moddasi yo‘qligi bilan farq qiladi. <span style="letter-spacing:-0.1pt"><span style="letter-spacing:-0.1pt">Bu zararkunanda qarag‘ay, qora<span style="letter-spacing:-0.1pt"><span style="letter-spacing:-0.1pt">qarag‘ay va oq<span style="letter-spacing:-0.1pt"><span style="letter-spacing:-0.1pt">qarag‘ay kabi igna bargli daraxtlarning texnik va fiziologik zararkunandasi hisoblanadi. Uning lichinkalari daraxt tanasini har tomonlama teshib zararlaydi va nihoyat quritadi.</p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><span style="letter-spacing:-0.3pt"><i><b>Agrotexnik tadbirlar </b> </i><span style="letter-spacing:-0.3pt"><i><b>i </b> </i><span style="letter-spacing:-0.3pt">mineral <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>usul sifatida daraxtlarga Fufanon, 57 % em.k., 3,0 l/ga, Siperfos,55% em.k. 1,0 l/ga, Karbofos,50% em.k. 0,6-1,0 l/ga yoki Bagira, 20 % s.e.k. -0,3 – 0,4 l/ga preparatlari qo‘llaniladi.</p><p></div>`;  
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
        source={require("./i_html_f29c346165b3f00c.jpg")} />

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
        source={require("./i_html_db7fe97ba0242aa6.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
