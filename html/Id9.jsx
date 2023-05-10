import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify"><b>Qarag‘ay xermesi - Pineus strobi</b><p  align="justify" > <b>Qarag‘ay xermeslarining –  </b> asosiy ozuqasi bo‘lib qarag‘ay daraxtlarining har hil turlari: ( Pineus ); oddiy ( P. Silvestris   L), qrim ( P. Pallasiana   Lamb.), qalmoqsimon ( P.Hamada D.   Sosn.) tog‘ ( P. Montana Mill.) va boshqa qarag‘aylar x izmat qiladi.  Xermeslarning to‘liq rivojlanish shakli bo‘lmagan tur, lichinkalari va yoshi kattaroq fazadagilari chiqazadigan oq, paxtasimon qoplamasi bilan ko‘rinib turadi. Xermeslar daraxtlarning tanalaridagi, novdalardagi, shoxlar va qubbalardagi suyuqlik bilan oziqlanadi. Yillik hayot  davri , uyli sharoitlarida 5-6 avlodlardan iborat bo‘ladi va tuxum qo‘yadigan urg‘ochilarning uchta shakllarini o‘z ichiga qamrab oladi; soxta asoschilar, qanotsiz ko‘chib o‘tuvchilar va qanotli joylashuvchilar. Amfigonli avlod (erkaklari va jinsiy urg‘ochilari) yo‘qdir.<p>Katta yoshli soxta asoschilarning qurtlari oq paxtasimon momiq tuklarning ostida oziqlanadigan joyda qishlaydi. Bahorda (aprel-may) po‘st tashlagandan soxta asosga, urg‘ochilarga aylan adi. Ular issiq sharoitida 13-16 kun yashaydi va shu vaqt ichida 12-64 ta tuxum qo‘yadi. Ob-havo sharoitlari va joyning  geografik joylashishga qarab, embrional rivojlanishi 7-12 kun davom etadi. Soxta asoschilarning qurtlaridan urg‘ochilarning ikki shakllari rivojlanadi qanotsiz ko‘chib yuruvchilar va qanotli joylashuvchilar. Birinchilari o‘sha daraxtni o‘zida qoladi va 4-5 avlodlarga asos soladi (o‘ziga o‘xshash urg‘ochilarga); ularning vazifasi - proportsiyaning sonini ko‘paytirishdir. Ikkinchilari havoning oqimi bo‘yicha qo‘shni qarag‘aylarga uchib o‘tib,igna bargiga tuxumlari ni qo‘yadi. Yangi koloniyalarga asos soladi. Ular turning kengayishiga yordam beradi.Bu zararkunandalar bilan zararlangan qarag‘aylar daraxtlari kuchsizlanadi, ularda o‘sish keskin pasayadi. Novdalari qiyshayadi, ulardagi – igna barg rivojlanmaydi, yoki normal rivojlangani yarmisigacha o‘sadi. Shiralarning –Pemrhigus immunis L. turi,  bu tur ikki uyli. Birinchi–xo‘jayini terak (Populus nigra ), (P.ryramidalis ), ikkinchisi – sutlama, (Euphorbia fascata  L) qarag‘ay (Pineus pini) va boshqa turlar.Yangi rivojlangan bir yillik novdalar bilan oziqlanadi, u yerda yirik (diametri 3 sm gacha) qalin devorchali bujg‘unlarni galida vujudga kelishiga sababchi bo‘ladi. Bu novdada ular 7-9 tadan bo‘ladi. Bunday novdalar o‘sishdan orqada qoladi, ulardagi barglar yaxshi rivojlanmay qoladi, ertaroq sarg‘ayib to‘kiladi. Har yili (3-5 yil davomida) bu tur bilan zararlangan o‘simliklarni kuchsizlantiradi va qurishga olib keladi.</p><p  align="justify" ><b>Kurash choralari: </b></p><p  align="justify" ><b>Agrotexnik kurash: </b>  mineral o‘ g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol d ini olish qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" ><b>Biologik kurash: </b> <b> </b>Oltinko‘z lichinkalarini 1:5, 1:10 va 1:15, nisbatda tarqatiladi. Mikrobiopreparatlardan Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" > <b>Kimyoviy kurash: </b>    Super-Tayson, 20 % n.kuk., 0,3-0,5 kg/ga ,  Atilla-Super 10 % em.k .,  0,3-0,4 l/ga , Ovipron 2000 em.k. (800 g/l), 10-15 l/ga,  Konfidor, 20 % k.e. 0,2 -0,3 l/ga. ,  Bagira, 20 % em.k., 0,3-0,4 l/ga, Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga, Imitrin, 20 % sus.k., 0.3-0.4 l/ga,Danadim, 40% em.k.  va boshqapreparatlarni qo‘llash.<p  align="center" ><b>Qarag‘ay </b><b>( </b> P.Pallasiana  Lamb .)<b> </b><b>ning xermes </b><b>lar bilan zararlanishi </b></p><p  align="justify" >Ular piramidasimon va qora teraklarning yosh daraxtlarini kuchli zararlantiradi, u yerdan o‘simliklar bilan boshqa daraxtzorlarga tarqaladi.Kedrli qarag‘aylar hamma vaqt xermeslar bilan zararlanadi, shuningdek so‘ruvchi zararkunandalardanajralgan shakarli yopishqoq moddalarga o‘tiruvchi zamburug‘lar bosadi, daraxtlar o‘z manzarali ko‘rinishini yo‘qotadi. Buning oqibatida daraxtlar zamburug‘li kasalliklar bilan kuchli zararlanib nobud bo‘ladi. </p><p  align="justify" >Xermeslarning qattiq qatlami alohida o‘simtalar bilan qoplanganligi va insektitsidlarni o‘tkazmasligi sababli bu hasharotlarga qarshi kurashish juda murakkab jarayon bo‘lib, hisoblanadi. O‘simliklar suyuqligiga ta’sir qiluvchi preparatlar bilan ommaviy zararlanish davrida ta’siri kuchliroq bo‘ladi.</p><p  align="center" >`;
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
        source={require("./i_html_5083e5b993234d3.jpg")} />
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
        source={require("./i_html_9543fdfeea6a9841.jpg")}/>

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
        source={require("./i_html_3c97dc8055673077.jpg")} />

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
        source={require("./i_html_a6d340da0f79e1e6.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
