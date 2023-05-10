import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div><p align="justify" ><b>V</b><b>ergulsimon qalqondor </b>(запятовидная щитовка - <i>Lepidosaphes uimi  </i>L.).O‘zbekiston o‘rmonzorlarida keng tarqalgan bo‘lib, daraxt tanasi va novdalariga lichinkalari va urg‘ochisi yopishib oladi va daraxt shirasini so‘radi. Bu hammaxo‘r hasharotlar turkumiga kirib, archa, tuya, yel, terak, tol, yong‘oq, bodom, shumtol (yasen)va boshqa bir qancha daraxtlarni zararlaydi. Bu hasharot tuxumlik stadiyasida urg‘ochi zotlarning eski qalqoni ostida,po‘stloqda qishlaydi. Bahorda havo isishi bilan, ya’ni aprel oxiri may oyining boshida, 1 avlod (yozdagi) lichinkalar chiqa boshlaydi va daraxt tanasida, novdasida xarakat qiladi va o‘ziga joy tanlaydi. 2 marta po‘st tashlagandan keyin urg‘ochisi jinsiy voyaga yetadi. Erkagi esa bu vaqtda pronimfa, nimfa davrini o‘tab,keyin voyaga yetgan hasharot bo‘ladi. Bitta urg‘ochisi o‘rtacha 50-80, ko‘pi bilan 120 ta tuxum qo‘yadi. Ikki marta avlod beradi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;"><b>V</b><b>ergulsimon qalqondor -  </b><i><b>Lepidosaphes uimi  </b> </i><b>L </b><b>. </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" ><i><b>Agrotexnik kurash: </b> </i>mineralo‘g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" ><i><b>Biologik kurash: </b> </i><b> </b>Mikrobiopreparatlardan Bioslip BV, em.k. 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" ><i><b>Kimyoviy kurash: </b> </i><i> </i>Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga, Imitrin, 20% sus.k., Danadim, 40% em.k.,1,5-2,5 l/ga, Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Atilla-Super, 10% em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, em.k. 10-15 l/ga, Super-Tayson 20 % n.kuk., 0,3-0,5 kg/ga, Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % em.k. 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga va boshqapreparatlarni o‘suv davrida qo‘llash.</p><p></div>`;  
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
        source={require("./i_html_25be704201c06cb4.jpg")} />

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
        source={require("./i_html_d6a3410f4f11ac76.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
