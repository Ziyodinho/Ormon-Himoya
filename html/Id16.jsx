import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><b>Amerika oq kapalagi</b><i> </i><i>– </i><i>Iivphantria </i><i>sipea </i><i>Drury. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;">Amerika oq kapalagi<i> </i><i>- </i><b>( </b>Американская белая бабочка<i>- </i><i> </i><i>Iivphantria </i><i>sipea </i>Drury.<b>)</b><b>. </b><b></b>Amerika oq kapalagi ikkinchi Jahon Urushi vaqtida yevropaga Shimoliy Amerikadan olib kelingan. Bu hasharot 200 dan ortiq daraxt va buta turlarini zararlaydi, jumladan, olma, nok, olxo‘ri, olcha, gilos, behi, yong‘oq bo‘zina, ryabina (chetan), zarang, lipa va boshqakengyaproqlidaraxt va butalarga jiddiy zarar keltiradi. <span >Shamol, suv va transport (ekish materiallari bilan) orqali uzoq masofalarga tarqalmoqda. Bu zararkunanda har-<span >xil iqlim sharoitiga moslashuvchan bo‘lib ko‘p hududlarga tarqalmokda. <span >Tangaqanotlilar turkumiga mansub hasharot. Karantin ob’ekt. Bir yilda ikki avlod beradi. Kechasi uchadigan oq kapalak. Ba’zan qornining orqa tomonida va qanotlarida qora nuqtalari bo‘ladi. Tanasi qalin oq tuklar bilan qoplangan. Urg‘ochisini<span >ng qanotlari 25-36 mm, tanasi oq, mo‘ylovlari qora yoki oq oyoqlari sariq. Tuxumlari<span >yumaloq, och yashil rangli, diametri 0,5-0,7 mm. Kichik yoshdagi lichinkalari och sariq katta yoshlilari esa baxmalsimon-jigarrang. Katta yoshli lichinkalarining tana uzunligi 30-35 mm. Tanasi<span >qalin uzun-uzun qora tuklar bilan qoplangan. Lichinkalarning yon tomonida sariq chiziqlari<span >bor.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;">G‘umbagi avval sariq, keyinroq esa to‘q-jigarrangga aylanadi. Uzunligi 10-15mm. G‘umbaklari daraxt yoriqlarida. Qurigan o‘t-o‘lanlarda, yashiklarda, yer yuzida, kesak va toshlar tagida qishlab chiqadi. May va iyun oylariga borib g‘umbaklardan yosh kapalaklar uchib chiqadi va daraxt barglarining ostki tomoniga 300-500 tadan, to‘p-to‘p qilib tuxum ko‘yadi. Bitta kapalak bir mavsumda 1500-2000 tagacha tuxum qo‘yadi. 10-15 kundan keyin tuxumlardan yosh lichinkalar chiqadi. Yosh lichinkalar barglarning yumshoq qismi bilan oziqlanadi. Katta yoshli lichinkalar esa daraxt barglarini butunlay yeb qo‘yadi. Lichinkalar koloniya bo‘lib yashaydi. Ular 45-50 kun davomida oziqlanadi. Shundan so‘ng ular daraxt yoriqlari va boshqa yashirin joylarda g‘umbakka aylanadi. </p><p  align="justify" >Iyul va avgust oyiga borib ikkinchi avlod vakillarining kapalaklari paydo bo‘ladi. Ikkinchi avlod urg‘ochi kapalaklari yana ham serpusht bo‘ladi. Ular 2500 tagacha tuxum qo‘yadi. Ikkinchi avlod lichinkalari kuzgacha oziqlanadi va g‘umbakka aylanadi. Ba’zi yoz issiq kelgan yillari uch avlod berishi ham mumkin. Uchinchi avlod lichinkalarining oziqlanishga ulgurmaganlarinobud bo‘ladi.</p><p  align="justify" ><b>Kurash choralari: </b></p><p  align="justify" ><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" ><i><b>Kimyoviy kurash: </b> </i><i> </i>Tayfun plyus, 10 % n.kuk. 0,5 – 0,6 kg/ga,<i> </i>Nurell-D, 55 % em.k., 1,5 l/ga<i>, </i>Fufanon, 57 % 1,5-2,0 l/ga,<i> </i>Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Aykon miks, 20 % s.d.g. 0,4 kg/ga, Varrior 13% s.e.k., 0,1-0,2 l/ga, sarf – me’yorda qo‘llash.</p></div>`;  
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
        source={require("./i_html_66133cc8f27d5125.jpg")}/>

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
        source={require("./i_html_96d6e68fde886198.jpg")}/>

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
        source={require("./i_html_80821c45f2a0312b.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
