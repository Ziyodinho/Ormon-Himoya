import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal"><b>Qayrag‘och bargxo‘ri  </b><span style="">(карагачевый листоед<i><b><span style=""></b> </i><b><span style="">-</b><i><span style="">Galerucella luteola </i><i><span style=""> </i><span style="">Muell<span style="">. <span style="">)<span style="">. Bu qo‘ng‘iz sariq-qo‘ng‘ir rangda, boshi va oldingi yelkasida qora xollari majud. Qanotlari sariq-ko‘ng‘ir, xira rangda, qanotlar chekkasi bo‘ylab qora chiziq tortilgan. Bundan tashqari har bir qanoti o‘rtasida qisqa qora chiziqlari bor. Boshining pastki tomoni, old ko‘kragi, oyoqlari va qorni sariq-qo‘ng‘ir rangda. <span >Tanasining uzunligi 6-7 mm. Katta yoshli lichinkalari sariq, tana uzunligi 11<span >mm. <span >Lichinkalari barglarni kemirib, daraxtlarni yalang‘och<span >qilib qo‘yadi. Bu qo‘ng‘iz O‘zbekistonda qayrag‘och o‘rmonzorlarining eng xavfli zararkunandasi hisoblanadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Qo‘ng‘izlar daraxt yoriqlarida qishlaydi. Bu zararkunanda CHotqol tog‘larining dengiz satxidan 1500 m balandliklarida uchrab, aprel oyida qishgi uyasidan chiqib asta-sekin tabiatga tarqalganligi aniqlangan. Qo‘ng‘izlar barglarga 40 tadan to‘p-to‘p qilib tuxum qo‘yadi. Tuxumlar to‘q-sariq rangda. Qo‘ng‘izlar iyun oyining ikkinchiyarmi, iyul oyining birinchi yarmida birinchi avlod tuxumlarini ko‘yadi. Tuxum qo‘ygan qo‘ng‘izlar iyul va avgust oylarida nobud bo‘ladi. Tabiatda qo‘ng‘izlarning birinchi avlodi avgust oxirida paydo bo‘ladi va sentyabrga borib qo‘ng‘izlar qishlash uchun daraxt yoriqlariga kirib ketadi. Shunday qilib qayrag‘och bargxo‘ri bir yil davomida ikki avlod berib ko‘payadi.</p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Siperfos 55% k.e. -1,0 l/ga, Bagira 20% s.e.k. -0,3 l/ga., Karbofos 50% em.k. 0,6-1,0 l/ga preparatlaridan biri qo‘llaniladi.<i>Mikrobiopreparatlardan </i>Lepipobaktotsid, J (Ba-2000 <span >YeA/g) 2-3 A qo‘llaniladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><b>10-rasm. </b><span style="letter-spacing:normal"><b>Qayrag‘och bargxo‘ri </b><span style="letter-spacing:normal"><b>va uning zarari </b></p><p></div>`;  
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
        source={require("./m_html_7ae65426a684103b.jpg")} />

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
        source={require("./m_html_9d27f7e31260c648.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
