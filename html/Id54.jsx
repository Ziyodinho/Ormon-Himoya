import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div>  <p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Do‘lana kapalagi </b>- <span style="">(Боярышница<span style=""><i><span style="">- </i><i><span style=""> </i><i><span style="">Aporia crataegi  </i><span style="">L<span style="">.<i><span style="">) </i><i><b><span style=""></b> </i><span style="">y<span style="letter-spacing:normal">irik oq kapalak. Do‘lana kapalagi sobiq Ittifoq xududida, G‘arbiy yevropa, Uzoq Sharq, Yaponiya, Koreya, Xitoy, O‘zbekiston, Tojikiston, Qirg‘iziston va Qozog‘istonda keng tarqalgan. <span style="letter-spacing:normal"><span style="letter-spacing:normal"><span >Qanotlari o‘lchami 50-70 mm, oq rangli, qora tomirlari bor. Lichinkalari qora-kulrang. Tana uzunligi 40-45 mm bo‘lib, tuklar bilan qoplangan. Tuxumi va g‘umbagi cho‘zinchoq, sarg‘ish rangli.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Iyun oyining ikkinchi yarmida tuxumlardan qo‘ng‘ir-kulrang lichinkalar chiqadi. Ular daraxt barglarining yumshoq qismini yeb bitkazadi, faqat barg tomirlari qoladi. Zararlangan barglar qorayib qurib qoladi. Iyul oyi oxirlariga borib lichinkalar qurigan barglar orasida pilla o‘raydi va shu pillasi ichida qishlaydi. Pilla o‘ralgan barglar daraxt novdasiga mustahkamlangan bo‘ladi va butun qish davomida osilib turadi. Har bir uyachada 40 tagacha lichinkalar bo‘lishi mumkin. Kelgusi yil mart oyi oxirlarida va aprel oyi boshlarida yana ularning hayot faoliyati boshlanadi. <span style="letter-spacing:normal"><span >Daraxtlar novda yoza boshlaganda lichinkalar uyalarni tark etadi va yosh novdalar bilan oziqlana boshlaydi. Aprel oyi oxirlarida ular g‘umbakka aylanadi. May oyi o‘rtalarida esa g‘umbaklardan yosh kapalaklar uchib chiqadi. Urg‘ochi kapalaklar may oyi oxirlarida barglarning ostki yoki ustki tomoniga tuxum qo‘yadi. Iyun oyi ikkinchi yarmida tuxumlardan yana lichinkalar chiqadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Do‘lana kapalagining lichinkalari ko‘pgina, jumladan olma, nok, olxo‘ri, o‘rik, behi, do‘lana va shumurt kabi daraxtlarning barglarini kemirib bog‘dorchilik xo‘jaliklariga katta zarar keltiradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Esfan-alfa, 5% em.k., 1,0 l/ga, Siperfos 55% k.e. -1,0 l/ga., Karbofos 50% em.k. 0,6-1,0 l/ga., Bi-58(yangi), 40% em.k. 1,0-1,5 l/gava Bagira 20% s.e.k. - 0,3 l/ga., yoki preparatidan biri qo‘llaniladi. </p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:normal"><b>Do‘lana kapalagi </b></p><p></div>`;  
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
        source={require("./m_html_5b9b8d24f68d7a1e.jpg")} />

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
        source={require("./m_html_10098ac7619112c6.jpg")} name="Рисунок 146" align="bottom" width="269" height="248" border="0"/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;