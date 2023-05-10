import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><b>Vergulsimon qalqondor </b><span style="letter-spacing:-0.3pt">(запятовидная щитовка - <span style="letter-spacing:-0.3pt"><i>Lepidosaphes uimi L.) </i><span style="letter-spacing:-0.3pt"><i>. </i><span style="letter-spacing:-0.3pt">O‘zbekistan o‘rmonzorlarida keng tarqalgan bo‘lib, daraxt tanasi va novdalariga lichinkalari va urg‘ochisi yopishib oladi va daraxt tanasi shirasini so‘radi. </p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt">Bu hammaxo‘r <span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">asharotlar turkumiga kirib, <span style="letter-spacing:-0.3pt">archa, tuya, yel, <span style="letter-spacing:-0.3pt">terak, tol, yong‘oq, bodom, <span style="letter-spacing:-0.3pt">shumtol (<span style="letter-spacing:-0.3pt">yasen<span style="letter-spacing:-0.3pt">)<span style="letter-spacing:-0.3pt">va boshqa bir qancha daraxtlarni zararlaydi. Bu <span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">asharot tuxumlik stadiyasida <span style="letter-spacing:-0.3pt">urg‘ochi zotlarning <span style="letter-spacing:-0.3pt">eski qalqoni ostida<span style="letter-spacing:-0.3pt">,<span style="letter-spacing:-0.3pt">po‘stloqda qishlaydi. Bahorda havo isishi bilan, ya’ni aprel oxiri may oyining boshida, 1 avlod (yozdagi) lichinkalar chiqa boshlaydi va daraxt tanasida, novdasida xarakat qiladi va o‘ziga joy tanlaydi. 2 marta po‘st tashlagandan keyin urg‘ochisi jinsiy voyaga yetadi. Erkagi esa bu vaqtda pronimfa, nimfa davrini o‘tab<span style="letter-spacing:-0.3pt">,<span style="letter-spacing:-0.3pt">keyin voyaga yetgan hashar<span style="letter-spacing:-0.3pt">o<span style="letter-spacing:-0.3pt">t bo‘ladi. Bitta urg‘ochisi o‘rtacha 50-80, ko‘pi bilan 120 ta tuxum qo‘yadi. Ikki marta avlod beradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari. </b> </i><i> </i></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i>Erta bahorda yoki kech kuz yoki, daraxt kurtak chiqarmasdan oldin, qishlab qolgan zararkunandalarga qarshi vegetatsiya davrida Preparat – RR-1em.k. 10-15 l/ga, Ovipron 2000 (800 g/l em.k.) 10-15 l/ga yoki Bi-58 (yangi), 40% em.k. 2,0 l/ga, preparatlarini qo‘llash. Daraxtlar o‘sish davrida: karbofos,50% em.k.1,0-3,0 l/ga. preparatlarini qo‘llash.</p><p></div>`;  
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
        source={require("./m_html_32c321f864ea53c6.jpg")} />

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
        source={require("./m_html_25be704201c06cb4.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
