import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b><span style="">Amerika oq kapalagi</b><span style=""><i> </i><span style=""><b>( </b><span style="">Американская белая бабочка<span style=""><span style=""><i>- </i><span style=""><i> </i><i><span style="">Iivphantria </i><i><span style="">sipea </i><i><span style="">Drury </i><b><span style="">)</b><b><span style="">. </b><b><span style=""></b><span style="letter-spacing:normal">Amerika oq kapalagi ikkinchi Jahon Urushi vaqtida yevropaga Shimoliy Amerikadan olib kelingan. Bu hasharot 200 dan ortiq daraxt va buta turlarini zararlaydi, jumladan, olma, nok, olxo‘ri, olcha, gilos, behi, yong‘oq bo‘zina, ryabina (chetan), zarang, lipa va boshqa keng yaproqli daraxt va butalarga jiddiy zarar keltiradi. <span style="letter-spacing:normal"><span >Shamol, suv va transport (ekish materiallari bilan) orqali uzoq masofalarga tarqalmoqda. Bu zararkunanda har xil iqlim sharoitiga moslashuvchan bo‘lib ko‘p hududlarga tarqalmokda. <span style="letter-spacing:normal"><span style="letter-spacing:normal"><span >Tangaqanotlilar turkumiga mansub hasharot. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal">Zararkunanda Respublikada k<span style="letter-spacing:normal"><span >arantin ob’ekt<span style="letter-spacing:normal">hisoblanadi<span style="letter-spacing:normal"><span >. Bir yilda ikki avlod beradi. Kechasi uchadigan oq kapalak. Ba’zan qornining orqa tomonida va qanotlarida qora nuqtalari bo‘ladi. Tanasi qalin oq tuklar bilan qoplangan. Urg‘ochisin<span style="letter-spacing:normal">i<span style="letter-spacing:normal"><span >ng qanotlari 25-36 mm, tanasi oq, mo‘ylovlari qora yoki oq oyoqlari sariq. Tuxumlar<span style="letter-spacing:normal">i<span style="letter-spacing:normal"><span >yumaloq, och yashil rangli, diametri 0,5-0,7 mm. Kichik yoshdagi lichinkalari och sariq katta yoshlilari esa baxmalsimon-jigarrang. Katta yoshli lichinkalarining tana uzunligi 30-35 mm. Tanas<span style="letter-spacing:normal">i<span style="letter-spacing:normal"><span >qalin uzun-uzun qora tuklar bilan qoplangan. Lichinkalar<span style="letter-spacing:normal">i<span style="letter-spacing:normal"><span >ning yon tomonida sariq <span style="letter-spacing:normal">chiziqlari<span style="letter-spacing:normal"><span >bor.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal">G‘umbagi avval sariq, keyinroq esa to‘q-jigarrangga aylanadi. Uzunligi 10-15mm. G‘umbaklari daraxt yoriqlarida, qurigan o‘t-o‘lanlarda, yashiklarda, yer yuzida, kesak va toshlar tagida qishlab chiqadi. May va iyun oylariga borib g‘umbaklardan yosh kapalaklar uchib chiqadi va daraxt barglarining ostki tomoniga 300-500 tadan, to‘p-to‘p qilib tuxum ko‘yadi. Bitta kapalak bir mavsumda 1500-2000 tagacha tuxum qo‘yadi. 10-15 kundan keyin tuxumlardan yosh lichinkalar chiqadi. Yosh lichinkalar barglarning yumshoq qismi bilan oziqlanadi. Katta yoshli lichinkalar esa daraxt barglarini butunlay yeb qo‘yadi. Lichinkalar koloniya bo‘lib yashaydi. Ular 45-50 kun davomida oziqlanadi. Shundan so‘ng ular daraxt yoriqlari va boshqa yashirin joylarda g‘umbakka aylanadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Iyul va avgust oyiga borib ikkinchi avlod vakillarining kapalaklari paydo bo‘ladi. Ikkinchi avlod urg‘ochi kapalaklari yana ham serpusht bo‘ladi. Ular 2500 tagacha tuxum qo‘yadi. Ikkinchi avlod lichinkalari kuzgacha oziqlanadi va g‘umbakka aylanadi. Ba’zi yoz issiq kelgan yillari uch avlod berishi ham mumkin. Uchinchi avlod lichinkalarining oziqlanishga ulgurmaganlari nobud bo‘ladi. <span style="letter-spacing:normal"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><i><b>Qarshi kurash choralari:  </b> </i></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><i><b>Kimyoviy kurash </b> </i><b>u </b>sul sifatida daraxtlarga Siperfos 55% k.e. -1,0 l/ga yoki Bagira 20% s.e.k. - 0,3 l/ga yoki Karbofos,50% em.k. 0,6-1,0 l/ga preparatidan biriniqo‘llash.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><b><span style=""><span >Amerika oq kapalagi</b><b><span style="">va lichinkasi</b></p><p></div>`;  
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
        source={require("./m_html_2b14c16e34fe875f.jpg")}/>
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
        source={require("./m_html_ba172e801835008d.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
