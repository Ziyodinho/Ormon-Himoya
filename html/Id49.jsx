import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" ><b><span style="letter-spacing:0.2pt">Tol kapalagi</b><span style="letter-spacing:0.2pt"><i><b> </b> </i><b><span style="letter-spacing:0.2pt">(</b><span style="letter-spacing:0.2pt">в<span style="letter-spacing:0.2pt">олнянка ивовая <span style="letter-spacing:0.2pt">-<b><span style="letter-spacing:0.2pt"></b><span style="letter-spacing:0.2pt"><i>Loucoma salicis L </i><span style="letter-spacing:0.2pt"><i><b>.). </b> </i><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Tol kapalagi butun yevropa bo‘ylab tarqalgan. Sharqiy Osiyo, Janubiy-Sharqiy Sibir, Old Osiyo, Koreya, Xitoy, Yaponiya va Markaziy Osiyoda ham keng tarqalgan. Bu kapalakning <span style="letter-spacing:normal"><i><span style="letter-spacing:0.2pt">Loucoma salicis </i><span style="letter-spacing:normal"><i><b><span style="letter-spacing:0.2pt"></b> </i><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">turi<span style="letter-spacing:0.2pt"> Markaziy <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Osiyoning tog‘li zonalarida uchraydi. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Ipakdek oppoq yaltiroq, bu kapalakning xilpirab turuvchi qanotlari 30-40 mm. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Chiroyli qora ko‘zlari mavjud. Ko‘kragi va qorni oq rangda. Erkagining mo‘ylovlari ikki tomonlama taroqsimoi. Urg‘ochisining mo‘ylovlari qisqa taroqsimon<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><i><b>. </b> </i><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><i><b> </b> </i><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Kapalak qurti qoramtir rangda, har bir bo‘g‘inida oq dog‘i (qashqasi) va qizg‘ish-jigarrang, uzun-uzun tuklari bor. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Ka<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">tt<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">a<span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">boshli kapalak qurtining uzunligi 40-45 mm. <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">G‘umbagi qora-jigar rang, xira-yaltiroq ko‘rinishda. G‘umbagining oltinday sap-sariq tuklari mavjud. Qornining oxiri juda toraygan. Tanasining uzunligi 14-22 mm. Tol kapalagi terakzorlar va manzarali tol daraxtlariga zarar keltiradi. Bu kapalak geografik joylarga bog‘liq holda may oyi oxiri va iyun oyi boshlarida uchib chiqadi (<span style="letter-spacing:0.2pt"> Markaziy <span style="letter-spacing:normal"><span style="letter-spacing:0.2pt">Osiyoda may oyi oxirlarida). Ommaviy uchish asosan kechki payt boshlanadi. Urug‘langan urg‘ochi kapalak terak va tol po‘stloqlari yoki bargining ostki tomoniga 150-200 tadan to‘p-to‘p qilib tuxum qo‘yadi.</p><p align="justify" ><span style="letter-spacing:normal">Urg‘ochi kapalak tuxumlarni shirasimon suyuqlik bilan qoplaydi. Suyuqlik tezda quriydi va qattiq himoya vositasiga aylanadi. 8-9 kundan keyin tuxumlardan qurtchalar chiqadi va barg bilan oziqlanishni boshlaydi. Qurtlar iyul-avgust oylarida kishlash uchun daraxt po‘stloqlariga kiradi (Markaziy <span style="letter-spacing:normal">Osiyo sharoitida sentyabr oyida). Kelgusi yil bahor oylarida oziqlanish uchun yana daraxt barglariga qaytadi. Ular bahor va yozda ko‘pgina daraxtlarni qattiq zararlaydi. Markaziy <span style="letter-spacing:normal">Osiyoda iyul oyining oxirlarida g‘umbakka aylanadi. G‘umbakning rivojlanish bosqichi taxminan 10-12 kun davom etadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Esfen-alfa, 5 % em.k 1,0 l/ga, Atilla, 5% em.k. 0,5-0,8 l/ga, Siperfos 55% k.e. -1,0 l/ga yoki Bagira 20% s.e.k. - 0,3 l/ga preparatlari qo‘llaniladi. Karbofos 50% em.k. 0,6-1,0 l/ga qo‘llaniladi<i>. </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Biologik kurash: </b> </i>Mikrobiopreparat Prestij plyus, em.k. 3,0-4,0 l/ga, Lepipobaktotsid, J (Ba-2000 yeA/g) 2-3 A mikrobiopreparati qo‘llash.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><b><span style="letter-spacing:0.2pt">Tol kapalagi va uning lichinkasi</b></p><p></div>`;  
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
        source={require("./m_html_43fc05e8d7ea01a5.jpg")}/>

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
        source={require("./m_html_bb4197d86c01c4ef.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
