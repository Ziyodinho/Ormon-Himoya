import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style=""><span style="letter-spacing:-0.3pt"><b>Yog‘ochxo‘r kapalak </b><span style=""><span style="letter-spacing:-0.3pt"><b>–  </b><i><span style=""><span style="letter-spacing:-0.3pt">Zeuzera pyrina </i><span style=""><span style="letter-spacing:-0.3pt"><i><span style=""><span style="letter-spacing:-0.3pt">L. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style=""><span style="letter-spacing:-0.3pt">Yog‘ochxo‘r kapalak<span style=""><span style="letter-spacing:-0.3pt"><b>-  </b><span style=""><span style="letter-spacing:-0.3pt">(древесница въедливая <span style=""><span style="letter-spacing:-0.3pt">-<i><span style=""><span style="letter-spacing:-0.3pt">Zeuzera pyrina </i><span style=""><span style="letter-spacing:-0.3pt">L<i><span style=""><span style="letter-spacing:-0.3pt">. </i><span style=""><span style="letter-spacing:-0.3pt">)<span style=""><span style="letter-spacing:-0.3pt"><span ><span style=""><span style="letter-spacing:-0.3pt">Ye<span style="letter-spacing:normal">vropa bo‘ylab keng tarqalgan. Rossiyaning yevropa qismida, Qrimda, Kavkazda ham ko‘p uchraydi. Shuningdek Janubiy Afrika, Janubiy-Sharqiy Osiyo, Uzoq Sharq va Shimoliy Amerikada keng uchrab mevali va manzarali daraxtlarning asosiy ko‘shandasi hisoblanadi. <span style="letter-spacing:normal">Bu zararkunandaning Markaziy Osiyoda uchrashi adabiyotlarda qayd qilinmagan bo‘lsada, tarqalgan areali juda katta bo‘lgani uchun keyingi yillarda Markaziy Osiyo o‘rmonlarida paydo bo‘lish ehtimoli yo‘q emas.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;"><span style=""><span style="letter-spacing:-0.3pt"><span style=""><span style="letter-spacing:-0.3pt"><b>Yog‘ochxo‘r kapalak </b><span style=""><span style="letter-spacing:-0.3pt"><b> </b><span style=""><span style="letter-spacing:-0.3pt">-<i><span style=""><span style="letter-spacing:-0.3pt"><b>Zeuzera pyrina </b> </i><span style=""><span style="letter-spacing:-0.3pt"><b>L </b><i><span style=""><span style="letter-spacing:-0.3pt"><b>. </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt"><span >Bu kapalakning tanasi, qanotlari moviy rang va tovlanib turuvchi xolchalar bilan qoplangan. Kapalakning qanotlari 50-70 mm. Orqa qanotlar holchalari xira va mayda-mayda. Ko‘kragi oppoq, qorni qoramtir-ko‘kish va oq xolchalari bor. Erkagi urg‘ochisiga nisbatan maydaroq, tanasi 25-30, hilpirab turuvchi qanotlari 50- 55 mm. Mo‘ylovining pastki tomoni patli. Urg‘ochisining tanasi 45-50, qanotlari 60-70 mm. Mo‘ylovlari anchagina qisqa. Qorni tuxum saqlashga moslashgan yirik. Tuxumlari och-sariq yoki pushti rang, shakli tsilindrsimon, ikki tomoni qisman yumaloq. Kapalak qurti (lichinkasi) sariq rangda, katta yoshli qurtlari to‘q-sariq rangda. Tana shaklining uzunligi 50-60 mm<span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt">. <span style="letter-spacing:normal"><span style="letter-spacing:-0.3pt"><span style="letter-spacing:normal">Yog‘ochxo‘r<span style="letter-spacing:normal">kapalak ko‘pchilik daraxtlarga, jumladan shumtol, zarang, kashtan, nok va olma daraxtlariga zarar keltiradi. Kapalak tabiatda, geografik joylashuviga bog‘liq holda iyul oyining ikkinchi yarmi va avgust oyida paydo bo‘ladi. Urug‘langan ona kapalak bargli daraxt po‘stloqlariga bittadan tuxum qo‘yadi. Qulay sharoitda 14-15 kundan keyin tuxumdan qurt (lichinka)lar chiqadi va barglarni kemira boshlaydi. O‘zining ma’lum rivojlanish davriga yetgandan keyin (8-10 kun) esa barglarni tark etadi. Qurtlar keyingi hujumni daraxt tanasiga qaratadi va daraxt tanasini kemirib (teshib) ichki qismlariga kirib ketadi. Daraxt tanasini ham gorizontal ham vertikal tomonlarga teshib o‘tib, tananing ichki tomonidan keng teshik yo‘llar hosil qiladi va daraxt tomirlari (suv yo‘llari)ni kesib tashlaydi. Natijada daraxt zaiflashadi va qurib qoladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><span style="letter-spacing:-0.3pt"><i><b>Agrotexnik tadbirlar </b> </i><span style="letter-spacing:-0.3pt"><i><b>i </b> </i><span style="letter-spacing:-0.3pt">o‘z vaqtida amalga oshirish. mineral ug‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Tuproqda turli-xil tuzlarning miqdori ortib ketishini ol<span style="letter-spacing:-0.3pt">d<span style="letter-spacing:-0.3pt">ini olish. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>daraxtlarga Karate, 5% em.k. preparatdan gektariga 0,5 l, Fufanon, 57 % em.k., 3,0 l/ga, 3,0 l/ga, Siperfos,55% k.em. 1,0 l/ga yoki Bagira 20 % s.e.k.,0,3 l/ga, Karbofos,50 % em.k. 0,6-1,0 l/gapreparatlari qo‘llaniladi.</p></div>`;  
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
        source={require("./i_html_a93c0bf831736410.jpg")}/>

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
        source={require("./i_html_2689aed97e824441.jpg")}/>

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
        source={require("./i_html_f68133ff3b66e015.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
