import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:-0.3pt"><b>G‘arb tuyasi </b><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt"><b>qalqondori </b><span style="letter-spacing:-0.3pt">- <span style="letter-spacing:-0.3pt"><i>Parthenolecanium fletcheri Cock. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:-0.3pt">G‘arb tuyasi qalqondori<span style="letter-spacing:-0.3pt"><b> </b><span style="letter-spacing:-0.3pt">(<span style="letter-spacing:-0.3pt"><i>Parthenolecanium fletcheri Cock. </i><span style="letter-spacing:-0.3pt">) - <span style="letter-spacing:-0.3pt">Coccidae oilasi mansub ixtisoslashgan fitofag bo‘lib, u sarv oilasiga mansub igna bargli daraxtlardan tuya, kiparis, shuningdek, oddiy archa, biota va boshqalarni zararlaydi. Bu tur birinchi marta o‘tgan asrning 30-yillarida Markaziy yevropa (Polsha), Boltiqbo‘yi davlatlari, Rossiyaning qora dengiz mintaqasida qayd etilgan.Tuya shiralarini igna bargli daraxtlar va butazorlarda uchratish mumkin. Bu shira jiggar rangda bo‘lib, novdaning pastki qismida va shoxlarida joylashadi. Daraxt sarg‘ayib va igna barglari to‘kila boshlasa, bunda tuya shirasi bilan zararlanganligini bilish mumkin. Shiralar to‘da (koloniya) bo‘lib yashaydi, ammo ularni yo‘qotish ancha mushkul.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:-0.3pt">G‘arb tuyasi qalqondori igna barglar hamda novdalarining pastki va yuqori tomonlarida joylashib daraxt tanasidagi suyuqlik bilan oziqlanib, daraxtlarni kuchsizlantirib tashqi antropogen omillariga chidamliligi pasaytirishi natijasida qurish holatiga olib keladi. Urg‘ochi zotining tanasi yarim sharsimon shaklda bo‘lib rangi sariq-jigarrang kattaligi 3 mm keladi. Bu <span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">asharot tuxumlik stadiyasida <span style="letter-spacing:-0.3pt">urg‘ochi zotlarning <span style="letter-spacing:-0.3pt">eski qalqoni ostida<span style="letter-spacing:-0.3pt">,<span style="letter-spacing:-0.3pt">po‘stloqlar yoriqlarida qishlaydi. Bahorda havo isishi bilan, ya’ni aprel oxiri may oyining boshida, 1 avlod lichinkalar chiqa boshlaydi va daraxt tanasida, novdasida harakat qiladi va o‘ziga joy tanlaydi. 2 marta po‘st tashlagandan keyin urg‘ochisi jinsiy voyaga yetadi. Erkagi esa bu vaqtda pronimfa, nimfa davrini o‘tab<span style="letter-spacing:-0.3pt">,<span style="letter-spacing:-0.3pt">keyin voyaga yetgan hashar<span style="letter-spacing:-0.3pt">o<span style="letter-spacing:-0.3pt">t bo‘ladi. Urg‘ochi zotlari o‘rtacha 300-700 tuxum (1300 tagacha ) qo‘yadi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. <span style="letter-spacing:-0.3pt">Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i><b> </b>Mikrobiopreparatlardan Bioslip BV, 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Kalito, 48% sus.k., 0,1-0,15 l/ga, Proper, 11% m.d.k., 0,25 l/ga,<i> </i>Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga, Imitrin, 20 % sus.k., 0.3-0.4 l/ga,0.3-0.4 l/ga, Danadim, 40 % em.k., Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Atilla-Super, 10 % em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, em.k. 10-15 l/ga, Super-Tayson 20 % n.kuk., 0,3-0,5 kg/ga, Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % k.e. 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga, va boshqapreparatlarni o‘suv davrida qo‘llash. </p><p></div>`;  
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
        source={require("./i_html_3d7449f4061ee966.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
