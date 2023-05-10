import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;text-indent:1.5cm;"><b>Kichik terak oynachisi - </b><b> </b>(Стеклянница малая тополевая -<i>Paranthrene tabanifonnis </i>). Sobiq Ittifoq o‘rmon hududlarida, Kavkaz, Sibir, Aljir, G‘arbiy yevropa, Shimoliy Mongoliya, Kichik Osiyo, Suriya, O‘rta Osiyo va Qozog‘istonning tog‘li zonalarida tarqalgan.</p><p align="justify" style="line-height:115%;text-indent:1.5cm;">Bu kapalakning qanotlari o‘lchami 30-35 mm. Oldingi qanotlari jigar rang tukchalar bilan qoplangan. Orqa qanotlari yaltiroq. Lichinkalar oqish-sariq, orqa tomonida qoramtir yo‘l-yo‘l chiziqli va alohida-alohida qoramtir tuklari bor. Boshi qora jigar rang. Voyaga yetgan lichinkalari o‘rtacha 20 mm bo‘ladi. G‘umbagi sariq-jigar rang.</p><p align="justify" style="line-height:115%;text-indent:1.5cm;">Kichik terak oynachisi terakning barcha turlari va tol daraxtlariga zarar keltiradi. Kapalaklar tabiatda geografik joylashuviga bog‘liq holda may oyidan avgust oyi oxirlarigacha paydo bo‘ladi. Urug‘langan kapalak daraxt po‘stloq yoriqlariga tuxum qo‘yadi. Ular ko‘pincha bittadan, ba’zan 200 tagacha tuxum qo‘yadi. Oradan 12-14 kun o‘tib tuxumlardan yosh lichinkalar chiqadi va po‘stloq ostini kemira boshlaydi. Ular daraxt tanasi (novdalar)ning o‘rta qismini teshib xandak yo‘llar hosil qilib daraxtga zarar yetkazadi. Kuzga borib barglar to‘kila boshlaganda lichinkalar oziqlanishni to‘xtatadi va o‘z yo‘llarining oxiriga (kengaygan joyiga) kelib qishki uyquga ketadi. Ular kelgusi yil aprel may oylariga borib, daraxtlar barg yoza boshlaganda uzayadi (o‘sadi) va markaziy yo‘lni kengaytiradi. </p><p align="justify" style="line-height:115%;text-indent:1.5cm;">Lichinkalar hosil qilgan daraxt ichi xandak (teshik)larining uzunligi o‘rtacha 50 sm bo‘ladi. Ba’zan 1-1,5 m ga ham yetishi mumkin. Lichinkalar oziqlanishi butun yoz bo‘yi va kuzgacha davom etadi. Ikkinchi marta (voyaga yetgan) lichinkalar yana qishlaydi. Kelgusi yil aprel may oylariga borib, ular g‘umbakka aylanadi. Oradan ma’lum muddat o‘tib g‘umbakdan yosh kapalakchalar uchib chiqadi. Bu kapalakning generatsiyasi markaziy mintaqalarda ikki yillik, janubiy viloyatlarda esa bir yillik.</p><p align="justify" style="line-height:115%;text-indent:1.5cm;">Bu zararkunandaning tabiatga uchib chiqishi O‘rta Osiyo sharoitida may oyi oxirlari va iyun oylarida boshlanadi. V.I.Plotnikov va I.KMaxnovskiy ma’lumotlariga ko‘ra bu kapalak ko‘pgina ko‘chatzor va terakzorlarga 20% dan 50% gacha zarar yetkazilganligi qayd qilingan.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari </b> </i><i>: </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash: </b> </i>Tifuz, 48% sus.k. 0,4-0,5 l/ga, Dimilin, 48% sus.k. 0,5 l/ga va Difuz 48 % li sus.k. 0,5-0,7 l/ga preparatlari bilan ishlov beriladi.</p><p align="center" style="line-height:115%;text-indent:0cm;margin-bottom:0.21cm;"><b>Kichik terak oynachisi </b></p><p></div>`;  
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
        source={require("./m_html_98494df5b7d2b00d.jpg")} />

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
        source={require("./m_html_31374c262c71060f.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
